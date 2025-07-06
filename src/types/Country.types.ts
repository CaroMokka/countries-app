export interface Country {
  code: string;
  name: string;
  currency: string;
  continent: { name: string };
  capital: string;
  emoji: string;
  languages: {
    name: string;
  }[];
}
