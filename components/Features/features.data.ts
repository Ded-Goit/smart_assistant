export interface Feature {
  title: string;
  points: string[];
  img?: string;
}

export const features: Feature[] = [
  {
    title: "Timeline",
    points: [
      "Stay focused and manage distractions effectively",
      "Plan your week and quarters with clarity",
      "Keep motivation high throughout your journey",
      "Build accountability and track real progress",
    ],
    img: "/features/focused_worker.webp",
  },
  {
    title: "Smart Priorities",
    points: [
      "Mark priorities with clear color-coded flags",
      "Focus on what's urgent and important first",
      "Stay on track and complete high-value tasks efficiently",
    ],
    img: "/features/mountain_flag_boy.webp",
  },
  {
    title: "Task Alerts",
    points: [
      "Get notified about tasks by due date and time",
      "Receive alerts a few minutes before your task starts",
      "Set custom reminders to stay on schedule",
      "Never miss an important deadline again",
    ],
  },
  {
    title: "Statistics",
    points: [
      "View task stats with histograms and pie charts",
      "Analyze performance and improve efficiency",
      "Get detailed reports for each task",
    ],
  },
  {
    title: "Time Master",
    points: [
      "Stay focused and minimize distractions",
      "Plan effectively weekly and quarterly",
      "Boost motivation and consistency",
      "Track progress and stay accountable",
    ],
    img: "/features/girl_with_calendar.webp",
  },
  {
    title: "Rewards",
    points: [
      "Earn points when all Pomodoro sessions are completed",
      "Level up after finishing tasks for extra motivation",
      "Celebrate achievements and stay encouraged",
    ],
  },
];