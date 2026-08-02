const WHATSAPP_NUMBER = "5519981213385";
const STORE_NAME = "AP Reserve";
const REGULAR_PRICE = 65;
const PROMO_PRICE = 60;
const PROMO_MIN_QTY = 3;

const products = [
  {
    "id": 1,
    "name": "La Nuit Trésor",
    "brand": "Lancôme",
    "inspired": "La Nuit Trésor — Lancôme",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.29157.jpg",
    "official": "https://www.lancome.com.br/la-nuit-tresor",
    "notes": [
      "Pera",
      "Rosa negra",
      "Pralinê",
      "Baunilha"
    ],
    "short": "Gourmand floral, intenso e sedutor.",
    "description": "Uma fragrância noturna e envolvente, em que frutas maduras e rosa escura encontram um acorde gourmand de pralinê, baunilha e madeiras profundas.",
    "occasion": "Noites e ocasiões especiais",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 2,
    "name": "Musk White Intense",
    "brand": "Lattafa",
    "inspired": "Musk White Intense — Lattafa",
    "category": "feminino",
    "price": 65,
    "image": "musk-white-intense.png",
    "official": "https://www.lattafa-usa.com/",
    "notes": [
      "Almíscar branco",
      "Flores claras",
      "Âmbar",
      "Baunilha"
    ],
    "short": "Almiscarado, limpo e confortável.",
    "description": "Um perfume macio e elegante, construído ao redor de almíscares brancos, flores delicadas e uma base levemente adocicada e ambarada.",
    "occasion": "Dia a dia e trabalho",
    "season": "Todas as estações",
    "performance": "Moderada"
  },
  {
    "id": 3,
    "name": "Paradoxe",
    "brand": "Prada",
    "inspired": "Paradoxe — Prada",
    "category": "feminino",
    "price": 65,
    "image": "paradoxe.png",
    "official": "https://www.prada-beauty.com/fragrance/paradoxe/",
    "notes": [
      "Néroli",
      "Jasmim",
      "Âmbar",
      "Almíscar"
    ],
    "short": "Floral ambarado, moderno e luminoso.",
    "description": "Combina flores brancas radiantes com uma base quente e confortável, criando uma assinatura feminina contemporânea, elegante e muito versátil.",
    "occasion": "Trabalho, encontros e eventos",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 4,
    "name": "Delina Exclusif",
    "brand": "Parfums de Marly",
    "inspired": "Delina Exclusif — Parfums de Marly",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.50370.jpg",
    "official": "https://parfums-de-marly.com/products/delina-exclusif",
    "notes": [
      "Lichia",
      "Rosa",
      "Incenso",
      "Baunilha"
    ],
    "short": "Rosa cremosa, doce e opulenta.",
    "description": "Uma rosa luxuosa envolvida por frutas, baunilha, incenso e madeiras macias. Feminina, intensa e sofisticada.",
    "occasion": "Encontros e eventos especiais",
    "season": "Outono e inverno",
    "performance": "Muito alta"
  },
  {
    "id": 5,
    "name": "Velvet Rose & Oud",
    "brand": "Jo Malone London",
    "inspired": "Velvet Rose & Oud — Jo Malone London",
    "category": "feminino",
    "price": 65,
    "image": "velvet-rose-oud.png",
    "official": "https://www.jomalone.com/",
    "notes": [
      "Rosa",
      "Oud",
      "Pralinê",
      "Âmbar"
    ],
    "short": "Floral amadeirado, quente e refinado.",
    "description": "Rosa aveludada e oud escuro se encontram em uma composição rica, elegante e envolvente, com doçura discreta e presença marcante.",
    "occasion": "Noites e ocasiões formais",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 6,
    "name": "Oriana",
    "brand": "Parfums de Marly",
    "inspired": "Oriana — Parfums de Marly",
    "category": "feminino",
    "price": 65,
    "image": "oriana.png",
    "official": "https://parfums-de-marly.com/products/oriana",
    "notes": [
      "Mandarina",
      "Flor de laranjeira",
      "Marshmallow",
      "Almíscar"
    ],
    "short": "Frutado floral, cremoso e delicado.",
    "description": "Uma abertura frutada e cintilante evolui para flores brancas, marshmallow e almíscar, criando uma fragrância alegre, feminina e sofisticada.",
    "occasion": "Encontros e ocasiões especiais",
    "season": "Primavera e outono",
    "performance": "Alta"
  },
  {
    "id": 7,
    "name": "Imagination",
    "brand": "Louis Vuitton",
    "inspired": "Imagination — Louis Vuitton",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.67370.jpg",
    "official": "https://br.louisvuitton.com/por-br/produtos/imagination-nvprod2970067v/LP0219",
    "notes": [
      "Cidra",
      "Bergamota",
      "Chá preto",
      "Ambrox"
    ],
    "short": "Cítrico, elegante e contemporâneo.",
    "description": "Uma fragrância luminosa e sofisticada, com cítricos refinados, especiarias frescas e um elegante acorde de chá preto sobre fundo ambarado.",
    "occasion": "Trabalho, viagens e eventos",
    "season": "Primavera e verão",
    "performance": "Alta"
  },
  {
    "id": 8,
    "name": "La Bomba",
    "brand": "Carolina Herrera",
    "inspired": "La Bomba — Carolina Herrera",
    "category": "feminino",
    "price": 65,
    "image": "la-bomba.png",
    "official": "https://www.carolinaherrera.com/",
    "notes": [
      "Pitaya",
      "Peônia",
      "Frangipani",
      "Baunilha"
    ],
    "short": "Floral frutado, vibrante e exuberante.",
    "description": "Uma criação colorida e expansiva, com frutas tropicais luminosas, flores cremosas e uma base sensual e confortável.",
    "occasion": "Festas, encontros e eventos",
    "season": "Primavera e verão",
    "performance": "Alta"
  },
  {
    "id": 9,
    "name": "La Vie Est Belle",
    "brand": "Lancôme",
    "inspired": "La Vie Est Belle — Lancôme",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.14982.jpg",
    "official": "https://www.lancome.com.br/la-vie-est-belle",
    "notes": [
      "Íris",
      "Pera",
      "Pralinê",
      "Patchouli"
    ],
    "short": "Gourmand, alegre e confortável.",
    "description": "Íris elegante, frutas e um acorde gourmand de pralinê e baunilha formam uma fragrância acolhedora, marcante e muito feminina.",
    "occasion": "Dia a dia, encontros e festas",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 10,
    "name": "Erba Pura",
    "brand": "Xerjoff",
    "inspired": "Erba Pura — Xerjoff",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.55157.jpg",
    "official": "https://www.xerjoff.com/products/erba-pura-eau-de-parfum",
    "notes": [
      "Laranja",
      "Frutas mediterrâneas",
      "Baunilha",
      "Almíscar"
    ],
    "short": "Frutado, doce e expansivo.",
    "description": "Uma cesta vibrante de frutas mediterrâneas e cítricos luminosos repousa sobre almíscar macio e baunilha sensual.",
    "occasion": "Festas e ocasiões marcantes",
    "season": "Primavera e verão",
    "performance": "Muito alta"
  },
  {
    "id": 11,
    "name": "J'adore",
    "brand": "Dior",
    "inspired": "J'adore — Dior",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.210.jpg",
    "official": "https://www.dior.com/pt_br/beauty/products/jadore-eau-de-parfum",
    "notes": [
      "Ylang-ylang",
      "Jasmim",
      "Rosa",
      "Frutas"
    ],
    "short": "Floral luminoso, elegante e clássico.",
    "description": "Um buquê floral sofisticado e radiante, com flores nobres, frutas delicadas e acabamento macio, feminino e atemporal.",
    "occasion": "Trabalho, eventos e ocasiões formais",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 12,
    "name": "Delina La Rosée",
    "brand": "Parfums de Marly",
    "inspired": "Delina La Rosée — Parfums de Marly",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.64667.jpg",
    "official": "https://parfums-de-marly.com/products/delina-la-rosee",
    "notes": [
      "Lichia",
      "Pera",
      "Rosa",
      "Almíscar"
    ],
    "short": "Floral aquático, delicado e luminoso.",
    "description": "Uma versão mais fresca e transparente da rosa, com frutas aquosas, peônia e almíscar, ideal para quem busca elegância leve.",
    "occasion": "Dia a dia e encontros",
    "season": "Primavera e verão",
    "performance": "Moderada-alta"
  },
  {
    "id": 13,
    "name": "My Way",
    "brand": "Giorgio Armani",
    "inspired": "My Way — Giorgio Armani",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.62036.jpg",
    "official": "https://www.giorgioarmanibeauty-usa.com/fragrances/womens-perfume/my-way/",
    "notes": [
      "Flor de laranjeira",
      "Tuberosa",
      "Jasmim",
      "Baunilha"
    ],
    "short": "Floral branco, luminoso e moderno.",
    "description": "Flores brancas cremosas ganham brilho cítrico e uma base confortável de baunilha e madeiras claras.",
    "occasion": "Trabalho, encontros e eventos",
    "season": "Primavera e outono",
    "performance": "Alta"
  },
  {
    "id": 14,
    "name": "Lost Cherry",
    "brand": "Tom Ford",
    "inspired": "Lost Cherry — Tom Ford",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.51411.jpg",
    "official": "https://www.tomfordbeauty.com/product/lost-cherry-eau-de-parfum",
    "notes": [
      "Cereja",
      "Amêndoa amarga",
      "Rosa",
      "Fava tonka"
    ],
    "short": "Frutado licoroso, doce e sedutor.",
    "description": "Cereja madura e licorosa encontra amêndoa, flores e uma base quente de baunilha e fava tonka, criando uma assinatura ousada.",
    "occasion": "Noites, encontros e festas",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 15,
    "name": "Coco Mademoiselle",
    "brand": "Chanel",
    "inspired": "Coco Mademoiselle — Chanel",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.611.jpg",
    "official": "https://www.chanel.com/br/perfumes/p/116520/coco-mademoiselle-eau-de-parfum-spray/",
    "notes": [
      "Laranja",
      "Rosa",
      "Jasmim",
      "Patchouli"
    ],
    "short": "Cítrico floral, chique e versátil.",
    "description": "Cítricos luminosos se unem a rosa, jasmim e patchouli em uma composição elegante, limpa e reconhecidamente sofisticada.",
    "occasion": "Trabalho, eventos e encontros",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 16,
    "name": "L'Eau d'Issey",
    "brand": "Issey Miyake",
    "inspired": "L'Eau d'Issey — Issey Miyake",
    "category": "feminino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.720.jpg",
    "official": "https://www.isseymiyakeparfums.com/",
    "notes": [
      "Lótus",
      "Rosa",
      "Melão",
      "Madeiras"
    ],
    "short": "Aquático floral, leve e atemporal.",
    "description": "Uma fragrância transparente e delicada, com flores aquáticas, frutas frescas e madeiras claras, perfeita para sensação de limpeza.",
    "occasion": "Dia a dia e trabalho",
    "season": "Primavera e verão",
    "performance": "Moderada"
  },
  {
    "id": 17,
    "name": "Aventus",
    "brand": "Creed",
    "inspired": "Aventus — Creed",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.9828.jpg",
    "official": "https://creedboutique.com/products/aventus",
    "notes": [
      "Abacaxi",
      "Bergamota",
      "Bétula",
      "Almíscar"
    ],
    "short": "Frutado, amadeirado e confiante.",
    "description": "Marcante e versátil, combina uma abertura frutada vibrante com madeiras elegantes e um fundo levemente esfumaçado.",
    "occasion": "Trabalho, encontros e eventos",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 18,
    "name": "Thé Noir 29",
    "brand": "Le Labo",
    "inspired": "Thé Noir 29 — Le Labo",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.31872.jpg",
    "official": "https://www.lelabofragrances.com/the-noir-29-148.html",
    "notes": [
      "Bergamota",
      "Figo",
      "Chá preto",
      "Tabaco"
    ],
    "short": "Aromático, amadeirado e contemplativo.",
    "description": "Figo, folhas secas e chá preto formam uma fragrância elegante e introspectiva, com nuances de tabaco, feno e madeiras.",
    "occasion": "Trabalho criativo e noites",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 19,
    "name": "Acqua di Giò",
    "brand": "Giorgio Armani",
    "inspired": "Acqua di Giò — Giorgio Armani",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.410.jpg",
    "official": "https://www.giorgioarmanibeauty-usa.com/fragrances/mens-cologne/acqua-di-gio/",
    "notes": [
      "Notas marinhas",
      "Bergamota",
      "Jasmim",
      "Cedro"
    ],
    "short": "Aquático, cítrico e clássico.",
    "description": "Uma combinação fresca de notas marinhas, cítricos, ervas aromáticas e madeiras, com sensação limpa e naturalmente elegante.",
    "occasion": "Dia a dia, trabalho e lazer",
    "season": "Primavera e verão",
    "performance": "Moderada-alta"
  },
  {
    "id": 20,
    "name": "Hacivat",
    "brand": "Nishane",
    "inspired": "Hacivat — Nishane",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.44174.jpg",
    "official": "https://nishane.com/product/hacivat/",
    "notes": [
      "Abacaxi",
      "Toranja",
      "Cedro",
      "Musgo"
    ],
    "short": "Verde, frutado e sofisticado.",
    "description": "Cítricos e abacaxi encontram madeiras e musgo em uma composição elegante, expansiva e de presença marcante.",
    "occasion": "Trabalho, eventos e ocasiões formais",
    "season": "Todas as estações",
    "performance": "Muito alta"
  },
  {
    "id": 21,
    "name": "Allure Homme Sport",
    "brand": "Chanel",
    "inspired": "Allure Homme Sport — Chanel",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.607.jpg",
    "official": "https://www.chanel.com/br/perfumes/p/123630/allure-homme-sport-eau-de-toilette-spray/",
    "notes": [
      "Mandarina",
      "Notas marinhas",
      "Pimenta",
      "Fava tonka"
    ],
    "short": "Fresco, esportivo e elegante.",
    "description": "Mistura cítricos, frescor marinho, especiarias e uma base cremosa, criando um perfume extremamente versátil e refinado.",
    "occasion": "Dia a dia, academia e encontros",
    "season": "Primavera e verão",
    "performance": "Alta"
  },
  {
    "id": 22,
    "name": "L'Eau d'Issey Pour Homme",
    "brand": "Issey Miyake",
    "inspired": "L'Eau d'Issey Pour Homme — Issey Miyake",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.721.jpg",
    "official": "https://www.isseymiyakeparfums.com/",
    "notes": [
      "Yuzu",
      "Especiarias",
      "Lótus",
      "Vetiver"
    ],
    "short": "Cítrico aquático, limpo e distinto.",
    "description": "Yuzu vibrante, especiarias e madeiras criam um frescor seco e elegante, com personalidade japonesa minimalista.",
    "occasion": "Trabalho e dia a dia",
    "season": "Primavera e verão",
    "performance": "Moderada-alta"
  },
  {
    "id": 23,
    "name": "Bleu de Chanel",
    "brand": "Chanel",
    "inspired": "Bleu de Chanel — Chanel",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.9099.jpg",
    "official": "https://www.chanel.com/br/perfumes/p/107360/bleu-de-chanel-eau-de-parfum-spray/",
    "notes": [
      "Toranja",
      "Incenso",
      "Cedro",
      "Sândalo"
    ],
    "short": "Amadeirado aromático, elegante e versátil.",
    "description": "Cítricos frescos, incenso e madeiras cremosas formam uma assinatura refinada, moderna e adequada para praticamente qualquer ocasião.",
    "occasion": "Trabalho, encontros e eventos",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 24,
    "name": "Sauvage",
    "brand": "Dior",
    "inspired": "Sauvage — Dior",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.31861.jpg",
    "official": "https://www.dior.com/pt_br/beauty/products/sauvage-eau-de-parfum",
    "notes": [
      "Bergamota",
      "Pimenta",
      "Ambroxan",
      "Madeiras"
    ],
    "short": "Fresco, aromático e marcante.",
    "description": "Bergamota luminosa e especiarias encontram uma base ambarada e mineral, resultando em uma fragrância moderna e expansiva.",
    "occasion": "Dia a dia, encontros e festas",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 25,
    "name": "Stallion Leather",
    "brand": "Carolina Herrera",
    "inspired": "Stallion Leather — Carolina Herrera",
    "category": "masculino",
    "price": 65,
    "image": "stallion-leather.png",
    "official": "https://www.carolinaherrera.com/",
    "notes": [
      "Couro",
      "Violeta",
      "Cardamomo",
      "Madeiras"
    ],
    "short": "Couro elegante, escuro e sofisticado.",
    "description": "Uma interpretação luxuosa do couro, suavizada por notas florais e especiarias, com acabamento quente, polido e envolvente.",
    "occasion": "Noites e ocasiões formais",
    "season": "Outono e inverno",
    "performance": "Muito alta"
  },
  {
    "id": 26,
    "name": "Black Orchid",
    "brand": "Tom Ford",
    "inspired": "Black Orchid — Tom Ford",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.1018.jpg",
    "official": "https://www.tomfordbeauty.com/product/black-orchid-eau-de-parfum",
    "notes": [
      "Trufa",
      "Orquídea",
      "Chocolate",
      "Patchouli"
    ],
    "short": "Floral oriental, escuro e opulento.",
    "description": "Uma composição intensa de flores exóticas, especiarias, chocolate e madeiras, criada para quem busca presença e personalidade.",
    "occasion": "Noites e festas",
    "season": "Outono e inverno",
    "performance": "Muito alta"
  },
  {
    "id": 27,
    "name": "Carmina",
    "brand": "Creed",
    "inspired": "Carmina — Creed",
    "category": "feminino",
    "price": 65,
    "image": "carmina.png",
    "official": "https://creedboutique.com/products/carmina",
    "notes": [
      "Cereja negra",
      "Rosa",
      "Violeta",
      "Âmbar"
    ],
    "short": "Floral frutado, sensual e elegante.",
    "description": "Cereja escura e pimenta rosa abrem caminho para rosa e violeta, sobre uma base ambarada, macia e sofisticada.",
    "occasion": "Encontros e eventos especiais",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 28,
    "name": "Oud Maracujá",
    "brand": "Maison Crivelli",
    "inspired": "Oud Maracujá — Maison Crivelli",
    "category": "compartilhavel",
    "price": 65,
    "image": "oud-maracuja.png",
    "official": "https://maisoncrivelli.com/products/oud-maracuja",
    "notes": [
      "Maracujá",
      "Oud",
      "Rosa",
      "Couro"
    ],
    "short": "Frutado exótico, amadeirado e intenso.",
    "description": "O contraste entre maracujá suculento e oud profundo cria uma fragrância ousada, moderna e inesquecível, com couro e rosa ao fundo.",
    "occasion": "Noites e ocasiões marcantes",
    "season": "Outono e inverno",
    "performance": "Muito alta"
  },
  {
    "id": 29,
    "name": "Guidance",
    "brand": "Amouage",
    "inspired": "Guidance — Amouage",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.78656.jpg",
    "official": "https://amouage.com/products/guidance",
    "notes": [
      "Pera",
      "Avelã",
      "Rosa",
      "Sândalo"
    ],
    "short": "Floral frutado, cremoso e hipnótico.",
    "description": "Pera, avelã, açafrão e rosa se unem a madeiras cremosas e âmbar, formando uma fragrância rica, envolvente e original.",
    "occasion": "Encontros e eventos especiais",
    "season": "Outono e inverno",
    "performance": "Muito alta"
  },
  {
    "id": 30,
    "name": "By the Fireplace",
    "brand": "Maison Margiela — Replica",
    "inspired": "By the Fireplace — Maison Margiela — Replica",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.31623.jpg",
    "official": "https://www.maisonmargiela-fragrances.us/fragrances/replica/replica-by-the-fireplace.html",
    "notes": [
      "Castanha",
      "Baunilha",
      "Madeira queimada",
      "Bálsamo"
    ],
    "short": "Amadeirado gourmand, quente e acolhedor.",
    "description": "Evoca uma lareira acesa com madeira tostada, castanhas assadas e baunilha, criando uma sensação aconchegante e nostálgica.",
    "occasion": "Noites frias e momentos aconchegantes",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 31,
    "name": "Bvlgari Man Wood Essence",
    "brand": "Bvlgari",
    "inspired": "Bvlgari Man Wood Essence — Bvlgari",
    "category": "masculino",
    "price": 65,
    "image": "bvlgari-man-wood-essence.png",
    "official": "https://www.bulgari.com/",
    "notes": [
      "Cítricos",
      "Cipreste",
      "Vetiver",
      "Cedro"
    ],
    "short": "Verde amadeirado, moderno e natural.",
    "description": "Cítricos e folhas verdes encontram cipreste, vetiver e cedro, criando uma fragrância urbana com forte conexão à natureza.",
    "occasion": "Trabalho e dia a dia",
    "season": "Primavera e outono",
    "performance": "Alta"
  },
  {
    "id": 32,
    "name": "Bvlgari Black",
    "brand": "Bvlgari",
    "inspired": "Bvlgari Black — Bvlgari",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.154.jpg",
    "official": "https://www.bulgari.com/",
    "notes": [
      "Chá preto",
      "Borracha",
      "Couro",
      "Baunilha"
    ],
    "short": "Fumado, couro e baunilha, muito original.",
    "description": "Uma composição cult que mistura chá preto, borracha, couro e baunilha em um contraste urbano, quente e surpreendente.",
    "occasion": "Noites e ocasiões criativas",
    "season": "Outono e inverno",
    "performance": "Alta"
  },
  {
    "id": 33,
    "name": "Terre d'Hermès",
    "brand": "Hermès",
    "inspired": "Terre d'Hermès — Hermès",
    "category": "masculino",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.17.jpg",
    "official": "https://www.hermes.com/us/en/product/terre-d-hermes-eau-de-toilette-V107188V0/",
    "notes": [
      "Laranja",
      "Pimenta",
      "Vetiver",
      "Cedro"
    ],
    "short": "Cítrico mineral, seco e elegante.",
    "description": "Laranja amarga, pimenta e vetiver se unem a madeiras e notas minerais, criando uma assinatura madura, sofisticada e inconfundível.",
    "occasion": "Trabalho e ocasiões formais",
    "season": "Todas as estações",
    "performance": "Alta"
  },
  {
    "id": 34,
    "name": "Vibrato",
    "brand": "Sospiro",
    "inspired": "Vibrato — Sospiro",
    "category": "compartilhavel",
    "price": 65,
    "image": "vibrato.png",
    "official": "https://sospirointernational.com/",
    "notes": [
      "Toranja",
      "Bergamota",
      "Gengibre",
      "Almíscar"
    ],
    "short": "Cítrico aromático, vibrante e luxuoso.",
    "description": "Cítricos brilhantes e gengibre encontram um coração aromático e uma base limpa de almíscar e madeiras, com efeito elegante e expansivo.",
    "occasion": "Trabalho, viagens e eventos",
    "season": "Primavera e verão",
    "performance": "Alta"
  },
  {
    "id": 35,
    "name": "Bleu L'Exclusif",
    "brand": "Chanel",
    "inspired": "Bleu L'Exclusif — Chanel",
    "category": "masculino",
    "price": 65,
    "image": "bleu-lexclusif.png",
    "official": "https://www.chanel.com/",
    "notes": [
      "Madeiras aromáticas",
      "Âmbar",
      "Couro",
      "Incenso"
    ],
    "short": "Amadeirado intenso, profundo e refinado.",
    "description": "Uma leitura mais densa e luxuosa do universo Bleu, com madeiras escuras, nuances ambaradas e uma presença elegante e noturna.",
    "occasion": "Noites e ocasiões formais",
    "season": "Outono e inverno",
    "performance": "Muito alta"
  },
  {
    "id": 36,
    "name": "Reflection 45",
    "brand": "Amouage",
    "inspired": "Reflection 45 — Amouage",
    "category": "masculino",
    "price": 65,
    "image": "reflection-45.png",
    "official": "https://amouage.com/products/reflection-45-man",
    "notes": [
      "Lavanda",
      "Néroli",
      "Íris",
      "Sândalo"
    ],
    "short": "Cremoso, refinado e luxuoso.",
    "description": "Flores brancas, especiarias suaves e madeiras cremosas formam uma fragrância polida, complexa e extremamente elegante.",
    "occasion": "Eventos e ocasiões formais",
    "season": "Todas as estações",
    "performance": "Muito alta"
  },
  {
    "id": 37,
    "name": "Bal d'Afrique",
    "brand": "Byredo",
    "inspired": "Bal d'Afrique — Byredo",
    "category": "compartilhavel",
    "price": 65,
    "image": "https://fimgs.net/mdimg/perfume/375x500.6458.jpg",
    "official": "https://www.byredo.com/us_en/p/bal-d-afrique-eau-de-parfum",
    "notes": [
      "Bergamota",
      "Néroli",
      "Violeta",
      "Vetiver"
    ],
    "short": "Cítrico floral, solar e artístico.",
    "description": "Uma fragrância luminosa e sofisticada, com cítricos, flores delicadas, vetiver e madeiras, equilibrando frescor e aconchego.",
    "occasion": "Dia a dia, viagens e encontros",
    "season": "Primavera e verão",
    "performance": "Alta"
  }
];

