import { connectToDB } from "./config/db.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();





async function startServer(){
    await connectToDB();

    app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
    
}
startServer();