import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { tasks } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "Ти асистент з тайм-менеджменту. Розподіли завдання по днях та годинах.",
          },
          { role: "user", content: `Мої завдання: ${tasks}` },
        ],
      }),
    });

    const data = await response.json();
    const plan =
      data.choices?.[0]?.message?.content || "Не вдалося створити план 😕";

    return NextResponse.json({ plan });
  } catch (error) {
    console.error("Помилка planner API:", error);
    return NextResponse.json(
      { error: "Помилка при створенні плану" },
      { status: 500 }
    );
  }
}
