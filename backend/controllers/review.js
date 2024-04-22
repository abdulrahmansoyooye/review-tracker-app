import { Review } from "../models/Review.js";

export const postReview = async (req, res) => {
  try {
    const { userId, weekStartDate, review } = req.body;
    const createReview = await Review.create({
      userId,
      weekStartDate,
      review,
    });

    res.status(201).json(createReview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllReview = async (req, res) => {
  try {
    const review = await Review.find({});
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
