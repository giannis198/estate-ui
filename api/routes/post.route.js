import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router page");
  console.log("router works");
});

router.post("/", (req, res) => {
  res.send("Router page");
  console.log("router works");
});
router.put("/", (req, res) => {
  res.send("Router page");
  console.log("router works");
});
router.delete("/", (req, res) => {
  res.send("Router page");
  console.log("router works");
});

export default router;
