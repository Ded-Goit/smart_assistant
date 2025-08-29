// components/Task.tsx
import styles from "./Task.module.css";

interface TaskProps {
  title: string;
  description: string;
}

const Task: React.FC<TaskProps> = ({ title, description }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
  </div>
);

export default Task;
