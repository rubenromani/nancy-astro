import type { Lang } from '../../i18n/utils';

export type MenuItem = {
  id: string;
  price: string;
  tag?: 'ourFry' | 'recommended' | 'heartDish';
  tagPosition?: 'right' | 'left';
};

export type MenuTranslation = {
  [id: string]: { name: string; description?: string };
};

// Categories (translation keys map to ui.menu.sections.*)
export const antipasti: MenuItem[] = [
  { id: 'antipasto-misto-pesce', price: '€20' },
  { id: 'insalata-mare', price: '€14' },
  { id: 'tartare-tonno', price: '€17' },
  { id: 'alici-marinate', price: '€15' },
  { id: 'cozze-tarantina', price: '€15' },
  { id: 'bresaola', price: '€14' },
  { id: 'prosciutto-melone', price: '€14' },
  { id: 'empanadas', price: '€7' },
];

export const primi: MenuItem[] = [
  { id: 'strozzapreti', price: '€16', tag: 'heartDish', tagPosition: 'left' },
  { id: 'passatelli', price: '€16' },
  { id: 'spaghetti-vongole', price: '€14' },
  { id: 'tagliatelle-ragu', price: '€12' },
  { id: 'tortellini-pasticciati', price: '€14' },
];

export const secondi: MenuItem[] = [
  { id: 'spiedini', price: '€15' },
  { id: 'fritto-misto', price: '€18', tag: 'ourFry', tagPosition: 'right' },
  { id: 'orata-forno', price: '€18' },
  { id: 'cotoletta-pollo', price: '€15' },
  { id: 'pescato-giorno', price: '€6,5/etto' },
];

export const piade: MenuItem[] = [
  { id: 'piada-completa', price: '€8,5' },
  { id: 'piada-veggy-griglia', price: '€8,5' },
  { id: 'piada-veggy-grate', price: '€9' },
  { id: 'piada-controcorrente', price: '€12' },
  { id: 'piada-regina', price: '€12', tag: 'recommended', tagPosition: 'right' },
  { id: 'piada-raffinata', price: '€12' },
  { id: 'piada-semplice', price: '€8' },
  { id: 'piada-fuori-luogo', price: '€9' },
];

export const insalate: MenuItem[] = [
  { id: 'insalata-fantasia', price: '€16' },
  { id: 'insalata-nancy', price: '€12' },
  { id: 'insalata-golosa', price: '€12' },
  { id: 'insalata-mediterranea', price: '€16' },
  { id: 'insalata-ortolana', price: '€9,5' },
  { id: 'insalata-delizia', price: '€15' },
  { id: 'insalata-caprese', price: '€14' },
];

export const contorni: MenuItem[] = [
  { id: 'piadina', price: '€2' },
  { id: 'patatine-dippers', price: '€5' },
  { id: 'verdure', price: '€6 / €7' },
];

export const piccoli: MenuItem[] = [
  { id: 'baby-penne', price: '€8,5' },
  { id: 'panino-cotoletta', price: '€6' },
  { id: 'ciabatta-crudo', price: '€6' },
  { id: 'hamburger', price: '€8' },
  { id: 'hot-dog', price: '€6' },
];

export const dolci: MenuItem[] = [
  { id: 'rocher', price: '€7' },
  { id: 'cheesecake-fragole', price: '€7' },
  { id: 'tartufo', price: '€4,5' },
  { id: 'iced-caffe', price: '€7' },
  { id: 'piadina-nutella', price: '€5' },
  { id: 'coppa-gelato', price: '€4,5 / €6' },
  { id: 'gelato-affogato', price: '€4' },
  { id: 'sorbetto', price: '€4' },
];

export const frutta: MenuItem[] = [
  { id: 'macedonia', price: '€6,5 / €8,5' },
  { id: 'fetta-cocomero', price: '€6' },
  { id: 'cocomero-pezzi', price: '€4' },
  { id: 'ananas', price: '€6' },
  { id: 'melone', price: '€7' },
  { id: 'fragole', price: '€6' },
  { id: 'banana-split', price: '€8' },
];

export const birreBottiglia: MenuItem[] = [
  { id: 'amarcord-gradisca', price: '€7' },
  { id: 'amarcord-volpina', price: '€7' },
  { id: 'beha-euforia', price: '€5' },
  { id: 'beha-kermesse', price: '€5' },
  { id: 'moretti-66', price: '€6' },
  { id: 'weissbier-50', price: '€6' },
  { id: 'corona-ceres', price: '€5' },
  { id: 'menabrea-heineken', price: '€4,5' },
];

export const birreSpina: MenuItem[] = [
  { id: 'forst-kronen', price: '€4 / €6' },
];

export const bevande: MenuItem[] = [
  { id: 'acqua-microfiltrata', price: '€2,5' },
  { id: 'bibite-spina', price: '€4 / €4,5' },
];

// Aperitivo
export const aperitivoDrinks: MenuItem[] = [
  { id: 'aperol-spritz', price: '€7' },
  { id: 'spritz-campari', price: '€7' },
  { id: 'spritz-select', price: '€7' },
  { id: 'spritz-blu', price: '€9' },
  { id: 'moskow-mule', price: '€8' },
  { id: 'negroni', price: '€8' },
  { id: 'americano', price: '€8' },
  { id: 'gin-tonic', price: '€8' },
  { id: 'hugo', price: '€7' },
  { id: 'japanese-ice-tea', price: '€9' },
  { id: 'pina-colada', price: '€10' },
  { id: 'punch-cubano', price: '€9' },
  { id: 'mojito', price: '€9' },
  { id: 'caipirinha', price: '€8' },
  { id: 'caipiroska', price: '€8' },
];

