const PRODUCTS = [
  {
    "asin": "B09547GF99",
    "title": "Scala Plus Papel Toalha Multipicote, 200 Toalhas (2 Rolos de 100 Toalhas Cada)",
    "source_url": "https://www.amazon.com.br/dp/B09547GF99",
    "image": "https://m.media-amazon.com/images/I/71Q5B8kAMtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B09547GF99?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FMLBQ136",
    "title": "KitKat Creme Crocante de Chocolate – Pasta para Passar, 330 g",
    "source_url": "https://www.amazon.com.br/dp/B0FMLBQ136",
    "image": "https://m.media-amazon.com/images/I/61VAMMzECnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMLBQ136?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07DKKQ1TN",
    "title": "L'Oréal Paris Elseve Óleo Extraordinário Creme de Tratamento para Nutrição Intensa de Cabelos Secos, com Micro-Óleos de Flores Preciosas para Maciez e Brilho 300g",
    "source_url": "https://www.amazon.com.br/dp/B07DKKQ1TN",
    "image": "https://m.media-amazon.com/images/I/715M+mgR5ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DKKQ1TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FG2DG5RH",
    "title": "TOYADENT Escova de Dente Adultos, 5500 Cerdas Macia, Kit Família 3 Unidades | Confortável para Escovação Diária, Alta Densidade com Tampa Protetora, Kit Família para Limpeza Suave e Cuidado Bucal Diário",
    "source_url": "https://www.amazon.com.br/dp/B0FG2DG5RH",
    "image": "https://m.media-amazon.com/images/I/71J3bJhXwJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FG2DG5RH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07CBL2H3M",
    "title": "Estrela, Jogo Tapa Certo | Para 5 Anos ou Mais, Inclui Mãozinhas, Cartas Redondas, Tema de Animais, Jogo em Família",
    "source_url": "https://www.amazon.com.br/dp/B07CBL2H3M",
    "image": "https://m.media-amazon.com/images/I/619Vr4UzwqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B07CBL2H3M?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G45G116D",
    "title": "Shampoo Encorpador L'Oréal Paris Elseve Collagen® Lifter 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0G45G116D",
    "image": "https://m.media-amazon.com/images/I/71JdSG1QhRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45G116D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FWGN9SZL",
    "title": "Café em Cápsula Nescafé Farmers Origins Brazil - compatível máquina Nespresso, 18 cápsulas 44g",
    "source_url": "https://www.amazon.com.br/dp/B0FWGN9SZL",
    "image": "https://m.media-amazon.com/images/I/81FJv2Bod7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWGN9SZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FWFRRT48",
    "title": "Café em Cápsula Nescafé Farmers Origins Colombia - compatível máquina Nespresso, 18 cápsulas 44g",
    "source_url": "https://www.amazon.com.br/dp/B0FWFRRT48",
    "image": "https://m.media-amazon.com/images/I/81OEDFGUjuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWFRRT48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "8574120286",
    "title": "O grúfalo",
    "source_url": "https://www.amazon.com.br/dp/8574120286",
    "image": "https://m.media-amazon.com/images/I/A1Yw3SMln2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8574120286?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D3CT4H1J",
    "title": "Protetor Contra Surtos Elétricos (DPS) CLAMPER 127/220V, 10 Amperes, 3 Pinos, para PC, PS5, Xbox, Smartphone, Monitor, Impressora, etc - iCLAMPER Pocket Fit 3P 10A Transparente LCF, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0D3CT4H1J",
    "image": "https://m.media-amazon.com/images/I/41UZqy2PB-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 35.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3CT4H1J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B093GCJ1JP",
    "title": "Fralda Pom Pom Protek Proteção de Mãe Mega M 48 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B093GCJ1JP",
    "image": "https://m.media-amazon.com/images/I/71tuvviGiaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B093GCJ1JP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2X31T8D",
    "title": "OralGos Escova de Dentes Premium 6 unidades Colorido, Cerdas Ultra Macias | Cerdas Ultra Macias, com Protetor de Cerdas, Suave para Gengivas, Ideal para Presente e Uso Diário",
    "source_url": "https://www.amazon.com.br/dp/B0G2X31T8D",
    "image": "https://m.media-amazon.com/images/I/81GsimTkapL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2X31T8D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07VGF2P6L",
    "title": "L'Oréal Paris Revitalift Hialurônico Creme Facial Noturno, com Ácido Hialurônico Puro, Com textura leve, preenche linhas de expressão e hidrata a pele intensamente por 24h, 49g",
    "source_url": "https://www.amazon.com.br/dp/B07VGF2P6L",
    "image": "https://m.media-amazon.com/images/I/51dnpdlO-zS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VGF2P6L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CQDGFNBP",
    "title": "Calcinha Absorvente Menstrual Pantys Xodó, Fluxo Moderado, Feminino, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0CQDGFNBP",
    "image": "https://m.media-amazon.com/images/I/51DGhK2g8qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQDGFNBP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "8501925071",
    "title": "Ratos e homens",
    "source_url": "https://www.amazon.com.br/dp/8501925071",
    "image": "https://m.media-amazon.com/images/I/81xmLFxFmiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/8501925071?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B077BY4FMF",
    "title": "Maybelline NY The Colossal Volum' Express, Máscara de Cílios À Prova D'água, 9x Mais Volume por Até 24h, Fórmula de Colágeno e Definição Intensa, Não Empelota, Cor Preto, 8ml",
    "source_url": "https://www.amazon.com.br/dp/B077BY4FMF",
    "image": "https://m.media-amazon.com/images/I/51tVANWtF3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 41.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY4FMF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B073ZKHXVH",
    "title": "Spray Retoque de Raiz Instantâneo Magic Retouch, L'Oréal Paris, Louro Escuro",
    "source_url": "https://www.amazon.com.br/dp/B073ZKHXVH",
    "image": "https://m.media-amazon.com/images/I/61U40i24h1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B073ZKHXVH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BF1VYPMM",
    "title": "Calcinha Absorvente Menstrual Pantys Cozy, Fluxo Intenso, Feminino, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0BF1VYPMM",
    "image": "https://m.media-amazon.com/images/I/51ooDZmLLsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 45.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BF1VYPMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B08Y3CV67L",
    "title": "As extraordinárias viagens de Júlio Verne - Box com 6 livros",
    "source_url": "https://www.amazon.com.br/dp/B08Y3CV67L",
    "image": "https://m.media-amazon.com/images/I/71wgomAPTQS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 50.12,
    "affiliate_url": "https://www.amazon.com.br/dp/B08Y3CV67L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DNY5FQY3",
    "title": "LYOR - Tapete de Pedra Diatomita para Banheiro Cinza 60cm x 39cm",
    "source_url": "https://www.amazon.com.br/dp/B0DNY5FQY3",
    "image": "https://m.media-amazon.com/images/I/41R091iJO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 51.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNY5FQY3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B08GKXGS45",
    "title": "Candide, Laptop Infantil, Homem-Aranha, Brinquedo Educativo - Bilíngue",
    "source_url": "https://www.amazon.com.br/dp/B08GKXGS45",
    "image": "https://m.media-amazon.com/images/I/61mMbktfL-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 55.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B08GKXGS45?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D2DPCP55",
    "title": "Elka Bluey, Brinquedo, boneco de ação, 2+ Anos",
    "source_url": "https://www.amazon.com.br/dp/B0D2DPCP55",
    "image": "https://m.media-amazon.com/images/I/619Z3Zol2IL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D2DPCP55?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FQK39HKS",
    "title": "Castanha-do-Pará 500g Orgânica Inteira – Fonte de Proteína Vegetal e Selênio – Vegana, Kosher, Sem Glúten, Sem Conservantes – Floresta em Pé",
    "source_url": "https://www.amazon.com.br/dp/B0FQK39HKS",
    "image": "https://m.media-amazon.com/images/I/81nEUFVRt8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQK39HKS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B000GKUEVE",
    "title": "Pacote 5 Carros Sortidos, Hot Wheels, Mattel, Multicor - não é possível escolher as cores",
    "source_url": "https://www.amazon.com.br/dp/B000GKUEVE",
    "image": "https://m.media-amazon.com/images/I/81GMRnT1SsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B000GKUEVE?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "6555656867",
    "title": "A hipótese do amor - Edição especial (livro + marcador exclusivo)",
    "source_url": "https://www.amazon.com.br/dp/6555656867",
    "image": "https://m.media-amazon.com/images/I/71snJkZzgmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.75,
    "affiliate_url": "https://www.amazon.com.br/dp/6555656867?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H9RXTBT1",
    "title": "Garrafa Térmica Infantil 420ml em Aço Inox Parede Dupla Livre de BPA | com Canudo de Silicone, Alça e Adesivos",
    "source_url": "https://www.amazon.com.br/dp/B0H9RXTBT1",
    "image": "https://m.media-amazon.com/images/I/51ql60PtVfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H9RXTBT1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B093QCF4PM",
    "title": "Candide, Laptop Infantil, Patrulha Canina, Brinquedo Educativo - Bilíngue",
    "source_url": "https://www.amazon.com.br/dp/B093QCF4PM",
    "image": "https://m.media-amazon.com/images/I/61hsC+UotVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 60.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B093QCF4PM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "855101305X",
    "title": "Alchemised: Edição brasileira",
    "source_url": "https://www.amazon.com.br/dp/855101305X",
    "image": "https://m.media-amazon.com/images/I/71Ib1chR4GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.21,
    "affiliate_url": "https://www.amazon.com.br/dp/855101305X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D8V3QLDD",
    "title": "Filtro de Linha CLAMPER iCLAMPER Energia 5, 5 Tomadas, Proteção Contra Surtos Elétricos, 10A, Bivolt, Cabo 1m, Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0D8V3QLDD",
    "image": "https://m.media-amazon.com/images/I/51rRxbJnGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8V3QLDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B08N9P9M5L",
    "title": "Coleção Anne de Green Gables com 8 livros mais Diário de aventuras",
    "source_url": "https://www.amazon.com.br/dp/B08N9P9M5L",
    "image": "https://m.media-amazon.com/images/I/71sTkbq6KoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B08N9P9M5L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BFZF8NRQ",
    "title": "Tech T-shirt Gola U Feminino",
    "source_url": "https://www.amazon.com.br/dp/B0BFZF8NRQ",
    "image": "https://m.media-amazon.com/images/I/313d29Qg9pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFZF8NRQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CJMV9ZQG",
    "title": "Roupa Íntima Bigfral Derma Plus P/M 24 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CJMV9ZQG",
    "image": "https://m.media-amazon.com/images/I/71fCLETIrtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJMV9ZQG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FQ6VY7S2",
    "title": "Kit 3 Pacotes Café Especial em Grãos Coffee Mais Variedades: Caparaó, Intenso e Solos Vulcânicos - 100% Arábica (3x250g)",
    "source_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2",
    "image": "https://m.media-amazon.com/images/I/61f5fOGM32L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.71,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B077PLGRBY",
    "title": "Jogo Detetive com Aplicativo, Estrela",
    "source_url": "https://www.amazon.com.br/dp/B077PLGRBY",
    "image": "https://m.media-amazon.com/images/I/81qJ6EU3SiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 71.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B077PLGRBY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0985RJT3K",
    "title": "Philco Ferro a Vapor Travel Ceramic Bivolt Base em Cerâmica",
    "source_url": "https://www.amazon.com.br/dp/B0985RJT3K",
    "image": "https://m.media-amazon.com/images/I/51cMAvfwILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0985RJT3K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09H8P5L6J",
    "title": "Kit Hidratante Facial L'Oréal Paris Revitalift Hialurônico Diurno FPS 20 + Noturno, Tratamento Antirrugas e Preenchedor com Ácido Hialurônico Puro, 49g",
    "source_url": "https://www.amazon.com.br/dp/B09H8P5L6J",
    "image": "https://m.media-amazon.com/images/I/51CqsKH0b9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09H8P5L6J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "6584191044",
    "title": "Little Bird: A Batalha por Alento (Graphic Novel Volume Único)",
    "source_url": "https://www.amazon.com.br/dp/6584191044",
    "image": "https://m.media-amazon.com/images/I/910W1U5rksL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.35,
    "affiliate_url": "https://www.amazon.com.br/dp/6584191044?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0F67MQCGQ",
    "title": "L'Oréal Paris Elseve Liso dos Sonhos Kit Shampoo, Condicionador e Sérum, com Tecnologia Ativada por Calor para um Liso por 1 Semana, Efeito Antifrizz e Barreira Protetora Contra Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0F67MQCGQ",
    "image": "https://m.media-amazon.com/images/I/817zLg0L03L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F67MQCGQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FRBBQF36",
    "title": "Umidificador Ultrassônico Easy Air 1.8L Branco Multi Saúde - HC290",
    "source_url": "https://www.amazon.com.br/dp/B0FRBBQF36",
    "image": "https://m.media-amazon.com/images/I/41QgGU-LO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FRBBQF36?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07J2PCFB3",
    "title": "Sunny, Skye,1342, Pelúcia, 12', Patrulha Canina",
    "source_url": "https://www.amazon.com.br/dp/B07J2PCFB3",
    "image": "https://m.media-amazon.com/images/I/51pI0bdl8AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07J2PCFB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DPJR2KGZ",
    "title": "Tangle Teezer - Escova de cabelo desembaraçadora The Ultimate Detangler para todos os tipos de cabelo. Cor: Rosa",
    "source_url": "https://www.amazon.com.br/dp/B0DPJR2KGZ",
    "image": "https://m.media-amazon.com/images/I/71Z6+gjhBaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPJR2KGZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09HN38G3F",
    "title": "Furadeira de impacto 3/8\" 500W, 110V",
    "source_url": "https://www.amazon.com.br/dp/B09HN38G3F",
    "image": "https://m.media-amazon.com/images/I/51FeRa+3SYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 84.64,
    "affiliate_url": "https://www.amazon.com.br/dp/B09HN38G3F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FM9R6HCT",
    "title": "Bicicleta Andador Equilíbrio Sem Pedal 4 Roda Zippy Toys (Bege)",
    "source_url": "https://www.amazon.com.br/dp/B0FM9R6HCT",
    "image": "https://m.media-amazon.com/images/I/51KMLLuARHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 85.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FM9R6HCT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GT96JGFT",
    "title": "Tapete de Yoga TPE Dupla Face Azul, 181x61x0,6 cm, Antiderrapante, para Yoga, Pilates e Meditação",
    "source_url": "https://www.amazon.com.br/dp/B0GT96JGFT",
    "image": "https://m.media-amazon.com/images/I/71S0Loo5gSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GT96JGFT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GTRRRWH4",
    "title": "L'Oréal Paris Elseve Collagen Lifter Kit Shampoo, Condicionador e Sérum",
    "source_url": "https://www.amazon.com.br/dp/B0GTRRRWH4",
    "image": "https://m.media-amazon.com/images/I/61JHE7YsN3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTRRRWH4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H2G6W6L5",
    "title": "Kit 2 Cremes Pomadas de Assaduras Vit B5 com 100g cada, Total 200g - Bepantol Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H2G6W6L5",
    "image": "https://m.media-amazon.com/images/I/61GzAiD3PML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2G6W6L5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BFTBDGDD",
    "title": "Tech T-shirt Gola U Masculino",
    "source_url": "https://www.amazon.com.br/dp/B0BFTBDGDD",
    "image": "https://m.media-amazon.com/images/I/61drI9s-tiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFTBDGDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0010ED5FC",
    "title": "Palmer's Palmers Cocoa Butter Formula Loção De Massagem Para Estrias 250Ml Palmers Cocoa Butter 250Ml",
    "source_url": "https://www.amazon.com.br/dp/B0010ED5FC",
    "image": "https://m.media-amazon.com/images/I/71T+JD0dadL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0010ED5FC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0B3STWN1Z",
    "title": "PRO STICK PROTETOR SOLAR MULTIFUNCIONAL FPS95 PRO10 14G",
    "source_url": "https://www.amazon.com.br/dp/B0B3STWN1Z",
    "image": "https://m.media-amazon.com/images/I/51hd3pRS-DL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B3STWN1Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BHJMDKPK",
    "title": "Tech T-shirt Gola V Masculino Insider",
    "source_url": "https://www.amazon.com.br/dp/B0BHJMDKPK",
    "image": "https://m.media-amazon.com/images/I/31n0R07RFUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BHJMDKPK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B077FWP5M4",
    "title": "ELG, PWC-X4U/3M, PowerCube com Extensor USB, Filtro de Linha, Multiplicador 4 Tomadas Bivolt com 2 Portas USB 2.4A, Disjuntor Integrado de 10A, Cabo 3m, Cinza",
    "source_url": "https://www.amazon.com.br/dp/B077FWP5M4",
    "image": "https://m.media-amazon.com/images/I/51gpxbp82PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 95.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B077FWP5M4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "658419101X",
    "title": "Frontier (Graphic novel – Volume único)",
    "source_url": "https://www.amazon.com.br/dp/658419101X",
    "image": "https://m.media-amazon.com/images/I/91Wl+GVfevL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.71,
    "affiliate_url": "https://www.amazon.com.br/dp/658419101X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DGTKZ2S1",
    "title": "Bebedouro para Gatos, 3L Fonte Gato Inox Comedouros, Bebedouros e Acessorios para Gatos, Silenciosa, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1",
    "image": "https://m.media-amazon.com/images/I/61EJXP1YreL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G5QM4BBV",
    "title": "Potes Tampa Hermético Porta Alimentos Mantimentos Armário Cozinha (Kit 16)",
    "source_url": "https://www.amazon.com.br/dp/B0G5QM4BBV",
    "image": "https://m.media-amazon.com/images/I/71tuhDQoDZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G5QM4BBV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B095VF5GR7",
    "title": "Chuveiro Loren Shower Eletrônico 7500w 220v Lorenzetti",
    "source_url": "https://www.amazon.com.br/dp/B095VF5GR7",
    "image": "https://m.media-amazon.com/images/I/31fyFHV8H-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B095VF5GR7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0F6D2CWS7",
    "title": "Relógio Digital Feminino Masculino Smartwatch Inteligente Bluetooth, Full Touch a Prova d 'água IP68 com 120+ Modos de Exercício e Esporte, Preto",
    "source_url": "https://www.amazon.com.br/dp/B0F6D2CWS7",
    "image": "https://m.media-amazon.com/images/I/61oxx+xFfuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 107.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6D2CWS7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2T44SK9",
    "title": "LEGO Botanicals Flores de Cosmos 11514",
    "source_url": "https://www.amazon.com.br/dp/B0G2T44SK9",
    "image": "https://m.media-amazon.com/images/I/81pHNNDSNaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 107.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T44SK9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D9PM7MDP",
    "title": "Aspirador de Pó Vertical Britânia 2 em 1 com Filtro Ciclone 1400W BAS30 1,5L Azul 127V",
    "source_url": "https://www.amazon.com.br/dp/B0D9PM7MDP",
    "image": "https://m.media-amazon.com/images/I/41BWOPa7xqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9PM7MDP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DNHGQHMY",
    "title": "Bettdow SmartWatch, relogio smartwatch com Ecrã tátil e Alexa, à prova d'água IP68, relogio feminino e masculino, com 100+ modo esportivo e recebimento de notificações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DNHGQHMY",
    "image": "https://m.media-amazon.com/images/I/61jq8y1sVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNHGQHMY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FVFYJLYL",
    "title": "Jogo de Panela antiaderente 9 peças",
    "source_url": "https://www.amazon.com.br/dp/B0FVFYJLYL",
    "image": "https://m.media-amazon.com/images/I/511p51Ku0pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 121.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVFYJLYL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H6XQWZXR",
    "title": "Kit De Desenho Profissional 96 Peças Com Estojo Portátil – 72 Lápis De Cor Oleosos, 12 Lápis De Grafite 8B–5H, Lápis De Carvão Macio Médio Duro, Esfuminhos, Acessórios E Bloco A5 Para Desenho E Esboço",
    "source_url": "https://www.amazon.com.br/dp/B0H6XQWZXR",
    "image": "https://m.media-amazon.com/images/I/71Kpqi5EvSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 122.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6XQWZXR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FL7JNMDN",
    "title": "Filtro de Linha, Extensao Eletrica, Extensão Tomada, Torre de Tomada, Régua de Energia, 9 Tomadas, 4 Interfaces USB, 1 Porta USB Tipo-C, Suporte a Tensão de 110-220V, Potência de 2200W",
    "source_url": "https://www.amazon.com.br/dp/B0FL7JNMDN",
    "image": "https://m.media-amazon.com/images/I/51HmsdED1WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 123.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FL7JNMDN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GWDSHWCJ",
    "title": "Basike Fone de Ouvido Bluetooth 5.4 Esportivo para Corrida, Intra-Auricular | TWS Som Estéreo Hi-Fi, ENC para Chamadas Claras, 3 Tamanhos de Pontas, IPX5, Compatível com Android e iOS (Ouro Rosa)",
    "source_url": "https://www.amazon.com.br/dp/B0GWDSHWCJ",
    "image": "https://m.media-amazon.com/images/I/61Zy6KPUKtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 123.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWDSHWCJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GQ41JRXP",
    "title": "85-265v Plafon Led Sobrepor, 24w Plafon Inteligente Sobrepor, 3000k-65000k Plafon Inteligente, Controle de Voz/Wifi Lampada Inteligente, Luz Inteligente, Led Inteligente, 16 Milhões de Cores Da Luz",
    "source_url": "https://www.amazon.com.br/dp/B0GQ41JRXP",
    "image": "https://m.media-amazon.com/images/I/61XmuDIu61L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 125.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQ41JRXP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B08D8R4GZQ",
    "title": "Lixeira Inox com Pedal New Tramontina com Acabamento Polido 20 L",
    "source_url": "https://www.amazon.com.br/dp/B08D8R4GZQ",
    "image": "https://m.media-amazon.com/images/I/41Yg9uHGWjS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B08D8R4GZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FK1VY11N",
    "title": "Kit 2x Creatina Gummy, Sabor Chiclete e Maçã Verde (120 Gomas) 3g de Creatina por Dose - Zero Açúcar, My Fit",
    "source_url": "https://www.amazon.com.br/dp/B0FK1VY11N",
    "image": "https://m.media-amazon.com/images/I/61aGwVeUudL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 133.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FK1VY11N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "6556400157",
    "title": "Box - A Morte De Rei Arthur - Exclusivo Amazon",
    "source_url": "https://www.amazon.com.br/dp/6556400157",
    "image": "https://m.media-amazon.com/images/I/91ToBV3QeES._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 134.03,
    "affiliate_url": "https://www.amazon.com.br/dp/6556400157?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0C44K7N7G",
    "title": "Aspirador de Pó Philco Vertical 2 em 1 1450w Preto Pas1600p - 220",
    "source_url": "https://www.amazon.com.br/dp/B0C44K7N7G",
    "image": "https://m.media-amazon.com/images/I/41inGaNI2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C44K7N7G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G6SXGMB2",
    "title": "iCoffee C3S Moedor de Café Manual, Núcleo de Moagem CNC, 20 g | Moedor de Café Inox com Manivela (Preto 20g)",
    "source_url": "https://www.amazon.com.br/dp/B0G6SXGMB2",
    "image": "https://m.media-amazon.com/images/I/81DFVQPHmNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.62,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6SXGMB2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "854311229X",
    "title": "Coleção Ana Claudia Quintana Arantes – Box com 4 livros",
    "source_url": "https://www.amazon.com.br/dp/854311229X",
    "image": "https://m.media-amazon.com/images/I/61L9WCjr8UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.69,
    "affiliate_url": "https://www.amazon.com.br/dp/854311229X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G3D42YQJ",
    "title": "Torneira Banheiro Bancada Alta Monocomando Quente Frio Cromada Inox Yab",
    "source_url": "https://www.amazon.com.br/dp/B0G3D42YQJ",
    "image": "https://m.media-amazon.com/images/I/51GHhVo4npL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 142.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G3D42YQJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0C2J8XTYY",
    "title": "Lâminas de Reposição Originais Philips OneBlade QP630/51 Aço Inoxidável - Raspa, Apara e Contorna - Pacote com 3 un",
    "source_url": "https://www.amazon.com.br/dp/B0C2J8XTYY",
    "image": "https://m.media-amazon.com/images/I/81jIOcGhrTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2J8XTYY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B075KD78F8",
    "title": "Combo Teclado e Mouse sem fio Logitech MK345 com Teclado com Apoio para as Mãos e Mouse Destro, Conexão USB, Pilhas Inclusas e Layout ABNT2",
    "source_url": "https://www.amazon.com.br/dp/B075KD78F8",
    "image": "https://m.media-amazon.com/images/I/61SlbgSisZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B075KD78F8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FBGDSRP7",
    "title": "Power Bank 30000mAh, Basike Carregador Portátil com Cabo(Preto) | 2 Saídas USB-A(até 22.5W) + Tipo-C(até 22.5W) com Cabo, Carregamento Rápido, Led Indicador de Bateria Proteção Inteligente",
    "source_url": "https://www.amazon.com.br/dp/B0FBGDSRP7",
    "image": "https://m.media-amazon.com/images/I/61D6Zc5hctL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBGDSRP7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GS755NZ9",
    "title": "Philips Walita Processador de Alimentos PowerChop 450W, Preto, 110V | Pica e Mistura Rápido – lâminas eficientes da Série 3000 para o preparo de receitas (HR1501/01)",
    "source_url": "https://www.amazon.com.br/dp/B0GS755NZ9",
    "image": "https://m.media-amazon.com/images/I/615ErVjiCuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 162.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GS755NZ9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07M6Y7355",
    "title": "EMEET Webcam 1080p com microfone, câmera Web C960, webcam de streaming de 2 microfones, câmera de computador FOV de 90°, webcam USB Plug and Play para chamadas online/conferências,",
    "source_url": "https://www.amazon.com.br/dp/B07M6Y7355",
    "image": "https://m.media-amazon.com/images/I/61-K2lXmHQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B07M6Y7355?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0B8PGDMWK",
    "title": "HyperX Cloud Stinger 2 - Headset gamer (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0B8PGDMWK",
    "image": "https://m.media-amazon.com/images/I/61gKp5mi0-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 169.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B8PGDMWK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DGKY94HS",
    "title": "Blocos de Montar Magnéticos Construção Brinquedo Educativo Infantil | 130 Peças，Blocos de Montar Magnéticos，STEM",
    "source_url": "https://www.amazon.com.br/dp/B0DGKY94HS",
    "image": "https://m.media-amazon.com/images/I/81BLH8BzGXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 173.57,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGKY94HS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DRW5TL43",
    "title": "LEGO Speed Champions Supercarro Porsche 911 GT3 RS 77239 (348 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DRW5TL43",
    "image": "https://m.media-amazon.com/images/I/81GXj4TGjQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DRW5TL43?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FFTB8BFL",
    "title": "Basike Power Bank 20000mAh 45W, Cabo USB-C Integrado, Compacto, Prata | Carregador Portátil, 3-Saídas, Bateria Externa de Carregamento Rápido PPS/PD/QC para iPhone Séries 16-13, Samsung S25-21",
    "source_url": "https://www.amazon.com.br/dp/B0FFTB8BFL",
    "image": "https://m.media-amazon.com/images/I/61HIjbaQ3RL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 183.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTB8BFL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0916751QC",
    "title": "TRICICLO AVESPA MARAL COLORIDO",
    "source_url": "https://www.amazon.com.br/dp/B0916751QC",
    "image": "https://m.media-amazon.com/images/I/51LiRL70CuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0916751QC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CRTYZG5C",
    "title": "soundcore P30i da Anker, ANC Fone de Ouvido Bluetooth 5.4 Sem Fio, TWS | 45H, com Cancelamento de Ruído Adaptativo, Graves Poderosos, Estojo 2-em-1 com Suporte para Celular, IP54, Fone Gamer TWS",
    "source_url": "https://www.amazon.com.br/dp/B0CRTYZG5C",
    "image": "https://m.media-amazon.com/images/I/51o-AcAQWgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRTYZG5C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FN1D6LLN",
    "title": "House Organizer Jogo de Panelas Antiaderente com Tampas de Vidro e Utensílios – 10 Peças (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FN1D6LLN",
    "image": "https://m.media-amazon.com/images/I/61SGGAcvXrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FN1D6LLN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B00NHQFA1I",
    "title": "LEGO Classic - Caixa Média de Peças Criativas",
    "source_url": "https://www.amazon.com.br/dp/B00NHQFA1I",
    "image": "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00NHQFA1I?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FGY1LVFK",
    "title": "3m Portão Grade Retrátil de Proteção para Bebês e Cachorros, Portaozinho de Escada Instalação Sem Furos, Trava Dupla,Operação com uma mão,Portao Segurança Bebê Pet, Cercado para Cachorros",
    "source_url": "https://www.amazon.com.br/dp/B0FGY1LVFK",
    "image": "https://m.media-amazon.com/images/I/816mAYjmrdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 204.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGY1LVFK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B088MVWBM9",
    "title": "Philco Aspirador Pó Vertical Power Clean 2000W PAS4000V 127V",
    "source_url": "https://www.amazon.com.br/dp/B088MVWBM9",
    "image": "https://m.media-amazon.com/images/I/41El3TMO04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 211.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B088MVWBM9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DR3N5BV6",
    "title": "Irmã do Cachorrinho Aprende Comigo Brinquedo Bebê Fisher-Price Mattel. Ensina com luzes, músicas e frases educativas. Ideal a partir dos 6 meses.",
    "source_url": "https://www.amazon.com.br/dp/B0DR3N5BV6",
    "image": "https://m.media-amazon.com/images/I/710kBoOgaEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DR3N5BV6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CD14V4RQ",
    "title": "Fritadeira Elétrica sem óleo/Air Fryer Philco PFR15PG Preto 4,3L com Timer",
    "source_url": "https://www.amazon.com.br/dp/B0CD14V4RQ",
    "image": "https://m.media-amazon.com/images/I/51QJNzNg7lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CD14V4RQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "6560050416",
    "title": "BOX As Crônicas de Nárnia - Edição de Luxo",
    "source_url": "https://www.amazon.com.br/dp/6560050416",
    "image": "https://m.media-amazon.com/images/I/81erRs9DQDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 231.84,
    "affiliate_url": "https://www.amazon.com.br/dp/6560050416?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2TD55JQ",
    "title": "Grok Games Gwent: O Jogo de Tabuleiro Lendário | 2 a 5 jogadores",
    "source_url": "https://www.amazon.com.br/dp/B0G2TD55JQ",
    "image": "https://m.media-amazon.com/images/I/715lt5V6tlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 237.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2TD55JQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07BNL32KH",
    "title": "Irrigador Oral Clearpik Professional 1000ml Bivolt Multi Saúde - HC038",
    "source_url": "https://www.amazon.com.br/dp/B07BNL32KH",
    "image": "https://m.media-amazon.com/images/I/51balqBQdHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 239.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BNL32KH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09Q4L157D",
    "title": "LEGO Orquídea de Decoração de Plantas para Adultos, Construir 10311",
    "source_url": "https://www.amazon.com.br/dp/B09Q4L157D",
    "image": "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 246.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09Q4L157D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DNTL32F6",
    "title": "Maxi Baby Mesa Atividades Infantil Didática Musical Eduka",
    "source_url": "https://www.amazon.com.br/dp/B0DNTL32F6",
    "image": "https://m.media-amazon.com/images/I/61hIPqAn-rL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 255.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNTL32F6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GC8THCC8",
    "title": "Guerreiras do KPop Boneca Mira com canção 4Y+",
    "source_url": "https://www.amazon.com.br/dp/B0GC8THCC8",
    "image": "https://m.media-amazon.com/images/I/81JJlouRzbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 256.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GC8THCC8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G7HTYPJY",
    "title": "Estrutura De Cama De Metal, Cama de Solteiro Casal, 1350kg de Capacidade, Sem Necessidade de Mola, Silenciosa, Fácil Montagem (Duplo: 190 * 136 * 46cm)",
    "source_url": "https://www.amazon.com.br/dp/B0G7HTYPJY",
    "image": "https://m.media-amazon.com/images/I/61CnOk32anL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 265.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G7HTYPJY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "8551012096",
    "title": "Box Crepúsculo – Edição comemorativa de 20 anos: acompanha pôster exclusivo",
    "source_url": "https://www.amazon.com.br/dp/8551012096",
    "image": "https://m.media-amazon.com/images/I/61KHcw-7mxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 274.4,
    "affiliate_url": "https://www.amazon.com.br/dp/8551012096?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07L4VJV1G",
    "title": "Britânia Bebedouro, Acqua, Preto, Bivolt, Estilo moderno e elegante Plástico",
    "source_url": "https://www.amazon.com.br/dp/B07L4VJV1G",
    "image": "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07L4VJV1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FMYS7NVC",
    "title": "Maral Triciclo Moto Trail Infantil 2 em 1 – Passeio e Pedal, Suporta até 30 kg, Cinto de Segurança Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0FMYS7NVC",
    "image": "https://m.media-amazon.com/images/I/61gwPxT3mYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMYS7NVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0B34XKBXF",
    "title": "KIT LOREAL METAL DETOX SHAMPOO 300ML+MASCARA 250G",
    "source_url": "https://www.amazon.com.br/dp/B0B34XKBXF",
    "image": "https://m.media-amazon.com/images/I/51+2nz3yKkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B34XKBXF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09J1TB35S",
    "title": "Mouse Sem Fio Logitech Lift Vertical com Design Ergonômico para Redução de Tensão Muscular, Cliques Silenciosos, Conexão Bluetooth ou USB Logi Bolt, Compatível com Windows/macOS/iPadOS - Grafite",
    "source_url": "https://www.amazon.com.br/dp/B09J1TB35S",
    "image": "https://m.media-amazon.com/images/I/61OkuiCWbDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 289.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09J1TB35S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09FKWS793",
    "title": "MIFA A90 Caixas de Som Portáteis Bluetooth, Alto-falante Bluetooth portátil IPX7 à prova d'água, 60W Bass, Emparelhamento estéreo sem fio, Mic embutido, Suporte Micro SD, USB, AUX-in, USB-C Charing",
    "source_url": "https://www.amazon.com.br/dp/B09FKWS793",
    "image": "https://m.media-amazon.com/images/I/61+pHP685TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 295.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B09FKWS793?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FQJVM2YD",
    "title": "Bettdow SmartWatch GPS, Relogio Smartwatch Masculino e Feminino, 1,43 polegadas HD AMOLED, chamada Bluetooth, Esportivos relógio com voz por IA, Compatível com Android iOS, 2 Pulseiras (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FQJVM2YD",
    "image": "https://m.media-amazon.com/images/I/61lh+nNVCQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 305.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQJVM2YD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D9377PVB",
    "title": "Mala De Viagem Média 23Kg Polipropileno 4 Rodas Duplas 360 Fibra Rígida Tamanho M Leve Resistente Para Despachar (PRETO, médio)",
    "source_url": "https://www.amazon.com.br/dp/B0D9377PVB",
    "image": "https://m.media-amazon.com/images/I/61tq-aEwcxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 317.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9377PVB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CQXG17RL",
    "title": "soundcore P40i da Anker, Fone de Ouvido Bluetooth 5.3 ANC Adaptativo, 60H | 6 Mics, Graves Poderosos, Estojo com Suporte, Resistência à Água, IPX5, Carregamento Sem Fio, Fone de Ouvido Sem Fio TWS",
    "source_url": "https://www.amazon.com.br/dp/B0CQXG17RL",
    "image": "https://m.media-amazon.com/images/I/515dyo5JHjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 318.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQXG17RL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "6555321806",
    "title": "Box Harry Potter Premium Vermelho (7 Livros em capa dura)",
    "source_url": "https://www.amazon.com.br/dp/6555321806",
    "image": "https://m.media-amazon.com/images/I/61UQDAOBVWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.5,
    "affiliate_url": "https://www.amazon.com.br/dp/6555321806?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H9DJTCNF",
    "title": "VEDO Toca-Discos Retro, Bluetooth 5.4, com Alto-Falantes, RPM 33/45 / 78, Conversor AUX, Entradas AUX, RCA e LP, Design Leve e Alça Portátil, Madeira Elegante, Escolha dos Amantes da Música, Preto",
    "source_url": "https://www.amazon.com.br/dp/B0H9DJTCNF",
    "image": "https://m.media-amazon.com/images/I/61oHUKXjTGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 333.01,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H9DJTCNF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H6FG8TQ2",
    "title": "Ximodot Monitor portátil de 15,6 polegadas, Conectividade USB-C HDMI Full HD 1080P e alto-falantes integrados, Monitor gamer presentes para meninos Preto-2",
    "source_url": "https://www.amazon.com.br/dp/B0H6FG8TQ2",
    "image": "https://m.media-amazon.com/images/I/71pMEq3nSDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 333.92,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FG8TQ2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D8JJRCJN",
    "title": "GameSir G8 Plus Bluetooth Mobile Game Controller for Switch & iOS & Android & Tablets, Wireless Gamepad with Hall Effect Joysticks/Hall Trigger, Play Minecraft, Genshin Impact, Call of Duty Mobile",
    "source_url": "https://www.amazon.com.br/dp/B0D8JJRCJN",
    "image": "https://m.media-amazon.com/images/I/717de+4D0kL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8JJRCJN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FYNDSWJR",
    "title": "Cadeira Gamer Ergonômica com Estrutura Reforçada, Reclinação 90°-150°, Apoio de Braço Sincronizado e Suporte Lombar Ajustável – Conforto para Jogos e Home Office",
    "source_url": "https://www.amazon.com.br/dp/B0FYNDSWJR",
    "image": "https://m.media-amazon.com/images/I/71id2uujpsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 342.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FYNDSWJR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D98VXWXB",
    "title": "Philips Walita Fritadeira Airfryer Série 1000 XL 6,2L, Preta, 220V | Até 90% Menos Óleo – tecnologia RapidAir, 12 modos de preparo e controle analógico (NA130/09)",
    "source_url": "https://www.amazon.com.br/dp/B0D98VXWXB",
    "image": "https://m.media-amazon.com/images/I/510Uj5C7LdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 348.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98VXWXB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FMKQ8ZJQ",
    "title": "Abajur Vintage Luminária de Mesa Estilo Banqueiro Inglês Verde Clássico para Sala Escritório",
    "source_url": "https://www.amazon.com.br/dp/B0FMKQ8ZJQ",
    "image": "https://m.media-amazon.com/images/I/51S9I+DhxcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMKQ8ZJQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FFMKXNMG",
    "title": "Headset Gamer Sem Fio Logitech G321, LIGHTSPEED, Bluetooth, Confortável, microfone 16 kHz, bateria de mais de 20 horas de duração. Compatível com PC, PS4, PS5, Nintendo Switch, Smartphone - Branco",
    "source_url": "https://www.amazon.com.br/dp/B0FFMKXNMG",
    "image": "https://m.media-amazon.com/images/I/71sCfhPJSjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFMKXNMG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FWC8VXY5",
    "title": "Colchão de Ar Queen Size Premium, Inflável Portátil com Bomba de Lítio Embutida, Cama de Ar para Camping e Casa 203 * 152 * 46 cm (Casal)",
    "source_url": "https://www.amazon.com.br/dp/B0FWC8VXY5",
    "image": "https://m.media-amazon.com/images/I/61ggNLldiiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 351.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWC8VXY5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GKJ9T5W8",
    "title": "Carrinho de Passeio Infantil Quadriciclo Wheels Maral Motoquinha com Pedal Empurrador e Buzina",
    "source_url": "https://www.amazon.com.br/dp/B0GKJ9T5W8",
    "image": "https://m.media-amazon.com/images/I/51EsCsmJLoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKJ9T5W8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0C6X3DT56",
    "title": "TakTark Babá Eletrônica Câmera, 4.3\" Monitor de Bebe, Sem Wi-Fi, 2 Way Audio, Visão Nocturna, Zoom Digital, Economia de energia VOX, Temperatura ambiente, Ideal para Pais Novos",
    "source_url": "https://www.amazon.com.br/dp/B0C6X3DT56",
    "image": "https://m.media-amazon.com/images/I/61AuLDm53JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 369.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6X3DT56?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D4X69TXR",
    "title": "Quadro Proteção Carregador Veículo Elétrico 220V 8kW 40A CLAMPER Mobi Box C CP IP65 DPS DR Disjuntor Cinza",
    "source_url": "https://www.amazon.com.br/dp/B0D4X69TXR",
    "image": "https://m.media-amazon.com/images/I/51PyU7-NRZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 370.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D4X69TXR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CJTYM3FH",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0CJTYM3FH",
    "image": "https://m.media-amazon.com/images/I/71FrXc9T1SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 372.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJTYM3FH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CDR1SKHR",
    "title": "Jogo de Panelas Tramontina Turim em Alumínio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 10 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0CDR1SKHR",
    "image": "https://m.media-amazon.com/images/I/61AjgTFEaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CDR1SKHR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DZSSGJHK",
    "title": "Bettdow Capa com Teclado e trackpad para iPad 10ª Geração 10.9\" Polegadas, iPad (A16) 11th Generation 11 Inch 2025; modelos A2696,A2757,A2777,A3354,A3355 e A3356 com Auto Hibernação(Branco)",
    "source_url": "https://www.amazon.com.br/dp/B0DZSSGJHK",
    "image": "https://m.media-amazon.com/images/I/619SrSUE8eL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZSSGJHK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CGR56CN4",
    "title": "Cadeira de escritório presidente, cadeira de home office com apoio para os pés e encosto ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CGR56CN4",
    "image": "https://m.media-amazon.com/images/I/71+UV1-34zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 389.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGR56CN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D8QJRBV3",
    "title": "JBL, Fone de Ouvido Com Fio, Quantum 360 Wireless, Headset Gamer, Over Ear, Microfone Removível - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0D8QJRBV3",
    "image": "https://m.media-amazon.com/images/I/619cYdY-PkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 393.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8QJRBV3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CSD46QVZ",
    "title": "Cadeira De Escritório, Cadeira De Com Apoio Para Os Pés E Encosto Ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CSD46QVZ",
    "image": "https://m.media-amazon.com/images/I/61hRkrlMDUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSD46QVZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FMYW4C7J",
    "title": "LEGO Icons O Senhor dos Anéis: Capacete do Sauron 11373 (538 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0FMYW4C7J",
    "image": "https://m.media-amazon.com/images/I/815SVRX1oPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMYW4C7J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B08R93TVRG",
    "title": "Fritadeira Philco Air Fryer Oven 12L PFR2200P - 127V",
    "source_url": "https://www.amazon.com.br/dp/B08R93TVRG",
    "image": "https://m.media-amazon.com/images/I/612gXC9waVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08R93TVRG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B087ZP3JXP",
    "title": "Panela de Pressão com 4,5 Litros em Inox – Tramontina",
    "source_url": "https://www.amazon.com.br/dp/B087ZP3JXP",
    "image": "https://m.media-amazon.com/images/I/41PrXgtEJLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 406.82,
    "affiliate_url": "https://www.amazon.com.br/dp/B087ZP3JXP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D78RX8Y1",
    "title": "Cadeira Gamer Python Fly em tecido, respirável e ecológica, ângulo ajustável (Cinza Escuro)",
    "source_url": "https://www.amazon.com.br/dp/B0D78RX8Y1",
    "image": "https://m.media-amazon.com/images/I/71CXvormWyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 413.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D78RX8Y1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CGY57KKM",
    "title": "LEGO Set Icons 10330 McLaren MP4/4 e Ayrton Senna 693 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGY57KKM",
    "image": "https://m.media-amazon.com/images/I/81JnCaFLWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 415.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGY57KKM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D6DT84JD",
    "title": "Bettdow Monitor Portatil 15,6'', FHD 1080P Monitor Portátil Conectado Com USB C Dupla/HDMI, IPS Extensor De Tela para Notebook com VESA e Funda Inteligente magnético, Plug and Play",
    "source_url": "https://www.amazon.com.br/dp/B0D6DT84JD",
    "image": "https://m.media-amazon.com/images/I/71SfTDj9NmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 424.14,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D6DT84JD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FG3258FD",
    "title": "Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Áudio Bidirecional, Night Vision, Zoom Digital, Economia de energia VOX, Canção de Ninar, Temperatura Ambiente, Monitor de Bebe para Pais Novos",
    "source_url": "https://www.amazon.com.br/dp/B0FG3258FD",
    "image": "https://m.media-amazon.com/images/I/61As-rH6JLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 427.83,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FG3258FD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G16PK5MT",
    "title": "Bicicleta Ergométrica Bike Spinning – Bike Treino em Casa, Academia, Exercícios Cardio e Emagrecimento, Design Confortável e Ajustável, Vertical Silenciosa +100kg",
    "source_url": "https://www.amazon.com.br/dp/B0G16PK5MT",
    "image": "https://m.media-amazon.com/images/I/61P50+VyHsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 434.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G16PK5MT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07B9JYPRT",
    "title": "Jogo de Panelas Fundo Triplo com Tampa Plana 5 Peças, Tramontina, 65400010, Inox",
    "source_url": "https://www.amazon.com.br/dp/B07B9JYPRT",
    "image": "https://m.media-amazon.com/images/I/51osMgJYKPS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 475.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B07B9JYPRT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CRT6HQ82",
    "title": "soundcore Sport X20 da Anker, Fone de Ouvido Bluetooth 5.3 Sem Fio, TWS",
    "source_url": "https://www.amazon.com.br/dp/B0CRT6HQ82",
    "image": "https://m.media-amazon.com/images/I/51RT9s0ObML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 482.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRT6HQ82?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FGPTFBGH",
    "title": "Inversor de Tensão Veicular 12V para 110V 4000W - Conversor de Energia Portátil com Onda Senoidal Modificada, Proteção Multicircuito e Saídas AC/DC para Carros, Barcos e Emergências",
    "source_url": "https://www.amazon.com.br/dp/B0FGPTFBGH",
    "image": "https://m.media-amazon.com/images/I/61lUekshvVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 487.31,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGPTFBGH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DJHBP1WH",
    "title": "American Tourister Mala de Viagem Curio Rosa Pequena",
    "source_url": "https://www.amazon.com.br/dp/B0DJHBP1WH",
    "image": "https://m.media-amazon.com/images/I/41dHh1gS77L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 489.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJHBP1WH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D18VHGHH",
    "title": "Cuba Gourmet para Cozinha Aço Inox 304 50x40cm com Torneira Monocomando, Tábua de Corte, Cesto Escorredor, Dispenser e Válvula Kit Completo",
    "source_url": "https://www.amazon.com.br/dp/B0D18VHGHH",
    "image": "https://m.media-amazon.com/images/I/61YyOqjjzzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 493.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D18VHGHH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GZ4ZTDPX",
    "title": "Sunny, Patrulha Canina, Playset Vulcão, Luz e Som, Dino Movie | Playset Vulcão com Luz e Som, Bonecos e Carrinho Inclusos, Patrulha Canina",
    "source_url": "https://www.amazon.com.br/dp/B0GZ4ZTDPX",
    "image": "https://m.media-amazon.com/images/I/61nau6WaCvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 493.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZ4ZTDPX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07Q6KWDZR",
    "title": "Centrífuga de Roupas Mueller Fit 15Kg de roupa molhada Branca 127V",
    "source_url": "https://www.amazon.com.br/dp/B07Q6KWDZR",
    "image": "https://m.media-amazon.com/images/I/51m-b-BBN4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 502.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q6KWDZR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GYQJ798V",
    "title": "Cadeira de Jantar Com Encosto Curvo Base em Madeira Maciça Detalhe no Braço Couríssimo Marrom - Emma",
    "source_url": "https://www.amazon.com.br/dp/B0GYQJ798V",
    "image": "https://m.media-amazon.com/images/I/51n8Jzhe1tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 503.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQJ798V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H5BQ4PHG",
    "title": "VEDO Toca-Discos Retro Bluetooth, 2 Alto-Falantes Estéreo, 3 Velocidades (33/45/78 RPM) Para Vinil, Conversor LP/MP3 via USB, Saída RCA, Design Retrô Em Madeira Preta, Escolha Amantes Música",
    "source_url": "https://www.amazon.com.br/dp/B0H5BQ4PHG",
    "image": "https://m.media-amazon.com/images/I/61g4DiBHaIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 513.56,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5BQ4PHG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0C6YD7JCN",
    "title": "Casa Telhado Vermelho com Luzes e Sotão Secreto",
    "source_url": "https://www.amazon.com.br/dp/B0C6YD7JCN",
    "image": "https://m.media-amazon.com/images/I/81W80plu+GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 514.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6YD7JCN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H6B9NV2G",
    "title": "NOVANTE Monitor Portátil Duplo 15.6\" FHD IPS USB-C HDMI para Notebook | Monitor duplo 15.6\" FHD IPS, 100% sRGB, baixa luz azul, USB-C/HDMI, expansão lateral, compatível universal, ajustável",
    "source_url": "https://www.amazon.com.br/dp/B0H6B9NV2G",
    "image": "https://m.media-amazon.com/images/I/811weBwtKiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 541.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6B9NV2G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D38737LH",
    "title": "Sestini Mala Bordo Royale, Bege",
    "source_url": "https://www.amazon.com.br/dp/B0D38737LH",
    "image": "https://m.media-amazon.com/images/I/51Ddn4-AxuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 549.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D38737LH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GCCN9KCQ",
    "title": "Cadeira de Escritório Ergonômica para Home Office com Certificação NR-17, Apoio Lombar Ajustável em 3 Seções, Braços 3D, Assento Confortável e Encosto em Tela Respirável (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0GCCN9KCQ",
    "image": "https://m.media-amazon.com/images/I/81oou1PL7iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 549.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GCCN9KCQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0C2Z63CMP",
    "title": "TakTark Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Sem Wifi, Panorâmica Inclinação, Áudio Bidirecional, Night Vision, Zoom Digital, Detecção De Som Vox, Ideal Para Novos Pais",
    "source_url": "https://www.amazon.com.br/dp/B0C2Z63CMP",
    "image": "https://m.media-amazon.com/images/I/612CGjAtCxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2Z63CMP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B076JM24NQ",
    "title": "Panela Pressão Aço inox 3, 0L Solar, Tramontina, 62511223, Polida, 22 cm",
    "source_url": "https://www.amazon.com.br/dp/B076JM24NQ",
    "image": "https://m.media-amazon.com/images/I/51LQmCKmKyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 569.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B076JM24NQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07MGH8TS7",
    "title": "Caixa de Som Bluetooth Ultimate Ears BOOM 3 Portátil e À Prova D´Água - Até 15 horas de Bateria; 2 anos de Garantia - Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B07MGH8TS7",
    "image": "https://m.media-amazon.com/images/I/81GWkMAypHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 584.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07MGH8TS7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H6FMBS39",
    "title": "Basike Caixa de Som Estéreo Sem Fio, Boombox 200W, Bluetooth, cor camuflada | Bateria 18000mAh, IPX6 À Prova de Água, Luz RGB, Equalizador, TWS, Graves Reforçados, Áudio Lossless, Festa, Piscina",
    "source_url": "https://www.amazon.com.br/dp/B0H6FMBS39",
    "image": "https://m.media-amazon.com/images/I/71s7iYLQYoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 626.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FMBS39?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2T2L38F",
    "title": "LEGO Ideas Peanuts: A Casinha do Snoopy 21368",
    "source_url": "https://www.amazon.com.br/dp/B0G2T2L38F",
    "image": "https://m.media-amazon.com/images/I/81jFpBaU7sL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 629.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T2L38F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0HC3H4MHP",
    "title": "VEDO Toca-Discos, com BT 5.4, Toca-Discos De 2 Velocidades (33/45RPM), Saída RCA,Madeira e Adaptador 12V Incluso, CD, Toca-Fitas, RáDio Fm, Streaming Sem Fio, Presente Colecionável Perfeito, 110V/220V",
    "source_url": "https://www.amazon.com.br/dp/B0HC3H4MHP",
    "image": "https://m.media-amazon.com/images/I/61w24oR1HmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 630.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HC3H4MHP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FFBJBS1Q",
    "title": "Micro-ondas Philco 33L Preto Acabamento Inox PMO38T 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FFBJBS1Q",
    "image": "https://m.media-amazon.com/images/I/61oquWwtqEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 660.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFBJBS1Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GC5HPQHX",
    "title": "Cadeira de Escritório Ergonômica Testada conforme NR-17, Duplo Apoio Lombar, Assento Deslizante com Ajuste de Profundidade 5cm, Apoio para Pés Retrátil, Reclinável até 135° para Home Office (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0GC5HPQHX",
    "image": "https://m.media-amazon.com/images/I/81GwvztsDBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 664.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GC5HPQHX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DD1M9WJT",
    "title": "Philips Walita Fritadeira Airfryer Forno Série 5000, 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DD1M9WJT",
    "image": "https://m.media-amazon.com/images/I/61a0AdTUvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 688.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD1M9WJT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DF5CSTZ1",
    "title": "Gabinete Lian Li A3 Micro ATX Wood Edition Preto A3-MATX-WD | A3-MATX-WD",
    "source_url": "https://www.amazon.com.br/dp/B0DF5CSTZ1",
    "image": "https://m.media-amazon.com/images/I/712mtAGWfaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 694.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DF5CSTZ1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BXMV4ZXW",
    "title": "Cadeira para Auto 0-36Kg Isofix Litet All Stages Fix 2.0 Preta e Cinza - BB452",
    "source_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW",
    "image": "https://m.media-amazon.com/images/I/615AvAaOM8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 698.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B075X3W9L8",
    "title": "Nutribullet 900w De Potência Champagne Com 9 Itens - 5 Em 1 - Liquidificador, Multiprocessador, Blender, Mixer E Moedor 127v Nutribullet Champagne 110v",
    "source_url": "https://www.amazon.com.br/dp/B075X3W9L8",
    "image": "https://m.media-amazon.com/images/I/61aQO5nmFJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 712.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B075X3W9L8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2SY1KCV",
    "title": "LEGO Marvel Confronto Épico: Homem-Aranha vs. Hulk 76350",
    "source_url": "https://www.amazon.com.br/dp/B0G2SY1KCV",
    "image": "https://m.media-amazon.com/images/I/81rRNOFI4WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 719.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2SY1KCV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0HFW9W9YM",
    "title": "Tablet Xixaomiro S11 Pad 10.1\" Android 15, 128GB ROM + 12GB RAM, Tela 120Hz, Octa-Core, Câmera 13MP + 5MP, Bateria 8000mAh, Kit com Teclado, Mouse e Caneta Stylus para Trabalho e Estudos (Cinza claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9W9YM",
    "image": "https://m.media-amazon.com/images/I/71F9iYxWjNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9W9YM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H7RP28R7",
    "title": "Esteira Ergométrica Elétrica Dobrável, Ajuste de Inclinação em 3 Níveis | 2.5hp, Com Amortecimento Duplo, Design Antiderrapante, Tela LED, Controle Remoto, 45dB, 120kg, 10km/h",
    "source_url": "https://www.amazon.com.br/dp/B0H7RP28R7",
    "image": "https://m.media-amazon.com/images/I/7192ufekH9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 769.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H7RP28R7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GZ4SBD1W",
    "title": "Sunny, Playset QUARTEL-GENERAL Movel Dino Movie, Patrulha Canina",
    "source_url": "https://www.amazon.com.br/dp/B0GZ4SBD1W",
    "image": "https://m.media-amazon.com/images/I/71TBokVLwDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZ4SBD1W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BD9HNJMH",
    "title": "Máquina de Costura SINGER M2505 127V | 9 Pontos, 70 Aplicações | Luz em LED, Alavanca de Retrocesso | Ideal para Artesanato, Costura Criativa, Projetos Domésticos | Acessórios Inclusos",
    "source_url": "https://www.amazon.com.br/dp/B0BD9HNJMH",
    "image": "https://m.media-amazon.com/images/I/51apK7IPaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BD9HNJMH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H874SRCJ",
    "title": "MYBEEM 6 Estante Giratória Livros, 193 * 44cm, Estante Giratoria Livros, Rotação 360°Suave, Pouca Ocupação de Espaço, Módulos Flexíveis, para Escritório, Quarto e Ambientes",
    "source_url": "https://www.amazon.com.br/dp/B0H874SRCJ",
    "image": "https://m.media-amazon.com/images/I/71tcwgX4psL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 826.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H874SRCJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FW9FV2BC",
    "title": "Dream Fitness Bicicleta Spinning Ergométrica Black Edition 13.0",
    "source_url": "https://www.amazon.com.br/dp/B0FW9FV2BC",
    "image": "https://m.media-amazon.com/images/I/51Rr6mTl0wL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FW9FV2BC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2T4HQ1L",
    "title": "LEGO Icons Bicicleta de Estrada 11380",
    "source_url": "https://www.amazon.com.br/dp/B0G2T4HQ1L",
    "image": "https://m.media-amazon.com/images/I/81CujJXTwHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2T4HQ1L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H1T7241Z",
    "title": "Barbie Conjunto de Brinquedo Casa Com Escorregador",
    "source_url": "https://www.amazon.com.br/dp/B0H1T7241Z",
    "image": "https://m.media-amazon.com/images/I/61VhNgOsi8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1T7241Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0HFW9ZB26",
    "title": "Xixaomiro Tablet Android 15 Pad 10.1\", 256GB ROM + 12GB RAM, Câmera 13MP + 5MP, Bateria 8000mAh – Kit Completo com Caneta, Mouse, Teclado e Capa, Adequado para Estudo, Trabalho e Lazer (Laranja claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9ZB26",
    "image": "https://m.media-amazon.com/images/I/712dIQhOzHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 915.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9ZB26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B07XM8KGBB",
    "title": "ThunderX3, Cadeira Ergonomic, YAMA1BK, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07XM8KGBB",
    "image": "https://m.media-amazon.com/images/I/51W9FnH1Q1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1017.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XM8KGBB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DJPYGBYW",
    "title": "Nutribullet Ultra 1200w, Liquidificador Individual e Extrator de Nutrientes, Design e Potência - 127v",
    "source_url": "https://www.amazon.com.br/dp/B0DJPYGBYW",
    "image": "https://m.media-amazon.com/images/I/51w-SGtu6hL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1028.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJPYGBYW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CP46J3FJ",
    "title": "Ariete 4632, Fritadeira 2 em 1, Air Fryer e Forno Elétrico Vintage Verde, Capacidade de 16 Litros, 1400 Wats, Porta Transparente - 220V",
    "source_url": "https://www.amazon.com.br/dp/B0CP46J3FJ",
    "image": "https://m.media-amazon.com/images/I/819pyOGQy8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1029.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CP46J3FJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09MZKNRW3",
    "title": "Desumidificador Ar Ambiente Elétrico Portátil Pure Ion Antimofo Max Bivolt - Reservatório de 3 Litros - Relaxmedic",
    "source_url": "https://www.amazon.com.br/dp/B09MZKNRW3",
    "image": "https://m.media-amazon.com/images/I/61NIkKGVw3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1048.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MZKNRW3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BQ7KJ9NV",
    "title": "Monitor UHD Samsung 32\", 4K, HDMI, Display Port, Freesync, Preto, Série UJ59",
    "source_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV",
    "image": "https://m.media-amazon.com/images/I/91XfEXGz9UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1184.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G2SYSY3R",
    "title": "LEGO Ideas Foguete Lunar do Tintin ; Kit de Construção 21367",
    "source_url": "https://www.amazon.com.br/dp/B0G2SYSY3R",
    "image": "https://m.media-amazon.com/images/I/71u37pJhLUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1259.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2SYSY3R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DCZ9PRCP",
    "title": "Amazfit T-Rex 3 Relógio Inteligente Robusto/Militar 48mm, GPS, Mapas Offline, Longa Vida da Bateria,328 Pés Resistente à Água, 170 Modos de Fitness/Desporto (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DCZ9PRCP",
    "image": "https://m.media-amazon.com/images/I/71GtgMbKvKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1291.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DCZ9PRCP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GJFS2Y3W",
    "title": "Freezer Horizontal 142L Inverter Bivolt Branco Midea",
    "source_url": "https://www.amazon.com.br/dp/B0GJFS2Y3W",
    "image": "https://m.media-amazon.com/images/I/41IAQgFLJQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1398.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJFS2Y3W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B09S5L5G2F",
    "title": "Máquina Overlock Singer S0235 Inclui Acessórios (2 Agulhas, Pinça, Chave de Fenda),220V | 4 Linhas, 1300 Pontos/Minuto, Luz LED, Passador de linha manual | Design Compacto e Portátil",
    "source_url": "https://www.amazon.com.br/dp/B09S5L5G2F",
    "image": "https://m.media-amazon.com/images/I/71KTHBFpziL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S5L5G2F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B017RBNOI4",
    "title": "Volante e Pedais Logitech G29 Driving Force com Force Feedback para PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B017RBNOI4",
    "image": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B017RBNOI4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DJDDY334",
    "title": "LEGO Speed Champions 66802",
    "source_url": "https://www.amazon.com.br/dp/B0DJDDY334",
    "image": "https://m.media-amazon.com/images/I/813nPY+CHkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1648.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJDDY334?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FN4BK3V7",
    "title": "Tablet Lenovo Idea Tab 11\" 90Hz - Octa-Core, 4GB RAM, 128GB, Wi-Fi 5, Android 15, Caneta e Capa",
    "source_url": "https://www.amazon.com.br/dp/B0FN4BK3V7",
    "image": "https://m.media-amazon.com/images/I/61tVQTdW0nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1649.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FN4BK3V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GLSLLGZL",
    "title": "Smartphone Motorola Moto G77 5g - 256GB 24GB (8GB RAM + 16GB RAM Boost) camera 108MP Ultra-Pixel, tela 1.5k extreme Amoled 120hz, ultrarresistente - Marrom",
    "source_url": "https://www.amazon.com.br/dp/B0GLSLLGZL",
    "image": "https://m.media-amazon.com/images/I/61zXvb3EmiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLSLLGZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GQC12MYK",
    "title": "Ar-Condicionado Split 9.000 BTUs AI AirVolution Frio Midea | AI , inverter",
    "source_url": "https://www.amazon.com.br/dp/B0GQC12MYK",
    "image": "https://m.media-amazon.com/images/I/314T-z8Hm7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1798.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQC12MYK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GVT7QXF7",
    "title": "Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", NFC, Recursos AI, Até 6 Atualizações de Android e Segurança (Lilás)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT7QXF7",
    "image": "https://m.media-amazon.com/images/I/51VZg1VWMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1898.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT7QXF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FCSP9NS4",
    "title": "Ar Condicionado 9000 Btus Split Hi Wall Inverter Midea Frio Ai Ecomaster 220v",
    "source_url": "https://www.amazon.com.br/dp/B0FCSP9NS4",
    "image": "https://m.media-amazon.com/images/I/51XHzWTiUPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1918.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCSP9NS4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DFRSDH9P",
    "title": "PHILIPS, Smart TV, 50'' 4K UHD, 50PUG7019/78, Google TV, Comando de Voz, HDR",
    "source_url": "https://www.amazon.com.br/dp/B0DFRSDH9P",
    "image": "https://m.media-amazon.com/images/I/615UmEOpLML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DFRSDH9P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0FXMX7SGL",
    "title": "Logitech G, G29 SE Driving Force, Combo Volante Pedais e Câmbio, USB, PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B0FXMX7SGL",
    "image": "https://m.media-amazon.com/images/I/71FpVBlTvyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXMX7SGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0CFRZXVVR",
    "title": "Cadeira Ergonômica XTC Mesh Preta ThunderX3",
    "source_url": "https://www.amazon.com.br/dp/B0CFRZXVVR",
    "image": "https://m.media-amazon.com/images/I/71z3VNcWNvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFRZXVVR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0G6Z6PTJG",
    "title": "eufy C20 Omni Robô Aspirador e Passa Pano,Autolimpante,Navegação Laser,220V",
    "source_url": "https://www.amazon.com.br/dp/B0G6Z6PTJG",
    "image": "https://m.media-amazon.com/images/I/71L9NltLIxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3274.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6Z6PTJG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0F8KVQZQX",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Branco",
    "source_url": "https://www.amazon.com.br/dp/B0F8KVQZQX",
    "image": "https://m.media-amazon.com/images/I/61Ik2Dj2zTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3298.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8KVQZQX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BZ15NC13",
    "title": "Samsung Lava e Seca 11kg Branco WD11M4473PW - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ15NC13",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15NC13?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ129NTZ",
    "image": "https://m.media-amazon.com/images/I/516qpWn6k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0F6CX2QK4",
    "title": "Notebook HP 256R G9 Intel Core i5 13º Geração. Memoria RAM 16GB. SSD 256GB. Tela de 15,6\" LCD. Windows 11 - Home SL - Cinza Escuro. Bivolt. (BQ9L2AT#AK4)",
    "source_url": "https://www.amazon.com.br/dp/B0F6CX2QK4",
    "image": "https://m.media-amazon.com/images/I/71rq8UFkcvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3967.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6CX2QK4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0D9P8LCQG",
    "title": "Geladeira Electrolux Frost Free Inverter 480L Efficient AutoSense 3 Portas Branca (IM7) (220, Volts)",
    "source_url": "https://www.amazon.com.br/dp/B0D9P8LCQG",
    "image": "https://m.media-amazon.com/images/I/31RUotVVkSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4349.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9P8LCQG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "source_url": "https://www.amazon.com.br/dp/B0F5X4NPK2",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GKQNGV23",
    "title": "Celular Samsung Galaxy S26 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.3\" - Azul",
    "source_url": "https://www.amazon.com.br/dp/B0GKQNGV23",
    "image": "https://m.media-amazon.com/images/I/61eUOIh87pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4775.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQNGV23?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0DPY3469H",
    "title": "Philips Walita Cafeteira Espresso Superautomática Série 5500, 220V | Café Fresco na Hora – espresso e bebidas cremosas com preparo automático em casa (EP5547/93)",
    "source_url": "https://www.amazon.com.br/dp/B0DPY3469H",
    "image": "https://m.media-amazon.com/images/I/71Q8zNldpZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5398.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPY3469H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0H2NGMNB8",
    "title": "Soundbar Samsung HW-Q990H, com 11.1.4 canais, Dolby Atmos® sem fio, Sincronia Sonora e Alexa integrada",
    "source_url": "https://www.amazon.com.br/dp/B0H2NGMNB8",
    "image": "https://m.media-amazon.com/images/I/31oTlWArj1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NGMNB8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GKQTTCMM",
    "title": "Celular Samsung Galaxy S26 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9\" - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTTCMM",
    "image": "https://m.media-amazon.com/images/I/61tUK0-AiTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7690.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTTCMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  },
  {
    "asin": "B0GYQ6JLLN",
    "title": "Smart TV TCL 85 Polegadas QD-Mini LED 4K A400M WiFi Bluetooth Google TV HDR10+ 144 Hz VRR 85A400M",
    "source_url": "https://www.amazon.com.br/dp/B0GYQ6JLLN",
    "image": "https://m.media-amazon.com/images/I/81thYHM7SlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8599.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQ6JLLN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-23T12:02:47.000Z"
  }
];
