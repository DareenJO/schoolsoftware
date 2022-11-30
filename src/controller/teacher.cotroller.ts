import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Student , Classroom , Teacher } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {  getstuSchemaType,getteacherSchemaType,getclassSchemaType } from "../schema/schoolschema";

  //


  export const getteacher = async (req: Request, res: Response) => {
   
    const tch = await prisma.teacher.findMany();
    return res.status(200).json(tch);
  };
  
  export const getteacherid = async (req: Request, res: Response) => {
   
    const  {id}  = req.params as getteacherSchemaType
    const tch_id = await prisma.teacher.findMany({
      where: {
        id: id
      },
    });
  
    if (tch_id.length == 0) {
      return res.status(400).json({
        message: "This teacher is not found ",
      });
    }
  
    return res.status(200).json(tch_id);
  };
  


  export const addteacher = async (req: Request, res: Response) => {
    
    const newtch = req.body as Teacher;
  
    try {
      await prisma.teacher.create({
        data: newtch,
      });
      res.status(201).json({
        message: 'New teacher  created !',
      });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      res.status(400).json({
        message: prismaError.message,
      });
    }
  };


  //


 