export const aperitivoAnalcolici: MenuItem[] = [
  { id: 'testa-cla', price: '€7' },
  { id: 'florida', price: '€7' },
  { id: 'virgin-mojito', price: '€7' },
  { id: 'virgin-colada', price: '€8' },
  { id: 'bitter-crodino', price: '€5' },
];

export const aperitivoBirreSpina: MenuItem[] = [
  { id: 'forst-kronen-aperitivo', price: '€4 / €6' },
];

export const aperitivoBirreBottiglia: MenuItem[] = [
  { id: 'amarcord-gradisca', price: '€7' },
  { id: 'amarcord-volpina', price: '€7' },
  { id: 'beha-euforia', price: '€5' },
  { id: 'beha-kermesse', price: '€5' },
  { id: 'moretti-66', price: '€6' },
  { id: 'weissbier-50', price: '€6' },
  { id: 'corona-ceres', price: '€5' },
  { id: 'menabrea-heineken-aperitivo', price: '€4,5' },
];

// Cantina (wines)
export type WineItem = {
  id: string;
  name: string; // proper name, kept as-is in all languages
  price: string;
  origin: string; // origin info (translatable region info)
};

export type WineCategory = {
  icon: string;
  labelKey: 'bollicineLocal' | 'bianchiLocal' | 'rossiLocal' | 'bollicineExtra' | 'bianchiExtra';
  items: WineItem[];
};

export const cantinaCategories: WineCategory[] = [
  {
    icon: 'bubble_chart',
    labelKey: 'bollicineLocal',
    items: [
      { id: 'gazzoia', name: 'Gazzoia metodo charmat brut Bio', price: '€18 / €6', origin: 'Valle delle lepri, Coriano, Emilia-Romagna' },
      { id: 'dargento', name: 'Dargento Spumante Millesimato Brut IGP BIO', price: '€19', origin: 'Podere Vecciano, Coriano, Emilia-Romagna' },
      { id: 'follia', name: 'Follia spumante metodo classico Bio', price: '€28 / €7', origin: 'Valle delle lepri, Coriano, Emilia-Romagna' },
      { id: 'ramante', name: 'Ramante Spumante Brut Rosé Millesimato', price: '€19 / €6', origin: 'Podere Vecciano, Coriano, Emilia-Romagna' },
      { id: 'pignoletto', name: 'Pignoletto DOC', price: '€19', origin: 'Leonardo Da Vinci, Emilia-Romagna' },
    ],
  },
  {
    icon: 'liquor',
    labelKey: 'bianchiLocal',
    items: [
      { id: 'pavar', name: 'Pavar bianco Rubicone igt Bio', price: '€16 / €5', origin: 'Valle delle Lepri, Coriano, Emilia-Romagna' },
      { id: 'pesca-bianca', name: 'Pesca bianca rebola DOC Bio', price: '€22 / €7', origin: 'Valle delle Lepri, Coriano, Emilia-Romagna' },
      { id: 'vigna-laginestra', name: 'Vigna Laginestra Rebola DOC Bio', price: '€22 / €7', origin: 'Podere Vecciano, Coriano, Emilia-Romagna' },
      { id: 'vigna-rose', name: 'Vigna delle rose Pagadebit DOC', price: '€18', origin: 'Podere Vecciano, Coriano, Emilia-Romagna' },
    ],
  },
  {
    icon: 'wine_bar',
    labelKey: 'rossiLocal',
    items: [
      { id: 'sprugnolo', name: 'Sprugnolo Sangiovese DOC Bio', price: '€18 / €5', origin: 'Valle delle Lepri, Coriano, Emilia-Romagna' },
    ],
  },
  {
    icon: 'celebration',
    labelKey: 'bollicineExtra',
    items: [
      { id: 'lemanzane', name: 'Lemanzane Prosecco DOC', price: '€18 / €6', origin: 'Lemanzane Conegliano, Valdobbiadene, Treviso' },
      { id: 'franciacorta', name: 'Franciacorta DOCG Brut', price: '€34 / €7', origin: 'Ricci Curbastro, Lombardia' },
      { id: 'champagne', name: 'La Cuvée Champagne Brut', price: '€85', origin: 'Laurent Perrier, Francia' },
    ],
  },
  {
    icon: 'travel_explore',
    labelKey: 'bianchiExtra',
    items: [
      { id: 'falanghina', name: 'Falanghina Nuance igt', price: '€18 / €5', origin: 'Del Sanno, Campania' },
      { id: 'passerina', name: 'Passerina IGT', price: '€18 / €5', origin: 'Castignano, Marche' },
      { id: 'lugana', name: 'Lugana I Frati', price: '€20', origin: 'Ca dei Frati, Lombardia' },
    ],
  },
];

// Loader for translations
import { it } from './it';
import { en } from './en';
import { de } from './de';
import { ru } from './ru';
import { fr } from './fr';

const all: Record<Lang, MenuTranslation> = { it, en, de, ru, fr };

export function getMenuT(lang: Lang): MenuTranslation {
  return new Proxy(all[lang], {
    get(target, prop: string) {
      return target[prop] ?? all.it[prop];
    },
  });
}
