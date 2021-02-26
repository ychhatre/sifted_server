import * as express from "express";
import controller from "../controllers/user.controller"; 


const userRouter: express.Router = express.Router();

userRouter.get("/", controller.getAllUsers); 
userRouter.get("/:uid", controller.getUser); 
userRouter.post("/", controller.createUser);

export = userRouter; 
