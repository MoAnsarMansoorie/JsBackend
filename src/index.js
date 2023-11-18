// require('dotenv').config({path: "./env"})

import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDb()






















/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("ERROR : ", (err) => {
            console.log("error: ", err);
            throw err
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening at port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error : ", error);
        throw error
    }
})()
*/