import { GET_COUNTRIES } from "../graphql/queries/GetCountries";

export const mocks = [
  {
    request: {
      query: GET_COUNTRIES,
    },
    result: {
      data: {
        countries: [
          {
            __typename: "Country",
            code: "CL",
            name: "Chile",
            capital: "Santiago",
            currency: "CLP",
            emoji: "🇨🇱",
            continent: {
              __typename: "Continent",
              name: "South America",
            },
            languages: [
              {
                __typename: "Language",
                name: "Spanish",
              },
            ],
          },
          {
            __typename: "Country",
            code: "CN",
            name: "China",
            capital: "Beijing",
            currency: "CNY",
            emoji: "🇨🇳",
            continent: {
              __typename: "Continent",
              name: "Asia",
            },
            languages: [
              {
                __typename: "Language",
                name: "Mandarin",
              },
            ],
          },
        ],
      },
    },
  },
];
