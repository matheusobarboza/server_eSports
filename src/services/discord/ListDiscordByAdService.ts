import { prismaClient } from "../../prisma";

export class ListDiscordByAdService {
  async execute(adId: string ) {

    const ad = await prismaClient.ad.findUniqueOrThrow({
      select: {
        discord: true,
      },
      where: {
        id: adId,
      }
    });

    return ad;
  }
}