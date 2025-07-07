import { useCountryContext } from "../context/useCountryContext";

export const useCountryByCode = (code: string | undefined) => {
  const { countries } = useCountryContext();

  if (!countries || !code) return null;
  return (
    countries.find((item) => item.code.toLowerCase() === code.toLowerCase()) ??
    null
  );
};
