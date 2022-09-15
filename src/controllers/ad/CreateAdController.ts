import { Request, Response } from "express";
import { CreateAdService } from "../../services/ad/CreateAdService";
import { convertHourStringToMinutes } from "../../utils/convert-hour-string-to-minutes";

export class CreateAdController {
  async handle(req: Request, res: Response) {
    const gameId = req.params.id as string;
    const {
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel
    } = req.body;

    const createAdService = new CreateAdService();

    const ad = await createAdService.execute({
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(','),
      hourStart: convertHourStringToMinutes(hourStart),
      hourEnd: convertHourStringToMinutes(hourEnd),
      useVoiceChannel
    });

    return res.status(201).json(ad);
  }
}
