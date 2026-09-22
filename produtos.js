const PRODUCTS = [
  {
    "asin": "B09547GF99",
    "title": "Scala Plus Papel Toalha Multipicote, 200 Toalhas (2 Rolos de 100 Toalhas Cada)",
    "source_url": "https://www.amazon.com.br/dp/B09547GF99",
    "image": "https://m.media-amazon.com/images/I/71Q5B8kAMtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B09547GF99?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CHZBLSRQ",
    "title": "LISTERINE® Melancia & Hortelã Enxaguante Bucal Sem Álcool, 500mL",
    "source_url": "https://www.amazon.com.br/dp/B0CHZBLSRQ",
    "image": "https://m.media-amazon.com/images/I/51cCwnBSAVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 16.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CHZBLSRQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "8506087163",
    "title": "Rita, não grita!",
    "source_url": "https://www.amazon.com.br/dp/8506087163",
    "image": "https://m.media-amazon.com/images/I/81QpGCWeECL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 18.98,
    "affiliate_url": "https://www.amazon.com.br/dp/8506087163?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07DKKQ1TN",
    "title": "L'Oréal Paris Elseve Óleo Extraordinário Creme de Tratamento para Nutrição Intensa de Cabelos Secos, com Micro-Óleos de Flores Preciosas para Maciez e Brilho 300g",
    "source_url": "https://www.amazon.com.br/dp/B07DKKQ1TN",
    "image": "https://m.media-amazon.com/images/I/715M+mgR5ZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DKKQ1TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FG2DG5RH",
    "title": "TOYADENT Escova de Dente Adultos, 5500 Cerdas Macia, Kit Família 3 Unidades | Confortável para Escovação Diária, Alta Densidade com Tampa Protetora, Kit Família para Limpeza Suave e Cuidado Bucal Diário",
    "source_url": "https://www.amazon.com.br/dp/B0FG2DG5RH",
    "image": "https://m.media-amazon.com/images/I/71J3bJhXwJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FG2DG5RH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09VC3SMN4",
    "title": "Ricca Escova Raquete Flex Blue, Desembaraça sem quebrar, para todos os tipos de cabelo, 1 unidade",
    "source_url": "https://www.amazon.com.br/dp/B09VC3SMN4",
    "image": "https://m.media-amazon.com/images/I/41aHPXyv4-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 25.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B09VC3SMN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0G45G116D",
    "title": "Shampoo Encorpador L'Oréal Paris Elseve Collagen® Lifter 400ml",
    "source_url": "https://www.amazon.com.br/dp/B0G45G116D",
    "image": "https://m.media-amazon.com/images/I/71JdSG1QhRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 27.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G45G116D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "source_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FWGN9SZL",
    "title": "Café em Cápsula Nescafé Farmers Origins Brazil - compatível máquina Nespresso, 18 cápsulas 44g",
    "source_url": "https://www.amazon.com.br/dp/B0FWGN9SZL",
    "image": "https://m.media-amazon.com/images/I/81FJv2Bod7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWGN9SZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FWFRRT48",
    "title": "Café em Cápsula Nescafé Farmers Origins Colombia - compatível máquina Nespresso, 18 cápsulas 44g",
    "source_url": "https://www.amazon.com.br/dp/B0FWFRRT48",
    "image": "https://m.media-amazon.com/images/I/81OEDFGUjuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWFRRT48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CTTVR415",
    "title": "Leave-In L'Oréal Paris Elseve Reparação Total 5 Cicatri Renov 100ml | Reparação Instantânea, Desembaraço Imediato, Repara os Danos Fio a Fio, Para Todos os Tipos de Cabelo",
    "source_url": "https://www.amazon.com.br/dp/B0CTTVR415",
    "image": "https://m.media-amazon.com/images/I/61yXyxU11AL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTTVR415?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "8574126233",
    "title": "A Irmã do Gildo",
    "source_url": "https://www.amazon.com.br/dp/8574126233",
    "image": "https://m.media-amazon.com/images/I/81KQlEZDn6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.94,
    "affiliate_url": "https://www.amazon.com.br/dp/8574126233?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "8574120286",
    "title": "O grúfalo",
    "source_url": "https://www.amazon.com.br/dp/8574120286",
    "image": "https://m.media-amazon.com/images/I/A1Yw3SMln2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8574120286?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07XTR3YQ6",
    "title": "Salton Espumante Prosecco Brut 750 Ml",
    "source_url": "https://www.amazon.com.br/dp/B07XTR3YQ6",
    "image": "https://m.media-amazon.com/images/I/61MEMzoeMkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XTR3YQ6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "857412320X",
    "title": "Gildo",
    "source_url": "https://www.amazon.com.br/dp/857412320X",
    "image": "https://m.media-amazon.com/images/I/71dztBZAEXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.79,
    "affiliate_url": "https://www.amazon.com.br/dp/857412320X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D3CT4H1J",
    "title": "Protetor Contra Surtos Elétricos (DPS) CLAMPER 127/220V, 10 Amperes, 3 Pinos, para PC, PS5, Xbox, Smartphone, Monitor, Impressora, etc - iCLAMPER Pocket Fit 3P 10A Transparente LCF, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0D3CT4H1J",
    "image": "https://m.media-amazon.com/images/I/41UZqy2PB-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 35.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3CT4H1J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B093GCJ1JP",
    "title": "Fralda Pom Pom Protek Proteção de Mãe Mega M 48 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B093GCJ1JP",
    "image": "https://m.media-amazon.com/images/I/71tuvviGiaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B093GCJ1JP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0G2X31T8D",
    "title": "OralGos Escova de Dentes Premium 6 unidades Colorido, Cerdas Ultra Macias | Cerdas Ultra Macias, com Protetor de Cerdas, Suave para Gengivas, Ideal para Presente e Uso Diário",
    "source_url": "https://www.amazon.com.br/dp/B0G2X31T8D",
    "image": "https://m.media-amazon.com/images/I/81GsimTkapL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2X31T8D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07VGF2P6L",
    "title": "L'Oréal Paris Revitalift Hialurônico Creme Facial Noturno, com Ácido Hialurônico Puro, Com textura leve, preenche linhas de expressão e hidrata a pele intensamente por 24h, 49g",
    "source_url": "https://www.amazon.com.br/dp/B07VGF2P6L",
    "image": "https://m.media-amazon.com/images/I/51dnpdlO-zS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VGF2P6L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CQDGCQVT",
    "title": "Calcinha Absorvente Menstrual Pantys Xodó, Fluxo Moderado, Feminino, Preto, 1 Unidade",
    "source_url": "https://www.amazon.com.br/dp/B0CQDGCQVT",
    "image": "https://m.media-amazon.com/images/I/51DGhK2g8qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQDGCQVT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B077BY5B8Q",
    "title": "Maybelline NY The Colossal Volum' Express, Máscara de Cílios Lavável, 9x Mais Volume por Até 24h, Fórmula com Colágeno para Definição Intensa, Não Empelota, Cor Preto, 8ml",
    "source_url": "https://www.amazon.com.br/dp/B077BY5B8Q",
    "image": "https://m.media-amazon.com/images/I/51rTd-hhlGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 40.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B077BY5B8Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6559817040",
    "title": "Melhores de preto: Dez contos de amor dos Caçadores de Sombras",
    "source_url": "https://www.amazon.com.br/dp/6559817040",
    "image": "https://m.media-amazon.com/images/I/91r5G1J0+pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 40.8,
    "affiliate_url": "https://www.amazon.com.br/dp/6559817040?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6555327073",
    "title": "Bons tempos: Yesteryear",
    "source_url": "https://www.amazon.com.br/dp/6555327073",
    "image": "https://m.media-amazon.com/images/I/81-ZGsunjkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 47.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6555327073?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0G8FW47GB",
    "title": "Blocos De Montar Magnéticos Construção 38 Peças Educativo Infantil | Portátil E Prático, Material ABS Seguro, Estimula A Imaginação E A Criatividade",
    "source_url": "https://www.amazon.com.br/dp/B0G8FW47GB",
    "image": "https://m.media-amazon.com/images/I/71s2tfybOmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G8FW47GB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B08D8QDY25",
    "title": "Lixeira com Pedal New Tramontina em aço inox com acabamento polido 5 L",
    "source_url": "https://www.amazon.com.br/dp/B08D8QDY25",
    "image": "https://m.media-amazon.com/images/I/315fyOioe2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B08D8QDY25?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B08Y3CV67L",
    "title": "As extraordinárias viagens de Júlio Verne - Box com 6 livros",
    "source_url": "https://www.amazon.com.br/dp/B08Y3CV67L",
    "image": "https://m.media-amazon.com/images/I/71wgomAPTQS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 50.12,
    "affiliate_url": "https://www.amazon.com.br/dp/B08Y3CV67L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DNY5FQY3",
    "title": "LYOR - Tapete de Pedra Diatomita para Banheiro Cinza 60cm x 39cm",
    "source_url": "https://www.amazon.com.br/dp/B0DNY5FQY3",
    "image": "https://m.media-amazon.com/images/I/41R091iJO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 51.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNY5FQY3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B08GKXGS45",
    "title": "Candide, Laptop Infantil, Homem-Aranha, Brinquedo Educativo - Bilíngue",
    "source_url": "https://www.amazon.com.br/dp/B08GKXGS45",
    "image": "https://m.media-amazon.com/images/I/61mMbktfL-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 55.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B08GKXGS45?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09JKVKC47",
    "title": "LEGO Classic Placa de Construção 11023 Kit de Construção; Jogo Criativo Sem Limites para Construtores LEGO de 4 anos ou mais (1 peça), Modelo: 6384599, Cor: multicolor",
    "source_url": "https://www.amazon.com.br/dp/B09JKVKC47",
    "image": "https://m.media-amazon.com/images/I/81Rgb25iryL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 57.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B09JKVKC47?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B000GKUEVE",
    "title": "Pacote 5 Carros Sortidos, Hot Wheels, Mattel, Multicor - não é possível escolher as cores",
    "source_url": "https://www.amazon.com.br/dp/B000GKUEVE",
    "image": "https://m.media-amazon.com/images/I/81GMRnT1SsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B000GKUEVE?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6555656867",
    "title": "A hipótese do amor - Edição especial (livro + marcador exclusivo)",
    "source_url": "https://www.amazon.com.br/dp/6555656867",
    "image": "https://m.media-amazon.com/images/I/71snJkZzgmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.75,
    "affiliate_url": "https://www.amazon.com.br/dp/6555656867?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "855101305X",
    "title": "Alchemised: Edição brasileira",
    "source_url": "https://www.amazon.com.br/dp/855101305X",
    "image": "https://m.media-amazon.com/images/I/71Ib1chR4GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.21,
    "affiliate_url": "https://www.amazon.com.br/dp/855101305X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6555000376",
    "title": "O monstro das cores",
    "source_url": "https://www.amazon.com.br/dp/6555000376",
    "image": "https://m.media-amazon.com/images/I/71KLnFnkVxS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.73,
    "affiliate_url": "https://www.amazon.com.br/dp/6555000376?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DQVRNL95",
    "title": "Ola Coco Sabão Líquido para Roupas Delicadas, 3,8L",
    "source_url": "https://www.amazon.com.br/dp/B0DQVRNL95",
    "image": "https://m.media-amazon.com/images/I/514-mDTxZxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQVRNL95?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D8V3QLDD",
    "title": "Filtro de Linha CLAMPER iCLAMPER Energia 5, 5 Tomadas, Proteção Contra Surtos Elétricos, 10A, Bivolt, Cabo 1m, Transparente",
    "source_url": "https://www.amazon.com.br/dp/B0D8V3QLDD",
    "image": "https://m.media-amazon.com/images/I/51rRxbJnGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8V3QLDD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B08N9P9M5L",
    "title": "Coleção Anne de Green Gables com 8 livros mais Diário de aventuras",
    "source_url": "https://www.amazon.com.br/dp/B08N9P9M5L",
    "image": "https://m.media-amazon.com/images/I/71sTkbq6KoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B08N9P9M5L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GXWK917R",
    "title": "Blocos Magnéticos de Montar 114 Peças, Cubos 3D de 2 cm, STEM Infantil | 114 peças; cubos de 2 cm; construção 3D; conexão magnética; criatividade, lógica e coordenação; brincadeira STEM; 3+ anos",
    "source_url": "https://www.amazon.com.br/dp/B0GXWK917R",
    "image": "https://m.media-amazon.com/images/I/81IgydmtZfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 68.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXWK917R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CJMV9ZQG",
    "title": "Roupa Íntima Bigfral Derma Plus P/M 24 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B0CJMV9ZQG",
    "image": "https://m.media-amazon.com/images/I/71fCLETIrtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJMV9ZQG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FQ6VY7S2",
    "title": "Kit 3 Pacotes Café Especial em Grãos Coffee Mais Variedades: Caparaó, Intenso e Solos Vulcânicos - 100% Arábica (3x250g)",
    "source_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2",
    "image": "https://m.media-amazon.com/images/I/61f5fOGM32L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 70.71,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQ6VY7S2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "source_url": "https://www.amazon.com.br/dp/B0DLVH2WN4",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CVNK6PDX",
    "title": "Varal De Chão 3 Andares Grande de Roupas Dobrável Regulável Retrátil com Rodinhas e Ganchos Compacto (PRETO)",
    "source_url": "https://www.amazon.com.br/dp/B0CVNK6PDX",
    "image": "https://m.media-amazon.com/images/I/71MrMt7YWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CVNK6PDX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CCQBVQ43",
    "title": "Baby Alive, Boneca, Bebê Shampoo, Harper Hugs - Cabelos Loiros, Brinquedo",
    "source_url": "https://www.amazon.com.br/dp/B0CCQBVQ43",
    "image": "https://m.media-amazon.com/images/I/71VclfCy-aL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 73.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CCQBVQ43?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0985RJT3K",
    "title": "Philco Ferro a Vapor Travel Ceramic Bivolt Base em Cerâmica",
    "source_url": "https://www.amazon.com.br/dp/B0985RJT3K",
    "image": "https://m.media-amazon.com/images/I/51cMAvfwILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0985RJT3K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09H8P5L6J",
    "title": "Kit Hidratante Facial L'Oréal Paris Revitalift Hialurônico Diurno FPS 20 + Noturno, Tratamento Antirrugas e Preenchedor com Ácido Hialurônico Puro, 49g",
    "source_url": "https://www.amazon.com.br/dp/B09H8P5L6J",
    "image": "https://m.media-amazon.com/images/I/51CqsKH0b9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09H8P5L6J?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F67MQCGQ",
    "title": "L'Oréal Paris Elseve Liso dos Sonhos Kit Shampoo, Condicionador e Sérum, com Tecnologia Ativada por Calor para um Liso por 1 Semana, Efeito Antifrizz e Barreira Protetora Contra Umidade",
    "source_url": "https://www.amazon.com.br/dp/B0F67MQCGQ",
    "image": "https://m.media-amazon.com/images/I/817zLg0L03L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 77.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F67MQCGQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FRBBQF36",
    "title": "Umidificador Ultrassônico Easy Air 1.8L Branco Multi Saúde - HC290",
    "source_url": "https://www.amazon.com.br/dp/B0FRBBQF36",
    "image": "https://m.media-amazon.com/images/I/41QgGU-LO2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FRBBQF36?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07F4G4LJK",
    "title": "Coup Segunda Edição (Inclui Expansão) | Inclui Expansão",
    "source_url": "https://www.amazon.com.br/dp/B07F4G4LJK",
    "image": "https://m.media-amazon.com/images/I/61UvGpwlI9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 80.01,
    "affiliate_url": "https://www.amazon.com.br/dp/B07F4G4LJK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09HN38G3F",
    "title": "Furadeira de impacto 3/8\" 500W, 110V",
    "source_url": "https://www.amazon.com.br/dp/B09HN38G3F",
    "image": "https://m.media-amazon.com/images/I/51FeRa+3SYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 84.64,
    "affiliate_url": "https://www.amazon.com.br/dp/B09HN38G3F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DJ1C3J2B",
    "title": "LEGO Super Heroes Marvel Robô do Homem de Ferro 76307 (101 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DJ1C3J2B",
    "image": "https://m.media-amazon.com/images/I/81npJj0hCkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 86.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ1C3J2B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H2G6W6L5",
    "title": "Kit 2 Cremes Pomadas de Assaduras Vit B5 com 100g cada, Total 200g - Bepantol Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H2G6W6L5",
    "image": "https://m.media-amazon.com/images/I/61GzAiD3PML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2G6W6L5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BFT97SDN",
    "title": "Tech T-shirt Gola U Masculino",
    "source_url": "https://www.amazon.com.br/dp/B0BFT97SDN",
    "image": "https://m.media-amazon.com/images/I/41NMLoCbJIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFT97SDN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CJT5FJ97",
    "title": "Kit 4 Pacotes Café Especial Torrado e Moído Coffee Mais Variedades: Cerrado Mineiro, Arara, Chapada de Minas e Clássico - 100% Arábica (4x250g)",
    "source_url": "https://www.amazon.com.br/dp/B0CJT5FJ97",
    "image": "https://m.media-amazon.com/images/I/61uSw3RHxpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.14,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJT5FJ97?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DGTKZ2S1",
    "title": "Bebedouro para Gatos, 3L Fonte Gato Inox Comedouros, Bebedouros e Acessorios para Gatos, Silenciosa, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1",
    "image": "https://m.media-amazon.com/images/I/61EJXP1YreL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 100.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTKZ2S1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DXQBPB63",
    "title": "Baby Alive, Boneca, Festinha do Chá, Sophia Sparkle - Cabelos Castanhos, Acessórios Inclusos, Bebe e Faz Xixi - A partir de 3 Anos",
    "source_url": "https://www.amazon.com.br/dp/B0DXQBPB63",
    "image": "https://m.media-amazon.com/images/I/615tjGvR0-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DXQBPB63?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0HGNHWCJ5",
    "title": "Kit 2 Filtros/Refis Originais de Água Acqua Pure para Purificador Electrolux PE12A/PE12B/PE12G/PE12V/PE12P",
    "source_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5",
    "image": "https://m.media-amazon.com/images/I/51+rMeILUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HGNHWCJ5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D9PM7MDP",
    "title": "Aspirador de Pó Vertical Britânia 2 em 1 com Filtro Ciclone 1400W BAS30 1,5L Azul 127V",
    "source_url": "https://www.amazon.com.br/dp/B0D9PM7MDP",
    "image": "https://m.media-amazon.com/images/I/41BWOPa7xqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 119.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9PM7MDP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DNHGQHMY",
    "title": "Bettdow SmartWatch, relogio smartwatch com Ecrã tátil e Alexa, à prova d'água IP68, relogio feminino e masculino, com 100+ modo esportivo e recebimento de notificações(preto)",
    "source_url": "https://www.amazon.com.br/dp/B0DNHGQHMY",
    "image": "https://m.media-amazon.com/images/I/61jq8y1sVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.36,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNHGQHMY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FVFYJLYL",
    "title": "Jogo de Panela antiaderente 9 peças",
    "source_url": "https://www.amazon.com.br/dp/B0FVFYJLYL",
    "image": "https://m.media-amazon.com/images/I/511p51Ku0pL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 121.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVFYJLYL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H6XQWZXR",
    "title": "Kit De Desenho Profissional 96 Peças Com Estojo Portátil – 72 Lápis De Cor Oleosos, 12 Lápis De Grafite 8B–5H, Lápis De Carvão Macio Médio Duro, Esfuminhos, Acessórios E Bloco A5 Para Desenho E Esboço",
    "source_url": "https://www.amazon.com.br/dp/B0H6XQWZXR",
    "image": "https://m.media-amazon.com/images/I/71Kpqi5EvSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 122.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6XQWZXR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6583913062",
    "title": "Projetando Aplicações com Uso Intensivo de Dados – 2ª Edição: Os pilares para construir sistemas confiáveis, escaláveis e fáceis de manter",
    "source_url": "https://www.amazon.com.br/dp/6583913062",
    "image": "https://m.media-amazon.com/images/I/81OeaI+7JrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 126.34,
    "affiliate_url": "https://www.amazon.com.br/dp/6583913062?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DJ19VGDH",
    "title": "LEGO Minecraft A Casa Porco Bebê 21268",
    "source_url": "https://www.amazon.com.br/dp/B0DJ19VGDH",
    "image": "https://m.media-amazon.com/images/I/81-XNpEb2bL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 126.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ19VGDH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B094YV31R9",
    "title": "I2GO, Carregador Portátil (Power Bank) Ultra Rápido 10000mAh, Power Delivery 20W, 2 Saídas USB + 1 Saída/Entrada USB-C, Preto, i2GO PRO",
    "source_url": "https://www.amazon.com.br/dp/B094YV31R9",
    "image": "https://m.media-amazon.com/images/I/51x6d0ZwylS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B094YV31R9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0C4476NM8",
    "title": "Aspirador de Pó Philco Vertical 2 em 1 1450w Preto Pas1600p - 127",
    "source_url": "https://www.amazon.com.br/dp/B0C4476NM8",
    "image": "https://m.media-amazon.com/images/I/41inGaNI2TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 131.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C4476NM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FK1VY11N",
    "title": "Kit 2x Creatina Gummy, Sabor Chiclete e Maçã Verde (120 Gomas) 3g de Creatina por Dose - Zero Açúcar, My Fit",
    "source_url": "https://www.amazon.com.br/dp/B0FK1VY11N",
    "image": "https://m.media-amazon.com/images/I/61aGwVeUudL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 133.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FK1VY11N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D2Z3GGCY",
    "title": "DEEP VITA C CAPSULE CREAM 55g",
    "source_url": "https://www.amazon.com.br/dp/B0D2Z3GGCY",
    "image": "https://m.media-amazon.com/images/I/71m8aGBgXqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 141.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D2Z3GGCY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07N7YYZY2",
    "title": "Telefone sem fio com identificador de chamadas TS 2510 ID Preto Intelbras",
    "source_url": "https://www.amazon.com.br/dp/B07N7YYZY2",
    "image": "https://m.media-amazon.com/images/I/41AXMSNSCYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 142.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B07N7YYZY2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FSFYHZ7R",
    "title": "Philco Escova Secadora Bivolt 1300W Íons Tourmaline PES33A Tecnologia Íon Tourmaline",
    "source_url": "https://www.amazon.com.br/dp/B0FSFYHZ7R",
    "image": "https://m.media-amazon.com/images/I/61FFJKX-Z-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 143.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSFYHZ7R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0848FMW1W",
    "title": "Fralda Pampers Premium Care Pants Tamanho M, Fácil de Vestir, 124 Unidades",
    "source_url": "https://www.amazon.com.br/dp/B0848FMW1W",
    "image": "https://m.media-amazon.com/images/I/610zsSAMtpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 149.28,
    "affiliate_url": "https://www.amazon.com.br/dp/B0848FMW1W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FHGNMY4R",
    "title": "Basike Fone de Ouvido Bluetooth 6.0 Esportivo para Corrida, Intra-Auricular",
    "source_url": "https://www.amazon.com.br/dp/B0FHGNMY4R",
    "image": "https://m.media-amazon.com/images/I/61rkykIjWiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 158.16,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHGNMY4R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D1CVDHLN",
    "title": "SUNNY, Bitzee Magicals, Pet Interativo Virtual",
    "source_url": "https://www.amazon.com.br/dp/B0D1CVDHLN",
    "image": "https://m.media-amazon.com/images/I/51u2+IC1OzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 176.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1CVDHLN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DRW5TL43",
    "title": "LEGO Speed Champions Supercarro Porsche 911 GT3 RS 77239 (348 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DRW5TL43",
    "image": "https://m.media-amazon.com/images/I/81GXj4TGjQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DRW5TL43?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09S3ST9V7",
    "title": "Primeira Casa Sylvanian Families",
    "source_url": "https://www.amazon.com.br/dp/B09S3ST9V7",
    "image": "https://m.media-amazon.com/images/I/61AW7oz-4XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 184.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B09S3ST9V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0916751QC",
    "title": "TRICICLO AVESPA MARAL COLORIDO",
    "source_url": "https://www.amazon.com.br/dp/B0916751QC",
    "image": "https://m.media-amazon.com/images/I/51LiRL70CuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0916751QC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CRTPF7CZ",
    "title": "soundcore P30i da Anker, ANC Fone de Ouvido Bluetooth 5.4 Sem Fio, TWS | 45H, com Cancelamento de Ruído Adaptativo, Graves Poderosos, Estojo 2-em-1 com Suporte para Celular, IP54, Fone Gamer TWS",
    "source_url": "https://www.amazon.com.br/dp/B0CRTPF7CZ",
    "image": "https://m.media-amazon.com/images/I/51MgcnjJKRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRTPF7CZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0779CJD58",
    "title": "Irrigador Oral Clearpik Portable 200ml Recarregável Multi Saúde - HC036",
    "source_url": "https://www.amazon.com.br/dp/B0779CJD58",
    "image": "https://m.media-amazon.com/images/I/31LUfCnDsRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0779CJD58?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B00NHQFA1I",
    "title": "LEGO Classic - Caixa Média de Peças Criativas",
    "source_url": "https://www.amazon.com.br/dp/B00NHQFA1I",
    "image": "https://m.media-amazon.com/images/I/8160QjpuoOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00NHQFA1I?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BCCPXXS1",
    "title": "CHUVEIRO ELETRÔNICO - SUPER DUCHA ELETRÔNICA COM RESISTÊNCIA BLINDADA 220V 4.400W - FAME",
    "source_url": "https://www.amazon.com.br/dp/B0BCCPXXS1",
    "image": "https://m.media-amazon.com/images/I/416lU6-p3NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 209.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BCCPXXS1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "8533970897",
    "title": "Vade Mecum Acadêmico De Direito Rideel - Tradicional - 2026.2",
    "source_url": "https://www.amazon.com.br/dp/8533970897",
    "image": "https://m.media-amazon.com/images/I/51HU6DuuURL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 209.9,
    "affiliate_url": "https://www.amazon.com.br/dp/8533970897?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B088MVWBM9",
    "title": "Philco Aspirador Pó Vertical Power Clean 2000W PAS4000V 127V",
    "source_url": "https://www.amazon.com.br/dp/B088MVWBM9",
    "image": "https://m.media-amazon.com/images/I/41El3TMO04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 211.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B088MVWBM9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DPBFPCZR",
    "title": "Triciclo Infantil Avespa Princesas Rosa Com Empurrador Maral",
    "source_url": "https://www.amazon.com.br/dp/B0DPBFPCZR",
    "image": "https://m.media-amazon.com/images/I/51AzhS6wh9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 215.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPBFPCZR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DR3N5BV6",
    "title": "Irmã do Cachorrinho Aprende Comigo Brinquedo Bebê Fisher-Price Mattel. Ensina com luzes, músicas e frases educativas. Ideal a partir dos 6 meses.",
    "source_url": "https://www.amazon.com.br/dp/B0DR3N5BV6",
    "image": "https://m.media-amazon.com/images/I/710kBoOgaEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DR3N5BV6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CD14V4RQ",
    "title": "Fritadeira Elétrica sem óleo/Air Fryer Philco PFR15PG Preto 4,3L com Timer",
    "source_url": "https://www.amazon.com.br/dp/B0CD14V4RQ",
    "image": "https://m.media-amazon.com/images/I/51QJNzNg7lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CD14V4RQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6560050416",
    "title": "BOX As Crônicas de Nárnia - Edição de Luxo",
    "source_url": "https://www.amazon.com.br/dp/6560050416",
    "image": "https://m.media-amazon.com/images/I/81erRs9DQDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 231.84,
    "affiliate_url": "https://www.amazon.com.br/dp/6560050416?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FGCX4N8G",
    "title": "Conjunto de 4 peças travesseiro triangular, travesseiro de espuma pós-operatório, ajustável almofada lombar (com fronha), adequado para pós-cirurgia, alívio de refluxo ácido e dor nas costas, etc.",
    "source_url": "https://www.amazon.com.br/dp/B0FGCX4N8G",
    "image": "https://m.media-amazon.com/images/I/613tt+D6SQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 233.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGCX4N8G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07BNL32KH",
    "title": "Irrigador Oral Clearpik Professional 1000ml Bivolt Multi Saúde - HC038",
    "source_url": "https://www.amazon.com.br/dp/B07BNL32KH",
    "image": "https://m.media-amazon.com/images/I/51balqBQdHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 239.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BNL32KH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09Q4L157D",
    "title": "LEGO Orquídea de Decoração de Plantas para Adultos, Construir 10311",
    "source_url": "https://www.amazon.com.br/dp/B09Q4L157D",
    "image": "https://m.media-amazon.com/images/I/71iY-AO2D1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 246.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09Q4L157D?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07L4VJV1G",
    "title": "Britânia Bebedouro, Acqua, Preto, Bivolt, Estilo moderno e elegante Plástico",
    "source_url": "https://www.amazon.com.br/dp/B07L4VJV1G",
    "image": "https://m.media-amazon.com/images/I/51eCGAT1e6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07L4VJV1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FM2X9H9H",
    "title": "Anker Zolo Power Bank 20.000mAh Turbo 45W, Carregador Portátil | Cabo USB-C Integrado, USB-C e USB-A, Carregamento Rápido para 17/16/15, Samsung, Xiaomi, Motorola, MacBook, iPad, Tablet",
    "source_url": "https://www.amazon.com.br/dp/B0FM2X9H9H",
    "image": "https://m.media-amazon.com/images/I/51kA-OL8k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 278.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FM2X9H9H?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FMYS7NVC",
    "title": "Maral Triciclo Moto Trail Infantil 2 em 1 – Passeio e Pedal, Suporta até 30 kg, Cinto de Segurança Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0FMYS7NVC",
    "image": "https://m.media-amazon.com/images/I/61gwPxT3mYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMYS7NVC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H1F8GNLL",
    "title": "Fromage (Ludofun)",
    "source_url": "https://www.amazon.com.br/dp/B0H1F8GNLL",
    "image": "https://m.media-amazon.com/images/I/71dtV0iRToL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 287.11,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1F8GNLL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09FKWS793",
    "title": "MIFA A90 Caixas de Som Portáteis Bluetooth, Alto-falante Bluetooth portátil IPX7 à prova d'água, 60W Bass, Emparelhamento estéreo sem fio, Mic embutido, Suporte Micro SD, USB, AUX-in, USB-C Charing",
    "source_url": "https://www.amazon.com.br/dp/B09FKWS793",
    "image": "https://m.media-amazon.com/images/I/61+pHP685TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 295.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B09FKWS793?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0C3KWT5V6",
    "title": "soundcore Q20i da Anker, Fone de Ouvido Bluetooth ANC Híbrido Ativo, 60H | Áudio Hi-Res Graves Potentes, Cancelamento de Ruído Headphone Bluetooth Over Ear, Personalização de Som via App, Ruído branco",
    "source_url": "https://www.amazon.com.br/dp/B0C3KWT5V6",
    "image": "https://m.media-amazon.com/images/I/61pYgcs1f4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 298.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C3KWT5V6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DQY6MFGF",
    "title": "Mattel Brick Shop Elite Carrinha Chevy de 1962 Personalizada",
    "source_url": "https://www.amazon.com.br/dp/B0DQY6MFGF",
    "image": "https://m.media-amazon.com/images/I/91MNlMds9JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DQY6MFGF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FQJZVD2S",
    "title": "Bettdow SmartWatch GPS, Relogio Smartwatch Masculino e Feminino, 1,43 polegadas HD AMOLED, chamada Bluetooth, Esportivos relógio com voz por IA, Compatível com Android iOS, 2 Pulseiras (Titanium)",
    "source_url": "https://www.amazon.com.br/dp/B0FQJZVD2S",
    "image": "https://m.media-amazon.com/images/I/61Uk+h5umYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 305.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQJZVD2S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "6555321806",
    "title": "Box Harry Potter Premium Vermelho (7 Livros em capa dura)",
    "source_url": "https://www.amazon.com.br/dp/6555321806",
    "image": "https://m.media-amazon.com/images/I/61UQDAOBVWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.5,
    "affiliate_url": "https://www.amazon.com.br/dp/6555321806?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H6FG8TQ2",
    "title": "Ximodot Monitor portátil de 15,6 polegadas, Conectividade USB-C HDMI Full HD 1080P e alto-falantes integrados, Monitor gamer presentes para meninos Preto-2",
    "source_url": "https://www.amazon.com.br/dp/B0H6FG8TQ2",
    "image": "https://m.media-amazon.com/images/I/71pMEq3nSDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 333.92,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FG8TQ2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D98VK8PP",
    "title": "Philips Walita Fritadeira Airfryer Série 1000 XL 6,2L, Preta, 110V | Até 90% Menos Óleo – tecnologia RapidAir, 12 modos de preparo e controle analógico (NA130/00)",
    "source_url": "https://www.amazon.com.br/dp/B0D98VK8PP",
    "image": "https://m.media-amazon.com/images/I/510Uj5C7LdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 344.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98VK8PP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07W8X4F48",
    "title": "Mouse Gamer Sem Fio Logitech G703 LIGHTSPEED com RGB LIGHTSYNC, 6 Botões Programáveis, Sensor HERO 25K e Bateria Recarregável - Compatível com POWERPLAY",
    "source_url": "https://www.amazon.com.br/dp/B07W8X4F48",
    "image": "https://m.media-amazon.com/images/I/51fgVUBaPRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W8X4F48?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FFMKXNMG",
    "title": "Headset Gamer Sem Fio Logitech G321, LIGHTSPEED, Bluetooth, Confortável, microfone 16 kHz, bateria de mais de 20 horas de duração. Compatível com PC, PS4, PS5, Nintendo Switch, Smartphone - Branco",
    "source_url": "https://www.amazon.com.br/dp/B0FFMKXNMG",
    "image": "https://m.media-amazon.com/images/I/71sCfhPJSjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFMKXNMG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CQYB2KWT",
    "title": "SONGMICS Banco Baú de Armazenamento Dobrável com Pés, Suporta até 300 kg",
    "source_url": "https://www.amazon.com.br/dp/B0CQYB2KWT",
    "image": "https://m.media-amazon.com/images/I/81nuO4wEAiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 359.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQYB2KWT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07FCJDHD2",
    "title": "Quadriciclo Spider Caixa, Maral, Multicor",
    "source_url": "https://www.amazon.com.br/dp/B07FCJDHD2",
    "image": "https://m.media-amazon.com/images/I/51-UdZlLMvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 362.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07FCJDHD2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CGVQ5GCM",
    "title": "Quadriciclo Infantil Feminino Lady Star Rosa +9 Meses com Guia Maral",
    "source_url": "https://www.amazon.com.br/dp/B0CGVQ5GCM",
    "image": "https://m.media-amazon.com/images/I/61n4-S0RMuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGVQ5GCM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GKJBFTBS",
    "title": "Quadriciclo Carrinho de passeio infantil Gatinha Star Empurrador Pedal e Buzina",
    "source_url": "https://www.amazon.com.br/dp/B0GKJBFTBS",
    "image": "https://m.media-amazon.com/images/I/51mIEP7R3JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 368.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKJBFTBS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0C6X3DT56",
    "title": "TakTark Babá Eletrônica Câmera, 4.3\" Monitor de Bebe, Sem Wi-Fi, 2 Way Audio, Visão Nocturna, Zoom Digital, Economia de energia VOX, Temperatura ambiente, Ideal para Pais Novos",
    "source_url": "https://www.amazon.com.br/dp/B0C6X3DT56",
    "image": "https://m.media-amazon.com/images/I/61AuLDm53JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 369.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6X3DT56?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GP7KDZRJ",
    "title": "Tramontina Jogo de Panelas Veronese em Alumínio com Revestimento Cerâmico cor Bege 5 Peças.",
    "source_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ",
    "image": "https://m.media-amazon.com/images/I/51-bj9rtB7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 373.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GP7KDZRJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CDR1SKHR",
    "title": "Jogo de Panelas Tramontina Turim em Alumínio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 10 Peças",
    "source_url": "https://www.amazon.com.br/dp/B0CDR1SKHR",
    "image": "https://m.media-amazon.com/images/I/61AjgTFEaRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CDR1SKHR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CGR56CN4",
    "title": "Cadeira de escritório presidente, cadeira de home office com apoio para os pés e encosto ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CGR56CN4",
    "image": "https://m.media-amazon.com/images/I/71+UV1-34zL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 389.46,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGR56CN4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D8QJRBV3",
    "title": "JBL, Fone de Ouvido Com Fio, Quantum 360 Wireless, Headset Gamer, Over Ear, Microfone Removível - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0D8QJRBV3",
    "image": "https://m.media-amazon.com/images/I/619cYdY-PkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 393.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8QJRBV3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DX7K4QP5",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 Lite/S10 Fe/S9 Fe/S9/S8/S7 de 11 polegadas,Teclado com LCD Display",
    "source_url": "https://www.amazon.com.br/dp/B0DX7K4QP5",
    "image": "https://m.media-amazon.com/images/I/71DMQPOFAoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 396.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX7K4QP5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CSD46QVZ",
    "title": "Cadeira De Escritório, Cadeira De Com Apoio Para Os Pés E Encosto Ajustável（Preto）",
    "source_url": "https://www.amazon.com.br/dp/B0CSD46QVZ",
    "image": "https://m.media-amazon.com/images/I/61hRkrlMDUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 398.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CSD46QVZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B08R91NTHY",
    "title": "Philco Fritadeira Air Fryer 12L Pt PFR2200P 220V",
    "source_url": "https://www.amazon.com.br/dp/B08R91NTHY",
    "image": "https://m.media-amazon.com/images/I/612gXC9waVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08R91NTHY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H4WPWNGL",
    "title": "Banheira Dobrável Com Suporte Termômetro e Redutor Assento Ergonômico 20kg Melon Maxi Baby",
    "source_url": "https://www.amazon.com.br/dp/B0H4WPWNGL",
    "image": "https://m.media-amazon.com/images/I/51u2tW4ctsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4WPWNGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F22PGY7K",
    "title": "Lancôme La Vie est Belle Vanille Nude Eau de Parfum, Perfume Feminino Floral Almiscarado com Baunilha Glaceada, Almíscar Branco e Jasmim Solar, Alta Fixação e Fragrância de Longa Duração",
    "source_url": "https://www.amazon.com.br/dp/B0F22PGY7K",
    "image": "https://m.media-amazon.com/images/I/41QatcejPPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 408.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F22PGY7K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D78RX8Y1",
    "title": "Cadeira Gamer Python Fly em tecido, respirável e ecológica, ângulo ajustável (Cinza Escuro)",
    "source_url": "https://www.amazon.com.br/dp/B0D78RX8Y1",
    "image": "https://m.media-amazon.com/images/I/71CXvormWyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 413.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D78RX8Y1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CGY57KKM",
    "title": "LEGO Set Icons 10330 McLaren MP4/4 e Ayrton Senna 693 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGY57KKM",
    "image": "https://m.media-amazon.com/images/I/81JnCaFLWkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 415.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGY57KKM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F85QZPTQ",
    "title": "Quadriciclo Elétrico Infantil com Aro de Proteção Haste Direcionavel Som e Luz (Rosa)",
    "source_url": "https://www.amazon.com.br/dp/B0F85QZPTQ",
    "image": "https://m.media-amazon.com/images/I/71GEU+vFt9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 419.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F85QZPTQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0G16PK5MT",
    "title": "Bicicleta Ergométrica Bike Spinning – Bike Treino em Casa, Academia, Exercícios Cardio e Emagrecimento, Design Confortável e Ajustável, Vertical Silenciosa +100kg",
    "source_url": "https://www.amazon.com.br/dp/B0G16PK5MT",
    "image": "https://m.media-amazon.com/images/I/61P50+VyHsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 449.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G16PK5MT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0D3WGTLVD",
    "title": "Caixa de Som Amplificada 380W Flash Lights Philco PCX4800",
    "source_url": "https://www.amazon.com.br/dp/B0D3WGTLVD",
    "image": "https://m.media-amazon.com/images/I/61il9+p7z6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 489.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D3WGTLVD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07Q6KWDZR",
    "title": "Centrífuga de Roupas Mueller Fit 15Kg de roupa molhada Branca 127V",
    "source_url": "https://www.amazon.com.br/dp/B07Q6KWDZR",
    "image": "https://m.media-amazon.com/images/I/51m-b-BBN4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 502.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q6KWDZR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0C6YD7JCN",
    "title": "Casa Telhado Vermelho com Luzes e Sotão Secreto",
    "source_url": "https://www.amazon.com.br/dp/B0C6YD7JCN",
    "image": "https://m.media-amazon.com/images/I/81W80plu+GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 514.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C6YD7JCN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CV25TPPZ",
    "title": "LEGO City Trains Bonde e Estação do Centro da Cidade 60423",
    "source_url": "https://www.amazon.com.br/dp/B0CV25TPPZ",
    "image": "https://m.media-amazon.com/images/I/81-ymFSb2FL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 530.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CV25TPPZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0C2Z63CMP",
    "title": "TakTark Babá Eletrônica, 5\" 720P HD Bebê Câmera com Tela, Sem Wifi, Panorâmica Inclinação, Áudio Bidirecional, Night Vision, Zoom Digital, Detecção De Som Vox, Ideal Para Novos Pais",
    "source_url": "https://www.amazon.com.br/dp/B0C2Z63CMP",
    "image": "https://m.media-amazon.com/images/I/612CGjAtCxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 567.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2Z63CMP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FFYJSTMK",
    "title": "Bettdow Projetor 4k [Netflix-Licensed], Projetores Portatil 12000 Lumens Full Hd 1080p Compatível Com Android 13, HDR10+ Retroprojetor WiFi 6 BT 5.2, Keystone automático, Foco Automático (preto)",
    "source_url": "https://www.amazon.com.br/dp/B0FFYJSTMK",
    "image": "https://m.media-amazon.com/images/I/61cYL9Ns2WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 573.56,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFYJSTMK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GGDKFT7V",
    "title": "Cadeira de Escritório Presidente Executiva Preta Couro PU Encosto Alto | Molas Ensacadas Sistema Relax com Trava Base Giratória Cromada 5 Rodas Suporta Longas Horas de Trabalho no Home Office",
    "source_url": "https://www.amazon.com.br/dp/B0GGDKFT7V",
    "image": "https://m.media-amazon.com/images/I/71tra31QeWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 594.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GGDKFT7V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F71279B5",
    "title": "Sunny, Gabby's Dollhouse: o Filme, Casa da Gabby, com Acessórios",
    "source_url": "https://www.amazon.com.br/dp/B0F71279B5",
    "image": "https://m.media-amazon.com/images/I/61gipkkPtGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 596.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F71279B5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DDZXZCGK",
    "title": "Cafeteira Espresso Nespresso Pixie Redesign Titânio 220V",
    "source_url": "https://www.amazon.com.br/dp/B0DDZXZCGK",
    "image": "https://m.media-amazon.com/images/I/51M3CPlQ6NL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 598.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DDZXZCGK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FHHFBDNQ",
    "title": "GameSir G7 Pro Controle Gamer Tri-Mode para Xbox, PC e Android Sem Fio 2.4G/Bluetooth e Com Fio Joystick Hall Effect + TMR 1000Hz Polling Rate Botões Macro Giroscópio Vibração 4 Motores Anti-Drift Controle Profissional - Shadow Ember",
    "source_url": "https://www.amazon.com.br/dp/B0FHHFBDNQ",
    "image": "https://m.media-amazon.com/images/I/71-wtZ5RihL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHFBDNQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H6FV1YLF",
    "title": "Basike Caixa de Som Estéreo Sem Fio, Boombox 200W, Bluetooth, Azul | Bateria 18000mAh, IPX6 À Prova de Água, Luz RGB, Equalizador, TWS, Graves Reforçados, Áudio Lossless, Festa, Viagem, Piscina",
    "source_url": "https://www.amazon.com.br/dp/B0H6FV1YLF",
    "image": "https://m.media-amazon.com/images/I/71MGK722UGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 626.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FV1YLF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FFBK9WVY",
    "title": "Micro-ondas Philco 33L Preto Acabamento Inox PMO38T 127V",
    "source_url": "https://www.amazon.com.br/dp/B0FFBK9WVY",
    "image": "https://m.media-amazon.com/images/I/61oquWwtqEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 676.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFBK9WVY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DD1KD5JP",
    "title": "Philips Walita Fritadeira Airfryer Forno 12 Litros, Preta, 110V | Visor Transparente – acompanhe o preparo dos alimentos sem abrir o aparelho (AI551/09)",
    "source_url": "https://www.amazon.com.br/dp/B0DD1KD5JP",
    "image": "https://m.media-amazon.com/images/I/61a0AdTUvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 688.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD1KD5JP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BXMV4ZXW",
    "title": "Cadeira para Auto 0-36Kg Isofix Litet All Stages Fix 2.0 Preta e Cinza - BB452",
    "source_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW",
    "image": "https://m.media-amazon.com/images/I/615AvAaOM8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 698.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BXMV4ZXW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FLS3QPZ8",
    "title": "Monitor Gamer Samsung 27\" FHD, 120 Hz, HDMI, Preto, S3",
    "source_url": "https://www.amazon.com.br/dp/B0FLS3QPZ8",
    "image": "https://m.media-amazon.com/images/I/61ByMC8ujqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 709.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FLS3QPZ8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DM6PD77X",
    "title": "Porto Brasil Aparelho de Jantar 30 peças Bio Leaf",
    "source_url": "https://www.amazon.com.br/dp/B0DM6PD77X",
    "image": "https://m.media-amazon.com/images/I/51W4+Vq4ZdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 710.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DM6PD77X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0HFW9W9YM",
    "title": "Tablet Xixaomiro S11 Pad 10.1\" Android 15, 128GB ROM + 12GB RAM, Tela 120Hz, Octa-Core, Câmera 13MP + 5MP, Bateria 8000mAh, Kit com Teclado, Mouse e Caneta Stylus para Trabalho e Estudos (Cinza claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9W9YM",
    "image": "https://m.media-amazon.com/images/I/71F9iYxWjNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9W9YM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FMYVBJBS",
    "title": "LEGO Icons Filhote de Golden Retriever 11384 (2.102 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0FMYVBJBS",
    "image": "https://m.media-amazon.com/images/I/818CfV0RrVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMYVBJBS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07NVZWGMW",
    "title": "Cadeira Gamer EC1, ThunderX3, 2019, Windows_XP, Preta",
    "source_url": "https://www.amazon.com.br/dp/B07NVZWGMW",
    "image": "https://m.media-amazon.com/images/I/51YDyVE6IoS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 764.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B07NVZWGMW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0B1N2Y1RK",
    "title": "Roteador Access Point Empresarial AP 1250 AC MAX Branco Intelbras",
    "source_url": "https://www.amazon.com.br/dp/B0B1N2Y1RK",
    "image": "https://m.media-amazon.com/images/I/31jvDkdFNIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 766.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B1N2Y1RK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DM6BKQGD",
    "title": "Impressora Multifuncional Brother A4 DCP-T230 Tanque de Tinta, Colorida, USB, Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0DM6BKQGD",
    "image": "https://m.media-amazon.com/images/I/51EQj0OUwKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 849.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DM6BKQGD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H1T7241Z",
    "title": "Barbie Conjunto de Brinquedo Casa Com Escorregador",
    "source_url": "https://www.amazon.com.br/dp/B0H1T7241Z",
    "image": "https://m.media-amazon.com/images/I/61VhNgOsi8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 899.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1T7241Z?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0HFW9ZB26",
    "title": "Xixaomiro Tablet Android 15 Pad 10.1\", 256GB ROM + 12GB RAM, Câmera 13MP + 5MP, Bateria 8000mAh – Kit Completo com Caneta, Mouse, Teclado e Capa, Adequado para Estudo, Trabalho e Lazer (Laranja claro)",
    "source_url": "https://www.amazon.com.br/dp/B0HFW9ZB26",
    "image": "https://m.media-amazon.com/images/I/712dIQhOzHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 915.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HFW9ZB26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H25ZZWD5",
    "title": "VEDO Kit Trombone Tenor Bb Bemol, com Bocal, Luvas Brancas, Kit de limpeza, Instrumentos de Sopro Profissionais, Adequado Para, Orquestras, Iniciantes, Instrumento de Trombone, Dourado",
    "source_url": "https://www.amazon.com.br/dp/B0H25ZZWD5",
    "image": "https://m.media-amazon.com/images/I/51zxrYoicpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 939.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H25ZZWD5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FH5149FL",
    "title": "Tiny2 Lite 4K Webcams, com controle de voz PTZ, rastreamento AI multimodo e foco automático, câmera web com sensor de 1/1,5\", controle por gestos,1080P 60 FPS",
    "source_url": "https://www.amazon.com.br/dp/B0FH5149FL",
    "image": "https://m.media-amazon.com/images/I/514sWP1JoHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 949.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH5149FL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B00ELBQIKA",
    "title": "Cadeira Gamer Profissional TGC12 Preta ThunderX3.",
    "source_url": "https://www.amazon.com.br/dp/B00ELBQIKA",
    "image": "https://m.media-amazon.com/images/I/71VqjPlOJAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 998.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B00ELBQIKA?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0C2S8D2P6",
    "title": "Amvox Caixa de Som Amplificada ACA 1900 New X SFM- 1900W RMS, Bluetooth, Equalizador, USB",
    "source_url": "https://www.amazon.com.br/dp/B0C2S8D2P6",
    "image": "https://m.media-amazon.com/images/I/71IoG2LTCgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 999.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C2S8D2P6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DX3SHHJY",
    "title": "LEGO Icons Transformers: Soundwave 10358 (1.505 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DX3SHHJY",
    "image": "https://m.media-amazon.com/images/I/814UAnCAqaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1000.26,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX3SHHJY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CCXLPKPJ",
    "title": "ORAL-B Escova de Dente Elétrica iO6, Conexão App, Sensor de Pressão",
    "source_url": "https://www.amazon.com.br/dp/B0CCXLPKPJ",
    "image": "https://m.media-amazon.com/images/I/61Dr7W5+eML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1009.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CCXLPKPJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07XM8KGBB",
    "title": "ThunderX3, Cadeira Ergonomic, YAMA1BK, Preto",
    "source_url": "https://www.amazon.com.br/dp/B07XM8KGBB",
    "image": "https://m.media-amazon.com/images/I/51W9FnH1Q1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1017.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XM8KGBB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CGNQ929S",
    "title": "LEGO Set Icons 10318 Concorde 2083 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGNQ929S",
    "image": "https://m.media-amazon.com/images/I/71j3+z06biL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1165.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGNQ929S?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FHQDMMP3",
    "title": "Bettdow Projetor 4k 8k 24000 Lumens Hd 1080p Compatível Completo De Android 12, Smart Projetores Retroprojetor Portatil 700 ANSI WiFi6 BT4,2, Auto Correção Trapezoidal, Foco Eletronico",
    "source_url": "https://www.amazon.com.br/dp/B0FHQDMMP3",
    "image": "https://m.media-amazon.com/images/I/61H+OxOqTbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1172.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHQDMMP3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0G1M9FQFS",
    "title": "Monitor Gamer Curvo 27 polegadas Z-Edge, FHD 1080P, 300 Hz, 280 Hz e 240 Hz, monitor pc 1500R, MPRT de 1 ms, 2 portas DP 1.4 e 2 portas HDMI 2.0, Ajuste de Inclinação, Suporte VESA, Sem Bordas",
    "source_url": "https://www.amazon.com.br/dp/B0G1M9FQFS",
    "image": "https://m.media-amazon.com/images/I/71t265i9EZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1173.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1M9FQFS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BQ7KJ9NV",
    "title": "Monitor UHD Samsung 32\", 4K, HDMI, Display Port, Freesync, Preto, Série UJ59",
    "source_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV",
    "image": "https://m.media-amazon.com/images/I/91XfEXGz9UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1184.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ7KJ9NV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GSFPNTSS",
    "title": "Carregador Portátil EV INTELAR 7KW 32A 1-Fase Tipo 2 IEC62196-2, Ajuste de Corrente 8A-32A, IP65, Cabo 5m, Tomada CEE + Adaptador Schuko, para Veículos Elétricos",
    "source_url": "https://www.amazon.com.br/dp/B0GSFPNTSS",
    "image": "https://m.media-amazon.com/images/I/71MF3jRf7kL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1234.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSFPNTSS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GYZB2MGK",
    "title": "Máquina de Remo Magnética Dobrável | Silenciosa, Remador Ergométrico 16 Níveis, Suporta até 160kg, Compacta, Para Casa",
    "source_url": "https://www.amazon.com.br/dp/B0GYZB2MGK",
    "image": "https://m.media-amazon.com/images/I/61e+H4QNRdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1399.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYZB2MGK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F1KPQXJ2",
    "title": "Bicama Infantil Madeira Maciça Com Cama Aux Solteiro Woodstore",
    "source_url": "https://www.amazon.com.br/dp/B0F1KPQXJ2",
    "image": "https://m.media-amazon.com/images/I/61fam6SfQ7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1408.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1KPQXJ2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GLRHHRQ2",
    "title": "Vinho Tinto Primitivo di Manduria 1947 750 ml, Kit 6 Unidades em Caixa de Madeira",
    "source_url": "https://www.amazon.com.br/dp/B0GLRHHRQ2",
    "image": "https://m.media-amazon.com/images/I/51axC4lmkhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1429.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLRHHRQ2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B017RBNOI4",
    "title": "Volante e Pedais Logitech G29 Driving Force com Force Feedback para PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B017RBNOI4",
    "image": "https://m.media-amazon.com/images/I/61j1ZCgzQRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B017RBNOI4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H6FJBWJ3",
    "title": "Caixa de Som, Basike, Boombox F10 Pro, Bluetooth, 500W, TWS (Preto) | RGB, Resistente à Poeira e Água IPX6, Bateria de até 8+32h, Entradas USB/AUX/TF, Grave Potente",
    "source_url": "https://www.amazon.com.br/dp/B0H6FJBWJ3",
    "image": "https://m.media-amazon.com/images/I/71aofa72diL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1611.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6FJBWJ3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FN4BK3V7",
    "title": "Tablet Lenovo Idea Tab 11\" 90Hz - Octa-Core, 4GB RAM, 128GB, Wi-Fi 5, Android 15, Caneta e Capa",
    "source_url": "https://www.amazon.com.br/dp/B0FN4BK3V7",
    "image": "https://m.media-amazon.com/images/I/61tVQTdW0nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1649.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FN4BK3V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DRW65V3V",
    "title": "LEGO Icons Nave de Transporte de Ônibus Espacial 10360 (2.417 Peças)",
    "source_url": "https://www.amazon.com.br/dp/B0DRW65V3V",
    "image": "https://m.media-amazon.com/images/I/81+y-1be+ML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1678.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DRW65V3V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GLSLLGZL",
    "title": "Smartphone Motorola Moto G77 5g - 256GB 24GB (8GB RAM + 16GB RAM Boost) camera 108MP Ultra-Pixel, tela 1.5k extreme Amoled 120hz, ultrarresistente - Marrom",
    "source_url": "https://www.amazon.com.br/dp/B0GLSLLGZL",
    "image": "https://m.media-amazon.com/images/I/61zXvb3EmiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GLSLLGZL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GXV1WLYT",
    "title": "Bicicleta Ergométrica para Casa, Resistência Suave com App Exclusivo, Silenciosa, Suporte para Tablet, Assento e Guidão Ajustáveis",
    "source_url": "https://www.amazon.com.br/dp/B0GXV1WLYT",
    "image": "https://m.media-amazon.com/images/I/61cc7Dn6dlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1759.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXV1WLYT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GNB29PB3",
    "title": "Fischer Coifa de Parede Platinium 60cm Controle por Gestos Preto 127V 40740-110704",
    "source_url": "https://www.amazon.com.br/dp/B0GNB29PB3",
    "image": "https://m.media-amazon.com/images/I/61wHOY5Em0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1768.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GNB29PB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GQC12MYK",
    "title": "Ar-Condicionado Split 9.000 BTUs AI AirVolution Frio Midea | AI , inverter",
    "source_url": "https://www.amazon.com.br/dp/B0GQC12MYK",
    "image": "https://m.media-amazon.com/images/I/314T-z8Hm7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1798.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQC12MYK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0HCRN58Z6",
    "title": "Electrolux Máquina de Lavar Electrolux Efficient 13kg Branca Compacta, Econômica e Pré-diluição (LET13) 220V",
    "source_url": "https://www.amazon.com.br/dp/B0HCRN58Z6",
    "image": "https://m.media-amazon.com/images/I/51QG54NbvPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HCRN58Z6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GFBM4YC8",
    "title": "Harman Kardon, Caixa de Som, SoundSticks 5, 2.1, Bluetooth - Branca",
    "source_url": "https://www.amazon.com.br/dp/B0GFBM4YC8",
    "image": "https://m.media-amazon.com/images/I/519Rz0P8bAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GFBM4YC8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H2NF3JXT",
    "title": "Freezer Horizontal Electrolux HB250 245 Litros Inverter 1 Porta Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H2NF3JXT",
    "image": "https://m.media-amazon.com/images/I/31oeND3LWUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1861.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2NF3JXT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GVT7QXF7",
    "title": "Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera Tripla de até 50MP OIS, Selfie de 12MP Video HDR, IP68, Tela Super AMOLED 6.7\", NFC, Recursos AI, Até 6 Atualizações de Android e Segurança (Lilás)",
    "source_url": "https://www.amazon.com.br/dp/B0GVT7QXF7",
    "image": "https://m.media-amazon.com/images/I/51VZg1VWMlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1898.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVT7QXF7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FCSP9NS4",
    "title": "Ar Condicionado 9000 Btus Split Hi Wall Inverter Midea Frio Ai Ecomaster 220v",
    "source_url": "https://www.amazon.com.br/dp/B0FCSP9NS4",
    "image": "https://m.media-amazon.com/images/I/51XHzWTiUPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1918.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCSP9NS4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DFRSDH9P",
    "title": "PHILIPS, Smart TV, 50'' 4K UHD, 50PUG7019/78, Google TV, Comando de Voz, HDR",
    "source_url": "https://www.amazon.com.br/dp/B0DFRSDH9P",
    "image": "https://m.media-amazon.com/images/I/615UmEOpLML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DFRSDH9P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FXMX7SGL",
    "title": "Logitech G, G29 SE Driving Force, Combo Volante Pedais e Câmbio, USB, PS5, PS4, PS3 e PC",
    "source_url": "https://www.amazon.com.br/dp/B0FXMX7SGL",
    "image": "https://m.media-amazon.com/images/I/71FpVBlTvyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXMX7SGL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CFRZXVVR",
    "title": "Cadeira Ergonômica XTC Mesh Preta ThunderX3",
    "source_url": "https://www.amazon.com.br/dp/B0CFRZXVVR",
    "image": "https://m.media-amazon.com/images/I/71z3VNcWNvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFRZXVVR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B07CGCJK2F",
    "title": "Ventilador de Teto Hunter Fan Palermo Níquel 5 pás com luminária 127V",
    "source_url": "https://www.amazon.com.br/dp/B07CGCJK2F",
    "image": "https://m.media-amazon.com/images/I/51dT968nvAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B07CGCJK2F?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GVW8464B",
    "title": "Samsung Combo Smart TV 43\" QLED Full HD Q5F + Soundbar HW B400F",
    "source_url": "https://www.amazon.com.br/dp/B0GVW8464B",
    "image": "https://m.media-amazon.com/images/I/513sHm9G9XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2089.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVW8464B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FPBR8V26",
    "title": "PHILIPS, Smart TV Ambilight 50\" 4K, Titan OS, 50PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBR8V26",
    "image": "https://m.media-amazon.com/images/I/61hTC1qv92L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2188.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBR8V26?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H63HYHVY",
    "title": "Freezer Horizontal Electrolux 315 Litros 1 Porta HI330T Função Turbo Freezer Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H63HYHVY",
    "image": "https://m.media-amazon.com/images/I/31oQQ9KkisL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2208.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63HYHVY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FW1DK8QL",
    "title": "Tablet Lenovo Idea Tab Plus 12.1\" 2.5K 90Hz - Octa-Core, 8GB RAM, 128GB, Wi-Fi 5, Android 15, Caneta e Case",
    "source_url": "https://www.amazon.com.br/dp/B0FW1DK8QL",
    "image": "https://m.media-amazon.com/images/I/61z4Hp0-gEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2212.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FW1DK8QL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GN9CSFZJ",
    "title": "Fischer Coifa De Parede Platinium 90cm Controle por Gestos Preto 127V 39780-110700",
    "source_url": "https://www.amazon.com.br/dp/B0GN9CSFZJ",
    "image": "https://m.media-amazon.com/images/I/61vnHAm7L-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2268.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GN9CSFZJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B08JH3VW11",
    "title": "GUINCHO HIDRÁULICO DE MOBILIDADE D5000-180KG",
    "source_url": "https://www.amazon.com.br/dp/B08JH3VW11",
    "image": "https://m.media-amazon.com/images/I/51BqlNKkxZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2297.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B08JH3VW11?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FPBQQ4TN",
    "title": "PHILIPS, Smart TV Ambilight 55\" 4K, Titan OS, 55PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBQQ4TN",
    "image": "https://m.media-amazon.com/images/I/61HN+7ldJnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2423.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBQQ4TN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H2HMQHNP",
    "title": "VEDO Acordeon Profissional 34 Teclas, com 60 Teclas Baixo, 5 Teclas Variáveis, Terceira voz, Acordeão Avançado, Adequado Para Adultos Amantes da Música, Orquestra, Maple e Molas Alemãs, Vermelho",
    "source_url": "https://www.amazon.com.br/dp/B0H2HMQHNP",
    "image": "https://m.media-amazon.com/images/I/71mroW1lb6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2469.11,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2HMQHNP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B09ZHCLVXF",
    "title": "Philips Walita Cafeteira Espresso Superautomática Série 1200, 220V | Café Fresco na Hora – bebidas de espresso preparadas com praticidade no preparo (EP1220/12)",
    "source_url": "https://www.amazon.com.br/dp/B09ZHCLVXF",
    "image": "https://m.media-amazon.com/images/I/71FXFo4kYiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09ZHCLVXF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0CGY1FSH8",
    "title": "LEGO Set Icons 10326 Museu de História Natural 4014 peças",
    "source_url": "https://www.amazon.com.br/dp/B0CGY1FSH8",
    "image": "https://m.media-amazon.com/images/I/81AwQIKm2wL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2511.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGY1FSH8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DK63HPV6",
    "title": "Cama Queen Luuna Bambu Natural, Design Sustentável boho, Fácil Montagem, 10 Anos Gar.",
    "source_url": "https://www.amazon.com.br/dp/B0DK63HPV6",
    "image": "https://m.media-amazon.com/images/I/410f2bTREYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DK63HPV6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H63M1Y6W",
    "title": "Freezer Electrolux Horizontal 513L Inverter (HI550T) Branco Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0H63M1Y6W",
    "image": "https://m.media-amazon.com/images/I/31SjYpp1vqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3098.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H63M1Y6W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FPBPDWZQ",
    "title": "PHILIPS, Smart TV Ambilight 65\" 4K, Titan OS, 65PUG8100/78, Comando de Voz, HDR10+/Dolby Atmos, VRR/ALLM, Bluetooth",
    "source_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ",
    "image": "https://m.media-amazon.com/images/I/61-b5p1Qg-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3198.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPBPDWZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0G6Z6PTJG",
    "title": "eufy C20 Omni Robô Aspirador e Passa Pano,Autolimpante,Navegação Laser,220V | Esvaziamento, Limpeza e Secagem Automática,Estação Completa, Mapeamento Laser Multinível, Corpo Ultrafino 8,5cm, WiFi App Voz",
    "source_url": "https://www.amazon.com.br/dp/B0G6Z6PTJG",
    "image": "https://m.media-amazon.com/images/I/71L9NltLIxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3274.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G6Z6PTJG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F8LJSC9B",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Azul Marinho",
    "source_url": "https://www.amazon.com.br/dp/B0F8LJSC9B",
    "image": "https://m.media-amazon.com/images/I/61G1x4+IXTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3298.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8LJSC9B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0B625GC45",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PW Branca 11/7kg - 220V",
    "source_url": "https://www.amazon.com.br/dp/B0B625GC45",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B625GC45?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BZ15NC13",
    "title": "Samsung Lava e Seca 11kg Branco WD11M4473PW - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ15NC13",
    "image": "https://m.media-amazon.com/images/I/41TGRdhXAIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ15NC13?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GMY41LM8",
    "title": "Smartphone Motorola Edge 70 5G Crystals by Swarovski - 512GB 24GB (12GB RAM + 12GB RAM Boost), Ultrafino, 3 cameras 50MP e tela extreme Amoled 120hz - Cloud Dancer",
    "source_url": "https://www.amazon.com.br/dp/B0GMY41LM8",
    "image": "https://m.media-amazon.com/images/I/61LyzNkloEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMY41LM8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BZ129NTZ",
    "title": "Samsung Lava e Seca WD11M com Digital Inverter WD11M4473PX Inox Look 11/7kg - 127V",
    "source_url": "https://www.amazon.com.br/dp/B0BZ129NTZ",
    "image": "https://m.media-amazon.com/images/I/516qpWn6k2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BZ129NTZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FVPLDKKG",
    "title": "Electrolux Geladeira Electrolux Frost Free Inverter 400L Efficient AutoSense e Rapid Freeze Inverse Black Inox Look (IB6B) Bivolt",
    "source_url": "https://www.amazon.com.br/dp/B0FVPLDKKG",
    "image": "https://m.media-amazon.com/images/I/4183aoBiILL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPLDKKG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0H3Q1RHD7",
    "title": "Smart TV TCL 65 Polegadas QLED 4K T6C WiFi Bluetooth Google TV Tela HVA e HDR10+ 65T6C",
    "source_url": "https://www.amazon.com.br/dp/B0H3Q1RHD7",
    "image": "https://m.media-amazon.com/images/I/81PghVbGE6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H3Q1RHD7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BLWCTK3Y",
    "title": "Dellamed - Scooter Elétrica LB Dobrável até 136 Kg Dellamed",
    "source_url": "https://www.amazon.com.br/dp/B0BLWCTK3Y",
    "image": "https://m.media-amazon.com/images/I/51biCasBXvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3849.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BLWCTK3Y?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F6CX2QK4",
    "title": "Notebook HP 256R G9 Intel Core i5 13º Geração. Memoria RAM 16GB. SSD 256GB. Tela de 15,6\" LCD. Windows 11 - Home SL - Cinza Escuro. Bivolt. (BQ9L2AT#AK4)",
    "source_url": "https://www.amazon.com.br/dp/B0F6CX2QK4",
    "image": "https://m.media-amazon.com/images/I/71rq8UFkcvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3967.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6CX2QK4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0DSXX6XB3",
    "title": "Celular Samsung Galaxy S25 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.2\", Prata",
    "source_url": "https://www.amazon.com.br/dp/B0DSXX6XB3",
    "image": "https://m.media-amazon.com/images/I/61ypIBTp6vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSXX6XB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0BFG1DGDR",
    "title": "Lava & Seca 11 Kg Samsung SmartThings Inox Look com 12 Programas de Lavagem - 110V",
    "source_url": "https://www.amazon.com.br/dp/B0BFG1DGDR",
    "image": "https://m.media-amazon.com/images/I/41hqpPsERSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4464.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFG1DGDR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "source_url": "https://www.amazon.com.br/dp/B0F5X4NPK2",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GKQTJD9P",
    "title": "Celular Samsung Galaxy S26 5G, 256GB, 12GB RAM, Câmera Tripla de 50+12+10, Tela Grande de 6.3\" - Violeta",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTJD9P",
    "image": "https://m.media-amazon.com/images/I/61kX9KSBv1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4775.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTJD9P?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0FD58XDQD",
    "title": "Ar-Condicionado Split HW Inverter Daikin Full 24.000 BTUs R-32 Quente/Frio 220V",
    "source_url": "https://www.amazon.com.br/dp/B0FD58XDQD",
    "image": "https://m.media-amazon.com/images/I/51nxeIhHMCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6298.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FD58XDQD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GKQTTCMM",
    "title": "Celular Samsung Galaxy S26 Ultra 5G, 256GB, 12GB RAM, Câmera Quádrupla, Tela Grande de 6.9\" - Preto",
    "source_url": "https://www.amazon.com.br/dp/B0GKQTTCMM",
    "image": "https://m.media-amazon.com/images/I/61tUK0-AiTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7690.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQTTCMM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GYQ6JLLN",
    "title": "Smart TV TCL 85 Polegadas QLED Mini LED 4K A400M WiFi Bluetooth Google TV HDR10+ 144 Hz VRR 85A400M",
    "source_url": "https://www.amazon.com.br/dp/B0GYQ6JLLN",
    "image": "https://m.media-amazon.com/images/I/81thYHM7SlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8599.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQ6JLLN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  },
  {
    "asin": "B0GPQTM751",
    "title": "Ar Condicionado Split Teto Inverter Midea Connect 60.000 Btus Frio 220v R-32",
    "source_url": "https://www.amazon.com.br/dp/B0GPQTM751",
    "image": "https://m.media-amazon.com/images/I/51MYHzxciAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8995.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPQTM751?tag=mdm0a40-20",
    "last_checked_at": "2026-09-22T18:43:17.000Z"
  }
];
