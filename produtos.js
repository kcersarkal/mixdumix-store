const PRODUCTS = [
  {
    "asin": "B09547GF99",
    "title": "Scala Plus Papel Toalha Multipicote, 200 Toalhas (2 Rolos de 100 Toalhas Cada)",
    "source_url": "https://www.amazon.com.br/dp/B09547GF99",
    "image": "https://m.media-amazon.com/images/I/71Q5B8kAMtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B09547GF99?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FH613DFG",
    "title": "Bolsa Necessaire Maquiagem Cosméticos Viagem Com Divisória e Cabide para Pendurar Organizador de Maquiagem Shampoo Perfumes Higiene Pessoal (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FH613DFG",
    "image": "https://m.media-amazon.com/images/I/51COQaf69yL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH613DFG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FMLBQ136",
    "title": "KitKat Creme Crocante de Chocolate – Pasta para Passar, 330 g",
    "source_url": "https://www.amazon.com.br/dp/B0FMLBQ136",
    "image": "https://m.media-amazon.com/images/I/61VAMMzECnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMLBQ136?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07DKKQ1TN",
    "title": "L'Oréal Paris Elseve Óleo Extraordinário Creme de Tratamento para Nutrição Intensa de Cabelos Secos, com Micro-Óleos de Flores Preciosas para Maciez e Brilho 300g",
    "source_url": "https://www.amazon.com.br/dp/B07DKKQ1TN",
    "image": "https://m.media-amazon.com/images/I/715M+mgR5ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DKKQ1TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B08CNBSPBD",
    "title": "PAYOT Sabonete Liquido Detox, Vitamina C, 220 Ml",
    "source_url": "https://www.amazon.com.br/dp/B08CNBSPBD",
    "image": "https://m.media-amazon.com/images/I/51OGIf4IxHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08CNBSPBD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0779BRVVS",
    "title": "SCOTCH 3M Fita Dupla-face Fixa Forte Extrema 24 mm x 2 m 1 Unidade | Suporta até 5 kg por 20 cm, Fixação Permanente, Ideal para Objetos Mais Pesados, Substitui Pregos e Parafusos",
    "source_url": "https://www.amazon.com.br/dp/B0779BRVVS",
    "image": "https://m.media-amazon.com/images/I/71mEwfbHotL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0779BRVVS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07RJYGV3F",
    "title": "Glade Aromatizador de Ambiente Automático, Lavanda e Baunilha, Refil 260ml",
    "source_url": "https://www.amazon.com.br/dp/B07RJYGV3F",
    "image": "https://m.media-amazon.com/images/I/51+QIHS0GZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07RJYGV3F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0G45G116D",
    "title": "Shampoo Encorpador L'Oréal Paris Elseve Collagen® Lifter 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0G45G116D",
    "image": "https://m.media-amazon.com/images/I/71JdSG1QhRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45G116D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07FYNMF8B",
    "title": "Azeite Andorinha Spray Extra Virgem 200ml",
    "source_url": "https://www.amazon.com.br/dp/B07FYNMF8B",
    "image": "https://m.media-amazon.com/images/I/61m+etOgWxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B07FYNMF8B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CTTVR415",
    "title": "Leave-In L'Oréal Paris Elseve Reparação Total 5 Cicatri Renov 100ml | Reparação Instantânea, Desembaraço Imediato, Repara os Danos Fio a Fio, Para Todos os Tipos de Cabelo",
    "source_url": "https://www.amazon.com.br/dp/B0CTTVR415",
    "image": "https://m.media-amazon.com/images/I/61yXyxU11AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTTVR415?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GZW7NZC9",
    "title": "BONI NATURAL - Desodorante Roll-On sem Alumínio, Natural, Vegetal e Vegano, Coco e Lavanda, 55ml, 2 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0GZW7NZC9",
    "image": "https://m.media-amazon.com/images/I/51o9kY6yQiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZW7NZC9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07XTR3YQ6",
    "title": "Salton Espumante Prosecco Brut 750 Ml",
    "source_url": "https://www.amazon.com.br/dp/B07XTR3YQ6",
    "image": "https://m.media-amazon.com/images/I/61MEMzoeMkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XTR3YQ6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B08J866SLT",
    "title": "Mãe Terra Granola Tradicional Castanhas Brasileiras 800G",
    "source_url": "https://www.amazon.com.br/dp/B08J866SLT",
    "image": "https://m.media-amazon.com/images/I/81uFvPdB4lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08J866SLT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0B694TZC9",
    "title": "L'Oréal Paris Solar Expertise Antioleosidade, Protetor Solar Facial com FPS 60, 12h de Efeito Matte com Ácido Salicílico, Cor 1.0, 40g",
    "source_url": "https://www.amazon.com.br/dp/B0B694TZC9",
    "image": "https://m.media-amazon.com/images/I/811jKj8SMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 33.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B694TZC9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D3CT4H1J",
    "title": "Protetor Contra Surtos Elétricos (DPS) CLAMPER 127/220V, 10 Amperes, 3 Pinos, para PC, PS5, Xbox, Smartphone, Monitor, Impressora, etc - iCLAMPER Pocket Fit 3P 10A Transparente LCF, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0D3CT4H1J",
    "image": "https://m.media-amazon.com/images/I/41UZqy2PB-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 35.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3CT4H1J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0G2X31T8D",
    "title": "OralGos Escova de Dentes Premium 6 unidades Colorido, Cerdas Ultra Macias | Cerdas Ultra Macias, com Protetor de Cerdas, Suave para Gengivas, Ideal para Presente e Uso Diário",
    "source_url": "https://www.amazon.com.br/dp/B0G2X31T8D",
    "image": "https://m.media-amazon.com/images/I/81GsimTkapL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2X31T8D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07VGF2P6L",
    "title": "L'Oréal Paris Revitalift Hialurônico Creme Facial Noturno, com Ácido Hialurônico Puro, Com textura leve, preenche linhas de expressão e hidrata a pele intensamente por 24h, 49g",
    "source_url": "https://www.amazon.com.br/dp/B07VGF2P6L",
    "image": "https://m.media-amazon.com/images/I/51dnpdlO-zS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VGF2P6L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "8543111536",
    "title": "Murdoku: 80 mistérios para resolver usando a lógica",
    "source_url": "https://www.amazon.com.br/dp/8543111536",
    "image": "https://m.media-amazon.com/images/I/81BZuXOk+7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 38.94,
    "affiliate_url": "https://www.amazon.com.br/dp/8543111536?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B077BY5B8Q",
    "title": "Maybelline NY The Colossal Volum' Express, Máscara de Cílios Lavável, 9x Mais Volume por Até 24h, Fórmula com Colágeno para Definição Intensa, Não Empelota, Cor Preto, 8ml",
    "source_url": "https://www.amazon.com.br/dp/B077BY5B8Q",
    "image": "https://m.media-amazon.com/images/I/51rTd-hhlGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 40.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY5B8Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B073ZKHXVH",
    "title": "Spray Retoque de Raiz Instantâneo Magic Retouch, L'Oréal Paris, Louro Escuro",
    "source_url": "https://www.amazon.com.br/dp/B073ZKHXVH",
    "image": "https://m.media-amazon.com/images/I/61U40i24h1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B073ZKHXVH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "8501926795",
    "title": "Procura-se: Uma nova liderança para um novo tempo",
    "source_url": "https://www.amazon.com.br/dp/8501926795",
    "image": "https://m.media-amazon.com/images/I/71OjxoNgw5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 45.5,
    "affiliate_url": "https://www.amazon.com.br/dp/8501926795?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B086QD5F3V",
    "title": "Ariel Sabão Líquido Expert Concentrado 3L",
    "source_url": "https://www.amazon.com.br/dp/B086QD5F3V",
    "image": "https://m.media-amazon.com/images/I/51Bz4yexvBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 46.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B086QD5F3V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GCH84HZ5",
    "title": "TOYADENT Pasta de Dente Roxa Clareadora 90g, 3 Unidades | Com Flúor, Anticáries, Remove Manchas, Fortalece os Dentes, Hálito Fresco Duradouro",
    "source_url": "https://www.amazon.com.br/dp/B0GCH84HZ5",
    "image": "https://m.media-amazon.com/images/I/81xM98kyXZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 51.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GCH84HZ5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CXJLK24Y",
    "title": "Nescau Bebida Láctea 180ml caixa com 27 unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CXJLK24Y",
    "image": "https://m.media-amazon.com/images/I/61gtHqTqSkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXJLK24Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FTWCQ5W7",
    "title": "Frigideira Grande 24cm Em Cerâmica Cabo De Madeira Fundo Indução Fogão a Gás Elétrico e Indução Saudável Frita Sem Usar Óleo Durável Premium",
    "source_url": "https://www.amazon.com.br/dp/B0FTWCQ5W7",
    "image": "https://m.media-amazon.com/images/I/614EoOBQe9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTWCQ5W7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FL7G2ZD1",
    "title": "Extensao Eletrica, Extensão Tomada, Régua Tomada, Régua de Energia, Filtro de Linha com Luz, 3 Tomadas, 2 Interfaces USB, 1 Porta USB Tipo-C, Suporte a Tensão de 110-220V, Potência de 2200W",
    "source_url": "https://www.amazon.com.br/dp/B0FL7G2ZD1",
    "image": "https://m.media-amazon.com/images/I/51DXSY5XOCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 55.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FL7G2ZD1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HF1K6XRP",
    "title": "Kit 4 Desumidificador Evita Mofo 180g Armário Guarda-Roupa E Closet | Absorção de Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0HF1K6XRP",
    "image": "https://m.media-amazon.com/images/I/71gADMDnAvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HF1K6XRP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DQVRNL95",
    "title": "Ola Coco Sabão Líquido para Roupas Delicadas, 3,8L",
    "source_url": "https://www.amazon.com.br/dp/B0DQVRNL95",
    "image": "https://m.media-amazon.com/images/I/514-mDTxZxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQVRNL95?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D8V3QLDD",
    "title": "Filtro de Linha CLAMPER iCLAMPER Energia 5, 5 Tomadas, Proteção Contra Surtos Elétricos, 10A, Bivolt, Cabo 1m, Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0D8V3QLDD",
    "image": "https://m.media-amazon.com/images/I/51rRxbJnGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8V3QLDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "source_url": "https://www.amazon.com.br/dp/B0DLVH2WN4",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CVNK6PDX",
    "title": "Varal De Chão 3 Andares Grande de Roupas Dobrável Regulável Retrátil com Rodinhas e Ganchos Compacto (PRETO)",
    "source_url": "https://www.amazon.com.br/dp/B0CVNK6PDX",
    "image": "https://m.media-amazon.com/images/I/71MrMt7YWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CVNK6PDX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B00RM1EC1S",
    "title": "SanDisk Cruzer Blade Pen Drive USB 2.0, 128 GB",
    "source_url": "https://www.amazon.com.br/dp/B00RM1EC1S",
    "image": "https://m.media-amazon.com/images/I/61DjwgS4cbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B00RM1EC1S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F67MQCGQ",
    "title": "L'Oréal Paris Elseve Liso dos Sonhos Kit Shampoo, Condicionador e Sérum, com Tecnologia Ativada por Calor para um Liso por 1 Semana, Efeito Antifrizz e Barreira Protetora Contra Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0F67MQCGQ",
    "image": "https://m.media-amazon.com/images/I/817zLg0L03L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F67MQCGQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0B3SW5SFN",
    "title": "Pro Stick Protetor Solar Facial FPS96 PRO30 14g Pink Cheeks",
    "source_url": "https://www.amazon.com.br/dp/B0B3SW5SFN",
    "image": "https://m.media-amazon.com/images/I/61TuhI4dsuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 82.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B3SW5SFN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F9Z3D8TZ",
    "title": "KIT SHAMPOO V-FLOC CERA TOK FINAL REVITALIZADOR INTENSE 240ML VONIXX PRETINHO VINTEX",
    "source_url": "https://www.amazon.com.br/dp/B0F9Z3D8TZ",
    "image": "https://m.media-amazon.com/images/I/71ZSd8p1KZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9Z3D8TZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0G7GVNP9K",
    "title": "Basike Mini Power Bank, Carregador Portátil Universal 10000mAh (Bege Claro) | Carregamento Rápido, USB-A (máx. 22,5W, QC) + USB-C (máx. 20W PD), Display Digital LED de Bateria, Proteção Inteligente",
    "source_url": "https://www.amazon.com.br/dp/B0G7GVNP9K",
    "image": "https://m.media-amazon.com/images/I/61Ab5M9tTUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 85.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G7GVNP9K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "8543111048",
    "title": "Atlas do Manual do Mundo",
    "source_url": "https://www.amazon.com.br/dp/8543111048",
    "image": "https://m.media-amazon.com/images/I/91+0jwCZJpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 86.35,
    "affiliate_url": "https://www.amazon.com.br/dp/8543111048?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H2G6W6L5",
    "title": "Kit 2 Cremes Pomadas de Assaduras Vit B5 com 100g cada, Total 200g - Bepantol Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H2G6W6L5",
    "image": "https://m.media-amazon.com/images/I/61GzAiD3PML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2G6W6L5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DSC8C4XH",
    "title": "Fralda Huggies Premium Dermacare XG - 38 Un",
    "source_url": "https://www.amazon.com.br/dp/B0DSC8C4XH",
    "image": "https://m.media-amazon.com/images/I/719yVPNSxpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSC8C4XH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BFT7BS3G",
    "title": "Tech T-shirt Gola U Masculino",
    "source_url": "https://www.amazon.com.br/dp/B0BFT7BS3G",
    "image": "https://m.media-amazon.com/images/I/41NMLoCbJIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFT7BS3G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0010ED5FC",
    "title": "Palmer's Palmers Cocoa Butter Formula Loção De Massagem Para Estrias 250Ml Palmers Cocoa Butter 250Ml",
    "source_url": "https://www.amazon.com.br/dp/B0010ED5FC",
    "image": "https://m.media-amazon.com/images/I/71T+JD0dadL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0010ED5FC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BH58QPYN",
    "title": "God of War Ragnarök - Edição Standard - PlayStation 4",
    "source_url": "https://www.amazon.com.br/dp/B0BH58QPYN",
    "image": "https://m.media-amazon.com/images/I/819bwWHNMJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BH58QPYN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BHJP2X1D",
    "title": "Tech T-shirt Gola V Masculino Azul Marinho GG",
    "source_url": "https://www.amazon.com.br/dp/B0BHJP2X1D",
    "image": "https://m.media-amazon.com/images/I/51dD3ZKIIiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BHJP2X1D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B08436QTVM",
    "title": "Sylvanian Families - Kitchen Island Jogo Conjunto de Cozinha, 3+ Anos, Multicor, 5442",
    "source_url": "https://www.amazon.com.br/dp/B08436QTVM",
    "image": "https://m.media-amazon.com/images/I/61gmyzMuPyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08436QTVM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B01643LCLW",
    "title": "Chapa Cerâmica Preta, Taiff, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B01643LCLW",
    "image": "https://m.media-amazon.com/images/I/51ArZ3wjjnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 90.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B01643LCLW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0C14S4QP1",
    "title": "DELET 5L",
    "source_url": "https://www.amazon.com.br/dp/B0C14S4QP1",
    "image": "https://m.media-amazon.com/images/I/616T+dLsYpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 93.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C14S4QP1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DKTWP58T",
    "title": "Coenzima Q10 200mg - 90 Cápsulas, CQ10 + Vitamina E 100% IDR, Fortalvit",
    "source_url": "https://www.amazon.com.br/dp/B0DKTWP58T",
    "image": "https://m.media-amazon.com/images/I/51Wgi9PHChL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 94.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKTWP58T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0C83852P7",
    "title": "Whey Protein 100% Isolada Baunilha 900g - Bodybuilders",
    "source_url": "https://www.amazon.com.br/dp/B0C83852P7",
    "image": "https://m.media-amazon.com/images/I/61UHK60uj8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.25,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C83852P7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DC8B7P7Z",
    "title": "Filtro de Linha iCLAMPER Energia 8 com Proteção contra Surtos Elétricos(DPS) 8 Tomadas, 3 Pinos, 10 Amperes para PC, Notebook, Monitor, Impressora, PS5, Alexa e etc, Bivolt, Cabo de 1m Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0DC8B7P7Z",
    "image": "https://m.media-amazon.com/images/I/51egF2vkxML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DC8B7P7Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BHTL6DJ1",
    "title": "Azeite de Oliva Andorinha Extra Virgem Pet 2L",
    "source_url": "https://www.amazon.com.br/dp/B0BHTL6DJ1",
    "image": "https://m.media-amazon.com/images/I/61gbGO8TzAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 103.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BHTL6DJ1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B095VF5GR7",
    "title": "Chuveiro Loren Shower Eletrônico 7500w 220v Lorenzetti",
    "source_url": "https://www.amazon.com.br/dp/B095VF5GR7",
    "image": "https://m.media-amazon.com/images/I/31fyFHV8H-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B095VF5GR7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B08826NL9L",
    "title": "Super Mario Blow Up! Shaky Tower",
    "source_url": "https://www.amazon.com.br/dp/B08826NL9L",
    "image": "https://m.media-amazon.com/images/I/619RvzScKCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 112.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08826NL9L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FVJWQ3PX",
    "title": "Electrolux Kit 16 Potes Herméticos Plástico Multiuso Vedação Silicone | BPA Free, Porta Mantimentos",
    "source_url": "https://www.amazon.com.br/dp/B0FVJWQ3PX",
    "image": "https://m.media-amazon.com/images/I/71PuXdjXGSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVJWQ3PX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07P84QGD3",
    "title": "Bolsa Lenna's Transversal Casual L023 Preto",
    "source_url": "https://www.amazon.com.br/dp/B07P84QGD3",
    "image": "https://m.media-amazon.com/images/I/71tJhkJZWbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B07P84QGD3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HGNHWCJ5",
    "title": "Kit 2 Filtros/Refis Originais de Água Acqua Pure para Purificador Electrolux PE12A/PE12B/PE12G/PE12V/PE12P",
    "source_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5",
    "image": "https://m.media-amazon.com/images/I/51+rMeILUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H1HJN945",
    "title": "Mstail Fonte de Água pra Gato, Bebedouro para Gatos Silenciosa Inox Carvão Ativado LED Indicador Fonte De Água para Cães e Gatos (2,2L, TY10)",
    "source_url": "https://www.amazon.com.br/dp/B0H1HJN945",
    "image": "https://m.media-amazon.com/images/I/6153UqMhayL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1HJN945?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DNHGQHMY",
    "title": "Bettdow SmartWatch, relogio smartwatch com Ecrã tátil e Alexa, à prova d'água IP68, relogio feminino e masculino, com 100+ modo esportivo e recebimento de notificações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DNHGQHMY",
    "image": "https://m.media-amazon.com/images/I/61jq8y1sVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNHGQHMY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FL7JNMDN",
    "title": "Filtro de Linha, Extensao Eletrica, Extensão Tomada, Torre de Tomada, Régua de Energia, 9 Tomadas, 4 Interfaces USB, 1 Porta USB Tipo-C, Suporte a Tensão de 110-220V, Potência de 2200W",
    "source_url": "https://www.amazon.com.br/dp/B0FL7JNMDN",
    "image": "https://m.media-amazon.com/images/I/51HmsdED1WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 123.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FL7JNMDN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "8546903034",
    "title": "Mapas: Uma viagem deslumbrante pelas terras, mares e culturas do mundo",
    "source_url": "https://www.amazon.com.br/dp/8546903034",
    "image": "https://m.media-amazon.com/images/I/8130+ioRaLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 125.62,
    "affiliate_url": "https://www.amazon.com.br/dp/8546903034?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CBSZ41J4",
    "title": "Britânia Britania Aspirador de Pó 2 em 1 Vertical, Preto, Filtro HEPA, Pisos e Carpetes, Elétrico, 220V, 1L, 1.43kg",
    "source_url": "https://www.amazon.com.br/dp/B0CBSZ41J4",
    "image": "https://m.media-amazon.com/images/I/41DJWLonAjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 125.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CBSZ41J4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H52LF5JF",
    "title": "Kit Lavagem Completa Shampoo Cera Tok Final Intense Sintra Fast Pneu Pretinho Acessórios",
    "source_url": "https://www.amazon.com.br/dp/B0H52LF5JF",
    "image": "https://m.media-amazon.com/images/I/71pzyI++-dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 128.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H52LF5JF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CNJFV6KH",
    "title": "Kit 10 Carrinhos Corrida Hot Wheels Mattel",
    "source_url": "https://www.amazon.com.br/dp/B0CNJFV6KH",
    "image": "https://m.media-amazon.com/images/I/81JAbsnq-KL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CNJFV6KH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0C4476NM8",
    "title": "Aspirador de Pó Philco Vertical 2 em 1 1450w Preto Pas1600p - 127",
    "source_url": "https://www.amazon.com.br/dp/B0C4476NM8",
    "image": "https://m.media-amazon.com/images/I/41inGaNI2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 131.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C4476NM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B09DDHKS8J",
    "title": "Ventisol ventilador Osc Coluna Turbo 6p 30cm pr 220v",
    "source_url": "https://www.amazon.com.br/dp/B09DDHKS8J",
    "image": "https://m.media-amazon.com/images/I/61QXZ5eY-7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B09DDHKS8J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FFT7WR18",
    "title": "Kit Pista Hot Wheels City Oficina Gorila Mattel 4 Anos Ou Mais | Conjunto de pistas com várias maneiras de jogar, inclui lançador e loop, compatível com faixa Speed Snap",
    "source_url": "https://www.amazon.com.br/dp/B0FFT7WR18",
    "image": "https://m.media-amazon.com/images/I/71ebd+koKtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFT7WR18?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FMRNB79J",
    "title": "Kit 2 Moedor de Pimenta e Sal Elétrico Automático, Sensor por Inclinação, Operação com Uma Mão, Luz LED, Carregamento por Tipo-C, Ajuste de Moagem, 135ml, Preto, para Cozinha e Churrasco",
    "source_url": "https://www.amazon.com.br/dp/B0FMRNB79J",
    "image": "https://m.media-amazon.com/images/I/819m9sNxOaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 152.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMRNB79J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BLT4LT1K",
    "title": "Real Techniques - Kit 4 pincéis Base e Face",
    "source_url": "https://www.amazon.com.br/dp/B0BLT4LT1K",
    "image": "https://m.media-amazon.com/images/I/81tNXEFUBYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 152.52,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BLT4LT1K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GMJKZ845",
    "title": "Bettdow smartwatch de 2,01 polegadas possui bateria com duração superior a 15 dias, mais de 120 modos esportivos, resistência à água 1ATM, relogio smartwatch com iOS e Android (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0GMJKZ845",
    "image": "https://m.media-amazon.com/images/I/7172QmXRePL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 153.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMJKZ845?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07F6LX5CC",
    "title": "Modelador 1 Curves, Taiff, Bivolt, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07F6LX5CC",
    "image": "https://m.media-amazon.com/images/I/51DTuoHiFQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 153.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B07F6LX5CC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DSPVKLCQ",
    "title": "AstroAI Compressor de ar de inflador de pneu de carro 12 V DC, bomba digital de pneu de 150 PSI com medidor de pressão, visor LCD grande, predefinição inteligente e parada automática, para carros",
    "source_url": "https://www.amazon.com.br/dp/B0DSPVKLCQ",
    "image": "https://m.media-amazon.com/images/I/71ARwjvitTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 154.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSPVKLCQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HCBJJBNS",
    "title": "Limpador a vapor portátil de 2500 W, máquina de limpeza a vapor pressurizada de alta temperatura, para carros, com escovas inclusas.",
    "source_url": "https://www.amazon.com.br/dp/B0HCBJJBNS",
    "image": "https://m.media-amazon.com/images/I/51fNKnPmdgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HCBJJBNS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FHGNMY4R",
    "title": "Basike Fone de Ouvido Bluetooth 6.0 Esportivo para Corrida, Intra-Auricular",
    "source_url": "https://www.amazon.com.br/dp/B0FHGNMY4R",
    "image": "https://m.media-amazon.com/images/I/61rkykIjWiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 158.16,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHGNMY4R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FBGDSRP7",
    "title": "Power Bank 30000mAh, Basike Carregador Portátil com Cabo(Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FBGDSRP7",
    "image": "https://m.media-amazon.com/images/I/61D6Zc5hctL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBGDSRP7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H11KZ8LQ",
    "title": "Nível a Laser 12 Linhas Verde 3D 360° Autonivelante, Modo Manual e Pulso, Controle Remoto com APP, Base Magnética, IP54, 2 Baterias de Lítio 2400mAh, Amarelo",
    "source_url": "https://www.amazon.com.br/dp/B0H11KZ8LQ",
    "image": "https://m.media-amazon.com/images/I/61TRZQ89rmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H11KZ8LQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0089WNKVC",
    "title": "BIODERMA Gel De Banho Antiressecamento Atoderm Gel Douche 1l",
    "source_url": "https://www.amazon.com.br/dp/B0089WNKVC",
    "image": "https://m.media-amazon.com/images/I/51ZZB-eyKnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 166.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0089WNKVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07QB4X554",
    "title": "Fogão Portátil 4 Bocas Asiatico Junior Braslar Preto",
    "source_url": "https://www.amazon.com.br/dp/B07QB4X554",
    "image": "https://m.media-amazon.com/images/I/51zBcPjIkoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 167.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B07QB4X554?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07GPRWFC5",
    "title": "Mouse Gamer Sem Fio Logitech G305 LIGHTSPEED com 6 Botões Programáveis e Até 12.000 DPI - Preto",
    "source_url": "https://www.amazon.com.br/dp/B07GPRWFC5",
    "image": "https://m.media-amazon.com/images/I/51sg9BLSMTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07GPRWFC5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BR4R72H2",
    "title": "NIIMBOT B1 Etiquetadora Térmica Bluetooth para Casa, Azul | Impressora Térmica 2 Polegadas com Etiquetas 50x30mm para Pequenos Negócios, Cozinha, Presentes e Organização Doméstica",
    "source_url": "https://www.amazon.com.br/dp/B0BR4R72H2",
    "image": "https://m.media-amazon.com/images/I/61mix91cVaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 182.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BR4R72H2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B09S3ST9V7",
    "title": "Primeira Casa Sylvanian Families",
    "source_url": "https://www.amazon.com.br/dp/B09S3ST9V7",
    "image": "https://m.media-amazon.com/images/I/61AW7oz-4XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 184.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S3ST9V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "source_url": "https://www.amazon.com.br/dp/B07VPFC6RN",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B08LDTVYSY",
    "title": "Hot Wheels City Pista de Brinquedo Reboque de Pista de Corridas para crianças a partir de 4 anos",
    "source_url": "https://www.amazon.com.br/dp/B08LDTVYSY",
    "image": "https://m.media-amazon.com/images/I/71DAXGh7CcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 197.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08LDTVYSY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DZQF2ZX4",
    "title": "Death Stranding 2: On the beach - PlayStation 5",
    "source_url": "https://www.amazon.com.br/dp/B0DZQF2ZX4",
    "image": "https://m.media-amazon.com/images/I/81mex-54PYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZQF2ZX4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "6525931274",
    "title": "Marvels Anotado",
    "source_url": "https://www.amazon.com.br/dp/6525931274",
    "image": "https://m.media-amazon.com/images/I/61rCD10VznL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.95,
    "affiliate_url": "https://www.amazon.com.br/dp/6525931274?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FGY1LVFK",
    "title": "3m Portão Grade Retrátil de Proteção para Bebês e Cachorros, Portaozinho de Escada Instalação Sem Furos, Trava Dupla,Operação com uma mão,Portao Segurança Bebê Pet, Cercado para Cachorros",
    "source_url": "https://www.amazon.com.br/dp/B0FGY1LVFK",
    "image": "https://m.media-amazon.com/images/I/816mAYjmrdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 204.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGY1LVFK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H2FC1Y5N",
    "title": "Mala Bordo 10kg Bagagem de Mão Expansivel Padrão ANAC com 4 Rodas duplas 360° Cadeado AntiFurto Mala de Viagem Alça Lateral com Divisória, Leve Resistente (Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0H2FC1Y5N",
    "image": "https://m.media-amazon.com/images/I/71RzyC87NGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 206.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2FC1Y5N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GZR6JJXK",
    "title": "Ropo Desumidificador elétrico Secapro 16-600ml, Previne mofo e fungo, bivolt.",
    "source_url": "https://www.amazon.com.br/dp/B0GZR6JJXK",
    "image": "https://m.media-amazon.com/images/I/41deIOmcnLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 210.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GZR6JJXK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B088MVWBM9",
    "title": "Philco Aspirador Pó Vertical Power Clean 2000W PAS4000V 127V",
    "source_url": "https://www.amazon.com.br/dp/B088MVWBM9",
    "image": "https://m.media-amazon.com/images/I/41El3TMO04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 211.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B088MVWBM9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B097J7J54H",
    "title": "Taiff SECADOR TOURMALINE 2100W 220, preto",
    "source_url": "https://www.amazon.com.br/dp/B097J7J54H",
    "image": "https://m.media-amazon.com/images/I/51gHJqqOYJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 241.31,
    "affiliate_url": "https://www.amazon.com.br/dp/B097J7J54H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "6560050416",
    "title": "BOX As Crônicas de Nárnia - Edição de Luxo",
    "source_url": "https://www.amazon.com.br/dp/6560050416",
    "image": "https://m.media-amazon.com/images/I/81erRs9DQDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 244.05,
    "affiliate_url": "https://www.amazon.com.br/dp/6560050416?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BQJVKVQR",
    "title": "TP-Link Tapo C500 Câmera de Segurança Wi-Fi Externa 360°, Full HD 1080p, Visão Noturna Colorida de Até 30 m, Detecção de Pessoas, IP65, Áudio Bidirecional, Alexa e MicroSD de Até 512 GB",
    "source_url": "https://www.amazon.com.br/dp/B0BQJVKVQR",
    "image": "https://m.media-amazon.com/images/I/41hQ4O29nKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 246.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQJVKVQR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0B5HT5DLP",
    "title": "Kit Pista Hot Wheels Torre de Corridas Mattel. Pista vertical com 2 níveis, lançadores duplos e garagem para estacionamento. Para crianças a partir de 4 anos.",
    "source_url": "https://www.amazon.com.br/dp/B0B5HT5DLP",
    "image": "https://m.media-amazon.com/images/I/71GL81k6nhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 249.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B5HT5DLP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GCBV6M3Y",
    "title": "Guerreiras do KPop Boneca Zoey com canção 4Y+",
    "source_url": "https://www.amazon.com.br/dp/B0GCBV6M3Y",
    "image": "https://m.media-amazon.com/images/I/816yf3IrziL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 256.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GCBV6M3Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GC8THCC8",
    "title": "Guerreiras do KPop Boneca Mira com canção 4Y+",
    "source_url": "https://www.amazon.com.br/dp/B0GC8THCC8",
    "image": "https://m.media-amazon.com/images/I/81JJlouRzbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 256.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GC8THCC8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F3LNP2PR",
    "title": "Little Live Pets - Porquinho",
    "source_url": "https://www.amazon.com.br/dp/B0F3LNP2PR",
    "image": "https://m.media-amazon.com/images/I/51rI3bMf1CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 258.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F3LNP2PR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D2S23NWC",
    "title": "Estante Livreiro Madesa 6906 com 6 Nichos",
    "source_url": "https://www.amazon.com.br/dp/B0D2S23NWC",
    "image": "https://m.media-amazon.com/images/I/414brxMgy9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 261.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D2S23NWC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GR4C98DB",
    "title": "Máquina de Café Expresso Elétrica Portátil, Mini Cafeteira de Viagem 3 em 1 com Aquecimento Automático e Tela Lcd, Compatível com Cápsulas e Pó de Café, Ideal Para Rv, Caminhadas e Escritório (Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0GR4C98DB",
    "image": "https://m.media-amazon.com/images/I/61rBvH4Cs4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 266.11,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GR4C98DB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07L4VJV1G",
    "title": "Britânia Bebedouro, Acqua, Preto, Bivolt, Estilo moderno e elegante Plástico",
    "source_url": "https://www.amazon.com.br/dp/B07L4VJV1G",
    "image": "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07L4VJV1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FM2X9H9H",
    "title": "Anker Zolo Power Bank 20.000mAh Turbo 45W, Carregador Portátil",
    "source_url": "https://www.amazon.com.br/dp/B0FM2X9H9H",
    "image": "https://m.media-amazon.com/images/I/51kA-OL8k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 278.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FM2X9H9H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GFPF5GKR",
    "title": "CLIMATIZADOR CLI09-01 BR/PR 9 LITROS 65W 127V VENTISOL",
    "source_url": "https://www.amazon.com.br/dp/B0GFPF5GKR",
    "image": "https://m.media-amazon.com/images/I/71H9zUq1b8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 279.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GFPF5GKR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B09479R49Z",
    "title": "Le Creuset Pote para Manteiga 170 ml Cerâmica Azul Caribe",
    "source_url": "https://www.amazon.com.br/dp/B09479R49Z",
    "image": "https://m.media-amazon.com/images/I/2123SCeoACL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 287.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B09479R49Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DCBX63TZ",
    "title": "M-VAVE Controlador MIDI Bluetooth 25 Teclas com 8 Pads RGB, Bateria de 16h e Teclado Dinâmico - Compatível com Ableton/FL Studio/iOS/Android (Branco)-embalagem original Autêntico",
    "source_url": "https://www.amazon.com.br/dp/B0DCBX63TZ",
    "image": "https://m.media-amazon.com/images/I/61SkfRwhRwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 288.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DCBX63TZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D9NJ6MJ9",
    "title": "Conjunto de Facas de Cozinha 10 Peças, Aço Inox, Cabo Madeira Preto",
    "source_url": "https://www.amazon.com.br/dp/B0D9NJ6MJ9",
    "image": "https://m.media-amazon.com/images/I/71G07vCvdYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 290.69,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9NJ6MJ9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B076JKD9XY",
    "title": "Kit para Assar e Servir Aço inox com Tampa de Vidro com 4 Peças Tramontina Cosmos Prata",
    "source_url": "https://www.amazon.com.br/dp/B076JKD9XY",
    "image": "https://m.media-amazon.com/images/I/51CaE2fhz-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 294.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B076JKD9XY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BX52C4LN",
    "title": "Mouse sem Fio Gamer HyperX Pulsefire Haste 2 – Ultraleve, 61 g, Wireless e Bluetooth 2,4GHz, até 26000 DPI, Sensor HyperX 26K, 100 Horas de Duração de Bateria, Preto (6N0B0AA)",
    "source_url": "https://www.amazon.com.br/dp/B0BX52C4LN",
    "image": "https://m.media-amazon.com/images/I/614KYrmdHoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 294.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BX52C4LN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07MP6T3CM",
    "title": "Le Creuset Porta Utensílios Clássico 1,1L Cerâmica Laranja",
    "source_url": "https://www.amazon.com.br/dp/B07MP6T3CM",
    "image": "https://m.media-amazon.com/images/I/51ga2bPKkNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 303.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B07MP6T3CM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FQJVM2YD",
    "title": "Bettdow SmartWatch GPS, Relogio Smartwatch Masculino e Feminino, 1,43 polegadas HD AMOLED, chamada Bluetooth, Esportivos relógio com voz por IA, Compatível com Android iOS, 2 Pulseiras (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FQJVM2YD",
    "image": "https://m.media-amazon.com/images/I/61lh+nNVCQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 305.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQJVM2YD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CNKVYLF5",
    "title": "Headset Gamer Redragon Zeus Pro Preto Sem Fio 7.1 H510-PRO",
    "source_url": "https://www.amazon.com.br/dp/B0CNKVYLF5",
    "image": "https://m.media-amazon.com/images/I/619T-Fp+EkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 317.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CNKVYLF5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CRHN3M8D",
    "title": "Gabinete Redragon Wideload Pro CA-604B-PRO",
    "source_url": "https://www.amazon.com.br/dp/B0CRHN3M8D",
    "image": "https://m.media-amazon.com/images/I/81ksnT7oAFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 318.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRHN3M8D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GT7FR4LH",
    "title": "Philips Walita Multiprocessador PowerChop 1000, Preto, Copo com capacidade de 1,5 litros, Duas velocidades + pulsar, 6 acessórios, 1000W, 110V (HR7304/93)",
    "source_url": "https://www.amazon.com.br/dp/B0GT7FR4LH",
    "image": "https://m.media-amazon.com/images/I/617DKTCqkjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GT7FR4LH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07BB4BY7Z",
    "title": "TP-Link RE450 Repetidor de Sinal Wi-Fi 5 AC1750 Dual Band, até 1300 Mbps em 5 GHz, 3 Antenas Externas, EasyMesh, Porta Gigabit, WPS e Access Point",
    "source_url": "https://www.amazon.com.br/dp/B07BB4BY7Z",
    "image": "https://m.media-amazon.com/images/I/41MRgtnOPCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 329.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BB4BY7Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B082F54KWV",
    "title": "SANTINO Mala de Bordo 10kg Rígida ABS 4 Rodas 360º com Segredo ANAC Leve Resistente Flexível Antifurto Azul Marinho tamanho 20 polegadas",
    "source_url": "https://www.amazon.com.br/dp/B082F54KWV",
    "image": "https://m.media-amazon.com/images/I/61jLwZzw2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 332.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B082F54KWV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F2F9F571",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10+/S9 Fe+/S9+/S8+/S7+/S7 FE de 12.4 polegadas,Teclado com LCD Display",
    "source_url": "https://www.amazon.com.br/dp/B0F2F9F571",
    "image": "https://m.media-amazon.com/images/I/61KS9L0zF4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 337.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2F9F571?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CYZGCJYC",
    "title": "Cadeira de jogos com encosto alto, apoios de braços fixos em quatro pontos, altura ajustável (Branco)",
    "source_url": "https://www.amazon.com.br/dp/B0CYZGCJYC",
    "image": "https://m.media-amazon.com/images/I/71NLqgTHsoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 341.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CYZGCJYC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GY8STGGL",
    "title": "Ventilador de Teto de Embutir com Luz 42 Polegadas, Controle Remoto, Motor Reversível, 6 Velocidades, LED Dimerizável, Silencioso para Quarto e Sala",
    "source_url": "https://www.amazon.com.br/dp/B0GY8STGGL",
    "image": "https://m.media-amazon.com/images/I/51ZtFi+fGkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 342.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GY8STGGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CNK9Q82J",
    "title": "INSMEER Capa Protetora Carro Pet, Proteção 7 Em 1 - À Prova D'Água, Fundo Rígido, Resistente Ao Desgaste, Lavável À Máquina, Ajuste Universal, Cinto De Segurança E Design De Rede, Preto",
    "source_url": "https://www.amazon.com.br/dp/B0CNK9Q82J",
    "image": "https://m.media-amazon.com/images/I/71X7asGxwbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 348.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CNK9Q82J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D98VXWXB",
    "title": "Philips Walita Fritadeira Airfryer Série 1000 XL 6,2L, Preta, 220V | Até 90% Menos Óleo – tecnologia RapidAir, 12 modos de preparo e controle analógico (NA130/09)",
    "source_url": "https://www.amazon.com.br/dp/B0D98VXWXB",
    "image": "https://m.media-amazon.com/images/I/510Uj5C7LdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 348.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98VXWXB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H83FD2RX",
    "title": "Cama Queen 158x198cm, Estrutura Metálica com Cabeceira, Preta | Estrutura metálica resistente com cabeceira e ripas de suporte, oferecendo estabilidade e apoio ao colchão",
    "source_url": "https://www.amazon.com.br/dp/B0H83FD2RX",
    "image": "https://m.media-amazon.com/images/I/61O0ged8UdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H83FD2RX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FWC8VXY5",
    "title": "Colchão de Ar Queen Size Premium, Inflável Portátil com Bomba de Lítio Embutida, Cama de Ar para Camping e Casa 203 * 152 * 46 cm (Casal)",
    "source_url": "https://www.amazon.com.br/dp/B0FWC8VXY5",
    "image": "https://m.media-amazon.com/images/I/61ggNLldiiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 351.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWC8VXY5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H5R66251",
    "title": "Bebedouro Philco Água Natural e Gelada Bivolt PBE10C BIV",
    "source_url": "https://www.amazon.com.br/dp/B0H5R66251",
    "image": "https://m.media-amazon.com/images/I/41H9aSEI0oL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 353.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5R66251?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H8R6ZHM5",
    "title": "VireColor Cadeira de Escritório Ergonômica Presidente Mesh 200kg Giratória | Preto, apoio lombar, apoio de cabeça 3D, pistão Classe 3 regulável 10cm, assento largo e malha respirável para home office",
    "source_url": "https://www.amazon.com.br/dp/B0H8R6ZHM5",
    "image": "https://m.media-amazon.com/images/I/71aXuj6+FEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H8R6ZHM5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FYNDSWJR",
    "title": "Cadeira Gamer Ergonômica com Estrutura Reforçada, Reclinação 90°-150°, Apoio de Braço Sincronizado e Suporte Lombar Ajustável – Conforto para Jogos e Home Office",
    "source_url": "https://www.amazon.com.br/dp/B0FYNDSWJR",
    "image": "https://m.media-amazon.com/images/I/71id2uujpsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 360.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FYNDSWJR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B076B9MT5W",
    "title": "Faqueiro Aço Inox com Faca para Churrasco 91 Peças Tramontina Laguna Prata",
    "source_url": "https://www.amazon.com.br/dp/B076B9MT5W",
    "image": "https://m.media-amazon.com/images/I/51yP3Gscd1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B076B9MT5W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HBZ1Z9ZJ",
    "title": "Jogo de Panelas 12 Peças Cerâmica Cabo Removível Empilhável Forno Indução Gás Motorhome (VERDE MILITAR 2)",
    "source_url": "https://www.amazon.com.br/dp/B0HBZ1Z9ZJ",
    "image": "https://m.media-amazon.com/images/I/51sj-g9po0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 369.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HBZ1Z9ZJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GP7KDZRJ",
    "title": "Tramontina Jogo de Panelas Veronese em Alumínio com Revestimento Cerâmico cor Bege 5 Peças.",
    "source_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ",
    "image": "https://m.media-amazon.com/images/I/51-bj9rtB7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 373.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CDR1SKHR",
    "title": "Jogo de Panelas Tramontina Turim em Alumínio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 10 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0CDR1SKHR",
    "image": "https://m.media-amazon.com/images/I/61AjgTFEaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CDR1SKHR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CFDQ7CL5",
    "title": "Anker MagGo Power Bank 10.000mAh, Carregador Portátil Qi2 15W, com MagSafe | Tela Inteligente e Suporte Dobrável, para iPhone 17/15/14/13/12, Inclui Cabo USB-C, Verde",
    "source_url": "https://www.amazon.com.br/dp/B0CFDQ7CL5",
    "image": "https://m.media-amazon.com/images/I/513SI2dh+NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFDQ7CL5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DR9WY641",
    "title": "Tênis Skechers De Caminhada Go Walk Glide-Step 2.0 Masculino Verde, 40",
    "source_url": "https://www.amazon.com.br/dp/B0DR9WY641",
    "image": "https://m.media-amazon.com/images/I/7137+cLwGpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DR9WY641?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CJTYM3FH",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0CJTYM3FH",
    "image": "https://m.media-amazon.com/images/I/71FrXc9T1SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 392.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJTYM3FH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D8QJRBV3",
    "title": "JBL, Fone de Ouvido Com Fio, Quantum 360 Wireless, Headset Gamer, Over Ear, Microfone Removível - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0D8QJRBV3",
    "image": "https://m.media-amazon.com/images/I/619cYdY-PkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 393.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8QJRBV3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CSD68PQ3",
    "title": "Cadeira De Escritório, Cadeira De Com Apoio Para Os Pés E Encosto Ajustável (Marrom)",
    "source_url": "https://www.amazon.com.br/dp/B0CSD68PQ3",
    "image": "https://m.media-amazon.com/images/I/61nm12ytu0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSD68PQ3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DSK924YL",
    "title": "INSMEER Cooler com Rodas e Alça, 80 Latas/50L Bolsa Termica, Carrinho de Cooler Retrátil 2-em-1, Coolers Grandes para Compras de Supermercado, Praia, Piquenique, Acampamento",
    "source_url": "https://www.amazon.com.br/dp/B0DSK924YL",
    "image": "https://m.media-amazon.com/images/I/71Sm9FNtl3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSK924YL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B087ZP3JXP",
    "title": "Panela de Pressão com 4,5 Litros em Inox – Tramontina",
    "source_url": "https://www.amazon.com.br/dp/B087ZP3JXP",
    "image": "https://m.media-amazon.com/images/I/41PrXgtEJLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 406.82,
    "affiliate_url": "https://www.amazon.com.br/dp/B087ZP3JXP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DZ3ZFTX9",
    "title": "Aparelho de Jantar Tramontina Azzura em Porcelana Decorada 30 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0DZ3ZFTX9",
    "image": "https://m.media-amazon.com/images/I/61DIbF8CqHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 412.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZ3ZFTX9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GVTD8FGK",
    "title": "Bettdow Monitor Portatil 15,6'', FHD 1080P Monitor Portátil Conectado Com USB C Dupla/HDMI, IPS Extensor De Tela para Notebook com VESA e Suporte ajustável Funda Inteligente magnético, Plug and Play",
    "source_url": "https://www.amazon.com.br/dp/B0GVTD8FGK",
    "image": "https://m.media-amazon.com/images/I/71UYSh5UOxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 423.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVTD8FGK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D1QWJYV9",
    "title": "Cadeira de Escritório Python Fly Leisure, Assento Extra Grande e Largo em Tecido (Bege)",
    "source_url": "https://www.amazon.com.br/dp/B0D1QWJYV9",
    "image": "https://m.media-amazon.com/images/I/71FuBCUj0SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 425.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1QWJYV9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DSC716CK",
    "title": "Meanwhile [VINYL]",
    "source_url": "https://www.amazon.com.br/dp/B0DSC716CK",
    "image": "https://m.media-amazon.com/images/I/81lf4si0lWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 449.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSC716CK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DQF98M5N",
    "title": "Buddemeyer Jogo de Cama King 300 Fios N.Colors II 100% Algodão Rosa 4 pç",
    "source_url": "https://www.amazon.com.br/dp/B0DQF98M5N",
    "image": "https://m.media-amazon.com/images/I/41+IrDuuosL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 455.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQF98M5N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HGRTHTX6",
    "title": "Bettdow Capa de Teclado para iPad Air 13 (M4 2026/M3 2025/M2 2024) and iPad Pro 12.9 inch 6th/5th/4th/3rd Generation, Retroiluminação de 7 Cores com Layout Português, Flexível e portátil",
    "source_url": "https://www.amazon.com.br/dp/B0HGRTHTX6",
    "image": "https://m.media-amazon.com/images/I/71qbZUhpqfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 474.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HGRTHTX6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DZ3LVGFW",
    "title": "Aparelho de Jantar Tramontina Nix em Porcelana Decorada 30 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0DZ3LVGFW",
    "image": "https://m.media-amazon.com/images/I/61OsJ8joAnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 484.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZ3LVGFW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D3WGTLVD",
    "title": "Caixa de Som Amplificada 380W Flash Lights Philco PCX4800",
    "source_url": "https://www.amazon.com.br/dp/B0D3WGTLVD",
    "image": "https://m.media-amazon.com/images/I/61il9+p7z6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 489.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3WGTLVD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CJYJH5TD",
    "title": "WAP Aspirador de Pó Vertical à Bateria ECO RÁPIDO Autonomia de 40 min, 2 Velocidades, 700ml, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0CJYJH5TD",
    "image": "https://m.media-amazon.com/images/I/61IrpNfTEZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 499.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJYJH5TD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GQ4XSSXX",
    "title": "Monitor Branco Philips 22\" 120Hz 1ms Gaming 221V8LBW3",
    "source_url": "https://www.amazon.com.br/dp/B0GQ4XSSXX",
    "image": "https://m.media-amazon.com/images/I/61nYkEIDxbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 508.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQ4XSSXX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GFQ2YZM7",
    "title": "Controle sem fio PlayStation DualSense™ – Techno Red",
    "source_url": "https://www.amazon.com.br/dp/B0GFQ2YZM7",
    "image": "https://m.media-amazon.com/images/I/61fryscYoEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 509.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GFQ2YZM7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07Q78BR5M",
    "title": "Aspirador de Pó vertical bateria Ergorapido 2 em 1 Electrolux 21min 2 velocidades capacidade 460Ml ERG21 Bivolt Branco",
    "source_url": "https://www.amazon.com.br/dp/B07Q78BR5M",
    "image": "https://m.media-amazon.com/images/I/51dF2DGJO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 509.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q78BR5M?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GXZHMT24",
    "title": "VEDO Piano Digital Infantil 37 Teclas, 128 Timbres, 128 Ritmos, 23 MúSicas De DemonstraçãO, Instrumento Musical Educativo, Madeira De Carvalho, Adequado Para Meninos E Meninas A Partir De 3 Anos",
    "source_url": "https://www.amazon.com.br/dp/B0GXZHMT24",
    "image": "https://m.media-amazon.com/images/I/61Tl0UsisWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 513.51,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXZHMT24?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0C5F2T4Q2",
    "title": "Cadeira Para Auto 0-36 Kg Mass Preta Litet - BB456",
    "source_url": "https://www.amazon.com.br/dp/B0C5F2T4Q2",
    "image": "https://m.media-amazon.com/images/I/61LfV3rwzHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 529.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C5F2T4Q2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D4TDV21R",
    "title": "Mochila Fjällräven Kånken Clássica, Fossil - 13L",
    "source_url": "https://www.amazon.com.br/dp/B0D4TDV21R",
    "image": "https://m.media-amazon.com/images/I/81pEFp4Ot3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 529.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D4TDV21R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GHZYTTVQ",
    "title": "JBL, Fone de Ouvido Esportivo, Endurance Peak 4, IP68, ANC - Branco",
    "source_url": "https://www.amazon.com.br/dp/B0GHZYTTVQ",
    "image": "https://m.media-amazon.com/images/I/41VCuV6hyGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 551.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHZYTTVQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FNMCDHHQ",
    "title": "Bicicleta Ergométrica Spinning 5kg Volante, Ajuste de Resistência, Monitor de Performance, Suporta até 150kg (Verde)",
    "source_url": "https://www.amazon.com.br/dp/B0FNMCDHHQ",
    "image": "https://m.media-amazon.com/images/I/6172Pxi79cL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 557.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNMCDHHQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BZ55JZ4S",
    "title": "eufy SoloCam S220 por anker, Câmera De Segurança, 2K, Solar Sem Fio | Monitoramento Inteligente por IA, Sem Taxa Mensal, Solar Sem Fio Externa, Compatível com Alexa, Wi-Fi externo,",
    "source_url": "https://www.amazon.com.br/dp/B0BZ55JZ4S",
    "image": "https://m.media-amazon.com/images/I/61vgk5H98qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 568.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ55JZ4S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D1DN9GR2",
    "title": "Teclado Mecânico Gamer Sem Fio Logitech G515 com Design TKL,Tecnologia LIGHTSPEED, RGB LIGHTSYNC, Conexão USB ou Bluetooth, Switch GL Brown Tactile e Bateria Recarregável - Branco",
    "source_url": "https://www.amazon.com.br/dp/B0D1DN9GR2",
    "image": "https://m.media-amazon.com/images/I/61kFc75+7OL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 569.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1DN9GR2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DJCFVZ3H",
    "title": "CADEIRA REDRAGON OFFICE HELA CINZA/BRANCO C214-W",
    "source_url": "https://www.amazon.com.br/dp/B0DJCFVZ3H",
    "image": "https://m.media-amazon.com/images/I/41mypw98hFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 569.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJCFVZ3H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H1HHP7ZW",
    "title": "OLANENEM 6 em 1 Berço Portátil, Berço Moisés com Fraldário e Mosquiteiro, Berço Acoplado à Cama com Suporte Triangular de Aço Carbono, 6 Alturas e Inclinação Antirrefluxo 5°(Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW",
    "image": "https://m.media-amazon.com/images/I/715Pm0wsEVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 588.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07JZFBJ9P",
    "title": "Armani Beauty, Stronger With You Intensely, Giorgio Armani Perfume Masculino EDP, Fragrância Fougère Amadeirada com Notas de Pimenta Rosa, Lavanda, Âmbar e Baunilha Defumada, 100ml",
    "source_url": "https://www.amazon.com.br/dp/B07JZFBJ9P",
    "image": "https://m.media-amazon.com/images/I/71MDnyOiJOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 591.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07JZFBJ9P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B09QLH5SHB",
    "title": "Casa de Bonecas Barbie Malibu Dois Andares Rosa Mattel",
    "source_url": "https://www.amazon.com.br/dp/B09QLH5SHB",
    "image": "https://m.media-amazon.com/images/I/81DFMqlGQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 599.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B09QLH5SHB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07PM2H5SH",
    "title": "JG.PANELAS ACO INOX 3PCS.SOLAR BAQ.",
    "source_url": "https://www.amazon.com.br/dp/B07PM2H5SH",
    "image": "https://m.media-amazon.com/images/I/51TwCyj9VNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 619.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B07PM2H5SH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H6FMBS39",
    "title": "Basike Caixa de Som Estéreo Sem Fio, Boombox 200W, Bluetooth, cor camuflada",
    "source_url": "https://www.amazon.com.br/dp/B0H6FMBS39",
    "image": "https://m.media-amazon.com/images/I/71s7iYLQYoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 626.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FMBS39?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B096Y1GKF5",
    "title": "Placa Mãe MSI B840M GAMING WIFI6E (AM5/2xDDR5/HDMI/DisplayPort/M.2/USB 3.2)",
    "source_url": "https://www.amazon.com.br/dp/B096Y1GKF5",
    "image": "https://m.media-amazon.com/images/I/71OWIXXAZBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 669.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B096Y1GKF5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HFW9W9YM",
    "title": "Tablet Xixaomiro S11 Pad 10.1\" Android 15, 128GB ROM + 12GB RAM, Tela 120Hz, Octa-Core, Câmera 13MP + 5MP, Bateria 8000mAh, Kit com Teclado, Mouse e Caneta Stylus para Trabalho e Estudos (Cinza claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9W9YM",
    "image": "https://m.media-amazon.com/images/I/71F9iYxWjNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9W9YM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GL1P8M8R",
    "title": "Fone de Ouvido Sem Fio, HUAWEI FreeBuds Pro 5, Cancelamento de Ruído com IA de Motor Duplo, Som Ultra Imersivo, Chamadas Estáveis e Nítidas, IP57, Até 38 horas Autonomia de Bateria, Cinza",
    "source_url": "https://www.amazon.com.br/dp/B0GL1P8M8R",
    "image": "https://m.media-amazon.com/images/I/61Kzs2TAeNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 779.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL1P8M8R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F8PBHHX9",
    "title": "First and Last and Always (40th Anniversary)",
    "source_url": "https://www.amazon.com.br/dp/B0F8PBHHX9",
    "image": "https://m.media-amazon.com/images/I/61MEbZA-mqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 807.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8PBHHX9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DHWFBYVC",
    "title": "Smartphone Motorola Moto g35 5G - 128GB 12GB (4GB RAM+8GB Ram Boost) e Camera 50MP com AI NFC Tela 6.7\" com Superbrilho - Verde",
    "source_url": "https://www.amazon.com.br/dp/B0DHWFBYVC",
    "image": "https://m.media-amazon.com/images/I/61pGaBV+-AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 849.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHWFBYVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0BJ6PGFPM",
    "title": "eufy HomeBase3, Local Expansível até 16TB, Reconhecimento Facial por IA | armazenamento expansível até 16TB, armazenamento local, criptografia avançada, ecossistema eufy Security, Sem taxas mensais",
    "source_url": "https://www.amazon.com.br/dp/B0BJ6PGFPM",
    "image": "https://m.media-amazon.com/images/I/51IRm0RSpBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 854.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BJ6PGFPM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GVY4M1WX",
    "title": "Anker soundcore Work Gravador de Voz com IA, 64 GB, Certificado MFi, 32h | 150+ Idiomas, Vestível, Carregamento USB-C, 32H de Gravação, Find My, Transcrição e Resumo com IA, Certificado MFi pela Apple",
    "source_url": "https://www.amazon.com.br/dp/B0GVY4M1WX",
    "image": "https://m.media-amazon.com/images/I/61sTbdao7CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVY4M1WX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0D2NPSGH5",
    "title": "Relógio Inteligente Amazfit Balance 46mm A2287 ZEPP FOLOW Composição Corporal, GPS, Step Tracking, Alexa Built-In, Chamada Bluetooth, Duração da Bateria de 14 Dias (Black)",
    "source_url": "https://www.amazon.com.br/dp/B0D2NPSGH5",
    "image": "https://m.media-amazon.com/images/I/61hw4IVvmkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 931.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D2NPSGH5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FGDKYGFS",
    "title": "Monitor AOC 27\" 4K IPS 106% NTSC 97% DCI-P3 Speakers U27B3A",
    "source_url": "https://www.amazon.com.br/dp/B0FGDKYGFS",
    "image": "https://m.media-amazon.com/images/I/71V0IzDsUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGDKYGFS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B09MZKNRW3",
    "title": "Desumidificador Ar Ambiente Elétrico Portátil Pure Ion Antimofo Max Bivolt - Reservatório de 3 Litros - Relaxmedic",
    "source_url": "https://www.amazon.com.br/dp/B09MZKNRW3",
    "image": "https://m.media-amazon.com/images/I/61NIkKGVw3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1048.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MZKNRW3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DSJXKX9T",
    "title": "Freezer Horizontal 140L Philco PFH160B Dupla Função 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DSJXKX9T",
    "image": "https://m.media-amazon.com/images/I/41L7rxtRkIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1076.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSJXKX9T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GKPLCRCM",
    "title": "WAP Extratora e Aspirador Barril Carpet Cleaner Pro 25 1700W 2250mmH20 Com 8m de Alcance e Acabamento em Inox (220, Volts)",
    "source_url": "https://www.amazon.com.br/dp/B0GKPLCRCM",
    "image": "https://m.media-amazon.com/images/I/51XNWY9hbIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1097.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKPLCRCM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H2CWWK2P",
    "title": "QBuen Esteira Ergométrica Eletrica Bivolt Silenciosa com Bluetooth e LED, 2.5HP Motor <45dB, Inclinação 1°/6°, Amortecimento de Impacto, Velocidade 1-10km/h, Capacidade 120kg, Dobrável com Rodinhas",
    "source_url": "https://www.amazon.com.br/dp/B0H2CWWK2P",
    "image": "https://m.media-amazon.com/images/I/81Y3U-m8KkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1329.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2CWWK2P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GLQPPTLR",
    "title": "Smartphone Motorola Moto G67 5G - 128GB 12GB (4GB RAM + 8GB RAM Boost) camera 50MP Sony Lytia 600, tela 1.5K extreme Amoled 120hz, ultrarresistente - Verde Claro",
    "source_url": "https://www.amazon.com.br/dp/B0GLQPPTLR",
    "image": "https://m.media-amazon.com/images/I/611nOISxRYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1348.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLQPPTLR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B017RBNOI4",
    "title": "Volante e Pedais Logitech G29 Driving Force com Force Feedback para PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B017RBNOI4",
    "image": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B017RBNOI4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H6FJBWJ3",
    "title": "Caixa de Som, Basike, Boombox F10 Pro, Bluetooth, 500W, TWS (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0H6FJBWJ3",
    "image": "https://m.media-amazon.com/images/I/71aofa72diL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1611.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FJBWJ3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FH5NMXHK",
    "title": "Monitor Gamer Alienware 25\", Full Hd, 320 Hz, Fast Ips, Aw2525hm",
    "source_url": "https://www.amazon.com.br/dp/B0FH5NMXHK",
    "image": "https://m.media-amazon.com/images/I/6106dbww1XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1639.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH5NMXHK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GLSLLGZL",
    "title": "Smartphone Motorola Moto G77 5g - 256GB 24GB (8GB RAM + 16GB RAM Boost) camera 108MP Ultra-Pixel, tela 1.5k extreme Amoled 120hz, ultrarresistente - Marrom",
    "source_url": "https://www.amazon.com.br/dp/B0GLSLLGZL",
    "image": "https://m.media-amazon.com/images/I/61zXvb3EmiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLSLLGZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F2H7XVW4",
    "title": "Projetor Bettdow Full HD 1080p, 850 ANSI Lumens, Android 9.0 e Google TV, WiFi 6, Bluetooth 5.0, Suporte 4K",
    "source_url": "https://www.amazon.com.br/dp/B0F2H7XVW4",
    "image": "https://m.media-amazon.com/images/I/71wx3LUeVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1775.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2H7XVW4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0HCR2X6T2",
    "title": "Electrolux Máquina de Lavar Electrolux Efficient 13kg Branca Compacta, Econômica e Pré-diluição (LET13) 127V",
    "source_url": "https://www.amazon.com.br/dp/B0HCR2X6T2",
    "image": "https://m.media-amazon.com/images/I/51QG54NbvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HCR2X6T2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FRCM6QZS",
    "title": "Forno de Embutir Elétrico Electrolux 80L Experience Air fryer, PerfectCook360 e Painel Touch (OE8EA)",
    "source_url": "https://www.amazon.com.br/dp/B0FRCM6QZS",
    "image": "https://m.media-amazon.com/images/I/51KrDPasvRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1847.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FRCM6QZS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F9LH6V3F",
    "title": "Ar condicionado janela Hisense 12000 btus frio aw-12cr2rwgu00 220v",
    "source_url": "https://www.amazon.com.br/dp/B0F9LH6V3F",
    "image": "https://m.media-amazon.com/images/I/61QKhuYUFvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1858.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9LH6V3F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H2NF3JXT",
    "title": "Freezer Horizontal Electrolux HB250 245 Litros Inverter 1 Porta Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H2NF3JXT",
    "image": "https://m.media-amazon.com/images/I/31oeND3LWUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1861.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NF3JXT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B07GWYBP6T",
    "title": "FISCHER COOKTOP À GÁS 5 BOCAS PLATINIUM MESA PRIME BIVOLT - 19784-51515",
    "source_url": "https://www.amazon.com.br/dp/B07GWYBP6T",
    "image": "https://m.media-amazon.com/images/I/51jQhYvPmlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1888.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B07GWYBP6T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GVT7QXF7",
    "title": "Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", NFC, Recursos AI, Até 6 Atualizações de Android e Segurança (Lilás)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT7QXF7",
    "image": "https://m.media-amazon.com/images/I/51VZg1VWMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1898.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT7QXF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FCSP9NS4",
    "title": "Ar Condicionado 9000 Btus Split Hi Wall Inverter Midea Frio Ai Ecomaster 220v",
    "source_url": "https://www.amazon.com.br/dp/B0FCSP9NS4",
    "image": "https://m.media-amazon.com/images/I/51XHzWTiUPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1918.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCSP9NS4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FH5VGDQC",
    "title": "Electrolux Lava-Louça Electrolux 8 Serviços Inox com Programa Lava & Seca 50 min (LS08E) 127V",
    "source_url": "https://www.amazon.com.br/dp/B0FH5VGDQC",
    "image": "https://m.media-amazon.com/images/I/41Q4P2GkUIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1987.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH5VGDQC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H63DM2JB",
    "title": "Freezer Electrolux Vertical FEI19T 175L 1 Porta Branco Bivolt | Freezer | Freezer",
    "source_url": "https://www.amazon.com.br/dp/B0H63DM2JB",
    "image": "https://m.media-amazon.com/images/I/31YHyP-32iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63DM2JB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DXTHQTGM",
    "title": "Monitor Gamer BenQ Mobiuz EX271Q 27” 1ms 2K 180Hz Freesync",
    "source_url": "https://www.amazon.com.br/dp/B0DXTHQTGM",
    "image": "https://m.media-amazon.com/images/I/71104Q8EbwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DXTHQTGM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GVT6FMNG",
    "title": "Celular Samsung Galaxy A37 5g 256GB, 8GB RAM, Câmera Tripla de até 50MP Ois, Selfie de 12MP Video Hdr, Ip68, Tela Super AMOLED 6.7\", Recursos AI, Até 6 Atualizações de Android e Segurança (Branco)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT6FMNG",
    "image": "https://m.media-amazon.com/images/I/51gN3j6H4ML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2098.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT6FMNG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B09B929QDL",
    "title": "Máquina de Lavar 17kg Electrolux Essential Care com Cesto Inox, Jet&Clean e Ultra Filter (LED17) 220v",
    "source_url": "https://www.amazon.com.br/dp/B09B929QDL",
    "image": "https://m.media-amazon.com/images/I/41cbbClO-jL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09B929QDL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H41D4KFT",
    "title": "AMD Processador Ryzen 7 5800X3D de 8 núcleos e 16 threads para desktop com tecnologia AMD 3D V-Cache",
    "source_url": "https://www.amazon.com.br/dp/B0H41D4KFT",
    "image": "https://m.media-amazon.com/images/I/61vkFq7H9tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H41D4KFT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B00TAAJZBG",
    "title": "Batedeira Planetária Artisan KitchenAid Empire Red 110V",
    "source_url": "https://www.amazon.com.br/dp/B00TAAJZBG",
    "image": "https://m.media-amazon.com/images/I/51wQoa4aTML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2242.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B00TAAJZBG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FPBQY5GR",
    "title": "PHILIPS Smart TV, 55\" 4K, 55PUG7300, Comando de Voz, Bluetooth, HDR, Dolby Atmos, HDMI, USB, Wi-Fi",
    "source_url": "https://www.amazon.com.br/dp/B0FPBQY5GR",
    "image": "https://m.media-amazon.com/images/I/71d6BkXy+rL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBQY5GR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H72MVDRZ",
    "title": "Vaso Inteligente Sanitario Smart Led Branco 220v Multifunções Ducha Sensor",
    "source_url": "https://www.amazon.com.br/dp/B0H72MVDRZ",
    "image": "https://m.media-amazon.com/images/I/41weoCQJ9YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2584.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H72MVDRZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0H8B4YGQN",
    "title": "Positivo Notebook Vision R15m Amd Ryzen 5 8gb 256gb Ssd W11",
    "source_url": "https://www.amazon.com.br/dp/B0H8B4YGQN",
    "image": "https://m.media-amazon.com/images/I/51zC0JF++aL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3099.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H8B4YGQN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0FPBPDWZQ",
    "title": "PHILIPS, Smart TV Ambilight 65\" 4K, Titan OS, 65PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ",
    "image": "https://m.media-amazon.com/images/I/61-b5p1Qg-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0DSXX6XB3",
    "title": "Celular Samsung Galaxy S25 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.2\", Prata",
    "source_url": "https://www.amazon.com.br/dp/B0DSXX6XB3",
    "image": "https://m.media-amazon.com/images/I/61ypIBTp6vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSXX6XB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GXX289YD",
    "title": "Notebook ASUS Vivobook 15 Intel Core i5 1334U 8GB RAM 512GB SSD 15,6\" Full HD Windows 11 X1504VA-NJ3957W",
    "source_url": "https://www.amazon.com.br/dp/B0GXX289YD",
    "image": "https://m.media-amazon.com/images/I/51ML6E3lGlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXX289YD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "source_url": "https://www.amazon.com.br/dp/B0F5X4NPK2",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0CB1QS325",
    "title": "Samsung Galaxy Book3 360 Intel® Core™ i5-1335U, Windows 11 Home, 8 GB, 256 GB SSD, 13.3\" Full HD AMOLED, 1.16 kg*",
    "source_url": "https://www.amazon.com.br/dp/B0CB1QS325",
    "image": "https://m.media-amazon.com/images/I/51xhBW18BEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CB1QS325?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GKQNGV23",
    "title": "Celular Samsung Galaxy S26 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.3\" - Azul",
    "source_url": "https://www.amazon.com.br/dp/B0GKQNGV23",
    "image": "https://m.media-amazon.com/images/I/61eUOIh87pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4775.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQNGV23?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  },
  {
    "asin": "B0GPN3XW9T",
    "title": "Bicicleta Elétrica HDJ G60 Aro 20 - Motor 1000W, Bateria 48V 15Ah 32Mph, Até 50km Autonomia, Suspensão Dupla, Freio Hidráulico, 7 Velocidades - Mobilidade Urbana para Adultos",
    "source_url": "https://www.amazon.com.br/dp/B0GPN3XW9T",
    "image": "https://m.media-amazon.com/images/I/61vGR09GeeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6174.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPN3XW9T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-20T12:12:41.000Z"
  }
];
