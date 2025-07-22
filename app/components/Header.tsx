import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { resumeData } from "../../data/data";
import styles from '../../app/page.module.css';

export default function Header() {
  const { name, title, location, email, linkedin, github } = resumeData;

  return (
    <header id="home" className={styles.header}>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>
          {name}
        </h1>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.location}>
          {location}
        </p>
        <div className={styles.socialLinks}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedin size={28} />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub size={28} />
          </a>
          <a href={`mailto:${email}`} className={styles.socialIcon}>
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </header>
  );
}