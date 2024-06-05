export type MinecraftGamesType = {
  id: number;
  name: string;
  price: string;
  discountPrice: string;
  genre: string;
  released: number;
  image: string;
  macLinux: boolean;
  steam: boolean;
  gamePage: string;
};

export type MinecraftMerchandiseType = {
  id: number;
  soldOut: boolean;
  name: string;
  description: string;
  price: string;
  image: string;
};

export type LinkType = {
  href: string;
  label: string;
};

export type MinecraftJavaBedrockType = {
  image: string;
  description: string;
  title?: string;
  href?: string;
};
