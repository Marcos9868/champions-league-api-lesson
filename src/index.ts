import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

const server = express();
dotenv.config();

server.use(express.json());
server.get("/", (req: Request, res: Response) => {
  res.send("Hello world")
});
server.listen(process.env.PORT, () => console.log("Server running"));