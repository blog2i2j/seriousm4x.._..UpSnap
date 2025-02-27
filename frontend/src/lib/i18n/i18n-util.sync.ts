// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.

import { initFormatters } from './formatters';
import type { Locales, Translations } from './i18n-types';
import { loadedFormatters, loadedLocales, locales } from './i18n-util';

import de from './de';
import de_DE from './de-DE';
import en from './en';
import en_US from './en-US';
import es from './es';
import es_ES from './es-ES';
import fr from './fr';
import fr_FR from './fr-FR';
import id from './id';
import id_ID from './id-ID';
import it from './it';
import it_IT from './it-IT';
import ja from './ja';
import ja_JP from './ja-JP';
import nl from './nl';
import nl_NL from './nl-NL';
import pl from './pl';
import pl_PL from './pl-PL';
import pt from './pt';
import pt_PT from './pt-PT';
import zh from './zh';
import zh_CN from './zh-CN';
import zh_TW from './zh-TW';

const localeTranslations = {
	de,
	'de-DE': de_DE,
	en,
	'en-US': en_US,
	es,
	'es-ES': es_ES,
	fr,
	'fr-FR': fr_FR,
	id,
	'id-ID': id_ID,
	it,
	'it-IT': it_IT,
	ja,
	'ja-JP': ja_JP,
	nl,
	'nl-NL': nl_NL,
	pl,
	'pl-PL': pl_PL,
	pt,
	'pt-PT': pt_PT,
	zh,
	'zh-CN': zh_CN,
	'zh-TW': zh_TW
};

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return;

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations;
	loadFormatters(locale);
};

export const loadAllLocales = (): void => locales.forEach(loadLocale);

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale));
