import React from "react";
import styles from "./education.module.css";
import { getEducation } from "../../data/cv-data";
import { useTranslation } from "react-i18next";

export const Education: React.FC = () => {
  const { t } = useTranslation();
  const education = getEducation(t);

  return (
    <section className={styles.education}>
      <h2>{t("general.educationTitle")}</h2>
      <div className={styles.educationList}>
        {education.map((edu) => (
          <div key={edu.id} className={styles.educationItem}>
            <div className={styles.educationYear}>{edu.year}</div>
            <div className={styles.educationContent}>
              <h3 className={styles.educationInstitution}>{edu.institution}</h3>
              <div className={styles.educationFaculty}>{edu.faculty}</div>
              <div className={styles.educationDegree}>{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
