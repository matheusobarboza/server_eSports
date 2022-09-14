import { prismaClient } from "../../prisma";

export class ListGamesService {
  async execute() {

    const games = await prismaClient.game.findMany();

    return games;
  }
}