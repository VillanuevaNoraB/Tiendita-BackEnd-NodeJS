import express from "express";
import {
  addRegisterUserControllers,
  getLoginController,
} from "../controllers/user.controllers.js";

const user_routes = express.Router();

user_routes.post("/register", addRegisterUserControllers);

user_routes.post("/login", async (req, res) => {
  const credentials = req.body;

  const result = await getLoginController(credentials);

  if (result.status) {
    return res.status(result.status).json(result);
  }

  return res.status(200).json(result);
});

export default user_routes;
