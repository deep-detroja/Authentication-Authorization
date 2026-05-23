import mongoose from "mongoose";



export async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI!)

        console.log("DB is connected")
    }
    catch(e){
        console.error("DB connection error !");
        
      
        process.exit(1); // immediately stop Node.js application,1 means program ended with an error/failure
        

    }
}