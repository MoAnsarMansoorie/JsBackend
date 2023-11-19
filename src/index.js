// require('dotenv').config({path: "./env"})

import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDb()
.then(() => {
    app.on("error", (err) => {
        console.log(`Some error in listening of PORT`);
        throw err
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Mongodb connection failed!!!!!: ", err);
})






















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