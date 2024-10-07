import React from "react";
import { getTasksTextWithHighlightedKeyword } from "layouts/Home/taskandType";
import styles from './IIITB.module.css'; // Importing the module

export default function IIITB() {
  const tasks = [
    {
      text: "Developed and Build a new version customizable website for Advanced Agro Management.",
      keywords: ["Advanced Agro Management"],
    },
    {
      text: "Monitored website performance and handled troubleshooting and WordPress issues.",
      keywords: ["Monitored", "WordPress issues"],
    },
    {
      text: "Managed company WordPress website back-end with Oracle Database including plugins, tools, and themes.",
      keywords: ["Oracle Database"],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
          Software Developer <span className={styles.company}>@ Wordpress</span>
        </span>
        <span className={styles.date}>June - Aug 2019</span>
      </div>
      <div className={styles.taskList}>
        {tasks.map((item, index) => (
          <div key={index} className={styles.taskItem}>
            <span
              className={styles.taskText}
              dangerouslySetInnerHTML={{
                __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
