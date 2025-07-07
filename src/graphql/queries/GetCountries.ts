import { gql } from "@apollo/client";
import { COUNTRY_FIELDS } from "../fragments/CountryFields";

export const GET_COUNTRIES = gql`
  ${COUNTRY_FIELDS}
  query GetCountries {
    countries {
      ...CountryFields
    }
  }
`;
