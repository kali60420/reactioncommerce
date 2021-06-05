import { sharedRef } from '@kali604/core';

export const usePaymentProviderMock = () => {
  const status = sharedRef(false, 'usePaymentProviderMock-status');

  return {
    status
  };
};
