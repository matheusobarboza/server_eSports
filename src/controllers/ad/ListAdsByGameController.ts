import { Request, Response } from "express";
import { ListAdsByGameService } from "../../services/ad/ListAdsByGameService";
import { convertMinutesToHourString } from "../../utils/convert-minutes-to-hour-string";

export class ListAdsByGameController {
  async handle(req: Request, res: Response) {
    const gameId = req.params.id;

    const listAdsByGameService = new ListAdsByGameService();

    const ads = await listAdsByGameService.execute(gameId);

    return res.json(ads.map(ad => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      }
    }));
  }
}
