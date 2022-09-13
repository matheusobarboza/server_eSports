import express from 'express';

const app = express();

app.use(express());
app.use(express.json());

app.get("/ads", (req, res) => {
  return res.json({ ok: true });
});

app.listen(3333, () => console.log("Server is running on 3333"));
