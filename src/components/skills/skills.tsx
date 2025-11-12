import { useTranslation } from "react-i18next";
import { getLanguages, getSkills } from "../../data/cv-data";
import styles from "./skills.module.css";

export const Skills = () => {
  const { t } = useTranslation();
  const skills = getSkills(t);
  const languages = getLanguages(t);

  return (
    <section className='skills'>
      <h2>{t("general.skillsTitle")}</h2>

      <div className={styles.skillsGrid}>
        {skills.map((skillGroup, index) => (
          <div key={index} className={styles.skillCategory}>
            <h3>{skillGroup.category}</h3>
            <div className={styles.skillItems}>
              {skillGroup.items.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.languages}>
        <h3>{t("general.languageTitle")}</h3>
        <div className={styles.skillsGrid}>
          {languages.map((lang, index) => (
            <div key={index} className={styles.languageItem}>
              <span className={styles.languageName}>{lang.name}</span>
              <span className={styles.languageLevel}>{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
