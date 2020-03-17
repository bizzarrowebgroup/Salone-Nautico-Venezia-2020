import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { it, en, TranslationKeys } from "./resources";

i18n.fallbacks = true;
i18n.translations = { it, en };

i18n.locale = Localization.locale;

/*
 * Pass a translation key and receive a translated string, optionally passing a template value.
 * eg.
 * t('act') // Act
 * t('numberToTest', { testing: '300 }) 
 **/
export function t(
  key: keyof TranslationKeys,
  values?: { [id: string]: string }
): string {
  return values ? i18n.t(key, values) : i18n.t(key);
}