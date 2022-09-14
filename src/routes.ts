import { Router } from "express";
import { ListGamesController } from "./controllers/game/ListGamesController";

const router = Router();

const listGamesController = new ListGamesController();

router.get('/games', listGamesController.handle);

export { router };
