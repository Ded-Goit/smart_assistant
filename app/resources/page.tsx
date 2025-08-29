"use client";

import { useState } from "react";
import styles from "./resources.module.css";
import {
  FaYoutube,
  FaBookOpen,
  FaHeadphones,
  FaCalendarCheck,
  FaTasks,
  FaChartPie,
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineMicrophone } from "react-icons/hi";
import { MdOutlineTimer, MdOutlineTrackChanges } from "react-icons/md";
import { BiCodeBlock, BiGitBranch, BiNotepad } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const resources = [
    {
      title: "Freecodecamp",
      description: "Our mission: to help people learn to code for free.",
      icon: <HiOutlineLightBulb />,
      link: "https://www.freecodecamp.org/learn",
      category: "Course",
    },
    {
      title: "Learn to Learn (Coursera)",
      description: "Powerful mental tools to master difficult subjects.",
      icon: <HiOutlineLightBulb />,
      link: "https://www.coursera.org/learn/learning-how-to-learn",
      category: "Course",
    },
    {
      title: "GoIT",
      description: "library of free microcourses",
      icon: <HiOutlineLightBulb />,
      link: "https://allmarathons-lp-ua.goit.global/",
      category: "Course",
    },
    {
      title: "Prometheus",
      description: "Free Ukrainian online education.",
      icon: <HiOutlineLightBulb />,
      link: "https://prometheus.org.ua",
      category: "Course",
    },
    {
      title: "Neoversity",
      description: "European higher education for new IT leaders",
      icon: <HiOutlineLightBulb />,
      link: "https://neoversity.com.ua/",
      category: "Course",
    },
    {
      title: "Brian Tracy Podcast",
      description: "Self-discipline and 'Eat That Frog'.",
      icon: <HiOutlineMicrophone />,
      link: "https://personaldevelopmentmasterypodcast.com/episode/230-brian-tracy-on-self-discipline-and-eating-that-frog",
      category: "Podcast",
    },
    {
      title: "Noisli",
      description: "Create ambient soundscapes for focus and relaxation.",
      icon: <FaHeadphones />,
      link: "https://www.noisli.com",
      category: "Sound / Focus",
    },
    {
      title: "Seinfeld Strategy",
      description: "Build your habit with daily execution.",
      icon: <FaCalendarCheck />,
      link: "https://screenapp.io/blog/seinfeld-strategy-complete-guide",
      category: "Habit / Planning",
    },
    {
      title: "ClickUp Time Tracking",
      description: "Project time blocking and tracking.",
      icon: <MdOutlineTimer />,
      link: "https://clickup.com/lp/features/project-time-tracking",
      category: "Time Tracker",
    },
    {
      title: "Time Blocking vs Time Boxing",
      description: "Hubstaff blog on productivity techniques.",
      icon: <MdOutlineTrackChanges />,
      link: "https://hubstaff.com/blog/time-blocking-vs-time-boxing",
      category: "Habit / Planning",
    },
    {
      title: "Timeboxing with Clockify",
      description: "Practical guide to timeboxing tasks.",
      icon: <MdOutlineTrackChanges />,
      link: "https://clockify.me/timeboxing",
      category: "Habit / Planning",
    },
    {
      title: "Kanban Tool",
      description: "Apps for Kanban and task management.",
      icon: <FaTasks />,
      link: "https://play.google.com/store/search?q=Kanban%20Tool&c=apps",
      category: "Task Manager",
    },
    {
      title: "Asana",
      description: "Popular project management tool.",
      icon: <FaTasks />,
      link: "https://asana.com",
      category: "Task Manager",
    },
    {
      title: "Jira",
      description: "Project tracking by Atlassian.",
      icon: <FaTasks />,
      link: "https://www.atlassian.com/software/jira",
      category: "Task Manager",
    },
    {
      title: "Clockify",
      description: "Time tracker and timesheet app.",
      icon: <MdOutlineTimer />,
      link: "https://clockify.me",
      category: "Time Tracker",
    },
    {
      title: "Notion",
      description: "All-in-one workspace for notes & projects.",
      icon: <BiNotepad />,
      link: "https://www.notion.com",
      category: "Task Manager",
    },
    {
      title: "Forest App",
      description: "Stay focused by growing virtual trees.",
      icon: <HiOutlineLightBulb />,
      link: "https://play.google.com/store/apps/details?id=cc.forestapp",
      category: "Habit / Planning",
    },
    {
      title: "Freedom App",
      description: "Block distractions and focus deeply.",
      icon: <HiOutlineLightBulb />,
      link: "https://play.google.com/store/apps/details?id=to.freedom.android2",
      category: "Habit / Planning",
    },
    {
      title: "Kaggle",
      description: "Practice data science with competitions and real datasets.",
      icon: <AiOutlineDatabase />,
      link: "https://www.kaggle.com/",
      category: "Dataset / SQL",
    },
    {
      title: "Google Dataset Search",
      description: "Find open datasets for your projects.",
      icon: <AiOutlineDatabase />,
      link: "https://datasetsearch.research.google.com/",
      category: "Dataset / SQL",
    },
    {
      title: "DataCamp",
      description: "Learn data analysis and Python interactively.",
      icon: <HiOutlineLightBulb />,
      link: "https://www.datacamp.com/",
      category: "Course",
    },
    {
      title: "Awesome Public Datasets",
      description: "Huge curated list of free datasets.",
      icon: <AiOutlineDatabase />,
      link: "https://github.com/awesomedata/awesome-public-datasets",
      category: "Dataset / SQL",
    },
    {
      title: "Data.gov.ua",
      description: "Official open data portal of Ukraine.",
      icon: <AiOutlineDatabase />,
      link: "https://data.gov.ua/",
      category: "Dataset / SQL",
    },
    {
      title: "SQLBolt",
      description: "Interactive SQL lessons and exercises.",
      icon: <AiOutlineDatabase />,
      link: "https://sqlbolt.com/",
      category: "Dataset / SQL",
    },
    {
      title: "Tableau Public",
      description: "Free platform for sharing data visualizations.",
      icon: <FaChartPie />,
      link: "https://public.tableau.com/",
      category: "Data Viz",
    },
    {
      title: "Towards Data Science",
      description: "Articles and tutorials on data science and analytics.",
      icon: <FaBookOpen />,
      link: "https://towardsdatascience.com/",
      category: "Article / Summary",
    },
    {
      title: "React Bits",
      description: "Useful React snippets and patterns.",
      icon: <BiCodeBlock />,
      link: "https://www.reactbits.dev/",
      category: "Code / Dev",
    },
    {
      title: "Git by Bit",
      description: "Modern git commands explained.",
      icon: <BiGitBranch />,
      link: "https://gitbybit.com/",
      category: "Code / Dev",
    },
    {
      title: "Database Build",
      description: "Database prototyping tool.",
      icon: <AiOutlineDatabase />,
      link: "https://database.build/",
      category: "Dataset / SQL",
    },
    {
      title: "SQLZoo",
      description: "Free interactive SQL tutorial.",
      icon: <AiOutlineDatabase />,
      link: "https://sqlzoo.net/wiki/SQL_Tutorial",
      category: "Dataset / SQL",
    },
    {
      title: "CodinGame",
      description: "Practice coding through games.",
      icon: <BiCodeBlock />,
      link: "http://codingame.com",
      category: "Code / Dev",
    },
    {
      title: "Eat That Frog (summary - Samuel Davies)",
      description: "Samuel Thomas Davies summary.",
      icon: <FaBookOpen />,
      link: "https://www.samuelthomasdavies.com/book-summaries/business/eat-that-frog",
      category: "Article / Summary",
    },
    {
      title: "Learning how to learn",
      description: "Barbara Oakley's famous talk on how to learn effectively.",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/watch?v=O96fE1E-rf8",
      category: "Video",
    },
    {
      title: "Eat That Frog (video)",
      description: "Brian Tracy's method explained on YouTube.",
      icon: <FaYoutube />,
      link: "https://www.youtube.com/watch?v=cvlUaP54w78",
      category: "Video",
    },
  ];

  const legend = [
    { icon: <FaYoutube />, label: "Video" },
    { icon: <HiOutlineLightBulb />, label: "Course" },
    { icon: <FaBookOpen />, label: "Article / Summary" },
    { icon: <HiOutlineMicrophone />, label: "Podcast" },
    { icon: <FaHeadphones />, label: "Sound / Focus" },
    { icon: <FaCalendarCheck />, label: "Habit / Planning" },
    { icon: <FaTasks />, label: "Task Manager" },
    { icon: <MdOutlineTimer />, label: "Time Tracker" },
    { icon: <AiOutlineDatabase />, label: "Dataset / SQL" },
    { icon: <BiCodeBlock />, label: "Code / Dev" },
    { icon: <FaChartPie />, label: "Data Viz" },
  ];

  const filteredResources =
    activeCategory === null
      ? resources
      : resources.filter((res) => res.category === activeCategory);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.heading}>Additional Resources</h1>
      <div className={styles.legend}>
        <span
          onClick={() => setActiveCategory(null)}
          className={activeCategory === null ? styles.active : ""}
        >
          All
        </span>
        {legend.map((item, idx) => (
          <span
            key={idx}
            onClick={() =>
              setActiveCategory(
                activeCategory === item.label ? null : item.label
              )
            }
            className={activeCategory === item.label ? styles.active : ""}
          >
            {item.icon} {item.label}
          </span>
        ))}
      </div>
      <div className={styles.grid}>
        {filteredResources.map((res, idx) => (
          <a
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className={styles.icon}>{res.icon}</div>
            <div className={styles.content}>
              <h2>{res.title}</h2>
              <p>{res.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
