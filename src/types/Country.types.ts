export interface CountryProps {
  code: string;
  name: string;
  currency: string;
  continent: string;
  language: string;
  capital: string;
  emoji: string;
  className?: string;
  onClick?: () => void;
}
