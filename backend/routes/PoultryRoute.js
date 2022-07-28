import express from "express";
import {
  addChick,
  createPoulty,
  getPoultries,
  getPoultryDetails,
  updatePoultry,
} from "../controllers/PoultryController.js";
const router = express.Router();

router.post("/poultry/new", createPoulty);
router.get("/poultry/:id", getPoultryDetails);
router.put("/poultry/:id", updatePoultry);
router.get("/poultries", getPoultries);

router.post("/chick/new", addChick);

export default router;
