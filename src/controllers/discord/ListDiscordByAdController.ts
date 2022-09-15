import { Request, Response } from "express";
import { ListDiscordByAdService } from "../../services/discord/ListDiscordByAdService";

export class ListDiscordByAdController {
  async handle(req: Request, res: Response) {

    const adId = req.params.id;

    const listDiscordByAd = new ListDiscordByAdService();

    const ad = await listDiscordByAd.execute(adId);

    return res.json({
      discord: ad.discord,
    })
  }
}