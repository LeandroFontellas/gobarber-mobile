import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(err => {
    validationErrors[err.path] = err.message;
  });

  return validationErrors;
}

export default getValidationErrors;
