const PRODUCTS = [
  {
    "asin": "B09547GF99",
    "title": "Scala Plus Papel Toalha Multipicote, 200 Toalhas (2 Rolos de 100 Toalhas Cada)",
    "source_url": "https://www.amazon.com.br/dp/B09547GF99",
    "image": "https://m.media-amazon.com/images/I/71Q5B8kAMtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B09547GF99?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0C11RD6WC",
    "title": "Café em Cápsula Starbucks® Single-Origin Guatemala by Nespresso® - 10 cápsulas",
    "source_url": "https://www.amazon.com.br/dp/B0C11RD6WC",
    "image": "https://m.media-amazon.com/images/I/51Y6QtlOOKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C11RD6WC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FMLBQ136",
    "title": "KitKat Creme Crocante de Chocolate – Pasta para Passar, 330 g",
    "source_url": "https://www.amazon.com.br/dp/B0FMLBQ136",
    "image": "https://m.media-amazon.com/images/I/61VAMMzECnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMLBQ136?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07DKKQ1TN",
    "title": "L'Oréal Paris Elseve Óleo Extraordinário Creme de Tratamento para Nutrição Intensa de Cabelos Secos, com Micro-Óleos de Flores Preciosas para Maciez e Brilho 300g",
    "source_url": "https://www.amazon.com.br/dp/B07DKKQ1TN",
    "image": "https://m.media-amazon.com/images/I/715M+mgR5ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DKKQ1TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G45G116D",
    "title": "Shampoo Encorpador L'Oréal Paris Elseve Collagen® Lifter 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0G45G116D",
    "image": "https://m.media-amazon.com/images/I/71JdSG1QhRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45G116D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FWGN9SZL",
    "title": "Café em Cápsula Nescafé Farmers Origins Brazil - compatível máquina Nespresso, 18 cápsulas 44g",
    "source_url": "https://www.amazon.com.br/dp/B0FWGN9SZL",
    "image": "https://m.media-amazon.com/images/I/81FJv2Bod7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWGN9SZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FWFRRT48",
    "title": "Café em Cápsula Nescafé Farmers Origins Colombia - compatível máquina Nespresso, 18 cápsulas 44g",
    "source_url": "https://www.amazon.com.br/dp/B0FWFRRT48",
    "image": "https://m.media-amazon.com/images/I/81OEDFGUjuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWFRRT48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CTTVR415",
    "title": "Leave-In L'Oréal Paris Elseve Reparação Total 5 Cicatri Renov 100ml | Reparação Instantânea, Desembaraço Imediato, Repara os Danos Fio a Fio, Para Todos os Tipos de Cabelo",
    "source_url": "https://www.amazon.com.br/dp/B0CTTVR415",
    "image": "https://m.media-amazon.com/images/I/61yXyxU11AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTTVR415?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "8574120286",
    "title": "O grúfalo",
    "source_url": "https://www.amazon.com.br/dp/8574120286",
    "image": "https://m.media-amazon.com/images/I/A1Yw3SMln2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8574120286?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DGKJ3BTQ",
    "title": "Carregador Turbo 30W USB-C – Potência Ultra Rápida com Cabo Tipo-C para Tipo-C Incluso – Compatível com iPhone 15, iPads, Samsung e Dispositivos USB-C - LAGUS IMP.",
    "source_url": "https://www.amazon.com.br/dp/B0DGKJ3BTQ",
    "image": "https://m.media-amazon.com/images/I/51F5u37808L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 35.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGKJ3BTQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G2X31T8D",
    "title": "OralGos Escova de Dentes Premium 6 unidades Colorido, Cerdas Ultra Macias | Cerdas Ultra Macias, com Protetor de Cerdas, Suave para Gengivas, Ideal para Presente e Uso Diário",
    "source_url": "https://www.amazon.com.br/dp/B0G2X31T8D",
    "image": "https://m.media-amazon.com/images/I/81GsimTkapL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2X31T8D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07VGF2P6L",
    "title": "L'Oréal Paris Revitalift Hialurônico Creme Facial Noturno, com Ácido Hialurônico Puro, Com textura leve, preenche linhas de expressão e hidrata a pele intensamente por 24h, 49g",
    "source_url": "https://www.amazon.com.br/dp/B07VGF2P6L",
    "image": "https://m.media-amazon.com/images/I/51dnpdlO-zS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VGF2P6L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F1ZD9TQW",
    "title": "Calcinha Absorvente Menstrual Pantys Xodó, Fluxo Moderado, Feminino, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0F1ZD9TQW",
    "image": "https://m.media-amazon.com/images/I/51DGhK2g8qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1ZD9TQW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B017NHO8VE",
    "title": "Concha y Toro Trivento Reserve Malbec Tinto 750ml",
    "source_url": "https://www.amazon.com.br/dp/B017NHO8VE",
    "image": "https://m.media-amazon.com/images/I/511yGWc1s5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B017NHO8VE?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B077BY5B8Q",
    "title": "Maybelline NY The Colossal Volum' Express, Máscara de Cílios Lavável, 9x Mais Volume por Até 24h, Fórmula com Colágeno para Definição Intensa, Não Empelota, Cor Preto, 8ml",
    "source_url": "https://www.amazon.com.br/dp/B077BY5B8Q",
    "image": "https://m.media-amazon.com/images/I/51rTd-hhlGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 40.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY5B8Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07C2YCR1J",
    "title": "Magic Retouch Spray Retoque De Raiz Instantâneo L'Oréal Paris Louro Claro",
    "source_url": "https://www.amazon.com.br/dp/B07C2YCR1J",
    "image": "https://m.media-amazon.com/images/I/61Fi50nXFWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 43.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07C2YCR1J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BF26JX52",
    "title": "Calcinha Absorvente Menstrual Pantys Cozy, Fluxo Intenso, Feminino, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0BF26JX52",
    "image": "https://m.media-amazon.com/images/I/51fIrpNLufL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 45.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BF26JX52?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07S57P35S",
    "title": "Lata Mini Personalizada Bee Deo Cologne, Ciclo, 100 Ml",
    "source_url": "https://www.amazon.com.br/dp/B07S57P35S",
    "image": "https://m.media-amazon.com/images/I/51krmfiFLoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 47.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07S57P35S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B08Y3CV67L",
    "title": "As extraordinárias viagens de Júlio Verne - Box com 6 livros",
    "source_url": "https://www.amazon.com.br/dp/B08Y3CV67L",
    "image": "https://m.media-amazon.com/images/I/71wgomAPTQS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 50.12,
    "affiliate_url": "https://www.amazon.com.br/dp/B08Y3CV67L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DNY5FQY3",
    "title": "LYOR - Tapete de Pedra Diatomita para Banheiro Cinza 60cm x 39cm",
    "source_url": "https://www.amazon.com.br/dp/B0DNY5FQY3",
    "image": "https://m.media-amazon.com/images/I/41R091iJO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 51.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNY5FQY3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CXJLK24Y",
    "title": "Nescau Bebida Láctea 180ml caixa com 27 unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CXJLK24Y",
    "image": "https://m.media-amazon.com/images/I/61gtHqTqSkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXJLK24Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B076X57GB7",
    "title": "Jogo Eu Sou...?, Estrela",
    "source_url": "https://www.amazon.com.br/dp/B076X57GB7",
    "image": "https://m.media-amazon.com/images/I/61NcLkIvJlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 54.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B076X57GB7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B08GKXGS45",
    "title": "Candide, Laptop Infantil, Homem-Aranha, Brinquedo Educativo - Bilíngue",
    "source_url": "https://www.amazon.com.br/dp/B08GKXGS45",
    "image": "https://m.media-amazon.com/images/I/61mMbktfL-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 55.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B08GKXGS45?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B000GKUEVE",
    "title": "Pacote 5 Carros Sortidos, Hot Wheels, Mattel, Multicor - não é possível escolher as cores",
    "source_url": "https://www.amazon.com.br/dp/B000GKUEVE",
    "image": "https://m.media-amazon.com/images/I/81GMRnT1SsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B000GKUEVE?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "855101305X",
    "title": "Alchemised: Edição brasileira",
    "source_url": "https://www.amazon.com.br/dp/855101305X",
    "image": "https://m.media-amazon.com/images/I/71Ib1chR4GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.21,
    "affiliate_url": "https://www.amazon.com.br/dp/855101305X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "6555000376",
    "title": "O monstro das cores",
    "source_url": "https://www.amazon.com.br/dp/6555000376",
    "image": "https://m.media-amazon.com/images/I/71KLnFnkVxS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.73,
    "affiliate_url": "https://www.amazon.com.br/dp/6555000376?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DQVRNL95",
    "title": "Ola Coco Sabão Líquido para Roupas Delicadas, 3,8L",
    "source_url": "https://www.amazon.com.br/dp/B0DQVRNL95",
    "image": "https://m.media-amazon.com/images/I/514-mDTxZxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQVRNL95?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CLDGBYGL",
    "title": "Lixeira 12 litros grande automática com sensor inteligente de aproximação para abrir e fechar",
    "source_url": "https://www.amazon.com.br/dp/B0CLDGBYGL",
    "image": "https://m.media-amazon.com/images/I/61AHIRNXBBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CLDGBYGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0D8V3QLDD",
    "title": "Filtro de Linha CLAMPER iCLAMPER Energia 5, 5 Tomadas, Proteção Contra Surtos Elétricos, 10A, Bivolt, Cabo 1m, Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0D8V3QLDD",
    "image": "https://m.media-amazon.com/images/I/51rRxbJnGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8V3QLDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07J2M2YL1",
    "title": "Pelucia Patrulha Canina Rubble 30cm Sunny",
    "source_url": "https://www.amazon.com.br/dp/B07J2M2YL1",
    "image": "https://m.media-amazon.com/images/I/51c-4QTWsFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 68.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B07J2M2YL1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "8535911626",
    "title": "Persépolis - Completo",
    "source_url": "https://www.amazon.com.br/dp/8535911626",
    "image": "https://m.media-amazon.com/images/I/61zJ7vOTMoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.76,
    "affiliate_url": "https://www.amazon.com.br/dp/8535911626?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DZ34MLH6",
    "title": "Tech T-shirt Gola U Feminino Indigo M",
    "source_url": "https://www.amazon.com.br/dp/B0DZ34MLH6",
    "image": "https://m.media-amazon.com/images/I/31UqaUIejfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZ34MLH6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0HFYP1X31",
    "title": "Neutrogena Hidratante Corporal Hydro Boost Water Gel, Kit com 2 Unidades de 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0HFYP1X31",
    "image": "https://m.media-amazon.com/images/I/71-o07gmbdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFYP1X31?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CJMV9ZQG",
    "title": "Roupa Íntima Bigfral Derma Plus P/M 24 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CJMV9ZQG",
    "image": "https://m.media-amazon.com/images/I/71fCLETIrtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJMV9ZQG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FQ6VY7S2",
    "title": "Kit 3 Pacotes Café Especial em Grãos Coffee Mais Variedades: Caparaó, Intenso e Solos Vulcânicos - 100% Arábica (3x250g)",
    "source_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2",
    "image": "https://m.media-amazon.com/images/I/61f5fOGM32L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.71,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "source_url": "https://www.amazon.com.br/dp/B0DLVH2WN4",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CCQBVQ43",
    "title": "Baby Alive, Boneca, Bebê Shampoo, Harper Hugs - Cabelos Loiros, Brinquedo",
    "source_url": "https://www.amazon.com.br/dp/B0CCQBVQ43",
    "image": "https://m.media-amazon.com/images/I/71VclfCy-aL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CCQBVQ43?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0985RJT3K",
    "title": "Philco Ferro a Vapor Travel Ceramic Bivolt Base em Cerâmica",
    "source_url": "https://www.amazon.com.br/dp/B0985RJT3K",
    "image": "https://m.media-amazon.com/images/I/51cMAvfwILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0985RJT3K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09H8P5L6J",
    "title": "Kit Hidratante Facial L'Oréal Paris Revitalift Hialurônico Diurno FPS 20 + Noturno, Tratamento Antirrugas e Preenchedor com Ácido Hialurônico Puro, 49g",
    "source_url": "https://www.amazon.com.br/dp/B09H8P5L6J",
    "image": "https://m.media-amazon.com/images/I/51CqsKH0b9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09H8P5L6J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0D9ZK4YDX",
    "title": "LYOR - Lixeira Quadrada De Metal Com Pedal e Tampa Em Bambu Preta 5L",
    "source_url": "https://www.amazon.com.br/dp/B0D9ZK4YDX",
    "image": "https://m.media-amazon.com/images/I/51YMtLMtoBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9ZK4YDX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F67MQCGQ",
    "title": "L'Oréal Paris Elseve Liso dos Sonhos Kit Shampoo, Condicionador e Sérum, com Tecnologia Ativada por Calor para um Liso por 1 Semana, Efeito Antifrizz e Barreira Protetora Contra Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0F67MQCGQ",
    "image": "https://m.media-amazon.com/images/I/817zLg0L03L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F67MQCGQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FRBBQF36",
    "title": "Umidificador Ultrassônico Easy Air 1.8L Branco Multi Saúde - HC290",
    "source_url": "https://www.amazon.com.br/dp/B0FRBBQF36",
    "image": "https://m.media-amazon.com/images/I/41QgGU-LO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FRBBQF36?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07J2PCFB3",
    "title": "Sunny, Skye,1342, Pelúcia, 12', Patrulha Canina",
    "source_url": "https://www.amazon.com.br/dp/B07J2PCFB3",
    "image": "https://m.media-amazon.com/images/I/51pI0bdl8AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07J2PCFB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CM6RMYMQ",
    "title": "Balança com Bioimpedância Bio Health Multi Saúde - HC059N",
    "source_url": "https://www.amazon.com.br/dp/B0CM6RMYMQ",
    "image": "https://m.media-amazon.com/images/I/31ov9t4Gv+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 79.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CM6RMYMQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07F4G4LJK",
    "title": "Coup Segunda Edição (Inclui Expansão) | Inclui Expansão",
    "source_url": "https://www.amazon.com.br/dp/B07F4G4LJK",
    "image": "https://m.media-amazon.com/images/I/61UvGpwlI9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 80.01,
    "affiliate_url": "https://www.amazon.com.br/dp/B07F4G4LJK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "8543111048",
    "title": "Atlas do Manual do Mundo",
    "source_url": "https://www.amazon.com.br/dp/8543111048",
    "image": "https://m.media-amazon.com/images/I/91+0jwCZJpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 82.02,
    "affiliate_url": "https://www.amazon.com.br/dp/8543111048?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DPJR2KGZ",
    "title": "Tangle Teezer - Escova de cabelo desembaraçadora The Ultimate Detangler para todos os tipos de cabelo. Cor: Rosa",
    "source_url": "https://www.amazon.com.br/dp/B0DPJR2KGZ",
    "image": "https://m.media-amazon.com/images/I/71Z6+gjhBaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPJR2KGZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09HN38G3F",
    "title": "Furadeira de impacto 3/8\" 500W, 110V",
    "source_url": "https://www.amazon.com.br/dp/B09HN38G3F",
    "image": "https://m.media-amazon.com/images/I/51FeRa+3SYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 84.64,
    "affiliate_url": "https://www.amazon.com.br/dp/B09HN38G3F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FDW1LPX8",
    "title": "Mochila Grande para Notebook 17.3 Masculina Feminina,Mochila Backpack Executiva Antifurto, Reforçada, Saídas USB,Impermeável, Escolar, Faculdade, Trabalho,Viagem,Presente (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FDW1LPX8",
    "image": "https://m.media-amazon.com/images/I/81d-fw0QFpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FDW1LPX8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GTRRRWH4",
    "title": "L'Oréal Paris Elseve Collagen Lifter Kit Shampoo, Condicionador e Sérum",
    "source_url": "https://www.amazon.com.br/dp/B0GTRRRWH4",
    "image": "https://m.media-amazon.com/images/I/61JHE7YsN3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTRRRWH4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CKKLV8DM",
    "title": "Tech T-shirt Gola U Masculino",
    "source_url": "https://www.amazon.com.br/dp/B0CKKLV8DM",
    "image": "https://m.media-amazon.com/images/I/51h-2ohHm2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CKKLV8DM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0010ED5FC",
    "title": "Palmer's Palmers Cocoa Butter Formula Loção De Massagem Para Estrias 250Ml Palmers Cocoa Butter 250Ml",
    "source_url": "https://www.amazon.com.br/dp/B0010ED5FC",
    "image": "https://m.media-amazon.com/images/I/71T+JD0dadL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0010ED5FC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0B3STWN1Z",
    "title": "PRO STICK PROTETOR SOLAR MULTIFUNCIONAL FPS95 PRO10 14G",
    "source_url": "https://www.amazon.com.br/dp/B0B3STWN1Z",
    "image": "https://m.media-amazon.com/images/I/51hd3pRS-DL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B3STWN1Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07GC7FTPC",
    "title": "Boné MLB New York Yankees New Era",
    "source_url": "https://www.amazon.com.br/dp/B07GC7FTPC",
    "image": "https://m.media-amazon.com/images/I/51tC2EWH+aL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07GC7FTPC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B08D8NFYZL",
    "title": "Lixeira com Pedal New Tramontina em aço inox com Acabamento Polido 12 L",
    "source_url": "https://www.amazon.com.br/dp/B08D8NFYZL",
    "image": "https://m.media-amazon.com/images/I/41bJQubJQRS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08D8NFYZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DGTKZ2S1",
    "title": "Bebedouro para Gatos, 3L Fonte Gato Inox Comedouros, Bebedouros e Acessorios para Gatos, Silenciosa, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1",
    "image": "https://m.media-amazon.com/images/I/61EJXP1YreL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DPBFH9MZ",
    "title": "Mochila Executiva Impermeavel De Notebook Masculina De Até 15,6\"",
    "source_url": "https://www.amazon.com.br/dp/B0DPBFH9MZ",
    "image": "https://m.media-amazon.com/images/I/51tWA0zENaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPBFH9MZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B095VF5GR7",
    "title": "Chuveiro Loren Shower Eletrônico 7500w 220v Lorenzetti",
    "source_url": "https://www.amazon.com.br/dp/B095VF5GR7",
    "image": "https://m.media-amazon.com/images/I/31fyFHV8H-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B095VF5GR7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DXQBPB63",
    "title": "Baby Alive, Boneca, Festinha do Chá, Sophia Sparkle - Cabelos Castanhos, Acessórios Inclusos, Bebe e Faz Xixi - A partir de 3 Anos",
    "source_url": "https://www.amazon.com.br/dp/B0DXQBPB63",
    "image": "https://m.media-amazon.com/images/I/615tjGvR0-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DXQBPB63?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0D9PM7MDP",
    "title": "Aspirador de Pó Vertical Britânia 2 em 1 com Filtro Ciclone 1400W BAS30 1,5L Azul 127V",
    "source_url": "https://www.amazon.com.br/dp/B0D9PM7MDP",
    "image": "https://m.media-amazon.com/images/I/41BWOPa7xqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9PM7MDP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DNHGQHMY",
    "title": "Bettdow SmartWatch, relogio smartwatch com Ecrã tátil e Alexa, à prova d'água IP68, relogio feminino e masculino, com 100+ modo esportivo e recebimento de notificações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DNHGQHMY",
    "image": "https://m.media-amazon.com/images/I/61jq8y1sVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNHGQHMY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H6XQWZXR",
    "title": "Kit De Desenho Profissional 96 Peças Com Estojo Portátil – 72 Lápis De Cor Oleosos, 12 Lápis De Grafite 8B–5H, Lápis De Carvão Macio Médio Duro, Esfuminhos, Acessórios E Bloco A5 Para Desenho E Esboço",
    "source_url": "https://www.amazon.com.br/dp/B0H6XQWZXR",
    "image": "https://m.media-amazon.com/images/I/71Kpqi5EvSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 122.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6XQWZXR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B00008PW0J",
    "title": "Fisher-Price Brinquedo para Bebês Girafa com Blocos para crianças a partir de 6 meses",
    "source_url": "https://www.amazon.com.br/dp/B00008PW0J",
    "image": "https://m.media-amazon.com/images/I/51ZD5QAtRpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 125.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B00008PW0J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B094YV31R9",
    "title": "I2GO, Carregador Portátil (Power Bank) Ultra Rápido 10000mAh, Power Delivery 20W, 2 Saídas USB + 1 Saída/Entrada USB-C, Preto, i2GO PRO",
    "source_url": "https://www.amazon.com.br/dp/B094YV31R9",
    "image": "https://m.media-amazon.com/images/I/51x6d0ZwylS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B094YV31R9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0C4476NM8",
    "title": "Aspirador de Pó Philco Vertical 2 em 1 1450w Preto Pas1600p - 127",
    "source_url": "https://www.amazon.com.br/dp/B0C4476NM8",
    "image": "https://m.media-amazon.com/images/I/41inGaNI2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 131.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C4476NM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FK1VY11N",
    "title": "Kit 2x Creatina Gummy, Sabor Chiclete e Maçã Verde (120 Gomas) 3g de Creatina por Dose - Zero Açúcar, My Fit",
    "source_url": "https://www.amazon.com.br/dp/B0FK1VY11N",
    "image": "https://m.media-amazon.com/images/I/61aGwVeUudL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 133.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FK1VY11N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CCSSVJ6R",
    "title": "Bota Feminina Cano Curto Fashion Salto Alto Tratorado Confortável (39, Branco)",
    "source_url": "https://www.amazon.com.br/dp/B0CCSSVJ6R",
    "image": "https://m.media-amazon.com/images/I/51xifJCKRtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 134.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CCSSVJ6R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FFT7WR18",
    "title": "Kit Pista Hot Wheels City Oficina Gorila Mattel | Conjunto de pistas com várias maneiras de jogar, inclui lançador e loop, compatível com faixa Speed Snap",
    "source_url": "https://www.amazon.com.br/dp/B0FFT7WR18",
    "image": "https://m.media-amazon.com/images/I/71ebd+koKtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFT7WR18?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G6SXGMB2",
    "title": "iCoffee C3S Moedor de Café Manual, Núcleo de Moagem CNC, 20 g | Moedor de Café Inox com Manivela (Preto 20g)",
    "source_url": "https://www.amazon.com.br/dp/B0G6SXGMB2",
    "image": "https://m.media-amazon.com/images/I/81DFVQPHmNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.62,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6SXGMB2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0C2J8XTYY",
    "title": "Lâminas de Reposição Originais Philips OneBlade QP630/51 Aço Inoxidável - Raspa, Apara e Contorna - Pacote com 3 un",
    "source_url": "https://www.amazon.com.br/dp/B0C2J8XTYY",
    "image": "https://m.media-amazon.com/images/I/81jIOcGhrTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2J8XTYY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GJ5NKLRL",
    "title": "Escavadeira Carros de Controle Remoto Brinquedos Infantil 2.4GHz Recarregável (Escavadeira Carros)",
    "source_url": "https://www.amazon.com.br/dp/B0GJ5NKLRL",
    "image": "https://m.media-amazon.com/images/I/71mlXDopZqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 153.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJ5NKLRL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BTYCRJSS",
    "title": "soundcore P20i da Anker, Fone de Ouvido Bluetooth 5.3 Sem Fio, 2 Mics IA",
    "source_url": "https://www.amazon.com.br/dp/B0BTYCRJSS",
    "image": "https://m.media-amazon.com/images/I/61ljZu9+GXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTYCRJSS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CZ3K4BMD",
    "title": "Brastoy Pintada Bebê Reborn Boneca Realistic Silicone Menina Original (48cm Bebe Boneca Pintada)",
    "source_url": "https://www.amazon.com.br/dp/B0CZ3K4BMD",
    "image": "https://m.media-amazon.com/images/I/6197NzJK6+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 160.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZ3K4BMD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FBGC82BR",
    "title": "Power Bank 30000mAh, Basike Carregador Portátil com Cabo(Amarelo) | 2 Saídas USB-A(até 22.5W) + Tipo-C(até 22.5W) com Cabo, Carregamento Rápido, Led Indicador de Bateria Proteção Inteligente",
    "source_url": "https://www.amazon.com.br/dp/B0FBGC82BR",
    "image": "https://m.media-amazon.com/images/I/61NqcSimH7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBGC82BR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GQKCML7L",
    "title": "iCoffee Moedor Manual de Café Ajustável com Pincel M3PRO Profissional | Mandril de Retificação CNC",
    "source_url": "https://www.amazon.com.br/dp/B0GQKCML7L",
    "image": "https://m.media-amazon.com/images/I/81KAhZf3JUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 163.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQKCML7L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07M6Y7355",
    "title": "EMEET Webcam 1080p com microfone, câmera Web C960, webcam de streaming de 2 microfones, câmera de computador FOV de 90°, webcam USB Plug and Play para chamadas online/conferências,",
    "source_url": "https://www.amazon.com.br/dp/B07M6Y7355",
    "image": "https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B07M6Y7355?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FNVLLQKT",
    "title": "Kit Haltere 6 em 1 Ajustável para Musculação - Preto - Multifuncional com Barra e Kettlebell",
    "source_url": "https://www.amazon.com.br/dp/B0FNVLLQKT",
    "image": "https://m.media-amazon.com/images/I/61ISeRgb21L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 169.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNVLLQKT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CMCQ6WMC",
    "title": "Controlador sem fio GameSir Nova Lite 2.4g para PC com Windows, iPhone, Android, Switch e Steam Deck, Controle Bluetooth Gamepad com gatilho de efeito Hall, Turbo, vibração Rumble(Nova Lite(Branco))",
    "source_url": "https://www.amazon.com.br/dp/B0CMCQ6WMC",
    "image": "https://m.media-amazon.com/images/I/61o5G8H0uRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMCQ6WMC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FFTB8BFL",
    "title": "Basike Power Bank 20000mAh 45W, Cabo USB-C Integrado, Compacto, Prata | Carregador Portátil, 3-Saídas, Bateria Externa de Carregamento Rápido PPS/PD/QC para iPhone Séries 16-13, Samsung S25-21",
    "source_url": "https://www.amazon.com.br/dp/B0FFTB8BFL",
    "image": "https://m.media-amazon.com/images/I/61HIjbaQ3RL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 183.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTB8BFL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09S3ST9V7",
    "title": "Primeira Casa Sylvanian Families",
    "source_url": "https://www.amazon.com.br/dp/B09S3ST9V7",
    "image": "https://m.media-amazon.com/images/I/61AW7oz-4XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 184.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S3ST9V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G4RHZN9J",
    "title": "Cartucho de Tinta TECKKIN Compatível com HP 667 667XL Para DeskJet 2376 | Compatível com HP DeskJet Ink Advantage 2775 2776 2374 1275 2375 6475 6476 6075 5076 5276 (1 Preto 1 Colorido)",
    "source_url": "https://www.amazon.com.br/dp/B0G4RHZN9J",
    "image": "https://m.media-amazon.com/images/I/71LQLilaj8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G4RHZN9J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0916751QC",
    "title": "TRICICLO AVESPA MARAL COLORIDO",
    "source_url": "https://www.amazon.com.br/dp/B0916751QC",
    "image": "https://m.media-amazon.com/images/I/51LiRL70CuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0916751QC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CRTYZG5C",
    "title": "soundcore P30i da Anker, ANC Fone de Ouvido Bluetooth 5.4 Sem Fio, TWS | 45H, com Cancelamento de Ruído Adaptativo, Graves Poderosos, Estojo 2-em-1 com Suporte para Celular, IP54, Fone Gamer TWS",
    "source_url": "https://www.amazon.com.br/dp/B0CRTYZG5C",
    "image": "https://m.media-amazon.com/images/I/51o-AcAQWgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRTYZG5C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B08LDTVYSY",
    "title": "Hot Wheels City Pista de Brinquedo Reboque de Pista de Corridas para crianças a partir de 4 anos",
    "source_url": "https://www.amazon.com.br/dp/B08LDTVYSY",
    "image": "https://m.media-amazon.com/images/I/71DAXGh7CcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 197.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08LDTVYSY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B00NHQFA1I",
    "title": "LEGO Classic - Caixa Média de Peças Criativas",
    "source_url": "https://www.amazon.com.br/dp/B00NHQFA1I",
    "image": "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00NHQFA1I?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H2F5FQK5",
    "title": "Mala Bordo 10kg Bagagem de Mão Expansivel Padrão ANAC com 4 Rodas duplas 360° Cadeado AntiFurto Mala de Viagem Alça Lateral com Divisória, Leve Resistente (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0H2F5FQK5",
    "image": "https://m.media-amazon.com/images/I/71yt2EtDpYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 206.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2F5FQK5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B088MVWBM9",
    "title": "Philco Aspirador Pó Vertical Power Clean 2000W PAS4000V 127V",
    "source_url": "https://www.amazon.com.br/dp/B088MVWBM9",
    "image": "https://m.media-amazon.com/images/I/41El3TMO04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 211.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B088MVWBM9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FY6H3HVR",
    "title": "Bettdow Smartwatch GPS FB041, Relogio Smartwatch Feminino e Masculino,Tela HD de 1,85\", Alexa, 100 Esportes,3ATM à rova d'água, Chamada Bluetooth, Compatível com Android iOS(Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FY6H3HVR",
    "image": "https://m.media-amazon.com/images/I/61HrHnK+98L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 218.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY6H3HVR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G2T43599",
    "title": "LEGO Speed Champions Ferrari 499P 77261",
    "source_url": "https://www.amazon.com.br/dp/B0G2T43599",
    "image": "https://m.media-amazon.com/images/I/81ctu-NjWPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T43599?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CD14V4RQ",
    "title": "Fritadeira Elétrica sem óleo/Air Fryer Philco PFR15PG Preto 4,3L com Timer",
    "source_url": "https://www.amazon.com.br/dp/B0CD14V4RQ",
    "image": "https://m.media-amazon.com/images/I/51QJNzNg7lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CD14V4RQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DMWGLN9C",
    "title": "Andador Amigo Macaco Aprenda Comigo Brinquedo Bebê Fisher-Price Mattel. Atividades educativas com apoio para andar. Ideal a partir dos 9 meses.",
    "source_url": "https://www.amazon.com.br/dp/B0DMWGLN9C",
    "image": "https://m.media-amazon.com/images/I/71X8zgU9ylL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 230.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DMWGLN9C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "6560050416",
    "title": "BOX As Crônicas de Nárnia - Edição de Luxo",
    "source_url": "https://www.amazon.com.br/dp/6560050416",
    "image": "https://m.media-amazon.com/images/I/81erRs9DQDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 231.84,
    "affiliate_url": "https://www.amazon.com.br/dp/6560050416?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FGCX4N8G",
    "title": "Conjunto de 4 peças travesseiro triangular, travesseiro de espuma pós-operatório, ajustável almofada lombar (com fronha), adequado para pós-cirurgia, alívio de refluxo ácido e dor nas costas, etc.",
    "source_url": "https://www.amazon.com.br/dp/B0FGCX4N8G",
    "image": "https://m.media-amazon.com/images/I/613tt+D6SQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 233.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGCX4N8G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G2TD55JQ",
    "title": "Grok Games Gwent: O Jogo de Tabuleiro Lendário",
    "source_url": "https://www.amazon.com.br/dp/B0G2TD55JQ",
    "image": "https://m.media-amazon.com/images/I/715lt5V6tlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 237.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2TD55JQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09Q4L157D",
    "title": "LEGO Orquídea de Decoração de Plantas para Adultos, Construir 10311",
    "source_url": "https://www.amazon.com.br/dp/B09Q4L157D",
    "image": "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 246.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09Q4L157D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09CQHC29Z",
    "title": "Cilindro de CO2 SodaStream Sistema Quick Connect - Original | PRODUTO ORIGINAL",
    "source_url": "https://www.amazon.com.br/dp/B09CQHC29Z",
    "image": "https://m.media-amazon.com/images/I/610cZRCAX1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 261.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09CQHC29Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07L4VJV1G",
    "title": "Britânia Bebedouro, Acqua, Preto, Bivolt, Estilo moderno e elegante Plástico",
    "source_url": "https://www.amazon.com.br/dp/B07L4VJV1G",
    "image": "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07L4VJV1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FFTTQFBM",
    "title": "Tênis Mizuno Sunrise",
    "source_url": "https://www.amazon.com.br/dp/B0FFTTQFBM",
    "image": "https://m.media-amazon.com/images/I/81c0XL9-e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 279.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTTQFBM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B08KKBSDTY",
    "title": "Headset Gamer Logitech G335 com Almofadas com Espuma de Memória, Design Leve e Conexão 3,5mm para PC, PlayStation, Xbox, Nintendo Switch e Mobile - Preto",
    "source_url": "https://www.amazon.com.br/dp/B08KKBSDTY",
    "image": "https://m.media-amazon.com/images/I/71YEF3ZjzkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 279.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08KKBSDTY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0B34XKBXF",
    "title": "KIT LOREAL METAL DETOX SHAMPOO 300ML+MASCARA 250G",
    "source_url": "https://www.amazon.com.br/dp/B0B34XKBXF",
    "image": "https://m.media-amazon.com/images/I/51+2nz3yKkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B34XKBXF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09FKWS793",
    "title": "MIFA A90 Caixas de Som Portáteis Bluetooth, Alto-falante Bluetooth portátil IPX7 à prova d'água, 60W Bass, Emparelhamento estéreo sem fio, Mic embutido, Suporte Micro SD, USB, AUX-in, USB-C Charing",
    "source_url": "https://www.amazon.com.br/dp/B09FKWS793",
    "image": "https://m.media-amazon.com/images/I/61+pHP685TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 295.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B09FKWS793?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "6555321806",
    "title": "Box Harry Potter Premium Vermelho (7 Livros em capa dura)",
    "source_url": "https://www.amazon.com.br/dp/6555321806",
    "image": "https://m.media-amazon.com/images/I/61UQDAOBVWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.5,
    "affiliate_url": "https://www.amazon.com.br/dp/6555321806?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H6FG8TQ2",
    "title": "Ximodot Monitor portátil de 15,6 polegadas, Conectividade USB-C HDMI Full HD 1080P e alto-falantes integrados, Monitor gamer presentes para meninos Preto-2",
    "source_url": "https://www.amazon.com.br/dp/B0H6FG8TQ2",
    "image": "https://m.media-amazon.com/images/I/71pMEq3nSDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 333.92,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FG8TQ2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DG5JXWB3",
    "title": "Cadeira de escritório com design ergonômico conforme NR-17, suporte lombar independente, malha respirável e encosto de cabeça ajustável,Python Fly(Rosa)",
    "source_url": "https://www.amazon.com.br/dp/B0DG5JXWB3",
    "image": "https://m.media-amazon.com/images/I/61X65xNkLzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 341.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DG5JXWB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FYNDSWJR",
    "title": "Cadeira Gamer Ergonômica com Estrutura Reforçada, Reclinação 90°-150°, Apoio de Braço Sincronizado e Suporte Lombar Ajustável – Conforto para Jogos e Home Office",
    "source_url": "https://www.amazon.com.br/dp/B0FYNDSWJR",
    "image": "https://m.media-amazon.com/images/I/71id2uujpsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 342.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FYNDSWJR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0D98VK8PP",
    "title": "Philips Walita Fritadeira Airfryer Série 1000 XL 6,2L, Preta, 110V | Até 90% Menos Óleo – tecnologia RapidAir, 12 modos de preparo e controle analógico (NA130/00)",
    "source_url": "https://www.amazon.com.br/dp/B0D98VK8PP",
    "image": "https://m.media-amazon.com/images/I/510Uj5C7LdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 344.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98VK8PP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07W8X4F48",
    "title": "Mouse Gamer Sem Fio Logitech G703 LIGHTSPEED com RGB LIGHTSYNC, 6 Botões Programáveis, Sensor HERO 25K e Bateria Recarregável - Compatível com POWERPLAY",
    "source_url": "https://www.amazon.com.br/dp/B07W8X4F48",
    "image": "https://m.media-amazon.com/images/I/51fgVUBaPRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W8X4F48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H8RVLPX8",
    "title": "VireColor Cadeira de Escritório Ergonômica Presidente Mesh 200kg Giratória | Cinza, apoio lombar, apoio de cabeça 3D, pistão Classe 3 regulável 10cm, assento largo e malha respirável para home office.",
    "source_url": "https://www.amazon.com.br/dp/B0H8RVLPX8",
    "image": "https://m.media-amazon.com/images/I/71woNhcYVtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H8RVLPX8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G2T3M4KR",
    "title": "LEGO Editions Music Lua do Show de Olivia Rodrigo 43029",
    "source_url": "https://www.amazon.com.br/dp/B0G2T3M4KR",
    "image": "https://m.media-amazon.com/images/I/810rnDXVsJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T3M4KR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CGVQ5GCM",
    "title": "Quadriciclo Infantil Feminino Lady Star Rosa +9 Meses com Guia Maral",
    "source_url": "https://www.amazon.com.br/dp/B0CGVQ5GCM",
    "image": "https://m.media-amazon.com/images/I/61n4-S0RMuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGVQ5GCM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GKJ9T5W8",
    "title": "Carrinho de Passeio Infantil Quadriciclo Wheels Maral Motoquinha com Pedal Empurrador e Buzina",
    "source_url": "https://www.amazon.com.br/dp/B0GKJ9T5W8",
    "image": "https://m.media-amazon.com/images/I/51EsCsmJLoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKJ9T5W8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FCLXPH72",
    "title": "Cadeira Gamer Python Fly, Design Estilo Gamer, Tecido Respirável, Design Ergonômico (Verde)",
    "source_url": "https://www.amazon.com.br/dp/B0FCLXPH72",
    "image": "https://m.media-amazon.com/images/I/71onmP2rIZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCLXPH72?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B076B9MT5W",
    "title": "Faqueiro Aço Inox com Faca para Churrasco 91 Peças Tramontina Laguna Prata",
    "source_url": "https://www.amazon.com.br/dp/B076B9MT5W",
    "image": "https://m.media-amazon.com/images/I/51yP3Gscd1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B076B9MT5W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0C6X3DT56",
    "title": "TakTark Babá Eletrônica Câmera, 4.3\" Monitor de Bebe, Sem Wi-Fi, 2 Way Audio, Visão Nocturna, Zoom Digital, Economia de energia VOX, Temperatura ambiente, Ideal para Pais Novos",
    "source_url": "https://www.amazon.com.br/dp/B0C6X3DT56",
    "image": "https://m.media-amazon.com/images/I/61AuLDm53JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 369.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6X3DT56?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CJTYM3FH",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0CJTYM3FH",
    "image": "https://m.media-amazon.com/images/I/71FrXc9T1SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 372.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJTYM3FH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CDR1SKHR",
    "title": "Jogo de Panelas Tramontina Turim em Alumínio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 10 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0CDR1SKHR",
    "image": "https://m.media-amazon.com/images/I/61AjgTFEaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CDR1SKHR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DSZF1FVQ",
    "title": "Bettdow Capa com Teclado e trackpad para iPad 10ª Geração 10.9\" Polegadas, iPad (A16) 11th Generation 11 Inch 2025; modelos A2696,A2757,A2777,A3354,A3355 e A3356 com Auto Hibernação(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DSZF1FVQ",
    "image": "https://m.media-amazon.com/images/I/715OLSmmqRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSZF1FVQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F13FK329",
    "title": "Cadeira de Escritório Python Fly Leisure, Assento Extra Grande e Largo em Tecido (Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0F13FK329",
    "image": "https://m.media-amazon.com/images/I/71Pjf8mNLoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 383.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F13FK329?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CGR56CN4",
    "title": "Cadeira de escritório presidente, cadeira de home office com apoio para os pés e encosto ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CGR56CN4",
    "image": "https://m.media-amazon.com/images/I/71+UV1-34zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 389.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGR56CN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DX7K4QP5",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 Lite/S10 Fe/S9 Fe/S9/S8/S7 de 11 polegadas,Teclado com LCD Display",
    "source_url": "https://www.amazon.com.br/dp/B0DX7K4QP5",
    "image": "https://m.media-amazon.com/images/I/71DMQPOFAoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 396.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX7K4QP5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CSD46QVZ",
    "title": "Cadeira De Escritório, Cadeira De Com Apoio Para Os Pés E Encosto Ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CSD46QVZ",
    "image": "https://m.media-amazon.com/images/I/61hRkrlMDUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSD46QVZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B08R93TVRG",
    "title": "Fritadeira Philco Air Fryer Oven 12L PFR2200P - 127V",
    "source_url": "https://www.amazon.com.br/dp/B08R93TVRG",
    "image": "https://m.media-amazon.com/images/I/612gXC9waVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08R93TVRG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H4WPWNGL",
    "title": "Banheira Dobrável Com Suporte Termômetro e Redutor Assento Ergonômico 20kg Melon Maxi Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H4WPWNGL",
    "image": "https://m.media-amazon.com/images/I/51u2tW4ctsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4WPWNGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F3D6BDMV",
    "title": "Bettdow Monitor Portatil 14'', FHD 1080P Monitor Portátil Conectado Com USB C Dupla/HDMI, IPS Extensor De Tela para Notebook com VESA e Funda Inteligente magnético, Plug and Play",
    "source_url": "https://www.amazon.com.br/dp/B0F3D6BDMV",
    "image": "https://m.media-amazon.com/images/I/71C3oT8RQtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 402.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F3D6BDMV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B087ZP3JXP",
    "title": "Panela de Pressão com 4,5 Litros em Inox – Tramontina",
    "source_url": "https://www.amazon.com.br/dp/B087ZP3JXP",
    "image": "https://m.media-amazon.com/images/I/41PrXgtEJLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 406.82,
    "affiliate_url": "https://www.amazon.com.br/dp/B087ZP3JXP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G4C8839W",
    "title": "Cadeira Gamer RGB Python Fly com Iluminação Decorativa, Encosto Reclinável, Design Ergonômico para Escritório e Jogos (Azul)",
    "source_url": "https://www.amazon.com.br/dp/B0G4C8839W",
    "image": "https://m.media-amazon.com/images/I/71st+x5q6KL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 408.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G4C8839W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DZ3ZFTX9",
    "title": "Aparelho de Jantar Tramontina Azzura em Porcelana Decorada 30 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0DZ3ZFTX9",
    "image": "https://m.media-amazon.com/images/I/61DIbF8CqHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 412.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZ3ZFTX9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0D78RX8Y1",
    "title": "Cadeira Gamer Python Fly em tecido, respirável e ecológica, ângulo ajustável (Cinza Escuro)",
    "source_url": "https://www.amazon.com.br/dp/B0D78RX8Y1",
    "image": "https://m.media-amazon.com/images/I/71CXvormWyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 413.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D78RX8Y1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CGY57KKM",
    "title": "LEGO Set Icons 10330 McLaren MP4/4 e Ayrton Senna 693 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGY57KKM",
    "image": "https://m.media-amazon.com/images/I/81JnCaFLWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 415.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGY57KKM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F85T4TZ7",
    "title": "Quadriciclo Elétrico Infantil com Aro de Proteção Haste Direcionavel Som e Luz (Vermelho)",
    "source_url": "https://www.amazon.com.br/dp/B0F85T4TZ7",
    "image": "https://m.media-amazon.com/images/I/711aJZ2R28L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 419.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F85T4TZ7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B076HRQ27M",
    "title": "Britânia Panificadora, Multipane, 550W, Branco, 220v, Metal e Plástico",
    "source_url": "https://www.amazon.com.br/dp/B076HRQ27M",
    "image": "https://m.media-amazon.com/images/I/51yWlFZnMAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 474.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B076HRQ27M?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CRT6HQ82",
    "title": "soundcore Sport X20 da Anker, Fone de Ouvido Bluetooth 5.3 Sem Fio, TWS | IP68 para Treinos, ANC Adaptativo Fone Esportivo, Ganchos Ajustáveis, Graves Intensos, À Prova de Suor e Poeira, Academia 48H",
    "source_url": "https://www.amazon.com.br/dp/B0CRT6HQ82",
    "image": "https://m.media-amazon.com/images/I/51RT9s0ObML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 482.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRT6HQ82?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BR51ZZY6",
    "title": "TakTark Babá Eletrônica Câmera, 4.3\" Monitores de Câmara de Vídeo, Pan & Tilt, 2 Way Audio, Visão Nocturna, Zoom Digital, Decoração Sonora VOX, Ideal para Novos Pais",
    "source_url": "https://www.amazon.com.br/dp/B0BR51ZZY6",
    "image": "https://m.media-amazon.com/images/I/619dcpdoSrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 484.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BR51ZZY6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0D3WGTLVD",
    "title": "Caixa de Som Amplificada 380W Flash Lights Philco PCX4800",
    "source_url": "https://www.amazon.com.br/dp/B0D3WGTLVD",
    "image": "https://m.media-amazon.com/images/I/61il9+p7z6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 489.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3WGTLVD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B076X1CFT7",
    "title": "Mor - Escada Multifuncional 4X3 12 Degraus",
    "source_url": "https://www.amazon.com.br/dp/B076X1CFT7",
    "image": "https://m.media-amazon.com/images/I/41Ob-8lUTRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 489.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B076X1CFT7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07Q6KWDZR",
    "title": "Centrífuga de Roupas Mueller Fit 15Kg de roupa molhada Branca 127V",
    "source_url": "https://www.amazon.com.br/dp/B07Q6KWDZR",
    "image": "https://m.media-amazon.com/images/I/51m-b-BBN4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 502.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q6KWDZR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H6B9NV2G",
    "title": "NOVANTE Monitor Portátil Duplo 15.6\" FHD IPS USB-C HDMI para Notebook | Monitor duplo 15.6\" FHD IPS, 100% sRGB, baixa luz azul, USB-C/HDMI, expansão lateral, compatível universal, ajustável",
    "source_url": "https://www.amazon.com.br/dp/B0H6B9NV2G",
    "image": "https://m.media-amazon.com/images/I/811weBwtKiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 541.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6B9NV2G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GD2G4FJX",
    "title": "Cadeira de Jantar Estofada Madeira Maciça Com Telinha Rattan Natural Stter (Couro Marrom)",
    "source_url": "https://www.amazon.com.br/dp/B0GD2G4FJX",
    "image": "https://m.media-amazon.com/images/I/51k9CCAdEqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 555.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GD2G4FJX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0C2Z63CMP",
    "title": "TakTark Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Sem Wifi, Panorâmica Inclinação, Áudio Bidirecional, Night Vision, Zoom Digital, Detecção De Som Vox, Ideal Para Novos Pais",
    "source_url": "https://www.amazon.com.br/dp/B0C2Z63CMP",
    "image": "https://m.media-amazon.com/images/I/612CGjAtCxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2Z63CMP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GSW114MJ",
    "title": "Bettdow Projetor AC1066 4k [Netflix-Licensed], Projetores Portatil 12000 Lumens Full Hd 1080p Compatível Com Android 13, HDR10+ WiFi 6 BT 5.2, Keystone automático, Foco Automático (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0GSW114MJ",
    "image": "https://m.media-amazon.com/images/I/61cYL9Ns2WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 570.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSW114MJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FFYJSTMK",
    "title": "Bettdow Projetor 4k [Netflix-Licensed], Projetores Portatil 12000 Lumens Full Hd 1080p Compatível Com Android 13, HDR10+ Retroprojetor WiFi 6 BT 5.2, Keystone automático, Foco Automático (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FFYJSTMK",
    "image": "https://m.media-amazon.com/images/I/61cYL9Ns2WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 573.56,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFYJSTMK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DJG1VFQN",
    "title": "Mouse Gamer Sem Fio Logitech G PRO 2 LIGHTSPEED para Destros ou Canhotos, 4 Botões Programáveis e Removíveis, Sensor Hero 2 44K DPI, Carregamento USB-C, PC/Mac - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0DJG1VFQN",
    "image": "https://m.media-amazon.com/images/I/51wrLsNJUCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 585.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJG1VFQN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H1HHP7ZW",
    "title": "OLANENEM 6 em 1 Berço Portátil, Berço Moisés com Fraldário e Mosquiteiro, Berço Acoplado à Cama com Suporte Triangular de Aço Carbono, 6 Alturas e Inclinação Antirrefluxo 5°(Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW",
    "image": "https://m.media-amazon.com/images/I/715Pm0wsEVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 588.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DDZXZCGK",
    "title": "Cafeteira Espresso Nespresso Pixie Redesign Titânio 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DDZXZCGK",
    "image": "https://m.media-amazon.com/images/I/51M3CPlQ6NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 598.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DDZXZCGK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H6FMBS39",
    "title": "Basike Caixa de Som Estéreo Sem Fio, Boombox 200W, Bluetooth, cor camuflada | Bateria 18000mAh, IPX6 À Prova de Água, Luz RGB, Equalizador, TWS, Graves Reforçados, Áudio Lossless, Festa, Piscina",
    "source_url": "https://www.amazon.com.br/dp/B0H6FMBS39",
    "image": "https://m.media-amazon.com/images/I/71s7iYLQYoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 626.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FMBS39?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G2T2L38F",
    "title": "LEGO Ideas Peanuts: A Casinha do Snoopy 21368",
    "source_url": "https://www.amazon.com.br/dp/B0G2T2L38F",
    "image": "https://m.media-amazon.com/images/I/81jFpBaU7sL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 629.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T2L38F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FFBJBS1Q",
    "title": "Micro-ondas Philco 33L Preto Acabamento Inox PMO38T 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FFBJBS1Q",
    "image": "https://m.media-amazon.com/images/I/61oquWwtqEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 660.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFBJBS1Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0HDSWG2HV",
    "title": "Cadeira Ergonômica de Malha Respirável para Escritório, Braços Ajustáveis, Suporte Lombar Regulável, Inclinação de 135 Graus para Home Office (cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0HDSWG2HV",
    "image": "https://m.media-amazon.com/images/I/71U4hBhFJeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 664.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HDSWG2HV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FFBK9WVY",
    "title": "Micro-ondas Philco 33L Preto Acabamento Inox PMO38T 127V",
    "source_url": "https://www.amazon.com.br/dp/B0FFBK9WVY",
    "image": "https://m.media-amazon.com/images/I/61oquWwtqEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 676.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFBK9WVY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DD1KD5JP",
    "title": "Philips Walita Fritadeira Airfryer Forno 12 Litros, Preta, 110V",
    "source_url": "https://www.amazon.com.br/dp/B0DD1KD5JP",
    "image": "https://m.media-amazon.com/images/I/61a0AdTUvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 688.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD1KD5JP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BXMV4ZXW",
    "title": "Cadeira para Auto 0-36Kg Isofix Litet All Stages Fix 2.0 Preta e Cinza - BB452",
    "source_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW",
    "image": "https://m.media-amazon.com/images/I/615AvAaOM8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 698.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FLS3QPZ8",
    "title": "Monitor Gamer Samsung 27\" FHD, 120 Hz, HDMI, Preto, S3",
    "source_url": "https://www.amazon.com.br/dp/B0FLS3QPZ8",
    "image": "https://m.media-amazon.com/images/I/61ByMC8ujqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 699.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FLS3QPZ8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G2SZZ6TR",
    "title": "LEGO Fortnite Miau 77081",
    "source_url": "https://www.amazon.com.br/dp/B0G2SZZ6TR",
    "image": "https://m.media-amazon.com/images/I/81yREXUFkeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 712.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2SZZ6TR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FPHFN526",
    "title": "Celular Samsung Galaxy A07 128GB, 4GB, Câm. 50MP, Tela 6.7\"- Verde",
    "source_url": "https://www.amazon.com.br/dp/B0FPHFN526",
    "image": "https://m.media-amazon.com/images/I/610kkYgVhyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPHFN526?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0HFW9W9YM",
    "title": "Tablet Xixaomiro S11 Pad 10.1\" Android 15, 128GB ROM + 12GB RAM, Tela 120Hz, Octa-Core, Câmera 13MP + 5MP, Bateria 8000mAh, Kit com Teclado, Mouse e Caneta Stylus para Trabalho e Estudos (Cinza claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9W9YM",
    "image": "https://m.media-amazon.com/images/I/71F9iYxWjNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9W9YM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FSKYMDVL",
    "title": "Tênis K-Swiss KSWISS HYPERCOURT EXPRESS 3 CLAY AZUL - MASCULINO masculino",
    "source_url": "https://www.amazon.com.br/dp/B0FSKYMDVL",
    "image": "https://m.media-amazon.com/images/I/61f+zuZIvYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 762.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSKYMDVL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BLJ38RJR",
    "title": "LEGO® Technic – 2022 Ford GT Brinquedos Interativos com Pecinhas de Montar 42154",
    "source_url": "https://www.amazon.com.br/dp/B0BLJ38RJR",
    "image": "https://m.media-amazon.com/images/I/91x5kBafNgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 780.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BLJ38RJR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H8QH54NG",
    "title": "Harman Kardon Luna 2 Caixa de Som Bluetooth IP67 Preta | Bluetooth, AI Sound Boost, IP67, Até 12h de Bateria, Luz Ambiente, Auracast™, AirTouch, App Harman Kardon One",
    "source_url": "https://www.amazon.com.br/dp/B0H8QH54NG",
    "image": "https://m.media-amazon.com/images/I/51cv2oWInfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 783.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H8QH54NG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BD9HNJMH",
    "title": "Máquina de Costura SINGER M2505 127V | 9 Pontos, 70 Aplicações | Luz em LED, Alavanca de Retrocesso | Ideal para Artesanato, Costura Criativa, Projetos Domésticos | Acessórios Inclusos",
    "source_url": "https://www.amazon.com.br/dp/B0BD9HNJMH",
    "image": "https://m.media-amazon.com/images/I/51apK7IPaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BD9HNJMH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F22QXHHC",
    "title": "Lancôme La Vie est Belle Vanille Nude Eau de Parfum, Perfume Feminino Floral Almiscarado com Baunilha Glaceada, Almíscar Branco e Jasmim Solar, Alta Fixação e Fragrância de Longa Duração",
    "source_url": "https://www.amazon.com.br/dp/B0F22QXHHC",
    "image": "https://m.media-amazon.com/images/I/51TWP7XYBAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 809.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F22QXHHC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0HF4D4Q9D",
    "title": "Bicicleta Ergométrica Spinning com Volante de 8kg-15kg, Silenciosa, 120kg | Assento e Guidão Ajustáveis, Monitor Digital 5 em 1, Pedais com Firma-Pé e Porta-Garrafa",
    "source_url": "https://www.amazon.com.br/dp/B0HF4D4Q9D",
    "image": "https://m.media-amazon.com/images/I/71bSFwkOHsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 859.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HF4D4Q9D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H1T7241Z",
    "title": "Barbie Conjunto de Brinquedo Casa Com Escorregador",
    "source_url": "https://www.amazon.com.br/dp/B0H1T7241Z",
    "image": "https://m.media-amazon.com/images/I/61VhNgOsi8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1T7241Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07Y94W69D",
    "title": "Kit Caminhão Hot Wheels Ultimate Garagem Roubo T-Rex Mattel. Pista gigante com lançador, rampas e ataque do T-Rex motorizado. Para crianças a partir de 4 anos.",
    "source_url": "https://www.amazon.com.br/dp/B07Y94W69D",
    "image": "https://m.media-amazon.com/images/I/81q94ZM9zjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Y94W69D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0HFW9ZB5C",
    "title": "Xixaomiro Tablet Android 15 Pad 10.1\", 256GB ROM + 12GB RAM, Câmera 13MP + 5MP, Bateria 8000mAh – Kit Completo com Caneta, Mouse, Teclado e Capa, Adequado para Estudo, Trabalho e Lazer (Azul marinho)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9ZB5C",
    "image": "https://m.media-amazon.com/images/I/71LkxHriXuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 915.69,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9ZB5C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FSL3F11K",
    "title": "Remo Magnético Indoor Doméstico 8 Níveis – Trilho de Alumínio 1 m, Movimento Silencioso, Suporte para Tablet, Capacidade de até 150 kg",
    "source_url": "https://www.amazon.com.br/dp/B0FSL3F11K",
    "image": "https://m.media-amazon.com/images/I/71tXLyYN6uL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 949.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSL3F11K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FN6CC8R6",
    "title": "Poltrona Cadeira Sala Leitura Descanso Balanço Amamentação Puff Linho",
    "source_url": "https://www.amazon.com.br/dp/B0FN6CC8R6",
    "image": "https://m.media-amazon.com/images/I/71FB3uRVWtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 986.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FN6CC8R6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B00ELBQIKA",
    "title": "Cadeira Gamer Profissional TGC12 Preta ThunderX3.",
    "source_url": "https://www.amazon.com.br/dp/B00ELBQIKA",
    "image": "https://m.media-amazon.com/images/I/71VqjPlOJAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 998.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00ELBQIKA?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CCXLPKPJ",
    "title": "ORAL-B Escova de Dente Elétrica iO6, Conexão App, Sensor de Pressão",
    "source_url": "https://www.amazon.com.br/dp/B0CCXLPKPJ",
    "image": "https://m.media-amazon.com/images/I/61Dr7W5+eML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1009.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CCXLPKPJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07XM8KGBB",
    "title": "ThunderX3, Cadeira Ergonomic, YAMA1BK, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07XM8KGBB",
    "image": "https://m.media-amazon.com/images/I/51W9FnH1Q1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1017.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XM8KGBB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CP46J3FJ",
    "title": "Ariete 4632, Fritadeira 2 em 1, Air Fryer e Forno Elétrico Vintage Verde, Capacidade de 16 Litros, 1400 Wats, Porta Transparente - 220V",
    "source_url": "https://www.amazon.com.br/dp/B0CP46J3FJ",
    "image": "https://m.media-amazon.com/images/I/819pyOGQy8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1029.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CP46J3FJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09MZKNRW3",
    "title": "Desumidificador Ar Ambiente Elétrico Portátil Pure Ion Antimofo Max Bivolt - Reservatório de 3 Litros - Relaxmedic",
    "source_url": "https://www.amazon.com.br/dp/B09MZKNRW3",
    "image": "https://m.media-amazon.com/images/I/61NIkKGVw3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1048.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MZKNRW3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H2VKRKJG",
    "title": "VEDO Saxofone Soprano Em Si bemol (Bb), Instrumento De Tubo Reto, Campana Integrado, Adequado Para Iniciantes e MúSicos NíVel IntermediáRio, Orquestra, Inclui Todos Os Acessórios, Prata",
    "source_url": "https://www.amazon.com.br/dp/B0H2VKRKJG",
    "image": "https://m.media-amazon.com/images/I/61GO8pRrEkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1086.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2VKRKJG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BQBSH6NQ",
    "title": "Teclado Gamer Sem Fio Logitech G PRO X com design TKL, Layout US, RGB LIGHTSYNC, Tecnologia LIGHTSPEED e Switch Exclusivo GX Brown Tactile - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0BQBSH6NQ",
    "image": "https://m.media-amazon.com/images/I/61rB1-LO3fL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1099.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQBSH6NQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B01NHA3VZK",
    "title": "Kit Chef 10 Peças, Century, Tramontina",
    "source_url": "https://www.amazon.com.br/dp/B01NHA3VZK",
    "image": "https://m.media-amazon.com/images/I/917Q6ad7pCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1139.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B01NHA3VZK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BQ7KJ9NV",
    "title": "Monitor UHD Samsung 32\", 4K, HDMI, Display Port, Freesync, Preto, Série UJ59",
    "source_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV",
    "image": "https://m.media-amazon.com/images/I/91XfEXGz9UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1184.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FMYYGFQF",
    "title": "LEGO Editions Sports Troféu Oficial da Copa do Mundo FIFA™ 43020",
    "source_url": "https://www.amazon.com.br/dp/B0FMYYGFQF",
    "image": "https://m.media-amazon.com/images/I/81JUw+JvtPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMYYGFQF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DCZ9PRCP",
    "title": "Amazfit T-Rex 3 Relógio Inteligente Robusto/Militar 48mm, GPS, Mapas Offline, Longa Vida da Bateria,328 Pés Resistente à Água, 170 Modos de Fitness/Desporto (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DCZ9PRCP",
    "image": "https://m.media-amazon.com/images/I/71GtgMbKvKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1291.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DCZ9PRCP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DHLG5BTD",
    "title": "LEGO Technic Carro Ferrari SF-24 F1 42207 (1.361 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DHLG5BTD",
    "image": "https://m.media-amazon.com/images/I/81ea+nKSWAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1320.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHLG5BTD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GWLKRWH7",
    "title": "soundcore Liberty 5 Pro da Anker Fone de Ouvido Bluetooth 6.1 Sem Fio, ANC | O chip ANKER Thus™ IA certificado pelo Guinness World Records oferece chamadas nítidas mesmo em ambientes ruidosos",
    "source_url": "https://www.amazon.com.br/dp/B0GWLKRWH7",
    "image": "https://m.media-amazon.com/images/I/61jezisqkFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1349.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWLKRWH7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GJFS2Y3W",
    "title": "Freezer Horizontal 142L Inverter Bivolt Branco Midea",
    "source_url": "https://www.amazon.com.br/dp/B0GJFS2Y3W",
    "image": "https://m.media-amazon.com/images/I/41IAQgFLJQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1398.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJFS2Y3W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GYZB2MGK",
    "title": "Máquina de Remo Magnética Dobrável",
    "source_url": "https://www.amazon.com.br/dp/B0GYZB2MGK",
    "image": "https://m.media-amazon.com/images/I/61e+H4QNRdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1399.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYZB2MGK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DK9Y1Y4D",
    "title": "Caixa de Som, JBL, PartyBox On The Go Essential, Com Microfone, Bluetooth, Show de Luzes, À Prova de Respingos - 100W RMS",
    "source_url": "https://www.amazon.com.br/dp/B0DK9Y1Y4D",
    "image": "https://m.media-amazon.com/images/I/61kJ5KGW8qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1424.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DK9Y1Y4D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09S5L5G2F",
    "title": "Máquina Overlock Singer S0235 Inclui Acessórios (2 Agulhas, Pinça, Chave de Fenda),220V | 4 Linhas, 1300 Pontos/Minuto, Luz LED, Passador de linha manual | Design Compacto e Portátil",
    "source_url": "https://www.amazon.com.br/dp/B09S5L5G2F",
    "image": "https://m.media-amazon.com/images/I/71KTHBFpziL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S5L5G2F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B017RBNOI4",
    "title": "Volante e Pedais Logitech G29 Driving Force com Force Feedback para PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B017RBNOI4",
    "image": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B017RBNOI4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GPPCPZFK",
    "title": "Câmera Digital 4K 72MP com Zoom Óptico 12X, Tela Flip 270° para Selfie e Vlog, WiFi, Flash Xenon, Câmera DSLR para Iniciantes e Criadores de Conteúdo",
    "source_url": "https://www.amazon.com.br/dp/B0GPPCPZFK",
    "image": "https://m.media-amazon.com/images/I/71yKMVr4HoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPPCPZFK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FN4BK3V7",
    "title": "Tablet Lenovo Idea Tab 11\" 90Hz - Octa-Core, 4GB RAM, 128GB, Wi-Fi 5, Android 15, Caneta e Capa",
    "source_url": "https://www.amazon.com.br/dp/B0FN4BK3V7",
    "image": "https://m.media-amazon.com/images/I/61tVQTdW0nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1649.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FN4BK3V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GLSLLGZL",
    "title": "Smartphone Motorola Moto G77 5g - 256GB 24GB (8GB RAM + 16GB RAM Boost) camera 108MP Ultra-Pixel, tela 1.5k extreme Amoled 120hz, ultrarresistente - Marrom",
    "source_url": "https://www.amazon.com.br/dp/B0GLSLLGZL",
    "image": "https://m.media-amazon.com/images/I/61zXvb3EmiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLSLLGZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GQC12MYK",
    "title": "Ar-Condicionado Split 9.000 BTUs AI AirVolution Frio Midea | AI , inverter",
    "source_url": "https://www.amazon.com.br/dp/B0GQC12MYK",
    "image": "https://m.media-amazon.com/images/I/314T-z8Hm7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1798.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQC12MYK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GS8BWDZ3",
    "title": "medicube Booster Pro X2™ | Dispositivo de beleza brilhante 7 em 1 | Cuidados 2X para brilho, poros, definição de pele e brilho | Modos de aumento de máscara dupla e folha personalizados | Dispositivo",
    "source_url": "https://www.amazon.com.br/dp/B0GS8BWDZ3",
    "image": "https://m.media-amazon.com/images/I/71Ek01L6hBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1844.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GS8BWDZ3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GVT7QXF7",
    "title": "Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", NFC, Recursos AI, Até 6 Atualizações de Android e Segurança (Lilás)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT7QXF7",
    "image": "https://m.media-amazon.com/images/I/51VZg1VWMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1898.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT7QXF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FGNB2R8B",
    "title": "Webcams 4K Tiny 2 com controle de voz PTZ, rastreamento AI multimodo e foco automático, câmera web com sensor de 1/1,5\", controle por gestos, 60 FPS, Adequado para go-pro/logi-tech/computador",
    "source_url": "https://www.amazon.com.br/dp/B0FGNB2R8B",
    "image": "https://m.media-amazon.com/images/I/51zzKUibrzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1899.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGNB2R8B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B09S5JC7BW",
    "title": "Le Creuset Panela Redonda 22 cm Ferro Fundido Esmaltado Signature Artichaut | Ferro Fundido Esmaltado",
    "source_url": "https://www.amazon.com.br/dp/B09S5JC7BW",
    "image": "https://m.media-amazon.com/images/I/61D3218wjUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1914.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S5JC7BW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FCSP9NS4",
    "title": "Ar Condicionado 9000 Btus Split Hi Wall Inverter Midea Frio Ai Ecomaster 220v",
    "source_url": "https://www.amazon.com.br/dp/B0FCSP9NS4",
    "image": "https://m.media-amazon.com/images/I/51XHzWTiUPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1918.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCSP9NS4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FXMX7SGL",
    "title": "Logitech G, G29 SE Driving Force, Combo Volante Pedais e Câmbio, USB, PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B0FXMX7SGL",
    "image": "https://m.media-amazon.com/images/I/71FpVBlTvyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXMX7SGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B07NSBN9RN",
    "title": "Bicicleta Ergométrica Spinning Kikos F5i Fitness Cardio Musculação com Roda de inércia de 10Kg. silenciosa, resistente e ajustável; assento e guidão reguláveis; Ideal para seus treinos.",
    "source_url": "https://www.amazon.com.br/dp/B07NSBN9RN",
    "image": "https://m.media-amazon.com/images/I/51Brp9SgrxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07NSBN9RN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GVW8464B",
    "title": "Samsung Combo Smart TV 43\" QLED Full HD Q5F + Soundbar HW B400F",
    "source_url": "https://www.amazon.com.br/dp/B0GVW8464B",
    "image": "https://m.media-amazon.com/images/I/513sHm9G9XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2089.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVW8464B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GXFFSVYM",
    "title": "DREAME D15 Plus Robô Aspirador e Passa Pano com Autoesvaziamento, Sucção 13.000 Pa, Limpeza de Carpetes, Desvio de Obstáculos, Minimiza Enroscos, Limpeza para Pets, Bateria 5200mAh, 127V",
    "source_url": "https://www.amazon.com.br/dp/B0GXFFSVYM",
    "image": "https://m.media-amazon.com/images/I/61N-ZmR2MxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2159.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXFFSVYM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FPBR8V26",
    "title": "PHILIPS, Smart TV Ambilight 50\" 4K, Titan OS, 50PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBR8V26",
    "image": "https://m.media-amazon.com/images/I/61hTC1qv92L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2188.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBR8V26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FW1DK8QL",
    "title": "Tablet Lenovo Idea Tab Plus 12.1\" 2.5K 90Hz - Octa-Core, 8GB RAM, 128GB, Wi-Fi 5, Android 15, Caneta e Case",
    "source_url": "https://www.amazon.com.br/dp/B0FW1DK8QL",
    "image": "https://m.media-amazon.com/images/I/61z4Hp0-gEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2212.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FW1DK8QL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H72MVDRZ",
    "title": "Vaso Inteligente Sanitario Smart Led Branco 220v Multifunções Ducha Sensor",
    "source_url": "https://www.amazon.com.br/dp/B0H72MVDRZ",
    "image": "https://m.media-amazon.com/images/I/41weoCQJ9YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2584.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H72MVDRZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GL78BKT7",
    "title": "Depilador a Laser IPL Ulike ME, Resfriamento em Safira, ANVISA, Bivolt | Depilação Rápida e Indolor em Casa, 4 Modos, Até 21 J, Disparo Automático 3x/s, Ice Cooling, Corporal e Facial, Unissex",
    "source_url": "https://www.amazon.com.br/dp/B0GL78BKT7",
    "image": "https://m.media-amazon.com/images/I/61Mla-3gafL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2659.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL78BKT7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GY4H64Y1",
    "title": "Dreame H60 GT, Aspirador Vertical Sem Fio Seco e Úmido, Sucção 21kPa, Manuseio Leve, 0 Emaranhados, Reclinável 180°, Limpeza com Escova Dupla, Lavagem Quente 90°C, Limpeza com Água Fresca, 220V-240V",
    "source_url": "https://www.amazon.com.br/dp/B0GY4H64Y1",
    "image": "https://m.media-amazon.com/images/I/61hkhmYnNKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GY4H64Y1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0G6JW35L3",
    "title": "Monitor Gamer BenQ EW270Q com resolução 2K, cobertura de cor 90% P3, taxa de atualização de 200Hz e alto-falantes integrados de 5W para uma experiência audiovisual completa",
    "source_url": "https://www.amazon.com.br/dp/B0G6JW35L3",
    "image": "https://m.media-amazon.com/images/I/812pr5AWwvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6JW35L3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FMS59N56",
    "title": "LEGO DC Batman Arkham Asylum Colecionável para Adultos 76300 (2.953 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0FMS59N56",
    "image": "https://m.media-amazon.com/images/I/81L8AEBA6zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMS59N56?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DCHPLDMX",
    "title": "Philips Walita Cafeteira Espresso Série 2300 LatteGo, 4 Bebidas, Cinza | Moedor com 12 Ajustes – mós cerâmicas e display touchscreen para o café do seu jeito (EP2330/33)",
    "source_url": "https://www.amazon.com.br/dp/B0DCHPLDMX",
    "image": "https://m.media-amazon.com/images/I/61raiyWLwRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3099.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DCHPLDMX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FPBPDWZQ",
    "title": "PHILIPS, Smart TV Ambilight 65\" 4K, Titan OS, 65PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ",
    "image": "https://m.media-amazon.com/images/I/61-b5p1Qg-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F8KVQZQX",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Branco",
    "source_url": "https://www.amazon.com.br/dp/B0F8KVQZQX",
    "image": "https://m.media-amazon.com/images/I/61Ik2Dj2zTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3298.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8KVQZQX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BZ15NC13",
    "title": "Samsung Lava e Seca 11kg Branco WD11M4473PW - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ15NC13",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15NC13?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GMY41LM8",
    "title": "Smartphone Motorola Edge 70 5G Crystals by Swarovski - 512GB 24GB (12GB RAM + 12GB RAM Boost), Ultrafino, 3 cameras 50MP e tela extreme Amoled 120hz - Cloud Dancer",
    "source_url": "https://www.amazon.com.br/dp/B0GMY41LM8",
    "image": "https://m.media-amazon.com/images/I/61LyzNkloEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMY41LM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ129NTZ",
    "image": "https://m.media-amazon.com/images/I/516qpWn6k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0H765LVJJ",
    "title": "Samsung Combo Smart TV 58\" Crystal UHD 4K 2026 + Soundbar Samsung HW-B450F",
    "source_url": "https://www.amazon.com.br/dp/B0H765LVJJ",
    "image": "https://m.media-amazon.com/images/I/51uHVMuc94L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H765LVJJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FVPLDKKG",
    "title": "Electrolux Geladeira Electrolux Frost Free Inverter 400L Efficient AutoSense e Rapid Freeze Inverse Black Inox Look (IB6B) Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0FVPLDKKG",
    "image": "https://m.media-amazon.com/images/I/4183aoBiILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPLDKKG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F6CX2QK4",
    "title": "Notebook HP 256R G9 Intel Core i5 13º Geração. Memoria RAM 16GB. SSD 256GB. Tela de 15,6\" LCD. Windows 11 - Home SL - Cinza Escuro. Bivolt. (BQ9L2AT#AK4)",
    "source_url": "https://www.amazon.com.br/dp/B0F6CX2QK4",
    "image": "https://m.media-amazon.com/images/I/71rq8UFkcvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3967.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6CX2QK4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0FXMBWGGM",
    "title": "Dreame D20 Ultra Aspirador robô e Mopa, Sucção 13.000Pa, esvaziamento automático, limpeza automática da mopa, elevação da mopa, detecção ultrassônica de tapetes, fácil manutenção, 127v",
    "source_url": "https://www.amazon.com.br/dp/B0FXMBWGGM",
    "image": "https://m.media-amazon.com/images/I/61putSKYjhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXMBWGGM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DSXX6XB3",
    "title": "Celular Samsung Galaxy S25 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.2\", Prata",
    "source_url": "https://www.amazon.com.br/dp/B0DSXX6XB3",
    "image": "https://m.media-amazon.com/images/I/61ypIBTp6vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSXX6XB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0BFG1DGDR",
    "title": "Lava & Seca 11 Kg Samsung SmartThings Inox Look com 12 Programas de Lavagem - 110V",
    "source_url": "https://www.amazon.com.br/dp/B0BFG1DGDR",
    "image": "https://m.media-amazon.com/images/I/41hqpPsERSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4464.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFG1DGDR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "source_url": "https://www.amazon.com.br/dp/B0F5X4NPK2",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GKQNGV23",
    "title": "Celular Samsung Galaxy S26 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.3\" - Azul",
    "source_url": "https://www.amazon.com.br/dp/B0GKQNGV23",
    "image": "https://m.media-amazon.com/images/I/61eUOIh87pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4775.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQNGV23?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0CFG9M9RZ",
    "title": "Vídeo Conferência USB 4K Microfone Wireless A EVC 2000 G2 Cinza Intelbras",
    "source_url": "https://www.amazon.com.br/dp/B0CFG9M9RZ",
    "image": "https://m.media-amazon.com/images/I/31DRQ2c0iiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4890.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFG9M9RZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0DPY3469H",
    "title": "Philips Walita Cafeteira Espresso Superautomática Série 5500, 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DPY3469H",
    "image": "https://m.media-amazon.com/images/I/71Q8zNldpZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5398.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPY3469H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GPN3XW9T",
    "title": "Bicicleta Elétrica HDJ G60 Aro 20 - Motor 1000W, Bateria 48V 20Ah 32Mph, Até 50km Autonomia, Suspensão Dupla, Freio Hidráulico, 7 Velocidades - Mobilidade Urbana para Adultos, Preto",
    "source_url": "https://www.amazon.com.br/dp/B0GPN3XW9T",
    "image": "https://m.media-amazon.com/images/I/61vGR09GeeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6174.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPN3XW9T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GKQTTCMM",
    "title": "Celular Samsung Galaxy S26 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9\" - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTTCMM",
    "image": "https://m.media-amazon.com/images/I/61tUK0-AiTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7690.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTTCMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GYQ6JLLN",
    "title": "Smart TV TCL 85 Polegadas QD-Mini LED 4K A400M WiFi Bluetooth Google TV HDR10+ 144 Hz VRR 85A400M",
    "source_url": "https://www.amazon.com.br/dp/B0GYQ6JLLN",
    "image": "https://m.media-amazon.com/images/I/81thYHM7SlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8599.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQ6JLLN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0GPQTM751",
    "title": "Ar Condicionado Split Teto Inverter Midea Connect 60.000 Btus Frio 220v R-32",
    "source_url": "https://www.amazon.com.br/dp/B0GPQTM751",
    "image": "https://m.media-amazon.com/images/I/51MYHzxciAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8995.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPQTM751?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  },
  {
    "asin": "B0HFQFSDT4",
    "title": "Notebook Samsung Galaxy Book6 Pro 14\" AMOLED Copilot+ PC, Windows 11 Home, Ultra X7, 32GB, 1TB SSD, Arc B390, 1.24 kg",
    "source_url": "https://www.amazon.com.br/dp/B0HFQFSDT4",
    "image": "https://m.media-amazon.com/images/I/5186PqxMJeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 11899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFQFSDT4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T17:04:23.000Z"
  }
];
