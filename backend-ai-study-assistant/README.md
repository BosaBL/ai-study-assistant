# 🧠 Backend – AI Study Assistant

Este backend es la columna vertebral del Asistente de Estudio Personal con IA. Está construido con **FastAPI** y utiliza **LangChain**, **Firebase** y **OpenRouter** para procesar archivos PDF, generar resúmenes, tarjetas educativas y cuestionarios de forma automática usando modelos de lenguaje.

## 🚀 ¿Qué hace este backend?

- 📤 Recibe archivos PDF cargados por el usuario.
- 🔍 Extrae el texto, lo divide en fragmentos y lo analiza con un modelo LLM.
- 🧠 Genera:
  - ✅ Resúmenes con puntos clave.
  - 🧠 Flashcards (tarjetas educativas).
  - ❓ Preguntas tipo test.
- 🔄 Guarda los resultados y el estado del procesamiento en **Firebase Firestore**.
- 📡 Expone endpoints para interactuar con el frontend (subir archivos, revisar estado, obtener resultados, etc).

---

## 📦 Instalación

### 1. Clonar el proyecto

```bash
git clone https://github.com/BosaBL/ai-study-assistant.git
cd ai-study-assistant/backend-ai-study-assistant
```

### 2. Crear entorno virtual (opcional pero recomendado)

```bash
python -m venv env

# En Linux: 
source env/bin/activate  

# En Windows: 
env\Scripts\activate
```

### 3. Instalar dependencias

```bash
pip install -r requirements.txt
```

## ⚙️ Variables de entorno

Crea un archivo .env con las siguientes variables:

```ini
OPENROUTER_API_KEY=tu_clave_openrouter
MODEL_NAME=deepseek/deepseek-r1-0528:free
FIREBASE_CREDENTIALS_PATH=path/a/tu/credencial-firebase.json
FIRESTORE_COLLECTION=pdf_summaries
```

## ▶️ Ejecutar el servidor

```bash
uvicorn src.main:app --reload
```

## 📁 Estructura de carpetas

``` bash
backend-ai-study-assistant/
├── src/
│   ├── main.py            # Punto de entrada principal de FastAPI
├── .env                   # Variables de entorno
├── requirements.txt       # Dependencias del proyecto
└── README.md              # Este archivo
```
## 🧠 Tecnologías principales

- FastAPI – Framework ligero y veloz para APIs.

- LangChain – Para integrarse con modelos de lenguaje.

- Firebase Firestore – Base de datos NoSQL para almacenamiento de resultados.

- OpenRouter – Pasarela para usar modelos LLM como GPT.

- PyPDF2 – Extracción de texto desde archivos PDF.