let cart = JSON.parse(localStorage.getItem("apReserveCart") || "[]").filter(i => products.some(p => p.id === i.id));
let favorites = JSON.parse(localStorage.getItem("apReserveFavorites") || "[]");
let currentFilter = "todos";
let currentProduct = null;

const $ = s => document.querySelector(s);
const grid = $("#productGrid");
const money = v => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const categoryLabel = c => c === "compartilhavel" ? "Compartilhável" : c[0].toUpperCase()+c.slice(1);

function renderProducts(){
  const term = $("#searchInput").value.trim().toLowerCase();
  const visible = products.filter(p => (currentFilter === "todos" || p.category === currentFilter) && `${p.name} ${p.brand} ${p.short} ${p.description} ${p.notes.join(" ")}`.toLowerCase().includes(term));
  grid.innerHTML = visible.map(p => `
    <article class="product-card">
      <button class="favorite-button ${favorites.includes(p.id)?'active':''}" onclick="event.stopPropagation();toggleFavorite(${p.id})" aria-label="Favoritar ${p.name}">${favorites.includes(p.id)?'♥':'♡'}</button>
      <button class="product-image" onclick="openProduct(${p.id})" aria-label="Ver detalhes de ${p.name}">
        <img src="${p.image}" alt="Frasco original ${p.inspired}, exibido como referência" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80'">
        <span class="product-badge">${categoryLabel(p.category)}</span>
      </button>
      <div class="product-info">
        <span class="product-reference">Inspiração em ${p.brand}</span>
        <h3>${p.name}</h3><p>${p.short}</p>
        <div class="product-bottom">
          <div class="price"><small>50 ml</small><strong>${money(p.price)}</strong></div>
          <div class="card-actions"><button class="details-button" onclick="openProduct(${p.id})">Detalhes</button><button class="buy-button" onclick="addToCart(${p.id})">Comprar</button></div>
        </div>
      </div>
    </article>`).join("");
  $("#emptyState").style.display = visible.length ? "none" : "block";
}

