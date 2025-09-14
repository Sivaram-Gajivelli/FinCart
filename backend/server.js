import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI).
    then(() => {
        console.log("MongoDB connected successfully")
        app.listen(PORT, () => {
            console.log("Server listening at PORT 5000....")
        })
    }).
    catch((err) => {
        console.error(err)
    })