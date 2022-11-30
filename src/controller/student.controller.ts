import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Student , Classroom , Teacher } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import {  getstuSchemaType,getteacherSchemaType,getclassSchemaType } from "../schema/schoolschema";





export const getstu = async (req: Request, res: Response) => {
   
    const stu = await prisma.student.findMany();
    return res.status(200).json(stu);
  };
  
  export const getstuid = async (req: Request, res: Response) => {
   
    const  {id}  = req.params as getstuSchemaType;
    const stu_id = await prisma.student.findMany({
      where: {
        id:id,
      },
    });
  
    if (stu_id.length == 0) {
      return res.status(400).json({
        message: "the student is not in the record",
      });
    }
  
    return res.status(200).json(stu_id);
  };
  


  export const addstu = async (req: Request, res: Response) => {
    
    const newstu = req.body as Student;
  
    try {
      await prisma.student.create({
        data: newstu,
      });
      res.status(201).json({
        message: 'New student  created !',
      });
    } catch (error) {
      const prismaError = error as PrismaClientKnownRequestError;
      res.status(400).json({
        message: prismaError.message,
      });
    }
  };


