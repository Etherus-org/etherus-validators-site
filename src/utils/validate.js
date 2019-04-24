import { get, has, isEmpty } from 'lodash';

export const isHash = (length: number = 40, message: string = 'Must be like a hex (32 Bytes)'): Function =>
  (value: string = ''): Object => ({
    message,
    isValid: new RegExp(`^(0[xX]{1})?[a-fA-F\\d]{${length}}$`).test(value),
  });

export const isHost = (message: string = 'Incorrect value! Must be like host or IP!'): Function =>
  (value: string = ''): Object => ({
    message,
    isValid: !value || (
      new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$').test(value) ||
      new RegExp('^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\\-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\\-]*[A-Za-z0-9])$').test(value)
    ),
  });

export const isNumber = (message: string = 'Must be a number!'): Function =>
  (value: string = ''): Object => ({
    message,
    isValid: /^[0-9.]*$/.test(value),
  });

export const isPrivateKey = (message: string = 'Incorrect private key') => (value: string): Object => {
  let isValid = false;

  try {
    const json = JSON.parse(value);

    if (
      has(json, 'address') &&
      has(json, 'pub_key') &&
      has(json, 'priv_key') &&
      Buffer.from(get(json, 'pub_key.value'), 'base64').length === 32 &&
      Buffer.from(get(json, 'priv_key.value'), 'base64').length === 64
    ) {
      isValid = true;
    }
  } catch(e) {
    console.error(e);
  }

  return {
    isValid, message,
  };
}

export const isUint = (bytes: number = 8, message: string = 'Must be like a uint'): Function =>
  (value: string = ''): Object => ({
    message: `${message}${bytes}`,
    isValid: value.toString().length <= bytes / 4,
  })

export const isUrl = (message: string = 'Incorrect URL!') =>
  (value: string): Object => ({
    message,
    isValid: value && /^http:\/\/\w+(\.\w+)*(:[0-9]+)?\/?(\/[.\w]*)*$/.test(value),
  });

export const matches = (regex: Object<RegExp>, message: string = 'Incorrect value!') => (value: string): Object => ({
  message,
  isValid: value && regex.test(value),
});


export const max = (max: number, message: string = 'Max value: %d!') =>
  (value: any): Object => ({
    message: message.replace('%d', max),
    isValid: !value || parseFloat(value, 10) <= max,
  });

export const min = (min: number, message: string = 'Min value: %d!') =>
  (value: any): Object => ({
    message: message.replace('%d', min),
    isValid: !value || parseFloat(value, 10) >= min,
  });

export const required = (message: string = 'Field is required!') => (value: any): Object => ({
  message,
  isValid: typeof value === 'number' || !isEmpty(value),
});

export default (fields: Object) => (values: Object, props :Object): Object => {
  const errors = {};

  Object.keys(fields).forEach((key: string): void => {
    ([]).concat(fields[key]).forEach((validator: func): void => {
      const res = validator(values[key], props);

      if (res && !errors[key] && !res.isValid) {
        errors[key] = res.message || true;
      }
    })
  });

  return errors;
}
