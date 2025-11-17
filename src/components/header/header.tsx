import styles from "./header.module.css";
import { contacts, getPersonalInfo } from "../../data/cv-data";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const personalInfo = getPersonalInfo(t);
  const isMobile = window.innerWidth < 768;

  return (
    <header className={isMobile ? styles.headerMobile : styles.header}>
      <div className={styles.headerMain}>
        <h1 className={styles.headerName}>{personalInfo.name}</h1>
        <h2 className={styles.headerPosition}>{personalInfo.position}</h2>
        <div className={styles.headerContacts}>
          <span className={styles.contactItem}>📱 {contacts.phone}</span>
          <span className={styles.contactItem}>✉️ {contacts.email}</span>
          <span className={styles.contactItem}>📍 {personalInfo.location}</span>
        </div>
      </div>
      <div
        className={isMobile ? styles.headerDetailsColumn : styles.headerDetails}
      >
        {/* <div className={styles.salary}>{personalInfo.salary}</div> */}
        <div className={styles.workConditions}>
          <span className={`${styles.workTag} ${styles.workTagRemote}`}>
            {personalInfo.workSchedule}
          </span>
          <span className={styles.workTag}>{personalInfo.relocation}</span>
          <span className={styles.workTag}>{personalInfo.businessTrips}</span>
        </div>
      </div>
    </header>
  );
};
