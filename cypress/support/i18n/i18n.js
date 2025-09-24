import { csDictionary } from "./cs_dictionary.js";
import { enDictionary } from "./en_dictionary.js";

const getCurrentLanguage = () => {
  return Cypress.env("TEST_LANGUAGE") || "en";
};

const getDictionary = () => {
  const language = getCurrentLanguage();

  switch (language) {
    case "cs":
      return csDictionary;
    case "en":
      return enDictionary;
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
};

export const i18n = getDictionary();

export const allDictionaries = {
  cs: csDictionary,
  en: enDictionary,
};

export const currentLanguage = getCurrentLanguage();
