export const convertDeposit: Function = (amount: number): number =>
  Math.round(amount / Math.pow(2, 32) * Math.pow(10, 18));
