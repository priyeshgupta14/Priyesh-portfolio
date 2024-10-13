import profileImgPlaceholder from 'assets/profile-placeholder.jpg';

import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';              
import { media } from 'utils/style';
import styles from './Profile.module.css';
import myImage from 'assets/gup.jpg';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
  I&apos;m Priyesh, a quantitative researcher focused on developing innovative strategies in the Equity and F&O sections of the Indian stock market. I&apos;m currently pursuing a degree in Data Science and Artificial Intelligence at the{' '}
  <Link href="https://iiitdwd.ac.in/">Indian Institute of Information Technology, Dharwad</Link>. 
  Alongside my expertise in web development with the MERN stack, I have a deep passion for AI and finance, particularly in machine learning and time series modeling.
</Text>
<Text className={styles.description} data-visible={visible} size="l" as="p">
  With <span style={{ fontWeight: 'bold' }}>4 internships</span> completed and <span style={{ fontWeight: 'bold' }}>2 research papers</span> published, my research covers diverse topics, including stock market prediction, LLM fine-tuning for finance, speaker diarization, and metacognitive regulation in learning environments. I have successfully led projects from developing platforms for the specially abled to building AI-powered attention tracking systems and created a comprehensive cryptocurrency trading platform that prioritizes users&apos; mental well-being by assembling innovative features and providing personalized Educational Content.
</Text>
<Text className={styles.description} data-visible={visible} size="l" as="p">
  Proficient in Python, TensorFlow, and PyTorch, I am always eager to tackle real-world challenges 
  with cutting-edge technology. Thriving in dynamic environments, I constantly seek opportunities to push the boundaries of web development and AI.
</Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[myImage, myImage]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  {/* <use href={`${profileKatakana}#katakana-profile`} /> */}
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
