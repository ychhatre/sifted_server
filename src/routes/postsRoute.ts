import * as express from "express";
import controller from "../controllers/post.controller"; 


const postRouter: express.Router = express.Router();

postRouter.get("/", controller.getAllPosts); 
postRouter.get("/:id", controller.getPost); 
postRouter.post("/", controller.createPost);

export default postRouter; 
module.exports = postRouter;