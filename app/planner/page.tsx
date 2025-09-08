"use client";
import { useState } from "react";
import style from "./planner.module.css";

export default function PlannerPage() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState(7);
  const [plan, setPlan] = useState("");

  const handleGeneratePlan = async () => {
    const res = await fetch("/api/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal, days }),
    });
    const data = await res.json();
    setPlan(data.plan);
  };

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>AI Planner</h1>
      <div className={style.card}>
        <input
          type="text"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="For example: Prepare for an exam with..."
          className={style.input}
        />
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          placeholder="Number of days"
          className={style.input}
        />
        <button onClick={handleGeneratePlan} className={style.button}>
          Generate a plan
        </button>
      </div>

      {plan && (
        <div className={style.result}>
          <h2>Your plan:</h2>
          <p>{plan}</p>
        </div>
      )}
    </div>
  );
}
