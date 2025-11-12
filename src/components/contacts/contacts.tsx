import styles from "./contacts.module.css";
import { contacts, getDriving, getRecommendations } from "../../data/cv-data";
import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation();
  const driving = getDriving(t);
  const recommendations = getRecommendations(t);
  return (
    <section className={styles.contacts}>
      <h2>{t("general.contactsTitle")}</h2>

      <div className={styles.contactsGrid}>
        <div className={styles.contactInfo}>
          <h3>📞 {t("general.contact")}</h3>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>{t("general.phone")}:</span>
              <a href={`tel:${contacts.phone}`} className={styles.contactValue}>
                {contacts.phone}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <a
                href={`mailto:${contacts.email}`}
                className={styles.contactValue}
              >
                {contacts.email}
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>GitHub:</span>
              <a
                href={contacts.github}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contactValue}
              >
                {contacts.github.replace("https://", "")}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.recommendations}>
          <h3>👥 {t("general.recommendations")}</h3>
          <div className={styles.recommendationsList}>
            {recommendations.map((rec, index) => (
              <div key={index} className={styles.recommendationItem}>
                <div className={styles.recommendationCompany}>
                  {rec.company}
                </div>
                <div className={styles.recommendationContact}>
                  {rec.contact}
                </div>
                <div className={styles.recommendationPosition}>
                  {rec.position}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.driving}>
          <h3>🚗 {t("general.driving")}</h3>
          <div className={styles.drivingInfo}>
            {driving.hasCar && (
              <div className={styles.drivingItem}>
                <span className={styles.drivingIcon}>🚙</span>
                <span>{t("general.hasAuto")}</span>
              </div>
            )}
            <div className={styles.drivingItem}>
              <span className={styles.drivingIcon}>📜</span>
              <span>{driving.license}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
