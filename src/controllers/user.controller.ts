import express from "express";
import User from "../models/User";
import mongoose from "mongoose"; 

const createUser = (req: express.Request, res: express.Response) => {
  // const id = JSON.parse(req.body.uid); 
  const user = new User({
    uid: req.body.uid,
    displayName: req.body.displayName,
    username: req.body.username.replace(/\s/g, "").toLowerCase(),
    email: req.body.email,
    downloadURL: req.body.downloadURL,
    aesthetic: req.body.aesthetic,
  });
  user
    .save()
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
        console.log(err); 
      return res.status(502).json({ err: err.message });
    });
};

const getUser = async (req: express.Request, res: express.Response) => {
  const user = await User.findOne({ uid: req.params.uid });
  if (user) {
    return res.status(200).send(user);
  } else {
    return res.status(502).send({ error: "user not found" });
  }
};

const getAllUsers = async (req: express.Request, res: express.Response) => {
  const users = await User.find({});
  return res.status(200).send(users);
};

export default { createUser, getUser, getAllUsers };
