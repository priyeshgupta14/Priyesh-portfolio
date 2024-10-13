import React from 'react';
import { getTasksTextWithHighlightedKeyword } from 'layouts/Jobs/taskAndType';
import styles from './IITB.module.css'; // Importing the module

export default function IITB() {
  const tasks = [
    {
      text: '• Developed scalable multimodal data analytics solutions for speaker diarization, audio/text processing, emotion recognition, and insight extraction. (Paper Accepted in IEEE-TALE 2024 Conference).',
      keywords: ['TensorFlow'],
    },
    {
      text: '• Collaborated on designing and implementing AffectBots, an Affect-Aware Tutoring System using Computer Vision and machine learning for real-time affect detection.',
      keywords: ['PyTorch, PyAnnote, OpenCV'],
    },
    {
      text: '• Optimized and quantized deep learning models, reducing size by 70% while maintaining accuracy, enabling efficient deployment and scaling of AffectBots.',
      keywords: ['Django'],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>
        Research Associate <span className={styles.company}>- Dept of Educational Technology</span>
        </span>
        <span className={styles.date}>May 2023 - August 2024</span>
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
