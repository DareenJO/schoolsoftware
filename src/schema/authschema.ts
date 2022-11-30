import {z} from 'zod'


export const addregisterSchema = z.object({
    body: z.object({
      id: z.string({ required_error: 'id is required !' }),
      name: z.string({ required_error: 'name is required !' }),
      password: z.string({ required_error: 'password  is required !' }),
      email: z.string({ required_error: 'email  is required !' })
    }),
  });


  export const addloginSchema = z.object({
    body: z.object({
      password: z.string({ required_error: 'password  is required !' }),
      email: z.string({ required_error: 'email  is required !' })
    }),
  });