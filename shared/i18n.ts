import type { Language } from '../client/src/contexts/LanguageContext';
import { personalityTypes, type PersonalityType } from './personalityTypes';
import { personalityTypesEn } from './personalityTypes.en';
import { questions, type Question } from './questions';
import { questionsEn } from './questions.en';

export function getPersonalityTypes(language: Language): Record<string, PersonalityType> {
  if (language === 'en') {
    // Merge English translations with Korean fallbacks
    const merged: Record<string, PersonalityType> = { ...personalityTypes };
    Object.keys(personalityTypesEn).forEach(key => {
      merged[key] = personalityTypesEn[key];
    });
    return merged;
  }
  return personalityTypes;
}

export function getQuestions(language: Language): Question[] {
  if (language === 'en') {
    // Use English questions if available, else fall back to Korean
    return questionsEn.length > 0 ? [...questionsEn, ...questions.slice(questionsEn.length)] : questions;
  }
  return questions;
}
