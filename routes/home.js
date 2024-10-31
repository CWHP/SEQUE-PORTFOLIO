import { renderProject } from "../controllers/blogController.js";
import express from "express";

const router = express.Router();

router.get("/", renderProject);

export default router;
