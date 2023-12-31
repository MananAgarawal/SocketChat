import { Request, Response } from "express";
const USERS = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for bcrypt


async function userlogin(req: Request, res: Response) {
 
  try{
      const { Mail , Pass} = req.body;

      if(!Mail || !Pass) {
          return res.status(400).json({msg : "Please provide all required fields"})
      }

      const Checkuser = await USERS.findOne({Email : Mail});
      
      if (Checkuser === null || !Checkuser || Checkuser === undefined){
          return res.status(400).json({msg : "Email not found"})
      } else {

          const passwordMatch = await bcrypt.compare(Pass, Checkuser.Password);
          
          if(passwordMatch){
             const token = await jwt.sign({ Mail: Checkuser.Email }, process.env.TOKEN_SECRET);

            console.log('Token :', token );
              return res.status(200).json({
                msg : 'Authentication successful',
                token : token,
            })
          } else {
              return res.status(401).json({msg : 'Invalid password'})
          }
      }
  } catch (error) {
      console.error('Error' , error);
      return res.status(500).json({msg: 'Internal server error'});
  }
}

async function usersignup(req: Request, res: Response) {
  try {

    console.log(req.body)

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

    const hashedPassword = await bcrypt.hash(Pass, saltRounds);

    const Newuser = new USERS({
      Username: Name,
      Email: Mail,
      Password: hashedPassword,
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
