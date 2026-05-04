import type { MenuTranslation } from './structure';

// Italian dish names kept as-is (regional/typical): Strozzapreti, Passatelli,
// Tagliatelle, Tortellini, Bresaola, Piadina/Piada, Squacquerone, prosciutto crudo,
// Caprese, Ortolana, Caprese, Mediterranea, Fantasia (proper recipe names).
// Description is translated into English.
export const en: MenuTranslation = {
  // Antipasti
  'antipasto-misto-pesce': { name: 'Mixed cold seafood platter' },
  'insalata-mare': { name: 'Seafood salad', description: 'Cuttlefish, prawns, celery, carrots and lettuce' },
  'tartare-tonno': { name: 'Tuna tartare', description: 'Avocado, lemon, pink pepper and a side of garlic sauce' },
  'alici-marinate': { name: 'Marinated anchovies', description: 'Caramelised onion and rocket' },
  'cozze-tarantina': { name: 'Mussels alla tarantina', description: 'Served with toasted bread' },
  'bresaola': { name: 'Bresaola, rocket and Grana cheese' },
  'prosciutto-melone': { name: 'Cured ham and melon' },
  'empanadas': { name: 'Fish or meat empanadas (3 pcs)', description: 'Handmade by us' },

  // Primi
  'strozzapreti': { name: 'Strozzapreti with seafood', description: 'Handmade by us!' },
  'passatelli': { name: 'Passatelli alla marinara', description: 'Handmade by us!' },
  'spaghetti-vongole': { name: 'Spaghetti with clams' },
  'tagliatelle-ragu': { name: 'Tagliatelle al ragù', description: 'Handmade by us!' },
  'tortellini-pasticciati': { name: 'Tortellini pasticciati', description: 'Cream and ragù' },

  // Secondi
  'spiedini': { name: 'Three prawn and squid skewers' },
  'fritto-misto': { name: 'Mixed fry', description: 'Prawns, squid and vegetables' },
  'orata-forno': { name: 'Mediterranean oven-baked sea bream fillet', description: 'Long waiting times' },
  'cotoletta-pollo': { name: 'Chicken cutlet with fries' },
  'pescato-giorno': { name: "Ask for today's catch", description: 'Grilled' },

  // Piade
  'piada-completa': { name: 'Completa', description: 'Cured ham, squacquerone cheese and rocket' },
  'piada-veggy-griglia': { name: 'Veggy alla griglia', description: 'Grilled courgettes, aubergines and peppers' },
  'piada-veggy-grate': { name: 'Veggy gratè', description: 'Tomatoes, aubergines, courgettes and peppers au gratin' },
  'piada-controcorrente': { name: 'Controcorrente', description: 'Marinated salmon, squacquerone cheese and rocket' },
  'piada-regina': { name: 'Regina', description: 'Marinated anchovies, caramelised onion and rocket' },
  'piada-raffinata': { name: 'Raffinata', description: 'Shrimps, pink sauce and lettuce' },
  'piada-semplice': { name: 'Semplice', description: 'Cooked ham and mozzarella' },
  'piada-fuori-luogo': { name: 'Fuori luogo', description: 'Stewed onion and sausage' },

  // Insalate
  'insalata-fantasia': { name: 'Fantasia', description: 'Marinated salmon, avocado, orange, lettuce, cherry tomatoes, purple cabbage and toasted almonds' },
  'insalata-nancy': { name: 'Nancy', description: 'Lettuce, tuna, eggs, tomatoes, black olives, mozzarella and carrots' },
  'insalata-golosa': { name: 'Golosa', description: 'Rocket, red and green radicchio, marinated anchovies, mozzarella, capers, artichokes and stuffed olives' },
  'insalata-mediterranea': { name: 'Mediterranea', description: 'Octopus carpaccio, boiled potatoes, taggiasca olives, rocket, red radicchio and raw onion' },
  'insalata-ortolana': { name: 'Ortolana', description: 'Lettuce, rocket, carrots, radicchio and tomato' },
  'insalata-delizia': { name: 'Delizia', description: 'Rocket, radicchio, Grana cheese, mozzarella, shrimps and cherry tomatoes' },
  'insalata-caprese': { name: 'Caprese', description: 'Tomato and Buffalo mozzarella' },

  // Contorni
  'piadina': { name: 'Our handmade piadina' },
  'patatine-dippers': { name: 'Dippers fries' },
  'verdure': { name: 'Grilled vegetables / au gratin' },

  // Piccoli
  'baby-penne': { name: 'Baby penne with tomato' },
  'panino-cotoletta': { name: 'Chicken cutlet sandwich' },
  'ciabatta-crudo': { name: 'Ciabatta with cured ham and cheese' },
  'hamburger': { name: 'Hamburger', description: 'Soft bun and 120g beef' },
  'hot-dog': { name: 'Hot dog' },

  // Dolci
  'rocher': { name: 'Rocher semifreddo', description: 'Hazelnut with chocolate' },
  'cheesecake-fragole': { name: 'Strawberry cheesecake' },
  'tartufo': { name: 'Artisan dark tartufo' },
  'iced-caffe': { name: 'Iced coffee', description: 'Ice cream with coffee, whipped cream and cocoa' },
  'piadina-nutella': { name: 'Piadina with Nutella' },
  'coppa-gelato': { name: 'Ice cream cup small / medium' },
  'gelato-affogato': { name: 'Coffee affogato' },
  'sorbetto': { name: 'Lemon / coffee sorbet' },

  // Frutta
  'macedonia': { name: 'Fruit salad small / large' },
  'fetta-cocomero': { name: 'Slice of watermelon' },
  'cocomero-pezzi': { name: 'Watermelon chunks' },
  'ananas': { name: 'Pineapple portion' },
  'melone': { name: 'Melon portion' },
  'fragole': { name: 'Cup of strawberries' },
  'banana-split': { name: 'Banana Split' },

  // Birre bottiglia
  'amarcord-gradisca': { name: 'Amarcord Gradisca', description: '5.2% vol. Pale lager 50cl — Rimini' },
  'amarcord-volpina': { name: 'Amarcord Volpina', description: '6.5% vol. Red Ale 50cl — Rimini' },
  'beha-euforia': { name: 'Beha Euforia', description: '4.3% vol. Session IPA 33cl — Rimini' },
  'beha-kermesse': { name: 'Beha Kermesse', description: '4.5% vol. Blanche 33cl — Rimini' },
  'moretti-66': { name: 'Moretti 66cl' },
  'weissbier-50': { name: 'Weissbier 50cl' },
  'corona-ceres': { name: 'Corona, Ceres 33cl' },
  'menabrea-heineken': { name: 'Menabrea, Heineken, unfiltered Ichnusa 33cl' },
  'menabrea-heineken-aperitivo': { name: 'Menabrea, Heineken, unfiltered Ichnusa' },

  // Birre spina
  'forst-kronen': { name: 'Forst Kronen', description: '5.2% vol. 20cl / 40cl' },
  'forst-kronen-aperitivo': { name: 'Forst Kronen', description: '5.2% vol. — full-bodied and refreshing — 20cl / 40cl' },

  // Bevande
  'acqua-microfiltrata': { name: 'Microfiltered water 0.75l', description: "L'acqua la fa mél" },
  'bibite-spina': { name: 'Soft drinks on tap small / medium', description: 'Coca-Cola, Sprite' },

  // Aperitivo drinks
  'aperol-spritz': { name: 'Aperol Spritz', description: 'Aperol, prosecco, seltzer' },
  'spritz-campari': { name: 'Campari Spritz', description: 'Campari, prosecco, seltzer' },
  'spritz-select': { name: 'Select Spritz', description: 'Select, prosecco, seltzer' },
  'spritz-blu': { name: 'Blue Spritz', description: 'Blue curaçao, prosecco, white martini, seltzer' },
  'moskow-mule': { name: 'Moscow Mule', description: 'Vodka, ginger beer, ginger, lime' },
  'negroni': { name: 'Negroni', description: 'Gin, red martini, Campari bitter' },
  'americano': { name: 'Americano', description: 'Red vermouth, Campari bitter, soda' },
  'gin-tonic': { name: 'Gin & Tonic', description: 'Standard gin and tonic water — with Premium Gin €10' },
  'hugo': { name: 'Hugo', description: 'Prosecco, elderflower, mint, soda' },
  'japanese-ice-tea': { name: 'Japanese Ice Tea', description: '4 white spirits, midori, sweet and sugar' },
  'pina-colada': { name: 'Piña Colada', description: 'White rum, fresh pineapple, coconut ice cream' },
  'punch-cubano': { name: 'Cuban Punch', description: 'Lime, sugar, aged rum, cola' },
  'mojito': { name: 'Mojito', description: 'White rum, lime juice, soda, mint, brown sugar' },
  'caipirinha': { name: 'Caipirinha', description: 'Cachaça, lime, sugar — with passion fruit or strawberry' },
  'caipiroska': { name: 'Caipiroska', description: 'Vodka, lime, sugar — with passion fruit or strawberry' },

  // Aperitivo analcolici
  'testa-cla': { name: 'Testa clà', description: 'Peach juice, pomegranate juice, ginger beer, lime' },
  'florida': { name: 'Florida', description: 'Passion fruit, grapefruit juice, orange and grenadine' },
  'virgin-mojito': { name: 'Virgin Mojito', description: 'Mint, lime, sugar and lemon soda' },
  'virgin-colada': { name: 'Virgin Colada', description: 'Pineapple juice, coconut ice cream and fresh pineapple' },
  'bitter-crodino': { name: 'Red bitter / Crodino' },
};
