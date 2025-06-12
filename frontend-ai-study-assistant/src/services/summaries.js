// src/api/summaries.js
export async function fetchSummaries() {
  const response = await fetch("http://localhost:8000/summaries");
  if (!response.ok) {
    throw new Error("Error al obtener los resúmenes");
  }
  return response.json();
}