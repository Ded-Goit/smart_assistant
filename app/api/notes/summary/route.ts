import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

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
            content: "Ти конспектор. Стискай текст у структурований конспект.",
          },
          { role: "user", content: text },
        ],
      }),
    });

    const data = await response.json();
    const summary =
      data.choices?.[0]?.message?.content || "Не вдалося створити конспект 😕";

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Помилка summary API:", error);
    return NextResponse.json(
      { error: "Помилка при створенні конспекту" },
      { status: 500 }
    );
  }
}
