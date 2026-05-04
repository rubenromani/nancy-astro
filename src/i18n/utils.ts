import { ui, LANGS, DEFAULT_LANG, type Lang } from './ui';

export { LANGS, DEFAULT_LANG, type Lang };

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as string[]).includes(value);
}

export function getLangFromUrl(url: URL): Lang {
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
  const path = url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const seg = path.split('/').filter(Boolean)[0];
  return isLang(seg) ? seg : DEFAULT_LANG;
}

export function useTranslations(lang: Lang) {
  return ui[lang];
}

const BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

export function localizedPath(lang: Lang, slug: string = ''): string {
  const clean = slug.replace(/^\//, '');
  return `${BASE}/${lang}${clean ? '/' + clean : '/'}`;
}

export function assetPath(p: string): string {
  return `${BASE}/${p.replace(/^\//, '')}`;
}
