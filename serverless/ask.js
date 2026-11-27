// Función opcional para "Pregúntale a mi CV" con un modelo de lenguaje (Groq).
// Despliegue: sube esta carpeta a Vercel, define GROQ_API_KEY en Environment Variables
// y pega la URL resultante en window.ASK_ENDPOINT (assets/data.js).
// Sin esta función, el portafolio responde igual con búsqueda local sobre el CV.

const ALLOWED_ORIGIN = "https://sebastian-yengle08.github.io";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method not allowed" });

  const { question, lang, facts } = req.body || {};
  if (typeof question !== "string" || !question.trim() || question.length > 400 || !Array.isArray(facts)) {
    return res.status(400).json({ error: "bad request" });
  }
  const context = facts.slice(0, 40).map((f) => String(f).slice(0, 1200)).join("\n- ");
  const system =
    (lang === "en" ? "Answer in English." : "Responde en español.") +
    " Eres el asistente del CV de Sebastian Yengle Alfaro. Responde SOLO con los datos de abajo, en 1 a 4 frases." +
    " Si la respuesta no está en los datos, di que no está en el CV y sugiere escribir al correo. No inventes nada.\n\nDATOS:\n- " +
    context;

  try {
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + process.env.GROQ_API_KEY },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,
        max_tokens: 300,
        messages: [{ role: "system", content: system }, { role: "user", content: question.trim() }],
      }),
    });
    const j = await r.json();
    const answer = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    return res.status(200).json({ answer: answer || null });
  } catch (e) {
    return res.status(502).json({ error: "upstream error" });
  }
};
