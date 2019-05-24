export const checkTransaction = ({
  reject,
  resolve,
  txHash,
  web3,
}) => {
  const attempts = 180;

  let currentAttempt = 0;
  let isChecked = true;
  let isErred = false;
  let isReceived = false;

  const interval = setInterval(() => {
    if (isReceived || currentAttempt >= attempts) {
      clearInterval(interval);
      // eslint-disable-next-line
      !isReceived ? isErred ? reject() : resolve() : null;
      return;
    }

    if (isChecked && !isReceived) {
      currentAttempt += 1;
      isChecked = false;

      web3.eth.getTransactionReceipt(txHash)
        .then((res) => {
          isChecked = true;

          if (res) {
            isReceived = true;
            clearInterval(interval);
            res && resolve();
          }
        })
        .catch((error) => {
          isChecked = true;
          isErred = true;
          isReceived = true;

          clearInterval(interval);
          reject(error);
        });
    }
  }, 1000);
};
