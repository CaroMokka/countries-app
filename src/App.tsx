import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/country/:id" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
