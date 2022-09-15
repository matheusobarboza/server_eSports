import { prismaClient } from "../../prisma";

export class ListAdsByGameService {
  async execute( gameId: string ) {
    
    const ads = await prismaClient.ad.findMany({
      select: {
        id: true,
        name: true,
        weekDays: true,
        useVoiceChannel: true,
        yearsPlaying: true,
        hourStart: true,
        hourEnd: true,
      },
      where: {
        gameId
      },
      orderBy: {
        createdAt: 'desc',
      }
    });

    return ads;
  }
}