const PRODUCTS = [
  {
    "asin": "B09547GF99",
    "title": "Scala Plus Papel Toalha Multipicote, 200 Toalhas (2 Rolos de 100 Toalhas Cada)",
    "source_url": "https://www.amazon.com.br/dp/B09547GF99",
    "image": "https://m.media-amazon.com/images/I/71Q5B8kAMtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B09547GF99?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B08BR7FS8J",
    "title": "Ricca Shampoo A Seco Maçã do Amor 150ml",
    "source_url": "https://www.amazon.com.br/dp/B08BR7FS8J",
    "image": "https://m.media-amazon.com/images/I/51Lr+m3CYxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 18.51,
    "affiliate_url": "https://www.amazon.com.br/dp/B08BR7FS8J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FMLBQ136",
    "title": "KitKat Creme Crocante de Chocolate – Pasta para Passar, 330 g",
    "source_url": "https://www.amazon.com.br/dp/B0FMLBQ136",
    "image": "https://m.media-amazon.com/images/I/61VAMMzECnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMLBQ136?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DBRH4Q25",
    "title": "Almofada Inflável de Pescoço para Viagem, Travesseiro Portátil e Confortável para Avião, Carro e Relaxamento (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DBRH4Q25",
    "image": "https://m.media-amazon.com/images/I/41pj2g4JfmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DBRH4Q25?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07DKKQ1TN",
    "title": "L'Oréal Paris Elseve Óleo Extraordinário Creme de Tratamento para Nutrição Intensa de Cabelos Secos, com Micro-Óleos de Flores Preciosas para Maciez e Brilho 300g",
    "source_url": "https://www.amazon.com.br/dp/B07DKKQ1TN",
    "image": "https://m.media-amazon.com/images/I/715M+mgR5ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DKKQ1TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8538089196",
    "title": "Fisher Price - Aprender, brincar e desenhar",
    "source_url": "https://www.amazon.com.br/dp/8538089196",
    "image": "https://m.media-amazon.com/images/I/61GEPzg3TDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 25.32,
    "affiliate_url": "https://www.amazon.com.br/dp/8538089196?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0779BRVVS",
    "title": "SCOTCH 3M Fita Dupla-face Fixa Forte Extrema 24 mm x 2 m 1 Unidade | Suporta até 5 kg por 20 cm, Fixação Permanente, Ideal para Objetos Mais Pesados, Substitui Pregos e Parafusos",
    "source_url": "https://www.amazon.com.br/dp/B0779BRVVS",
    "image": "https://m.media-amazon.com/images/I/71mEwfbHotL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0779BRVVS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CQTLJRR7",
    "title": "Play-Doh, Massinha de Modelar Infantil, Kitchen Creations, Macarrão Mágico - Conjunto de Brinquedo com Acessórios e 2 Potes - A partir de 3 Anos",
    "source_url": "https://www.amazon.com.br/dp/B0CQTLJRR7",
    "image": "https://m.media-amazon.com/images/I/71IYqmemn1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.82,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQTLJRR7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G45G116D",
    "title": "Shampoo Encorpador L'Oréal Paris Elseve Collagen® Lifter 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0G45G116D",
    "image": "https://m.media-amazon.com/images/I/71JdSG1QhRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45G116D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8595202540",
    "title": "Box - Contos de Shakespeare (Volume 1)",
    "source_url": "https://www.amazon.com.br/dp/8595202540",
    "image": "https://m.media-amazon.com/images/I/61-2BMUsNIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.94,
    "affiliate_url": "https://www.amazon.com.br/dp/8595202540?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CTTVR415",
    "title": "Leave-In L'Oréal Paris Elseve Reparação Total 5 Cicatri Renov 100ml | Reparação Instantânea, Desembaraço Imediato, Repara os Danos Fio a Fio, Para Todos os Tipos de Cabelo",
    "source_url": "https://www.amazon.com.br/dp/B0CTTVR415",
    "image": "https://m.media-amazon.com/images/I/61yXyxU11AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTTVR415?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8574120286",
    "title": "O grúfalo",
    "source_url": "https://www.amazon.com.br/dp/8574120286",
    "image": "https://m.media-amazon.com/images/I/A1Yw3SMln2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8574120286?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07XTR3YQ6",
    "title": "Salton Espumante Prosecco Brut 750 Ml",
    "source_url": "https://www.amazon.com.br/dp/B07XTR3YQ6",
    "image": "https://m.media-amazon.com/images/I/61MEMzoeMkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XTR3YQ6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0B694TZC9",
    "title": "L'Oréal Paris Solar Expertise Antioleosidade, Protetor Solar Facial com FPS 60, 12h de Efeito Matte com Ácido Salicílico, Cor 1.0, 40g",
    "source_url": "https://www.amazon.com.br/dp/B0B694TZC9",
    "image": "https://m.media-amazon.com/images/I/811jKj8SMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 33.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B694TZC9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07VGF2P6L",
    "title": "L'Oréal Paris Revitalift Hialurônico Creme Facial Noturno, com Ácido Hialurônico Puro, Com textura leve, preenche linhas de expressão e hidrata a pele intensamente por 24h, 49g",
    "source_url": "https://www.amazon.com.br/dp/B07VGF2P6L",
    "image": "https://m.media-amazon.com/images/I/51dnpdlO-zS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VGF2P6L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CQDGCQVT",
    "title": "Calcinha Absorvente Menstrual Pantys Xodó, Fluxo Moderado, Feminino, Preto, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0CQDGCQVT",
    "image": "https://m.media-amazon.com/images/I/51DGhK2g8qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQDGCQVT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B077BY5B8Q",
    "title": "Maybelline NY The Colossal Volum' Express, Máscara de Cílios Lavável, 9x Mais Volume por Até 24h, Fórmula com Colágeno para Definição Intensa, Não Empelota, Cor Preto, 8ml",
    "source_url": "https://www.amazon.com.br/dp/B077BY5B8Q",
    "image": "https://m.media-amazon.com/images/I/51rTd-hhlGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 40.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY5B8Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "6555327073",
    "title": "Bons tempos: Yesteryear",
    "source_url": "https://www.amazon.com.br/dp/6555327073",
    "image": "https://m.media-amazon.com/images/I/81-ZGsunjkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 47.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6555327073?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BF26JX52",
    "title": "Calcinha Absorvente Menstrual Pantys Cozy, Fluxo Intenso, Feminino, Preto, GG, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0BF26JX52",
    "image": "https://m.media-amazon.com/images/I/51fIrpNLufL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 48.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BF26JX52?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B08Y3CV67L",
    "title": "As extraordinárias viagens de Júlio Verne - Box com 6 livros",
    "source_url": "https://www.amazon.com.br/dp/B08Y3CV67L",
    "image": "https://m.media-amazon.com/images/I/71wgomAPTQS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 50.12,
    "affiliate_url": "https://www.amazon.com.br/dp/B08Y3CV67L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CXJLK24Y",
    "title": "Nescau Bebida Láctea 180ml caixa com 27 unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CXJLK24Y",
    "image": "https://m.media-amazon.com/images/I/61gtHqTqSkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXJLK24Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CV1T6ZB9",
    "title": "Candide, Carrinho de Controle Remoto com três funções, Homem-Aranha Autoracing",
    "source_url": "https://www.amazon.com.br/dp/B0CV1T6ZB9",
    "image": "https://m.media-amazon.com/images/I/61P-3wA9gSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.44,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CV1T6ZB9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CGXZP4T8",
    "title": "LEGO Set City Great Vehicles Carros de Karting e Pilotos 60400 (99 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0CGXZP4T8",
    "image": "https://m.media-amazon.com/images/I/71yC22IyrLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGXZP4T8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FMS8XPT8",
    "title": "LEGO Marvel Homem-Aranha vs. Motocicleta Fantasma com Motocicleta 76335",
    "source_url": "https://www.amazon.com.br/dp/B0FMS8XPT8",
    "image": "https://m.media-amazon.com/images/I/81d1wGnQBXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 61.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMS8XPT8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B01HOJHOLW",
    "title": "Jogo de Facas Premium Tramontina Branco, 3 Peças",
    "source_url": "https://www.amazon.com.br/dp/B01HOJHOLW",
    "image": "https://m.media-amazon.com/images/I/71EVjVGyw8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 62.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B01HOJHOLW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "6555000376",
    "title": "O monstro das cores",
    "source_url": "https://www.amazon.com.br/dp/6555000376",
    "image": "https://m.media-amazon.com/images/I/71KLnFnkVxS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.73,
    "affiliate_url": "https://www.amazon.com.br/dp/6555000376?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DQVRNL95",
    "title": "Ola Coco Sabão Líquido para Roupas Delicadas, 3,8L",
    "source_url": "https://www.amazon.com.br/dp/B0DQVRNL95",
    "image": "https://m.media-amazon.com/images/I/514-mDTxZxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQVRNL95?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D8V3QLDD",
    "title": "Filtro de Linha CLAMPER iCLAMPER Energia 5, 5 Tomadas, Proteção Contra Surtos Elétricos, 10A, Bivolt, Cabo 1m, Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0D8V3QLDD",
    "image": "https://m.media-amazon.com/images/I/51rRxbJnGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8V3QLDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GXWK917R",
    "title": "Blocos Magnéticos de Montar 114 Peças, Cubos 3D de 2 cm, STEM Infantil | 114 peças; cubos de 2 cm; construção 3D; conexão magnética; criatividade, lógica e coordenação; brincadeira STEM; 3+ anos",
    "source_url": "https://www.amazon.com.br/dp/B0GXWK917R",
    "image": "https://m.media-amazon.com/images/I/81IgydmtZfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 68.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXWK917R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FQ6VY7S2",
    "title": "Kit 3 Pacotes Café Especial em Grãos Coffee Mais Variedades: Caparaó, Intenso e Solos Vulcânicos - 100% Arábica (3x250g)",
    "source_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2",
    "image": "https://m.media-amazon.com/images/I/61f5fOGM32L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.71,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "source_url": "https://www.amazon.com.br/dp/B0DLVH2WN4",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CVNK6PDX",
    "title": "Varal De Chão 3 Andares Grande de Roupas Dobrável Regulável Retrátil com Rodinhas e Ganchos Compacto (PRETO)",
    "source_url": "https://www.amazon.com.br/dp/B0CVNK6PDX",
    "image": "https://m.media-amazon.com/images/I/71MrMt7YWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CVNK6PDX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8545717903",
    "title": "Haikyu!! Vol. 22 - BIG",
    "source_url": "https://www.amazon.com.br/dp/8545717903",
    "image": "https://m.media-amazon.com/images/I/71DmC80aEaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.43,
    "affiliate_url": "https://www.amazon.com.br/dp/8545717903?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D8QQ3RBT",
    "title": "Jogo Spicy Ludofun 6+ Anos",
    "source_url": "https://www.amazon.com.br/dp/B0D8QQ3RBT",
    "image": "https://m.media-amazon.com/images/I/61rlPNElwAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8QQ3RBT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0985RJT3K",
    "title": "Philco Ferro a Vapor Travel Ceramic Bivolt Base em Cerâmica",
    "source_url": "https://www.amazon.com.br/dp/B0985RJT3K",
    "image": "https://m.media-amazon.com/images/I/51cMAvfwILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0985RJT3K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09H8P5L6J",
    "title": "Kit Hidratante Facial L'Oréal Paris Revitalift Hialurônico Diurno FPS 20 + Noturno, Tratamento Antirrugas e Preenchedor com Ácido Hialurônico Puro, 49g",
    "source_url": "https://www.amazon.com.br/dp/B09H8P5L6J",
    "image": "https://m.media-amazon.com/images/I/51CqsKH0b9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09H8P5L6J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F67MQCGQ",
    "title": "L'Oréal Paris Elseve Liso dos Sonhos Kit Shampoo, Condicionador e Sérum, com Tecnologia Ativada por Calor para um Liso por 1 Semana, Efeito Antifrizz e Barreira Protetora Contra Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0F67MQCGQ",
    "image": "https://m.media-amazon.com/images/I/817zLg0L03L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F67MQCGQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07J2PCFB3",
    "title": "Sunny, Skye,1342, Pelúcia, 12', Patrulha Canina",
    "source_url": "https://www.amazon.com.br/dp/B07J2PCFB3",
    "image": "https://m.media-amazon.com/images/I/51pI0bdl8AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07J2PCFB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07F4G4LJK",
    "title": "Coup Segunda Edição (Inclui Expansão) | Inclui Expansão",
    "source_url": "https://www.amazon.com.br/dp/B07F4G4LJK",
    "image": "https://m.media-amazon.com/images/I/61UvGpwlI9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 80.01,
    "affiliate_url": "https://www.amazon.com.br/dp/B07F4G4LJK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G6CZQSJM",
    "title": "Colchão Inflável Casal - Colchão de Ar para Camping, Casa e Visitas - 186x150x22cm - Estrutura Honeycomb Reforçada (Bege)",
    "source_url": "https://www.amazon.com.br/dp/B0G6CZQSJM",
    "image": "https://m.media-amazon.com/images/I/51jbX7oCqDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 85.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6CZQSJM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GTRRRWH4",
    "title": "L'Oréal Paris Elseve Collagen Lifter Kit Shampoo, Condicionador e Sérum",
    "source_url": "https://www.amazon.com.br/dp/B0GTRRRWH4",
    "image": "https://m.media-amazon.com/images/I/61JHE7YsN3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTRRRWH4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BFTBDGDD",
    "title": "Tech T-shirt Gola U Masculino",
    "source_url": "https://www.amazon.com.br/dp/B0BFTBDGDD",
    "image": "https://m.media-amazon.com/images/I/61drI9s-tiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFTBDGDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0010ED5FC",
    "title": "Palmer's Palmers Cocoa Butter Formula Loção De Massagem Para Estrias 250Ml Palmers Cocoa Butter 250Ml",
    "source_url": "https://www.amazon.com.br/dp/B0010ED5FC",
    "image": "https://m.media-amazon.com/images/I/71T+JD0dadL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0010ED5FC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B01643LCLW",
    "title": "Chapa Cerâmica Preta, Taiff, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B01643LCLW",
    "image": "https://m.media-amazon.com/images/I/51ArZ3wjjnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 90.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B01643LCLW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09CFP2PHS",
    "title": "Hot Wheels City Pista de Brinquedo Reboque de Dragão 3 anos",
    "source_url": "https://www.amazon.com.br/dp/B09CFP2PHS",
    "image": "https://m.media-amazon.com/images/I/61hZBirHbAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 91.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B09CFP2PHS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DCK1M2G2",
    "title": "Bettdow SmartWatch, relogio smartwatch com 1.91\" Ecrã tátil e AI, à prova d'água IP68, relogio feminino e masculino com 100+ Modos Esportivos Faz e Recebe Ligações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DCK1M2G2",
    "image": "https://m.media-amazon.com/images/I/51RZva4qWGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.64,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DCK1M2G2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DGTKZ2S1",
    "title": "Bebedouro para Gatos, 3L Fonte Gato Inox Comedouros, Bebedouros e Acessorios para Gatos, Silenciosa, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1",
    "image": "https://m.media-amazon.com/images/I/61EJXP1YreL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B095VF5GR7",
    "title": "Chuveiro Loren Shower Eletrônico 7500w 220v Lorenzetti",
    "source_url": "https://www.amazon.com.br/dp/B095VF5GR7",
    "image": "https://m.media-amazon.com/images/I/31fyFHV8H-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B095VF5GR7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DJ1BH9T1",
    "title": "LEGO City Great Vehicles Utilitário Off-Road 4x4 60447 (221 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DJ1BH9T1",
    "image": "https://m.media-amazon.com/images/I/810wFczGM6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ1BH9T1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F44FW66K",
    "title": "Baby Alive Festinha do Chá LaLa GooGoo boneca loira em plástico, brinquedo",
    "source_url": "https://www.amazon.com.br/dp/B0F44FW66K",
    "image": "https://m.media-amazon.com/images/I/61Nt0ZlWs+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 106.71,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F44FW66K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "6554480870",
    "title": "A Saga de Elric – Livro 1 (de 3) | Reimpressão",
    "source_url": "https://www.amazon.com.br/dp/6554480870",
    "image": "https://m.media-amazon.com/images/I/81kWVhmRrAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/6554480870?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FSBF47QF",
    "title": "Secador de Cabelo de Parede 1800W 220V – Montagem na Parede, 2 Velocidades, Baixo Ruído, Ar Frio, Cabo Espiral, Uso em Banheiro/Hotel/Pousada, Material Antichamas",
    "source_url": "https://www.amazon.com.br/dp/B0FSBF47QF",
    "image": "https://m.media-amazon.com/images/I/51im-bWSb8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSBF47QF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0B4PG4XP7",
    "title": "Chapa Taiff Red Ion, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0B4PG4XP7",
    "image": "https://m.media-amazon.com/images/I/416YMvXdpNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 118.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B4PG4XP7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8516123391",
    "title": "Gramática Fundamental 2",
    "source_url": "https://www.amazon.com.br/dp/8516123391",
    "image": "https://m.media-amazon.com/images/I/71Y-hlHjPqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 118.72,
    "affiliate_url": "https://www.amazon.com.br/dp/8516123391?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HGNHWCJ5",
    "title": "Kit 2 Filtros/Refis Originais de Água Acqua Pure para Purificador Electrolux PE12A/PE12B/PE12G/PE12V/PE12P",
    "source_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5",
    "image": "https://m.media-amazon.com/images/I/51+rMeILUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D9PL8638",
    "title": "Aspirador de Pó Vertical Britânia 2 em 1 com Filtro Ciclone 1400W BAS30 1,5L Azul 220V",
    "source_url": "https://www.amazon.com.br/dp/B0D9PL8638",
    "image": "https://m.media-amazon.com/images/I/41BWOPa7xqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9PL8638?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DNHGQHMY",
    "title": "Bettdow SmartWatch, relogio smartwatch com Ecrã tátil e Alexa, à prova d'água IP68, relogio feminino e masculino, com 100+ modo esportivo e recebimento de notificações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DNHGQHMY",
    "image": "https://m.media-amazon.com/images/I/61jq8y1sVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNHGQHMY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FVFYJLYL",
    "title": "Jogo de Panela antiaderente 9 peças",
    "source_url": "https://www.amazon.com.br/dp/B0FVFYJLYL",
    "image": "https://m.media-amazon.com/images/I/511p51Ku0pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 121.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVFYJLYL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DRW6C2RF",
    "title": "LEGO Botanicals Plantas Felizes 10349 (217 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DRW6C2RF",
    "image": "https://m.media-amazon.com/images/I/81vx7mli+gL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 123.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DRW6C2RF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0C4476NM8",
    "title": "Aspirador de Pó Philco Vertical 2 em 1 1450w Preto Pas1600p - 127",
    "source_url": "https://www.amazon.com.br/dp/B0C4476NM8",
    "image": "https://m.media-amazon.com/images/I/41inGaNI2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 131.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C4476NM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H2G38ZNW",
    "title": "Kit 3 Cremes Pomadas de Assaduras Vit B5 com 100g cada, Total 300g - Bepantol Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H2G38ZNW",
    "image": "https://m.media-amazon.com/images/I/61HlHA-XVpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 134.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2G38ZNW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FFT7WR18",
    "title": "Kit Pista Hot Wheels City Oficina Gorila Mattel 4 Anos Ou Mais | Conjunto de pistas com várias maneiras de jogar, inclui lançador e loop, compatível com faixa Speed Snap",
    "source_url": "https://www.amazon.com.br/dp/B0FFT7WR18",
    "image": "https://m.media-amazon.com/images/I/71ebd+koKtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFT7WR18?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DFQK6FS3",
    "title": "Fralda Pampers Premium Care Pants Tamanho XXXG 80 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B0DFQK6FS3",
    "image": "https://m.media-amazon.com/images/I/61LPNQ6rfmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.11,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DFQK6FS3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H948WH9L",
    "title": "Creality 2 Rolos Filamentos Soleyin Ultra PLA 1,75 mm para Impressoras 3D, Velocidade de 300 mm/s, Alta Precisão e Sustentabilidade,para a Maioria das Impressoras 3D (cinza fosco*2 kg)",
    "source_url": "https://www.amazon.com.br/dp/B0H948WH9L",
    "image": "https://m.media-amazon.com/images/I/71k+nN2R3dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 144.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H948WH9L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CFYSFBPP",
    "title": "SUNNY, Patrulha Canina, Carro Patrulheiro do Filme com Carrinho",
    "source_url": "https://www.amazon.com.br/dp/B0CFYSFBPP",
    "image": "https://m.media-amazon.com/images/I/51+Wo-mIcpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 146.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFYSFBPP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0C2J8XTYY",
    "title": "Lâminas de Reposição Originais Philips OneBlade QP630/51 Aço Inoxidável - Raspa, Apara e Contorna - Pacote com 3 un",
    "source_url": "https://www.amazon.com.br/dp/B0C2J8XTYY",
    "image": "https://m.media-amazon.com/images/I/81jIOcGhrTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2J8XTYY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H941QT3Q",
    "title": "Creality 2 Rolos Filamentos Soleyin Ultra PLA 1,75 mm para Impressoras 3D, Velocidade de 300 mm/s, Alta Precisão e Sustentabilidade,para a Maioria das Impressoras 3D (branco fosco*2 kg)",
    "source_url": "https://www.amazon.com.br/dp/B0H941QT3Q",
    "image": "https://m.media-amazon.com/images/I/613YMgRgSRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 152.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H941QT3Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07F6LX5CC",
    "title": "Modelador 1 Curves, Taiff, Bivolt, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07F6LX5CC",
    "image": "https://m.media-amazon.com/images/I/51DTuoHiFQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 153.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B07F6LX5CC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8576575329",
    "title": "Box Jurassic Park - Edição capa dura",
    "source_url": "https://www.amazon.com.br/dp/8576575329",
    "image": "https://m.media-amazon.com/images/I/811m3jojddL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.89,
    "affiliate_url": "https://www.amazon.com.br/dp/8576575329?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D9BLXHWH",
    "title": "Disney Frozen Casa de Bonecas Castelo da Elsa Empilhável 3 anos",
    "source_url": "https://www.amazon.com.br/dp/B0D9BLXHWH",
    "image": "https://m.media-amazon.com/images/I/617BG02ipHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 156.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9BLXHWH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FMS7XL6Q",
    "title": "LEGO Speed Champions Carro Esportivo Ferrari SF90 XX Stradale 77254 | Brinquedo de Montar, Anos 9+, Meninos e Meninas, Brinquedo e Miniatura de Carro, 284 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0FMS7XL6Q",
    "image": "https://m.media-amazon.com/images/I/81J9dcOx-JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 168.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMS7XL6Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FNVLLQKT",
    "title": "Kit Haltere 6 em 1 Ajustável para Musculação - Preto - Multifuncional com Barra e Kettlebell",
    "source_url": "https://www.amazon.com.br/dp/B0FNVLLQKT",
    "image": "https://m.media-amazon.com/images/I/61ISeRgb21L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 169.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNVLLQKT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D1CVDHLN",
    "title": "SUNNY, Bitzee Magicals, Pet Interativo Virtual",
    "source_url": "https://www.amazon.com.br/dp/B0D1CVDHLN",
    "image": "https://m.media-amazon.com/images/I/51u2+IC1OzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 176.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1CVDHLN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07GPRWFC5",
    "title": "Mouse Gamer Sem Fio Logitech G305 LIGHTSPEED com 6 Botões Programáveis e Até 12.000 DPI - Preto",
    "source_url": "https://www.amazon.com.br/dp/B07GPRWFC5",
    "image": "https://m.media-amazon.com/images/I/51sg9BLSMTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07GPRWFC5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "source_url": "https://www.amazon.com.br/dp/B07VPFC6RN",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CRTPF7CZ",
    "title": "soundcore P30i da Anker, ANC Fone de Ouvido Bluetooth 5.4 Sem Fio, TWS",
    "source_url": "https://www.amazon.com.br/dp/B0CRTPF7CZ",
    "image": "https://m.media-amazon.com/images/I/51MgcnjJKRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRTPF7CZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B00NHQFA1I",
    "title": "LEGO Classic - Caixa Média de Peças Criativas",
    "source_url": "https://www.amazon.com.br/dp/B00NHQFA1I",
    "image": "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00NHQFA1I?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "8533970897",
    "title": "Vade Mecum Acadêmico De Direito Rideel - Tradicional - 2026.2",
    "source_url": "https://www.amazon.com.br/dp/8533970897",
    "image": "https://m.media-amazon.com/images/I/51HU6DuuURL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 209.9,
    "affiliate_url": "https://www.amazon.com.br/dp/8533970897?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GZR6JJXK",
    "title": "Ropo Desumidificador elétrico Secapro 16-600ml, Previne mofo e fungo, bivolt.",
    "source_url": "https://www.amazon.com.br/dp/B0GZR6JJXK",
    "image": "https://m.media-amazon.com/images/I/41deIOmcnLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 210.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZR6JJXK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B088MVWBM9",
    "title": "Philco Aspirador Pó Vertical Power Clean 2000W PAS4000V 127V",
    "source_url": "https://www.amazon.com.br/dp/B088MVWBM9",
    "image": "https://m.media-amazon.com/images/I/41El3TMO04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 211.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B088MVWBM9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "6555323876",
    "title": "Saga Jogos Vorazes: Coleção com 4 livros",
    "source_url": "https://www.amazon.com.br/dp/6555323876",
    "image": "https://m.media-amazon.com/images/I/51DOrBgrW9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 217.86,
    "affiliate_url": "https://www.amazon.com.br/dp/6555323876?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FQK3V9QF",
    "title": "Bettdow SmartWatch, Relogio Smartwatch Feminino, 1.27\" Ecrã tátil, à prova d'água IP68, 100+ Modos Esportivos, chamada Bluetooth, Compatível com Android iOS, voz por IA (Bege)",
    "source_url": "https://www.amazon.com.br/dp/B0FQK3V9QF",
    "image": "https://m.media-amazon.com/images/I/61sC9cAm1tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 217.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQK3V9QF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DR3PTGH3",
    "title": "Cachorrinho Aprende Comigo Para Bebês Fisher-Price Mattel",
    "source_url": "https://www.amazon.com.br/dp/B0DR3PTGH3",
    "image": "https://m.media-amazon.com/images/I/718Amaq9yaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DR3PTGH3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G2T1J3YH",
    "title": "LEGO Speed Champions Velozes e Furiosos Toyota Supra MK4 77260",
    "source_url": "https://www.amazon.com.br/dp/B0G2T1J3YH",
    "image": "https://m.media-amazon.com/images/I/815KucTu+yL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T1J3YH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CD14V4RQ",
    "title": "Fritadeira Elétrica sem óleo/Air Fryer Philco PFR15PG Preto 4,3L com Timer",
    "source_url": "https://www.amazon.com.br/dp/B0CD14V4RQ",
    "image": "https://m.media-amazon.com/images/I/51QJNzNg7lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CD14V4RQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "6560050416",
    "title": "BOX As Crônicas de Nárnia - Edição de Luxo",
    "source_url": "https://www.amazon.com.br/dp/6560050416",
    "image": "https://m.media-amazon.com/images/I/81erRs9DQDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 231.84,
    "affiliate_url": "https://www.amazon.com.br/dp/6560050416?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G2TD55JQ",
    "title": "Grok Games Gwent: O Jogo de Tabuleiro Lendário",
    "source_url": "https://www.amazon.com.br/dp/B0G2TD55JQ",
    "image": "https://m.media-amazon.com/images/I/715lt5V6tlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 237.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2TD55JQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B097J7J54H",
    "title": "Taiff SECADOR TOURMALINE 2100W 220, preto",
    "source_url": "https://www.amazon.com.br/dp/B097J7J54H",
    "image": "https://m.media-amazon.com/images/I/51gHJqqOYJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 241.31,
    "affiliate_url": "https://www.amazon.com.br/dp/B097J7J54H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B00NHQF6MG",
    "title": "LEGO Classic Caixa Grande De Peças Criativas",
    "source_url": "https://www.amazon.com.br/dp/B00NHQF6MG",
    "image": "https://m.media-amazon.com/images/I/81sXyDjMOPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 258.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B00NHQF6MG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09CQHC29Z",
    "title": "Cilindro de CO2 SodaStream Sistema Quick Connect - Original",
    "source_url": "https://www.amazon.com.br/dp/B09CQHC29Z",
    "image": "https://m.media-amazon.com/images/I/610cZRCAX1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 261.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09CQHC29Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07L4VJV1G",
    "title": "Britânia Bebedouro, Acqua, Preto, Bivolt, Estilo moderno e elegante Plástico",
    "source_url": "https://www.amazon.com.br/dp/B07L4VJV1G",
    "image": "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07L4VJV1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FM2X9H9H",
    "title": "Anker Zolo Power Bank 20.000mAh Turbo 45W, Carregador Portátil | Cabo USB-C Integrado, USB-C e USB-A, Carregamento Rápido para 17/16/15, Samsung, Xiaomi, Motorola, MacBook, iPad, Tablet",
    "source_url": "https://www.amazon.com.br/dp/B0FM2X9H9H",
    "image": "https://m.media-amazon.com/images/I/51kA-OL8k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 278.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FM2X9H9H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FFTS99M1",
    "title": "Tênis Mizuno Sunrise",
    "source_url": "https://www.amazon.com.br/dp/B0FFTS99M1",
    "image": "https://m.media-amazon.com/images/I/51gb20UE4pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 279.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTS99M1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H1F8GNLL",
    "title": "Fromage (Ludofun)",
    "source_url": "https://www.amazon.com.br/dp/B0H1F8GNLL",
    "image": "https://m.media-amazon.com/images/I/71dtV0iRToL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 287.11,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1F8GNLL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09GHL35B3",
    "title": "Philips Walita Ferro a Vapor Série 5000 1470W, SteamGlide Plus, Preto | Jato Extra de 180g – vapor constante de 25 g/min e passagem suave em todos os tecidos (DST5040/85)",
    "source_url": "https://www.amazon.com.br/dp/B09GHL35B3",
    "image": "https://m.media-amazon.com/images/I/71rTqqcISoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 294.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GHL35B3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CNKVYLF5",
    "title": "Headset Gamer Redragon Zeus Pro Preto Sem Fio 7.1 H510-PRO",
    "source_url": "https://www.amazon.com.br/dp/B0CNKVYLF5",
    "image": "https://m.media-amazon.com/images/I/619T-Fp+EkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 317.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CNKVYLF5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D9377PVB",
    "title": "Mala De Viagem Média 23Kg Polipropileno 4 Rodas Duplas 360 Fibra Rígida Tamanho M Leve Resistente Para Despachar (PRETO, médio)",
    "source_url": "https://www.amazon.com.br/dp/B0D9377PVB",
    "image": "https://m.media-amazon.com/images/I/61tq-aEwcxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 317.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9377PVB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0975WWR2C",
    "title": "Babá Eletrônica, TakTark Câmera para Bebês com Tela de 3.2\", Visão Noturna Infravermelha, Áudio Bidirecional, Detecção de Som VOX, Monitoramento Temperatura, Canção de Ninar",
    "source_url": "https://www.amazon.com.br/dp/B0975WWR2C",
    "image": "https://m.media-amazon.com/images/I/61h2x-zBZIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 318.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0975WWR2C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "6555321806",
    "title": "Box Harry Potter Premium Vermelho (7 Livros em capa dura)",
    "source_url": "https://www.amazon.com.br/dp/6555321806",
    "image": "https://m.media-amazon.com/images/I/61UQDAOBVWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.5,
    "affiliate_url": "https://www.amazon.com.br/dp/6555321806?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GXB94LXQ",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S6 Lite 10.4\" Polegadas, 2024 SM-P620/P625/2022 SM-P613/P619/2020 SM-P610/P615/P617, Flexível e portátil teclado Bluetooth sem fio preto",
    "source_url": "https://www.amazon.com.br/dp/B0GXB94LXQ",
    "image": "https://m.media-amazon.com/images/I/61A-7KkBWDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 332.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXB94LXQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B01F2LAUUG",
    "title": "Armani Beauty, Acqua di Gioia, Eau de Parfum, Giorgio Armani, Perfume Feminino Fragrância Cítrica Aquática Refrescante com Notas de Limão, Hortelã e Jasmim",
    "source_url": "https://www.amazon.com.br/dp/B01F2LAUUG",
    "image": "https://m.media-amazon.com/images/I/61slLGniC-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 343.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B01F2LAUUG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D98VXWXB",
    "title": "Philips Walita Fritadeira Airfryer Série 1000 XL 6,2L, Preta, 220V | Até 90% Menos Óleo – tecnologia RapidAir, 12 modos de preparo e controle analógico (NA130/09)",
    "source_url": "https://www.amazon.com.br/dp/B0D98VXWXB",
    "image": "https://m.media-amazon.com/images/I/510Uj5C7LdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 348.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98VXWXB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07W8X4F48",
    "title": "Mouse Gamer Sem Fio Logitech G703 LIGHTSPEED com RGB LIGHTSYNC, 6 Botões Programáveis, Sensor HERO 25K e Bateria Recarregável - Compatível com POWERPLAY",
    "source_url": "https://www.amazon.com.br/dp/B07W8X4F48",
    "image": "https://m.media-amazon.com/images/I/51fgVUBaPRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W8X4F48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G2T3M4KR",
    "title": "LEGO Editions Music Lua do Show de Olivia Rodrigo 43029",
    "source_url": "https://www.amazon.com.br/dp/B0G2T3M4KR",
    "image": "https://m.media-amazon.com/images/I/810rnDXVsJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T3M4KR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GP7KDZRJ",
    "title": "Tramontina Jogo de Panelas Veronese em Alumínio com Revestimento Cerâmico cor Bege 5 Peças.",
    "source_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ",
    "image": "https://m.media-amazon.com/images/I/51-bj9rtB7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 373.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CDR1SKHR",
    "title": "Jogo de Panelas Tramontina Turim em Alumínio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 10 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0CDR1SKHR",
    "image": "https://m.media-amazon.com/images/I/61AjgTFEaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CDR1SKHR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DSZF1FVQ",
    "title": "Bettdow Capa com Teclado e trackpad para iPad 10ª Geração 10.9\" Polegadas, iPad (A16) 11th Generation 11 Inch 2025; modelos A2696,A2757,A2777,A3354,A3355 e A3356 com Auto Hibernação(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DSZF1FVQ",
    "image": "https://m.media-amazon.com/images/I/715OLSmmqRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSZF1FVQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DX3J6MT7",
    "title": "LEGO Super Mario Game Boy™ 72046 (421 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DX3J6MT7",
    "image": "https://m.media-amazon.com/images/I/810rmeI3X7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 386.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX3J6MT7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CGR56CN4",
    "title": "Cadeira de escritório presidente, cadeira de home office com apoio para os pés e encosto ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CGR56CN4",
    "image": "https://m.media-amazon.com/images/I/71+UV1-34zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 389.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGR56CN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CJTYM3FH",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0CJTYM3FH",
    "image": "https://m.media-amazon.com/images/I/71FrXc9T1SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 392.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJTYM3FH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DX7K4QP5",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 Lite/S10 Fe/S9 Fe/S9/S8/S7 de 11 polegadas,Teclado com LCD Display",
    "source_url": "https://www.amazon.com.br/dp/B0DX7K4QP5",
    "image": "https://m.media-amazon.com/images/I/71DMQPOFAoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 396.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX7K4QP5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CSD46QVZ",
    "title": "Cadeira De Escritório, Cadeira De Com Apoio Para Os Pés E Encosto Ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CSD46QVZ",
    "image": "https://m.media-amazon.com/images/I/61hRkrlMDUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSD46QVZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CGY57KKM",
    "title": "LEGO Set Icons 10330 McLaren MP4/4 e Ayrton Senna 693 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGY57KKM",
    "image": "https://m.media-amazon.com/images/I/81JnCaFLWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 415.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGY57KKM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F2JBDBWS",
    "title": "Bicicleta Aro 14 Hello Kitty Rosa Bandeirante",
    "source_url": "https://www.amazon.com.br/dp/B0F2JBDBWS",
    "image": "https://m.media-amazon.com/images/I/51Azxebt3tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 549.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2JBDBWS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FGZMN2QL",
    "title": "Micro-ondas 27L Prata Porta Espelhada MasterCook Midea 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FGZMN2QL",
    "image": "https://m.media-amazon.com/images/I/61FevnWBKmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 556.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGZMN2QL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0C2Z63CMP",
    "title": "TakTark Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Sem Wifi, Panorâmica Inclinação, Áudio Bidirecional, Night Vision, Zoom Digital, Detecção De Som Vox, Ideal Para Novos Pais",
    "source_url": "https://www.amazon.com.br/dp/B0C2Z63CMP",
    "image": "https://m.media-amazon.com/images/I/612CGjAtCxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2Z63CMP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F81WGSYP",
    "title": "Monitor AOC 27\" 120Hz 1ms Gaming IPS Adaptive-Sync 27B35H",
    "source_url": "https://www.amazon.com.br/dp/B0F81WGSYP",
    "image": "https://m.media-amazon.com/images/I/612C5-fY6+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.83,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F81WGSYP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H1HHP7ZW",
    "title": "OLANENEM 6 em 1 Berço Portátil, Berço Moisés com Fraldário e Mosquiteiro, Berço Acoplado à Cama com Suporte Triangular de Aço Carbono, 6 Alturas e Inclinação Antirrefluxo 5°(Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW",
    "image": "https://m.media-amazon.com/images/I/715Pm0wsEVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 588.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BFFHK84Y",
    "title": "Estante Livreiro 2 Portas 1 Gaveta Ditália E-954 cor:branco",
    "source_url": "https://www.amazon.com.br/dp/B0BFFHK84Y",
    "image": "https://m.media-amazon.com/images/I/411agb2-4UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 589.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFFHK84Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F71279B5",
    "title": "Sunny, Gabby's Dollhouse: o Filme, Casa da Gabby, com Acessórios",
    "source_url": "https://www.amazon.com.br/dp/B0F71279B5",
    "image": "https://m.media-amazon.com/images/I/61gipkkPtGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 596.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F71279B5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FHHFBDNQ",
    "title": "GameSir G7 Pro Controle Gamer Tri-Mode para Xbox, PC e Android Sem Fio 2.4G/Bluetooth e Com Fio Joystick Hall Effect + TMR 1000Hz Polling Rate Botões Macro Giroscópio Vibração 4 Motores Anti-Drift Controle Profissional - Shadow Ember",
    "source_url": "https://www.amazon.com.br/dp/B0FHHFBDNQ",
    "image": "https://m.media-amazon.com/images/I/71-wtZ5RihL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHFBDNQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09QLH5SHB",
    "title": "Casa de Bonecas Barbie Malibu Dois Andares Rosa Mattel",
    "source_url": "https://www.amazon.com.br/dp/B09QLH5SHB",
    "image": "https://m.media-amazon.com/images/I/81DFMqlGQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 599.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B09QLH5SHB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DD1KD5JP",
    "title": "Philips Walita Fritadeira Airfryer Forno 12 Litros, Preta, 110V",
    "source_url": "https://www.amazon.com.br/dp/B0DD1KD5JP",
    "image": "https://m.media-amazon.com/images/I/61a0AdTUvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 688.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD1KD5JP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BXMV4ZXW",
    "title": "Cadeira para Auto 0-36Kg Isofix Litet All Stages Fix 2.0 Preta e Cinza - BB452",
    "source_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW",
    "image": "https://m.media-amazon.com/images/I/615AvAaOM8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 698.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GC5HPQHX",
    "title": "Cadeira de Escritório Ergonômica Testada conforme NR-17, Duplo Apoio Lombar, Assento Deslizante com Ajuste de Profundidade 5cm, Apoio para Pés Retrátil, Reclinável até 135° para Home Office (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0GC5HPQHX",
    "image": "https://m.media-amazon.com/images/I/81GwvztsDBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GC5HPQHX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HFW9W9YM",
    "title": "Tablet Xixaomiro S11 Pad 10.1\" Android 15, 128GB ROM + 12GB RAM, Tela 120Hz, Octa-Core, Câmera 13MP + 5MP, Bateria 8000mAh, Kit com Teclado, Mouse e Caneta Stylus para Trabalho e Estudos (Cinza claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9W9YM",
    "image": "https://m.media-amazon.com/images/I/71F9iYxWjNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9W9YM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FMS7N7NV",
    "title": "LEGO NINJAGO O Dragão da Vida, Brinquedo de Dragão 71859 (1.050 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0FMS7N7NV",
    "image": "https://m.media-amazon.com/images/I/814EXslOf2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 763.42,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMS7N7NV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0D88PWSHZ",
    "title": "Sunny, FurReal, Pelúcia Interativa, Amendoim o Macaco Brincalhão, a Pilha",
    "source_url": "https://www.amazon.com.br/dp/B0D88PWSHZ",
    "image": "https://m.media-amazon.com/images/I/51KnFDZ9wTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 794.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D88PWSHZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BD9HNJMH",
    "title": "Máquina de Costura SINGER M2505 127V | 9 Pontos, 70 Aplicações | Luz em LED, Alavanca de Retrocesso | Ideal para Artesanato, Costura Criativa, Projetos Domésticos | Acessórios Inclusos",
    "source_url": "https://www.amazon.com.br/dp/B0BD9HNJMH",
    "image": "https://m.media-amazon.com/images/I/51apK7IPaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BD9HNJMH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CV28Y3FJ",
    "title": "LEGO Super Heroes Marvel Vingadores Unidos: Era de Ultron 76291 (613 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0CV28Y3FJ",
    "image": "https://m.media-amazon.com/images/I/81Ww+tt23mL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 807.27,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CV28Y3FJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CMJQMJWN",
    "title": "SUGGAR DEPURADOR DE AR SLIM DE EMBUTIR 80CM INOX 110V DE81IX",
    "source_url": "https://www.amazon.com.br/dp/B0CMJQMJWN",
    "image": "https://m.media-amazon.com/images/I/61pSMDFXbqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 868.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMJQMJWN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B00ELBPK2M",
    "title": "ThunderX3 Cadeira Gamer Profissional TGC12 Preta/Azul",
    "source_url": "https://www.amazon.com.br/dp/B00ELBPK2M",
    "image": "https://m.media-amazon.com/images/I/71kwBzZEG2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 872.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B00ELBPK2M?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H1T7241Z",
    "title": "Barbie Casa dos Sonhos com Escorregador para crianças acima de 3 Anos",
    "source_url": "https://www.amazon.com.br/dp/B0H1T7241Z",
    "image": "https://m.media-amazon.com/images/I/61VhNgOsi8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1T7241Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HFW9ZB26",
    "title": "Xixaomiro Tablet Android 15 Pad 10.1\", 256GB ROM + 12GB RAM, Câmera 13MP + 5MP, Bateria 8000mAh – Kit Completo com Caneta, Mouse, Teclado e Capa, Adequado para Estudo, Trabalho e Lazer (Laranja claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9ZB26",
    "image": "https://m.media-amazon.com/images/I/712dIQhOzHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 915.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9ZB26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DDPM3PL1",
    "title": "Ravensburger Disney Lorcana TCG: Reign of Jafar Booster Pack Display | 24 pacotes com 12 cards colecionáveis cada | Ideal para colecionadores e fãs da Disney | Adequado para maiores de 8 anos",
    "source_url": "https://www.amazon.com.br/dp/B0DDPM3PL1",
    "image": "https://m.media-amazon.com/images/I/71eyVAUqPML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 936.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DDPM3PL1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H6NYF37G",
    "title": "Monitor Duplo Portátil para Notebook 15.6\" - Expansor de Telas Triplo com Design 360°, Baixa Luz Azul, Tela IPS FHD 1080p 60Hz, Compatível com Windows/Mac/Switch (Cabos Inclusos)",
    "source_url": "https://www.amazon.com.br/dp/B0H6NYF37G",
    "image": "https://m.media-amazon.com/images/I/71xEoYiiRyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 992.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6NYF37G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B07XM8KGBB",
    "title": "ThunderX3, Cadeira Ergonomic, YAMA1BK, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07XM8KGBB",
    "image": "https://m.media-amazon.com/images/I/51W9FnH1Q1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1017.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XM8KGBB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FMYYGFQF",
    "title": "LEGO Editions Sports Troféu Oficial da Copa do Mundo FIFA™ 43020",
    "source_url": "https://www.amazon.com.br/dp/B0FMYYGFQF",
    "image": "https://m.media-amazon.com/images/I/81JUw+JvtPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMYYGFQF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G2SYSY3R",
    "title": "LEGO Ideas Foguete Lunar do Tintin ; Kit de Construção 21367",
    "source_url": "https://www.amazon.com.br/dp/B0G2SYSY3R",
    "image": "https://m.media-amazon.com/images/I/71u37pJhLUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1259.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2SYSY3R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H27HFV5M",
    "title": "Balança De Bioimpedância Bio-X Wi-Fi Relaxmedic",
    "source_url": "https://www.amazon.com.br/dp/B0H27HFV5M",
    "image": "https://m.media-amazon.com/images/I/51vlOAQJ3zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1349.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H27HFV5M?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GYZB2MGK",
    "title": "Máquina de Remo Magnética Dobrável",
    "source_url": "https://www.amazon.com.br/dp/B0GYZB2MGK",
    "image": "https://m.media-amazon.com/images/I/61e+H4QNRdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1399.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYZB2MGK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FHJ3D7XY",
    "title": "Type2-11KW Carregador Carro Elétrico Portátil 11kw 3p 16a Tipo2 Com App",
    "source_url": "https://www.amazon.com.br/dp/B0FHJ3D7XY",
    "image": "https://m.media-amazon.com/images/I/61LsZXUAlAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1519.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHJ3D7XY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F2JD25LJ",
    "title": "LEGO Ideas Willy Wonka e a Fábrica de Chocolate 21360 (2.025 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0F2JD25LJ",
    "image": "https://m.media-amazon.com/images/I/815M6YpxuYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1539.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2JD25LJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B077BJBF1L",
    "title": "Le Creuset Panela Molheira 18cm Signature Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B077BJBF1L",
    "image": "https://m.media-amazon.com/images/I/61m-42+kNzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1572.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BJBF1L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09S65QD8Y",
    "title": "Máquina Overlock SINGER S0235 127 Volts | Estrutura em metal, Bainha Enrolada, Ponto Cadeia e de 2 Fios | Iluminação LED, Braço Livre, Largura e Comprimento Ajustáveis",
    "source_url": "https://www.amazon.com.br/dp/B09S65QD8Y",
    "image": "https://m.media-amazon.com/images/I/71KTHBFpziL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S65QD8Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B017RBNOI4",
    "title": "Volante e Pedais Logitech G29 Driving Force com Force Feedback para PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B017RBNOI4",
    "image": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B017RBNOI4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0C5JNWF58",
    "title": "HD SSD externo de 2Tb USB 3.2 compatível com PC e Notebook SANDISK SDSSDE61-2T00-G26",
    "source_url": "https://www.amazon.com.br/dp/B0C5JNWF58",
    "image": "https://m.media-amazon.com/images/I/71bBCTIvIIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1639.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C5JNWF58?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DRW65V3V",
    "title": "LEGO Icons Nave de Transporte de Ônibus Espacial 10360 (2.417 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DRW65V3V",
    "image": "https://m.media-amazon.com/images/I/81+y-1be+ML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1678.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DRW65V3V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0C6KZCY6Z",
    "title": "Cadeirinha Único Evo i-Size com Isofix e Top Tether 40–150cm Preto Chicco – 6087030950000",
    "source_url": "https://www.amazon.com.br/dp/B0C6KZCY6Z",
    "image": "https://m.media-amazon.com/images/I/61vCqNAY53L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1697.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6KZCY6Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HCR2X6T2",
    "title": "Electrolux Máquina de Lavar Electrolux Efficient 13kg Branca Compacta, Econômica e Pré-diluição (LET13) 127V",
    "source_url": "https://www.amazon.com.br/dp/B0HCR2X6T2",
    "image": "https://m.media-amazon.com/images/I/51QG54NbvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HCR2X6T2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GVP7Q8TX",
    "title": "Hisense Smart TV 4K Hi-QLED 43\" Polegadas 43Q6QVV | Processador AI, Dolby Vision, HDR10+, HLG, Filmmaker Mode, Dolby Gaming, Dolby Atmos, MiraCast e Compatibilidade Alexa",
    "source_url": "https://www.amazon.com.br/dp/B0GVP7Q8TX",
    "image": "https://m.media-amazon.com/images/I/81kBoMlEzWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVP7Q8TX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0G2T1CVF7",
    "title": "LEGO Harry Potter Castelo de Hogwarts™: Ala Leste 76473",
    "source_url": "https://www.amazon.com.br/dp/B0G2T1CVF7",
    "image": "https://m.media-amazon.com/images/I/81wgSnozDbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T1CVF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BTFCXSMS",
    "title": "Lava Louças 8 Serviços Brastemp Cinza - BLF08BS 110V",
    "source_url": "https://www.amazon.com.br/dp/B0BTFCXSMS",
    "image": "https://m.media-amazon.com/images/I/41yb7JiKeVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1801.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTFCXSMS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FRCM6QZS",
    "title": "Forno de Embutir Elétrico Electrolux 80L Experience Air fryer, PerfectCook360 e Painel Touch (OE8EA)",
    "source_url": "https://www.amazon.com.br/dp/B0FRCM6QZS",
    "image": "https://m.media-amazon.com/images/I/51KrDPasvRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1847.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FRCM6QZS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H2NF3JXT",
    "title": "Freezer Horizontal Electrolux HB250 245 Litros Inverter 1 Porta Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H2NF3JXT",
    "image": "https://m.media-amazon.com/images/I/31oeND3LWUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1861.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NF3JXT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DQWY52M1",
    "title": "Máquina de Pintura Airless Menegotti MMA PRO 1000 – 1000 W, 3.104 PSI, 127V | Aplicação Profissional de Tintas Acrílicas, Látex, PU e Vernizes | Alta Produtividade e Mobilidade",
    "source_url": "https://www.amazon.com.br/dp/B0DQWY52M1",
    "image": "https://m.media-amazon.com/images/I/61EHVvACphL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1895.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQWY52M1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GVT7QXF7",
    "title": "Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", NFC, Recursos AI, Até 6 Atualizações de Android e Segurança (Lilás)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT7QXF7",
    "image": "https://m.media-amazon.com/images/I/51VZg1VWMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1898.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT7QXF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FCSP9NS4",
    "title": "Ar Condicionado 9000 Btus Split Hi Wall Inverter Midea Frio Ai Ecomaster 220v",
    "source_url": "https://www.amazon.com.br/dp/B0FCSP9NS4",
    "image": "https://m.media-amazon.com/images/I/51XHzWTiUPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1918.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCSP9NS4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DFRSDH9P",
    "title": "PHILIPS, Smart TV, 50'' 4K UHD, 50PUG7019/78, Google TV, Comando de Voz, HDR",
    "source_url": "https://www.amazon.com.br/dp/B0DFRSDH9P",
    "image": "https://m.media-amazon.com/images/I/615UmEOpLML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DFRSDH9P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CFRZXVVR",
    "title": "Cadeira Ergonômica XTC Mesh Preta ThunderX3 | Tecido Mesh, Suporta até 150kg, BIFMA, Gamer, Pistão Classe 4, Ergonômica, Confortável",
    "source_url": "https://www.amazon.com.br/dp/B0CFRZXVVR",
    "image": "https://m.media-amazon.com/images/I/71z3VNcWNvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFRZXVVR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BNH25RD8",
    "title": "CADEIRA THUNDERX3 CORE SMART HARRY POTTER",
    "source_url": "https://www.amazon.com.br/dp/B0BNH25RD8",
    "image": "https://m.media-amazon.com/images/I/71d38GT-CKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2021.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BNH25RD8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CHY1MR14",
    "title": "Hiksemi SSD M.2 Futurex Lite 2TB PCIe 4.0 NVMe 2280 7100MB/s Leitura c/ Dissipador Compatível c/ PS5, Notebook e PC",
    "source_url": "https://www.amazon.com.br/dp/B0CHY1MR14",
    "image": "https://m.media-amazon.com/images/I/41nZY2bkTqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2145.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CHY1MR14?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FPBR8V26",
    "title": "PHILIPS, Smart TV Ambilight 50\" 4K, Titan OS, 50PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBR8V26",
    "image": "https://m.media-amazon.com/images/I/61hTC1qv92L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2188.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBR8V26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HD7RD8F1",
    "title": "Notebook Samsung Galaxy Book Go, Windows 11 Home, Snapdragon | Windows 11 Home, 4GB RAM, 128GB UFS, 1.38kg",
    "source_url": "https://www.amazon.com.br/dp/B0HD7RD8F1",
    "image": "https://m.media-amazon.com/images/I/71mg-93pBzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HD7RD8F1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B019HBG0QK",
    "title": "Panasonic Lavadora Top Load F190WA Branca 64 x 72 x 115 cm 19 kg Sistema Ciclone, Smartsense e JetWash Plus Cesto em Aço Inox 10 Programas de Lavagem 45 kg",
    "source_url": "https://www.amazon.com.br/dp/B019HBG0QK",
    "image": "https://m.media-amazon.com/images/I/41MU-zH5UUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2217.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B019HBG0QK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GS2KPYFH",
    "title": "Máquina de lavar Intuitive+ Panasonic 19kg Lavagem Eficiente SmartSense Sistema Ciclone Ciclo Pet NA-F190G1WB 220v",
    "source_url": "https://www.amazon.com.br/dp/B0GS2KPYFH",
    "image": "https://m.media-amazon.com/images/I/41MU-zH5UUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2217.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GS2KPYFH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CGYQ2WJC",
    "title": "LEGO Set Icons 10323 Máquina de Jogos PAC-MAN 2651 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGYQ2WJC",
    "image": "https://m.media-amazon.com/images/I/81RTcZf5fmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2289.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGYQ2WJC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FPBQY5GR",
    "title": "PHILIPS Smart TV, 55\" 4K, 55PUG7300, Comando de Voz, Bluetooth, HDR, Dolby Atmos, HDMI, USB, Wi-Fi",
    "source_url": "https://www.amazon.com.br/dp/B0FPBQY5GR",
    "image": "https://m.media-amazon.com/images/I/71d6BkXy+rL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBQY5GR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CDM36Y1B",
    "title": "Batedeira Stand Mixer KitchenAid Artisan - Pistachio 220V",
    "source_url": "https://www.amazon.com.br/dp/B0CDM36Y1B",
    "image": "https://m.media-amazon.com/images/I/51Itqq57tnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2385.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CDM36Y1B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FPBQQ4TN",
    "title": "PHILIPS, Smart TV Ambilight 55\" 4K, Titan OS, 55PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBQQ4TN",
    "image": "https://m.media-amazon.com/images/I/61HN+7ldJnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2423.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBQQ4TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H126PTKS",
    "title": "JBL, Caixa de Som, Boombox 4, Bluetooth, Som Pro, AI Sound Boost, Graves Personalizáveis, Bateria de até 34H, IP68, Áudio Lossless Laranja",
    "source_url": "https://www.amazon.com.br/dp/B0H126PTKS",
    "image": "https://m.media-amazon.com/images/I/41L+ESJsjmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2479.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H126PTKS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FVPZ3GVC",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Inox Look (TF38S) 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FVPZ3GVC",
    "image": "https://m.media-amazon.com/images/I/416nfzkCKsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPZ3GVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B09ZHCLVXF",
    "title": "Philips Walita Cafeteira Espresso Superautomática Série 1200, 220V",
    "source_url": "https://www.amazon.com.br/dp/B09ZHCLVXF",
    "image": "https://m.media-amazon.com/images/I/71FXFo4kYiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09ZHCLVXF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CV2CLZXJ",
    "title": "LEGO Technic McLaren P1, Conjunto de Hipercarro para Adultos 42172",
    "source_url": "https://www.amazon.com.br/dp/B0CV2CLZXJ",
    "image": "https://m.media-amazon.com/images/I/813KclKm09L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CV2CLZXJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GL78BKT7",
    "title": "Depilador a Laser IPL Ulike ME, Resfriamento em Safira, ANVISA, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0GL78BKT7",
    "image": "https://m.media-amazon.com/images/I/61Mla-3gafL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2659.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL78BKT7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FH2M2WLF",
    "title": "I Can't Give Everything Away (2002 - 2016)",
    "source_url": "https://www.amazon.com.br/dp/B0FH2M2WLF",
    "image": "https://m.media-amazon.com/images/I/7199CxB9q1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2834.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH2M2WLF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0CSK9296X",
    "title": "TCL TABLET NXTPAPER 14 - Tela 14,3\" NXTPAPER 2.4K - 256 ROM - 16Gb (8Gb + 8Gb RAM BOOST) -Octacore - 10.000 mAh de Bateria - Capa e Caneta",
    "source_url": "https://www.amazon.com.br/dp/B0CSK9296X",
    "image": "https://m.media-amazon.com/images/I/71M3uQCHrKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2990.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSK9296X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H63M1Y6W",
    "title": "Freezer Electrolux Horizontal 513L Inverter (HI550T) Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H63M1Y6W",
    "image": "https://m.media-amazon.com/images/I/31SjYpp1vqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3098.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63M1Y6W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FMS97LGV",
    "title": "LEGO Icons Navio Pirata do Capitão Jack Sparrow, Kit de Construção para Adultos 10365",
    "source_url": "https://www.amazon.com.br/dp/B0FMS97LGV",
    "image": "https://m.media-amazon.com/images/I/814BXKb0LlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3149.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMS97LGV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FPBPDWZQ",
    "title": "PHILIPS, Smart TV Ambilight 65\" 4K, Titan OS, 65PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ",
    "image": "https://m.media-amazon.com/images/I/61-b5p1Qg-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0B625GC45",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PW Branca 11/7kg - 220V",
    "source_url": "https://www.amazon.com.br/dp/B0B625GC45",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B625GC45?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BZ15NC13",
    "title": "Samsung Lava e Seca 11kg Branco WD11M4473PW - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ15NC13",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15NC13?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DN3JGXJC",
    "title": "Geladeira Electrolux Frost Free com AutoSense 480L Efficient Duplex Branca (TF71) - 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DN3JGXJC",
    "image": "https://m.media-amazon.com/images/I/41nJV7j5S2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3429.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DN3JGXJC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ129NTZ",
    "image": "https://m.media-amazon.com/images/I/516qpWn6k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FVPLDKKG",
    "title": "Electrolux Geladeira Electrolux Frost Free Inverter 400L Efficient AutoSense e Rapid Freeze Inverse Black Inox Look (IB6B) Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0FVPLDKKG",
    "image": "https://m.media-amazon.com/images/I/4183aoBiILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPLDKKG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H3Q1RHD7",
    "title": "Smart TV TCL 65 Polegadas QLED 4K T6C WiFi Bluetooth Google TV Tela HVA e HDR10+ 65T6C",
    "source_url": "https://www.amazon.com.br/dp/B0H3Q1RHD7",
    "image": "https://m.media-amazon.com/images/I/81PghVbGE6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H3Q1RHD7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F6CX2QK4",
    "title": "Notebook HP 256R G9 Intel Core i5 13º Geração. Memoria RAM 16GB. SSD 256GB. Tela de 15,6\" LCD. Windows 11 - Home SL - Cinza Escuro. Bivolt. (BQ9L2AT#AK4)",
    "source_url": "https://www.amazon.com.br/dp/B0F6CX2QK4",
    "image": "https://m.media-amazon.com/images/I/71rq8UFkcvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3967.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6CX2QK4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DSXX6XB3",
    "title": "Celular Samsung Galaxy S25 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.2\", Prata",
    "source_url": "https://www.amazon.com.br/dp/B0DSXX6XB3",
    "image": "https://m.media-amazon.com/images/I/61ypIBTp6vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSXX6XB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FTTJMGB4",
    "title": "Geladeira Electrolux 1p 400l Ib6s Inox Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0FTTJMGB4",
    "image": "https://m.media-amazon.com/images/I/41R+BErnAmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4067.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTTJMGB4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HBYBB54N",
    "title": "Samsung Smart TV 65\" Crystal UHD 4K U8000H 2027, Vision AI Companion, Modo Estádio, Xbox Cloud Gaming, Canais Gratuitos, 7 Anos de Atualização",
    "source_url": "https://www.amazon.com.br/dp/B0HBYBB54N",
    "image": "https://m.media-amazon.com/images/I/51cyVARXJHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HBYBB54N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "source_url": "https://www.amazon.com.br/dp/B0F5X4NPK2",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FTNHK4G7",
    "title": "Apple iPhone 15 Pro (256 GB) — Titânio preto (Seminovo)",
    "source_url": "https://www.amazon.com.br/dp/B0FTNHK4G7",
    "image": "https://m.media-amazon.com/images/I/51bNCrZFLjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4527.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNHK4G7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GKQTJD9P",
    "title": "Celular Samsung Galaxy S26 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.3\" - Violeta",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTJD9P",
    "image": "https://m.media-amazon.com/images/I/61kX9KSBv1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4775.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTJD9P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GTWWS6PN",
    "title": "Refrigerador Bottom Freezer Inverter Panasonic de 02 Portas Frost Free com 511 Litros Aço Escovado - NR-BB71PV7X (110V, Volts)",
    "source_url": "https://www.amazon.com.br/dp/B0GTWWS6PN",
    "image": "https://m.media-amazon.com/images/I/41NmANHmdvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4795.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTWWS6PN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0FTP2988B",
    "title": "Apple iPhone 15 Pro Max (256 GB) — Titânio branco (Seminovo)",
    "source_url": "https://www.amazon.com.br/dp/B0FTP2988B",
    "image": "https://m.media-amazon.com/images/I/81FFCoft1PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5242.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTP2988B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DG46DS62",
    "title": "Notebook Yoga Slim 7i Intel Core Ultra 5, 16GB, 512GB SSD Intel Arc Graphics, 14\" OLED, W11, 1.39kg, 83GM0003BR",
    "source_url": "https://www.amazon.com.br/dp/B0DG46DS62",
    "image": "https://m.media-amazon.com/images/I/71dbFA9RmWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5929.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DG46DS62?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0H2NGMNB8",
    "title": "Soundbar Samsung HW-Q990H, com 11.1.4 canais, Dolby Atmos® sem fio, Sincronia Sonora e Alexa integrada",
    "source_url": "https://www.amazon.com.br/dp/B0H2NGMNB8",
    "image": "https://m.media-amazon.com/images/I/31oTlWArj1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NGMNB8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GKQTTCMM",
    "title": "Celular Samsung Galaxy S26 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9\" - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTTCMM",
    "image": "https://m.media-amazon.com/images/I/61tUK0-AiTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7690.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTTCMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0GPQTM751",
    "title": "Ar Condicionado Split Teto Inverter Midea Connect 60.000 Btus Frio 220v R-32",
    "source_url": "https://www.amazon.com.br/dp/B0GPQTM751",
    "image": "https://m.media-amazon.com/images/I/51MYHzxciAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8995.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPQTM751?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0HFQFSDT4",
    "title": "Samsung Notebook Galaxy Book6 Pro 14\" AMOLED, Ultra X7 358H, 32GB, 1TB SSD, Arc B390, Windows 11, 1.24 kg",
    "source_url": "https://www.amazon.com.br/dp/B0HFQFSDT4",
    "image": "https://m.media-amazon.com/images/I/5186PqxMJeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 11899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFQFSDT4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  },
  {
    "asin": "B0DQR9TLZ1",
    "title": "Drone DJI Air 3S Fly More Combo (Com tela) BR - DJI056",
    "source_url": "https://www.amazon.com.br/dp/B0DQR9TLZ1",
    "image": "https://m.media-amazon.com/images/I/519VYcdL94L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 12654.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQR9TLZ1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T14:53:02.000Z"
  }
];
