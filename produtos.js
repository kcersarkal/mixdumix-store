const PRODUCTS = [
  {
    "asin": "B09547GF99",
    "title": "Scala Plus Papel Toalha Multipicote, 200 Toalhas (2 Rolos de 100 Toalhas Cada)",
    "source_url": "https://www.amazon.com.br/dp/B09547GF99",
    "image": "https://m.media-amazon.com/images/I/71Q5B8kAMtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B09547GF99?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B08BR7FS8J",
    "title": "Ricca Shampoo A Seco Maçã do Amor 150ml",
    "source_url": "https://www.amazon.com.br/dp/B08BR7FS8J",
    "image": "https://m.media-amazon.com/images/I/51Lr+m3CYxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 18.51,
    "affiliate_url": "https://www.amazon.com.br/dp/B08BR7FS8J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FMLBQ136",
    "title": "KitKat Creme Crocante de Chocolate – Pasta para Passar, 330 g",
    "source_url": "https://www.amazon.com.br/dp/B0FMLBQ136",
    "image": "https://m.media-amazon.com/images/I/61VAMMzECnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMLBQ136?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07DKKQ1TN",
    "title": "L'Oréal Paris Elseve Óleo Extraordinário Creme de Tratamento para Nutrição Intensa de Cabelos Secos, com Micro-Óleos de Flores Preciosas para Maciez e Brilho 300g",
    "source_url": "https://www.amazon.com.br/dp/B07DKKQ1TN",
    "image": "https://m.media-amazon.com/images/I/715M+mgR5ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DKKQ1TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B08CNBSPBD",
    "title": "PAYOT Sabonete Liquido Detox, Vitamina C, 220 Ml",
    "source_url": "https://www.amazon.com.br/dp/B08CNBSPBD",
    "image": "https://m.media-amazon.com/images/I/51OGIf4IxHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08CNBSPBD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0779BRVVS",
    "title": "SCOTCH 3M Fita Dupla-face Fixa Forte Extrema 24 mm x 2 m 1 Unidade | Suporta até 5 kg por 20 cm, Fixação Permanente, Ideal para Objetos Mais Pesados, Substitui Pregos e Parafusos",
    "source_url": "https://www.amazon.com.br/dp/B0779BRVVS",
    "image": "https://m.media-amazon.com/images/I/71mEwfbHotL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0779BRVVS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0G45G116D",
    "title": "Shampoo Encorpador L'Oréal Paris Elseve Collagen® Lifter 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0G45G116D",
    "image": "https://m.media-amazon.com/images/I/71JdSG1QhRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45G116D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07FYNMF8B",
    "title": "Azeite Andorinha Spray Extra Virgem 200ml",
    "source_url": "https://www.amazon.com.br/dp/B07FYNMF8B",
    "image": "https://m.media-amazon.com/images/I/61m+etOgWxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B07FYNMF8B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CTTVR415",
    "title": "Leave-In L'Oréal Paris Elseve Reparação Total 5 Cicatri Renov 100ml | Reparação Instantânea, Desembaraço Imediato, Repara os Danos Fio a Fio, Para Todos os Tipos de Cabelo",
    "source_url": "https://www.amazon.com.br/dp/B0CTTVR415",
    "image": "https://m.media-amazon.com/images/I/61yXyxU11AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTTVR415?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07XTR3YQ6",
    "title": "Salton Espumante Prosecco Brut 750 Ml",
    "source_url": "https://www.amazon.com.br/dp/B07XTR3YQ6",
    "image": "https://m.media-amazon.com/images/I/61MEMzoeMkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XTR3YQ6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B077C3VFR5",
    "title": "CHARMING Hair Spray Fixador 400 Ml Black Unit Charming",
    "source_url": "https://www.amazon.com.br/dp/B077C3VFR5",
    "image": "https://m.media-amazon.com/images/I/41YUCMT0OnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 32.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B077C3VFR5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D3CT4H1J",
    "title": "Protetor Contra Surtos Elétricos (DPS) CLAMPER 127/220V, 10 Amperes, 3 Pinos, para PC, PS5, Xbox, Smartphone, Monitor, Impressora, etc - iCLAMPER Pocket Fit 3P 10A Transparente LCF, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0D3CT4H1J",
    "image": "https://m.media-amazon.com/images/I/41UZqy2PB-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 35.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3CT4H1J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07VGF2P6L",
    "title": "L'Oréal Paris Revitalift Hialurônico Creme Facial Noturno, com Ácido Hialurônico Puro, Com textura leve, preenche linhas de expressão e hidrata a pele intensamente por 24h, 49g",
    "source_url": "https://www.amazon.com.br/dp/B07VGF2P6L",
    "image": "https://m.media-amazon.com/images/I/51dnpdlO-zS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VGF2P6L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "8543111536",
    "title": "Murdoku: 80 mistérios para resolver usando a lógica",
    "source_url": "https://www.amazon.com.br/dp/8543111536",
    "image": "https://m.media-amazon.com/images/I/81BZuXOk+7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 38.94,
    "affiliate_url": "https://www.amazon.com.br/dp/8543111536?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B077BY5B8Q",
    "title": "Maybelline NY The Colossal Volum' Express, Máscara de Cílios Lavável, 9x Mais Volume por Até 24h, Fórmula com Colágeno para Definição Intensa, Não Empelota, Cor Preto, 8ml",
    "source_url": "https://www.amazon.com.br/dp/B077BY5B8Q",
    "image": "https://m.media-amazon.com/images/I/51rTd-hhlGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 40.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY5B8Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B073ZJLSPD",
    "title": "Retoque Instantâneo Magic Retouch, Castanho Claro, L'Oréal Paris",
    "source_url": "https://www.amazon.com.br/dp/B073ZJLSPD",
    "image": "https://m.media-amazon.com/images/I/61LlJuqd69L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B073ZJLSPD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BRX3HMXP",
    "title": "Payot Po Facial Payot Retinol Translucido Matte",
    "source_url": "https://www.amazon.com.br/dp/B0BRX3HMXP",
    "image": "https://m.media-amazon.com/images/I/51LKY+hOFmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 52.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BRX3HMXP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CXJLK24Y",
    "title": "Nescau Bebida Láctea 180ml caixa com 27 unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CXJLK24Y",
    "image": "https://m.media-amazon.com/images/I/61gtHqTqSkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXJLK24Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DQVRNL95",
    "title": "Ola Coco Sabão Líquido para Roupas Delicadas, 3,8L",
    "source_url": "https://www.amazon.com.br/dp/B0DQVRNL95",
    "image": "https://m.media-amazon.com/images/I/514-mDTxZxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQVRNL95?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D8V3QLDD",
    "title": "Filtro de Linha CLAMPER iCLAMPER Energia 5, 5 Tomadas, Proteção Contra Surtos Elétricos, 10A, Bivolt, Cabo 1m, Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0D8V3QLDD",
    "image": "https://m.media-amazon.com/images/I/51rRxbJnGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8V3QLDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "source_url": "https://www.amazon.com.br/dp/B0DLVH2WN4",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0985RJT3K",
    "title": "Philco Ferro a Vapor Travel Ceramic Bivolt Base em Cerâmica",
    "source_url": "https://www.amazon.com.br/dp/B0985RJT3K",
    "image": "https://m.media-amazon.com/images/I/51cMAvfwILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0985RJT3K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09H8P5L6J",
    "title": "Kit Hidratante Facial L'Oréal Paris Revitalift Hialurônico Diurno FPS 20 + Noturno, Tratamento Antirrugas e Preenchedor com Ácido Hialurônico Puro, 49g",
    "source_url": "https://www.amazon.com.br/dp/B09H8P5L6J",
    "image": "https://m.media-amazon.com/images/I/51CqsKH0b9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09H8P5L6J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F67MQCGQ",
    "title": "L'Oréal Paris Elseve Liso dos Sonhos Kit Shampoo, Condicionador e Sérum, com Tecnologia Ativada por Calor para um Liso por 1 Semana, Efeito Antifrizz e Barreira Protetora Contra Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0F67MQCGQ",
    "image": "https://m.media-amazon.com/images/I/817zLg0L03L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F67MQCGQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0G7H17S39",
    "title": "Basike Mini Power Bank, Carregador Portátil 10000mAh, Rápido 22,5W (Preto) | USB-A + USB-C (máx. 20W PD), 2 Cabos Integrados (USB-C e Lightning), Display Digital LED de Bateria, Proteção Inteligente",
    "source_url": "https://www.amazon.com.br/dp/B0G7H17S39",
    "image": "https://m.media-amazon.com/images/I/61dJyealm6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 81.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G7H17S39?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F9Z3D8TZ",
    "title": "KIT SHAMPOO V-FLOC CERA TOK FINAL REVITALIZADOR INTENSE 240ML VONIXX PRETINHO VINTEX",
    "source_url": "https://www.amazon.com.br/dp/B0F9Z3D8TZ",
    "image": "https://m.media-amazon.com/images/I/71ZSd8p1KZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9Z3D8TZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DSC8C4XH",
    "title": "Fralda Huggies Premium Dermacare XG - 38 Un",
    "source_url": "https://www.amazon.com.br/dp/B0DSC8C4XH",
    "image": "https://m.media-amazon.com/images/I/719yVPNSxpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSC8C4XH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0010ED5FC",
    "title": "Palmer's Palmers Cocoa Butter Formula Loção De Massagem Para Estrias 250Ml Palmers Cocoa Butter 250Ml",
    "source_url": "https://www.amazon.com.br/dp/B0010ED5FC",
    "image": "https://m.media-amazon.com/images/I/71T+JD0dadL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0010ED5FC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BH58QPYN",
    "title": "God of War Ragnarök - Edição Standard - PlayStation 4",
    "source_url": "https://www.amazon.com.br/dp/B0BH58QPYN",
    "image": "https://m.media-amazon.com/images/I/819bwWHNMJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BH58QPYN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BFTGGBRP",
    "title": "Tech T-shirt Gola U Masculino",
    "source_url": "https://www.amazon.com.br/dp/B0BFTGGBRP",
    "image": "https://m.media-amazon.com/images/I/61drI9s-tiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFTGGBRP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B01643LCLW",
    "title": "Chapa Cerâmica Preta, Taiff, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B01643LCLW",
    "image": "https://m.media-amazon.com/images/I/51ArZ3wjjnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 90.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B01643LCLW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BHTL6DJ1",
    "title": "Azeite de Oliva Andorinha Extra Virgem Pet 2L",
    "source_url": "https://www.amazon.com.br/dp/B0BHTL6DJ1",
    "image": "https://m.media-amazon.com/images/I/61gbGO8TzAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 103.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BHTL6DJ1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B095VF5GR7",
    "title": "Chuveiro Loren Shower Eletrônico 7500w 220v Lorenzetti",
    "source_url": "https://www.amazon.com.br/dp/B095VF5GR7",
    "image": "https://m.media-amazon.com/images/I/31fyFHV8H-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B095VF5GR7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FVJWQ3PX",
    "title": "Electrolux Kit 16 Potes Herméticos Plástico Multiuso Vedação Silicone | BPA Free, Porta Mantimentos",
    "source_url": "https://www.amazon.com.br/dp/B0FVJWQ3PX",
    "image": "https://m.media-amazon.com/images/I/71PuXdjXGSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVJWQ3PX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HGNHWCJ5",
    "title": "Kit 2 Filtros/Refis Originais de Água Acqua Pure para Purificador Electrolux PE12A/PE12B/PE12G/PE12V/PE12P",
    "source_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5",
    "image": "https://m.media-amazon.com/images/I/51+rMeILUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D9PM7MDP",
    "title": "Aspirador de Pó Vertical Britânia 2 em 1 com Filtro Ciclone 1400W BAS30 1,5L Azul 127V",
    "source_url": "https://www.amazon.com.br/dp/B0D9PM7MDP",
    "image": "https://m.media-amazon.com/images/I/41BWOPa7xqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9PM7MDP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H1HJN945",
    "title": "Mstail Fonte de Água pra Gato, Bebedouro para Gatos Silenciosa Inox Carvão Ativado LED Indicador Fonte De Água para Cães e Gatos (2,2L, TY10)",
    "source_url": "https://www.amazon.com.br/dp/B0H1HJN945",
    "image": "https://m.media-amazon.com/images/I/6153UqMhayL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1HJN945?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DNHGQHMY",
    "title": "Bettdow SmartWatch, relogio smartwatch com Ecrã tátil e Alexa, à prova d'água IP68, relogio feminino e masculino, com 100+ modo esportivo e recebimento de notificações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DNHGQHMY",
    "image": "https://m.media-amazon.com/images/I/61jq8y1sVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNHGQHMY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FL7JNMDN",
    "title": "Filtro de Linha, Extensao Eletrica, Extensão Tomada, Torre de Tomada, Régua de Energia, 9 Tomadas, 4 Interfaces USB, 1 Porta USB Tipo-C, Suporte a Tensão de 110-220V, Potência de 2200W",
    "source_url": "https://www.amazon.com.br/dp/B0FL7JNMDN",
    "image": "https://m.media-amazon.com/images/I/51HmsdED1WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 123.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FL7JNMDN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CBSZ41J4",
    "title": "Britânia Britania Aspirador de Pó 2 em 1 Vertical, Preto, Filtro HEPA, Pisos e Carpetes, Elétrico, 220V, 1L, 1.43kg",
    "source_url": "https://www.amazon.com.br/dp/B0CBSZ41J4",
    "image": "https://m.media-amazon.com/images/I/41DJWLonAjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 125.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CBSZ41J4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H2G38ZNW",
    "title": "Kit 3 Cremes Pomadas de Assaduras Vit B5 com 100g cada, Total 300g - Bepantol Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H2G38ZNW",
    "image": "https://m.media-amazon.com/images/I/61HlHA-XVpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 134.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2G38ZNW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0C44K7N7G",
    "title": "Aspirador de Pó Philco Vertical 2 em 1 1450w Preto Pas1600p - 220",
    "source_url": "https://www.amazon.com.br/dp/B0C44K7N7G",
    "image": "https://m.media-amazon.com/images/I/41inGaNI2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C44K7N7G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0C2J8XTYY",
    "title": "Lâminas de Reposição Originais Philips OneBlade QP630/51 Aço Inoxidável - Raspa, Apara e Contorna - Pacote com 3 un",
    "source_url": "https://www.amazon.com.br/dp/B0C2J8XTYY",
    "image": "https://m.media-amazon.com/images/I/81jIOcGhrTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2J8XTYY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07F6LX5CC",
    "title": "Modelador 1 Curves, Taiff, Bivolt, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07F6LX5CC",
    "image": "https://m.media-amazon.com/images/I/51DTuoHiFQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 153.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B07F6LX5CC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HCBJJBNS",
    "title": "Limpador a vapor portátil de 2500 W, máquina de limpeza a vapor pressurizada de alta temperatura, para carros, com escovas inclusas.",
    "source_url": "https://www.amazon.com.br/dp/B0HCBJJBNS",
    "image": "https://m.media-amazon.com/images/I/51fNKnPmdgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HCBJJBNS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BT4ZYLXS",
    "title": "Jogo de Lençol Casal Toque Macio 4 Peças Percal 600 Fios Branco",
    "source_url": "https://www.amazon.com.br/dp/B0BT4ZYLXS",
    "image": "https://m.media-amazon.com/images/I/41IH2R3HviL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 162.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BT4ZYLXS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GS755NZ9",
    "title": "Philips Walita Processador de Alimentos PowerChop 450W, Preto, 110V | Pica e Mistura Rápido – lâminas eficientes da Série 3000 para o preparo de receitas (HR1501/01)",
    "source_url": "https://www.amazon.com.br/dp/B0GS755NZ9",
    "image": "https://m.media-amazon.com/images/I/615ErVjiCuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 162.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GS755NZ9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0089WNKVC",
    "title": "BIODERMA Gel De Banho Antiressecamento Atoderm Gel Douche 1l",
    "source_url": "https://www.amazon.com.br/dp/B0089WNKVC",
    "image": "https://m.media-amazon.com/images/I/51ZZB-eyKnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 166.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0089WNKVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07GPRWFC5",
    "title": "Mouse Gamer Sem Fio Logitech G305 LIGHTSPEED com 6 Botões Programáveis e Até 12.000 DPI - Preto",
    "source_url": "https://www.amazon.com.br/dp/B07GPRWFC5",
    "image": "https://m.media-amazon.com/images/I/51sg9BLSMTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07GPRWFC5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09S3ST9V7",
    "title": "Primeira Casa Sylvanian Families",
    "source_url": "https://www.amazon.com.br/dp/B09S3ST9V7",
    "image": "https://m.media-amazon.com/images/I/61AW7oz-4XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 184.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S3ST9V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "source_url": "https://www.amazon.com.br/dp/B07VPFC6RN",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DZQF2ZX4",
    "title": "Death Stranding 2: On the beach - PlayStation 5",
    "source_url": "https://www.amazon.com.br/dp/B0DZQF2ZX4",
    "image": "https://m.media-amazon.com/images/I/81mex-54PYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZQF2ZX4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0842XB4BN",
    "title": "Mochila Dell Gaming 17 para Notebook, 17 | Peso 98 g, Resistente à Água, Multíplos Bolsos, Acolchoado, Compatível com Dell Gaming, Alça Ajustável, Design Refletor",
    "source_url": "https://www.amazon.com.br/dp/B0842XB4BN",
    "image": "https://m.media-amazon.com/images/I/91PDPYo4jUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0842XB4BN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0G8ZQ9WSJ",
    "title": "Basike Carregador Portátil 65W, Power Bank 20000mAh Power Delivery(Preto) | Carregamento Rápido com Display LED e Cabo Integrado Tipo-C, Compacto, para iPhone/Samsung/Huawei/Xiaomi",
    "source_url": "https://www.amazon.com.br/dp/B0G8ZQ9WSJ",
    "image": "https://m.media-amazon.com/images/I/615FqtxyO+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 201.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G8ZQ9WSJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H2F5FQK5",
    "title": "Mala Bordo 10kg Bagagem de Mão Expansivel Padrão ANAC com 4 Rodas duplas 360° Cadeado AntiFurto Mala de Viagem Alça Lateral com Divisória, Leve Resistente (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0H2F5FQK5",
    "image": "https://m.media-amazon.com/images/I/71yt2EtDpYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 206.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2F5FQK5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B088MVWBM9",
    "title": "Philco Aspirador Pó Vertical Power Clean 2000W PAS4000V 127V",
    "source_url": "https://www.amazon.com.br/dp/B088MVWBM9",
    "image": "https://m.media-amazon.com/images/I/41El3TMO04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 211.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B088MVWBM9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FQK3V9QF",
    "title": "Bettdow SmartWatch, Relogio Smartwatch Feminino, 1.27\" Ecrã tátil, à prova d'água IP68, 100+ Modos Esportivos, chamada Bluetooth, Compatível com Android iOS, voz por IA (Bege)",
    "source_url": "https://www.amazon.com.br/dp/B0FQK3V9QF",
    "image": "https://m.media-amazon.com/images/I/61sC9cAm1tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 217.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQK3V9QF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FNGFRFMM",
    "title": "Forro de Bambu Decorativa Natural para Pergolado e Quiósque Cerca de Privacidade para Jardim Varanda e Área Externa Tratamento Térmico 5m x 1m",
    "source_url": "https://www.amazon.com.br/dp/B0FNGFRFMM",
    "image": "https://m.media-amazon.com/images/I/61oe0ZvQYEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 218.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNGFRFMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CD14V4RQ",
    "title": "Fritadeira Elétrica sem óleo/Air Fryer Philco PFR15PG Preto 4,3L com Timer",
    "source_url": "https://www.amazon.com.br/dp/B0CD14V4RQ",
    "image": "https://m.media-amazon.com/images/I/51QJNzNg7lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CD14V4RQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FGCX4N8G",
    "title": "Conjunto de 4 peças travesseiro triangular, travesseiro de espuma pós-operatório, ajustável almofada lombar (com fronha), adequado para pós-cirurgia, alívio de refluxo ácido e dor nas costas, etc.",
    "source_url": "https://www.amazon.com.br/dp/B0FGCX4N8G",
    "image": "https://m.media-amazon.com/images/I/613tt+D6SQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 233.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGCX4N8G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07FN1MZBH",
    "title": "Controle sem fio PlayStation Dualshock 4™ - Preto",
    "source_url": "https://www.amazon.com.br/dp/B07FN1MZBH",
    "image": "https://m.media-amazon.com/images/I/61kwdPH8+xL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 239.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07FN1MZBH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B097J7J54H",
    "title": "Taiff SECADOR TOURMALINE 2100W 220, preto",
    "source_url": "https://www.amazon.com.br/dp/B097J7J54H",
    "image": "https://m.media-amazon.com/images/I/51gHJqqOYJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 241.31,
    "affiliate_url": "https://www.amazon.com.br/dp/B097J7J54H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "6560050416",
    "title": "BOX As Crônicas de Nárnia - Edição de Luxo",
    "source_url": "https://www.amazon.com.br/dp/6560050416",
    "image": "https://m.media-amazon.com/images/I/81erRs9DQDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 244.05,
    "affiliate_url": "https://www.amazon.com.br/dp/6560050416?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BQJVKVQR",
    "title": "TP-Link Tapo C500 Câmera de Segurança Wi-Fi Externa 360°, Full HD 1080p, Visão Noturna Colorida de Até 30 m, Detecção de Pessoas, IP65, Áudio Bidirecional, Alexa e MicroSD de Até 512 GB",
    "source_url": "https://www.amazon.com.br/dp/B0BQJVKVQR",
    "image": "https://m.media-amazon.com/images/I/41hQ4O29nKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 246.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQJVKVQR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09CQHC29Z",
    "title": "Cilindro de CO2 SodaStream Sistema Quick Connect - Original | PRODUTO ORIGINAL",
    "source_url": "https://www.amazon.com.br/dp/B09CQHC29Z",
    "image": "https://m.media-amazon.com/images/I/610cZRCAX1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 261.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09CQHC29Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D4QTNPTP",
    "title": "Fones de Ouvido QCY MeloBuds Pro, Fone Bluetooth com Cancelamento de Ruído Ativo, Certificação Hi-Res, 34 Horas De Reprodução, Preto (Preto)",
    "source_url": "https://www.amazon.com.br/dp/B0D4QTNPTP",
    "image": "https://m.media-amazon.com/images/I/512pzmWShoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 265.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D4QTNPTP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07L4VJV1G",
    "title": "Britânia Bebedouro, Acqua, Preto, Bivolt, Estilo moderno e elegante Plástico",
    "source_url": "https://www.amazon.com.br/dp/B07L4VJV1G",
    "image": "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07L4VJV1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F4LGN24G",
    "title": "Banheira Para Bebê Dobrável 3 em 1 Com Suporte e Assento 45L Rosa Pipdip | Silicone Premium",
    "source_url": "https://www.amazon.com.br/dp/B0F4LGN24G",
    "image": "https://m.media-amazon.com/images/I/51x0Zvlf5uL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 289.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F4LGN24G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09GHL35B3",
    "title": "Philips Walita Ferro a Vapor Série 5000 1470W, SteamGlide Plus, Preto | Jato Extra de 180g – vapor constante de 25 g/min e passagem suave em todos os tecidos (DST5040/85)",
    "source_url": "https://www.amazon.com.br/dp/B09GHL35B3",
    "image": "https://m.media-amazon.com/images/I/71rTqqcISoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 294.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GHL35B3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0991TZ399",
    "title": "Fonte de Alimentação MSI MAG A650BN - 650W, 80 Plus, Bronze, PFC Ativo",
    "source_url": "https://www.amazon.com.br/dp/B0991TZ399",
    "image": "https://m.media-amazon.com/images/I/81eLlIQ5PsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 295.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0991TZ399?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CPDX9V7V",
    "title": "M-VAVE VEDO Tank-G Pedal de Guitarra Multi-Efeitos, Effects Pedal guitarra Reverb Delay MOD AMP Bateria lítio Recarregável, 36 Presets, 9 Preamp Slots, 8 IR Cab, 3 Simulação, Delay, Cube Baby Reverb",
    "source_url": "https://www.amazon.com.br/dp/B0CPDX9V7V",
    "image": "https://m.media-amazon.com/images/I/61pnvmhiG9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 305.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CPDX9V7V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GH6ZT8XG",
    "title": "Kit Cachos e Alisamento Bivolt GOKOCO GD034 Rosa 127V-220V – Ferramenta Multifuncional com 3 Anexos, Controle de Calor NTC, 120-200°C, Desligamento Automático 30min, para Cabelos Finos a Grossos",
    "source_url": "https://www.amazon.com.br/dp/B0GH6ZT8XG",
    "image": "https://m.media-amazon.com/images/I/71QwIIfRiPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 305.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GH6ZT8XG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CNKVYLF5",
    "title": "Headset Gamer Redragon Zeus Pro Preto Sem Fio 7.1 H510-PRO",
    "source_url": "https://www.amazon.com.br/dp/B0CNKVYLF5",
    "image": "https://m.media-amazon.com/images/I/619T-Fp+EkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 317.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CNKVYLF5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GT7FR4LH",
    "title": "Philips Walita Multiprocessador PowerChop 1000, Preto, Copo com capacidade de 1,5 litros, Duas velocidades + pulsar, 6 acessórios, 1000W, 110V (HR7304/93)",
    "source_url": "https://www.amazon.com.br/dp/B0GT7FR4LH",
    "image": "https://m.media-amazon.com/images/I/617DKTCqkjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GT7FR4LH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07BB4BY7Z",
    "title": "TP-Link RE450 Repetidor de Sinal Wi-Fi 5 AC1750 Dual Band, até 1300 Mbps em 5 GHz, 3 Antenas Externas, EasyMesh, Porta Gigabit, WPS e Access Point",
    "source_url": "https://www.amazon.com.br/dp/B07BB4BY7Z",
    "image": "https://m.media-amazon.com/images/I/41MRgtnOPCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 329.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BB4BY7Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D98VXWXB",
    "title": "Philips Walita Fritadeira Airfryer Série 1000 XL 6,2L, Preta, 220V | Até 90% Menos Óleo – tecnologia RapidAir, 12 modos de preparo e controle analógico (NA130/09)",
    "source_url": "https://www.amazon.com.br/dp/B0D98VXWXB",
    "image": "https://m.media-amazon.com/images/I/510Uj5C7LdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 348.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98VXWXB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07W8X4F48",
    "title": "Mouse Gamer Sem Fio Logitech G703 LIGHTSPEED com RGB LIGHTSYNC, 6 Botões Programáveis, Sensor HERO 25K e Bateria Recarregável - Compatível com POWERPLAY",
    "source_url": "https://www.amazon.com.br/dp/B07W8X4F48",
    "image": "https://m.media-amazon.com/images/I/51fgVUBaPRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W8X4F48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FFM18D66",
    "title": "Logitech Headset Gamer Sem Fio G321 Preto Lightspeed Bluetooth Microfone Boom 16kHz Bateria 20H Compatível c/ PC PS4 PS5 Nintendo Switch e Smartphone",
    "source_url": "https://www.amazon.com.br/dp/B0FFM18D66",
    "image": "https://m.media-amazon.com/images/I/71yLbvA4jrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFM18D66?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BTTWT4F6",
    "title": "Escova Secadora Alisadora Revlon Root Booster (127)",
    "source_url": "https://www.amazon.com.br/dp/B0BTTWT4F6",
    "image": "https://m.media-amazon.com/images/I/51QzVgWFwlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 351.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTTWT4F6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GP7KDZRJ",
    "title": "Tramontina Jogo de Panelas Veronese em Alumínio com Revestimento Cerâmico cor Bege 5 Peças.",
    "source_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ",
    "image": "https://m.media-amazon.com/images/I/51-bj9rtB7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 373.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DSZF1FVQ",
    "title": "Bettdow Capa com Teclado e trackpad para iPad 10ª Geração 10.9\" Polegadas, iPad (A16) 11th Generation 11 Inch 2025; modelos A2696,A2757,A2777,A3354,A3355 e A3356 com Auto Hibernação(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DSZF1FVQ",
    "image": "https://m.media-amazon.com/images/I/715OLSmmqRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSZF1FVQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FQTWWT56",
    "title": "BETTDOW Capa com Teclado eTrackpad para iPad 10thGeneration 2022 & 11th (A16,2025), modelosA2696,A2757,A2777,A3354,A3355e A3356, Teclado de seis linhas",
    "source_url": "https://www.amazon.com.br/dp/B0FQTWWT56",
    "image": "https://m.media-amazon.com/images/I/711V3MlXSbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQTWWT56?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CJTYM3FH",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0CJTYM3FH",
    "image": "https://m.media-amazon.com/images/I/71FrXc9T1SL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 392.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJTYM3FH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D8QJRBV3",
    "title": "JBL, Fone de Ouvido Com Fio, Quantum 360 Wireless, Headset Gamer, Over Ear, Microfone Removível - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0D8QJRBV3",
    "image": "https://m.media-amazon.com/images/I/619cYdY-PkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 393.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8QJRBV3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D78TTV94",
    "title": "Cadeira Gamer Python Fly em tecido, respirável e ecológica, ângulo ajustável (Cinza Claro)",
    "source_url": "https://www.amazon.com.br/dp/B0D78TTV94",
    "image": "https://m.media-amazon.com/images/I/714s0-e1cmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 393.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D78TTV94?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DX7K4QP5",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 Lite/S10 Fe/S9 Fe/S9/S8/S7 de 11 polegadas,Teclado com LCD Display",
    "source_url": "https://www.amazon.com.br/dp/B0DX7K4QP5",
    "image": "https://m.media-amazon.com/images/I/71DMQPOFAoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 396.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX7K4QP5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CSD68PQ3",
    "title": "Cadeira De Escritório, Cadeira De Com Apoio Para Os Pés E Encosto Ajustável (Marrom)",
    "source_url": "https://www.amazon.com.br/dp/B0CSD68PQ3",
    "image": "https://m.media-amazon.com/images/I/61nm12ytu0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSD68PQ3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B087ZP3JXP",
    "title": "Panela de Pressão com 4,5 Litros em Inox – Tramontina",
    "source_url": "https://www.amazon.com.br/dp/B087ZP3JXP",
    "image": "https://m.media-amazon.com/images/I/41PrXgtEJLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 406.82,
    "affiliate_url": "https://www.amazon.com.br/dp/B087ZP3JXP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F13F5JPT",
    "title": "Cadeira de Escritório Python Fly Leisure, Assento Extra Grande e Largo em Tecido (Rosa)",
    "source_url": "https://www.amazon.com.br/dp/B0F13F5JPT",
    "image": "https://m.media-amazon.com/images/I/7155nUtRA7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 414.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F13F5JPT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0G4C8H84H",
    "title": "Cadeira Gamer RGB Python Fly com Iluminação Decorativa, Encosto Reclinável, Design Ergonômico para Escritório e Jogos (Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0G4C8H84H",
    "image": "https://m.media-amazon.com/images/I/71yosNcKXTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 429.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G4C8H84H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DSWFVGRR",
    "title": "Buddemeyer Jogo de Cama Queen Damask Stripes 100% Algodão Kaki 4 pç | Cetim 300 Fios",
    "source_url": "https://www.amazon.com.br/dp/B0DSWFVGRR",
    "image": "https://m.media-amazon.com/images/I/410dXD8Qh3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 460.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSWFVGRR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D3WGTLVD",
    "title": "Caixa de Som Amplificada 380W Flash Lights Philco PCX4800",
    "source_url": "https://www.amazon.com.br/dp/B0D3WGTLVD",
    "image": "https://m.media-amazon.com/images/I/61il9+p7z6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 489.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3WGTLVD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GYQJ798V",
    "title": "Cadeira de Jantar Com Encosto Curvo Base em Madeira Maciça Detalhe no Braço Couríssimo Marrom - Emma",
    "source_url": "https://www.amazon.com.br/dp/B0GYQJ798V",
    "image": "https://m.media-amazon.com/images/I/51n8Jzhe1tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 503.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQJ798V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GFQBQ4KZ",
    "title": "Controle sem fio PlayStation DualSense™ – Rhythm Blue",
    "source_url": "https://www.amazon.com.br/dp/B0GFQBQ4KZ",
    "image": "https://m.media-amazon.com/images/I/61li1lzcezL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 509.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GFQBQ4KZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0C6YD7JCN",
    "title": "Casa Telhado Vermelho com Luzes e Sotão Secreto",
    "source_url": "https://www.amazon.com.br/dp/B0C6YD7JCN",
    "image": "https://m.media-amazon.com/images/I/81W80plu+GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 514.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6YD7JCN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0C5F2T4Q2",
    "title": "Cadeira Para Auto 0-36 Kg Mass Preta Litet - BB456",
    "source_url": "https://www.amazon.com.br/dp/B0C5F2T4Q2",
    "image": "https://m.media-amazon.com/images/I/61LfV3rwzHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 529.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C5F2T4Q2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07D1QTH51",
    "title": "Pneu Pirelli Aro 15 Cinturato P1 Ka 195/65r15 91h",
    "source_url": "https://www.amazon.com.br/dp/B07D1QTH51",
    "image": "https://m.media-amazon.com/images/I/61IJR6OaKdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 547.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B07D1QTH51?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GHZYTTVQ",
    "title": "JBL, Fone de Ouvido Esportivo, Endurance Peak 4, IP68, ANC - Branco | Som JBL Pure Bass, ajuste PowerHook seguro, resistência à água e suor, Bluetooth e bateria de longa duração.",
    "source_url": "https://www.amazon.com.br/dp/B0GHZYTTVQ",
    "image": "https://m.media-amazon.com/images/I/41VCuV6hyGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 551.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHZYTTVQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FGZMN2QL",
    "title": "Micro-ondas 27L Prata Porta Espelhada MasterCook Midea 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FGZMN2QL",
    "image": "https://m.media-amazon.com/images/I/61FevnWBKmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 556.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGZMN2QL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F81WGSYP",
    "title": "Monitor AOC 27\" 120Hz 1ms Gaming IPS Adaptive-Sync 27B35H",
    "source_url": "https://www.amazon.com.br/dp/B0F81WGSYP",
    "image": "https://m.media-amazon.com/images/I/612C5-fY6+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.83,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F81WGSYP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FFYJSTMK",
    "title": "Bettdow Projetor 4k [Netflix-Licensed], Projetores Portatil 12000 Lumens Full Hd 1080p Compatível Com Android 13, HDR10+ Retroprojetor WiFi 6 BT 5.2, Keystone automático, Foco Automático (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FFYJSTMK",
    "image": "https://m.media-amazon.com/images/I/61cYL9Ns2WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 573.56,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFYJSTMK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BZWSVXKT",
    "title": "Philco Climatizador PCL10QF Display Touch 5 em 1 5L 220V Branco Portátil",
    "source_url": "https://www.amazon.com.br/dp/B0BZWSVXKT",
    "image": "https://m.media-amazon.com/images/I/71hLfMyUxuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 588.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZWSVXKT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H1HHP7ZW",
    "title": "OLANENEM 6 em 1 Berço Portátil, Berço Moisés com Fraldário e Mosquiteiro, Berço Acoplado à Cama com Suporte Triangular de Aço Carbono, 6 Alturas e Inclinação Antirrefluxo 5°(Cinza)",
    "source_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW",
    "image": "https://m.media-amazon.com/images/I/715Pm0wsEVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 588.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1HHP7ZW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H6FMBS39",
    "title": "Basike Caixa de Som Estéreo Sem Fio, Boombox 200W, Bluetooth, cor camuflada",
    "source_url": "https://www.amazon.com.br/dp/B0H6FMBS39",
    "image": "https://m.media-amazon.com/images/I/71s7iYLQYoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 626.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FMBS39?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GTW49354",
    "title": "VEDO Conjunto Trompete Standard Bb Student - Trompete de metal Latão para estudantes com bocal rígido 7C e luvas, Estojo Rígido, adequado para iniciantes ou estudantes avançados, orquestras, dourado",
    "source_url": "https://www.amazon.com.br/dp/B0GTW49354",
    "image": "https://m.media-amazon.com/images/I/71rYXB55fOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 674.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTW49354?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DD1M9WJT",
    "title": "Philips Walita Fritadeira Airfryer Forno Série 5000, 220V | Alta Capacidade Interna – asse, doure e prepare pratos variados com praticidade (AI551/08)",
    "source_url": "https://www.amazon.com.br/dp/B0DD1M9WJT",
    "image": "https://m.media-amazon.com/images/I/61a0AdTUvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 688.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD1M9WJT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HFWD7953",
    "title": "Tablet Xixaomiro S11 Pad 10.1\" Android 15, 128GB ROM + 12GB RAM, Câmera 13MP + 5MP, Bateria 8000mAh, Kit com Teclado, Mouse e Caneta Stylus para Trabalho e Estudos (Azul-celeste)",
    "source_url": "https://www.amazon.com.br/dp/B0HFWD7953",
    "image": "https://m.media-amazon.com/images/I/71y2jW-RPFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFWD7953?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GL1P8M8R",
    "title": "Fone de Ouvido Sem Fio, HUAWEI FreeBuds Pro 5, Cancelamento de Ruído com IA de Motor Duplo, Som Ultra Imersivo, Chamadas Estáveis e Nítidas, IP57, Até 38 horas Autonomia de Bateria, Cinza",
    "source_url": "https://www.amazon.com.br/dp/B0GL1P8M8R",
    "image": "https://m.media-amazon.com/images/I/61Kzs2TAeNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 779.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL1P8M8R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FFHM7WHG",
    "title": "Lilin YW509 Robô de Limpeza de Janelas com Quatro Bicos Ultrassônicos, Bivolt, Design Compacto, Sistema de proteção multinível, Planejamento inteligente de caminho, 3 modos de limpeza, Do Brasil",
    "source_url": "https://www.amazon.com.br/dp/B0FFHM7WHG",
    "image": "https://m.media-amazon.com/images/I/610rgpBSz-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFHM7WHG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BD9HNJMH",
    "title": "Máquina de Costura SINGER M2505 127V | 9 Pontos, 70 Aplicações | Luz em LED, Alavanca de Retrocesso | Ideal para Artesanato, Costura Criativa, Projetos Domésticos | Acessórios Inclusos",
    "source_url": "https://www.amazon.com.br/dp/B0BD9HNJMH",
    "image": "https://m.media-amazon.com/images/I/51apK7IPaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 799.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BD9HNJMH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F7TFM927",
    "title": "Adega Climatizada 12 Garrafas Midea Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0F7TFM927",
    "image": "https://m.media-amazon.com/images/I/61tJA8UpjIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 814.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F7TFM927?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D9W4778P",
    "title": "Bettdow Projetor 4k 8k 15000 Lumens Hd 1080p Compatível Completo De Android 9, Smart Projetores Retroprojetor Portatil 600 ANSI WiFi6, Auto Correção Trapezoidal, Foco Eletronico",
    "source_url": "https://www.amazon.com.br/dp/B0D9W4778P",
    "image": "https://m.media-amazon.com/images/I/71tOGhQUWxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 830.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9W4778P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DHWFBYVC",
    "title": "Smartphone Motorola Moto g35 5G - 128GB 12GB (4GB RAM+8GB Ram Boost) e Camera 50MP com AI NFC Tela 6.7\" com Superbrilho - Verde",
    "source_url": "https://www.amazon.com.br/dp/B0DHWFBYVC",
    "image": "https://m.media-amazon.com/images/I/61pGaBV+-AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 849.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHWFBYVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CMJQMJWN",
    "title": "SUGGAR DEPURADOR DE AR SLIM DE EMBUTIR 80CM INOX 110V DE81IX",
    "source_url": "https://www.amazon.com.br/dp/B0CMJQMJWN",
    "image": "https://m.media-amazon.com/images/I/61pSMDFXbqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 868.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CMJQMJWN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DHFZS74D",
    "title": "Cama Box Baú King Bipartido 96, Blindado, Pistão á Gás, Pés de Madeira (Suede, Bege)",
    "source_url": "https://www.amazon.com.br/dp/B0DHFZS74D",
    "image": "https://m.media-amazon.com/images/I/51iRpV0gwIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 872.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHFZS74D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GHQ2BPYJ",
    "title": "Monitor Dell 24, Fhd (1920 x 1080), 240 Hz, Ips, Se2426hg | 1000:1 de contraste, Brilho de 300 nits, 99% sRGB, Anti-Ofuscante, HDR10, VESA 100 x 100, Peso 2,72 kg",
    "source_url": "https://www.amazon.com.br/dp/B0GHQ2BPYJ",
    "image": "https://m.media-amazon.com/images/I/81AYAyUOCXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHQ2BPYJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H1T7241Z",
    "title": "Barbie Casa dos Sonhos com Escorregador para crianças acima de 3 Anos",
    "source_url": "https://www.amazon.com.br/dp/B0H1T7241Z",
    "image": "https://m.media-amazon.com/images/I/61VhNgOsi8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1T7241Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HFW9ZB26",
    "title": "Xixaomiro Tablet Android 15 Pad 10.1\", 256GB ROM + 12GB RAM, Câmera 13MP + 5MP, Bateria 8000mAh – Kit Completo com Caneta, Mouse, Teclado e Capa, Adequado para Estudo, Trabalho e Lazer (Laranja claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9ZB26",
    "image": "https://m.media-amazon.com/images/I/712dIQhOzHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 915.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9ZB26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D2NPSGH5",
    "title": "Relógio Inteligente Amazfit Balance 46mm A2287 ZEPP FOLOW Composição Corporal, GPS, Step Tracking, Alexa Built-In, Chamada Bluetooth, Duração da Bateria de 14 Dias (Black)",
    "source_url": "https://www.amazon.com.br/dp/B0D2NPSGH5",
    "image": "https://m.media-amazon.com/images/I/61hw4IVvmkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 931.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D2NPSGH5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CP6GCTDH",
    "title": "Philco Frigobar 92 Litros PFG111I Inox 127V",
    "source_url": "https://www.amazon.com.br/dp/B0CP6GCTDH",
    "image": "https://m.media-amazon.com/images/I/41sJbycIl6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 989.01,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CP6GCTDH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B00ELBQIKA",
    "title": "Cadeira Gamer Profissional TGC12 Preta ThunderX3.",
    "source_url": "https://www.amazon.com.br/dp/B00ELBQIKA",
    "image": "https://m.media-amazon.com/images/I/71VqjPlOJAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 998.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00ELBQIKA?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FGDKYGFS",
    "title": "Monitor AOC 27\" 4K IPS 106% NTSC 97% DCI-P3 Speakers U27B3A",
    "source_url": "https://www.amazon.com.br/dp/B0FGDKYGFS",
    "image": "https://m.media-amazon.com/images/I/71V0IzDsUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGDKYGFS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0C2S8D2P6",
    "title": "Amvox Caixa de Som Amplificada ACA 1900 New X SFM- 1900W RMS, Bluetooth, Equalizador, USB",
    "source_url": "https://www.amazon.com.br/dp/B0C2S8D2P6",
    "image": "https://m.media-amazon.com/images/I/71IoG2LTCgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 999.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2S8D2P6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DSJXKX9T",
    "title": "Freezer Horizontal 140L Philco PFH160B Dupla Função 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DSJXKX9T",
    "image": "https://m.media-amazon.com/images/I/41L7rxtRkIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1076.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSJXKX9T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GKPLCRCM",
    "title": "WAP Extratora e Aspirador Barril Carpet Cleaner Pro 25 1700W 2250mmH20 Com 8m de Alcance e Acabamento em Inox (220, Volts)",
    "source_url": "https://www.amazon.com.br/dp/B0GKPLCRCM",
    "image": "https://m.media-amazon.com/images/I/51XNWY9hbIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1097.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKPLCRCM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0D6VHRCQ2",
    "title": "Maca Portátil Premium, Divã Cama de Fisioterapia, Estética, Massoterapia, Massagem, Quiropraxia, Depilação, Tatuagem - Altura Ajustável + bolsa de transporte - Rosa Pink BKZA - MSG 103",
    "source_url": "https://www.amazon.com.br/dp/B0D6VHRCQ2",
    "image": "https://m.media-amazon.com/images/I/61rjCHVOb3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1137.15,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D6VHRCQ2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FYFV2HLM",
    "title": "soundcore Sleep A30 Special da Anker Fone para Dormir Bluetooth Inteligente | 10H ANC, 3g Ultraconforto para Quem Dorme de Lado, Sistema de Mascaramento de Ronco Adaptativo, Design Ergonômico 3D, 45H",
    "source_url": "https://www.amazon.com.br/dp/B0FYFV2HLM",
    "image": "https://m.media-amazon.com/images/I/51t9B3pvqaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FYFV2HLM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FBS12YZ1",
    "title": "Singer HD4423 Black, Máquina de Costura Heavy Duty, 127V | 23 pontos, até 1.100 pontos/minuto, casa de botão em 1 passo, braço livre e base em aço inoxidável.",
    "source_url": "https://www.amazon.com.br/dp/B0FBS12YZ1",
    "image": "https://m.media-amazon.com/images/I/61SXQYb1k6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1249.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBS12YZ1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FC5ZG6QN",
    "title": "Lilin Robô Aspirador e Passa Pano X6 Mapeamento LiDAR 6500Pa 3 em 1 Bivolt | Sucção Potente de 6500Pa Remove Poeira, Pelos de Pets e Sujeiras Difíceis Para Limpeza Profunda em Pisos Secos e Úmidos",
    "source_url": "https://www.amazon.com.br/dp/B0FC5ZG6QN",
    "image": "https://m.media-amazon.com/images/I/618j9fqcOML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1250.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FC5ZG6QN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F4TS8VN4",
    "title": "WAP Aspirador de Pó e Água GTW Inox 50i 2600W com Dois Motores e Sistema de Autolimpeza 127V",
    "source_url": "https://www.amazon.com.br/dp/B0F4TS8VN4",
    "image": "https://m.media-amazon.com/images/I/51DxCtULPEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1308.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F4TS8VN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09WYZP4L5",
    "title": "Máquina de Café Nespresso Lattissima One Preta F121 - 220v",
    "source_url": "https://www.amazon.com.br/dp/B09WYZP4L5",
    "image": "https://m.media-amazon.com/images/I/519dIKDHD5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1447.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B09WYZP4L5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GLRCWC7G",
    "title": "Smartphone Motorola Moto G67 5G - 256GB 12GB (4GB RAM + 8GB RAM Boost) camera 50MP Sony Lytia 600, tela 1.5K extreme Amoled 120hz, ultrarresistente - Verde Claro",
    "source_url": "https://www.amazon.com.br/dp/B0GLRCWC7G",
    "image": "https://m.media-amazon.com/images/I/611nOISxRYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1452.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLRCWC7G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GYNSLGMQ",
    "title": "Creality Ender 3 V3 SE Impressora 3D - 250mm/s de Alta Velocidade, Auto-Equalização CR Touch, Extrusora Direta Sprite, Duplo Eixo Z, Ideal para Iniciantes",
    "source_url": "https://www.amazon.com.br/dp/B0GYNSLGMQ",
    "image": "https://m.media-amazon.com/images/I/61efQaqXstL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1493.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYNSLGMQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B017RBNOI4",
    "title": "Volante e Pedais Logitech G29 Driving Force com Force Feedback para PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B017RBNOI4",
    "image": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B017RBNOI4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FH5NMXHK",
    "title": "Monitor Gamer Alienware 25\", Full Hd, 320 Hz, Fast Ips, Aw2525hm | NVIDIA G-SYNC, Tempo de Resposta 0,5 ms, 400 nits, 1000:1 de contraste, 99% sRGB, 2 HDMI 2.1, 1 DisplayPort 1.4, 3 USB 5 Gbps",
    "source_url": "https://www.amazon.com.br/dp/B0FH5NMXHK",
    "image": "https://m.media-amazon.com/images/I/6106dbww1XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1639.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH5NMXHK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0C5JNWF58",
    "title": "HD SSD externo de 2Tb USB 3.2 compatível com PC e Notebook SANDISK SDSSDE61-2T00-G26",
    "source_url": "https://www.amazon.com.br/dp/B0C5JNWF58",
    "image": "https://m.media-amazon.com/images/I/71bBCTIvIIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1639.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C5JNWF58?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GLSLLGZL",
    "title": "Smartphone Motorola Moto G77 5g - 256GB 24GB (8GB RAM + 16GB RAM Boost) camera 108MP Ultra-Pixel, tela 1.5k extreme Amoled 120hz, ultrarresistente - Marrom",
    "source_url": "https://www.amazon.com.br/dp/B0GLSLLGZL",
    "image": "https://m.media-amazon.com/images/I/61zXvb3EmiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLSLLGZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GX3B23ZC",
    "title": "Guarda-roupa Casal Modulado 4 Portas Santiago com Espelho 3 Portas 5 Gavetas Branco",
    "source_url": "https://www.amazon.com.br/dp/B0GX3B23ZC",
    "image": "https://m.media-amazon.com/images/I/81U2+6fIv6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1700.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GX3B23ZC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HCR2X6T2",
    "title": "Electrolux Máquina de Lavar Electrolux Efficient 13kg Branca Compacta, Econômica e Pré-diluição (LET13) 127V",
    "source_url": "https://www.amazon.com.br/dp/B0HCR2X6T2",
    "image": "https://m.media-amazon.com/images/I/51QG54NbvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HCR2X6T2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FJYNZTXB",
    "title": "PC Gamer Completo Intel Core i7 16GB SSD 512GB Monitor 19\" Kit Gamer Strong Tech",
    "source_url": "https://www.amazon.com.br/dp/B0FJYNZTXB",
    "image": "https://m.media-amazon.com/images/I/71jDnDf3vXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FJYNZTXB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FRCM6QZS",
    "title": "Forno de Embutir Elétrico Electrolux 80L Experience Air fryer, PerfectCook360 e Painel Touch (OE8EA)",
    "source_url": "https://www.amazon.com.br/dp/B0FRCM6QZS",
    "image": "https://m.media-amazon.com/images/I/51KrDPasvRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1847.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FRCM6QZS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F9LH6V3F",
    "title": "Ar condicionado janela Hisense 12000 btus frio aw-12cr2rwgu00 220v",
    "source_url": "https://www.amazon.com.br/dp/B0F9LH6V3F",
    "image": "https://m.media-amazon.com/images/I/61QKhuYUFvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1858.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9LH6V3F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CCG9Z3BL",
    "title": "Ar Condicionado Split Hi Wall Fontaine FCST12F 12000 BTU/h Frio 127V",
    "source_url": "https://www.amazon.com.br/dp/B0CCG9Z3BL",
    "image": "https://m.media-amazon.com/images/I/41p2pGqucYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1859.15,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CCG9Z3BL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H2NF3JXT",
    "title": "Freezer Horizontal Electrolux HB250 245 Litros Inverter 1 Porta Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H2NF3JXT",
    "image": "https://m.media-amazon.com/images/I/31oeND3LWUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1861.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NF3JXT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GVT7QXF7",
    "title": "Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", NFC, Recursos AI, Até 6 Atualizações de Android e Segurança (Lilás)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT7QXF7",
    "image": "https://m.media-amazon.com/images/I/51VZg1VWMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1898.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT7QXF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FJZR1RBP",
    "title": "Lava-Louças Electrolux 8 Serviços Branca com Programa Lava e Seca 50min 220v LB08E",
    "source_url": "https://www.amazon.com.br/dp/B0FJZR1RBP",
    "image": "https://m.media-amazon.com/images/I/41vw+7InkhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FJZR1RBP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FCSP9NS4",
    "title": "Ar Condicionado 9000 Btus Split Hi Wall Inverter Midea Frio Ai Ecomaster 220v",
    "source_url": "https://www.amazon.com.br/dp/B0FCSP9NS4",
    "image": "https://m.media-amazon.com/images/I/51XHzWTiUPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1918.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCSP9NS4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H63DM2JB",
    "title": "Freezer Electrolux Vertical FEI19T 175L 1 Porta Branco Bivolt | Freezer",
    "source_url": "https://www.amazon.com.br/dp/B0H63DM2JB",
    "image": "https://m.media-amazon.com/images/I/31YHyP-32iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63DM2JB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GBZBCBSN",
    "title": "Electrolux Fogão 4 bocas Electrolux Preto Experience Mesa de Vidro, 2 Fornos e Grade de Ferro Fundido (FE4DB) 220V",
    "source_url": "https://www.amazon.com.br/dp/B0GBZBCBSN",
    "image": "https://m.media-amazon.com/images/I/411y0DZNxRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2049.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GBZBCBSN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GVT6FMNG",
    "title": "Celular Samsung Galaxy A37 5g 256GB, 8GB RAM, Câmera Tripla de até 50MP Ois, Selfie de 12MP Video Hdr, Ip68, Tela Super AMOLED 6.7\", Recursos AI, Até 6 Atualizações de Android e Segurança (Branco)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT6FMNG",
    "image": "https://m.media-amazon.com/images/I/51gN3j6H4ML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2098.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT6FMNG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FR6N4WWH",
    "title": "Bundle Nintendo Switch + Super Mario Bros. Wonder + 3 Meses de Assinatura Nintendo Switch Online",
    "source_url": "https://www.amazon.com.br/dp/B0FR6N4WWH",
    "image": "https://m.media-amazon.com/images/I/61zaf8R7S7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FR6N4WWH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09B929QDL",
    "title": "Máquina de Lavar 17kg Electrolux Essential Care com Cesto Inox, Jet&Clean e Ultra Filter (LED17) 220v",
    "source_url": "https://www.amazon.com.br/dp/B09B929QDL",
    "image": "https://m.media-amazon.com/images/I/41cbbClO-jL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09B929QDL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H41D4KFT",
    "title": "AMD Processador Ryzen 7 5800X3D de 8 núcleos e 16 threads para desktop com tecnologia AMD 3D V-Cache",
    "source_url": "https://www.amazon.com.br/dp/B0H41D4KFT",
    "image": "https://m.media-amazon.com/images/I/61vkFq7H9tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2099.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H41D4KFT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FPBR8V26",
    "title": "PHILIPS, Smart TV Ambilight 50\" 4K, Titan OS, 50PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBR8V26",
    "image": "https://m.media-amazon.com/images/I/61hTC1qv92L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2188.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBR8V26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HD7RD8F1",
    "title": "Notebook Samsung Galaxy Book Go, Windows 11 Home, Snapdragon | Windows 11 Home, 4GB RAM, 128GB UFS, 1.38kg",
    "source_url": "https://www.amazon.com.br/dp/B0HD7RD8F1",
    "image": "https://m.media-amazon.com/images/I/71mg-93pBzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HD7RD8F1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H63HYHVY",
    "title": "Freezer Horizontal Electrolux 315 Litros 1 Porta HI330T Função Turbo Freezer Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H63HYHVY",
    "image": "https://m.media-amazon.com/images/I/31oQQ9KkisL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2208.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63HYHVY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GS2KPYFH",
    "title": "Máquina de lavar Intuitive+ Panasonic 19kg Lavagem Eficiente SmartSense Sistema Ciclone Ciclo Pet NA-F190G1WB 220v",
    "source_url": "https://www.amazon.com.br/dp/B0GS2KPYFH",
    "image": "https://m.media-amazon.com/images/I/41MU-zH5UUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2217.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GS2KPYFH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FPBQY5GR",
    "title": "PHILIPS Smart TV, 55\" 4K, 55PUG7300, Comando de Voz, Bluetooth, HDR, Dolby Atmos, HDMI, USB, Wi-Fi",
    "source_url": "https://www.amazon.com.br/dp/B0FPBQY5GR",
    "image": "https://m.media-amazon.com/images/I/71d6BkXy+rL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBQY5GR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FPBQQ4TN",
    "title": "PHILIPS, Smart TV Ambilight 55\" 4K, Titan OS, 55PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBQQ4TN",
    "image": "https://m.media-amazon.com/images/I/61HN+7ldJnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2423.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBQQ4TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FVPZ3GVC",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Inox Look (TF38S) 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FVPZ3GVC",
    "image": "https://m.media-amazon.com/images/I/416nfzkCKsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPZ3GVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09ZHCLVXF",
    "title": "Philips Walita Cafeteira Espresso Superautomática Série 1200, 220V | Café Fresco na Hora – bebidas de espresso preparadas com praticidade no preparo (EP1220/12)",
    "source_url": "https://www.amazon.com.br/dp/B09ZHCLVXF",
    "image": "https://m.media-amazon.com/images/I/71FXFo4kYiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09ZHCLVXF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0B59DHLJG",
    "title": "Caixa De Som Bluetooth Max 12 Preto JBL",
    "source_url": "https://www.amazon.com.br/dp/B0B59DHLJG",
    "image": "https://m.media-amazon.com/images/I/71Fny0m5ziL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2554.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B59DHLJG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H2HMQHNP",
    "title": "VEDO Acordeon Profissional 34 Teclas, com 60 Teclas Baixo, 5 Teclas Variáveis, Terceira voz, Acordeão Avançado, Adequado Para Adultos Amantes da Música, Orquestra, Maple e Molas Alemãs, Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0H2HMQHNP",
    "image": "https://m.media-amazon.com/images/I/71mroW1lb6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2599.06,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2HMQHNP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B09VH3M3LL",
    "title": "CONTROLADORA PIONEER DJ DDJ-REV1",
    "source_url": "https://www.amazon.com.br/dp/B09VH3M3LL",
    "image": "https://m.media-amazon.com/images/I/814ZJkQ6tdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2614.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09VH3M3LL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GL78BKT7",
    "title": "Depilador a Laser IPL Ulike ME, Resfriamento em Safira, ANVISA, Bivolt | Depilação Rápida e Indolor em Casa, 4 Modos, Até 21 J, Disparo Automático 3x/s, Ice Cooling, Corporal e Facial, Unissex",
    "source_url": "https://www.amazon.com.br/dp/B0GL78BKT7",
    "image": "https://m.media-amazon.com/images/I/61Mla-3gafL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2659.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL78BKT7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FQW3Z6LZ",
    "title": "Hisense Smart TV 4K 55\" Polegadas 55U6QV Mini LED | Dolby Vision, HDR10+, HDR10+ Adaptive, Dolby Vision IQ, Modo FilmMaker, Dolby Atmos, Compatibilidade Alexa",
    "source_url": "https://www.amazon.com.br/dp/B0FQW3Z6LZ",
    "image": "https://m.media-amazon.com/images/I/81Kstc1RqYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2659.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQW3Z6LZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CN7B2LNK",
    "title": "Geladeira LG GN-B392PX 2 Portas 395 Litros Preta Inox | Frost Free, Top Freezer Inverter -127 Volts",
    "source_url": "https://www.amazon.com.br/dp/B0CN7B2LNK",
    "image": "https://m.media-amazon.com/images/I/315+lj351CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2788.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CN7B2LNK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CN79H73Y",
    "title": "LG Geladeira Frost Free 395 Litros Duplex com Compressor Smart Inverter Preta Top Freezer 2 Portas",
    "source_url": "https://www.amazon.com.br/dp/B0CN79H73Y",
    "image": "https://m.media-amazon.com/images/I/315+lj351CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CN79H73Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GQJF7T7S",
    "title": "Ar-Condicionado Split 18.000 BTUs AirVolution Lite Inverter Frio Midea | inverter, r32 lite",
    "source_url": "https://www.amazon.com.br/dp/B0GQJF7T7S",
    "image": "https://m.media-amazon.com/images/I/415jOsCNyrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2848.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQJF7T7S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HBYMG565",
    "title": "Samsung Smart TV 55\" Crystal UHD 4K U8000H 2027, Vision AI Companion, Modo Estádio, Xbox Cloud Gaming, Canais Gratuitos, 7 Anos de Atualização",
    "source_url": "https://www.amazon.com.br/dp/B0HBYMG565",
    "image": "https://m.media-amazon.com/images/I/51cyVARXJHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HBYMG565?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H63M1Y6W",
    "title": "Freezer Electrolux Horizontal 513L Inverter (HI550T) Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H63M1Y6W",
    "image": "https://m.media-amazon.com/images/I/31SjYpp1vqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3098.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63M1Y6W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0H7Z2YW38",
    "title": "Samsung Smart TV 55\" MiniLED 4K M75H | Vision AI Companion, Modo Futebol, Xbox Cloud Gaming, Canais Gratuitos, 7 Anos de Atualização",
    "source_url": "https://www.amazon.com.br/dp/B0H7Z2YW38",
    "image": "https://m.media-amazon.com/images/I/619zHmZFrkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H7Z2YW38?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FPBPDWZQ",
    "title": "PHILIPS, Smart TV Ambilight 65\" 4K, Titan OS, 65PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ",
    "image": "https://m.media-amazon.com/images/I/61-b5p1Qg-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DVVJX8R6",
    "title": "Ar Condicionado Split Hi Wall Philco PAC24QI 24000 BTU/h | Quente e Frio, 220 Volts",
    "source_url": "https://www.amazon.com.br/dp/B0DVVJX8R6",
    "image": "https://m.media-amazon.com/images/I/51XZ2M4VzXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DVVJX8R6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F8LJSC9B",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Azul Marinho",
    "source_url": "https://www.amazon.com.br/dp/B0F8LJSC9B",
    "image": "https://m.media-amazon.com/images/I/61G1x4+IXTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3298.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8LJSC9B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0B625GC45",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PW Branca 11/7kg - 220V",
    "source_url": "https://www.amazon.com.br/dp/B0B625GC45",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B625GC45?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BZ15NC13",
    "title": "Samsung Lava e Seca 11kg Branco WD11M4473PW - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ15NC13",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15NC13?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GMY41LM8",
    "title": "Smartphone Motorola Edge 70 5G Crystals by Swarovski - 512GB 24GB (12GB RAM + 12GB RAM Boost), Ultrafino, 3 cameras 50MP e tela extreme Amoled 120hz - Cloud Dancer",
    "source_url": "https://www.amazon.com.br/dp/B0GMY41LM8",
    "image": "https://m.media-amazon.com/images/I/61LyzNkloEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMY41LM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ129NTZ",
    "image": "https://m.media-amazon.com/images/I/516qpWn6k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0G45HWZRZ",
    "title": "Apple iPhone 14 Pro (128 GB) – Preto-espacial (Seminovo)",
    "source_url": "https://www.amazon.com.br/dp/B0G45HWZRZ",
    "image": "https://m.media-amazon.com/images/I/41al5-lNvML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3666.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45HWZRZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GL3FW4QL",
    "title": "Geladeira Inteligente B= Smart Brastemp Frost Free Duplex 512 Litros Cor Inox - BRM62AK Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0GL3FW4QL",
    "image": "https://m.media-amazon.com/images/I/41oL3b3I9qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3692.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GL3FW4QL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FVPLDKKG",
    "title": "Electrolux Geladeira Electrolux Frost Free Inverter 400L Efficient AutoSense e Rapid Freeze Inverse Black Inox Look (IB6B) Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0FVPLDKKG",
    "image": "https://m.media-amazon.com/images/I/4183aoBiILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPLDKKG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DSXX6XB3",
    "title": "Celular Samsung Galaxy S25 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.2\", Prata",
    "source_url": "https://www.amazon.com.br/dp/B0DSXX6XB3",
    "image": "https://m.media-amazon.com/images/I/61ypIBTp6vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSXX6XB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HBYBB54N",
    "title": "Samsung Smart TV 65\" Crystal UHD 4K U8000H 2027, Vision AI Companion, Modo Estádio, Xbox Cloud Gaming, Canais Gratuitos, 7 Anos de Atualização",
    "source_url": "https://www.amazon.com.br/dp/B0HBYBB54N",
    "image": "https://m.media-amazon.com/images/I/51cyVARXJHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HBYBB54N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0BFG1DGDR",
    "title": "Lava & Seca 11 Kg Samsung SmartThings Inox Look com 12 Programas de Lavagem - 110V",
    "source_url": "https://www.amazon.com.br/dp/B0BFG1DGDR",
    "image": "https://m.media-amazon.com/images/I/41hqpPsERSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4464.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFG1DGDR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "source_url": "https://www.amazon.com.br/dp/B0F5X4NPK2",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FTNHK4G7",
    "title": "Apple iPhone 15 Pro (256 GB) — Titânio preto (Seminovo)",
    "source_url": "https://www.amazon.com.br/dp/B0FTNHK4G7",
    "image": "https://m.media-amazon.com/images/I/51bNCrZFLjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4527.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNHK4G7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CB1QS325",
    "title": "Samsung Galaxy Book3 360 Intel® Core™ i5-1335U, Windows 11 Home, 8 GB, 256 GB SSD, 13.3\" Full HD AMOLED, 1.16 kg*",
    "source_url": "https://www.amazon.com.br/dp/B0CB1QS325",
    "image": "https://m.media-amazon.com/images/I/51xhBW18BEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CB1QS325?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GQW5MH7D",
    "title": "Apple iPhone 17e de 256 GB — Branco",
    "source_url": "https://www.amazon.com.br/dp/B0GQW5MH7D",
    "image": "https://m.media-amazon.com/images/I/41Qt5voMacL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQW5MH7D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CPFBBHP4",
    "title": "eufy X10 Pro Robô Aspirador e Passa Pano,Esfregão Sempre Úmido,8000Pa, 220v | Lava Seca Reabastece Autosecagem 45°C,Navegação e Evita Obstáculos Inteligente com Visão por IA e Laser LiDAR,Ideal para Pets",
    "source_url": "https://www.amazon.com.br/dp/B0CPFBBHP4",
    "image": "https://m.media-amazon.com/images/I/71ylrz9PRgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4749.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CPFBBHP4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GKQNGV23",
    "title": "Celular Samsung Galaxy S26 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.3\" - Azul",
    "source_url": "https://www.amazon.com.br/dp/B0GKQNGV23",
    "image": "https://m.media-amazon.com/images/I/61eUOIh87pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4775.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQNGV23?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0HGBKY9YX",
    "title": "Notebook Acer Aspire GO 15 AG15-71P-777T Intel® Core™ i7-13620H de 13°G 16GB RAM 512GB SSD W11 FHD 15.6\"",
    "source_url": "https://www.amazon.com.br/dp/B0HGBKY9YX",
    "image": "https://m.media-amazon.com/images/I/51Lw9udEQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HGBKY9YX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FXM4S78T",
    "title": "DREAME L40 Ultra AE Robô Aspirador e Mopa, Sucção 19.000Pa, Caixa de Poeira Autoesvaziável, Mopa Flexível com Lavagem Automática 75°C, Amigo dos Pets, App/Voz(Alexa/Google/Siri), 127v",
    "source_url": "https://www.amazon.com.br/dp/B0FXM4S78T",
    "image": "https://m.media-amazon.com/images/I/61ARCAiNjRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXM4S78T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DG46DS62",
    "title": "Notebook Yoga Slim 7i Intel Core Ultra 5, 16GB, 512GB SSD Intel Arc Graphics, 14\" OLED, W11, 1.39kg, 83GM0003BR",
    "source_url": "https://www.amazon.com.br/dp/B0DG46DS62",
    "image": "https://m.media-amazon.com/images/I/71dbFA9RmWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5929.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DG46DS62?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GRJNQWHW",
    "title": "Notebook Gamer Alienware 16 AC16250, Intel Core 5 210H, Windows 11 Home | NVIDIA GeForce RTX 4050 6GB GDDR6, 16 WQXGA 120 Hz, 16 GB DDR5, 512 GB SSD, Cor Azul Escuro, Wi-Fi 7, Teclado Retroiluminado",
    "source_url": "https://www.amazon.com.br/dp/B0GRJNQWHW",
    "image": "https://m.media-amazon.com/images/I/514EAjs4c9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7249.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GRJNQWHW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0GKQTTCMM",
    "title": "Celular Samsung Galaxy S26 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9\" - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTTCMM",
    "image": "https://m.media-amazon.com/images/I/61tUK0-AiTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7690.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTTCMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0CZ4LQCQJ",
    "title": "Monitor Samsung ViewFinity S9 27\" 5k, Tela Plana, 60Hz, 5ms, Thunderbolt 4, Smart Hub, Gaming Mode 27\"",
    "source_url": "https://www.amazon.com.br/dp/B0CZ4LQCQJ",
    "image": "https://m.media-amazon.com/images/I/41aVgm5pxNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZ4LQCQJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0FY3WHPDH",
    "title": "Acer Nitro V 15 Notebook Gamer 15.6\" Intel Core i9 RTX 4060 16GB Windows",
    "source_url": "https://www.amazon.com.br/dp/B0FY3WHPDH",
    "image": "https://m.media-amazon.com/images/I/71TFTrBp3ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7748.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY3WHPDH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B07WZXSDKW",
    "title": "Schwinn Fitness Série de bicicletas ergométricas para ciclismo interno",
    "source_url": "https://www.amazon.com.br/dp/B07WZXSDKW",
    "image": "https://m.media-amazon.com/images/I/71Y2gX8qNLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 9539.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B07WZXSDKW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  },
  {
    "asin": "B0DQR9TLZ1",
    "title": "Drone DJI Air 3S Fly More Combo (Com tela) BR - DJI056",
    "source_url": "https://www.amazon.com.br/dp/B0DQR9TLZ1",
    "image": "https://m.media-amazon.com/images/I/519VYcdL94L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 12654.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQR9TLZ1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-21T00:53:51.000Z"
  }
];
