import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Student , Classroom , Teacher } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {  getstuSchemaType,getteacherSchemaType,getclassSchemaType } from "../schema/schoolschema";




export const getclass = async (req: Request, res: Response) => {
   
    const clsr = await prisma.teacher.findMany();
    return res.status(200).json(clsr);
  };
  
  export const getclassid = async (req: Request, res: Response) => {
   
    const { id}  = req.params as getclassSchemaType
    const cls_id = await prisma.classroom.findMany({
      where: {
        id: id
      },
    });
  
    if (cls_id.length == 0) {
      return res.status(400).json({
        message: "This teacher is not found ",
      });
    }
  
    return res.status(200).json(cls_id);
  };
  


  export const addclass = async (req: Request, res: Response) => {
    
    const clsr = req.body as Classroom;
  
    try {
      await prisma.classroom.create({
        data: clsr,
      });
      res.status(201).json({
        message: 'New class  created !',
      });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      res.status(400).json({
        message: prismaError.message,
      });
    }
  };