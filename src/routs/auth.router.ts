import express from 'express';
import {loginhand,registerhand} from '../controller/auth.controller'
import validate from '../middlewares/validate';
import {addloginSchema,addregisterSchema} from'../schema/authschema'

const router = express.Router();


router.post('/login',validate(addloginSchema),loginhand)

router.post('/register',validate(addregisterSchema),registerhand)


export default router;