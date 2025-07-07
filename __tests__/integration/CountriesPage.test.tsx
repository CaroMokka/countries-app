import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

import { CountryProvider } from "../../src/context/CountryContext";
import CountriesPage from "../../src/pages/CountriesPage";
import { GET_COUNTRIES } from "../../src/graphql/queries/GetCountries";
import { mocks } from "../../src/mocks/countriesMock";

describe("<CountriesPage /> integración", () => {
  it("Muestra loading inicialmente", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryProvider>
          <CountriesPage />
        </CountryProvider>
      </MockedProvider>
    );
    expect(screen.getByText(/Cargando países.../i)).toBeInTheDocument();
  });

  it("Muestra error si la query falla", async () => {
    const errorMocks = [
      {
        request: { query: GET_COUNTRIES },
        error: new Error("Error de red"),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <CountryProvider>
          <CountriesPage />
        </CountryProvider>
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  it("Muestra la lista de países y permite filtrar", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <MemoryRouter>
          <CountryProvider>
            <CountriesPage />
          </CountryProvider>
        </MemoryRouter>
      </MockedProvider>
    );

    // Esperamos que ambos países estén visibles inicialmente
    expect(await screen.findByText(/Chile\s*\(/)).toBeInTheDocument();
    expect(await screen.findByText(/China\s*\(/)).toBeInTheDocument();

    // Obtenemos el input para buscar y filtramos por "Chile"
    const searchInput = screen.getByPlaceholderText(/Buscar país.../i);
    fireEvent.change(searchInput, { target: { value: "Chile" } });

    // "Chile" se sigue mostrando
    expect(await screen.findByText(/Chile\s*\(/)).toBeInTheDocument();

    // "China" ya no aparece
    await waitFor(() => {
      expect(screen.queryByText(/China\s*\(/)).not.toBeInTheDocument();
    });

    // No aparece mensaje de "No se encontraron países"
    expect(
      screen.queryByText(/No se encontraron países/)
    ).not.toBeInTheDocument();
  });
});
