import React, { useState } from "react";
import { useTheme } from "../../context/theme-context";
import styles from "./layout.module.css";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
  onExportPdf?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onExportPdf }) => {
  const { theme, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState<string>("ru");

  const changeLanguage = () => {
    setLang((prevLang) => {
      const newLang = prevLang === "ru" ? "en" : "ru";
      i18n.changeLanguage(newLang);
      return newLang;
    });
  };

  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>
        <div className={styles.layoutControls}>
          <button
            className={classNames(styles.controlBtn, styles.themeToggle)}
            onClick={() => changeLanguage()}
          >
            {lang}
          </button>
          <button
            onClick={toggleTheme}
            className={classNames(styles.controlBtn, styles.themeToggle)}
            aria-label='Переключить тему'
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* {onExportPdf && (
            <button
              onClick={onExportPdf}
              className={classNames(styles.controlBtn, styles.pdfExport)}
            >
              📄 {t("general.exportTo")}
            </button>
          )} */}
        </div>
      </header>

      <main className={styles.layoutMain}>{children}</main>
    </div>
  );
};
