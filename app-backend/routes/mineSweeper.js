const {Router} = require('express');
const router = Router();

const mineSweeper = require("../controllers/mineSweeper")

router.get("/", mineSweeper.returnFullPlayerBoard);
router.get("/scores/{id}", mineSweeper.getPlayerScoresById)

router.post("/score/{id}", mineSweeper.uploadScoreById)

router.delete("/scores/{id}", mineSweeper.deletePlayerScores)