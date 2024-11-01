import express from "express";
import {
  editArticleContent,
  renderEditArticleContent,
} from "../controllers/blogController.js";

const router = express.Router();

router.get("/:id", renderEditArticleContent);
router.post("/:id", editArticleContent);

export default router;
