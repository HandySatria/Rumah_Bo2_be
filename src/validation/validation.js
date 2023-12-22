import { ResponseError } from '../error/response-error.js';

const validate = (schema, request) => {
  const result = schema.validate(request);
  if (result.error) {
    throw new ResponseError(400, result.error.message);
  } else {
    return result.value;
  }
};

const setUserCreate = (user, request) =>{
  const result = request
  result.user_crt = user.username;
  result.user_upd = user.username;

  const currentDateTime = new Date();
  const offset = currentDateTime.getTimezoneOffset();
  result.dtm_crt = new Date(currentDateTime.getTime() - offset * 60000); // Menghilangkan offset GMT
  result.dtm_upd = result.dtm_crt
  return result;
}

const setUserUpdate = (user, request) =>{
  const result = request;
  result.user_upd = user.username;
  
  const currentDateTime = new Date();
  const offset = currentDateTime.getTimezoneOffset();
  result.dtm_upd = new Date(currentDateTime.getTime() - offset * 60000); // Menghilangkan offset GMT
  return result;
}

export { validate, setUserCreate, setUserUpdate };
