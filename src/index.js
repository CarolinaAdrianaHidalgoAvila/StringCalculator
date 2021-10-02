import StringCalculator from "./App";

const numbers = document.querySelector("#numbers");
const delimitador = document.querySelector("#delimitador");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = Number.parseInt(numbers.value);

  div.innerHTML = "<p>" + StringCalculator(cadena) + "</p>";
});
