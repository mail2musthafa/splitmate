import { defineRouting } from "next-intl/routing";

export const locales = [
  "en", "hi", "ar", "es", "fr",
  "de", "pt", "ja", "zh", "id",
] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
});
