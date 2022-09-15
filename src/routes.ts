import { Router } from "express";
import { CreateAdController } from "./controllers/ad/CreateAdController";
import { ListAdsByGameController } from "./controllers/ad/ListAdsByGameController";
import { ListDiscordByAdController } from "./controllers/discord/ListDiscordByAdController";
import { ListGamesController } from "./controllers/game/ListGamesController";

const router = Router();

const listGamesController = new ListGamesController();
const createAdController = new CreateAdController();
const listAdsByGameController = new ListAdsByGameController();
const listDiscordByAdController = new ListDiscordByAdController();

router.get('/games', listGamesController.handle);
router.post('/ads', createAdController.handle);
router.get('/games/:id/ads', listAdsByGameController.handle);
router.get('/ads/:id/discord', listDiscordByAdController.handle);

export { router };

