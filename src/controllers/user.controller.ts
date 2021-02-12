import express from "express";
import User from "../models/User";

const createUser = async (req: express.Request, res: express.Response) => {
  const user = new User({
    uid: req.body.uid,
    displayName: req.body.displayName,
    username: req.body.username.replace(/\s/g, "").toLowerCase(),
    email: req.body.email,
    downloadURL: req.body.downloadURl,
    aesthetic: req.body.aesthetic,
  });
  user
    .save()
    .then((result) => {
      return res.status(201).send(result);
    })
    .catch((err) => {
      return res.status(502).send({ err: err.message });
    });

  return res.status(201).send({ status: "success" });
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
