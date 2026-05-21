import { ui, type Locale } from './ui';

export function useTranslations(locale: Locale) {
  return function t(key: keyof typeof ui['es']): string {
    return (ui[locale] as Record<string, string>)[key] ?? ui['es'][key];
  };
}

export function getAlternateUrl(currentUrl: URL, currentLocale: Locale): string {
  const alternate: Locale = currentLocale === 'es' ? 'en' : 'es';
  return currentUrl.pathname.replace(`/${currentLocale}/`, `/${alternate}/`);
}
