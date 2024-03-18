import {GenericStatusResponse} from '../../../Services';

export interface AuthSliceStateProp {
  loading?: boolean;
  error?: string;
  validateUser?: GenericStatusResponse;
  registeredMobileNumber?: string;
  submitLoginOtp: undefined;
}
