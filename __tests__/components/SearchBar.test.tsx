import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../src/components/SearchBar";

describe("<SearchBar />", () => {
  it("Debería renderizar con un valor inicial", () => {
    render(<SearchBar value="test" onChange={() => {}} />);
    const input = screen.getByPlaceholderText(/buscar/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("test");
  });

  it("Debería llamar a onChange al escribir", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    const input = screen.getByPlaceholderText(/buscar/i);

    fireEvent.change(input, { target: { value: "hello" } });

    expect(handleChange).toHaveBeenCalledWith("hello");
  });
});
