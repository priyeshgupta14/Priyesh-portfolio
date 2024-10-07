import React from "react";
// import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "layouts/Home/taskandType";
import styles from './IIITB.module.css'; // Importing the module

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS, Wagmi, Web3.js, Moralis, Ethers.js",
      keywords: ["Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js"],
    },
    {
      text: "Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in ENS",
      keywords: ["smart contracts", "ENS"],
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          {/* Title */}
          <span className={styles.title}>
            Software Engineer <span className={styles.company}>@ web3</span>
          </span>
          {/* Date */}
          <span className={styles.date}>Dec 2022 - Aug 2023</span>
          <span
            className={styles.taskList}
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.vision.io/", "_blank")}
          >
            www.vision.io
          </span>
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