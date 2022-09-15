import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import express from "express";
import { router } from './routes';

const app = express();
const prisma = new PrismaClient()

app.use(express());
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3333, () => console.log("Server is running on 3333"));
