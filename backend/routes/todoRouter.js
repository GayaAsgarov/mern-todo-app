import { Router } from "express";
const router = Router();

// GET all todos
router.get("/", (req, res) => {
  res.json({ msg: "GET all todos" });
});

// GET a single todo
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single todo" });
});

// POST a new todo
router.post("/", (req, res) => {
  res.json({ msg: "POST a new todo" });
});

// DELETE a new todo
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a todo" });
});

// UPDATE a todo
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a todo" });
});

export default router;