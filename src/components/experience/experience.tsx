import { useState } from "react";
import styles from "./experience.module.css";
import { getExperiences } from "../../data/cv-data";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useTranslation();
  const experiences = getExperiences(t);
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className={styles.experience}>
      <h2>{t("general.experienceTitle")}</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <div className={styles.companyInfo}>
                  <h3 className={styles.companyName}>{exp.company}</h3>
                  {exp.website && (
                    <a
                      href={exp.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.companyWebsite}
                    >
                      🔗
                    </a>
                  )}
                </div>
                <div className={styles.experiencePeriod}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.duration}>{exp.duration}</span>
                </div>
              </div>

              <div className={styles.position}>{exp.position}</div>

              <button
                className={styles.expandButton}
                onClick={() => toggleExpand(exp.id)}
              >
                {isExpanded ? t("general.collapse") : t("general.more")}
              </button>

              {isExpanded && (
                <>
                  <ul className={styles.description}>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className={styles.technologies}>
                      <strong>{t("general.technologies")}</strong>
                      <div className={styles.technologyTags}>
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className={styles.technologyTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.achievements && (
                    <div className={styles.achievements}>
                      <div className={styles.achievementsTitle}>
                        🏆 {t("general.achievements")}
                      </div>
                      <ul className={styles.achievementsList}>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
