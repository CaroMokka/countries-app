import { gql } from "@apollo/client";
import { COUNTRY_FIELDS } from "../fragments/CountryFields";

export const GET_COUNTRY = gql`
  ${COUNTRY_FIELDS}

  query GetCountry($code: ID!) {
    country(code: $code) {
      ...CountryFields
    }
  }
`;
