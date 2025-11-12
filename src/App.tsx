import React from "react";

import "./app.css";
import { Layout } from "./components/layout";
import { Header } from "./components/header";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Skills } from "./components/skills";
import { Contacts } from "./components/contacts";
import { usePdfExport } from "./hooks/use-pdf-export";
import { ThemeProvider } from "./context/theme-context";
import i18n from "./locales";
import { I18nextProvider } from "react-i18next";

const AppContent: React.FC = () => {
  const { contentRef, exportToPdf } = usePdfExport();

  return (
    <div className='app'>
      <Layout onExportPdf={exportToPdf}>
        <div className='cv-container'>
          <div ref={contentRef}>
            <Header />
            <main className='main-content'>
              <Experience />
              <Education />
              <Skills />
              <Contacts />
            </main>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </I18nextProvider>
  );
};
