import { Router } from "express";
import {
  loginController,
  registerController,
  getUsersController,
  getUserByEmailController,
  getUserByIdController,
  deleteUserByIdController
} from "../controller/authController.js";

import { check } from "express-validator";
import validator from "../utils/validator.js";
import validateToken from "../utils/validateToken.js";  

const userRouter = Router();

userRouter.post(
  "/login",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validator,
  ],
  loginController
);

userRouter.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validator,
  ],
  registerController
);

//routes users with authentorization middleware
userRouter.get("/users", validateToken, getUsersController);
userRouter.get("/user-email/:email", validateToken, getUserByEmailController);
userRouter.get("/user/:id", validateToken, getUserByIdController);
userRouter.delete("/user/:id", validateToken, deleteUserByIdController);

export default userRouter;