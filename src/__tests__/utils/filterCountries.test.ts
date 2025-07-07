import { filterCountries } from "../../utils/filterCountries";

describe("filterCountries", () => {
  const countries = [
    {
      name: "Chile",
      code: "CL",
      capital: "Santiago",
      emoji: "🇨🇱",
      languages: [{ name: "Spanish" }],
      continent: { name: "South America" },
      currency: "CLP",
    },
    {
      name: "China",
      code: "CN",
      capital: "Beijing",
      emoji: "🇨🇳",
      languages: [{ name: "Mandarin" }],
      continent: { name: "Asia" },
      currency: "CNY",
    },
  ];

  it("devuelve todos si no hay filtros", () => {
    const result = filterCountries(countries, "", "", "");
    expect(result).toHaveLength(2);
  });

  it("filtra por término de búsqueda", () => {
    const result = filterCountries(countries, "chi", "", "");
    expect(result).toHaveLength(2);
  });

  it("filtra por continente", () => {
    const result = filterCountries(countries, "", "Asia", "");
    expect(result).toEqual([countries[1]]);
  });

  it("filtra por moneda", () => {
    const result = filterCountries(countries, "", "", "CLP");
    expect(result).toEqual([countries[0]]);
  });

  it("combina filtros", () => {
    const result = filterCountries(countries, "chi", "Asia", "CNY");
    expect(result).toEqual([countries[1]]);
  });
});
