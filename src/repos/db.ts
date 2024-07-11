import mongoose from "mongoose";
import EnvVars from "@src/common/EnvVars";

const DB_URL: string = "mongodb://localhost:27017/Pernado";

export const db = async () => {
    try {
        mongoose.connect(process.env.DATABASE || DB_URL);
        console.log("db is connnected");
    } catch (error) {
        console.log(error);
    }
} 