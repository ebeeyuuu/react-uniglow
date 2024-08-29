import {
  math_subjects, 
  art_subjects, 
  science_subjects, 
  english_subjects, 
  history_subjects, 
  geography_subjects, 
  physical_education_subjects,
  music_subjects,
  language_subjects,
  technology_subjects 
} from "@/data"
export type Subject = {
  id: string;
  subject: string;
  level: string;
  difficulty: string;
}

export function mergeSubjects(subjectFilter: string[]) {
  const categorizedSubjects: { [key: string]: Subject[] } = {};

  subjectFilter.forEach((subject) => {
    switch (subject) {
      case "Mathematics":
        categorizedSubjects["Mathematics"] = math_subjects;
        break;
      case "Art":
        categorizedSubjects["Art"] = art_subjects;
        break;
      case "Science":
        categorizedSubjects["Science"] = science_subjects;
        break;
      case "English":
        categorizedSubjects["English"] = english_subjects;
        break;
      case "History":
        categorizedSubjects["History"] = history_subjects;
        break;
      case "Geography":
        categorizedSubjects["Geography"] = geography_subjects;
        break;
      case "Physical Education":
        categorizedSubjects["Physical Education"] = physical_education_subjects;
        break;
      case "Music":
        categorizedSubjects["Music"] = music_subjects;
        break;
      case "Languages":
        categorizedSubjects["Languages"] = language_subjects;
        break;
      case "Technology":
        categorizedSubjects["Technology"] = technology_subjects;
        break;
      default:
        console.log(`Subject "${subject}" not recognized.`);
    }
  });

  return categorizedSubjects;
}