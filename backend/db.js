import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config({path: './config.env'});

const mongoURI = process.env.MONGO_URI_LOCAL;

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectToMongo;