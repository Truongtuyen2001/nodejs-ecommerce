import express from 'express';

const router = express.Router();

import { singup, singin, singout } from "../controller/auth";

import { userSignupValidator } from "../validator";



router.post('/singup', userSignupValidator, singup)

router.post('/singin', singin)

router.post('/singout', singout)

module.exports = router;
