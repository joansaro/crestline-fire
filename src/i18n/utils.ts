import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a localized href. ES (default) lives at root, EN under /en. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/^\//, '').replace(/\/$/, '');
  if (lang === defaultLang) return clean === '' ? '/' : `/${clean}`;
  return clean === '' ? '/en/' : `/en/${clean}/`;
}

/** Given the current URL, return the equivalent path in the other language. */
export function alternatePath(url: URL, lang: Lang): string {
  let path = url.pathname;
  // strip leading /en
  path = path.replace(/^\/en(\/|$)/, '/');
  path = path.replace(/\/$/, '');
  if (path === '') path = '/';
  return localizePath(path, lang);
}
