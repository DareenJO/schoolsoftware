import { Request, Response } from "express";
import { prisma } from "../config/db";
import { Student , Classroom , Teacher } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { getstuSchema , getstuSchemaType,getteacherSchemaType,getclassSchemaType } from "../schema/schoolschema";


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