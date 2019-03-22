import { isEmpty } from 'lodash';

export const isHash = (message: string = 'Must be like a hex (32 Bytes)'): Function =>
  (value: string = ''): Object => ({
    message,
    isValid: /^(0xX?)?[0-9a-fA-F]{32,64}$/.test(value),
  });

export const isNumber = (message: string = 'Must be a number!'): Function =>
  (value: string = ''): Object => ({
    message,
    isValid: /^[0-9.]*$/.test(value),
  });

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

export const min = (min: number, message: string = 'Min value: %d!') =>
  (value: any): Object => ({
    message: message.replace('%d', min),
    isValid: parseFloat(value, 10) >= min,
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
