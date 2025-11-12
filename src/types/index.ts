export type PersonalInfo = {
  name: string;
  position: string;
  birthDate: string;
  location: string;
  citizenship: string;
  workPermit: string;
  relocation: string;
  businessTrips: string;
  employment: string;
  workSchedule: string;
  commuteTime: string;
  salary: string;
};

export type Contact = {
  phone: string;
  email: string;
  github: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string[];
  technologies?: string[];
  website?: string;
  achievements?: string[];
};

export type Education = {
  id: string;
  year: string;
  institution: string;
  faculty: string;
  degree: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Language = {
  name: string;
  level: string;
};

export type Recommendation = {
  company: string;
  contact: string;
  position: string;
};
