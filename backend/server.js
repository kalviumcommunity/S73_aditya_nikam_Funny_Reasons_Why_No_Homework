const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const router = require('./routes/routes.js')
const app = express();
const PORT = process.env.PORT || 3000 ;
const URL = process.env.URL;

app.use(express.json())

app.get('/ping', (req, res) => {
    res.json({
        message: "Pong",
        status: "success",
    });
});

let flag = false;

const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB!");
        flag = true;
    } catch (error) {
        console.error(`Error connecting to DB: ${error.message}`);
        process.exit(1);
    }
};
connectDB();

app.get('/', (req, res) => {
    res.json({
        message: "Hello Welcome to ASAP Project!",
        DB_status: flag
    })
});

app.use("/api",router);

app.listen(PORT, () => {
    console.log(`Server running of PORT: ${PORT}`)
})