function toggleFavorite(id){favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];localStorage.setItem("apReserveFavorites",JSON.stringify(favorites));renderProducts()}
function addToCart(id){const existing=cart.find(i=>i.id===id);existing?existing.qty++:cart.push({id,qty:1});saveCart();showToast()}
function changeQty(id,delta){const item=cart.find(i=>i.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);saveCart()}
function removeItem(id){cart=cart.filter(i=>i.id!==id);saveCart()}
function saveCart(){localStorage.setItem("apReserveCart",JSON.stringify(cart));renderCart()}
function getCartTotals(){
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  const promoActive = count >= PROMO_MIN_QTY;
  const unitPrice = promoActive ? PROMO_PRICE : REGULAR_PRICE;
  const originalTotal = count * REGULAR_PRICE;
  const total = count * unitPrice;
  return {count,promoActive,unitPrice,originalTotal,total,savings:originalTotal-total};
}
function renderCart(){
  const totals=getCartTotals();
  $("#cartCount").textContent=totals.count;$("#mobileCartCount").textContent=totals.count;
  $("#cartEmpty").style.display=cart.length?"none":"block";$("#cartItems").style.display=cart.length?"block":"none";
  $("#cartItems").innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-item"><img src="${p.image}" alt=""><div><h4>${p.name}</h4><p>50 ml · ${money(totals.unitPrice)} cada${totals.promoActive?' · preço promocional':''}</p><div class="quantity"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><button class="remove" onclick="removeItem(${p.id})">Remover</button></div>`}).join("");
  const progress=$("#discountProgress");
  if(!totals.count){progress.innerHTML='<strong>Oferta AP Reserve</strong><span>Adicione 3 perfumes e pague R$ 60,00 em cada um.</span>';progress.className='discount-progress';}
  else if(totals.promoActive){progress.innerHTML=`<strong>✓ Desconto aplicado</strong><span>${totals.count} perfumes por ${money(PROMO_PRICE)} cada.</span>`;progress.className='discount-progress active';}
  else {const missing=PROMO_MIN_QTY-totals.count;progress.innerHTML=`<strong>Falta ${missing} ${missing===1?'perfume':'perfumes'}</strong><span>Adicione ${missing===1?'mais um':'mais '+missing} e todos saem por ${money(PROMO_PRICE)} cada.</span>`;progress.className='discount-progress pending';}
  $("#cartOriginalTotal").textContent=money(totals.originalTotal);
  $("#cartSavings").textContent=money(totals.savings);
  $("#cartTotal").textContent=money(totals.total);
  $("#originalTotalRow").style.display=totals.promoActive?'flex':'none';
  $("#savingsRow").style.display=totals.promoActive?'flex':'none';
}

