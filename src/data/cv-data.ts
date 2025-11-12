import {
  PersonalInfo,
  Contact,
  Experience,
  Education,
  Skill,
  Language,
  Recommendation,
} from "../types";

export const contacts: Contact = {
  phone: "+375(29)5191917",
  email: "tribisalexandr@yandex.ru",
  github: "https://github.com/tribisalex",
};

export const getDriving = (t: any) => ({
  hasCar: true,
  license: t("general.license"),
});

export const getPersonalInfo = (t: any): PersonalInfo => ({
  name: t("general.name"),
  position: t("header.position"),
  birthDate: t("general.dateOfBirth"),
  location: t("header.location"),
  citizenship: t("general.citizenship"),
  workPermit: t("general.citiworkPermitzenship"),
  relocation: t("header.relocation"),
  businessTrips: t("header.businessTrips"),
  employment: t("header.employment"),
  workSchedule: t("header.workSchedule"),
  commuteTime: t("header.commuteTime"),
  salary: t("header.salary"),
});

export const getAbout = (t: any) => t("about.text");

export const getExperiences = (t: any): Experience[] => [
  {
    id: "1",
    company: t("general.companyClev"),
    position: t("experience.clevertec.position"),
    period: t("experience.clevertec.period"),
    duration: t("experience.clevertec.duration"),
    description: t("experience.clevertec.description", { returnObjects: true }),
    achievements: t("experience.clevertec.achievements", {
      returnObjects: true,
    }),
    website: "https://clevertech.by/",
  },
  {
    id: "2",
    company: t("general.companyKol"),
    position: t("experience.teacher.position"),
    period: t("experience.teacher.period"),
    duration: t("experience.teacher.duration"),
    description: t("experience.teacher.description", { returnObjects: true }),
    achievements: t("experience.teacher.achievements", { returnObjects: true }),
    website: "https://okvgu.vsu.by/",
  },
];

export const getEducation = (t: any): Education[] => [
  {
    id: "1",
    year: "2023",
    institution: "THE ROLLING SCOPES SCHOOL",
    faculty: t("education.courses.rss.name"),
    degree: t("education.courses.rss.degree"),
  },
  {
    id: "2",
    year: "2022",
    institution: "THE ROLLING SCOPES SCHOOL",
    faculty: t("education.courses.rssPreschool.name"),
    degree: t("education.courses.rssPreschool.degree"),
  },
  {
    id: "3",
    year: "2022",
    institution: "Itransition",
    faculty: t("education.courses.itransition.name"),
    degree: t("education.courses.itransition.degree"),
  },
];

export const getSkills = (t: any): Skill[] => [
  {
    category: t("skills.categories.frontend"),
    items: t("skills.items.frontend", { returnObjects: true }),
  },
  {
    category: t("skills.categories.tools"),
    items: t("skills.items.tools", { returnObjects: true }),
  },
];

export const getLanguages = (t: any): Language[] => [
  {
    name: t("languages.belarusian.name"),
    level: t("languages.belarusian.level"),
  },
  {
    name: t("languages.english.name"),
    level: t("languages.english.level"),
  },
];

export const getRecommendations = (t: any): Recommendation[] => [
  {
    company: "Clevertec",
    contact: t("recommendations.clevertec.contact"),
    position: t("recommendations.clevertec.position"),
  },
  {
    company: t("recommendations.school.company"),
    contact: t("recommendations.school.contact"),
    position: t("recommendations.school.position"),
  },
];
