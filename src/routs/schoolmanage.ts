import express from 'express';
import {
    getstu,
    getstuid,
    addstu,
    getteacher,
    getteacherid,
    addteacher,
    getclass,
    getclassid,
    addclass
} from '../controller/school.cotroller';
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