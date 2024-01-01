import express from "express";
import dotenv from "dotenv";
import { getXataClient } from "./xata";
import { sets, cardsCapitals, cardsProgramming } from "./seed_database";
dotenv.config();
const { PORT } = process.env || 3000;

const app = express();

app.use(express.json({ limit: "50mb" }));

const client = getXataClient();

app.get("/init", async (req, res) => {
  const seedSets = sets;
  const seedCardsCapitals = cardsCapitals;
  const seedCardsProgramming = cardsProgramming;

  await client.db.sets.create(seedSets);
  await client.db.cards.create(seedCardsCapitals);
  await client.db.cards.create(seedCardsProgramming);

  return res.json({ok: true});
});
// Get all sets
app.get("/sets", async (req, res) => {
    const sets = await client.db.sets
    .select(["id","title","description","image","cards"])
    .filter({private: false})
    .getAll();
    return res.json(sets);
}
);

// Get a single set
app.get("/sets/:id", async (req, res) => {
  const { id } = req.params;
  const set = await client.db.sets.read(id);
  return res.json(set);
});

// Create a set
app.post("/sets", async (req, res) => {
  const { title, description, image, creator, private:isPrivate} = req.body;
  const set = await client.db.sets.create({
    title,
    description,
    image: image ? {base64Content:image, mediaType:"image/png", enablePublicUrl:true} : null,
    creator,
    private: isPrivate
  });
  return res.json(set);
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});