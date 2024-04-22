import express from "express";
import { postReview } from "../controllers/review.js";
const router = express.Router();
// All post
router.post("/", postReview);
// router.get("/weekly/:id");

export default router;
