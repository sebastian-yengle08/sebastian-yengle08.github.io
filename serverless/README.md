# Respuestas con IA (opcional)

El portafolio ya responde preguntas con búsqueda local sobre el CV. Si quieres que las respuestas las redacte un modelo (siempre limitado a los datos del CV):

1. Crea un proyecto en Vercel con `ask.js` (carpeta `api/`).
2. Agrega la variable de entorno `GROQ_API_KEY`.
3. Copia la URL de la función en `window.ASK_ENDPOINT`, dentro de `assets/data.js`.

Si la función falla o no responde, el portafolio usa la respuesta local.
