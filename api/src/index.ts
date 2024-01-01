import express from "express";
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env || 3000;

const app = express();

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  return res.json({ok: true});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});