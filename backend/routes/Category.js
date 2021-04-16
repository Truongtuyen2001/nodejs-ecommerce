import express from 'express'
import { update, list, create, CategoryId, read, remove, categoryPage } from '../controller/Category';
const router = express.Router();


router.post('/category', create);
router.get('/categories', list);
router.get('    ', read);
router.put('/category/:categoryId', update);
router.delete('/category/:categoryId', remove);
router.get('/categoryPage/:categoryId', categoryPage)

router.param('CategoryId', CategoryId)

module.exports = router;

