import StringCalculator from "./App.js";

describe("Calculadora de una cadena", () => {
  it("cadena vacia 0", () => {
    expect(StringCalculator("")).toEqual(0);
  });
  it("cadena con un solo numero", () => {
    expect(StringCalculator("5")).toEqual(5);
  });
  it("Sumar 2 numeros separados por coma", () => {
    expect(StringCalculator("1,2")).toEqual(3);
  });
});
