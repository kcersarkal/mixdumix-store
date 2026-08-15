const PRODUCTS = [
  {
    "asin": "B07Z7CTQ4G",
    "title": "Twinings Chá Misto Camomila, Mel e Baunilha 15G - Caixa com 10 Unid",
    "image": "https://m.media-amazon.com/images/I/612s9-IU1mL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 13.53,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Z7CTQ4G?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08NX5DKM1",
    "title": "Kit NIVEA Desodorante Aerosol Men Black&White Invisible - 2 unidades",
    "image": "https://m.media-amazon.com/images/I/61MNgKAQcrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08NX5DKM1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GZHTM4SM",
    "title": "Brimil - Percarbonato de Sódio 1kg 100% Puro Tira Manchas em Pó Alvejante Biodegradável para Roupas Brancas Coloridas e Limpeza Doméstica",
    "image": "https://m.media-amazon.com/images/I/61z6KBYF8ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZHTM4SM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B09GHN14FP",
    "title": "Danos Vorazes Óleo Reparador 50ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71AMqfOXdAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GHN14FP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B074LW78DJ",
    "title": "Lola From Rio - Morte Subita - Condicionador hidratante para todos os tipos de cabelos secos e danificados, vegano, sem crueldade, sem parabenos, sem sulfatos, 250 g",
    "image": "https://m.media-amazon.com/images/I/51ZLn-foLSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 20.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LW78DJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07G2N49W4",
    "title": "L'Oréal Paris Elseve Reparação Total 5+ Creme de Tratamento, Repara os 5 Sinais de Danos como Quebra e Ressecamento com Cicatri-Ceramida, Recupera, Hidrata e Dá Brilho, 300g",
    "image": "https://m.media-amazon.com/images/I/61QrPAbKF8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07G2N49W4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B074LVYZDJ",
    "title": "Lola From Rio - Meu Cacho Minha Vida - Creme de Pentear: brilho, maciez e definição. Cabelos Cacheados. 500ml",
    "image": "https://m.media-amazon.com/images/I/51omKxWOC3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LVYZDJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G45KPX15",
    "title": "Elseve Collagen Lifter Máscara de Tratamento Condicionante Efeito Teia Para Resgate de Massa com Peptídeos de Colágeno Reconstrói a Fibra e Dá Volume por 72h 300g",
    "image": "https://m.media-amazon.com/images/I/71EYznJIxWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45KPX15?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CGY4RKK3",
    "title": "Isotônico Gatorade, Tangerina, Garrafa 500ml, Pack com 6 unidades",
    "image": "https://m.media-amazon.com/images/I/7194rMILT+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.14,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGY4RKK3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B09XFLHJ1S",
    "title": "Danos Vorazes Máscara de Tratamento 450g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61C0iM4H-iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B09XFLHJ1S?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0954R6FNH",
    "title": "Refrigerante Zero Pepsi, Black, Lata 350ml, Pack com 12 unidades",
    "image": "https://m.media-amazon.com/images/I/61xHGkdDlLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B0954R6FNH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DJHCX662",
    "title": "Leave - in Essencial Seca Sem Frizz Amend 180g",
    "image": "https://m.media-amazon.com/images/I/41zJM87K8JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJHCX662?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07HM75F83",
    "title": "Vermute Martini Bianco 750ml",
    "image": "https://m.media-amazon.com/images/I/51J2+m8blhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HM75F83?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B001GAP4YA",
    "title": "DAS, Massa para Modelar, Branco, 1Kg",
    "image": "https://m.media-amazon.com/images/I/61Hh2n69xrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 32.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B001GAP4YA?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07XPK2DMQ",
    "title": "Refrigerante Zero Guaraná Antarctica, Lata 350ml, Pack com 12 unidades",
    "image": "https://m.media-amazon.com/images/I/51N3-t9gPyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 33.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XPK2DMQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08B5GFHZN",
    "title": "Anasol Protetor Solar Facial FPS 70 Clareador - 60 g",
    "image": "https://m.media-amazon.com/images/I/51wZRC7vnPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08B5GFHZN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B079VWB8JN",
    "title": "Base BB Cream L'Oréal Paris Dermo Expertise Cor Clara FPS 20, 30ml",
    "image": "https://m.media-amazon.com/images/I/61ahyEyq+nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 36.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B079VWB8JN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DKVJ1HWB",
    "title": "Lola Cosmetics Kit Cronograma Capilar Be(m) Dita Ghee - 3 Produtos",
    "image": "https://m.media-amazon.com/images/I/71K-GAoX50L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 38.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKVJ1HWB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FMFXH7RT",
    "title": "Faber-Castell Lápis De Cor Supersoft com 24 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZzxtsCXmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFXH7RT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CN9NGTXK",
    "title": "Cerveja Spaten, Puro Malte, Lata 350ml, Pack com 12 unidades",
    "image": "https://m.media-amazon.com/images/I/51Trhd2hgkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 41.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CN9NGTXK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B077BWZLRM",
    "title": "Inoar, Kit #Bombar Super Vitaminas – Shampoo e Condicionador Para Crescimento Acelerado, Fortalecimento Capilar, Redução da Queda e Brilho Intenso, 2x1L",
    "image": "https://m.media-amazon.com/images/I/71O5mTkPAiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 44.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BWZLRM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GPRY4TLP",
    "title": "Dove Sabonete Sérum Líquido Intense Hydration 547ml",
    "image": "https://m.media-amazon.com/images/I/61oA8nYHJtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPRY4TLP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CXJLK24Y",
    "title": "Nescau Bebida Láctea 180ml caixa com 27 unidades",
    "image": "https://m.media-amazon.com/images/I/61gtHqTqSkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXJLK24Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GTLSK1T3",
    "title": "MODUS Garrafa Térmica 750ml - Parede Dupla de Isolamento 24horas Gelado | Base Emborrachada Anti Derrapante, Alca Prarcord, Anti Vazamento, BPA Free, para Academia, Viagem e Trabalho",
    "image": "https://m.media-amazon.com/images/I/615sz3x+7nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTLSK1T3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GHPGBPSR",
    "title": "Kit Morte Súbita (Shampoo + Condicionador + Spray Reparaçao) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/71ggER1mlqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.81,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHPGBPSR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GHP4NL1J",
    "title": "Kit Rapunzel (Shampoo + Tônico + Milk Spray) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/41OcWO275YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHP4NL1J?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F68W8CPQ",
    "title": "Microfone de Lapela Sem Fio Bluetooth Kit 2 Microfonones Abafamento de Ruído Até 10 Horas Tempo de Trabalho Compatível com Camera, iPhone, Android, PC - Conexão Android e USB-C - Linha AGold Premium",
    "image": "https://m.media-amazon.com/images/I/512CTzqVu9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F68W8CPQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FC3474W1",
    "title": "Kit 02 Travesseiro Toque de Pluma Premium Percal 400 Fios 50x70cm Lavável, Antiácaro, Antialérgico",
    "image": "https://m.media-amazon.com/images/I/61kdwMwQJ2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 60.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FC3474W1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FH7C4YCS",
    "title": "Weleda Babycreme de Calêndula | Proteção Natural Contra Assaduras | Fórmula Suave com Calêndula e Camomila | 120 ml",
    "image": "https://m.media-amazon.com/images/I/41z+UZXo-gL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 62.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH7C4YCS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F89VV1YS",
    "title": "MODUS Garrafa Térmica Esportiva De Inox Com Isolamento A Vácuo 950ML | Verde",
    "image": "https://m.media-amazon.com/images/I/61XlEtHpMzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F89VV1YS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G2682GZF",
    "title": "5 Magnésio Treonina 180 Cápsulas, 3 Meses de Uso, Longa Duração, Alto Teor Treonina + 5 tipos de Magnésio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61HHbHcWzlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2682GZF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C7Q4Q74P",
    "title": "EUCERIN Protetor Solar Facial Ultra Fluido FPS 60 50ml, Hydro Fluid, Antioleosidade, Antioxidante, Rosto, Proteção UVA, UVB e Luz Visível",
    "image": "https://m.media-amazon.com/images/I/611v1PCMAbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.69,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7Q4Q74P?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08WKPK952",
    "title": "Cartucho de tinta HP 667 Preto Original (3YM79AB) Para Impressora Deskjet 2376, 2776, 6476, 5076, 5276",
    "image": "https://m.media-amazon.com/images/I/81rYpjuTwdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 65.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B08WKPK952?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08N844668",
    "title": "vonixx Shampoo Automotivo Concentrado 1:400 V-floc 3 Litros",
    "image": "https://m.media-amazon.com/images/I/613IR7ZkFTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08N844668?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CYLYGM4V",
    "title": "Óleo Wella Professionals Ultimate Luxe Oil 30ml",
    "image": "https://m.media-amazon.com/images/I/413YGp-iE1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 79.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CYLYGM4V?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07MRZ2R3V",
    "title": "G-Tech Oxímetro De Pulso Portátil Modelo Oled Graph",
    "image": "https://m.media-amazon.com/images/I/51ZXi74E7HL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B07MRZ2R3V?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CKK4XLTB",
    "title": "I2GO, Carregador Portátil (Power Bank), Pocket, 5000mAh, Não Necessita Cabos, Modelo USB-C",
    "image": "https://m.media-amazon.com/images/I/61wg5LVdnOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CKK4XLTB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BFT97SDN",
    "title": "Tech T-shirt Gola U Masculino",
    "image": "https://m.media-amazon.com/images/I/51ML3MBfGGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFT97SDN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GSH6DCCJ",
    "title": "Kit 10 Potes de Vidro Herméticos 640ml com 4 Travas Ideal para Marmitas e Conservação de Alimentos, Vedação Total, Refratário para Forno e Freezer",
    "image": "https://m.media-amazon.com/images/I/71sfm0MbB8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSH6DCCJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CQKM2VVC",
    "title": "Kit 4 Pacotes Café Especial em Grãos Coffee Mais Variedades: Arara, Caparaó, Chapada de Minas e Clássico - 100% Arábica (4x250g)",
    "image": "https://m.media-amazon.com/images/I/61zVRBe3oDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQKM2VVC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DGTKZ2S1",
    "title": "Bebedouro para Gatos, 3L Fonte Gato Inox Comedouros, Bebedouros e Acessorios para Gatos, Silenciosa, Bivolt",
    "image": "https://m.media-amazon.com/images/I/61EJXP1YreL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.34,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0D3J37TLY",
    "title": "ISDIN Óleo de Banho Ureadin Calm OleoGel - 400ml",
    "image": "https://m.media-amazon.com/images/I/61P7hJWHoxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 112.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3J37TLY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07643MPGS",
    "title": "Combo Teclado e Mouse sem fio Logitech MK235 com Conexão USB, Pilhas Inclusas e Layout ABNT2",
    "image": "https://m.media-amazon.com/images/I/61vdNn+737L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07643MPGS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0051LRFB0",
    "title": "Bacardi, Rum 8 anos Reserva Ocho, 750 ml",
    "image": "https://m.media-amazon.com/images/I/61TOSd1e4qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0051LRFB0?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C9FVPXFC",
    "title": "GA.MA ITALY Secador de Cabelo Gama Eleganza Plus Ceramic Ion 2100W 127V",
    "image": "https://m.media-amazon.com/images/I/61ldoe7m-2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 124.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C9FVPXFC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C9G2QNS9",
    "title": "GA.MA ITALY Secador de Cabelo Gama Lichia Ceramic Ion 2100W 220V",
    "image": "https://m.media-amazon.com/images/I/41SKap2yyhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 127.16,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C9G2QNS9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GQKZRGC7",
    "title": "iCoffee Moedor de Café Manual C3S Com Capacidade de 20g | Broca Cônica de Aço Inoxidável CNC, Ajuste Interno Ajustável, Posicionamento de Rolamento Duplo (Preto)",
    "image": "https://m.media-amazon.com/images/I/81XT1Z9WIZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 131.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQKZRGC7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C22PGBGC",
    "title": "EUCERIN Creme de Olhos Clareador de Olheiras 15ml, Anti-Pigment, Antimanchas, Thiamidol",
    "image": "https://m.media-amazon.com/images/I/61IfKmdTAWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C22PGBGC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BZ15LBG2",
    "title": "GA.MA ITALY Escova Secadora Stylish Keration Brush 3D Bivolt",
    "image": "https://m.media-amazon.com/images/I/51Uelq4DE5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15LBG2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B094YR4SLJ",
    "title": "I2GO, Carregador Portátil (Power Bank) Ultra Rápido 20000mAh, Power Delivery 20W, 2 Saídas USB + 1 Saída/Entrada USB-C, Preto, i2GO PRO",
    "image": "https://m.media-amazon.com/images/I/51sXTXpIA1S._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B094YR4SLJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0161ZC5GY",
    "title": "Atoderm Intensive Baume, Bioderma",
    "image": "https://m.media-amazon.com/images/I/419xPG-katL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 154.27,
    "affiliate_url": "https://www.amazon.com.br/dp/B0161ZC5GY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BTYCJXBK",
    "title": "soundcore P20i da Anker, Fone de Ouvido Bluetooth 5.3 Sem Fio, 2 Mics IA",
    "image": "https://m.media-amazon.com/images/I/51G+D9DlGxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTYCJXBK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07HR1MZQP",
    "title": "Umidificador de Ar Ultrassônico 3,4 Litros Bivolt Fisher Price - HC115",
    "image": "https://m.media-amazon.com/images/I/41Gjg7-IkUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 160.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HR1MZQP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FHHLZZVD",
    "title": "Basike Carregador Portátil, Power Bank 20000mAh com Cabos Integrados(Cinza)",
    "image": "https://m.media-amazon.com/images/I/610pOa72wuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 163.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHLZZVD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "6584004406",
    "title": "Vade Mecum Saraiva Tradicional - 41ª Edição 2026",
    "image": "https://m.media-amazon.com/images/I/81HmyZ8mCzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6584004406?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B09JH4PD8Q",
    "title": "Base De Carregamento Do Dualsense - PlayStation 5",
    "image": "https://m.media-amazon.com/images/I/41y-G-g+dVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 165.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B09JH4PD8Q?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H4S96GYH",
    "title": "Calça Legging Lupo Fitness Feminina Esportiva Em Poliamida Texturizada a Ar Sem Costura",
    "image": "https://m.media-amazon.com/images/I/614WkLoWMmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 166.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4S96GYH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07R3DX5GS",
    "title": "EUCERIN Creme Facial Antimanchas Dia FPS30 50ml, Anti-Pigment, Clareador, Thiamidol, Diurno",
    "image": "https://m.media-amazon.com/images/I/61tut8HPtrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 167.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B07R3DX5GS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DB1753RZ",
    "title": "soundcore Select 4 go da Anker, Caixa de Som Portátil Bluetooth Pequena | 20H de Reprodução, IP67 à Prova d'Água e Poeira, Flutuante, Som Potente, Ideal para Ambientes Internos, Externos e Passeios",
    "image": "https://m.media-amazon.com/images/I/61oddMi2Y6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 168.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DB1753RZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07C7Q2FP4",
    "title": "GA.MA ITALY Prancha Wide Keration Pro – Bivolt",
    "image": "https://m.media-amazon.com/images/I/61zXEtI6pZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 177.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07C7Q2FP4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CWP7YKV8",
    "title": "Philips Avent Kit de Mamadeira Pétala, 125ml bico fluxo-lento, 260ml bico fluxo-médio, 330ml bico fluxo-rápido, Azul SCD838/29",
    "image": "https://m.media-amazon.com/images/I/71uL+3xif6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CWP7YKV8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DXN5BKM5",
    "title": "Stanley Garrafa Térmica Aerolight Iceflow Flip Straw Rose Quartz | 710 ML",
    "image": "https://m.media-amazon.com/images/I/41BV1h7mjiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DXN5BKM5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0D5BCR8KT",
    "title": "GameSir Nova Lite Controle Bluetooth e Sem Fio 2.4G para PC Windows, Celular Android iPhone, Nintendo Switch e Steam Deck, Gamepad com Hall Effect Anti-Drift, Turbo, Vibração, Dongle USB（roxo escuro)",
    "image": "https://m.media-amazon.com/images/I/51TYMb7-VhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D5BCR8KT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F6YJVZ5L",
    "title": "Mini Projetor Portátil 5G Wi-Fi 6 Bluetooth 5.0 Android 11 4K 1080P Full HD 8000 Lumens LED Auto Correção Trapezoidal Horizontal Rotação 180° Ideal para Projeções Cinemáticas",
    "image": "https://m.media-amazon.com/images/I/519TeoR49WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6YJVZ5L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F9ZTSFFX",
    "title": "Brinox - Panela de Pressão 5,4L Antiaderente Ceramic Life Pressure com Fundo de Indução - Vanilla",
    "image": "https://m.media-amazon.com/images/I/71Ht0qPHlyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9ZTSFFX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H6B1RR35",
    "title": "TURU HOME 6 em 1 mixer de mão, 1000W, 8 velocidades, Exibição digital LCD, Vem com um copo de 860 ml, Livre BPA,Triturador de 600 ml, Adequado para sopas, smoothies e purés(220V)",
    "image": "https://m.media-amazon.com/images/I/61FnnecRGDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 215.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6B1RR35?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FPSHCSQF",
    "title": "Huggies Fralda Pants Descartável Proteção Acolchoada XG - 144 fraldas",
    "image": "https://m.media-amazon.com/images/I/813VUlveBgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPSHCSQF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H11WS8C5",
    "title": "GOKOCO Escova Secadora Bivolt GD037, Escova Modeladora Íons, Escova Rotativa Styler, Preto",
    "image": "https://m.media-amazon.com/images/I/61ogqOM9UVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H11WS8C5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FQK1TX76",
    "title": "Bettdow SmartWatch, Relogio Smartwatch Feminino, 1.27\" Ecrã tátil, à prova d'água IP68, 100+ Modos Esportivos, chamada Bluetooth, Compatível com Android iOS, voz por IA (preto)",
    "image": "https://m.media-amazon.com/images/I/61qOEBjlshL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQK1TX76?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CMJ9PYB9",
    "title": "Armário Multiuso 2 Portas Aramóveis New",
    "image": "https://m.media-amazon.com/images/I/41Bw-TEyuSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMJ9PYB9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CMJCQGGN",
    "title": "Armário Multiuso 2 Portas Aramóveis New",
    "image": "https://m.media-amazon.com/images/I/31uC2zIUzYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMJCQGGN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08XZTYXW1",
    "title": "BLACK+DECKER Processador de Alimentos Antiaderente em Inox, Gourmand Gris, Modelo MP300G, 110V",
    "image": "https://m.media-amazon.com/images/I/416+bxlNytL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08XZTYXW1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H3CJC4W2",
    "title": "Monitor Enterprise LED 20\" Polegadas 20WEV-KAN, Widescreen, 75Hz, Conexões HDMI e VGA, Padrão Vesa Bivolt Automático",
    "image": "https://m.media-amazon.com/images/I/615G5b4AZaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H3CJC4W2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FFTQFYXS",
    "title": "Tênis Mizuno Virtue 2 - Feminino",
    "image": "https://m.media-amazon.com/images/I/61UGmcfg8EL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 235.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTQFYXS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "6558820935",
    "title": "Manual Diagnóstico e Estatístico de Transtornos Mentais - DSM-5-TR: Texto Revisado",
    "image": "https://m.media-amazon.com/images/I/61CmyiZfa8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 252.0,
    "affiliate_url": "https://www.amazon.com.br/dp/6558820935?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B015PYQPCW",
    "title": "Microfone Gamer Fifine Ampligame Am8, Usb, Rgb, Black",
    "image": "https://m.media-amazon.com/images/I/415JgccdxPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 259.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B015PYQPCW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B06XCZR7Z8",
    "title": "Pneu 175/65R14 Barum Bravuris 5HM 82T By Continental",
    "image": "https://m.media-amazon.com/images/I/61fVXjg6TPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 261.63,
    "affiliate_url": "https://www.amazon.com.br/dp/B06XCZR7Z8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FT58H2QP",
    "title": "Jogo de Panelas 19 Peças Aço Cirurgico Inox Tampa de Vidro Para Fogão Gás e Indução Premium",
    "image": "https://m.media-amazon.com/images/I/71u0ThhKbaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FT58H2QP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G2XQ64K5",
    "title": "Cadeira de escritório ergonômica com estofado de mesh (Cabide)",
    "image": "https://m.media-amazon.com/images/I/71uRmPebmPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.44,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2XQ64K5?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B097HYQPJ1",
    "title": "SECADOR Taiff TOURMALINE 2100W 127V, preto",
    "image": "https://m.media-amazon.com/images/I/51BoILwnCJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 282.27,
    "affiliate_url": "https://www.amazon.com.br/dp/B097HYQPJ1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B097J7J54H",
    "title": "Taiff SECADOR TOURMALINE 2100W 220, preto",
    "image": "https://m.media-amazon.com/images/I/51gHJqqOYJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 283.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B097J7J54H?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F3BKFZR7",
    "title": "Philips OneBlade Pro Barbeador e Aparador Elétrico 12 Tamanhos em 1 Pente | Apara e barbeia com precisão | Display Indicador de Bateria | Lâmina Dupla Face | À prova d'água | QP6532/10",
    "image": "https://m.media-amazon.com/images/I/71nt4HkgpJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F3BKFZR7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F4TTKWKR",
    "title": "Kit Truss Nutri Infusion - Shampoo 300ml + Condicionador 300ml + Máscara 180g",
    "image": "https://m.media-amazon.com/images/I/61dsSLLO5NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F4TTKWKR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FQJVM2YD",
    "title": "Bettdow SmartWatch GPS, Relogio Smartwatch Masculino e Feminino, 1,43 polegadas HD AMOLED, chamada Bluetooth, Esportivos relógio com voz por IA, Compatível com Android iOS, 2 Pulseiras (preto)",
    "image": "https://m.media-amazon.com/images/I/61lh+nNVCQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 322.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQJVM2YD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C2HFKXTZ",
    "title": "EMEET Webcam 4K para PC, webcam S600 com sensor Sony, 2 microfones de redução de ruído, FOV de 65° a 88°, foco automático TOF, capa de privacidade rotativa integrada, 1080p a 60FPS, ideal para",
    "image": "https://m.media-amazon.com/images/I/610CkAYLHUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 322.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2HFKXTZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GP33SWPM",
    "title": "Pokémon TCG, Box Display Pokémon ME03 Equilíbrio Perfeito",
    "image": "https://m.media-amazon.com/images/I/81kaeGrLewL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 331.71,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GP33SWPM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DTB56DYN",
    "title": "Kit Wella Professionals Fusion Shampoo Condicionador e Válvula (4 produtos)",
    "image": "https://m.media-amazon.com/images/I/51-yXs-1AlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 332.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DTB56DYN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B089Y3BZQR",
    "title": "Mesa Escrivaninha Em L 2 Peças Trevalla Kuadra ML150 Carvalho",
    "image": "https://m.media-amazon.com/images/I/71q2adAQMdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.25,
    "affiliate_url": "https://www.amazon.com.br/dp/B089Y3BZQR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08BJC798H",
    "title": "Fischer Secadora de Roupas Super Ciclo 8KG Branca 220V 28200-63976",
    "image": "https://m.media-amazon.com/images/I/71lXyflQhvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 358.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08BJC798H?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B076HZ63PL",
    "title": "Fechadura Digital de Sobrepor Touch Screen FR 201 Intelbras",
    "image": "https://m.media-amazon.com/images/I/41HcCEN+upL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B076HZ63PL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DZQMD2TC",
    "title": "Mala Grande De Viagem 32Kg Polipropileno 8 Rodas 360 Giratória Para Despachar Rígida Leve Tamanho G Viajem Internacional Resistente (ROXO, GRANDE)",
    "image": "https://m.media-amazon.com/images/I/61eJt7GGR1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 364.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZQMD2TC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H2LXQPSP",
    "title": "Airwit Ventilador de Teto Bivolt 132 cm com Controle Remoto | Funcionamento silencioso, 6 velocidades, função reversa, luz 3 cores, quartos, salas, ambientes amplos",
    "image": "https://m.media-amazon.com/images/I/51SxQt7J4sL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2LXQPSP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FL9MYXHD",
    "title": "Controle Sem Fio Xbox Series Robot White - Bluetooth, Conexão USB-C, D-pad Híbrido e Aderência Texturizada para PC, Console e Mobile",
    "image": "https://m.media-amazon.com/images/I/41aWnRVNlnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FL9MYXHD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F24XQ9NF",
    "title": "Electrolux Air fryer Fritadeira Elétrica sem oleo Rita Lobo 5,8L 9 receitas funções pré-definidas Painel Digital timer 60min desligamento automático cesto removível antiaderente 1400W EAF45 127v Cinza",
    "image": "https://m.media-amazon.com/images/I/61InAn6DqaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 386.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F24XQ9NF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CGR7FNC2",
    "title": "Cadeira de escritório presidente, cadeira de home office com apoio para os pés e encosto ajustável(Marrom)",
    "image": "https://m.media-amazon.com/images/I/71OgQUaaHaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGR7FNC2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CQDCYSYB",
    "title": "Smart Alimentador Pet Wi-Fi Positivo Casa Inteligente, Agendamento de Porções por App, Gravador de Voz, 4L, Sensor antiobstrução, Tigela removível – Compatível com Alexa e Google Assistente",
    "image": "https://m.media-amazon.com/images/I/51bVWgqVPLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQDCYSYB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FXH6Y9G8",
    "title": "Berço Portátil Bebê Acoplado Co-Bed Connect Maxi baby (Grafite)",
    "image": "https://m.media-amazon.com/images/I/51ougekSbcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 410.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXH6Y9G8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0D78RX8Y1",
    "title": "Cadeira Gamer Python Fly em tecido, respirável e ecológica, ângulo ajustável (Cinza Escuro)",
    "image": "https://m.media-amazon.com/images/I/71CXvormWyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 413.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D78RX8Y1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CJV2WKQF",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Branco",
    "image": "https://m.media-amazon.com/images/I/613NfdEWPyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 414.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJV2WKQF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0B4Q24P9Q",
    "title": "Midea Panela de Pressão Elétrica 6L com 12 receitas pré-programadas, 3 níveis de pressão e display digital, silenciosa e segura com 10 recursos de segurança, 220V",
    "image": "https://m.media-amazon.com/images/I/51sNWqooJkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 425.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B4Q24P9Q?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G3RGMZ3T",
    "title": "Jogo de Panelas Brinox7 Peças Wooden - Cinza",
    "image": "https://m.media-amazon.com/images/I/51xnBzQIPbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 429.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G3RGMZ3T?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BYT8HSBJ",
    "title": "PURIFICADOR REFRIGERADO NEW E-DUE EQUILIBRIUM GRAFITE FULL RANGE",
    "image": "https://m.media-amazon.com/images/I/51N+HfhYhbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 444.43,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BYT8HSBJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H7CT1MTV",
    "title": "Banqueta Média de Madeira Giratória Preta Otello Dsg-005",
    "image": "https://m.media-amazon.com/images/I/41Gm+1OuDxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 449.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H7CT1MTV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B081DBCK53",
    "title": "Cooktop 5 Bocas Mueller Bivolt G5",
    "image": "https://m.media-amazon.com/images/I/51nbgwxn+lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 464.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B081DBCK53?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GG4WYRNM",
    "title": "Bicicleta Ergométrica Bike Spinning Bike Treino em Casa Academia Exercícios Cardio e Emagrecimento Design Confortável e Ajustável Vertical Silenciosa Ideal para Casa Linha Rhead Red High Premium",
    "image": "https://m.media-amazon.com/images/I/61e-Y4AgNzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 474.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GG4WYRNM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FTNWV5F9",
    "title": "Bike Ergometrica Bicicleta Ergometrica Bike Spinning Silenciosa Vertical Modelo Premium",
    "image": "https://m.media-amazon.com/images/I/61CctRbg8wL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 493.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNWV5F9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FFDB8CG1",
    "title": "Micro­ondas 28L - PMO30B 127V - Philco 1100W",
    "image": "https://m.media-amazon.com/images/I/61+lqbYwA2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 493.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFDB8CG1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C2Z63CMP",
    "title": "TakTark Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Sem Wifi, Panorâmica Inclinação, Áudio Bidirecional, Night Vision, Zoom Digital, Detecção De Som Vox, Ideal Para Novos Pais",
    "image": "https://m.media-amazon.com/images/I/612CGjAtCxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2Z63CMP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07C4RWG85",
    "title": "Brinox - Jogo de Panelas 8 Peças Ceramic Life Smart Plus - Preto",
    "image": "https://m.media-amazon.com/images/I/51nkLnnOEsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 579.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07C4RWG85?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0921H5SJV",
    "title": "Panasonic Micro-ondas 34L Branco 220v NN-ST65LWRU",
    "image": "https://m.media-amazon.com/images/I/41KDVDZYBeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 619.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0921H5SJV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "8527739356",
    "title": "Princípios de Anatomia e Fisiologia",
    "image": "https://m.media-amazon.com/images/I/81yEg2oFm6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 664.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8527739356?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FLKL7DHZ",
    "title": "Monitor Gamer AOC AGON G50 27\" 144Hz 0,5ms IPS HDR10 G-SYNC 27G50F",
    "image": "https://m.media-amazon.com/images/I/71RpoYhSWJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 689.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FLKL7DHZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B01B95BDRS",
    "title": "Memória RAM Rise Mode Diamond Series 16GB 3200Mhz DDR4 para Desktop 1.35v, CL19, Branco - RM-D4-16G-3200DW",
    "image": "https://m.media-amazon.com/images/I/515WnwKbZCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 689.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B01B95BDRS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07734SYSK",
    "title": "Bebedouro Coluna Garrafao - Egc35B, Inox, 220 Volts, Esmaltec",
    "image": "https://m.media-amazon.com/images/I/51QAGW7vnPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 711.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B07734SYSK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B076C6B4J7",
    "title": "Bebedouro Gelágua Esmaltec EGC35B Coluna Natural e Gelada Branco 220V",
    "image": "https://m.media-amazon.com/images/I/41+A0RZbZ7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 712.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B076C6B4J7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GNN42NBM",
    "title": "Bicicleta Spinning Com Roda De Inércia De 13kg Bicicleta de Spinning Personalizada, Bicicleta de Ciclismo Indoor para Fitness Suporta 150kg Sensor Cardíaco Monitor Digital Correia Silenciosa",
    "image": "https://m.media-amazon.com/images/I/61nMecidBRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 758.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GNN42NBM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G2T13LT6",
    "title": "Soundbar TCL com Subwoofer sem fio Bluetooth 2.1 Canais HDMI ARC S55H",
    "image": "https://m.media-amazon.com/images/I/41hYqNuYIcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T13LT6?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DHWFBYVC",
    "title": "Smartphone Motorola Moto g35 5G - 128GB 12GB (4GB RAM+8GB Ram Boost) e Camera 50MP com AI NFC Tela 6.7\" com Superbrilho - Verde",
    "image": "https://m.media-amazon.com/images/I/61pGaBV+-AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 849.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHWFBYVC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GR64LHW8",
    "title": "Armário de Cozinha Completa Aramóveis Kit Mega 9 Portas 2 Gavetas",
    "image": "https://m.media-amazon.com/images/I/51TI8semxdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 849.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR64LHW8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0D9W4778P",
    "title": "Bettdow Projetor 4k 8k 15000 Lumens Hd 1080p Compatível Completo De Android 9, Smart Projetores Retroprojetor Portatil 600 ANSI WiFi6, Auto Correção Trapezoidal, Foco Eletronico",
    "image": "https://m.media-amazon.com/images/I/71tOGhQUWxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 874.51,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9W4778P?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GR4GR5QH",
    "title": "soundcore Space 2 da Anker, ANC Fone de Ouvido Bluetooth 6.1, Modo Soneca | 70H, Cancelamento Ativo de Ruído , Headphone Bluetooth Over-Ear Conforto Superior, Áudio Hi-Res Wireless LDAC, Conexão Dupla",
    "image": "https://m.media-amazon.com/images/I/61HeqFUjJGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR4GR5QH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B094DKT1MM",
    "title": "Celite, Kit Vaso Sanitário Rimless com Caixa Acoplada Smart Clean e Assento Soft Close Vip, Branco",
    "image": "https://m.media-amazon.com/images/I/61SLX+nPi2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 989.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B094DKT1MM?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BH94PQ3Y",
    "title": "VIA NOSSA - Buffet Aparador 4 Portas 4 Gavetas e Pés em Madeira Giorgia 187cm Cor:offwhite/cedro",
    "image": "https://m.media-amazon.com/images/I/61AVAGAO0iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1049.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BH94PQ3Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FPH8MFX1",
    "title": "Berço Co-Bed Safety 1st, Lounge com Balanço Automático - Grey",
    "image": "https://m.media-amazon.com/images/I/617MAFzKsgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1050.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPH8MFX1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0C7H3P3C8",
    "title": "Forno à Gás de Embutir Stelar 46 litros Topázio Preto 127v",
    "image": "https://m.media-amazon.com/images/I/51oUE+WfXVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1073.61,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7H3P3C8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GZ4DD3F1",
    "title": "Tablet VAIO TL10 4GB RAM 64GB, 4G, Teclado Magnético, Tela 10.4” 2K PRETO",
    "image": "https://m.media-amazon.com/images/I/61CSMv1uu2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1159.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZ4DD3F1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0B7XPT5Z6",
    "title": "Guarda-roupa Casal 8 Portas 4 Gavetas Araplac",
    "image": "https://m.media-amazon.com/images/I/516bhBVw5BL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B7XPT5Z6?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07BNWBHRK",
    "title": "Guarda-roupa Casal com Espelho 4 Portas 6 Gavetas Araplac Atraente Sofia",
    "image": "https://m.media-amazon.com/images/I/51XHCrPEUIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BNWBHRK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BSH2VZ5C",
    "title": "Monitor Gamer ASUS TUF 27\", QHD, 210Hz, 0.3ms, IPS, G-Sync Comp, FreeSync Premium, Ajuste de ângulo, Som Integrado - VG27AQ5A",
    "image": "https://m.media-amazon.com/images/I/51pdEu2qF4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BSH2VZ5C?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DNQ5HLJ9",
    "title": "Amazfit T-Rex 3 Relógio Inteligente Robusto/Militar 48mm, GPS (com Privacidade), Mapas Offline, Longa Vida da Bateria,328 Pés Resistente à Água, 170 Modos de Fitness/Desporto (Black)",
    "image": "https://m.media-amazon.com/images/I/71s0GHShTrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1339.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNQ5HLJ9?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B09Z78CWXY",
    "title": "Bicicleta Spinning com roda de inércia de 13kg WCT Fitness",
    "image": "https://m.media-amazon.com/images/I/61zKXOc8LxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1357.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B09Z78CWXY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GWQQFS9C",
    "title": "Estabilizador Gimbal FeiyuTech SCORP 2 KIT para Câmeras DSLR e Mirrorless, Rastreamento de IA Integrado,Peso Máximo de 2,5 kg, Tela Sensível ao Toque, Gravação Vertical Nativa com Estojo",
    "image": "https://m.media-amazon.com/images/I/71wHnRQ8AwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1549.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWQQFS9C?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DNLDVPLW",
    "title": "Geladeira Refrigerador HQ Defrost 290 Litros Branco HQ-290RDF 220V",
    "image": "https://m.media-amazon.com/images/I/31jrm3g7OtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1665.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNLDVPLW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07Q5L5YTP",
    "title": "LAVADORA DE ROUPA AUTOMÁTICA MLA13 13 KG BCO 220V",
    "image": "https://m.media-amazon.com/images/I/51xeBNAzR+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1665.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q5L5YTP?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GR18BSVR",
    "title": "Frigobar Brastemp Retrô 76 Litros Classic Black - BRA08ME (110, Volts)",
    "image": "https://m.media-amazon.com/images/I/51aB+FU2oFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1683.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR18BSVR?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DPGQ6V13",
    "title": "Geladeira Refrigerador HQ Defrost 290 Litros Preto/Cinza HQ-290RDF 127V",
    "image": "https://m.media-amazon.com/images/I/411rpvysQGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPGQ6V13?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B08YKC39Y7",
    "title": "Emma Colchão Queen Duo Comfort - 158x198x18 cm, Conforto de Dupla Face, Suporte ideal para o corpo, Alta Durabilidade, Capa Lavável, 100 Noites de Teste, 10 anos de garantia",
    "image": "https://m.media-amazon.com/images/I/81YhNKtwICL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1749.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08YKC39Y7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FPL3ZXTV",
    "title": "Notebook Intel Celeron 8gb Ram 256 Gb Ssd Laptop 1920x1080 FHD 14in",
    "image": "https://m.media-amazon.com/images/I/71DO8Z+LVNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1798.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPL3ZXTV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H2NF3JXT",
    "title": "Freezer Horizontal Electrolux HB250 245 Litros Inverter 1 Porta Branco Bivolt",
    "image": "https://m.media-amazon.com/images/I/31oeND3LWUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1832.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NF3JXT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FSMD987L",
    "title": "Forno Elétrico Digital de Embutir Mueller Espelhado 70 Litros com função fryer MFE70K 220V",
    "image": "https://m.media-amazon.com/images/I/51x+eTQz1UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1879.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSMD987L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GVT4L94F",
    "title": "Celular Samsung Galaxy A37 5G 128GB, 6GB RAM, Câmera 50MP (Branco)",
    "image": "https://m.media-amazon.com/images/I/51G-NkDKaXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1886.43,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT4L94F?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07XG2SF77",
    "title": "Dream Fitness Esteira Eletrônica DR 2110 Bivolt",
    "image": "https://m.media-amazon.com/images/I/61DnA2+4dtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1888.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XG2SF77?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BVS63S7X",
    "title": "Fogão Brastemp 4 Bocas de embutir Inox com dupla chama e grades individuais - BYO4EBR Bivolt",
    "image": "https://m.media-amazon.com/images/I/51-H0a7o+ML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1889.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BVS63S7X?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DS6BBG4G",
    "title": "Bicicleta Ergométrica Magnética Horizontal Gallant Elite Pro (gbev05hmgapt)",
    "image": "https://m.media-amazon.com/images/I/51Df4zs3VTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1889.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DS6BBG4G?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H2CK3KNQ",
    "title": "VEDO Bateria eletrônica profissional, equipada com pads de bateria em mesh, caixa de 10 polegadas com dupla camada, mais de 600 sons BFD, 2 pedais, banco para bateria, fones de ouvido e baquetas.",
    "image": "https://m.media-amazon.com/images/I/61u6DXtxW1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1889.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2CK3KNQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H51W1L8W",
    "title": "Electrolux Ar-condicionado Split Electrolux MaxComfort Full Inverter Frio 12.000 BTUs (NI12F/NE12F) 220V",
    "image": "https://m.media-amazon.com/images/I/41LJSdrWwML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H51W1L8W?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G1VKLDXJ",
    "title": "Cama Colchão Casal Montessoriana Infantil Proteção Lateral Cor:azul",
    "image": "https://m.media-amazon.com/images/I/61sfs8HqtAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1VKLDXJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07K29F3SB",
    "title": "Geladeira Electrolux Cycle Defrost 260L Super Freezer Duplex Branca (DC35A) - 127 Volts",
    "image": "https://m.media-amazon.com/images/I/31VVoX6D74L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2029.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B07K29F3SB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GR1L1BBL",
    "title": "Freezer Horizontal Consul 307 Litros Branco - CHA31MB (220, Volts)",
    "image": "https://m.media-amazon.com/images/I/41Qjk7mlhLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR1L1BBL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F1QPHFL3",
    "title": "Máquina de Lavar Electrolux 18kg Branca Efficient Cesto inox e Jet&Clean (LEE18) 220V",
    "image": "https://m.media-amazon.com/images/I/41Mx9m51YgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2110.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1QPHFL3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FTMTP3VX",
    "title": "Apple iPhone 13 (128 GB) - Meia-noite (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41rfDU6FGqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2172.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTMTP3VX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FPBR8V26",
    "title": "PHILIPS, Smart TV Ambilight 50\" 4K, Titan OS, 50PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "image": "https://m.media-amazon.com/images/I/61hTC1qv92L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2189.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBR8V26?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B07FPT459W",
    "title": "Colchao Casal Castor Silver Star Mola Pocket Air One Face 138X188X032",
    "image": "https://m.media-amazon.com/images/I/51YR6MOu69L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2189.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07FPT459W?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G1L9VLHL",
    "title": "Apple iPhone 13 (128 GB) - Rosa (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41l+tImzWTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2275.26,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1L9VLHL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FVMH1K2Y",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Branca (TF38) 127V",
    "image": "https://m.media-amazon.com/images/I/319xY36QjcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVMH1K2Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FVMFSWGV",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Branca (TF38) 220V",
    "image": "https://m.media-amazon.com/images/I/319xY36QjcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVMFSWGV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GL1M1JJ8",
    "title": "BOSGAME Mini PC E3 Neo Intel N95, 16GB RAM DDR4, SSD NVMe 512GB",
    "image": "https://m.media-amazon.com/images/I/711aeQZ7PxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2399.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL1M1JJ8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H4XPM91K",
    "title": "Guarda-roupa Casal com Espelho 6 Gavetas 2 Portas de Correr Caemmun Toronto",
    "image": "https://m.media-amazon.com/images/I/61AcIF9Cm9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2399.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4XPM91K?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DJC1HKNG",
    "title": "Toca-Discos Vinil Audio-Technica Sem-Fio Automático AT-LP70XBT-BZ, Preto e Bronze, Bivolt 120/240V",
    "image": "https://m.media-amazon.com/images/I/51d3tiITACL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJC1HKNG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FVP6KRP4",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Inox Look (TF38S) 127V",
    "image": "https://m.media-amazon.com/images/I/416nfzkCKsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVP6KRP4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B076BDN8TJ",
    "title": "Geladeira Consul Frost Free 342 litros Branca com Gavetão Hortifruti - CRB39AB 220V",
    "image": "https://m.media-amazon.com/images/I/312RH2SQfwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2524.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B076BDN8TJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GVSY9479",
    "title": "Celular Samsung Galaxy A57 5G 256GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", Até 6 Atualizações de Android e Segurança (Azul Escuro) | 8GB RAM, Câmera Tripla até 50MP OIS, Selfie 12MP Video HDR, IP68, Tela Super AMOLED 6.7\"",
    "image": "https://m.media-amazon.com/images/I/51G6kqI5BQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2554.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVSY9479?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FTMXW3BS",
    "title": "Apple iPhone 14 (128 GB) – Roxo (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/619f09kK7tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2638.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTMXW3BS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GWRYQCYB",
    "title": "SUGGAR COIFA DE EMBUTIR 75CM 220V SLIM TOPÁZIO VIDRO PRETO PAINEL TOUCH POR GESTOS ASPIRAÇÃO PERIMETRAL TP7502PT",
    "image": "https://m.media-amazon.com/images/I/41ywtcUXpoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2639.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWRYQCYB?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DJ9TBJW2",
    "title": "Ar Condicionado Split Hi Wall Elgin Eco Inverter II 18000 BTU/h Frio 45HJFI18C2WC – 220 Volts",
    "image": "https://m.media-amazon.com/images/I/516BEnlLz+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ9TBJW2?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H6F7GYCX",
    "title": "ThinkRider X2Max Treinador de Bicicleta Inteligente, design silencioso e portátil para treinos internos, simula inclinação de 18%, compatível com ANT+ e BLE",
    "image": "https://m.media-amazon.com/images/I/618AE719bfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6F7GYCX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GYB5D8FQ",
    "title": "Geladeira Electrolux Frost Free 380L AutoSense Inverter Duplex Inox Look (IF41S)",
    "image": "https://m.media-amazon.com/images/I/419Aq5E8qvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2754.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYB5D8FQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H2B5LQK7",
    "title": "Lava e Seca Midea 11kg Mfa01d110b/wk-02 Branca Ciclo Pets",
    "image": "https://m.media-amazon.com/images/I/516vYRnDhTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2B5LQK7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GL78BKT7",
    "title": "Depilador a Laser IPL Ulike ME Luz Pulsada Indolor Ice Cooling Resfriamento em Safira, 4 Modos, Disparo Automático (3x/s), Depilação Corporal e Facial, Uso Doméstico, ANVISA, Bivolt, Presente Ideal Unissex",
    "image": "https://m.media-amazon.com/images/I/61q1piQlo8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2849.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL78BKT7?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DNR9SQXL",
    "title": "Geladeira Electrolux Frost Free 431L Efficient AutoSense Duplex Branca (TF70) 220V",
    "image": "https://m.media-amazon.com/images/I/416e19mr7qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNR9SQXL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H1SSW3VX",
    "title": "Notebook ASUS Vivobook Go 15, AMD Athlon, 4 GB, 128 GB SSD, W11 Home, 15.6'' LED, Rose Pink - E1504FA-BQ5313WS",
    "image": "https://m.media-amazon.com/images/I/71kmOwcCXdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1SSW3VX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G1LFK4LY",
    "title": "Apple iPhone 13 Pro (128 GB) - Azul Sierra (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41yGCey9asL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3021.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1LFK4LY?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DX2M1RCD",
    "title": "Geladeira Refrigerador HQ Frost Free Side By Side 460 Litros Cinza HQ-460SBSFF (127V)",
    "image": "https://m.media-amazon.com/images/I/41-eSvkKV3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3176.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX2M1RCD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BZT6SMRS",
    "title": "GELADEIRA PANASONIC BB41 TITÂNIO 397L 60CM 220 V",
    "image": "https://m.media-amazon.com/images/I/31ad8DMCOEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZT6SMRS?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FS2CVM1T",
    "title": "Notebook ASUS Vivobook 15, Intel Core i5, 8 GB, 512 GB SSD, KeepOS, 15.6'' FHD, Cool Silver - X1504VA-NJ1741",
    "image": "https://m.media-amazon.com/images/I/71ovxIPny7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FS2CVM1T?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0B7KK9PZJ",
    "title": "Lava e Seca Midea HealthGuard Smart 11kg Titanium 127V",
    "image": "https://m.media-amazon.com/images/I/51lkDjQHPrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3312.42,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B7KK9PZJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FTKPP8LZ",
    "title": "Apple iPhone 15 (128 GB) — Preto (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/416MG51rNgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3321.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTKPP8LZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F8KVQZQX",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Branco",
    "image": "https://m.media-amazon.com/images/I/61Ik2Dj2zTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8KVQZQX?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0B625GC45",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PW Branca 11/7kg - 220V",
    "image": "https://m.media-amazon.com/images/I/514T7uXr1oL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B625GC45?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B078929VCN",
    "title": "SUGGAR COIFA ILHA REDONDA QUARTZO INOX 35CM 220V TP3522IX",
    "image": "https://m.media-amazon.com/images/I/716jza-SoaS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3539.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B078929VCN?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "image": "https://m.media-amazon.com/images/I/51dBND271dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3585.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G5SMX5CC",
    "title": "Geladeira Refrigerador HQ Frost Free Side By Side 480 Litros Inox HQ-480SBSFFK (127V)",
    "image": "https://m.media-amazon.com/images/I/417yVrWma-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3598.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G5SMX5CC?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0B8MCB6KK",
    "title": "Notebook Acer Aspire Go 15 AG15-71P-5939 Intel core I5 13ª Geração 8GB RAM 256GB SSD Full HD TN Windows 11 Home",
    "image": "https://m.media-amazon.com/images/I/51m1lv0+KCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3598.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B8MCB6KK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FHCHBRGF",
    "title": "Notebook Dell 15 15-I1300-A30P, Intel Core i5-1334U, Windows 11 Home | Tela 15.6 FHD 120 Hz Antirreflexo, 8 GB RAM, 512 GB SSD, UHD Graphics, Wi‑Fi 6, leitor SD, USB 3.2 Type-C, Garantia de 1 Ano",
    "image": "https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3749.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHCHBRGF?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G1LFMHH3",
    "title": "Apple iPhone 14 Pro (256 GB) – Preto-espacial (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/61XO4bORHUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3866.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1LFMHH3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G45F6JT8",
    "title": "Apple iPhone 14 Pro (256 GB) – Roxo-profundo (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/518bzP8VW1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3866.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45F6JT8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FVPLDKKG",
    "title": "Electrolux Geladeira Electrolux Frost Free Inverter 400L Efficient AutoSense e Rapid Freeze Inverse Black Inox Look (IB6B) Bivolt",
    "image": "https://m.media-amazon.com/images/I/31K+KWPwGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPLDKKG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G22R3QLT",
    "title": "Notebook Lenovo IdeaPad Slim 3 15.3\" - AMD Ryzen 7 7735HS, 8GB RAM, 256GB SSD, AMD Radeon Graphics, Linux",
    "image": "https://m.media-amazon.com/images/I/61dyWdKC3yL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G22R3QLT?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FCW79ZM3",
    "title": "Notebook Lenovo IdeaPad Slim 3 15.3\" Touch Screen Prata - Intel Core i5-13420H, 8GB RAM, 512GB SSD, Windows 11",
    "image": "https://m.media-amazon.com/images/I/61mS88agoEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4079.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCW79ZM3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GND7R7Z8",
    "title": "Ar Condicionado Split Hi Wall LG Dual Voice AI Inverter 24.000 Btus Frio 220v R-32",
    "image": "https://m.media-amazon.com/images/I/51XtHBetEOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GND7R7Z8?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G1LCKBDH",
    "title": "Apple iPhone 14 Pro Max(256 GB) – Preto-espacial (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4153.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1LCKBDH?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GXCDQNS3",
    "title": "Geladeira Intuitive+ Panasonic BB64 Frost Free Inverter 475L Cor Black Inox Look - NR-BB64PV2BA 127V",
    "image": "https://m.media-amazon.com/images/I/61FMO5QC2pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4198.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXCDQNS3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FHSCXH9J",
    "title": "Ar Condicionado Split Inverter Midea AI Ecomaster 24000 BTUs Quente e Frio 220V 38EZVQA24M5",
    "image": "https://m.media-amazon.com/images/I/51Y9nGETUOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4218.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHSCXH9J?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H2MZ1YK1",
    "title": "Bundle Nintendo Switch 2: Escolha Seu Jogo - Modelo Nacional de Tomada",
    "image": "https://m.media-amazon.com/images/I/61OiVZl6UhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4449.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2MZ1YK1?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FWMTC71W",
    "title": "Samsung Lava e Seca Smart AI Control WD13FG Black 13kg (220V)",
    "image": "https://m.media-amazon.com/images/I/410V+8kXYYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWMTC71W?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H5D1J8ZV",
    "title": "Smart TV TCL 75 Polegadas QLED 4K P7L WiFi Bluetooth Google TV HDR10+ 120 Hz VRR AIPQ 75P7L",
    "image": "https://m.media-amazon.com/images/I/6143steFn4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4690.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5D1J8ZV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0BNWCWG7L",
    "title": "LEGO Icons O SENHOR DOS ANÉIS: VALFENDA™ 10316 (6.167 Peças)",
    "image": "https://m.media-amazon.com/images/I/91Un4M87n2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4699.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BNWCWG7L?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0CQD9VK7X",
    "title": "Smartphone Samsung Galaxy S24 Ultra, Galaxy AI, Selfie de 12MP, Tela de 6.8\" 1-120Hz, 256GB, 12GB RAM - Titânio Preto",
    "image": "https://m.media-amazon.com/images/I/51rPU0jDc0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQD9VK7X?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F1W5TLN4",
    "title": "Dyson V12 Detect Slim Aspirador de Pó Sem Fio - Bivolt",
    "image": "https://m.media-amazon.com/images/I/61ftU72EThL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4845.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1W5TLN4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GWW2J4F3",
    "title": "Notebook Dell 15 DC15-I51334U-M70 15.6\" Full HD 13ª Gen Intel Core i5 16GB 512GB SSD Win 11 Preto Carbono",
    "image": "https://m.media-amazon.com/images/I/5152rTpvy5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWW2J4F3?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FTNLR7VL",
    "title": "Apple iPhone 15 Pro Max (256 GB) — Titânio preto (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/81IPGZtygYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5045.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNLR7VL?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GQJM9NJK",
    "title": "Notebook Gamer Lenovo LOQ E 15.6\" 144Hz - Intel Core i5-13450HX, 8GB RAM, 512GB SSD, RTX 3050 6GB, Linux",
    "image": "https://m.media-amazon.com/images/I/61Tuq7vSuRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQJM9NJK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DGM1PJMK",
    "title": "Apple iPhone 16 (128 GB) – Branco",
    "image": "https://m.media-amazon.com/images/I/61ctYsUobKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGM1PJMK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DGMJJ76Y",
    "title": "Apple iPhone 16 (128 GB) – Verde-Acizentado",
    "image": "https://m.media-amazon.com/images/I/71kMdztVHLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGMJJ76Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G66RF81Z",
    "title": "Geladeira French Door 3 Portas Inox Design e Tecnologia Premium Brastemp - BRO85MK 110V",
    "image": "https://m.media-amazon.com/images/I/41ebvn0n8AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5449.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G66RF81Z?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H37H5PCJ",
    "title": "Notebook Dell 15 I DC15-i71355U-M90 15.6\" Full HD 13ª Gen Intel Core i7 16GB 512GB SSD Win 11 Preto Carbono",
    "image": "https://m.media-amazon.com/images/I/5152rTpvy5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H37H5PCJ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DJFS7GXV",
    "title": "Apple iPhone 16 (512 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJFS7GXV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0FTZSMH28",
    "title": "Notebook ASUS Vivobook S14 IA PC, Core Ultra 7, 16 GB, 512 GB, Linux, 14'' Nivel IPS 60Hz, Matte Gray - S3407CA-LY121",
    "image": "https://m.media-amazon.com/images/I/71-aar2N5zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTZSMH28?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DGM22BZK",
    "title": "Apple iPhone 16 (512 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGM22BZK?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DGLZR7WQ",
    "title": "Apple iPhone 16 (512 GB) – Branco",
    "image": "https://m.media-amazon.com/images/I/61ctYsUobKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGLZR7WQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DGMH48BD",
    "title": "Apple iPhone 16 (512 GB) – Verde-Acizentado",
    "image": "https://m.media-amazon.com/images/I/71kMdztVHLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGMH48BD?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0G66Z7P9R",
    "title": "Geladeira BRO85MK 559 Litros Frost Free French Door Brastemp",
    "image": "https://m.media-amazon.com/images/I/41VTZ8N0FYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5949.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G66Z7P9R?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0F9PSCBYV",
    "title": "Monitor Samsung Odyssey G9 49\", DQHD, 144Hz, 1ms, ajuste de altura, FreeSync Premium Pro, DP, HDMI, USB, preto",
    "image": "https://m.media-amazon.com/images/I/51FWegmI0zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6079.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9PSCBYV?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0H4J13B2M",
    "title": "Notebook Lenovo Gamer LOQ Essential Intel Core i5-12450HX 16GB 1TB SSD RTX 4050 144Hz Windows 11 15.6\" - 83ME0001BR",
    "image": "https://m.media-amazon.com/images/I/81L8oOFpueL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4J13B2M?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B09QW933NQ",
    "title": "Refrigerador French Door Samsung de 03 Portas Frost Free com 549 Litros Inox - Rf49a5202s9/az 127V",
    "image": "https://m.media-amazon.com/images/I/415YYoQSmeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6554.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09QW933NQ?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B09QVC3PYG",
    "title": "Geladeira Samsung RF49A Inverter Frost Free 3 Portas com Dispenser de Água 549L Inox Look 220V",
    "image": "https://m.media-amazon.com/images/I/41qNRgRXfuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6554.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09QVC3PYG?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DS6KMS5Y",
    "title": "Gallant Esteira Ergométrica Elétrica Elite Pro 4,5hp 20km/h 160kg 15 Níveis de Inclinação",
    "image": "https://m.media-amazon.com/images/I/51NPdG-tqQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6658.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DS6KMS5Y?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0DSXZZH49",
    "title": "Celular Samsung Galaxy S25 Ultra 5G, 512GB, 12GB RAM, Câmera Quádrupla de 200+50+10+50, Tela Grande de 6.9\", Titânio Cinza",
    "image": "https://m.media-amazon.com/images/I/613hjN2-QnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSXZZH49?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B0GRJNQWHW",
    "title": "Notebook Gamer Alienware 16 AC16250, Intel Core 5 210H, Windows 11 Home",
    "image": "https://m.media-amazon.com/images/I/514EAjs4c9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7249.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GRJNQWHW?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  },
  {
    "asin": "B076PK9JJ4",
    "title": "Mesa De Som Digital 48 Canais Tf5 Yamaha, Yamaha, Tf5",
    "image": "https://m.media-amazon.com/images/I/61wNgb0lV0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 23399.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B076PK9JJ4?tag=mixstore04b3-20",
    "last_checked_at": "2026-08-15T21:53:56.000Z"
  }
];
