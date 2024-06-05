import { MinecraftGamesType } from "../types/global";

export const minecraftGamesData: MinecraftGamesType[] = [
  {
    id: 1,
    name: "Minecraft: Java & Bedrock Edition",
    price: "$40",
    discountPrice: "$19.99",
    genre: "Sandbox Survival, Adventure, Single-player + Multiplayer",
    released: 2011,
    macLinux: true,
    steam: false,
    gamePage: "minecraft-java-and-bedrock",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/franchise/component-library/anniversaryHub/cardF/Minecraft.png",
  },
  {
    id: 2,
    name: "Minecraft Dungeons",
    price: "$40",
    discountPrice: "$19.99",
    genre: "Dungeon Crawl, Action RPG, Single-player + Multiplayer",
    released: 2020,
    macLinux: false,
    steam: true,
    gamePage: "minecraft-dungeons",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/franchise/component-library/anniversaryHub/cardF/MinecraftDungeons.png",
  },
  {
    id: 3,
    name: "Minecraft Legends",
    price: "$50",
    discountPrice: "$24.99",
    genre: "Strategy, Action RPG, Single-player + Multiplayer",
    released: 2023,
    macLinux: false,
    steam: true,
    gamePage: "minecraft-legends",
    image:
      "https://www.minecraft.net/content/dam/minecraftnet/franchise/component-library/anniversaryHub/cardF/MinecraftLegends.png",
  },
];
