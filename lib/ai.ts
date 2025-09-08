// Виклик API для створення конспекту
export async function getSummary(text: string) {
  const res = await fetch("/api/notes/summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) throw new Error("Не вдалося створити конспект");
  return res.json(); // { summary: "..."}
}

// Виклик API для створення плану
export async function getPlan(tasks: string) {
  const res = await fetch("/api/planner/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tasks }),
  });

  if (!res.ok) throw new Error("Не вдалося створити план");
  return res.json(); // { plan: "..."}
}
