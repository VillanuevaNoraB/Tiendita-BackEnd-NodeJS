import { registerUserModel, getLoginModel } from "../models/user.models.js";

export const addRegisterUserService = async (user) => {
  return new Promise(async (res, rej) => {
    console.log("Test dentro de services: add user services");
    try {
      const newUser = await registerUserModel(user);
      res(newUser);
    } catch (error) {
      rej("services error: ", error);
    }
  });
};

export const getLoginUserService = async (user) => {
  return new Promise(async (res, rej) => {
    console.log("Test dentro de services: login user services");
    try {
      const loginUser = await getLoginModel(user);
      res(loginUser);
    } catch (error) {
      rej({ msg: "services error", error });
    }
  });
};
