import React from 'react';
// import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from 'layouts/Jobs/taskAndType';
import styles from './IITB.module.css'; // Importing the module

export default function EnsVision() {
  const tasks = [
    {
      text: '• Designed deep learning models with 77% higher energy efficiency on the LIDC-IDRI dataset, maintaining accuracy in classification and segmentation.',
      keywords: ['Alchemy', 'Wagmi', 'Web3.js', 'Moralis', 'Ethers.js'],
    },
    {
      text: '• Implemented automated training and testing procedures to ensure reproducible results.',
      keywords: ['quality', 'testing tasks', 'user base'],
    },
    {
      text: '• Applied model optimizations like pruning and quantization to reduce memory and computational requirements.',
      keywords: ['quality', 'testing tasks', 'user base'],
    },
    {
      text: '• Submitted research findings for publication in MICCAI 2024 proceedings under the E2MIP challenge, focusing on the impact of optimizations on model performance and resource usage.',
      keywords: ['quality', 'testing tasks', 'user base'],
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          {/* Title */}
          <span className={styles.title}>
          MLOps Intern <span className={styles.company}>- Dept of CSE, NIT Puducherry</span>
          </span>
          {/* Date */}
          <span className={styles.date}>December 2023 - January 2024</span>
        </div>
        <div className={styles.taskList}>
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className={styles.taskItem}>
                {/* <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} /> */}
                <span
                  className={styles.taskText}
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
