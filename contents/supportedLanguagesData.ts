export type SupportedLanguages = "en" | "ar"
export const supportedLanguages: SupportedLanguages[] = ["en" , "ar"] as const;
export const langQueryHeaderName = "x-lang-query";
export const userLastVisitLanguageCookiesName = "user-lang"
export const langUrlQueryName = "lang";
export const defaultLang: SupportedLanguages = "en";