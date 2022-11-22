import React from "react";
import CARD_DATA from "./consts";

export type TCardData = {
  id: number;
  name: string;
  component: React.ReactNode;
};

const shuffleArray = (a: TCardData[]): TCardData[] => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

export const getShuffledCards = (): TCardData[] => {
  const newCards = [...CARD_DATA, ...CARD_DATA].map((card, index) => ({
    id: index,
    ...card,
  }));

  return shuffleArray(newCards);
};
