import { NextResponse } from "next/server";

const HF_MODEL = "gpt2"; // можна замінити на іншу Hugging Face модель

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // 1. Якщо є ключ OpenAI → використовуємо його
  if (process.env.OPENAI_API_KEY) {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 150,
          }),
        }
      );

      if (!response.ok) {
        return NextResponse.json(
          { error: "OpenAI API error" },
          { status: response.status }
        );
      }

      const data = await response.json();
      return NextResponse.json({
        result:
          data.choices[0]?.message?.content ??
          "🤖 Відповідь від OpenAI не отримана",
        provider: "OpenAI",
      });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { error: "Помилка при запиті до OpenAI API" },
        { status: 500 }
      );
    }
  }

  // 2. Якщо немає OpenAI → fallback на Hugging Face
  if (process.env.HF_API_KEY) {
    try {
      const response = await fetch(
        `https://api-inference.huggingface.co/models/${HF_MODEL}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      if (!response.ok) {
        return NextResponse.json(
          { error: "HuggingFace API error" },
          { status: response.status }
        );
      }

      const data = await response.json();
      return NextResponse.json({
        result:
          data[0]?.generated_text ?? "🤖 Відповідь від HuggingFace не отримана",
        provider: "HuggingFace",
      });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { error: "Помилка при запиті до HuggingFace API" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { error: "Немає API ключів для OpenAI чи HuggingFace" },
    { status: 400 }
  );
}
