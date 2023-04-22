import * as yup from 'yup';

export const emailValidation = yup.object({
  tiEmail: yup
    .string()
    .required('Email Address is required')
    .email('Please enter a valid email')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email',
    ),
});

export const birthDateValidation = yup.object({
  BirthDate: yup.date().required('Birth Date required'),
});

export const passwordValidation = yup.object({
  tiPassword: yup
    .string()
    .required('Password is required')
    .matches(/^(?=.*[a-z])/, 'Password must include lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'Password must include uppercase letter')
    .matches(/^(?=.*[0-9])/, 'Password must include digit')
    .matches(/^(?=.*[!@#\$%\^&\*])/, 'Password must include special character')
    .matches(
      /^(?!.*(.)\1\1)/,
      'Password should not contain more than two consecutive characters',
    )
    .min(8, 'Password length must be atleast 8 characters')
    .max(15, 'Password length must be less than 15 characters'),
});

export const signUpStepFourValidation = yup.object({
  FirstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name should have minimum 2 characters')
    .max(50, 'First Name should have maximum 50 characters'),
  LastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name should have minimum 2 characters')
    .max(50, 'Last Name should have maximum 50 characters'),
  UserName: yup
    .string()
    .required('User Name is required')
    .min(2, 'User Name should have minimum 2 characters')
    .max(50, 'User Name should have maximum 50 characters'),
});
