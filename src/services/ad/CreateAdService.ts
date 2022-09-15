import { prismaClient } from "../../prisma";

interface Props {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
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
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays,
      hourStart,
      hourEnd,
      useVoiceChannel
    });

    return ad;
  }
}
