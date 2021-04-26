import express from 'express'
import { update, list, create, productById, read, remove, image } from '../controller/product';
const router = express.Router();


router.post('/product', create);

router.get('/product', list);

router.put('/product/:productId', update);

router.get('/product/:productId', read);

router.delete('/product/:productId', remove);

router.param('productId', productById);

// router.get('/product/photo/:productId', image);


module.exports = router;