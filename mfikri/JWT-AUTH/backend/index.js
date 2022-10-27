import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
const app = express();
import router from "./routes/index.js";
dotenv.config();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error(error);
}

app.use(express.json());
app.use(router);
app.listen(5000, () => console.log('Server running at port 5000'));