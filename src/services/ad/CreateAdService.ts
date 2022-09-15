import { prismaClient } from "../../prisma";

interface Props {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: string;
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

export class CreateAdService {
  async execute({
    gameId,
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    useVoiceChannel
  }: Props) {
    const ad = await prismaClient.ad.create({
      data: {
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays,
        hourStart,
        hourEnd,
        useVoiceChannel
      }
    });

    return ad;
  }
}
