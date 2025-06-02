import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './Config/db.js';
import authRoute from './routes/authRoute.js'
import confessionRoute from './routes/confessionRoute.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
connectToDB();



app.use('/auth', authRoute)
app.use('/confession', confessionRoute);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});