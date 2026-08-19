const PRODUCTS = [
  {
    "asin": "6559801365",
    "title": "O Pequeno Príncipe – Edição de luxo com capa dura almofadada e aquarelas originais do autor",
    "image": "https://m.media-amazon.com/images/I/81QluJ4QXyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 13.88,
    "affiliate_url": "https://www.amazon.com.br/dp/6559801365?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07W6B8LCZ",
    "title": "Protetor Díário Intimus® Tecnologia Antibacteriana - 80 un",
    "image": "https://m.media-amazon.com/images/I/61wj2Rc59YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 15.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W6B8LCZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GVZXW9N2",
    "title": "Cabo USB-C para USB-C 2m 60W, Nylon Trançado Reforçado, Carga e Dados | Compatível com iPhone 15/16, Samsung Galaxy, Xiaomi, iPad, MacBook, notebook e tablet; PD 3.0, USB 2.0 e até 480 Mbps.",
    "image": "https://m.media-amazon.com/images/I/61er28e49TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 18.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVZXW9N2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B074LTNDPQ",
    "title": "Lola Cosmetics - Morte Subita - Shampoo hidratante para cabelos secos e danificados que foi quimicamente tratado vegano, livre de crueldade, sem parabenos, sem sulfatos, 250 ml",
    "image": "https://m.media-amazon.com/images/I/714XCIlHoNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LTNDPQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09GHN14FP",
    "title": "Danos Vorazes Óleo Reparador 50ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71AMqfOXdAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GHN14FP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GVVS88HL",
    "title": "Esfoliante Corporal Maria Baunilha - Hidratação Intensa e Pele Macia (Merengue de Morango)",
    "image": "https://m.media-amazon.com/images/I/61GtbaVNz8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVVS88HL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07DPDT13Y",
    "title": "Desodorante Natural e Vegano com óleos essenciais de Melaleuca e Toranja, 24h de proteção, Sem Alumínio, Sem Parabeno, Boni Natural, Transparente",
    "image": "https://m.media-amazon.com/images/I/41MaQ7Ajv3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DPDT13Y?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F9Z112G5",
    "title": "BONI NATURAL - Desodorante Spray Natural e Vegano com Óleos Essenciais de Melaleuca e Lavanda, 24 horas de proteção, Sem Alumínio, Sem Parabenos, Sem Triclosan, 120ml",
    "image": "https://m.media-amazon.com/images/I/71qFgyP7XjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9Z112G5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09LD48ZZ4",
    "title": "Caixa de Pilha AAA com 40 unidades Elgin Palito - Tubo, Zinco",
    "image": "https://m.media-amazon.com/images/I/51wlcSTwZsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B09LD48ZZ4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B074LX2C86",
    "title": "Meu Cacho Minha Vida Shampoo 500ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71sRs80kVLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LX2C86?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B087S3HZ98",
    "title": "Inoar, Fluido Termoativado Inoar Liso Mágico, Efeito Liso Instantâneo, Proteção Térmica, Antifrizz, Sem Enxágue - 200ml",
    "image": "https://m.media-amazon.com/images/I/515qHFuWjuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B087S3HZ98?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GY9NXWR7",
    "title": "Creme Pomada de Assadura Óleo Girassol AGE 120g Maxi Baby",
    "image": "https://m.media-amazon.com/images/I/51ghO7Hct6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GY9NXWR7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07C62SYMJ",
    "title": "Inoar, Cicatrifios, Shampoo Reconstrutor, Hidratação Profunda e Redução de Volume, Pantenol, Creatina Vegetal e Rejucomplex®, Vegano – Para Cabelos Danificados ou Quebradiços, 1L",
    "image": "https://m.media-amazon.com/images/I/51sKfWhWh0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07C62SYMJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FT5LC4XR",
    "title": "Limppano Lava Roupas Líquido ODD Intense Repair 3L",
    "image": "https://m.media-amazon.com/images/I/51qWF1kopWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FT5LC4XR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B074LVYZDJ",
    "title": "Lola From Rio - Meu Cacho Minha Vida - Creme de Pentear: brilho, maciez e definição. Cabelos Cacheados. 500ml",
    "image": "https://m.media-amazon.com/images/I/51omKxWOC3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LVYZDJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B077BY6564",
    "title": "FOREVER LISS ANTI-EMBORRACHAMENTO SOS 300ML",
    "image": "https://m.media-amazon.com/images/I/5165leZpA6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY6564?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DKQZVF6V",
    "title": "LYOR - Pote Hermético de Vidro com Silicone e Clipe em Metal Vintage Preto 1,6L - Organização de Alimentos - Porta Mantimentos com Tampa Hermético",
    "image": "https://m.media-amazon.com/images/I/51KBtSl-zHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKQZVF6V?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CQ1QVJ3L",
    "title": "Colgate Luminous White Carvão Ativado Creme Dental Clareador, 4x70g",
    "image": "https://m.media-amazon.com/images/I/8193hRZ3ttL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQ1QVJ3L?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B074LQXGM7",
    "title": "Meu Cacho Minha Vida Condicionador 500g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/51yaUGrtIOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LQXGM7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0BYBFXFKH",
    "title": "Inoar, Meu Cacho, Meu Crush – Creme de Pentear, Define Cachos, Hidrata e Controla o Frizz, Com Óleos Naturais e Vitaminas - 500ml",
    "image": "https://m.media-amazon.com/images/I/61688fq+JtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BYBFXFKH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B007KWR1N0",
    "title": "Pentel Lapiseira Técnica Graphgear 500 0.9mm SM/PG529-N",
    "image": "https://m.media-amazon.com/images/I/5197KHMqOmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.44,
    "affiliate_url": "https://www.amazon.com.br/dp/B007KWR1N0?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FWMN1BSZ",
    "title": "BONI NATURAL - Kit Higiene Bucal – Creme Dental Menta e Melaleuca 90g + Enxaguante Bucal Menta e Melaleuca 250ml – Sem Flúor, Sem Triclosan",
    "image": "https://m.media-amazon.com/images/I/61eTExe0wcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWMN1BSZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GSC9LW77",
    "title": "Lola From Rio Shampoo A Fórmula Brilho Lamelar 250 ml",
    "image": "https://m.media-amazon.com/images/I/61+CNRBSMAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSC9LW77?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B06X974F7H",
    "title": "Tio Nacho Shampoo Antiqueda Hidratante Com Henna Egipcia E Geleia Real Para Cabelos Grisalhos, Fortalecimento E Nutrição Profunda Dos Fios 415 Ml 1-Pack",
    "image": "https://m.media-amazon.com/images/I/71VCd0T2G1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B06X974F7H?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07SLGHB35",
    "title": "Meu Cacho Minha Vida Máscara 450g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61xqM0kKJjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B07SLGHB35?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09XFLHJ1S",
    "title": "Danos Vorazes Máscara de Tratamento 450g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61C0iM4H-iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B09XFLHJ1S?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CRZ4TPCM",
    "title": "Plot Twist Nut Butter Cream 480g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/51IBKCZ1f+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRZ4TPCM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CRZG93W9",
    "title": "Plot Twist Guava Cream Hidratante 480g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/51l2bfDQMDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRZG93W9?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07FLKGK54",
    "title": "Tío Nacho Shampoo Engrossador Antiqueda para Cabelos Finos com Geleia Real e Capilgross – Mais Volume, Espessura e Fortalecimento Capilar 415ml",
    "image": "https://m.media-amazon.com/images/I/61BsSrbW36L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 32.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B07FLKGK54?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CZS4V1MT",
    "title": "QUBRA CABEÇA P200 HARRY POTTER - ESPECIAL ALBB",
    "image": "https://m.media-amazon.com/images/I/619+kplJuAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 32.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZS4V1MT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 33.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CGSPL87J",
    "title": "Eudora Niina Secrets Batom Líquido Skinny Matte Vermelho Hibisco 5Ml",
    "image": "https://m.media-amazon.com/images/I/51kQ9-stKjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGSPL87J?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B087TQNGLV",
    "title": "Anasol Protetor Solar Facial FPS 70-60g",
    "image": "https://m.media-amazon.com/images/I/61Ng-kd2feL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B087TQNGLV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08B5GFHZN",
    "title": "Anasol Protetor Solar Facial FPS 70 Clareador - 60 g",
    "image": "https://m.media-amazon.com/images/I/51wZRC7vnPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08B5GFHZN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0HB2CHSZ7",
    "title": "Hub USB-C 3.0 Extensor Adaptador 4 em 1 Multiportas até 5 Gbps - USB 3.0, USB 2.0 - Compatível com Notebook, Macbook, Ipad, Dock Station, Dex, Raspberry - Compacto, Estrutura em Alumínio, Cabo Branco",
    "image": "https://m.media-amazon.com/images/I/71MhIF0DikL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 35.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HB2CHSZ7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CVBHD4B7",
    "title": "EUDORA NIINA SKIN MASCARA LABIAL NOTURNA LIP REPAIR 9g",
    "image": "https://m.media-amazon.com/images/I/51Xzz7YPSSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 36.28,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CVBHD4B7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H1NHRT9D",
    "title": "Combo 10 Kits com 36 Canetas Marcadores Artísticos Dupla Ponta, Tinta à Base de Álcool, Cores Vivas e Misturáveis, Estojo Portátil, Ideal para Ilustrações, Lettering e Colorir 10x36",
    "image": "https://m.media-amazon.com/images/I/71iTopacXuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 36.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1NHRT9D?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GXLBG3DK",
    "title": "Panos de Prato Kit 5 Peças Branco Xadrez Colorido Alta Absorção",
    "image": "https://m.media-amazon.com/images/I/614F6kg7ScL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXLBG3DK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DKVJ1HWB",
    "title": "Lola Cosmetics Kit Cronograma Capilar Be(m) Dita Ghee - 3 Produtos",
    "image": "https://m.media-amazon.com/images/I/71K-GAoX50L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 38.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKVJ1HWB?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FMFXH7RT",
    "title": "Faber-Castell Lápis De Cor Supersoft com 24 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZzxtsCXmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFXH7RT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07XYH874V",
    "title": "Rum Bacardi Carta Blanca 980ml",
    "image": "https://m.media-amazon.com/images/I/61d7pJypApL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XYH874V?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DD2FHQ3P",
    "title": "Vitamina B12 Ativa (metilcobalamina) Longa Duração: 4 Meses de Uso, 120 Cápsulas,Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61-T11tf4dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 44.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD2FHQ3P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09JZTG4BJ",
    "title": "Chupeta Ultra Soft Unitária Branca Philips Avent 0-6M",
    "image": "https://m.media-amazon.com/images/I/51FYftzE13L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 45.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09JZTG4BJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "854223961X",
    "title": "Viver é perigoso: Minha travessia no Rio",
    "image": "https://m.media-amazon.com/images/I/91srC3lX88L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 48.35,
    "affiliate_url": "https://www.amazon.com.br/dp/854223961X?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B076HYZQMW",
    "title": "ELG, PWC-R5, PowerCube, Multiplicador 5 Tomadas, Disjuntor Integrado de 10A, Filtro de Linha com Protetor de Surto, Bivolt, Branco e Verde",
    "image": "https://m.media-amazon.com/images/I/51CsZOBHOoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B076HYZQMW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09CP1MGYY",
    "title": "Ômega 3 Mastigável Sabor Cereja Epa Dha - Certificação Internacional MEG-3 – 120 Cápsulas",
    "image": "https://m.media-amazon.com/images/I/61xyfC8rl-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 50.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B09CP1MGYY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08JQKJFQ4",
    "title": "Kit com 3 Prateleiras Organizador de Cozinha Grande Aço DiCarlo Branco",
    "image": "https://m.media-amazon.com/images/I/710qAlH9-vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 51.75,
    "affiliate_url": "https://www.amazon.com.br/dp/B08JQKJFQ4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H74955C1",
    "title": "Comedouro Interativo Labirinto Para Cães e Gatos em 3 Níveis Giratório e Várias Texturas - A Revolução na Alimentação Controlada",
    "image": "https://m.media-amazon.com/images/I/61YEBe6WGmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H74955C1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GHPGBPSR",
    "title": "Kit Morte Súbita (Shampoo + Condicionador + Spray Reparaçao) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/71ggER1mlqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.81,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHPGBPSR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8537607223",
    "title": "Escute e Aprenda! Escreva Apague ABC com Sons (Escolinha Todolivro)",
    "image": "https://m.media-amazon.com/images/I/61PP5z9UotL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 57.53,
    "affiliate_url": "https://www.amazon.com.br/dp/8537607223?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GHP4NL1J",
    "title": "Kit Rapunzel (Shampoo + Tônico + Milk Spray) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/41OcWO275YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHP4NL1J?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H9RT4JDK",
    "title": "MODUS Garrafa Térmica Infantil 420ml em Aço Inox Parede Dupla Livre de BPA",
    "image": "https://m.media-amazon.com/images/I/61p-0T9l7fL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H9RT4JDK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08FVVH9BC",
    "title": "Creme Preventivo Assaduras Huggies Pele Protegida c/3 de 80g",
    "image": "https://m.media-amazon.com/images/I/619A5eTbmwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08FVVH9BC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6550477638",
    "title": "Inteligência pragmática: A habilidade humana que a IA nunca substituirá - Como transformar objetivos em realidade",
    "image": "https://m.media-amazon.com/images/I/71Islz8MOpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 62.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6550477638?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GSH8HVW7",
    "title": "Kit Eudora Diva Fabulosa (3 Produtos)",
    "image": "https://m.media-amazon.com/images/I/71LQVQe1djL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 62.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSH8HVW7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B074LWHJ2H",
    "title": "Hair Vintage Girl Creme Alisante 850g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/619Y5opifoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LWHJ2H?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G2682GZF",
    "title": "5 Magnésio Treonina 180 Cápsulas, 3 Meses de Uso, Longa Duração, Alto Teor Treonina + 5 tipos de Magnésio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61HHbHcWzlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2682GZF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B077C3YBM3",
    "title": "Difusor, Taiff, Curves 1000013, Preto",
    "image": "https://m.media-amazon.com/images/I/51ZJowgZ+YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.43,
    "affiliate_url": "https://www.amazon.com.br/dp/B077C3YBM3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08N844668",
    "title": "vonixx Shampoo Automotivo Concentrado 1:400 V-floc 3 Litros",
    "image": "https://m.media-amazon.com/images/I/613IR7ZkFTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08N844668?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DKG6QLRS",
    "title": "Lustre Pendente Vidro Globo Jabuticaba Balcão Cozinha Quarto Sala 1 Lâmpada E27 Bivolt (Dourado)",
    "image": "https://m.media-amazon.com/images/I/41Ty6zh1hrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKG6QLRS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H29Q1WPH",
    "title": "Brastoy Blocos de Montar Construção Cubos Magnéticos STEM Brinquedos Infantil (84 Peças Cubos Magnéticos)",
    "image": "https://m.media-amazon.com/images/I/719D+Oj04rL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H29Q1WPH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08WKRYQHN",
    "title": "Cartucho de Tinta HP 667 Colorido Original (3YM78AB) Para Impressora Deskjet 2376, 2776, 6476, 5076, 5276",
    "image": "https://m.media-amazon.com/images/I/71O7EqV7aCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 72.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08WKRYQHN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8535946047",
    "title": "Ensaio sobre a cegueira (Edição de 30 anos)",
    "image": "https://m.media-amazon.com/images/I/81nG+9LiZaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.9,
    "affiliate_url": "https://www.amazon.com.br/dp/8535946047?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08CS1S553",
    "title": "Capa Lenovo para Notebook - Urban Sleeve 15.6\" Cinza | Proteção reforçada com compartimento dedicado para acessórios",
    "image": "https://m.media-amazon.com/images/I/8114RTMYDoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 84.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08CS1S553?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DFMN7LG6",
    "title": "Livro Magnético Crazy Faces Meninas - 65 Peças, Janod",
    "image": "https://m.media-amazon.com/images/I/616YO9aMJgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 88.34,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DFMN7LG6?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CZBM7728",
    "title": "ELG, SHCI603, Câmera interna 1080P Full HD Inteligente Wi-Fi com Botão SOS, Áudio Bidirecional, Visão Noturna e Detecção de Movimentos, Branco",
    "image": "https://m.media-amazon.com/images/I/61exKmRRnDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZBM7728?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FMF4NMLY",
    "title": "Luminária Pendente LED Moderna 3 Anéis 72W, Redonda Embutida, Regulável, 3 Cores de Luz (3000K/4000K/6000K), Altura Ajustável, Design Luxuoso para Sala, Quarto ou Escritório (Preto)",
    "image": "https://m.media-amazon.com/images/I/71HWhRJtW3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMF4NMLY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GXVSPQYD",
    "title": "Rede De Dormir Camping Construção Rápida, Portátil Dobrável Rede de Árvore Acampamento (Laranja C/Mosquiteiro)",
    "image": "https://m.media-amazon.com/images/I/715485DzP6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXVSPQYD?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0BFSNZHSF",
    "title": "Tech T-shirt Gola U Masculino Preto GG",
    "image": "https://m.media-amazon.com/images/I/51ML3MBfGGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFSNZHSF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DSC8C4XH",
    "title": "Fralda Huggies Premium Dermacare XG - 38 Un",
    "image": "https://m.media-amazon.com/images/I/719yVPNSxpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSC8C4XH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0D8RM2D3P",
    "title": "ISDIN Protetor Solar Corporal Transparent Spray FPS 30-250ml",
    "image": "https://m.media-amazon.com/images/I/31UvH42XRpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 90.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8RM2D3P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FDW1LPX8",
    "title": "Mochila Grande para Notebook 17.3 Masculina Feminina,Mochila Backpack Executiva Antifurto, Reforçada, Saídas USB,Impermeável, Escolar, Faculdade, Trabalho,Viagem,Presente (Preto)",
    "image": "https://m.media-amazon.com/images/I/81d-fw0QFpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 94.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FDW1LPX8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GFMY2K7K",
    "title": "Bettdow Caneta Pencil Para Apple iPad Sensível à Inclinação, Rejeição de Palma da mão e Display de Bateria acompanha, for iPad 10/9/8/7/6th Gen, Air 11\"-13\"/M2/5/4/3rd, Pro 11\"/12.9\"/13\"/M4, Mini 6/5",
    "image": "https://m.media-amazon.com/images/I/51Aj1KaljFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 94.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GFMY2K7K?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0D9YTZ8CR",
    "title": "Truss Reconstrutor Capilar Uso Obrigatório Spray | Hidratação e Reconstrução Imediata | 260ml",
    "image": "https://m.media-amazon.com/images/I/61rcwreK7WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 95.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9YTZ8CR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CQKM2VVC",
    "title": "Kit 4 Pacotes Café Especial em Grãos Coffee Mais Variedades: Arara, Caparaó, Chapada de Minas e Clássico - 100% Arábica (4x250g)",
    "image": "https://m.media-amazon.com/images/I/61zVRBe3oDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQKM2VVC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FMFVYV1R",
    "title": "Faber-Castell Lápis De Cor Supersoft com 50 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZqK+1cPBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 98.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFVYV1R?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GMK2THYT",
    "title": "Fralda Pants Huggies Proteção Acolchoada Tamanho XXXG 50 unidades",
    "image": "https://m.media-amazon.com/images/I/71Oa5ne9F-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMK2THYT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FYRNY2TW",
    "title": "Buddemeyer Tapete para casa 50x80cm Elegance 100% Algodão Bege",
    "image": "https://m.media-amazon.com/images/I/518h644H1OL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FYRNY2TW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FPT7HB8G",
    "title": "Carrinho Organizador Multiuso 3 Prateleiras Com Rodinhas 360° (Preto)",
    "image": "https://m.media-amazon.com/images/I/6163J3IhSwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 101.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPT7HB8G?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B079VVRXZL",
    "title": "ISDIN Clareador Facial Foto Ultra Active Unify Sem Cor FPS 99-50ml",
    "image": "https://m.media-amazon.com/images/I/61ppzaUoQuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 102.34,
    "affiliate_url": "https://www.amazon.com.br/dp/B079VVRXZL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FSRS4QWS",
    "title": "Câmera de Segurança, Wifi 1080p 360° Full Hd Ip Prova D'áGua Infravermelho Ao Ar Livre Hd VisãO Noturna Pode DiáLogo HC0T256",
    "image": "https://m.media-amazon.com/images/I/71YFlrKsKTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSRS4QWS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6550080835",
    "title": "Império da Alvorada (Império do vampiro #3)",
    "image": "https://m.media-amazon.com/images/I/91peNDj1lZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 106.81,
    "affiliate_url": "https://www.amazon.com.br/dp/6550080835?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H7BXMKLX",
    "title": "Airwit Ventilador de Teto E27 40 cm Bivolt Branco com Controle Remoto",
    "image": "https://m.media-amazon.com/images/I/61P5Cf3ssbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 108.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H7BXMKLX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B085JGDBCV",
    "title": "Truss Leave-In Brush Keratin | Proteção Térmica e Reconstrução para Cabelos Danificados | 250ml",
    "image": "https://m.media-amazon.com/images/I/51XgmN6UlTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B085JGDBCV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DWMZ9PPQ",
    "title": "Mochila de Viagem Expansivel Masculina Feminina Para Notebook",
    "image": "https://m.media-amazon.com/images/I/61lSXM4RsqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 111.12,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DWMZ9PPQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B087SQ2KSJ",
    "title": "Hidrofiltros - Purificador de Água Facile com Refil C3 Elimina Cloro, Odores e Sabores Cor Branco Hidrofiltros",
    "image": "https://m.media-amazon.com/images/I/61P8JfN1dqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 112.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B087SQ2KSJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FV3L5369",
    "title": "Kit Cafeteira 600ml, 120 Filtros v60, Cafés Jarra Vidro Borosilicato, Coador v60, Coador de Cafe Vidro, Clever Dripper, Kit Cafeteira Filtrador V60 Coador de Café Passador de Café",
    "image": "https://m.media-amazon.com/images/I/718aMIfhH4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.07,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FV3L5369?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DP1WT9BQ",
    "title": "Basike Power Bank, Carregador Portátil Universal 20000mAh, Rápido 22,5W",
    "image": "https://m.media-amazon.com/images/I/61D9g3EfnaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DP1WT9BQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6558820250",
    "title": "Terapia cognitivo-comportamental: teoria e prática",
    "image": "https://m.media-amazon.com/images/I/71KE7JJesyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.99,
    "affiliate_url": "https://www.amazon.com.br/dp/6558820250?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0D1CBDFP3",
    "title": "NIIMBOT Máquina de etiquetar, versão atualizada D110, para escola e casa | Impressora de adesivos, com 1 rolo de papel branco para iniciantes, impressora térmica de etiquetas, para escritório, casa",
    "image": "https://m.media-amazon.com/images/I/51K2cuF9MtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.14,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1CBDFP3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FZPF88HP",
    "title": "Panela de Pressão Antiaderente 4,5 Litros em Alumínio, Fechamento Externo",
    "image": "https://m.media-amazon.com/images/I/41Yo3g2RxCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FZPF88HP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8546903034",
    "title": "Mapas: Uma viagem deslumbrante pelas terras, mares e culturas do mundo",
    "image": "https://m.media-amazon.com/images/I/8130+ioRaLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 125.63,
    "affiliate_url": "https://www.amazon.com.br/dp/8546903034?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F48C2K2M",
    "title": "Controle GameSir Tegenaria Lite com Fio para Switch, PC, Android, iOS e Steam, Design Retrô Anos 90, Hall Effect Anti-Drift, 1000Hz Polling Rate, Baixa Latência, Botões Programáveis, Vibração Dupla - Cinza Retrô",
    "image": "https://m.media-amazon.com/images/I/51iZ2hj9orL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F48C2K2M?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F2GMVHJL",
    "title": "Kit Barra de Proteína Crocante biO2 Protein Crunchy Box, 15 barras de 50 g, 5 sabores Vegana e sem Glúten",
    "image": "https://m.media-amazon.com/images/I/81mMItYi0qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 131.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2GMVHJL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07HHD7C7T",
    "title": "SanDisk Cartão microSDXC Ultra SDSQUNS-128G-GN6MN 128GB 80MB/s UHS-I Classe 10",
    "image": "https://m.media-amazon.com/images/I/71ArMJE+WyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HHD7C7T?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FXL7NS6T",
    "title": "Embaralhador de Cartas Elétrico, 2 Baralhos, Recarregável por USB, Rápido, Silencioso e Portátil - Máquina Automática para Poker, Truco, Jogos de Família e Jogos Profissionais",
    "image": "https://m.media-amazon.com/images/I/61jQIzD4WJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXL7NS6T?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F93DYN9D",
    "title": "QBuen luminaria de mesa LED para escritório e casa, 5 cores de luz, 10 níveis de escurecimento, proteção para os olhos luminária de mesa, adequada para leitura, estudo, bancada de trabalho (preta)",
    "image": "https://m.media-amazon.com/images/I/71RBxNQTJOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 143.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F93DYN9D?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07G3H8R9D",
    "title": "Truss Amino Protetor Térmico | Finalizador com Proteção de até 80% Contra Calor, Brilho e Reparação Capilar | 225ml",
    "image": "https://m.media-amazon.com/images/I/51Vht6RWfNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 147.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07G3H8R9D?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0B6KFCC19",
    "title": "TECLADO MECÂNICO GAMER REDRAGON FIZZ RGB PRETO SWITCH MARROM K617-RGB-B (PT-BROWN)",
    "image": "https://m.media-amazon.com/images/I/619eg3PVlsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 153.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B6KFCC19?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FHDRH5W7",
    "title": "Basike Carregador Portátil Indução 10000mAh com Suporte Integrado(Rosa) | Power Bank Ultrafino e Portátil, Carregamento Rápido Sem Fio 15W(MAX) + Cabo Tipo C 22.5W(MAX) Compatível com MagSafe (Rosa)",
    "image": "https://m.media-amazon.com/images/I/51RjDTLi3xL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 156.75,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHDRH5W7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09WJD17ZS",
    "title": "Suporte Articulado de Mesa com Pistão a Gás para Monitores de 17' a 35' Branco - F80W ELG",
    "image": "https://m.media-amazon.com/images/I/51QIvg3FDEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 157.75,
    "affiliate_url": "https://www.amazon.com.br/dp/B09WJD17ZS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07HR1MZQP",
    "title": "Umidificador de Ar Ultrassônico 3,4 Litros Bivolt Fisher Price - HC115",
    "image": "https://m.media-amazon.com/images/I/41Gjg7-IkUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 160.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HR1MZQP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8530996895",
    "title": "Introdução Ao Estudo do Direito - 47ª Edição 2025",
    "image": "https://m.media-amazon.com/images/I/71YV5Ko6qgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.49,
    "affiliate_url": "https://www.amazon.com.br/dp/8530996895?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6584004406",
    "title": "Vade Mecum Saraiva Tradicional - 41ª Edição 2026",
    "image": "https://m.media-amazon.com/images/I/81HmyZ8mCzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6584004406?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DGKVPQNF",
    "title": "Basike Fone de Ouvido Bluetooth 5.4, Headphone Bluetooth com ANC, Som Hi-Fi | Cancelamento de Ruído Ativo, Carregamento USB-C, Microfone Integrado, 40H de Bateria (Branco)",
    "image": "https://m.media-amazon.com/images/I/61qiPiTj19L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 166.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGKVPQNF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FD9RF1YH",
    "title": "Mandoline de Aço Inoxidável com 5 Lâminas Ajustáveis e Luva Anti Corte | Cortador de legumes mandoline com 5 lâminas ajustáveis, aço inoxidável, luva anti corte, empurrador e base antiderrapante.",
    "image": "https://m.media-amazon.com/images/I/61dLr6HvxaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 170.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FD9RF1YH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8582603061",
    "title": "Gestão da Inovação",
    "image": "https://m.media-amazon.com/images/I/7165K6j8m7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 172.8,
    "affiliate_url": "https://www.amazon.com.br/dp/8582603061?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DNV1WZPZ",
    "title": "LYOR - Faqueiro Grécia 30 Peças Aço Inox - Serve 6 Pessoas",
    "image": "https://m.media-amazon.com/images/I/71DZNazPeIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 174.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNV1WZPZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FBX61V3J",
    "title": "Aspirador De Pó Removedor De Ácaros Maquina Aspirar Estofado",
    "image": "https://m.media-amazon.com/images/I/511tTYqol4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBX61V3J?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FHHKYW5L",
    "title": "Basike Carregador Portátil, Power Bank 20000mAh com Cabos Integrados(Prata)",
    "image": "https://m.media-amazon.com/images/I/51od1W0TzRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHKYW5L?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0D5BCR8KT",
    "title": "GameSir Nova Lite Controle Bluetooth e Sem Fio 2.4G para PC Windows, Celular Android iPhone, Nintendo Switch e Steam Deck, Gamepad com Hall Effect Anti-Drift, Turbo, Vibração, Dongle USB（roxo escuro)",
    "image": "https://m.media-amazon.com/images/I/51TYMb7-VhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D5BCR8KT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DQY6G1TZ",
    "title": "GameSir Nova Lite Controle Bluetooth e Sem Fio 2.4G para PC Windows, Celular Android iPhone, Nintendo Switch e Steam Deck, Gamepad com Hall Effect Anti-Drift, Turbo, Vibração, Dongle USB - Cinza",
    "image": "https://m.media-amazon.com/images/I/41AqYogcPHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQY6G1TZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0D5BGVZHV",
    "title": "GameSir Nova Lite Controle Bluetooth e Sem Fio 2.4G para PC Windows, Celular Android iPhone, Nintendo Switch e Steam Deck, Gamepad com Hall Effect Anti-Drift, Turbo, Vibração, Dongle USB (Branco)",
    "image": "https://m.media-amazon.com/images/I/51w6iWgkgTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D5BGVZHV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H57598NS",
    "title": "Suporte para Notebook com Cooler RGB 2200 RPM, Base Refrigerada para 14 a 19 Polegadas, 7 Níveis de Ajuste, Controle Touch, 2 Portas USB e Suporte para Celular",
    "image": "https://m.media-amazon.com/images/I/61SGrUzsYZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 185.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H57598NS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H5RPTMV6",
    "title": "Jogo de Lençol 4 Peças Ponto Palito Percal 180 Fios Algodão Estampado Vários Tamanhos (Cerejas, Super king)",
    "image": "https://m.media-amazon.com/images/I/610j7pegJSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5RPTMV6?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GWQLLTZD",
    "title": "Basike Fone de Ouvido Bluetooth, Fone OWS Conexão Dupla Dispositivos(Rosa) | Fone sem Fio Bluetooth 6.0 com Tela LED, Bateria de 68h, ENC Cancelamento de Ruído, Áudio Estéreo, IPX6, Baixa Latência",
    "image": "https://m.media-amazon.com/images/I/61ElYXTym5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 188.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWQLLTZD?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H5RJ5JBQ",
    "title": "OSTER - Multiprocessador Oster 3 Em 1 OMPR680 127v",
    "image": "https://m.media-amazon.com/images/I/71On3GYLYIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 188.52,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5RJ5JBQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FNVLLQKT",
    "title": "Kit Haltere 6 em 1 Ajustável para Musculação - Preto - Multifuncional com Barra e Kettlebell",
    "image": "https://m.media-amazon.com/images/I/61ISeRgb21L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNVLLQKT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GX9LV6JG",
    "title": "Irrigador Oral Limpeza Profunda 300ML Portátil para Dentes, 4 Modos e 6 Pontas de Jato+2 Escova, Limpador de Irrigação Recarregável, Máquina de Fio Dental Elétrica com Acessórios para Irrigador",
    "image": "https://m.media-amazon.com/images/I/61OrtaFLTEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GX9LV6JG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8520470858",
    "title": "Neuroanestesia e neurociências",
    "image": "https://m.media-amazon.com/images/I/71mCs6gfD5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.17,
    "affiliate_url": "https://www.amazon.com.br/dp/8520470858?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FM4D1HQG",
    "title": "Havit Fone de Ouvido Headset Gamer Fuxi-H6 Com Fio e Sem Fio, Wireless 2,4GHz, Bluetooth, Cabo USB-C",
    "image": "https://m.media-amazon.com/images/I/61Fs46kV2PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FM4D1HQG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09V39N65M",
    "title": "Panela Elétrica Oster, para Fondue, 220V, Cinza, 1000W, OFND100",
    "image": "https://m.media-amazon.com/images/I/51FMJp5eYOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B09V39N65M?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DGTSFP5Q",
    "title": "Alimentador Automático Pet, 4L Comedouro para Caes Fácil Comedouro Elevado para Caes, Controle de Aplicativo WiFi - Gravador de Voz",
    "image": "https://m.media-amazon.com/images/I/51ansqiUO5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTSFP5Q?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FMFVYFXC",
    "title": "Faber-Castell Lápis De Cor Supersoft com 100 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ARQT0CGHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFVYFXC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09ZPK9S7B",
    "title": "ISDIN Creme Anti-Idade para Pele Sensível Isdinceutics Hyaluronic Moisture Sensitive Skin - 50g",
    "image": "https://m.media-amazon.com/images/I/61cgaqKT7qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B09ZPK9S7B?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G92MZ5F5",
    "title": "Basike Power Bank 65W, Carregador Portátil Universal 20000mAh (Prata) | USB-C + Cabo Type-C Integrado e Removível, Carregamento Rápido PD/PPS para Samsung Séries S26-S21 e iPhone Séries 17-14",
    "image": "https://m.media-amazon.com/images/I/61YyyyDwhXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 212.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G92MZ5F5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GQ46VHJ2",
    "title": "Bettdow Criança SmartWatch, relogio smartwatch com 1.83 Ecrã tátil, à prova d'água IP68, relogio feminino e masculino Despertador Exibição de hora No APP No Phone Registre os passos (Preto)",
    "image": "https://m.media-amazon.com/images/I/61rz4-bf80L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 217.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQ46VHJ2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FPSHCSQF",
    "title": "Huggies Fralda Pants Descartável Proteção Acolchoada XG - 144 fraldas",
    "image": "https://m.media-amazon.com/images/I/813VUlveBgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPSHCSQF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B089Y3ZL8C",
    "title": "Mesa para Escritório Office Estilo Industrial 1,20m Kuadra, Compace, Snow/Est.Preta",
    "image": "https://m.media-amazon.com/images/I/71bokwHcMKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B089Y3ZL8C?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GWF88GZW",
    "title": "OSTER - Ferro De Passar Aeroceramic Oster Verde-escuro 127v",
    "image": "https://m.media-amazon.com/images/I/61Y2JSQdm6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWF88GZW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07BTGW913",
    "title": "LAMY safari vista - Caneta rollerball com grip ergonômico - para escrita longa e agradável - feita de plástico ABS robusto - incluindo recarga LAMY M 63 azul",
    "image": "https://m.media-amazon.com/images/I/61dCQhTSWGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BTGW913?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H11WS8C5",
    "title": "GOKOCO Escova Secadora Bivolt GD037, Escova Modeladora Íons, Escova Rotativa Styler, Preto",
    "image": "https://m.media-amazon.com/images/I/61ogqOM9UVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H11WS8C5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6556892947",
    "title": "Bíblia de Estudo Thomas Nelson NVI, Capa luxo vinho, Leitura Perfeita | Bíblia com mais de 50 mil recursos",
    "image": "https://m.media-amazon.com/images/I/6186DbkR5lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.03,
    "affiliate_url": "https://www.amazon.com.br/dp/6556892947?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FQK1TX76",
    "title": "Bettdow SmartWatch, Relogio Smartwatch Feminino, 1.27\" Ecrã tátil, à prova d'água IP68, 100+ Modos Esportivos, chamada Bluetooth, Compatível com Android iOS, voz por IA (preto)",
    "image": "https://m.media-amazon.com/images/I/61qOEBjlshL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQK1TX76?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CRTMNQBL",
    "title": "GameSir X2s Type-C Controlador de jogos móvel para Android e iPhone Série 15 (USB-C)",
    "image": "https://m.media-amazon.com/images/I/517zyogdvoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRTMNQBL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FY6F8CLH",
    "title": "Bettdow Smartwatch GPS FB041, Relogio Smartwatch Feminino e Masculino,Tela HD de 1,85\", Alexa, 100 Esportes,3ATM à rova d'água, Chamada Bluetooth, Compatível com Android iOS(Prata)",
    "image": "https://m.media-amazon.com/images/I/61IEuGQklML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 230.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY6F8CLH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GWQXJG1C",
    "title": "SJ-CAM Câmera de Ação 4K 30FPS Portátil Câmera à Prova d’Água até 40m com EIS,Grande Angular 170° WiFi/App Controle Lente Microfone Externo,Camera fotográfica Digital Esportes, Capacete e Bicicleta",
    "image": "https://m.media-amazon.com/images/I/71Jjei08OgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 234.62,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWQXJG1C?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F7RRJWQK",
    "title": "Mini Projetor Portátil HY300 PRO 5G WIFI 6 Android 11, 4K 1080P Full HD, 9000 Lúmens, Auto Correção de Tela, 180° Giratório - Envio Brasil Premium",
    "image": "https://m.media-amazon.com/images/I/317a8Ght0jL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 238.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F7RRJWQK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FFTQ2JWN",
    "title": "Tênis Mizuno Virtue 2",
    "image": "https://m.media-amazon.com/images/I/71HmBIptHpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 239.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTQ2JWN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8553627969",
    "title": "Direito Tributário Coleção Esquematizado- 9ª Edição 2025",
    "image": "https://m.media-amazon.com/images/I/61At1uS7VyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 243.49,
    "affiliate_url": "https://www.amazon.com.br/dp/8553627969?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6558820935",
    "title": "Manual Diagnóstico e Estatístico de Transtornos Mentais - DSM-5-TR: Texto Revisado",
    "image": "https://m.media-amazon.com/images/I/61CmyiZfa8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 252.0,
    "affiliate_url": "https://www.amazon.com.br/dp/6558820935?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0D8JDJ186",
    "title": "Cuvave cube baby efetor de baixo/bass,pedal de multiefeito M-VAVE Tank-B recarregável 36 predefinições 9 slots de pré-amplificador 8 slots de gabinete IR 3 efeitos de modulação/atraso/reverberação",
    "image": "https://m.media-amazon.com/images/I/61Xhk7Y-YbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 266.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8JDJ186?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B089XZVCMY",
    "title": "Mesa Escrivaninha Industrial 150cm Trevalla Kuadra ME150-E10 Carvalho",
    "image": "https://m.media-amazon.com/images/I/71VkZydWO4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 267.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B089XZVCMY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07KCGR4CD",
    "title": "Metaltec Tábua de Passar Roupa Grande 2001 Top com Suporte para Ferro | Em Aço com 10 Níveis de Altura e Prateleira - Forro Almofadado 100% Algodão Estampas Sortidas",
    "image": "https://m.media-amazon.com/images/I/71JqaEvFOeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 269.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07KCGR4CD?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G2XQ64K5",
    "title": "Cadeira de escritório ergonômica com estofado de mesh (Cabide)",
    "image": "https://m.media-amazon.com/images/I/71uRmPebmPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.44,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2XQ64K5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B00I480SAC",
    "title": "Goodbye Yellow Brick Road [Disco de Vinil]",
    "image": "https://m.media-amazon.com/images/I/91zrpOF+aiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 281.27,
    "affiliate_url": "https://www.amazon.com.br/dp/B00I480SAC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B097HYQPJ1",
    "title": "SECADOR Taiff TOURMALINE 2100W 127V, preto",
    "image": "https://m.media-amazon.com/images/I/51BoILwnCJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 282.26,
    "affiliate_url": "https://www.amazon.com.br/dp/B097HYQPJ1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FLPWHJ74",
    "title": "Hivento Ventilador Torre com Controle Remoto, 3 Velocidades, 3 Modos de Vento, Oscilação de 70°, Timer de 15h, Controle Touch Econômico – Ventilador para Quarto, Sala e Uso Doméstico,127V",
    "image": "https://m.media-amazon.com/images/I/61vhsp6g26L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 287.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FLPWHJ74?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09MWFCMLG",
    "title": "Escrivaninha com Estante Baixa 2 Prateleiras 1,50m Dynamica",
    "image": "https://m.media-amazon.com/images/I/61Fdh2CQHjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 288.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MWFCMLG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8582607075",
    "title": "Macroeconomia 9ed.",
    "image": "https://m.media-amazon.com/images/I/81A05ay1fhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 292.27,
    "affiliate_url": "https://www.amazon.com.br/dp/8582607075?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FVY7M936",
    "title": "American Tourister Mala de Viagem Tesa 4.0 Preta Pequena",
    "image": "https://m.media-amazon.com/images/I/41gDn2oh3NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVY7M936?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F63WJLYP",
    "title": "Mimo Style Conjunto de 7 Sartin Cook Aquamint, Compativel com Fogão a Gás",
    "image": "https://m.media-amazon.com/images/I/619OPrLH6SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F63WJLYP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H6FH7N6F",
    "title": "Monitor portátil de 15,6 polegadas, conectividade USB-C e HDMI, resolução Full HD 1080p, falantes integrados compatível com diversos dispositivos–Preto",
    "image": "https://m.media-amazon.com/images/I/71QcvEzWokL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FH7N6F?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09NCZ4TP4",
    "title": "Aspirador de Pó Vertical Oster Sem Fio 3 em 1, Bateria, Azul, 90W, OASP630",
    "image": "https://m.media-amazon.com/images/I/41qrfBunpgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B09NCZ4TP4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GJD29WP2",
    "title": "GOKOCO Secador de Cabelo Dobrável de Alta Velocidade,Bivolt,GD045 Motor Brushless 110.000 RPM,Íons Negativos,4 Temperaturas,3 Velocidades,com Difusor e Bicos Modeladores para Viagem,Preto",
    "image": "https://m.media-amazon.com/images/I/61QThHd0LCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJD29WP2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0BQ3NPN9R",
    "title": "Mesa Dynamica Diretor 180X60X75cm",
    "image": "https://m.media-amazon.com/images/I/61hcSlOO-5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 308.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ3NPN9R?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G7HJFJVH",
    "title": "Kérastase Gloss Absolu Frizz-Glaze Cream, creme modelador antifrizz para cabelos com muito frizz, com ácido glicólico, ácido hialurônico e óleo de rosa mosqueta, 240 ml",
    "image": "https://m.media-amazon.com/images/I/51KAJaARYTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 311.75,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G7HJFJVH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F6L1X2Z8",
    "title": "AstroAI B8 Auxiliar Partida Portátil Veicular 3000A | Carregador de Bateria 12V para Motores 7.0L Gasolina e 5.5L Diesel, com 3 Modos de Lanterna e Cabos",
    "image": "https://m.media-amazon.com/images/I/81nyNDZMyJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 314.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6L1X2Z8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H4KZVLGZ",
    "title": "Cadeira De Alimentação Bebe Multifuncional 6 Em 1 Para Bebês, Com Dobragem Com Um Único Toque, Bandeja E Encosto Ajustáveis Em 3 Alturas, Cinto De Segurança De 5 Pontos, Rodas Com Freio E Assento Removível Em PU Que Se Limpa Com Um Pano Úmido; Ideal Para Pais Ocupados Que Cuidam Dos Filhos Em Casa, Em Viagens Ou Na Casa Dos Avós (Azul escuro)",
    "image": "https://m.media-amazon.com/images/I/71uOEtJeT-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 320.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4KZVLGZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "6558823861",
    "title": "Tratado sobre o transtorno do espectro autista",
    "image": "https://m.media-amazon.com/images/I/712qD16wImL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 322.99,
    "affiliate_url": "https://www.amazon.com.br/dp/6558823861?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GX5QF93Q",
    "title": "Babá Eletrônica com Tela de 5.0\", Câmera para Bebê com Visão Noturna Infravermelha 10M, Áudio Bidirecional, Detecção VOX, Monitoramento de Temperatura e Canções de Ninar",
    "image": "https://m.media-amazon.com/images/I/61TpvTL57nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 323.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GX5QF93Q?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G6L2WHKG",
    "title": "EMEET S600L Webcam 4K para Streaming com Luz de Anel, 4 Modos de Iluminação, Efeito Arco-Íris, Sensor de 1/2\", Imagem com IA, PDAF de 0.2S, 2 Microfones, Controle por Botão Giratório",
    "image": "https://m.media-amazon.com/images/I/61kTidR7RWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6L2WHKG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G8F4Y9LD",
    "title": "M-VAVE VEDO Teclado MIDI SMK-25 Profissional 25 Teclas com Pads RGB, Conexão USB/BT, Compatível com Windows/Mac/iOS/Android, Ideal para Produção Musical, Home Studio e Performances Ao Vivo Controle",
    "image": "https://m.media-amazon.com/images/I/715loMOzx5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 333.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G8F4Y9LD?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G7ZTVFVJ",
    "title": "Hauskraft- Aparelho de jantar Lidia branco com borda dourada 16 peças",
    "image": "https://m.media-amazon.com/images/I/61fu4ixJIjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G7ZTVFVJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CTWK34VY",
    "title": "Edredom Toque de Plumas Dupla Face, Microfibra Plumage Liso Quadriculado (Branco, Queen)",
    "image": "https://m.media-amazon.com/images/I/61nVrojR3-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTWK34VY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B09MWFYS9P",
    "title": "Escrivaninha com Estante Baixa 2 Prateleiras 1,50m Dynamica",
    "image": "https://m.media-amazon.com/images/I/51EoT+NcWQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 365.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MWFYS9P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FJFWCP3H",
    "title": "Fonte de Água para Gatos em Aço Inoxidável 304-12L para Interior,Bebedouros e Acessorios para Gatos, Silenciosa, Bivolt",
    "image": "https://m.media-amazon.com/images/I/71vY8rQIHWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 369.53,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FJFWCP3H?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FJL6SWTQ",
    "title": "6L Comedouro Elevado para 2 Cäes, WiFi Alimentador Automático Gatos com Controle de Aplicativo, Fonte de Alimentação Dupla",
    "image": "https://m.media-amazon.com/images/I/71VDSJzV9dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FJL6SWTQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8520467962",
    "title": "Medicina de emergência: Abordagem Prática",
    "image": "https://m.media-amazon.com/images/I/81i9bV+dcvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8520467962?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F18QR6DM",
    "title": "Cadeira de Escritório Compacta Python Fly – Couro Sintético Premium & Base Metálica, Design Moderno NR-17 Testado (Cinza)",
    "image": "https://m.media-amazon.com/images/I/71E7ufTIAvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 385.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F18QR6DM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "8520468144",
    "title": "Paciente crítico: Diagnóstico e tratamento",
    "image": "https://m.media-amazon.com/images/I/712AmzP1wNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 394.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8520468144?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H2LTHXRQ",
    "title": "Airwit Ventilador de Teto BLDC Bivolt 132 cm com Controle Remoto | Baixo ruído, 6 velocidades, função reversa, LED 3 cores, memória, quartos, salas amplas",
    "image": "https://m.media-amazon.com/images/I/41mnrV6LU6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2LTHXRQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FCM2NZ6V",
    "title": "Cadeira Gamer Python Fly, Design Estilo Gamer, Tecido Respirável, Design Ergonômico (Vermelho)",
    "image": "https://m.media-amazon.com/images/I/71eGXNCjdWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 408.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCM2NZ6V?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0CJTZTXZM",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés（Verde)",
    "image": "https://m.media-amazon.com/images/I/71QZZuyROTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 435.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJTZTXZM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H1NGZDT9",
    "title": "Escrivaninha para Escritório Madri 3 Gavetas 163cm Creme E Freijó Creme/Freijó",
    "image": "https://m.media-amazon.com/images/I/71IBC-Ccn8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 459.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1NGZDT9?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B08G8MPVDY",
    "title": "Bomba tira leite elétrica Bellababy vestível mãos-livres, bomba dupla sem fio atualizada com flanges confortáveis de 17 mm, 19 mm e 21 mm, bomba tira-leite elétrica portátil sem fio silenciosa, 4 modos e 6 níveis de sucção, flanges de 24 mm, pacote com 2 unidades",
    "image": "https://m.media-amazon.com/images/I/612zeYc5QgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 484.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B08G8MPVDY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FHHNPPP2",
    "title": "Gravador de Voz, com Transcrição de Voz em Texto Ia, Gravador de Voz e Ligações, 64GB, Tempo de Gravação de 50 Horas, Distância de Gravação de 5-10 Metros, Pode Ser Traduzido em 60 Idiomas",
    "image": "https://m.media-amazon.com/images/I/51gV9XTDxIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 484.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHNPPP2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FD2XSKL3",
    "title": "Cadeira de escritório ergonômica NR-17 testada, reclinável até 145° com apoio para os pés, almofada de ar, cabide e apoio de cabeça ajustável – Gamer e home office (Preto)",
    "image": "https://m.media-amazon.com/images/I/714d8Rtkc-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 500.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FD2XSKL3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FWRGKTBX",
    "title": "Monitor Gamer ips 24 Polegadas, Full HD, 144Hz, 1ms,sRGB 99%, 150cd/m², Alto-falantes embutidos,Entradas HDMI/DisplayPort/3.5mm,110-220V, Preto",
    "image": "https://m.media-amazon.com/images/I/71EofPCzQsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 509.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWRGKTBX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G38SCQHX",
    "title": "Cadeira De Escritório Presidente com Assento Espesso e Encosto Alto, para Escritório e Home Office",
    "image": "https://m.media-amazon.com/images/I/81pK1pFRqZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 539.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G38SCQHX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FBJYRBD3",
    "title": "Mesa De Centro Tampo De Vidro Laqueado Base Madeira - Gaia (Off White)",
    "image": "https://m.media-amazon.com/images/I/61qT80dj-zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 597.25,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBJYRBD3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G4MDV9WH",
    "title": "EMEET PIXY Câmera PTZ Dual com IA, 4K com Tripé, Rastreamento de IA, PDAF e Foco Automático por 0.2s, Sensor 1/2.55'', 3 Microfones, Predefinições, para Streaming, Compatível com OBS/Twitch/Switch 2",
    "image": "https://m.media-amazon.com/images/I/61GXBxEuqnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 598.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G4MDV9WH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0C6SQ639G",
    "title": "Balcão Aéreo 3 Portas Americana Cinza",
    "image": "https://m.media-amazon.com/images/I/61df5rbKfML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 611.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6SQ639G?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H6FV1YLF",
    "title": "Basike Caixa de Som Estéreo Sem Fio, Boombox 200W, Bluetooth, Azul | Bateria 18000mAh, IPX6 À Prova de Água, Luz RGB, Equalizador, TWS, Graves Reforçados, Áudio Lossless, Festa, Viagem, Piscina",
    "image": "https://m.media-amazon.com/images/I/71MGK722UGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 626.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FV1YLF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FQMWX17F",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 FE Plus 13.1 Inch 2025, Tab S10 FE+ de 13.1 polegadas SM-X620, SM-X626, SM-X626B,com Botões de IA, Flexível e portátil",
    "image": "https://m.media-amazon.com/images/I/61g20RM2tCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 630.83,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQMWX17F?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H1NRKLZ8",
    "title": "Balcão Pia 01 Porta 04 Gavetas 120cm 100% Mdf Fineze Areia HP",
    "image": "https://m.media-amazon.com/images/I/71-bIzPTxoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 639.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1NRKLZ8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H4Z5S5SS",
    "title": "Máquina De Exercício De Placa Vibratória Para Exercícios Físicos, Vibrador de Corpo Inteiro, Mini Shake Plate, Equipamento de Ginástica e Esportes, Aparelho para Treino em Casa,110V/220V",
    "image": "https://m.media-amazon.com/images/I/61fKHBc-ZdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 689.64,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4Z5S5SS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F2Q2SCJ2",
    "title": "Cadeira Escritório DT3 Dolly, Criss Cross Cosy Chair, Original, Assento Extra Grande e Largo, Leisure, Penteadeira, Escrivaninha. (PU, Cream)",
    "image": "https://m.media-amazon.com/images/I/61yrvoHvzPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 729.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2Q2SCJ2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H1R6FM9L",
    "title": "Smart TV 32 Polegadas, Whale 10.0, LED HD Ready, Wi-Fi e Bluetooth, Dolby Atmos, Netflix e YouTube, 3x HDMI",
    "image": "https://m.media-amazon.com/images/I/71PtJPMgx4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 779.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1R6FM9L?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B07HS2SP5D",
    "title": "Escrivaninha Com 2 Gavetas 120cm Hanover E Off White Artesano",
    "image": "https://m.media-amazon.com/images/I/41R834pDEYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 779.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HS2SP5D?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H4RLZX5V",
    "title": "NEWPET Caixa De Areia Autolimpante Com Tampa Aberta, Caixa De Areia Automática Com Sensores De Segurança, Proteção Anti-Esmagamento E Degrau De Fácil Acesso Para Gatos Idosos",
    "image": "https://m.media-amazon.com/images/I/61-nviMYCXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 854.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4RLZX5V?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B086V1R21L",
    "title": "Philips Cacheador Automático Prestige com Tecnologia MoistureProtect",
    "image": "https://m.media-amazon.com/images/I/41Yu1QTOtHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 854.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B086V1R21L?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0C7H3P3C8",
    "title": "Forno à Gás de Embutir Stelar 46 litros Topázio Preto 127v",
    "image": "https://m.media-amazon.com/images/I/51oUE+WfXVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1073.61,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7H3P3C8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0F3ZTQF92",
    "title": "Cadeira Ergométrica Escritório Ajuste Lombar Estudo Preto Encosto Comfy Reclinável Mesh Tecido Giratória Cadeiras 200kg Confortável Gamer Braço 6D",
    "image": "https://m.media-amazon.com/images/I/61DBR67u0PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1098.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F3ZTQF92?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0G1M9FQFS",
    "title": "Monitor Gamer Curvo 27 polegadas Z-Edge, FHD 1080P, 300 Hz, 280 Hz e 240 Hz, monitor pc 1500R, MPRT de 1 ms, 2 portas DP 1.4 e 2 portas HDMI 2.0, Ajuste de Inclinação, Suporte VESA, Sem Bordas",
    "image": "https://m.media-amazon.com/images/I/71t265i9EZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1234.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1M9FQFS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0BBMRF9ZX",
    "title": "Bolsa de Transporte Rolling Massive Mouth® XL",
    "image": "https://m.media-amazon.com/images/I/51UHc8hyIDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1314.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BBMRF9ZX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FPL3ZXTV",
    "title": "Notebook Intel Celeron 8gb Ram 256 Gb Ssd Laptop 1920x1080 FHD 14in",
    "image": "https://m.media-amazon.com/images/I/71DO8Z+LVNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1798.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPL3ZXTV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0H2CK3KNQ",
    "title": "VEDO Bateria eletrônica profissional, equipada com pads de bateria em mesh, caixa de 10 polegadas com dupla camada, mais de 600 sons BFD, 2 pedais, banco para bateria, fones de ouvido e baquetas.",
    "image": "https://m.media-amazon.com/images/I/61u6DXtxW1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1889.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2CK3KNQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DJ3P76ZC",
    "title": "Quarto Modulado Casal Completo 4 Peças 5 Portas 4 Gavetas Com Maleiro Smart Plus Cinamomo",
    "image": "https://m.media-amazon.com/images/I/71mLMXf64LL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2149.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ3P76ZC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FVMH1K2Y",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Branca (TF38) 127V",
    "image": "https://m.media-amazon.com/images/I/319xY36QjcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVMH1K2Y?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FVP6KRP4",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Inox Look (TF38S) 127V",
    "image": "https://m.media-amazon.com/images/I/416nfzkCKsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVP6KRP4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DNR7TBTW",
    "title": "Geladeira Electrolux Frost Free 431L Efficient AutoSense Duplex Branca (TF70) 127V",
    "image": "https://m.media-amazon.com/images/I/416e19mr7qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNR7TBTW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FS2CVM1T",
    "title": "Notebook ASUS Vivobook 15, Intel Core i5, 8 GB, 512 GB SSD, KeepOS, 15.6'' FHD, Cool Silver - X1504VA-NJ1741",
    "image": "https://m.media-amazon.com/images/I/71ovxIPny7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FS2CVM1T?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0FHCHBRGF",
    "title": "Notebook Dell 15 15-I1300-A30P, Intel Core i5-1334U, Windows 11 Home | Tela 15.6 FHD 120 Hz Antirreflexo, 8 GB RAM, 512 GB SSD, UHD Graphics, Wi‑Fi 6, leitor SD, USB 3.2 Type-C, Garantia de 1 Ano",
    "image": "https://m.media-amazon.com/images/I/51LAU1+ACrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3749.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHCHBRGF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0GWW2J4F3",
    "title": "Notebook Dell 15 DC15-I51334U-M70 15.6\" Full HD 13ª Gen Intel Core i5 16GB 512GB SSD Win 11 Preto Carbono",
    "image": "https://m.media-amazon.com/images/I/5152rTpvy5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWW2J4F3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  },
  {
    "asin": "B0DGM1PJMK",
    "title": "Apple iPhone 16 (128 GB) – Branco",
    "image": "https://m.media-amazon.com/images/I/61ctYsUobKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGM1PJMK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T07:41:34.000Z"
  }
];
