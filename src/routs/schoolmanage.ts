import express from 'express';
import {
    getteacher,
    getteacherid,
    addteacher,
} from '../controller/teacher.cotroller';
import { getclass,
    getclassid,
    addclass} from '../controller/class.controller'
import { getstu,getstuid,  addstu} from '../controller/student.controller';
import validate from '../middlewares/validate';
import {
    getstuSchema,
    getteacherschema,
    getclassschema,
    addstuSchema,
    addteacherSchema,
    addclassSchema
} from '../schema/schoolschema'

const router = express.Router();

// Get all blogs
router.get('/', getstu);
router.get('/student/:id', validate(getstuSchema),getstuid);
router.get('/teacher/:id', validate(getteacherschema),getteacherid)
router.get('/classroom/:id', validate(getclassschema), getclassid)
router.post('/', validate(addstuSchema), addstu);
router.post('/:teacher', validate(addteacherSchema), addteacher);
router.post('/:classroom', validate(addclassSchema), addclass);

export default router;