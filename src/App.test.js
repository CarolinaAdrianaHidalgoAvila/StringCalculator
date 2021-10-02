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
  it("Sumar 2 numeros separados por coma", () => {
    expect(StringCalculator("1,2")).toEqual(3);
  });
  it("Sumar 3 numeros separados por coma", () => {
    expect(StringCalculator("1,2,3")).toEqual(6);
  });
  it("Sumar numeros separados por salto", () => {
    expect(StringCalculator("1\n2,3")).toEqual(6);
  });
  it("Sumar numeros separados delimitador especificado", () => {
    expect(StringCalculator("//[-]\n 6-7-4")).toEqual(17);
  });
  it("Sumar numeros separados delimitador especificado con longitud", () => {
    expect(StringCalculator("//[***]\n 1***2***3")).toEqual(6);
  });
  it("Sumar numeros separados por 2 delimitadores especificados", () => {
    expect(StringCalculator("//[*][%]\n1*2%3*7%9")).toEqual(22);
  });
  
});
/* it("Sumar numeros separados por simbolo", () => {
    expect(StringCalculator("1-2,3")).toEqual(6);
  });
  */