import { Request, Response } from "express";
import { ListGamesService } from "../../services/game/ListGamesService";

export class ListGamesController {
  async handle(req: Request, res: Response) {

    const listGamesService = new ListGamesService();

    const games = await listGamesService.execute();

    return res.json(games);
  }
}