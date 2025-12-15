import {
  addRegisterUserService,
  getLoginUserService,
} from "../services/user.services.js";

export const addRegisterUserControllers = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await addRegisterUserService(user);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send("controllers", error);
  }
};

export const getLoginController = async (credentials) => {
  try {
    console.log("controller:", credentials);
    const loginUser = await getLoginUserService(credentials);

    return loginUser;
  } catch (error) {
    return {
      status: 500,
      msg: "Error en controller",
      error,
    };
  }
};
