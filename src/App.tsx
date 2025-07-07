import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
import { CountryProvider } from "./context/CountryContext";
function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CountriesPage />} />
          <Route path="/country/:code" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}

export default App;
