const BASE_URL = "http://localhost:8000";

// Procesar PDF
export async function uploadPDF(files) {
  const formData = new FormData();
  for (const file of files) {
    formData.append("files", file);
  }

  const response = await fetch(`${BASE_URL}/process-pdfs`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error al subir el archivo PDF.");
  }

  return await response.json(); // { uuid, status, message }
}

// Obtener estado de procesamiento por UUID
export async function getPDFStatus(uuid) {
  const response = await fetch(`${BASE_URL}/status/${uuid}`);
  if (!response.ok) {
    throw new Error("Error al obtener el estado del procesamiento.");
  }

  return await response.json();
}

// Eliminar resumen por UUID
export async function deleteSummary(uuid) {
  const response = await fetch(`${BASE_URL}/summaries/${uuid}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el resumen.");
  }

  return await response.text();
}

// Listar resúmenes (opcional: status_filter)
export async function listSummaries(limit = 50, status_filter = null) {
  const url = new URL(`${BASE_URL}/summaries`);
  url.searchParams.append("limit", limit);
  if (status_filter) url.searchParams.append("status_filter", status_filter);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error al listar los resúmenes.");
  }

  return await response.json();
}