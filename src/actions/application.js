import { IS_PROCESSING } from './types';

export const setProcessing = (payload) => ({
  type: IS_PROCESSING,
  data: payload,
});