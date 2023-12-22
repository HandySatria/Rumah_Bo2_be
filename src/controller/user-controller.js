import userService from '../service/user-service.js';

const register = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await userService.register(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getUserbyUsername = async (req, res, next) => {
  try {
    const username = req.body.username;
    const result = await userService.getUserbyUsername(username);
    res.status(200).json({
      date: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    

    const result = await userService.update(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    await userService.logout(req.user.username);
    res.status(200).json({
      data: 'ok',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  register,
  login,
  getUserbyUsername,
  update,
  logout,
};
