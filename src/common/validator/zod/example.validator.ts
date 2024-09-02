import { z } from 'zod';
import { INPUT_ERRORS } from '@/data/constants/errors';

export const formSchema = z.object({
  username: z.string().min(2, {
    message: INPUT_ERRORS.USER_NAME_ERROR,
  }).nullable(),
  email: z.string().email({
    message: INPUT_ERRORS.EMAIL_ERROR,
  }).nullable(),
  sex: z.string().min(2, {
    message: INPUT_ERRORS.SELECT_ERROR,
  }),
  agreeToTerms: z.boolean({
    message: INPUT_ERRORS.CHECK_BOX_ERROR,
  }),
  selectedOption: z.string().min(1, {
    message: INPUT_ERRORS.RADIO_GROUP_ERROR,
  }),
});