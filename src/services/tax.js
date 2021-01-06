export async function getCalculatedTax(amount) {
  const response = await fetch(`http://localhost:8080/api/taxCalculation?amount=${amount}`);
  return await response.json();
}
