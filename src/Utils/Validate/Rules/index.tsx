export const MOBILE_NUMBER_RULES = {
  phone: {
    presence: {allowEmpty: false, message: 'Mobile number cannot be empty'},
    length: {is: 10, message: 'Mobile number should be 10 number'},
  },
  name: {
    presence: {allowEmpty: false, message: 'Name cannot be empty'},
  },
};

export const OTP_RULES = {
  code: {
    presence: {message: 'Otp cannot be empty'},
    length: {is: 4, message: 'Otp should be 4 number'},
  },
};
