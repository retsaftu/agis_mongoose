const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.get("/api/users", userController.getUsers);
userRouter.get("/api/users/:id", userController.getUsersId);
userRouter.post("/api/users", userController.postUsers);
userRouter.delete("/api/users/:id", userController.deleteUsers);
userRouter.put("/api/users", userController.putUsers);

module.exports = userRouter;
