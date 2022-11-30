import { z } from 'zod';

export const getstuSchema = z.object({
  params: z.object({
    id : z.string({ invalid_type_error: 'student id is required ' }),
    name: z.string({ invalid_type_error: 'name  is required ' }),
    age: z.string({ invalid_type_error: 'age  is required ' }),
    major: z.string({ invalid_type_error: 'major  is required ' }),

  }),
});

export type getstuSchemaType = z.infer<typeof getstuSchema>['params'];

export const getteacherschema = z.object({
  params: z.object({
    id: z.string({ invalid_type_error: 'teacher id is required ! ' }),
    name: z.string({ invalid_type_error: 'teacher name  is required ' }),
  }),
});

export type getteacherSchemaType = z.infer<typeof getteacherschema>['params'];

export const getclassschema = z.object({
    params: z.object({
      id: z.string({ invalid_type_error: 'class id is required ! ' }),
      name: z.string({ invalid_type_error: 'class name  is required ' }),
    }),
  });

  export type getclassSchemaType = z.infer<typeof getclassschema>['params'];

export const addstuSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'id is required !' }),
    name: z.string({ required_error: 'name is required !' }),
    age: z.string({ required_error: 'age  is required !' }),
    major: z.string({ required_error: 'major  is required !' })
  }),
});


export const addteacherSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'id is required !' }),
      name: z.string({ required_error: 'name is required !' }),
     
    }),
  });





  export const addclassSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'id is required !' }),
      name: z.string({ required_error: 'name is required !' }),
    }),
  });