import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import {
  getUserValidation,
  loginUserValidation,
  registerUserValidation,
  updateUserValidation,
} from '../validation/user-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

const register = async (user, request) => {
  const userRequest = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: userRequest.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, 'Username already exists');
  }

  userRequest.password = await bcrypt.hash(userRequest.password, 10);
  const data = setUserCreate(user,userRequest);
  const result = await prismaClient.user.create({
    data: data,
    select: {
      username: true,
      full_name: true,
    },
  });

  return result;
};

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      username: true,
      password: true,
      token : true,
    },
  });

  if (!user) {
    throw new ResponseError(401, 'Username Or Password Wrong');
  }
  
  if (user.token){
    throw new ResponseError(401, 'you have logged in');
  }

  const isPasswordValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(401, 'Username Or Password Wrong');
  }
  const token = uuid().toString();
  const updateToken = await prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
      role_code : true,
    },
  });
  return updateToken;
};

const getUserbyUsername = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
    select: {
      username: true,
      full_name: true,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'user is not found');
  }

  return user;
};

const update = async (user, request) => {
  const userRequest = validate(updateUserValidation, request);
  const cekUserId = await prismaClient.user.findUnique({
    where: {
      user_id: userRequest.user_id,
    },
  });

  if (!cekUserId) {
    throw new ResponseError(404, 'user not found');
  }
  
  const usernameAlreadyExist = await prismaClient.user.findUnique({
    where: {
      username: userRequest.username,
    },
  });

  if (usernameAlreadyExist && usernameAlreadyExist.username != cekUserId.username) {
    throw new ResponseError(404, 'username already exist in database');
  }

  const data = setUserUpdate(user, request);

  if (userRequest.password) {
    data.password = await bcrypt.hash(userRequest.password, 10);
  }

  return prismaClient.user.update({
    where: {
      user_id: userRequest.user_id,
    },
    data: data,
    select: {
      username: true,
      password: true,
    },
  });
};

const logout = async (username) => {
  username = validate(getUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    throw new ResponseError(404, 'User is not found');
  }

  return prismaClient.user.update({
    where: {
      username: user.username,
    },
    data: {
      token: null,
    },
    select: {
      username: true,
    },
  });
};

export default {
  register,
  login,
  getUserbyUsername,
  update,
  logout,
};
