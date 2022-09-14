import { PrismaClient } from '@prisma/client';
import express from "express";

const app = express();
const prisma = new PrismaClient()

app.use(express());

app.post("/ads", (req, res) => {
  return res.status(201).json([]);
});

app.get('/games/:id/ads', (req, res) => {
  // const gameId = req.params.id;

  return res.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
    { id: 5, name: 'Anúncio 5' },
    { id: 6, name: 'Anúncio 6' },
  ])
});

app.get('/ads/:id/discord', (req, res) => {
  // const adId = req.params.id;

  return res.json([])
})

app.listen(3333, () => console.log("Server is running on 3333"));
