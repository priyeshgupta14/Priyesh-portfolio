import React from "react";
import { motion } from "framer-motion";
import IIITB from "layouts/Home/IIITB";
import NITPY from "layouts/Home/NITPY";
import styles from './Experience.module.css'; // Import the CSS module

export const Experience = () => {
  const barRef = React.useRef(null);
  const [DescriptionJob, setDescriptionJob] = React.useState("Advanced Agro Management");

  const GetDescription = () => {
    switch (DescriptionJob) {
      case "IIITB":
        return <IIITB />;
      case "NITPY":
        return <NITPY />;
      default:
        return null;
    }
  };

  return (
    <div data-aos="fade-up" className={styles.container}>
      <section className={styles.titleSection}>
        <div className={styles.titleSection}>
          <span className={styles.titleNumber}> 02.</span>
        </div>
        <span className={styles.titleText}>Where I&apos;ve Worked</span>
        <div className={styles.divider}></div>
      </section>
      <section className={styles.experienceSection}>
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] = React.useState([true,false]);

  const CompanyButton = (props) => (
    <button
      onClick={() => {
        setBarPosition(props.BarPosition);
        setBarAbovePosition(props.BarAvobePosition);
        props.setDescriptionJob(props.DescriptionJob);
        setCompanyNameBackgroundColorGreen(props.CompanyNameBackgroundColorGreen);
      }}
      className={`${styles.companyButton} ${
        companyNameBackgroundColorGreen[props.ButtonOrderOfcompanyNameBackgroundColorGreen] && styles.selectedCompanyButton
      }`}
    >
      {props.CompanyName}
    </button>
  );

  return (
    <div className={styles.barContainer}>
      <div className={styles.barWrapper}>
        <motion.div animate={{ y: barPosition }} className={styles.animatedBar}></motion.div>
      </div>
      <div className={`${styles.flexCol} ${styles.spaceY1} ${styles.paddingLeft8} ${styles.paddingLeft0Md}`}>
      <CompanyButton
          ButtonOrderOfcompanyNameBackgroundColorGreen={0}
          CompanyName="IIITB"
          BarPosition={-10}
          BarAvobePosition={1}
          DescriptionJob="IIITB"
          CompanyNameBackgroundColorGreen={[true,false]}
          setDescriptionJob={props.setDescriptionJob}
        />
        <CompanyButton
          ButtonOrderOfcompanyNameBackgroundColorGreen={0}
          CompanyName="NITPY"
          BarPosition={-10}
          BarAvobePosition={1}
          DescriptionJob="NITPY"
          CompanyNameBackgroundColorGreen={[false,true]}
          setDescriptionJob={props.setDescriptionJob}
        />
      </div>
      <div className={styles.horizontalBar}>
        <motion.div animate={{ x: barAbovePosition }} className={styles.animatedHorizontalBar}></motion.div>
      </div>
    </div>
  );
};
