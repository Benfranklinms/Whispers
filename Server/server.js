import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './Config/db.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();
connectToDB();



app.get('/', (req, res) => {
    res.send("Just testing");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});