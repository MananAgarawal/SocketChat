import { Request, Response } from "express";
const USERS = require("../models/user");

async function userlogin(req: Request, res: Response) {}

async function usersignup(req: Request, res: Response) {
  try {
    const { Name, Mail, Pass } = req.body;

    if (!Name || !Mail || !Pass) {
      return res
        .status(400)
        .json({ msg: "Please provide all required fields" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Mail)) {
      return res.status(400).json({ msg: 'Invalid email format' });
    }

    const ExistingUser = await USERS.findOne({ Email: req.body.Mail });

    if (ExistingUser) {
      return res.status(403).json({ msg: "Email Already Exists" });
    }

    const Newuser = new USERS({
      Username: Name,
      Email: Mail,
      Password: Pass,
    });

    Newuser.save();

    return res.json({ msg: "Success" });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

module.exports = {
  userlogin,
  usersignup,
};
