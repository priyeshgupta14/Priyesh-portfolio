import React from 'react';
import { motion } from 'framer-motion';
import IITB from 'layouts/Jobs/IITB';
import Vocab from 'layouts/Jobs/vocab';
import IITM from 'layouts/Jobs/IITM';
import NITPY from 'layouts/Jobs/NITPY';
import ArrowDown from 'assets/arrow-down.svg';
import RouterLink from 'next/link';
import styles from './Experience.module.css'; // Import the CSS module
import { useScrollToHash } from 'hooks';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { Section } from 'components/Section';

export function Experience({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  // Set IITM as the default experience section
  const [DescriptionJob, setDescriptionJob] = React.useState('IITM'); // Changed to 'IITM'
  const scrollToHash = useScrollToHash();
  
  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  const GetDescription = () => {
    switch (DescriptionJob) {
      case 'IITM':
        return <IITM />;
      case 'IITB':
        return <IITB />;
      case 'Vocab':
        return <Vocab />;
      case 'NITPY':
        return <NITPY />;
      default:
        return <IITM />;
    }
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div data-aos="fade-up" className={styles.container}>
        <section className={styles.titleSection}>
          <div className={styles.titleSection}>
            <span className={styles.titleNumber}></span>
          </div>
          <span className={styles.titleText}>Where I&apos;ve Worked</span>
          <div className={styles.divider}></div>
        </section>
        <section className={styles.experienceSection}>
          <CompaniesBar setDescriptionJob={setDescriptionJob} />
          <ul className={`${styles.experienceList} ${DescriptionJob && styles.showExperienceList}`}>
            <li className={`${styles.descriptionContainer} ${DescriptionJob && styles.showDescription}`}>
              {GetDescription()}
            </li> {/* Bullet point for each experience */}
          </ul>
        </section>
      </div>
      <RouterLink href="/#experience">
        <a
          className={styles.scrollIndicator}
          data-hidden={scrollIndicatorHidden}
          onClick={handleScrollClick}
        >
          <VisuallyHidden>Scroll to projects</VisuallyHidden>
        </a>
      </RouterLink>
      <RouterLink href="/#project-1">
        <a
          className={styles.mobileScrollIndicator}
          data-hidden={scrollIndicatorHidden}
          onClick={handleScrollClick}
        >
          <VisuallyHidden>Scroll to projects</VisuallyHidden>
          <ArrowDown aria-hidden />
        </a>
      </RouterLink>
    </Section>
  );
}

const CompaniesBar = props => {
  // Set initial positions for the bar and selection
  const [barPosition, setBarPosition] = React.useState(-15); // Default to IITM position
  const [barAbovePosition, setBarAbovePosition] = React.useState(1); // Default to IITM above position
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState([true, false, false, false]); // IITM selected by default

  const CompanyButton = ({ BarPosition, BarAbovePosition, DescriptionJob, ButtonOrderOfcompanyNameBackgroundColorGreen, CompanyName }) => (
    <button
      onClick={() => {
        setBarPosition(BarPosition);
        setBarAbovePosition(BarAbovePosition);
        props.setDescriptionJob(DescriptionJob);

        // Update the selected company state
        const newCompanyBackgrounds = [false, false, false, false];
        newCompanyBackgrounds[ButtonOrderOfcompanyNameBackgroundColorGreen] = true;
        setCompanyNameBackgroundColorGreen(newCompanyBackgrounds);
      }}
      className={`${styles.companyButton} ${
        companyNameBackgroundColorGreen[ButtonOrderOfcompanyNameBackgroundColorGreen] && styles.selectedCompanyButton
      }`}
    >
      {CompanyName}
    </button>
  );

  return (
    <div className={styles.barContainer}>
      <div className={styles.barWrapper}>
        <motion.div
          animate={{ y: barPosition }}
          className={styles.animatedBar}
        ></motion.div>
      </div>
      <div
        className={`${styles.flexCol} ${styles.spaceY1} ${styles.paddingLeft8} ${styles.paddingLeft0Md}`}
      >
        <CompanyButton
          ButtonOrderOfcompanyNameBackgroundColorGreen={0}
          CompanyName="IIT Madras - RBC"
          BarPosition={-15} // Adjust the position as needed
          BarAbovePosition={1}
          DescriptionJob="IITM"
          setDescriptionJob={props.setDescriptionJob}
        />
        <CompanyButton
          ButtonOrderOfcompanyNameBackgroundColorGreen={1}
          CompanyName="IIT Bombay"
          BarPosition={40} // Adjust the position as needed
          BarAbovePosition={2}
          DescriptionJob="IITB"
          setDescriptionJob={props.setDescriptionJob}
        />
        <CompanyButton
          ButtonOrderOfcompanyNameBackgroundColorGreen={2}
          CompanyName="Vocab.AI"
          BarPosition={95} // Adjust the position as needed
          BarAbovePosition={3}
          DescriptionJob="Vocab"
          setDescriptionJob={props.setDescriptionJob}
        />
        <CompanyButton
          ButtonOrderOfcompanyNameBackgroundColorGreen={3}
          CompanyName="NIT Puducherry"
          BarPosition={150} // Adjust the position as needed
          BarAbovePosition={4}
          DescriptionJob="NITPY"
          setDescriptionJob={props.setDescriptionJob}
        />
      </div>
      <div className={styles.horizontalBar}>
        <motion.div
          animate={{ x: barAbovePosition }}
          className={styles.animatedHorizontalBar}
        ></motion.div>
      </div>
    </div>
  );
};