function openCart(){closeModal();$("#cartDrawer").classList.add("open");$("#overlay").classList.add("active");document.body.classList.add("locked")}
function closeCart(){$("#cartDrawer").classList.remove("open");$("#overlay").classList.remove("active");document.body.classList.remove("locked")}
function openProduct(id){
  currentProduct=products.find(p=>p.id===id);const p=currentProduct;
  $("#modalImage").src=p.image;$("#modalName").textContent=p.name;$("#modalInspired").textContent=p.inspired;$("#modalCategory").textContent=categoryLabel(p.category);$("#modalDescription").textContent=p.description;$("#modalNotes").innerHTML=p.notes.map(n=>`<span>${n}</span>`).join("");$("#modalPrice").textContent=money(p.price);$("#officialLink").href=p.official;
  $("#modalOccasion").textContent=p.occasion;$("#modalSeason").textContent=p.season;$("#modalPerformance").textContent=p.performance;
  $("#productModal").classList.add("open");$("#overlay").classList.add("active");document.body.classList.add("locked")
}
function closeModal(){$("#productModal").classList.remove("open");if(!$("#cartDrawer").classList.contains("open")){$("#overlay").classList.remove("active");document.body.classList.remove("locked")}}
function checkout(){
  if(!cart.length){alert("Seu carrinho está vazio.");return}
  const totals=getCartTotals();
  const lines=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `• ${i.qty}x ${p.name} — 50 ml (${money(totals.unitPrice*i.qty)})\n  Inspiração em ${p.brand}`});
  const promoText=totals.promoActive?`\n\n*Desconto AP Reserve aplicado:* ${totals.count} perfumes por ${money(PROMO_PRICE)} cada.\n*Economia:* ${money(totals.savings)}`:'';
  const msg=`Olá! Gostaria de fazer o seguinte pedido na ${STORE_NAME}:\n\n${lines.join("\n\n")}${promoText}\n\n*Total: ${money(totals.total)}*\n\nNome:\nTelefone:\nForma de entrega/retirada:`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
}

function showToast(){$("#toast").classList.add("show");setTimeout(()=>$("#toast").classList.remove("show"),1800)}

document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");currentFilter=btn.dataset.filter;renderProducts()}));
$("#searchInput").addEventListener("input",renderProducts);$("#openCart").onclick=openCart;$("#mobileCart").onclick=openCart;$("#heroCart").onclick=openCart;$("#closeCart").onclick=closeCart;$("#closeModal").onclick=closeModal;$("#overlay").onclick=()=>{closeCart();closeModal()};$("#checkoutButton").onclick=checkout;$("#modalBuy").onclick=()=>{if(currentProduct){addToCart(currentProduct.id);closeModal();openCart()}};$("#year").textContent=new Date().getFullYear();
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCart();closeModal()}});
renderProducts();renderCart();
