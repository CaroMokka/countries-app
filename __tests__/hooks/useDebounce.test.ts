import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../../src/hooks/useDebounce";

describe("useDebounce Hook", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("Debería eliminar el rebote del valor después del retraso especificado", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: "initial", delay: 500 },
      }
    );
    expect(result.current).toBe("initial"); //initial: debe devolver el valor inicial inmediatamente

    rerender({ value: "updated", delay: 500 }); //Actualizamos valor antes de que expire el timeout

    expect(result.current).toBe("initial"); //Todavia debe devolver el valor anterior , rebote en progreso

    act(() => {
      jest.advanceTimersByTime(500); // Avanza el tiempo de rebote
    });

    expect(result.current).toBe("updated"); //Ahora devuelve el nuevo valor rebotado
  });
});
