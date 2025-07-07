import { gql } from "@apollo/client";

export const COUNTRY_FIELDS = gql`
  fragment CountryFields on Country {
    code
    name
    currency
    continent {
      name
    }
    capital
    emoji
    languages {
      name
    }
  }
`;
