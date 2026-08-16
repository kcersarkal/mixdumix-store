const PRODUCTS = [
  {
    "asin": "B07XLFHKCW",
    "title": "Twinings Chá de Hortelã, 10 Sachês, Infusão de Ervas, Revigorante e Refrescante, Auxilia na Digestão, Naturalmente Sem Cafeína",
    "image": "https://m.media-amazon.com/images/I/71jt3ZRwTqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 11.64,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XLFHKCW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07Z7CTQ4G",
    "title": "Twinings Chá Misto Camomila, Mel e Baunilha 15G - Caixa com 10 Unid",
    "image": "https://m.media-amazon.com/images/I/612s9-IU1mL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 13.53,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Z7CTQ4G?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07W6B8LCZ",
    "title": "Protetor Díário Intimus® Tecnologia Antibacteriana - 80 un",
    "image": "https://m.media-amazon.com/images/I/61wj2Rc59YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 15.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W6B8LCZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08NX5DKM1",
    "title": "Kit NIVEA Desodorante Aerosol Men Black&White Invisible - 2 unidades",
    "image": "https://m.media-amazon.com/images/I/61MNgKAQcrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08NX5DKM1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GZHTM4SM",
    "title": "Brimil - Percarbonato de Sódio 1kg 100% Puro Tira Manchas em Pó Alvejante Biodegradável para Roupas Brancas Coloridas e Limpeza Doméstica",
    "image": "https://m.media-amazon.com/images/I/61z6KBYF8ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZHTM4SM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09GHN14FP",
    "title": "Danos Vorazes Óleo Reparador 50ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71AMqfOXdAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GHN14FP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B074LX2C86",
    "title": "Meu Cacho Minha Vida Shampoo 500ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71sRs80kVLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LX2C86?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B074LVYZDJ",
    "title": "Lola From Rio - Meu Cacho Minha Vida - Creme de Pentear: brilho, maciez e definição. Cabelos Cacheados. 500ml",
    "image": "https://m.media-amazon.com/images/I/51omKxWOC3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LVYZDJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CQ1QVJ3L",
    "title": "Colgate Luminous White Carvão Ativado Creme Dental Clareador, 4x70g",
    "image": "https://m.media-amazon.com/images/I/8193hRZ3ttL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQ1QVJ3L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B074LQXGM7",
    "title": "Meu Cacho Minha Vida Condicionador 500g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/51yaUGrtIOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LQXGM7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G45KPX15",
    "title": "Elseve Collagen Lifter Máscara de Tratamento Condicionante Efeito Teia Para Resgate de Massa com Peptídeos de Colágeno Reconstrói a Fibra e Dá Volume por 72h 300g",
    "image": "https://m.media-amazon.com/images/I/71EYznJIxWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45KPX15?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09XFLHJ1S",
    "title": "Danos Vorazes Máscara de Tratamento 450g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61C0iM4H-iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B09XFLHJ1S?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DJHCX662",
    "title": "Leave - in Essencial Seca Sem Frizz Amend 180g",
    "image": "https://m.media-amazon.com/images/I/41zJM87K8JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJHCX662?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B001GAP4YA",
    "title": "DAS, Massa para Modelar, Branco, 1Kg",
    "image": "https://m.media-amazon.com/images/I/61Hh2n69xrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 32.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B001GAP4YA?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08B5GFHZN",
    "title": "Anasol Protetor Solar Facial FPS 70 Clareador - 60 g",
    "image": "https://m.media-amazon.com/images/I/51wZRC7vnPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08B5GFHZN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B079VWB8JN",
    "title": "Base BB Cream L'Oréal Paris Dermo Expertise Cor Clara FPS 20, 30ml",
    "image": "https://m.media-amazon.com/images/I/61ahyEyq+nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 36.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B079VWB8JN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B085PJ15G9",
    "title": "Garnier SkinActive Água Micelar de Limpeza Tudo em 1, Solução Demaquilante que Limpa, Tonifica e Remove Oleosidade, Fórmula Suave Sem Álcool para Todos os Tipos de Pele, 400ml",
    "image": "https://m.media-amazon.com/images/I/71zwWARGLuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 36.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B085PJ15G9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B59X7JQB",
    "title": "Lâmpada Inteligente Alta Potência 20W Elgin Color RGB Wifi Compatível com Alexa e Google Home",
    "image": "https://m.media-amazon.com/images/I/61XJY8yEABL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 36.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B59X7JQB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DKVJ1HWB",
    "title": "Lola Cosmetics Kit Cronograma Capilar Be(m) Dita Ghee - 3 Produtos",
    "image": "https://m.media-amazon.com/images/I/71K-GAoX50L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 38.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKVJ1HWB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FMFXH7RT",
    "title": "Faber-Castell Lápis De Cor Supersoft com 24 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZzxtsCXmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFXH7RT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B077BWZLRM",
    "title": "Inoar, Kit #Bombar Super Vitaminas – Shampoo e Condicionador Para Crescimento Acelerado, Fortalecimento Capilar, Redução da Queda e Brilho Intenso, 2x1L",
    "image": "https://m.media-amazon.com/images/I/71O5mTkPAiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 44.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BWZLRM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09PW8LBZD",
    "title": "Box Clássicos de William Shakespeare - com 7 marcadores de páginas",
    "image": "https://m.media-amazon.com/images/I/614GCLvmE4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 44.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B09PW8LBZD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F8BPJW5J",
    "title": "Eudora Siàge Nutri Acid.Complex Máscara Capilar Concentrada 250g",
    "image": "https://m.media-amazon.com/images/I/61HonE2U+gL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 44.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8BPJW5J?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GPRY4TLP",
    "title": "Dove Sabonete Sérum Líquido Intense Hydration 547ml",
    "image": "https://m.media-amazon.com/images/I/61oA8nYHJtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPRY4TLP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GTLS3X1H",
    "title": "MODUS Garrafa Térmica 750ml - Parede Dupla de Isolamento 24horas Gelado | Base Emborrachada Anti Derrapante, Alca Prarcord, Anti Vazamento, BPA Free, para Academia, Viagem e Trabalho",
    "image": "https://m.media-amazon.com/images/I/61ip7YxzztL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTLS3X1H?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B076VXRYGT",
    "title": "G-Tech Balgl10 Balança Digital em Vidro Temperado, Transparente",
    "image": "https://m.media-amazon.com/images/I/51strPHxyuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 51.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B076VXRYGT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CXJLK24Y",
    "title": "Nescau Bebida Láctea 180ml caixa com 27 unidades",
    "image": "https://m.media-amazon.com/images/I/61gtHqTqSkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXJLK24Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GHPGBPSR",
    "title": "Kit Morte Súbita (Shampoo + Condicionador + Spray Reparaçao) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/71ggER1mlqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.81,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHPGBPSR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GHP4NL1J",
    "title": "Kit Rapunzel (Shampoo + Tônico + Milk Spray) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/41OcWO275YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHP4NL1J?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08FVVH9BC",
    "title": "Creme Preventivo Assaduras Huggies Pele Protegida c/3 de 80g",
    "image": "https://m.media-amazon.com/images/I/619A5eTbmwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08FVVH9BC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0939SHBP8",
    "title": "Sérum 5% Niacinamida + 4% Glicólico + 3% Tranexâmico + 2% Salicílico Mix-01 - Anti-acne com 30ml",
    "image": "https://m.media-amazon.com/images/I/61-3pIV+PdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 60.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0939SHBP8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FC3474W1",
    "title": "Kit 02 Travesseiro Toque de Pluma Premium Percal 400 Fios 50x70cm Lavável, Antiácaro, Antialérgico",
    "image": "https://m.media-amazon.com/images/I/61kdwMwQJ2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 60.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FC3474W1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FH7C4YCS",
    "title": "Weleda Babycreme de Calêndula | Proteção Natural Contra Assaduras | Fórmula Suave com Calêndula e Camomila | 120 ml",
    "image": "https://m.media-amazon.com/images/I/41z+UZXo-gL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 62.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH7C4YCS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F89VV1YS",
    "title": "MODUS Garrafa Térmica Esportiva De Inox Com Isolamento A Vácuo 950ML",
    "image": "https://m.media-amazon.com/images/I/61XlEtHpMzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F89VV1YS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G2682GZF",
    "title": "5 Magnésio Treonina 180 Cápsulas, 3 Meses de Uso, Longa Duração, Alto Teor Treonina + 5 tipos de Magnésio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61HHbHcWzlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2682GZF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0C7Q4Q74P",
    "title": "EUCERIN Protetor Solar Facial Ultra Fluido FPS 60 50ml, Hydro Fluid, Antioleosidade, Antioxidante, Rosto, Proteção UVA, UVB e Luz Visível",
    "image": "https://m.media-amazon.com/images/I/611v1PCMAbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.69,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7Q4Q74P?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08WKPK952",
    "title": "Cartucho de tinta HP 667 Preto Original (3YM79AB) Para Impressora Deskjet 2376, 2776, 6476, 5076, 5276",
    "image": "https://m.media-amazon.com/images/I/81rYpjuTwdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 65.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B08WKPK952?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07MRZ2R3V",
    "title": "G-Tech Oxímetro De Pulso Portátil Modelo Oled Graph",
    "image": "https://m.media-amazon.com/images/I/51ZXi74E7HL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B07MRZ2R3V?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BK23JWHG",
    "title": "Escova Secadora Cadence 4 em 1 - ESC 710, Cinza/Preto Bivolt",
    "image": "https://m.media-amazon.com/images/I/51wB18CDQbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 86.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BK23JWHG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CZBM7728",
    "title": "ELG, SHCI603, Câmera interna 1080P Full HD Inteligente Wi-Fi com Botão SOS, Áudio Bidirecional, Visão Noturna e Detecção de Movimentos, Branco",
    "image": "https://m.media-amazon.com/images/I/61exKmRRnDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZBM7728?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DZ34LZQB",
    "title": "The Perfect Top Feminino",
    "image": "https://m.media-amazon.com/images/I/31jWQ-hrZ4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZ34LZQB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BFT7XG6C",
    "title": "Tech T-shirt Gola U Masculino Preto M",
    "image": "https://m.media-amazon.com/images/I/51ML3MBfGGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFT7XG6C?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GSH6DCCJ",
    "title": "Kit 10 Potes de Vidro Herméticos 640ml com 4 Travas Ideal para Marmitas e Conservação de Alimentos, Vedação Total, Refratário para Forno e Freezer",
    "image": "https://m.media-amazon.com/images/I/71sfm0MbB8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSH6DCCJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GMK2THYT",
    "title": "Fralda Pants Huggies Proteção Acolchoada Tamanho XXXG 50 unidades",
    "image": "https://m.media-amazon.com/images/I/71Oa5ne9F-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMK2THYT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09VMDCXQM",
    "title": "Truss Frizz Zero Leave-In | Máscara Líquida para Controle de Frizz, Brilho e Hidratação | 260ml",
    "image": "https://m.media-amazon.com/images/I/61ovn6Ef5xL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09VMDCXQM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D3J37TLY",
    "title": "ISDIN Óleo de Banho Ureadin Calm OleoGel - 400ml",
    "image": "https://m.media-amazon.com/images/I/61P7hJWHoxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 112.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3J37TLY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0051LRFB0",
    "title": "Bacardi, Rum 8 anos Reserva Ocho, 750 ml",
    "image": "https://m.media-amazon.com/images/I/61TOSd1e4qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0051LRFB0?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B1VXW16F",
    "title": "Inalador/Nebulizador De Rede Vibratoria Nebmesh2 Un",
    "image": "https://m.media-amazon.com/images/I/71Onp1KWoaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B1VXW16F?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B094YR4SLJ",
    "title": "I2GO, Carregador Portátil (Power Bank) Ultra Rápido 20000mAh, Power Delivery 20W, 2 Saídas USB + 1 Saída/Entrada USB-C, Preto, i2GO PRO",
    "image": "https://m.media-amazon.com/images/I/51sXTXpIA1S._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B094YR4SLJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0161ZC5GY",
    "title": "Atoderm Intensive Baume, Bioderma",
    "image": "https://m.media-amazon.com/images/I/419xPG-katL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 154.27,
    "affiliate_url": "https://www.amazon.com.br/dp/B0161ZC5GY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GQK6ZQ57",
    "title": "iCoffee Moedor de Café Manual M3PRO Com Capacidade de 20g | Broca Cônica de Aço Inoxidável CNC, Ajuste Interno Ajustável, Posicionamento de Rolamento Duplo (Cinza chumbo)",
    "image": "https://m.media-amazon.com/images/I/811qA21WPeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 154.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQK6ZQ57?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BTYDLTM3",
    "title": "soundcore P20i da Anker, Fone de Ouvido Bluetooth 5.3 Sem Fio, 2 Mics IA | Bass UP, Graves Potentes, Drivers de 10mm, 30H, Resistência à Água TWS, Personalização de Som via App para Academia, IPX5",
    "image": "https://m.media-amazon.com/images/I/61ipp6r+idL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTYDLTM3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07HR1MZQP",
    "title": "Umidificador de Ar Ultrassônico 3,4 Litros Bivolt Fisher Price - HC115",
    "image": "https://m.media-amazon.com/images/I/41Gjg7-IkUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 160.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HR1MZQP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "6584004406",
    "title": "Vade Mecum Saraiva Tradicional - 41ª Edição 2026",
    "image": "https://m.media-amazon.com/images/I/81HmyZ8mCzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6584004406?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09JH4PD8Q",
    "title": "Base De Carregamento Do Dualsense - PlayStation 5",
    "image": "https://m.media-amazon.com/images/I/41y-G-g+dVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 165.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B09JH4PD8Q?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07R3DX5GS",
    "title": "EUCERIN Creme Facial Antimanchas Dia FPS 30 50ml, Anti-Pigment, Clareador, Thiamidol, Diurno",
    "image": "https://m.media-amazon.com/images/I/61tut8HPtrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 167.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B07R3DX5GS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FHHKYW5L",
    "title": "Basike Carregador Portátil, Power Bank 20000mAh com Cabos Integrados(Prata)",
    "image": "https://m.media-amazon.com/images/I/51od1W0TzRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHKYW5L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DXN5BKM5",
    "title": "Stanley Garrafa Térmica Aerolight Iceflow Flip Straw Rose Quartz | 710 ML",
    "image": "https://m.media-amazon.com/images/I/41BV1h7mjiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DXN5BKM5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D5BCR8KT",
    "title": "GameSir Nova Lite Controle Bluetooth e Sem Fio 2.4G para PC Windows, Celular Android iPhone, Nintendo Switch e Steam Deck, Gamepad com Hall Effect Anti-Drift, Turbo, Vibração, Dongle USB（roxo escuro)",
    "image": "https://m.media-amazon.com/images/I/51TYMb7-VhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D5BCR8KT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F9ZX2DSL",
    "title": "Panela de Pressão Brinox 4,2L Antiaderente Ceramic Life Pressure com Fundo de Indução Areia",
    "image": "https://m.media-amazon.com/images/I/61UKDsyvpCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9ZX2DSL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F6YJVZ5L",
    "title": "Mini Projetor Portátil 5G Wi-Fi 6 Bluetooth 5.0 Android 11 4K 1080P Full HD 8000 Lumens LED Auto Correção Trapezoidal Horizontal Rotação 180° Ideal para Projeções Cinemáticas",
    "image": "https://m.media-amazon.com/images/I/519TeoR49WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6YJVZ5L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FQP1B2D1",
    "title": "6 em 1 mixer de mão, 1000W, 8 velocidades, Exibição digital LCD, Vem com um copo de 860 ml, Triturador de 600 ml, Batedor de aço inoxidável com 4 pás, Adequado para sopas, smoothies e purés(127V)",
    "image": "https://m.media-amazon.com/images/I/61FnnecRGDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 195.69,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQP1B2D1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FMFVYFXC",
    "title": "Faber-Castell Lápis De Cor Supersoft com 100 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ARQT0CGHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFVYFXC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FHQKNKQR",
    "title": "Headset Gamer Havit Gamenote H2002C + U Adaptador USB 7.1, P3, Adaptador P2 para PC, Microfone Destacável, Preto/Roxo",
    "image": "https://m.media-amazon.com/images/I/51LivCs7loL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 209.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHQKNKQR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G92MZ5F5",
    "title": "Basike Power Bank 65W, Carregador Portátil Universal 20000mAh (Prata)",
    "image": "https://m.media-amazon.com/images/I/61YyyyDwhXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 212.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G92MZ5F5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H6B1RR35",
    "title": "TURU HOME 6 em 1 mixer de mão, 1000W, 8 velocidades, Exibição digital LCD, Vem com um copo de 860 ml, Livre BPA,Triturador de 600 ml, Adequado para sopas, smoothies e purés(220V)",
    "image": "https://m.media-amazon.com/images/I/61FnnecRGDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 215.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6B1RR35?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FPSHCSQF",
    "title": "Huggies Fralda Pants Descartável Proteção Acolchoada XG - 144 fraldas",
    "image": "https://m.media-amazon.com/images/I/813VUlveBgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPSHCSQF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H11WS8C5",
    "title": "GOKOCO Escova Secadora Bivolt GD037, Escova Modeladora Íons, Escova Rotativa Styler, Preto",
    "image": "https://m.media-amazon.com/images/I/61ogqOM9UVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H11WS8C5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CMJ9PYB9",
    "title": "Armário Multiuso 2 Portas Aramóveis New",
    "image": "https://m.media-amazon.com/images/I/41Bw-TEyuSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMJ9PYB9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CMJCQGGN",
    "title": "Armário Multiuso 2 Portas Aramóveis New",
    "image": "https://m.media-amazon.com/images/I/31uC2zIUzYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMJCQGGN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FFTQFYXS",
    "title": "Tênis Mizuno Virtue 2 - Feminino",
    "image": "https://m.media-amazon.com/images/I/61UGmcfg8EL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 235.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTQFYXS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B015PYQPCW",
    "title": "Microfone Gamer Fifine Ampligame Am8, Usb, Rgb, Black",
    "image": "https://m.media-amazon.com/images/I/415JgccdxPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 259.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B015PYQPCW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D8JDJ186",
    "title": "Cuvave cube baby efetor de baixo/bass,pedal de multiefeito M-VAVE Tank-B recarregável 36 predefinições 9 slots de pré-amplificador 8 slots de gabinete IR 3 efeitos de modulação/atraso/reverberação",
    "image": "https://m.media-amazon.com/images/I/61Xhk7Y-YbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 266.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8JDJ186?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GJ3CPWC5",
    "title": "100-240V Máquina de Ar de Perfume Inteligente, Difusor De óleo Essencial, Máquina de Fragrância Inteligente Bluetooth de 160 ml",
    "image": "https://m.media-amazon.com/images/I/41imrtlMu-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 269.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJ3CPWC5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FT58H2QP",
    "title": "Jogo de Panelas 19 Peças Aço Cirurgico Inox Tampa de Vidro Para Fogão Gás e Indução Premium",
    "image": "https://m.media-amazon.com/images/I/71u0ThhKbaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FT58H2QP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B097HYQPJ1",
    "title": "SECADOR Taiff TOURMALINE 2100W 127V, preto",
    "image": "https://m.media-amazon.com/images/I/51BoILwnCJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 282.27,
    "affiliate_url": "https://www.amazon.com.br/dp/B097HYQPJ1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B097J7J54H",
    "title": "Taiff SECADOR TOURMALINE 2100W 220, preto",
    "image": "https://m.media-amazon.com/images/I/51gHJqqOYJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 283.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B097J7J54H?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CKTTMR2H",
    "title": "Reluz Art Bandeja Porta Cápsulas Espelho 1 Gaveta com Corrediças Telescópicas Compatível com Cápsulas Nespresso Original, Vertuo, Dolce Gusto Três Corações ou Delta Q (Dolce Gust, Preto)",
    "image": "https://m.media-amazon.com/images/I/71rcYPUMM9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 288.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CKTTMR2H?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F3BKFZR7",
    "title": "Philips OneBlade Pro Barbeador e Aparador Elétrico 12 Tamanhos em 1 Pente | Apara e barbeia com precisão | Display Indicador de Bateria | Lâmina Dupla Face | À prova d'água | QP6532/10",
    "image": "https://m.media-amazon.com/images/I/71nt4HkgpJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F3BKFZR7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G7HJFJVH",
    "title": "Kérastase Gloss Absolu Frizz-Glaze Cream, creme modelador antifrizz para cabelos com muito frizz, com ácido glicólico, ácido hialurônico e óleo de rosa mosqueta, 240 ml",
    "image": "https://m.media-amazon.com/images/I/51KAJaARYTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 311.75,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G7HJFJVH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FST4FTPQ",
    "title": "Crimson Desert: Standard Edition - PlayStation 5",
    "image": "https://m.media-amazon.com/images/I/81YboVgAENL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 315.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FST4FTPQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0975WWR2C",
    "title": "Babá Eletrônica, TakTark Câmera para Bebês com Tela de 3.2\", Visão Noturna Infravermelha, Áudio Bidirecional, Detecção de Som VOX, Monitoramento Temperatura, Canção de Ninar",
    "image": "https://m.media-amazon.com/images/I/61h2x-zBZIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 318.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0975WWR2C?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D935NQ31",
    "title": "Mala De Viagem Média 23Kg Polipropileno Rodas Duplas 360 Fibra Rígida Leve Resistente Para Despachar (AZUL, MÉDIA)",
    "image": "https://m.media-amazon.com/images/I/61CetEf31oL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 319.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D935NQ31?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FQJZVD2S",
    "title": "Bettdow SmartWatch GPS, Relogio Smartwatch Masculino e Feminino, 1,43 polegadas HD AMOLED, chamada Bluetooth, Esportivos relógio com voz por IA, Compatível com Android iOS, 2 Pulseiras (Titanium)",
    "image": "https://m.media-amazon.com/images/I/61Uk+h5umYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 322.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQJZVD2S?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F9T2DD2P",
    "title": "Airwit Ventilador de Teto Preto 106,7 cm com Luz LED, 6 Velocidades | Motor DC Reversível, Controle Remoto, Bivolt 110-220V, Bateria não inclusa",
    "image": "https://m.media-amazon.com/images/I/61z7c5eTTwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 323.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9T2DD2P?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H6G6WK2N",
    "title": "Monitor Portatil para Notebook 15.6\" FHD IPS Ultra Fino 1080P com HDR e FreeSync USB-C/HDMI Zero Latência - Tela Portátil para Notebook com Filtro de Luz Azul,pare Viagens, Casa, Trabalho e Jogos",
    "image": "https://m.media-amazon.com/images/I/713yAflSnQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 329.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6G6WK2N?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FZ9MV9CM",
    "title": "Cama Queen 158x198cm, Estrutura Metálica Preta | Estrutura metálica resistente com ripas de suporte, boa estabilidade e espaço livre sob a cama.",
    "image": "https://m.media-amazon.com/images/I/51+tBAUfQXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 332.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FZ9MV9CM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D8JJRCJN",
    "title": "GameSir G8 Plus Bluetooth Mobile Game Controller for Switch & iOS & Android & Tablets, Wireless Gamepad with Hall Effect Joysticks/Hall Trigger, Play Minecraft, Genshin Impact, Call of Duty Mobile",
    "image": "https://m.media-amazon.com/images/I/717de+4D0kL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8JJRCJN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BQ3NT5JM",
    "title": "Mesa Dynamica Diretor 180x60x75cm Branco Chess/Est.preta",
    "image": "https://m.media-amazon.com/images/I/61VTDrykqmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ3NT5JM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08BJC798H",
    "title": "Fischer Secadora de Roupas Super Ciclo 8KG Branca 220V 28200-63976",
    "image": "https://m.media-amazon.com/images/I/71lXyflQhvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 358.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08BJC798H?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CNSBGC4T",
    "title": "Jogo de Panelas Brinox Aço Inoxidável Fundo Triplo 4 Peças Jasmin com Indução",
    "image": "https://m.media-amazon.com/images/I/51UMUCij9sL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CNSBGC4T?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GXX17YNB",
    "title": "Armário de Cozinha Compacta Aramóveis Malva 4 Portas 1 Gaveta",
    "image": "https://m.media-amazon.com/images/I/61qnwuWAzcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 360.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXX17YNB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DHL7WWMQ",
    "title": "Fone de Ouvido Sem Fio, JBL, Endurace Race TWS, Esportivo, À Prova D'água e Resistente À Poeira - Preto",
    "image": "https://m.media-amazon.com/images/I/51Nk12YsnLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 375.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHL7WWMQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0C3S1HHB5",
    "title": "Mimo Style Jogo de Panelas 10 Peças Estrutura de Alumínio Revestida em Cerâmica Base Tripla Alto Relevo. Tampa Vidro Temperado Alças e Cabos Soft-Touch Compatível com Fogão a Gás Elétrico e Indução",
    "image": "https://m.media-amazon.com/images/I/61N+hfbwTAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C3S1HHB5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FSL3F3WP",
    "title": "Banco de Musculação Dobrável e Ajustável - Suporta até 150kg, Encosto com 5 Posições, Estrutura Triangular Reforçada, Assento Largo e Apoio de Pés Regulável para Treino em Casa",
    "image": "https://m.media-amazon.com/images/I/71BM5C1xvAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 385.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSL3F3WP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F24Z6YNT",
    "title": "Air Fryer Electrolux por Rita Lobo 5,6L Digital Cinza Experience Economia de Energia 1400W (EAF45) 220V",
    "image": "https://m.media-amazon.com/images/I/61InAn6DqaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 386.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F24Z6YNT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H2LTHXRQ",
    "title": "Airwit Ventilador de Teto BLDC Bivolt 132 cm com Controle Remoto | Baixo ruído, 6 velocidades, função reversa, LED 3 cores, memória, quartos, salas amplas",
    "image": "https://m.media-amazon.com/images/I/41mnrV6LU6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2LTHXRQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0C3BV19Q3",
    "title": "Headset Gamer HyperX Cloud III – Compatível com PC, PS5, Xbox Series X|S, Drivers Angulados de 53mm, Áudio DTS, Microfone de 10 mm, USB-C, USB-A, Fio de 3,5 mm, Vermelho e Preto (727A9AA)",
    "image": "https://m.media-amazon.com/images/I/71pz2njkNRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 409.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C3BV19Q3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FXH6Y9G8",
    "title": "Berço Portátil Bebê Acoplado Co-Bed Connect Maxi baby (Grafite)",
    "image": "https://m.media-amazon.com/images/I/51ougekSbcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 410.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXH6Y9G8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CJV2WKQF",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Branco",
    "image": "https://m.media-amazon.com/images/I/613NfdEWPyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 414.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJV2WKQF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D6DT84JD",
    "title": "Bettdow Monitor Portatil 15,6'', FHD 1080P Monitor Portátil Conectado Com USB C Dupla/HDMI, IPS Extensor De Tela para Notebook com VESA e Funda Inteligente magnético, Plug and Play",
    "image": "https://m.media-amazon.com/images/I/71SfTDj9NmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 424.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D6DT84JD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B4Q24P9Q",
    "title": "Midea Panela de Pressão Elétrica 6L com 12 receitas pré-programadas, 3 níveis de pressão e display digital, silenciosa e segura com 10 recursos de segurança, 220V",
    "image": "https://m.media-amazon.com/images/I/51sNWqooJkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 425.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B4Q24P9Q?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H4RZ8WNY",
    "title": "Panela de Pressão Elétrica Digital 5,7L Oster - 127V",
    "image": "https://m.media-amazon.com/images/I/71I4mPc0ofL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 432.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4RZ8WNY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BYT8HSBJ",
    "title": "PURIFICADOR REFRIGERADO NEW E-DUE EQUILIBRIUM GRAFITE FULL RANGE",
    "image": "https://m.media-amazon.com/images/I/51N+HfhYhbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 444.43,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BYT8HSBJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H519DB9L",
    "title": "Bicicleta Ergométrica Bike Spinning Bike Treino em Casa Academia Exercícios Cardio e Emagrecimento Design Confortável e Ajustável Vertical Silenciosa Ideal para Casa Linha GT FITNESS RHEAD",
    "image": "https://m.media-amazon.com/images/I/61e-Y4AgNzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 448.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H519DB9L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H7CT1MTV",
    "title": "Banqueta Média de Madeira Giratória Preta Otello Dsg-005",
    "image": "https://m.media-amazon.com/images/I/41Gm+1OuDxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 449.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H7CT1MTV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07TMRJFNZ",
    "title": "Colormaq Maquina de Lavar Roupa Semi Automatica Tanquinho 10kg LCS10 Branco 127V",
    "image": "https://m.media-amazon.com/images/I/41IU6i0swdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 464.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07TMRJFNZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GG4WYRNM",
    "title": "Bicicleta Ergométrica Bike Spinning Bike Treino em Casa Academia Exercícios Cardio e Emagrecimento Design Confortável e Ajustável Vertical Silenciosa Ideal para Casa Linha Rhead Red High Premium",
    "image": "https://m.media-amazon.com/images/I/61e-Y4AgNzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 474.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GG4WYRNM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FTNWV5F9",
    "title": "Bike Ergometrica Bicicleta Ergometrica Bike Spinning Silenciosa Vertical Modelo Premium",
    "image": "https://m.media-amazon.com/images/I/61CctRbg8wL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 493.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNWV5F9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FFDB8CG1",
    "title": "Micro­ondas 28L - PMO30B 127V - Philco 1100W",
    "image": "https://m.media-amazon.com/images/I/61+lqbYwA2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 493.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFDB8CG1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GWJXM6H2",
    "title": "Mochila MOCHILA CARGO AIR X 60L NTKadulto-unissex",
    "image": "https://m.media-amazon.com/images/I/618oNe6JayL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 539.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWJXM6H2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GD2G4FJX",
    "title": "Cadeira de Jantar Estofada Madeira Maciça Com Telinha Rattan Natural Stter (Couro Marrom)",
    "image": "https://m.media-amazon.com/images/I/51k9CCAdEqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 555.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GD2G4FJX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08Y2CWMXH",
    "title": "Penteadeira Ditália 7 Gav. Pe-80 Branco c/Kit Luz Camarim",
    "image": "https://m.media-amazon.com/images/I/51puUZeke9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 557.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B08Y2CWMXH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0C2Z63CMP",
    "title": "TakTark Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Sem Wifi, Panorâmica Inclinação, Áudio Bidirecional, Night Vision, Zoom Digital, Detecção De Som Vox, Ideal Para Novos Pais",
    "image": "https://m.media-amazon.com/images/I/612CGjAtCxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2Z63CMP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07C4RWG85",
    "title": "Brinox - Jogo de Panelas 8 Peças Ceramic Life Smart Plus - Preto",
    "image": "https://m.media-amazon.com/images/I/51nkLnnOEsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 579.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07C4RWG85?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0921H5SJV",
    "title": "Panasonic Micro-ondas 34L Branco 220v NN-ST65LWRU",
    "image": "https://m.media-amazon.com/images/I/41KDVDZYBeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 619.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0921H5SJV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FQMWX17F",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 FE Plus 13.1 Inch 2025, Tab S10 FE+ de 13.1 polegadas SM-X620, SM-X626, SM-X626B,com Botões de IA, Flexível e portátil",
    "image": "https://m.media-amazon.com/images/I/61g20RM2tCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 630.83,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQMWX17F?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DW96BN1W",
    "title": "Purificador Electrolux de Água Gelada Fria e Natural Elétrico Compacto Eletronico placa Filtro refil 6 meses ou 3000l Painel Touch Bivolt Preto PE12P",
    "image": "https://m.media-amazon.com/images/I/51lj014yH6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 645.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DW96BN1W?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FLS3QPZ8",
    "title": "Monitor Gamer Samsung 27\" FHD, 120 Hz, HDMI, Preto, S3",
    "image": "https://m.media-amazon.com/images/I/61ByMC8ujqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 674.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FLS3QPZ8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B076QF6ZW9",
    "title": "WAP Lavadora de Alta Pressão PREMIER 2600, 360L/h, com Bico Turbo, Jato em Leque e Concentrado, 2000psi 1800W 127V",
    "image": "https://m.media-amazon.com/images/I/81wUSWGGreL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 685.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B076QF6ZW9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FLKL7DHZ",
    "title": "Monitor Gamer AOC AGON G50 27\" 144Hz 0,5ms IPS HDR10 G-SYNC 27G50F",
    "image": "https://m.media-amazon.com/images/I/71RpoYhSWJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 689.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FLKL7DHZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B01B95BDRS",
    "title": "Memória RAM Rise Mode Diamond Series 16GB 3200Mhz DDR4 para Desktop 1.35v, CL19, Branco - RM-D4-16G-3200DW",
    "image": "https://m.media-amazon.com/images/I/515WnwKbZCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 689.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B01B95BDRS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B08JY31RQF",
    "title": "Depilador e Rejuvenescedor a Laser Permanente Luz Pulsada Lescolton T-009i",
    "image": "https://m.media-amazon.com/images/I/61blZNksG5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 695.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B08JY31RQF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07734SYSK",
    "title": "Bebedouro Coluna Garrafao - Egc35B, Inox, 220 Volts, Esmaltec",
    "image": "https://m.media-amazon.com/images/I/51QAGW7vnPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 711.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B07734SYSK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GYG43824",
    "title": "OSTER - Cafeteira Espresso Oster Ocaf950 220v Prateado 220v",
    "image": "https://m.media-amazon.com/images/I/71gsyirF6+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 731.31,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYG43824?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H1YGN8SN",
    "title": "Guarda Roupa Casal 6 Portas 2 Gavetas Lyon Yescasa Cinamomo/Off White",
    "image": "https://m.media-amazon.com/images/I/51OITEmkt-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 769.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1YGN8SN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H1R6FM9L",
    "title": "Smart TV 32 Polegadas, Whale 10.0, LED HD Ready, Wi-Fi e Bluetooth, Dolby Atmos, Netflix e YouTube, 3x HDMI",
    "image": "https://m.media-amazon.com/images/I/71PtJPMgx4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 779.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1R6FM9L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FPN9ZGV6",
    "title": "Guarda-roupa Modulado 2 Portas 4 Prateleiras 1 Cabideiro Branco Neo Madesa",
    "image": "https://m.media-amazon.com/images/I/31mwbvAQp9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 809.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPN9ZGV6?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DHWFBYVC",
    "title": "Smartphone Motorola Moto g35 5G - 128GB 12GB (4GB RAM+8GB Ram Boost) e Camera 50MP com AI NFC Tela 6.7\" com Superbrilho - Verde",
    "image": "https://m.media-amazon.com/images/I/61pGaBV+-AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 849.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHWFBYVC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BGQK96FM",
    "title": "Philco Forno Elétrico de Embutir PFE47E Esmaltado Dupla Resistência 47L 127V Cinza",
    "image": "https://m.media-amazon.com/images/I/51Ai1x3mg+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 897.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BGQK96FM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GR4GR5QH",
    "title": "soundcore Space 2 da Anker, ANC Fone de Ouvido Bluetooth 6.1, Modo Soneca | 70H, Cancelamento Ativo de Ruído , Headphone Bluetooth Over-Ear Conforto Superior, Áudio Hi-Res Wireless LDAC, Conexão Dupla",
    "image": "https://m.media-amazon.com/images/I/61HeqFUjJGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR4GR5QH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FJYHBBKR",
    "title": "Frigobar Inverter Bivolt 124L Branco Midea",
    "image": "https://m.media-amazon.com/images/I/31fmdG6QXCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 901.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FJYHBBKR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H5YR57FX",
    "title": "Bicicleta Ergométrica Elite, Bike Spinning Profissional, 15 KG de Inércia, Com Amortecedor e Até 120 kg",
    "image": "https://m.media-amazon.com/images/I/71Mbkxx8H9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 949.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5YR57FX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F8PBH9DB",
    "title": "Mesa com Regulagem de Altura DT3 F10; Função memória; Sistema anticolisão; Apoio com coluna invertida; Elevação;(Oak)",
    "image": "https://m.media-amazon.com/images/I/410aM72TB2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 989.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8PBH9DB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DJPYGBYW",
    "title": "Nutribullet Ultra 1200w, Liquidificador Individual e Extrator de Nutrientes, Design e Potência - 127v",
    "image": "https://m.media-amazon.com/images/I/51w-SGtu6hL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1028.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJPYGBYW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09MZKNRW3",
    "title": "Desumidificador Ar Ambiente Elétrico Portátil Pure Ion Antimofo Max Bivolt - Reservatório de 3 Litros - Relaxmedic",
    "image": "https://m.media-amazon.com/images/I/61NIkKGVw3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1048.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MZKNRW3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0C7H3P3C8",
    "title": "Forno à Gás de Embutir Stelar 46 litros Topázio Preto 127v",
    "image": "https://m.media-amazon.com/images/I/51oUE+WfXVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1073.61,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7H3P3C8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B7XPT5Z6",
    "title": "Guarda-roupa Casal 8 Portas 4 Gavetas Araplac",
    "image": "https://m.media-amazon.com/images/I/516bhBVw5BL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B7XPT5Z6?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07BNWBHRK",
    "title": "Guarda-roupa Casal com Espelho 4 Portas 6 Gavetas Araplac Atraente Sofia",
    "image": "https://m.media-amazon.com/images/I/51XHCrPEUIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BNWBHRK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FYFRW3BX",
    "title": "soundcore Sleep A30 Special da Anker Fone para Dormir Bluetooth Inteligente | 10H ANC, 3g Ultraconforto para Quem Dorme de Lado, Sistema de Mascaramento de Ronco Adaptativo, Design Ergonômico 3D, 45H",
    "image": "https://m.media-amazon.com/images/I/51svuoOHzuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FYFRW3BX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BQ7KJ9NV",
    "title": "Monitor UHD Samsung 32\", 4K, HDMI, Display Port, Freesync, Preto, Série UJ59",
    "image": "https://m.media-amazon.com/images/I/51pJ+ROuwkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1230.63,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G1NK9Q4S",
    "title": "Remo Magnético Seco Indoor Gallant Elite (grs03hmgb-pt)",
    "image": "https://m.media-amazon.com/images/I/41RuGos5KnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1276.53,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1NK9Q4S?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BSH2VZ5C",
    "title": "Monitor Gamer ASUS TUF 27\", QHD, 210Hz, 0.3ms, IPS, G-Sync Comp, FreeSync Premium, Ajuste de ângulo, Som Integrado - VG27AQ5A",
    "image": "https://m.media-amazon.com/images/I/51pdEu2qF4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BSH2VZ5C?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DKV14TB9",
    "title": "Cama Box Baú Casal Colchão Molas Qatar 138x188x63cm Bege/Branco Inducol - Suporta Até 200 Kg Por Pessoa",
    "image": "https://m.media-amazon.com/images/I/51RMHpFfZtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1329.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKV14TB9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09Z78CWXY",
    "title": "Bicicleta Spinning com roda de inércia de 13kg WCT Fitness",
    "image": "https://m.media-amazon.com/images/I/61zKXOc8LxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1357.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B09Z78CWXY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H3796J39",
    "title": "Monitor Gamer Curvo Husky Boreal 34\", WQHD, Ultrawide, 200Hz, 1ms, Adaptive Sync, DisplayPort e HDMI, HDR - HMG00234PT",
    "image": "https://m.media-amazon.com/images/I/51gvc-rNm-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1439.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H3796J39?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07PRW1KMT",
    "title": "Fischer Fogão de Piso a Gás 4 Bocas Grand Cheff Silver Bivolt",
    "image": "https://m.media-amazon.com/images/I/51cSVrw52CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1449.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07PRW1KMT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CTCTJ82C",
    "title": "Cama Box Baú Casal Colchão Molas Ensacadas Maximus 138x188x65cm Cinza/Preto Gazin - Suporta até 120kg por Pessoa",
    "image": "https://m.media-amazon.com/images/I/51HQjfSlRZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1519.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTCTJ82C?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0D1695JTR",
    "title": "SUGGAR FOGÃO MASTER GRILL PRETO MESA DE VIDRO 5 BOCAS TRIPLA CHAMA GRILL 220V TREMPE FERRO FUNDIDO ACENDIMENTO SUPERAUTOMÁTICO FGVMTG512PT",
    "image": "https://m.media-amazon.com/images/I/51Nhye72ZgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1658.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1695JTR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H1N3T99K",
    "title": "Ar condicionado de Janela Consul 7.500 BTUs Frio Mecânico CCB07GB Branco",
    "image": "https://m.media-amazon.com/images/I/61JD4+Lyz-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1665.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1N3T99K?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07Q5L5YTP",
    "title": "LAVADORA DE ROUPA AUTOMÁTICA MLA13 13 KG BCO 220V",
    "image": "https://m.media-amazon.com/images/I/51xeBNAzR+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1665.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q5L5YTP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DPGQ6V13",
    "title": "Geladeira Refrigerador HQ Defrost 290 Litros Preto/Cinza HQ-290RDF 127V",
    "image": "https://m.media-amazon.com/images/I/411rpvysQGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPGQ6V13?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F19CK9PK",
    "title": "Ar-Condicionado Janela Eletrônico Wi-Fi 10.000 btus Frio 127V AW-10CWBRVGU02 Hisense",
    "image": "https://m.media-amazon.com/images/I/91R4evTaGpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F19CK9PK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G1CB7K1G",
    "title": "Geladeira Refrigerador HQ Defrost 290 Litros Preto HQ-290RDF (220V)",
    "image": "https://m.media-amazon.com/images/I/318h-TdW8GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1721.11,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1CB7K1G?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H63333TN",
    "title": "Cadeira Escritorio Ergonomica DT3 Selene com revestimento Mesh, Suporte lombar integrado 2D, Assento deslizante, Apoio braço 3D, Apoio de cabeça 3D,Certificada NR-17 (Black)",
    "image": "https://m.media-amazon.com/images/I/5137xyhRTlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1759.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63333TN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GX35QX64",
    "title": "Consul Geladeira CRA30MB 263L, 142x55x63 cm, 1 Porta, Branca, Degelo Seco",
    "image": "https://m.media-amazon.com/images/I/31EsP1ZiKJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1843.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GX35QX64?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GVT4L94F",
    "title": "Celular Samsung Galaxy A37 5G 128GB, 6GB RAM, Câmera 50MP (Branco)",
    "image": "https://m.media-amazon.com/images/I/51G-NkDKaXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1886.43,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT4L94F?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DS6BBG4G",
    "title": "Bicicleta Ergométrica Magnética Horizontal Gallant Elite Pro (gbev05hmgapt)",
    "image": "https://m.media-amazon.com/images/I/51Df4zs3VTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1889.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DS6BBG4G?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F1NGM7C6",
    "title": "Freezer Vertical 1 Porta 196L 2 em 1 Branco Midea MDRU276FZA011-127v",
    "image": "https://m.media-amazon.com/images/I/311P4fcQ-CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1947.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1NGM7C6?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F9PS8S9K",
    "title": "Secadora de Roupas EOS 11kg Piso e Parede ESR11VB 220V",
    "image": "https://m.media-amazon.com/images/I/41T8OV+MUqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1949.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9PS8S9K?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09LHW62H7",
    "title": "Coifa de Ilha Oster Inox Touch Control, 90cm, 110v, OCFA590",
    "image": "https://m.media-amazon.com/images/I/419jwVCZRzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1994.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B09LHW62H7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07K29F3SB",
    "title": "Geladeira Electrolux Cycle Defrost 260L Super Freezer Duplex Branca (DC35A) - 127 Volts",
    "image": "https://m.media-amazon.com/images/I/31VVoX6D74L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2029.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B07K29F3SB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H6XVD985",
    "title": "Ar Condicionado Split Inverter TCL BreezeIN AI 12000 BTUs Frio 220V TAC-12CTG3-INV",
    "image": "https://m.media-amazon.com/images/I/51JLVG5n5VL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2039.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6XVD985?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F1P695NS",
    "title": "Ar Condicionado Split Elgin Hi Wall Eco Inverter II 12.000 BTU/h Frio Monofásico Branco 45HJFI12C2WC/45HJFE12C2CC - 220V",
    "image": "https://m.media-amazon.com/images/I/61aL6h+ednL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2058.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1P695NS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GR1L1BBL",
    "title": "Freezer Horizontal Consul 307 Litros Branco - CHA31MB (220, Volts)",
    "image": "https://m.media-amazon.com/images/I/41Qjk7mlhLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR1L1BBL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F1QPHFL3",
    "title": "Máquina de Lavar Electrolux 18kg Branca Efficient Cesto inox e Jet&Clean (LEE18) 220V",
    "image": "https://m.media-amazon.com/images/I/41Mx9m51YgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2110.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1QPHFL3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FTMWSS5V",
    "title": "Apple iPhone 13 (128 GB) - Luz das estrelas (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41Zbbl4P+LL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2172.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTMWSS5V?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FPBR8V26",
    "title": "PHILIPS, Smart TV Ambilight 50\" 4K, Titan OS, 50PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "image": "https://m.media-amazon.com/images/I/61hTC1qv92L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2189.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBR8V26?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DG3XVK4Y",
    "title": "SUGGAR COIFA DE EMBUTIR 75CM INOX 220V TP7502IX",
    "image": "https://m.media-amazon.com/images/I/51aCZ+BQmBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2255.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DG3XVK4Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B07WCQL5HK",
    "title": "Panasonic Cooktop de Indução Preto Painel Touch 220v KY-W648CLRPK",
    "image": "https://m.media-amazon.com/images/I/41Xn5n-sUyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2265.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B07WCQL5HK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G1L9VLHL",
    "title": "Apple iPhone 13 (128 GB) - Rosa (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41l+tImzWTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2275.26,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1L9VLHL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FVMH1K2Y",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Branca (TF38) 127V",
    "image": "https://m.media-amazon.com/images/I/319xY36QjcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVMH1K2Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B019HBG0QK",
    "title": "Panasonic Lavadora Top Load F190WA Branca 64 x 72 x 115 cm 19 kg Sistema Ciclone, Smartsense e JetWash Plus Cesto em Aço Inox 10 Programas de Lavagem 45 kg",
    "image": "https://m.media-amazon.com/images/I/41MU-zH5UUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2346.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B019HBG0QK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H4XPM91K",
    "title": "Guarda-roupa Casal com Espelho 6 Gavetas 2 Portas de Correr Caemmun Toronto",
    "image": "https://m.media-amazon.com/images/I/61AcIF9Cm9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2399.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4XPM91K?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DJC1HKNG",
    "title": "Toca-Discos Vinil Audio-Technica Sem-Fio Automático AT-LP70XBT-BZ, Preto e Bronze, Bivolt 120/240V",
    "image": "https://m.media-amazon.com/images/I/51d3tiITACL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJC1HKNG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FVP6KRP4",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Inox Look (TF38S) 127V",
    "image": "https://m.media-amazon.com/images/I/416nfzkCKsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVP6KRP4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GVSY9479",
    "title": "Celular Samsung Galaxy A57 5G 256GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", Até 6 Atualizações de Android e Segurança (Azul Escuro) | 8GB RAM, Câmera Tripla até 50MP OIS, Selfie 12MP Video HDR, IP68, Tela Super AMOLED 6.7\"",
    "image": "https://m.media-amazon.com/images/I/51G6kqI5BQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2554.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVSY9479?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DJ9TBJW2",
    "title": "Ar Condicionado Split Hi Wall Elgin Eco Inverter II 18000 BTU/h Frio 45HJFI18C2WC – 220 Volts",
    "image": "https://m.media-amazon.com/images/I/516BEnlLz+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ9TBJW2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0H2BRDTXT",
    "title": "Lava e Seca Midea 11kg Mfa01d110b/wk-01 Branca Ciclo Pets",
    "image": "https://m.media-amazon.com/images/I/516vYRnDhTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2BRDTXT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DNR7TBTW",
    "title": "Geladeira Electrolux Frost Free 431L Efficient AutoSense Duplex Branca (TF70) 127V",
    "image": "https://m.media-amazon.com/images/I/416e19mr7qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNR7TBTW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DX2M1RCD",
    "title": "Geladeira Refrigerador HQ Frost Free Side By Side 460 Litros Cinza HQ-460SBSFF (127V)",
    "image": "https://m.media-amazon.com/images/I/41-eSvkKV3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3176.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX2M1RCD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BZT6SMRS",
    "title": "GELADEIRA PANASONIC BB41 TITÂNIO 397L 60CM 220 V",
    "image": "https://m.media-amazon.com/images/I/31ad8DMCOEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZT6SMRS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FS2CVM1T",
    "title": "Notebook ASUS Vivobook 15, Intel Core i5, 8 GB, 512 GB SSD, KeepOS, 15.6'' FHD, Cool Silver - X1504VA-NJ1741",
    "image": "https://m.media-amazon.com/images/I/71ovxIPny7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FS2CVM1T?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B7KK9PZJ",
    "title": "Lava e Seca Midea HealthGuard Smart 11kg Titanium 127V",
    "image": "https://m.media-amazon.com/images/I/51lkDjQHPrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3312.42,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B7KK9PZJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F8KVQZQX",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Branco",
    "image": "https://m.media-amazon.com/images/I/61Ik2Dj2zTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8KVQZQX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B625GC45",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PW Branca 11/7kg - 220V",
    "image": "https://m.media-amazon.com/images/I/514T7uXr1oL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B625GC45?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BZ15NC13",
    "title": "Samsung Lava e Seca 11kg Branco WD11M4473PW - 127V",
    "image": "https://m.media-amazon.com/images/I/514T7uXr1oL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15NC13?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "image": "https://m.media-amazon.com/images/I/51dBND271dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3585.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G5SMX5CC",
    "title": "Geladeira Refrigerador HQ Frost Free Side By Side 480 Litros Inox HQ-480SBSFFK (127V)",
    "image": "https://m.media-amazon.com/images/I/417yVrWma-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3598.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G5SMX5CC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0B8MCB6KK",
    "title": "Notebook Acer Aspire Go 15 AG15-71P-5939 Intel core I5 13ª Geração 8GB RAM 256GB SSD Full HD TN Windows 11 Home",
    "image": "https://m.media-amazon.com/images/I/51m1lv0+KCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3598.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B8MCB6KK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FWN87MS2",
    "title": "Apple iPhone 14 Pro (128 GB) – Roxo-profundo (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/518bzP8VW1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3692.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWN87MS2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FHCHBRGF",
    "title": "Notebook Dell 15 15-I1300-A30P, Intel Core i5-1334U, Windows 11 Home | Tela 15.6 FHD 120 Hz Antirreflexo, 8 GB RAM, 512 GB SSD, UHD Graphics, Wi‑Fi 6, leitor SD, USB 3.2 Type-C, Garantia de 1 Ano",
    "image": "https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3749.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHCHBRGF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G45F6JT8",
    "title": "Apple iPhone 14 Pro (256 GB) – Roxo-profundo (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/518bzP8VW1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3866.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45F6JT8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FCVNLSGV",
    "title": "Notebook Lenovo IdeaPad Slim 3i 15.3\" - Intel Core i5-13420H, 8GB RAM, 256GB SSD, Intel UHD Graphics, Windows 11",
    "image": "https://m.media-amazon.com/images/I/71LP2m5bdjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3949.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCVNLSGV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GXGJB1KL",
    "title": "Ar Condicionado Split Inverter Philco PAC24QG Espelhado 24000 BTUs Quente e Frio 220V",
    "image": "https://m.media-amazon.com/images/I/41k0QXiybVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXGJB1KL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G1LFHT38",
    "title": "Apple iPhone 14 Pro Max (128 GB) – Roxo-profundo (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/51iJx7YWDOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4021.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1LFHT38?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GND7R7Z8",
    "title": "Ar Condicionado Split Hi Wall LG Dual Voice AI Inverter 24.000 Btus Frio 220v R-32",
    "image": "https://m.media-amazon.com/images/I/51XtHBetEOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GND7R7Z8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FHSCXH9J",
    "title": "Ar Condicionado Split Inverter Midea AI Ecomaster 24000 BTUs Quente e Frio 220V 38EZVQA24M5",
    "image": "https://m.media-amazon.com/images/I/51Y9nGETUOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4218.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHSCXH9J?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G1CJF2YD",
    "title": "Ar-Condicionado Split HW Inverter Midea AI Ecomaster 24.000 BTUs R-32 Quente/Frio 220V",
    "image": "https://m.media-amazon.com/images/I/51FlY+KshyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1CJF2YD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FWMTC71W",
    "title": "Samsung Lava e Seca Smart AI Control WD13FG Black 13kg (220V)",
    "image": "https://m.media-amazon.com/images/I/410V+8kXYYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWMTC71W?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GGCWB78K",
    "title": "Expositora Refrigerada Imbera 569 Litros Vrs19s Full Black - Inverter bivolt",
    "image": "https://m.media-amazon.com/images/I/41E2eqoQHsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4789.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GGCWB78K?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0CQD9VK7X",
    "title": "Smartphone Samsung Galaxy S24 Ultra, Galaxy AI, Selfie de 12MP, Tela de 6.8\" 1-120Hz, 256GB, 12GB RAM - Titânio Preto",
    "image": "https://m.media-amazon.com/images/I/51rPU0jDc0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQD9VK7X?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FTNLR7VL",
    "title": "Apple iPhone 15 Pro Max (256 GB) — Titânio preto (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5045.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNLR7VL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GQJM9NJK",
    "title": "Notebook Gamer Lenovo LOQ E 15.6\" 144Hz - Intel Core i5-13450HX, 8GB RAM, 512GB SSD, RTX 3050 6GB, Linux",
    "image": "https://m.media-amazon.com/images/I/61Tuq7vSuRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQJM9NJK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DGM1PJMK",
    "title": "Apple iPhone 16 (128 GB) – Branco",
    "image": "https://m.media-amazon.com/images/I/61ctYsUobKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGM1PJMK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DGMJJ76Y",
    "title": "Apple iPhone 16 (128 GB) – Verde-Acizentado",
    "image": "https://m.media-amazon.com/images/I/71kMdztVHLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGMJJ76Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F2TPQVRX",
    "title": "Dyson Airwrap™ Multiestilizador de cabelo - Kit Completo 127v",
    "image": "https://m.media-amazon.com/images/I/6159qOn6gqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5154.63,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2TPQVRX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G66RF81Z",
    "title": "Geladeira French Door 3 Portas Inox Design e Tecnologia Premium Brastemp - BRO85MK 110V",
    "image": "https://m.media-amazon.com/images/I/41ebvn0n8AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5449.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G66RF81Z?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GX2MN152",
    "title": "Geladeira Intuitive+ Panasonic BB71 Frost Free Inverter 511L Black Glass - NR-BB71GV7BB 220V",
    "image": "https://m.media-amazon.com/images/I/31mSXVla6cL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GX2MN152?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DJFS7GXV",
    "title": "Apple iPhone 16 (512 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJFS7GXV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FTZSMH28",
    "title": "Notebook ASUS Vivobook S14 IA PC, Core Ultra 7, 16 GB, 512 GB, Linux, 14'' Nivel IPS 60Hz, Matte Gray - S3407CA-LY121",
    "image": "https://m.media-amazon.com/images/I/71-aar2N5zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTZSMH28?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0G66Z7P9R",
    "title": "Geladeira BRO85MK 559 Litros Frost Free French Door Brastemp",
    "image": "https://m.media-amazon.com/images/I/41VTZ8N0FYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5949.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G66Z7P9R?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0F9PSCBYV",
    "title": "Monitor Samsung Odyssey G9 49\", DQHD, 144Hz, 1ms, ajuste de altura, FreeSync Premium Pro, DP, HDMI, USB, preto",
    "image": "https://m.media-amazon.com/images/I/51FWegmI0zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6079.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9PSCBYV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B09QW933NQ",
    "title": "Refrigerador French Door Samsung de 03 Portas Frost Free com 549 Litros Inox - Rf49a5202s9/az 127V",
    "image": "https://m.media-amazon.com/images/I/415YYoQSmeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6554.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09QW933NQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DS6FVX7W",
    "title": "Gallant Esteira Ergométrica Elétrica Elite Pro 4,5hp 20km/h 160kg 15 Níveis de Inclinação",
    "image": "https://m.media-amazon.com/images/I/51NPdG-tqQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6658.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DS6FVX7W?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0DTMCLTKV",
    "title": "Celular Samsung Galaxy S25 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9\", Titânio Jetblack",
    "image": "https://m.media-amazon.com/images/I/41dv7LltRmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DTMCLTKV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0FTMTYVVG",
    "title": "Apple iPhone 16 Pro Max (256 GB) – Titânio-deserto (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/71WbxLdbGOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6856.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTMTYVVG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GRJNQWHW",
    "title": "Notebook Gamer Alienware 16 AC16250, Intel Core 5 210H, Windows 11 Home | NVIDIA GeForce RTX 4050 6GB GDDR6, 16 WQXGA 120 Hz, 16 GB DDR5, 512 GB SSD, Cor Azul Escuro, Wi-Fi 7, Teclado Retroiluminado",
    "image": "https://m.media-amazon.com/images/I/514EAjs4c9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7249.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GRJNQWHW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  },
  {
    "asin": "B0GKQK9ZVT",
    "title": "Celular Samsung Galaxy S26 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9\" - Branco",
    "image": "https://m.media-amazon.com/images/I/61ecNFaOQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQK9ZVT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-16T04:13:14.000Z"
  }
];
