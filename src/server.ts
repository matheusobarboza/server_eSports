import { PrismaClient } from '@prisma/client';
import express from "express";
import { router } from './routes';

const app = express();
const prisma = new PrismaClient()

app.use(express());
app.use(router);

app.listen(3333, () => console.log("Server is running on 3333"));
