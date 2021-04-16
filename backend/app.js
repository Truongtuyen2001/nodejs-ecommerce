import express from 'express';
import morgan from 'morgan';
import productRouter from './routes/products.js';
import CategoryRouter from './routes/Category';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/auth';
import expressValidator from 'express-validator';
import userRouter from './routes/user'

//config
const app = express();
dotenv.config();
app.use(bodyParser.json())
app.use(cors());
app.use(expressValidator());
//connection


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: false,
    useCreateIndex: true
}).then(() => {
    console.log(`Chào các bạn nhỏ`);
});
mongoose.connection.on('Error', err => {
    console.log(`Data connect failed , ${err.message}`);

})
//Router

app.use(morgan('dev'));

app.use('/api', productRouter);
app.use('/api', CategoryRouter);
app.use('/api', authRouter);
app.use('/api', userRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})

