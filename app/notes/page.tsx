"use client";
import { useState } from "react";
import { getSummary } from "@/lib/ai";
import style from "./notes.module.css";

export default function NotesPage() {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async () => {
    try {
      const { summary } = await getSummary(input);
      setSummary(summary);
    } catch (e) {
      setSummary("An error occurred 😕");
    }
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>AI Editor</h1>
      <div className={style.card}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Insert the text of the lecture..."
          className={style.textarea}
        />
        <button onClick={handleSubmit} className={style.button}>
          Make a summary
        </button>
      </div>

      {summary && (
        <div className={style.summary}>
          <h2 className="text16medium">Summary:</h2>
          <pre>{summary}</pre>
        </div>
      )}
    </div>
  );
}
