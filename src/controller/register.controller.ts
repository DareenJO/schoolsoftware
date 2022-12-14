
import { prisma } from "../config/db";
import { User } from "@prisma/client";
import { Response, Request, } from "express";
import * as argon2 from 'argon2';



export const registerhand = async (req: Request, res: Response) => {
    try {
      const newUser = req.body as User;
      const hashPassword = await argon2.hash(newUser.password);
      newUser.password = hashPassword;
      await prisma.user.create({
        data: newUser
      })
      return res.status(201).json({
        message: "Welcome to the website ! ,User added !",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        mrssage: 'server Error !',
      });
  
    }
  }