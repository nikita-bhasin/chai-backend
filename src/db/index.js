import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB=async()=>{
    try{
       const connectionInstance= await  mongoose.connect(`${process.env.MonGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDb connection !! DB Host:${connectionInstance.connection.host}`);
    }
    catch(error){
console.log("MONGOOSE connection error",error);
process.exit(1)
    }
}

export default connectDB;