import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded ({extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/kaydeeshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use((err, req, res, next) => {
    res.status(500). send({message: err.message});
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {

});

const port = process.env.PORT || 8080
app.listen (port, () => {
    console.log("Server running actively")
});