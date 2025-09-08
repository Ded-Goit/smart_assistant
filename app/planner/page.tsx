"use client";
import { useState } from "react";
import style from "./planner.module.css";

export default function PlannerPage() {
  const [goal, setGoal] = useState("");
  const [days, setDays] = useState(7);
  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneratePlan = async () => {
    setLoading(true);
    setPlan("");
    try {
      const res = await fetch("/api/planner/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tasks: `Goal: ${goal}, Days: ${days}` }),
      });
      const data = await res.json();
      setPlan(data.plan);
    } catch (e) {
      setPlan("An error occurred 😕");
    } finally {
      setLoading(false);
    }
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
        <button
          onClick={handleGeneratePlan}
          className={style.button}
          disabled={loading}
        >
          {loading ? "Processing..." : "Generate a plan"}
        </button>
      </div>

      {loading && <div className={style.loader}></div>}

      {plan && (
        <div className={style.result}>
          <h2>Your plan:</h2>
          <p>{plan}</p>
        </div>
      )}
    </div>
  );
}
