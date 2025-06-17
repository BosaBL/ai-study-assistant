# 🤖 Asistente de Estudio Personal con IA 🧠

¡Bienvenido al Asistente de Estudio Personal con IA! Esta herramienta está diseñada para ayudarte a potenciar tu aprendizaje, haciendo que tus materiales de estudio sean interactivos y más manejables. Dile adiós a la sobrecarga de información y hola a un estudio inteligente y enfocado.

## 🤔 Problema que Resuelve

Los estudiantes y aprendices de por vida a menudo se enfrentan al desafío de manejar grandes volúmenes de información de clases, libros de texto y apuntes. Puede ser difícil identificar los conceptos clave, poner a prueba tu comprensión y seguir tu progreso de manera efectiva. Este proyecto busca solucionar eso proporcionando un asistente inteligente que automatiza y mejora el proceso de estudio.

## ✨ Características

- **📤 Sube tus Materiales:** Carga fácilmente tus apuntes de clase, artículos o cualquier documento PDF.
- **📝 Resúmenes con IA:** Obtén resúmenes concisos de tus documentos para captar las ideas principales rápidamente.
- **❓ Cuestionarios Interactivos:** La IA genera cuestionarios y tarjetas de memoria (flashcards) a partir de tu material para poner a prueba tus conocimientos.
- **📈 Sigue tu Progreso:** Guarda los resultados de tus cuestionarios y revisa tu progreso a lo largo del tiempo, todo almacenado de forma segura en Firebase.
- **🧠 Inteligente y Eficiente:** Nuestro sistema de backend gestiona sin problemas la subida de archivos, activa el modelo de IA para el procesamiento del contenido y administra tus datos.

## 🚀 Cómo Funciona

1. **Subida de Archivos:** El usuario sube un documento PDF o de texto a través de la interfaz.
2. **Procesamiento en el Backend:** El servidor backend recibe el archivo y lo almacena de forma segura.
3. **Magia de la IA:** Se envía una solicitud a un modelo de IA (como la API de OpenAI) para realizar las siguientes acciones:
   - **Resumir** el contenido.
   - Generar **Tarjetas de Memoria (Flashcards)** con los términos clave.
   - Crear **Preguntas de Cuestionario** basadas en el material.
4. **Interactúa y Aprende:** El resumen y el cuestionario generados se presentan al usuario.
5. **Guarda y Sigue tu Avance:** El progreso y los resultados del usuario se guardan en una base de datos de Firebase, permitiendo revisar y seguir los hitos del aprendizaje.

## 💡 Uso de IA

Este proyecto hace uso de **Deepsek R1 0528 (free) a través de OpenRouter y LangChain** para:
- Extraer el contenido principal del texto.
- Generar automáticamente flashcards.
- Crear cuestionarios tipo test.

Además, durante el desarrollo usamos **ChatGPT Modelo-4o** como asistente para resolver dudas y mejorar la estructura del código.

## 🤓 Detalles Técnicos

### 💪 Tecnologías Utilizadas

1. **💻 React:** Para construir una interfaz de usuario interactiva y receptiva.
2. **⚙️ FastAPI:** Para crear un backend robusto que maneje la lógica de negocio y la comunicación con el LLM.
3. **📁 Firebase:** Para almacenar los resultados de los cuestionarios, tarjetas de memoria y tarjetas de memoria.
4. **🤖 LangChain:** Para integrar el modelo de IA y facilitar la generación de resúmenes, tarjetas de memoria y preguntas de cuestionario.
5. **OpenRouter:** Interfáz que estandariza todas las APIs de LLMs para que sean compatibles con la API de OpenAI.
