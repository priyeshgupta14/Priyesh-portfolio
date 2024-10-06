import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css'; // Import CSS Module

const experiences = [
  {
    company: 'EnsVision',
    description: 'Developed and implemented computer vision algorithms for object detection and tracking.', // Add more details
  },
  {
    company: 'Ypredict.io',
    description: 'Built and deployed machine learning models for predictive analytics.',// Add more details
  },
    {
    company: 'Trouve Tavoie',
    description: 'Designed and developed a web application for local tourism.', // Add more details
  },
    // ... add more experiences
];



export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [barPosition, setBarPosition] = useState(0);
  const experienceRefs = useRef([]);

  useEffect(() => {
      // Calculate bar position based on the selected experience and ref positions
      if (experienceRefs.current[selectedExperience]) {
          const offsetTop = experienceRefs.current[selectedExperience].offsetTop;
          setBarPosition(offsetTop);
      }
  }, [selectedExperience]);
  

  return (
      <div className={styles.experienceContainer}> {/* Use CSS Module class */}
          <div className={styles.header}> {/* Use CSS Module class */}
              <h2>Where I've Worked</h2>
          </div>
          <div className={styles.content}> {/* Use CSS Module class */}
              <div className={styles.companyList}> {/* Use CSS Module class */}
                  <motion.div
                      className={styles.activeBar} /* Use CSS Module class */
                      style={{ top: barPosition }} // Dynamically position the bar
                      layout
                      transition={{ type: "spring", stiffness: 100, damping: 20}} // Smooth animation
                  />
                  {experiences.map((exp, index) => (
                      <button
                          key={index}
                          onClick={() => setSelectedExperience(index)}
                          ref={el => (experienceRefs.current[index] = el)} // Assign refs
                          className={`${styles.companyButton} ${selectedExperience === index ? styles.active : ''}`} // Use CSS Module classes and conditional styling
                      >
                          {exp.company}
                      </button>
                  ))}
              </div>

              <div className={styles.description}> {/* Use CSS Module class */}
                  {/* Render the description of the selected experience */}
                  <p>{experiences[selectedExperience].description}</p>
              </div>
          </div>
      </div>
  );
};