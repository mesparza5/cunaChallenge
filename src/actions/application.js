import { IS_PROCESSING, FORM_STATUS } from './types';

export const setProcessing = (payload) => ({
  type: IS_PROCESSING,
  data: payload,
});

export const setFormStatus = (payload) => ({
  type: FORM_STATUS,
  data: payload,
});