 // Entities
import {
  PAUSE_NOT_PAUSED,
  PAUSE_CAUSE_VOLUNTARILY,
  PAUSE_CAUSE_UNTIL_BLOCK,
  PAUSE_CAUSE_UNTIL_FINE,
  PAUSE_CAUSE_PUNISHMENT,
} from 'entities/validators';

export const parseCompactedValidator: Function = (hash: string = ''): Object => {
  const formattedHash = hash.replace('0x', '');

  return {
    address: `0x${formattedHash.substr(24, 64)}`,
    deposit: parseInt(formattedHash.substr(8, 16), 16),
    pauseCause: parseInt(formattedHash.substr(6, 2), 16),
    test: formattedHash.substr(0, 6),
  };
}

export const parseDeposit: Function = (amount: number): number =>
  (amount * Math.pow(2, 32) / Math.pow(10, 18));

export const parsePause: Function = (id: number): string => {
  switch (id) {
    case PAUSE_CAUSE_VOLUNTARILY:
      return 'Остановлен';
    case PAUSE_CAUSE_UNTIL_BLOCK:
      return 'Заблокирован';
    case PAUSE_CAUSE_UNTIL_FINE:
      return 'Оштрафован';
    case PAUSE_CAUSE_PUNISHMENT:
      return 'Изъят';
    case PAUSE_NOT_PAUSED:
    default:
      return 'Включен';
  }
}
