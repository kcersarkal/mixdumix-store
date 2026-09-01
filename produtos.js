const PRODUCTS = [
  {
    "asin": "B0G94HCD1K",
    "title": "Chocolate Twix Original Minis 180g",
    "image": "https://m.media-amazon.com/images/I/51S4Zme1pRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 14.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G94HCD1K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08H3LW3NJ",
    "title": "Granado Refil Sabonete Terrapeutics, Lavanda, 300ml",
    "image": "https://m.media-amazon.com/images/I/51R4Ro0-X3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 16.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B08H3LW3NJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07TKC1MGB",
    "title": "Electrolux Kit com 2 Limpa Máquina de Lavar Roupas | Remove Sujeiras e Resíduos",
    "image": "https://m.media-amazon.com/images/I/51Xr-pAwGwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B07TKC1MGB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DHWB57TW",
    "title": "Colgate Total Whitening Macia Escova de Dente, 2 Unidades",
    "image": "https://m.media-amazon.com/images/I/71VCysE5neL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHWB57TW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FPN7WWF8",
    "title": "Colgate Total Original Mint Creme Dental com Flúor, 2x180g",
    "image": "https://m.media-amazon.com/images/I/61TQpQJzSuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.25,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPN7WWF8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GPN6CNRT",
    "title": "Percarbonato de Sódio 100% Puro – Removedor de Manchas e Multiuso de Limpeza (Embalagem pode sofrer variações)",
    "image": "https://m.media-amazon.com/images/I/61YPLcEYbhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.69,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPN6CNRT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DMFR1P3K",
    "title": "Algodão Quadrado Amamente® Baby 100 UN",
    "image": "https://m.media-amazon.com/images/I/71iGihWsyNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 25.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DMFR1P3K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0BHJK4SHJ",
    "title": "Colgate Slim Soft Black Escova de Dente Macia, 6 Unidades | Com Cerdas Antibacterianas com Infusão de Carvão, As Cerdas São 17x Mais Finas (em Comparação a Escovas com Cerdas Planas)",
    "image": "https://m.media-amazon.com/images/I/71r+zL8cUHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 30.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BHJK4SHJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B00N6AKNQW",
    "title": "Kit Sabonete, PHEBO, Amarelo, 720g",
    "image": "https://m.media-amazon.com/images/I/51rOgkMtK5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 31.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B00N6AKNQW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01JSX09A0",
    "title": "Avène Cicalfate+ Creme Reparador Facial, Nutre, Protege e Repara Pele Irritada, Água Termal Avène, Sulfato de Cobre e Zinco, Purifica, Acalma e Acelera a Reparação da Pele, Resultados Visíveis em 48 Horas, 20ml",
    "image": "https://m.media-amazon.com/images/I/61R3XjcyFYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 33.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B01JSX09A0?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FX44RT9W",
    "title": "TOYADENT Escova de Dentes Adulto Ultra Macia 6 Unidades | Cerdas Finas e Densas, Cabos Coloridos, Com Tampa Protetora, Higiene Bucal Diária, Para Família e Presente",
    "image": "https://m.media-amazon.com/images/I/71Qu2IvujqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FX44RT9W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FMFXH7RT",
    "title": "Faber-Castell Lápis De Cor Supersoft com 24 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZzxtsCXmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFXH7RT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B096KDKNNQ",
    "title": "Bepantol Baby Lenço Umedecido Hipoalergênico, 192 Unidades | 192 unidades, Com Pró-Vitamina B5, Hipoalergênico, Dermatologicamente testado, Sem fragrâncias, corantes e conservantes",
    "image": "https://m.media-amazon.com/images/I/713euw7uVZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B096KDKNNQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CJ9RHCTM",
    "title": "Colgate Total Whitening & Fresh Mint Creme Dental Clareador, 6x90g",
    "image": "https://m.media-amazon.com/images/I/71Ir2xsF1HL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJ9RHCTM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07MQG6SWC",
    "title": "Bepantol Baby Pomada Assadura Bebe, Hipoalergênica, 100g | 100g, Com Pró-Vitamina B5, Hipoalergênico, Dermatologicamente testado, Barreira protetora, Sem fragrâncias e corantes",
    "image": "https://m.media-amazon.com/images/I/61m5QAg1xHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 43.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B07MQG6SWC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0D9ZY6B9G",
    "title": "Vitamina D3 + K2 120 Cápsulas 4 Meses de Uso Longa Duração, 2000UI D3 149mcg Vitamina K2 MK-7, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61dLscjjMFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9ZY6B9G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXGTZF1M",
    "title": "Kit 5 Potes de Vidro Herméticos 640ml com 4 Travas Ideal para Marmitas e Conservação de Alimentos, Vedação Total, Refratário para Forno e Freezer (5)",
    "image": "https://m.media-amazon.com/images/I/61OM4p2+JLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 50.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXGTZF1M?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FWLSBG6K",
    "title": "Contém1g Lápis para Olhos - Supercobre 1,2g",
    "image": "https://m.media-amazon.com/images/I/6167jHRfQSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 53.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWLSBG6K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07YNQHGWP",
    "title": "Vinho Verde Bico Amarelo Esporão 750ml",
    "image": "https://m.media-amazon.com/images/I/51jlBOHKuPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 57.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B07YNQHGWP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F256FGRK",
    "title": "Electrolux Filtro/Refil Original de Água Acqua Pure para Purificador Electrolux PC01B, PC01X, PE15B, PE15X e PE15P FILTRO ACQUA PURE PC01/PE15/PN10",
    "image": "https://m.media-amazon.com/images/I/411+HAoFfIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F256FGRK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DTJKLBBQ",
    "title": "Mouse Sem Fio Logitech M240 com Conexão Bluetooth, Clique Silencioso, Design Ambidestro Compacto, Bateria de 18 Meses, Compatível com Windows, macOS, ChromeOS - Preto",
    "image": "https://m.media-amazon.com/images/I/51QjFpLqLwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 60.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DTJKLBBQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09VTKHQKP",
    "title": "Copo Térmico Byron SNAPSEAL™ Preto Contigo | 591ml",
    "image": "https://m.media-amazon.com/images/I/41XUqZXKBTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 60.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B09VTKHQKP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0D2LWZ6VL",
    "title": "Nutrata Caramel Protein Display (12 unid. 45g), Caramel",
    "image": "https://m.media-amazon.com/images/I/61Vfrl9f6cL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D2LWZ6VL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYPQ75SG",
    "title": "Papel Higiênico Neve Toque de Seda Folha Dupla 40 rolos 30M",
    "image": "https://m.media-amazon.com/images/I/61yvJ8w0rHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 68.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYPQ75SG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FDB9Z96L",
    "title": "Fone de Ouvido Bluetooth 5.4, IPX5 à Prova D'Água, 45h de Bateria, Com Microfone Embutido. Design Esportivo Ergonômico Ideal Para Esportes Corridas Atividades Físicas Videogame IPhone Android Premium",
    "image": "https://m.media-amazon.com/images/I/619duhcCzQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FDB9Z96L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0BSHFB4GC",
    "title": "Kit 50 Cabides de Veludo 360° Antideslizante Kit Cabide para Roupas Camiseta Calça",
    "image": "https://m.media-amazon.com/images/I/61hjRGrHTtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 69.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BSHFB4GC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYQB11VS",
    "title": "Laruno Escorredor de Louça 2 Andares Preto em Aço Inox com Drenagem",
    "image": "https://m.media-amazon.com/images/I/71C-LghQoiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 74.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQB11VS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DHVLRFGD",
    "title": "Basike Power Bank, Carregador Portátil Universal 10000mAh, Rápido 22,5W | 2 Cabos Integrados (USB-C e Lightning), USB-A (até 22,5W, QC) + USB-C (até 20W, PD), Display Digital LED de Bateria (Preto)",
    "image": "https://m.media-amazon.com/images/I/61ssLnRoQgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DHVLRFGD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FTT42SDP",
    "title": "Câmera de Segurança Wi-Fi Externa IP A8 – Prova d’Água com Visão Noturna Infravermelha e Monitoramento em Tempo Real Premium (1)",
    "image": "https://m.media-amazon.com/images/I/51uM1y5jgYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 84.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTT42SDP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0B2F6LD91",
    "title": "Kit Com 4 Toalhas Banhão Gigante Alta Absorção Sublime 70x150cm - KIT 1 (Gris/Rosa/Terracota/Azul)",
    "image": "https://m.media-amazon.com/images/I/81Arq7i+7ML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 98.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B2F6LD91?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09J1LCZL2",
    "title": "Blender Zoop Contrast Cadence com 2 Jarras - 220V",
    "image": "https://m.media-amazon.com/images/I/51RNm3SWxKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B09J1LCZL2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H5TH4QHW",
    "title": "Jogo com 6 Taças para Vinho Tinto em Cristal Ecológico Premium | Bojo Amplo para Melhor Degustação | Alta Transparência e Brilho | Ideal para Jantares e Presentes",
    "image": "https://m.media-amazon.com/images/I/71sBZ4yB0XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5TH4QHW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07Y2KR7GW",
    "title": "Macacão de dormir para bebês Pacote com 2 pares neutros de algodão com pés para dormir e brincar Simple Joys by Carter'sUnisex Bebê",
    "image": "https://m.media-amazon.com/images/I/71u9NZBemIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 107.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Y2KR7GW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GMYQN74L",
    "title": "Furadeira e Parafusadeira de Impacto Sem Fio com LED 2 Baterias Recarregáveis Bi-volt e Acessórios Maleta Completa para Uso Profissional e Doméstico Linha Premium",
    "image": "https://m.media-amazon.com/images/I/61FT94WfQeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 107.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMYQN74L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXTY8SMX",
    "title": "Romantic Crown Mochila Feminino Masculino Viagem Expansível para Notebook",
    "image": "https://m.media-amazon.com/images/I/61ov9flqL+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 108.28,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXTY8SMX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FBHL5XCZ",
    "title": "Mala de Bordo ABS 4 Rodas Action Fortt Vermelha - MAB02-VR",
    "image": "https://m.media-amazon.com/images/I/41m2V9U1esL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 109.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBHL5XCZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H9VMRMJK",
    "title": "Lixeira Antiodor Premium para Fraldas com Sistema de Vedação de Odores, Tampa Inteligente, Capacidade 12 Litros, Fácil de Limpar, Design Moderno para Quarto do Bebê, Banheiro e Lavanderia",
    "image": "https://m.media-amazon.com/images/I/615V+zhZN0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 109.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H9VMRMJK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01M35CVS0",
    "title": "Simple Joys by Carter's Pacote com 5 bodies unissex de manga comprida, Cinza/branco, 3-6 Meses",
    "image": "https://m.media-amazon.com/images/I/81Zg0xsZgDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 112.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B01M35CVS0?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F2N7L7HQ",
    "title": "Romantic Crown Mochila Masculina de Viagem para Notebook",
    "image": "https://m.media-amazon.com/images/I/613o1RrqyAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 113.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2N7L7HQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DP1VVFLP",
    "title": "Basike Power Bank, Carregador Portátil Universal 20000mAh, Rápido 22,5W | 2 Cabos Integrados (USB-C, Lightning) Carregamento Rápido, USB-A(até 22.5W)+USB-C(até PD20W), Led Indicador de Bateria, Preto",
    "image": "https://m.media-amazon.com/images/I/71StMhT8OtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DP1VVFLP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08XWHZHPF",
    "title": "Macacão de dormir para bebês 2-way Zip Thermal Footed Sleep and Play, Pack of 2 Simple Joys by Carter'sMeninas",
    "image": "https://m.media-amazon.com/images/I/81mPj+DG5xL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B08XWHZHPF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01MDUH9PG",
    "title": "Calças Pacote com 4 calças neutras Simple Joys by Carter'sUnisex Bebê",
    "image": "https://m.media-amazon.com/images/I/81vzreyuq+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 118.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B01MDUH9PG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08G8TGLV2",
    "title": "Body Pacote com 8 bodies de manga curta Simple Joys by Carter'sUnisex Bebê",
    "image": "https://m.media-amazon.com/images/I/81yDahe4h6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 122.34,
    "affiliate_url": "https://www.amazon.com.br/dp/B08G8TGLV2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01M35CWCO",
    "title": "Body Pacote com 5 bodies de manga comprida Simple Joys by Carter'sMeninas",
    "image": "https://m.media-amazon.com/images/I/91Ua53sAhnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 122.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B01M35CWCO?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CM7X424T",
    "title": "Capa de tecido para Kindle Paperwhite e Kindle Colorsoft, leve, dobrável e resistente a água – Cor Preta",
    "image": "https://m.media-amazon.com/images/I/91KwBwyXicL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CM7X424T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01M5JGQI2",
    "title": "Body 7-pack Long Sleeve Bodysuit Simple Joys by Carter'sUnisex Bebê",
    "image": "https://m.media-amazon.com/images/I/81xzCi4U8hL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B01M5JGQI2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H52LF5JF",
    "title": "Kit Lavagem Completa Shampoo Cera Tok Final Intense Sintra Fast Pneu Pretinho Acessórios",
    "image": "https://m.media-amazon.com/images/I/71pzyI++-dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H52LF5JF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H2G38ZNW",
    "title": "Kit 3 Cremes Pomadas de Assaduras Vit B5 com 100g cada, Total 300g - Bepantol Baby",
    "image": "https://m.media-amazon.com/images/I/61HlHA-XVpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 132.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2G38ZNW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GFM3QRB5",
    "title": "Brastoy Blocos de Montar Magnéticos Infantil Construção Brinquedo (120 Peças (Tamanho Médio))",
    "image": "https://m.media-amazon.com/images/I/61rc2l3I8WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 134.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GFM3QRB5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01M5JGOFT",
    "title": "Simple Joys by Carter's Pacote com 6 bodies de manga curta para bebês meninas, Rosa/amarelo, 3-6 Meses",
    "image": "https://m.media-amazon.com/images/I/81V8zg8arJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 135.21,
    "affiliate_url": "https://www.amazon.com.br/dp/B01M5JGOFT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DBBFFVG2",
    "title": "Celular Positivo P26 4G Tela 1,8\", Câmera traseira, 48MB RAM 128MB, Bluetooth, Modem Tethering - Preto",
    "image": "https://m.media-amazon.com/images/I/51jrwrdizsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 137.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DBBFFVG2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GKQ266RY",
    "title": "Sebastian Professional, Dark Oil, Máscara Capilar nutrição profunda sem pesar, para todos os tipos de cabelo, 145 ml",
    "image": "https://m.media-amazon.com/images/I/41oCoODFSZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 139.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKQ266RY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09GSQMJ5T",
    "title": "L'Oréal Professionnel Pro Longer, Máscara de Tratamento Capilar para Cabelos Finos e Afinados, Reduz Quebra e Pontas Duplas, Proporciona Brilho, Suavidade e Densidade aos Fios, 250g",
    "image": "https://m.media-amazon.com/images/I/51Jjvh-r-vL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 144.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GSQMJ5T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DZNXQ45X",
    "title": "Basike Carregador Sem Fio 3 em 1 Magnético Dobrável Portátil Luz Noturna | Estação de Carregamento 2025, Compatível com MagSafe, iPhone 16/15/14/13/12, Apple Watch e AirPod (Preto)",
    "image": "https://m.media-amazon.com/images/I/51Mqkz+LYOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 147.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZNXQ45X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FWBW1H8B",
    "title": "Smartwatch PEJE ZW02 com Chamadas, Pulseira Extra e 123+ Modos Esportivos | Tela HD de 1,28”, IP68, Bateria de 3–7 dias, Notificações, Música, Clima, Alarmes e Conexão iOS/Android ( Dourado )",
    "image": "https://m.media-amazon.com/images/I/61El9L8lVpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 151.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FWBW1H8B?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DMVBN52L",
    "title": "Enssu Aparador de Pelos Íntimos Masculino,Máquina de Barbear | Barbeador Elétrico com Lâmina Segura, IPX7 À Prova d’Água, Perfeito Para Barba, Axilas, Costas, Pernas e Áreas Sensíveis",
    "image": "https://m.media-amazon.com/images/I/71XuOhcqrrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 152.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DMVBN52L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CZPSD2SC",
    "title": "Stanley Garrafa Térmica Aerolight Transit Cream, 591ml",
    "image": "https://m.media-amazon.com/images/I/51QhwYZEDGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 154.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZPSD2SC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0BTYCRJSS",
    "title": "soundcore P20i da Anker, Fone de Ouvido Bluetooth 5.3 Sem Fio, 2 Mics IA | Bass UP, Graves Potentes, Drivers de 10mm, 30H, Resistência à Água TWS, Personalização de Som via App para Academia, IPX5",
    "image": "https://m.media-amazon.com/images/I/61ljZu9+GXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 155.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTYCRJSS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0C59MB8V7",
    "title": "MONDIAL Passadeira a Vapor Portátil Fast Steam, Branco/Azul, 1270W, 110V - VP-09",
    "image": "https://m.media-amazon.com/images/I/71sCMBrFjxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 157.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C59MB8V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07HR1MZQP",
    "title": "Umidificador de Ar Ultrassônico 3,4 Litros Bivolt Fisher Price - HC115",
    "image": "https://m.media-amazon.com/images/I/41Gjg7-IkUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 160.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HR1MZQP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08YRXP1CM",
    "title": "Growler 1,9L Preto",
    "image": "https://m.media-amazon.com/images/I/71aFn0xnL-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B08YRXP1CM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07Y5PC854",
    "title": "Azeite Andorinha Extra Virgem 3L",
    "image": "https://m.media-amazon.com/images/I/71c2QPLYpsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 161.39,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Y5PC854?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B01MRE7ACZ",
    "title": "Simple Joys by Carter's Conjunto de 6 peças para bebês meninos (manga curta e comprida) e calça",
    "image": "https://m.media-amazon.com/images/I/81D7d6cfKwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 162.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B01MRE7ACZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "6584004406",
    "title": "Vade Mecum Saraiva Tradicional - 41ª Edição 2026",
    "image": "https://m.media-amazon.com/images/I/81HmyZ8mCzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6584004406?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CX22JSR3",
    "title": "Cabo Apple USB-C para Lightning (1 m)",
    "image": "https://m.media-amazon.com/images/I/61PduSmu8GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 168.15,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CX22JSR3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FHHP1WJW",
    "title": "Basike Carregador Portátil, Power Bank 20000mAh com Cabos Integrados(Rosa) | Carregamento Rápido 22.5W(MAX), Compacto, Led Indicador de Bateria para iPhone/Samsung/Huawei/Xiaomi",
    "image": "https://m.media-amazon.com/images/I/51cw9c3wJ9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 169.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHP1WJW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H2JS43Y8",
    "title": "Mala de Bordo Premium 10kg ANAC com Rodas Duplas 360° e Cadeado TSA AntiFurto Rígida Leve Resistente Elegante para Viagens Curtas Avião e Bagagem de Mão Executiva (Grafite)",
    "image": "https://m.media-amazon.com/images/I/61uFseZWaHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 170.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2JS43Y8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CM7ZXQWC",
    "title": "Capa Premium com toque acetinado para Kindle Paperwhite e Kindle Colorsoft, leve e dobrável – Cor Preta",
    "image": "https://m.media-amazon.com/images/I/71ueWn-ouUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CM7ZXQWC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FFTCF8LL",
    "title": "Basike Power Bank 20000mAh 45W, Cabo USB-C Integrado, Compacto, Cinza",
    "image": "https://m.media-amazon.com/images/I/611A4LgaPcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTCF8LL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYQ9DGJC",
    "title": "Laruno Mesa Dobrável Portátil Branca 1,80m Tipo Maleta até 150kg",
    "image": "https://m.media-amazon.com/images/I/61dNWYQHSFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQ9DGJC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F24XV5R2",
    "title": "WHEY PROTEIN 3W - BOLD WHEY (900g) - Sabor: Chocolate ao Leite",
    "image": "https://m.media-amazon.com/images/I/61BBsDNtXUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 183.34,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F24XV5R2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0BTHQ4GZG",
    "title": "Stanley Copo Quencher 2.0 | 887 ml",
    "image": "https://m.media-amazon.com/images/I/41F6k4jFOTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTHQ4GZG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FMNMJZ8X",
    "title": "Cooktop de Indução Portátil, 220V, 2200W, 1 Boca, 9 Níveis de Potência, Temporizador 99 Minutos, Trava de Segurança, Preto",
    "image": "https://m.media-amazon.com/images/I/71Um1ZzksKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMNMJZ8X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0771V8SD5",
    "title": "Ventilador Mallory Coluna Delfos TS+ Preto Grafite 40 cm 220V",
    "image": "https://m.media-amazon.com/images/I/812W-4S9-VL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0771V8SD5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F6YJVZ5L",
    "title": "Mini Projetor Portátil 5G Wi-Fi 6 Bluetooth 5.0 Android 11 4K 1080P Full HD 8000 Lumens LED Auto Correção Trapezoidal Horizontal Rotação 180° Ideal para Projeções Cinemáticas",
    "image": "https://m.media-amazon.com/images/I/519TeoR49WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6YJVZ5L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0BTHPZ9J4",
    "title": "Stanley - Quencher H2.0 FlowState 1,18L - Copo de aço inoxidável com isolamento a vácuo, tampa e canudo, para água, chá gelado, café, smoothies e muito mais, Rose Quartz",
    "image": "https://m.media-amazon.com/images/I/61zHv-6qWXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 194.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BTHPZ9J4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CRTYZG5C",
    "title": "soundcore P30i da Anker, ANC Fone de Ouvido Bluetooth 5.4 Sem Fio, TWS",
    "image": "https://m.media-amazon.com/images/I/51o-AcAQWgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 196.6,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRTYZG5C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GRD88SMB",
    "title": "Estante Livreiro 5 Prateleiras Estilo Industrial Organizador Multiuso Mega Chicó 178x63x30cm (Off White/Castanho)",
    "image": "https://m.media-amazon.com/images/I/61a+ZMUBeEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 202.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GRD88SMB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07VC255D9",
    "title": "Mor - Cadeira Reclinável Alumínio 4 Posições Boreal Azul Marinho",
    "image": "https://m.media-amazon.com/images/I/51+0Ylv4fhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 204.57,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VC255D9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FDQWFL5X",
    "title": "Babá Eletrônica Câmera para Bebês com Tela de 3.2\" Visão Noturna 10M Infravermelha Monitoramento Temperatura, Áudio Bidirecional, Detecção de Som VOX, Modo Soneca Contem Visão Noturna Canção de Ninar",
    "image": "https://m.media-amazon.com/images/I/61x3NKsvm7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FDQWFL5X?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FK59YZXT",
    "title": "Projetor Portatil Mini 5g Wifi 6 Bluetooth 5.0 Android 11 Projetor 4K 1080 Full HD Suporte 12000 Lumens Para Celular LED Auto Correção Horizontal 180° Linha Premium",
    "image": "https://m.media-amazon.com/images/I/51k+vJCruuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 227.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FK59YZXT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0G61PNQT4",
    "title": "WAP Aspirador Vertical 3 Em 1 Power Speed Max 1600W de Potência Oscilação 360° Bicos Canto e Escova 127V",
    "image": "https://m.media-amazon.com/images/I/51wKSsW1rsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G61PNQT4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07CDB81N1",
    "title": "Ventilador de Coluna Mallory Air Timer TS+ Com Controle Remoto 126W, Silencioso, Com Hélice de 6 pás, Auto desligamento programável de até 7 horas - PR-GR - 220V",
    "image": "https://m.media-amazon.com/images/I/51ogzBr-jcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07CDB81N1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FY1MP9J1",
    "title": "Carrinho Dobrável de Carga 150kg para Camping, Praia e Compras – Estrutura em Aço Inoxidável, Tecido Impermeável, Alça Ajustável e Rodas 360° – Compacto, Portátil e Fácil de Guardar",
    "image": "https://m.media-amazon.com/images/I/61YuconU73L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 233.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY1MP9J1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0779KQGFG",
    "title": "Chuveiro Elétrico Advanced Turbo Eletrônico 7500w 220v Branco",
    "image": "https://m.media-amazon.com/images/I/316D-zahyDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 239.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0779KQGFG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CW976R89",
    "title": "Fechadura Digital de Sobrepor, Abertura por senha ou tag, Pop, Prata, DS1100V, Elsys",
    "image": "https://m.media-amazon.com/images/I/519JmdzFSBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 241.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CW976R89?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07WMJZXRZ",
    "title": "Batedeira Planetária, Mondial, Preto, 700W, 220V - BP-03-B",
    "image": "https://m.media-amazon.com/images/I/511jk8D3duS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 261.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B07WMJZXRZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07JGBY3P9",
    "title": "Mor - Cadeira Espreguiçadeira em Alumínio Azul Marinho",
    "image": "https://m.media-amazon.com/images/I/519ks8Dff4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 264.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B07JGBY3P9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DVK166SV",
    "title": "Amazon Fire TV Stick HD (modelo mais recente), Controle Remoto por Voz com Alexa, alimentado pela TV, com configuração simples e Acesso Antecipado à Alexa+",
    "image": "https://m.media-amazon.com/images/I/614YeT6MRAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 269.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DVK166SV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08MV1F8VV",
    "title": "Fechadura Digital de Sobrepor Intelbras FD 1000",
    "image": "https://m.media-amazon.com/images/I/416vCY53LjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08MV1F8VV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FZ98XMN9",
    "title": "Cama de Casal 138x188cm, Estrutura Metálica Preta | Estrutura metálica resistente com ripas de suporte, boa estabilidade e espaço livre sob a cama.",
    "image": "https://m.media-amazon.com/images/I/51+tBAUfQXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FZ98XMN9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GS6YS3W8",
    "title": "Buddemeyer Jogo de Toalhas Dual Air Banho Rosa 5 peças",
    "image": "https://m.media-amazon.com/images/I/71di4DRTyFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 288.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GS6YS3W8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0C3HCD34R",
    "title": "soundcore Q20i da Anker, Fone de Ouvido Bluetooth ANC Híbrido Ativo, 60H | Áudio Hi-Res, Graves Potentes, Cancelamento de Ruído Headphone Bluetooth Over Ear, App Personalização, Modo Transparência",
    "image": "https://m.media-amazon.com/images/I/6196rZ67rvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 298.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C3HCD34R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DFRBWX29",
    "title": "Philips Colgate Escova de Dente Elétrica Sonic Pro 35, 2 Unidades | Remove 500% Mais Placa (Vs. Escova de Dentes Manual), Sensor de Pressão, Temporizador de 2 Minutos, Recarregável",
    "image": "https://m.media-amazon.com/images/I/61CxxqgJscL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 301.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DFRBWX29?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYQQXNK7",
    "title": "Laruno Cadeira de Escritório Almirante P600 Mesh Reclinável Preta 150Kg",
    "image": "https://m.media-amazon.com/images/I/71I2MK575nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 309.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYQQXNK7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DTB56DYN",
    "title": "Kit Wella Professionals Fusion Shampoo Condicionador e Válvula (4 produtos)",
    "image": "https://m.media-amazon.com/images/I/51-yXs-1AlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 314.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DTB56DYN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0C5YCW65C",
    "title": "Batedeira Planetária Oster Black III, OBAT640, 110v",
    "image": "https://m.media-amazon.com/images/I/51Ipo8gLZxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 325.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C5YCW65C?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08H786SLV",
    "title": "Controle Sem Fio para Xbox - Branco Robo (Robot white) [xbox_series_x,xbox_series_s,windows,xbox_one]",
    "image": "https://m.media-amazon.com/images/I/61MdJDbKYjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08H786SLV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FTMZCLRD",
    "title": "WAP Fritadeira Air Fryer MEGA FAMILY 9 Litros com Cesto Amplo e Circulação de Ar 360°, Timer Sonoro 1900W 127V",
    "image": "https://m.media-amazon.com/images/I/51oAqd0-u5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 389.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTMZCLRD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0B3DRDXD8",
    "title": "VASAGLE Estante de Armazenamento de Cozinha, Bar de Café, Prateleira de Padaria, 6 Prateleiras e 6 Ganchos, para Micro-ondas, Estrutura de Aço, Marrom Rústico e Preto Tinta KKS024B01",
    "image": "https://m.media-amazon.com/images/I/71zM9zW0QML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 413.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B3DRDXD8?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0D6DT84JD",
    "title": "Bettdow Monitor Portatil 15,6'', FHD 1080P Monitor Portátil Conectado Com USB C Dupla/HDMI, IPS Extensor De Tela para Notebook com VESA e Funda Inteligente magnético, Plug and Play",
    "image": "https://m.media-amazon.com/images/I/71SfTDj9NmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 424.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D6DT84JD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H519DB9L",
    "title": "Bicicleta Ergométrica Bike Spinning Bike Treino em Casa Academia Exercícios Cardio e Emagrecimento Design Confortável e Ajustável Vertical Silenciosa Ideal para Casa Linha GT FITNESS RHEAD",
    "image": "https://m.media-amazon.com/images/I/61e-Y4AgNzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 426.54,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H519DB9L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FNV6GP6K",
    "title": "Mouse sem fio Logitech Mx Master 3s Bluetooth Edition - Conexão por Bluetooth, Com rolagem ultra-rápida, Design Ergonômico, Rastreamento em Vidro, 8K DPI, Clique Silencioso - Grafite",
    "image": "https://m.media-amazon.com/images/I/615c1OkxYwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 449.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNV6GP6K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CTVNKXKC",
    "title": "Vonder, Limpador a Vapor Multiuso, 127 V~, LMV 1400.",
    "image": "https://m.media-amazon.com/images/I/51Vjx-kMYYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 531.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTVNKXKC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXBQW3DP",
    "title": "Fechadura Inteligente de Embutir MFR 3000 V Intelbras",
    "image": "https://m.media-amazon.com/images/I/41IAjMDgkgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 539.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXBQW3DP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GWF6XBP6",
    "title": "Extensor de Tela para Notebook, Monitor Portátil Externo de 14\" para Notebook, IPS FHD 1080P com Conexão Plug & Play, Tela Dupla com Portas USB-C/HDMI para Notebooks de 14\"-16\"",
    "image": "https://m.media-amazon.com/images/I/71lOUuy08mL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 558.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWF6XBP6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GNT3317T",
    "title": "Cadeira Executiva de Escritório com Encosto Alto, Apoio de Cabeça, Braços Acolchoados, Ajuste de Altura, Base Cromada e Rodízios 360°",
    "image": "https://m.media-amazon.com/images/I/61j03qyiU5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 569.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GNT3317T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CWL9S4L1",
    "title": "INNZA Removedor de pelos IPL com função de resfriamento de gelo para mulheres permanentes, 999.999 Flashes Removedor de pelos IPL indolor, dispositivo de remoção de pelos para axilas, pernas, braços",
    "image": "https://m.media-amazon.com/images/I/71PV7yMXKhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 592.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CWL9S4L1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B077SN3V88",
    "title": "Fogão Elétrico Topázio 4.0 - LAYR 220V",
    "image": "https://m.media-amazon.com/images/I/61Io+NAZa7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 622.63,
    "affiliate_url": "https://www.amazon.com.br/dp/B077SN3V88?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09MCXLXZN",
    "title": "Nobreak Interativo ATTIV 1200VA Bivolt Preto Intelbras",
    "image": "https://m.media-amazon.com/images/I/41k3Z5KfIuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 659.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B09MCXLXZN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H8W84W77",
    "title": "Bicicleta Ergométrica Spinning Peso Inércia 13kg Fitness Cardio Até 150kg Profissional Altura E Guidão Ajustável Treino Musculação",
    "image": "https://m.media-amazon.com/images/I/51HcNI5BAdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 664.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H8W84W77?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DBHTPSDP",
    "title": "soundcore Liberty 4 Pro da Anker, Fone Bluetooth 5.3 ANC Adaptativo 3.0 | 6 Mics+ IA para Chamadas em Qualquer Ambiente, Fone de Ouvido Bluetooth Sem Fio Som Hi-Fi Studio, Carregamento 2X, 40H TWS",
    "image": "https://m.media-amazon.com/images/I/51hmT70+uSL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 748.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DBHTPSDP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CFPL6CFY",
    "title": "Kindle Paperwhite 16 GB (Geração mais recente) - O Kindle mais rápido já lançado, com nova tela antirreflexo de 7” e bateria que dura semanas - Cor Preta",
    "image": "https://m.media-amazon.com/images/I/712JlBgtkJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFPL6CFY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0924BJ3QM",
    "title": "Aspirador de Pó vertical bateria Ergorapido 2 em 1 Electrolux 38 min base recarregamento luz frontal LED pedal limpeza facil da escova rotativa aspira capacidade 420Ml ERG25N Bivolt Azul",
    "image": "https://m.media-amazon.com/images/I/41Gj54fMqYL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0924BJ3QM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXVBN9K4",
    "title": "Bicicleta Ergométrica Spinning com Volante de 8kg, Silenciosa, 120kg | Estrutura triangular estável, suporta até 120kg e possui guidão e assento ajustáveis para usuários de 1,42m a 1,85m.",
    "image": "https://m.media-amazon.com/images/I/71bSFwkOHsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 759.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXVBN9K4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0B7Y363KH",
    "title": "Climatizador 60L 127V Branco/Cinza 150W CLIN60PRO-01, Ventisol",
    "image": "https://m.media-amazon.com/images/I/51reec1dbWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 764.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B7Y363KH?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FV4RH29L",
    "title": "Monitor Gamer Duex Pro DXPRO27A52RM 27\" QHD 2560x1440 180Hz Flat | Tela 27” Alta Performance para Jogos e Produtividade | Monitor Duex Pro",
    "image": "https://m.media-amazon.com/images/I/41P6sLHL4bL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 807.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FV4RH29L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYPFDPCZ",
    "title": "Estante de Livro Giratória 160 * 46cm, Estante Livros com 12 Destacável Nichós, Estanté para Livrós, Estánte Livreiro Giratória 360 Graus, Livreiro Estánte Livrós, 5 Andares Estanté Giratória Lívros",
    "image": "https://m.media-amazon.com/images/I/61JcBNNCyaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 809.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYPFDPCZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CQTN4S2R",
    "title": "Fogão de Piso Itatiaia 5 Bocas Star New Branco - Bivolt",
    "image": "https://m.media-amazon.com/images/I/31k4x40gbkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 854.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQTN4S2R?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09JV55TDR",
    "title": "Adega Electrolux 12 garrafas Uma Porta Acabamento em Alumínio (ACB12)",
    "image": "https://m.media-amazon.com/images/I/518bFu8vGNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 928.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B09JV55TDR?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B076FCQVZY",
    "title": "Purificador de Água Gelada, Fria e Natural Elétrico Luz UV Prata (PA31G)",
    "image": "https://m.media-amazon.com/images/I/51kIgrYn55L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 940.38,
    "affiliate_url": "https://www.amazon.com.br/dp/B076FCQVZY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07XFGDZWQ",
    "title": "Violão Strinberg SD200C Mgs Folk Eletroacústico Mogno Fosco",
    "image": "https://m.media-amazon.com/images/I/61F5DRinPEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 949.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XFGDZWQ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FSPDNKC3",
    "title": "Elements Cadeira Ergonômica de Escritório Sarin com Apoio Lombar e Cabeça Ajustável, Cinza",
    "image": "https://m.media-amazon.com/images/I/811yfeQOPzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 949.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSPDNKC3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CFPHTMDX",
    "title": "Kindle Paperwhite Signature Edition 32 GB (Geração mais recente) - O Kindle mais rápido já lançado, com luz frontal autoadaptável, carregamento sem fio e bateria que dura semanas - Cor Preta Metálica",
    "image": "https://m.media-amazon.com/images/I/71PMhxKPb1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 959.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFPHTMDX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GKPXSZR6",
    "title": "Smartphone Motorola Moto G17 4G - 256GB 12GB (4GB RAM + 8GB RAM Boost) camera 50MP Sony Lytia 600, tela FHD+ 60hz, bateria 5200 mAh - Azul Claro",
    "image": "https://m.media-amazon.com/images/I/61yHsp69vCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 978.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKPXSZR6?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DNLPFF8V",
    "title": "Tablet, HUAWEI MatePad SE 11, 6+128GB, Tela HUAWEI FullView de 11\" para Conforto Visual，Superbateria de 7700 mAh 22,5W，Câmera Traseira 8 MP，Câmera Frontal 5 MP，Cinza Nebula",
    "image": "https://m.media-amazon.com/images/I/61QFi-3M6uL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNLPFF8V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0HBBRG4JN",
    "title": "VireColor Cadeira de Escritório Ergonômica Giratória Mesh Com Apoio de Pés | Preto, 145° com apoio de pés, braço 9D, cabeça 8D com cabide, assento deslizante, lombar 3D e pistão Classe 3 home office.",
    "image": "https://m.media-amazon.com/images/I/71kx6rDtJ9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 999.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0HBBRG4JN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GKPGFGMP",
    "title": "WAP Extratora e Aspirador Barril Carpet Cleaner Pro 25 1700W 2250mmH20 Com 8m de Alcance e Acabamento em Inox (127, Volts)",
    "image": "https://m.media-amazon.com/images/I/51XNWY9hbIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1095.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKPGFGMP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GWM8Z6CB",
    "title": "Smartwatch, HUAWEI WATCH FIT 5 Pro, Tela FullView AMOLED de 1,92\", Vidor de Safira, Mini Treino, Bateria com Até 10 Dias, 64 GB, Gerenciamento da Saúde, ECG, Compatível com iOS e Android, Preto",
    "image": "https://m.media-amazon.com/images/I/71ri+iZ6dWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWM8Z6CB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FPDXF8R2",
    "title": "Frigobar Preto 93L Inverter Bivolt Midea",
    "image": "https://m.media-amazon.com/images/I/31-Ncczd8GL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1099.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPDXF8R2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CX8MT2M2",
    "title": "Apresentamos o Kindle Colorsoft (16 GB) - Com tela colorida e temperatura de luz ajustável - Cor Preta",
    "image": "https://m.media-amazon.com/images/I/619f+kWt2PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1119.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CX8MT2M2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYZ4NHB3",
    "title": "DREAME F10 Robô Aspirador e Passa Pano, Sucção 13000Pa, Limpeza de Sujeiras Secas e Úmidas e Carpetes, Desvio de Obstáculos, Remoção de Pelos e Resíduos de Pets, Autonomia 300 min, Alexa, Bivolt",
    "image": "https://m.media-amazon.com/images/I/61LywBn8yEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1259.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYZ4NHB3?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09Z78CWXY",
    "title": "Bicicleta Spinning com roda de inércia de 13kg WCT Fitness",
    "image": "https://m.media-amazon.com/images/I/61zKXOc8LxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1356.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B09Z78CWXY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CX8Y3CMG",
    "title": "Apresentamos o Kindle Colorsoft Signature Edition (32 GB) - Com tela colorida, luz frontal autoadaptável, carregamento sem fio e bateria que dura semanas - Cor Preta Metálica",
    "image": "https://m.media-amazon.com/images/I/81a4IQ0UzxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CX8Y3CMG?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08V3Q8WCN",
    "title": "Bicicleta Ergométrica Gallant Elite Spinning Roda de Inércia 13kg até 110kg Mecânica Gsb13hbta-pt",
    "image": "https://m.media-amazon.com/images/I/51FZQXJqUxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1401.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B08V3Q8WCN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GSC9H3NC",
    "title": "Geladeira Refrigerador HQ 230 Litros Duplex Defrost, Baixo Consumo A+++ Preto/Cinza HQ-230RDFS (110, Volts)",
    "image": "https://m.media-amazon.com/images/I/312ZUmIPaQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1443.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GSC9H3NC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H4V1QQNZ",
    "title": "Câmera PTZ,Full HD 1080p 60fps para Igreja,Zoom Óptico 10x,POE Conference Camera,HDMI,para Live Streaming em Serviços Religiosos e Conferências",
    "image": "https://m.media-amazon.com/images/I/61mmHMPV8XL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1449.7,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4V1QQNZ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0BQ3LS7TJ",
    "title": "Elements Cadeira de Escritorio Ergonômica Vertta Pro com Apoio Lombar e Cabeça Respirável, Preta",
    "image": "https://m.media-amazon.com/images/I/51-Y9XzZZ5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1449.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ3LS7TJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FDX9MDXK",
    "title": "Samsung Galaxy Watch8 Smartwatch 44mm LTE, Galaxy AI - Prata",
    "image": "https://m.media-amazon.com/images/I/41RnHMx5UzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1539.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FDX9MDXK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GVGR4K7Q",
    "title": "Máquina de Lavar 13kg Branca Consul com Dosagem Econômica - CWH13AB 110v",
    "image": "https://m.media-amazon.com/images/I/41wx5krp7CL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1599.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVGR4K7Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GHZWRPHK",
    "title": "Ar-condicionado Janela Midea Mecânico Frio 7.500 BTUs 127V",
    "image": "https://m.media-amazon.com/images/I/41nXLTDIHAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1602.61,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHZWRPHK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FN4BK3V7",
    "title": "Tablet Lenovo Idea Tab 11\" 90Hz - Octa-Core, 4GB RAM, 128GB, Wi-Fi 5, Android 15, Caneta e Capa",
    "image": "https://m.media-amazon.com/images/I/61tVQTdW0nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1649.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FN4BK3V7?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07Q5L5YTP",
    "title": "LAVADORA DE ROUPA AUTOMÁTICA MLA13 13 KG BCO 220V",
    "image": "https://m.media-amazon.com/images/I/51xeBNAzR+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1665.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B07Q5L5YTP?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DGLXRFXB",
    "title": "AirPods 4 com Cancelamento Ativo de Ruído",
    "image": "https://m.media-amazon.com/images/I/41WMBnjyitL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1667.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGLXRFXB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DPGQ6V13",
    "title": "Geladeira Refrigerador HQ Defrost 290 Litros Preto/Cinza HQ-290RDF 127V",
    "image": "https://m.media-amazon.com/images/I/411rpvysQGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPGQ6V13?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GYSRXX66",
    "title": "Geladeira Refrigerador HQ Defrost 290 Litros Preto HQ-290RDF (110, Volts)",
    "image": "https://m.media-amazon.com/images/I/41jJmEK3+UL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1698.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GYSRXX66?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B09LHXBL2V",
    "title": "Coifa de Ilha Oster Inox Touch Control, 90cm, 220v, OCFA590",
    "image": "https://m.media-amazon.com/images/I/419jwVCZRzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1861.08,
    "affiliate_url": "https://www.amazon.com.br/dp/B09LHXBL2V?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0G81Y48TW",
    "title": "Electrolux Fogão de Embutir 4 bocas Electrolux Preto Experience Mesa Vidro e VaporBake (FE4BB) Bivolt",
    "image": "https://m.media-amazon.com/images/I/51q2P6+MTEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2149.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G81Y48TW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXFFSVYM",
    "title": "DREAME D15 Plus Robô Aspirador e Passa Pano com Autoesvaziamento, Sucção 13.000 Pa, Limpeza de Carpetes, Desvio de Obstáculos, Antienrosco, Limpeza para Pets, Bateria Longa, Compatível com Alexa, 127V",
    "image": "https://m.media-amazon.com/images/I/61N-ZmR2MxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2159.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXFFSVYM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FQGMGVCT",
    "title": "Apple AirPods Pro 3 ​​​​​​​ | Cancelamento Ativo de Ruído até duas vezes melhor, Medição de frequência cardíaca, Tradução ao Vivo, Maior duração da bateria",
    "image": "https://m.media-amazon.com/images/I/41FBUBvUY1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQGMGVCT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FFKF28WB",
    "title": "Balança Bioimpedância Corporal Bio Power Max Corporal 55 Análises Alta precisão Relaxshop",
    "image": "https://m.media-amazon.com/images/I/51yEzW3orUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2369.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFKF28WB?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DJFWRFGF",
    "title": "Ar-Condicionado Split HW Philco PAC18FI 18.000 BTUs R-32 Só Frio 220V",
    "image": "https://m.media-amazon.com/images/I/516-ejWL-PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2398.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJFWRFGF?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FQFH5PJS",
    "title": "Apple Watch SE 3 GPS, Caixa em alumínio luz das estrelas de 40 mm com Bracelete desportiva luz das estrelas - P/M",
    "image": "https://m.media-amazon.com/images/I/41H4AoY5xbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2399.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQFH5PJS?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H3CLV2VK",
    "title": "Ar-Condicionado Split Hi Wall Inverter Gree G-Side 12.000BTU/h Quente e Frio 220v GWH12ATCXB-D6DNA3C/I Branco",
    "image": "https://m.media-amazon.com/images/I/51gmsrkzLrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2449.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H3CLV2VK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FTKJJKNT",
    "title": "Apple iPhone 14 (128 GB) – Estelar (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2588.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTKJJKNT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FXMS9YFW",
    "title": "Notebook Positivo Vision C15M Intel Celeron N4500 Linux 8GB RAM 256GB eMMC Tela 15\" Full HD IPS Antirreflexo – com Minitela - Cinza",
    "image": "https://m.media-amazon.com/images/I/710MJY0HdFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2648.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXMS9YFW?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0G52YJHL9",
    "title": "Computador All in One 23.8\" Full HD Intel Core i7-6600U, SSD M.2 512GB, 16GB RAM, Wi-Fi Dual Band, Saídas HDMI/VGA, Alto-Falantes e Webcam Integrados com Teclado e Mouse",
    "image": "https://m.media-amazon.com/images/I/61iP-GBR1OL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G52YJHL9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0C4LFY45K",
    "title": "Estação de Musculação Elite X Gallant 65kg Aparelho de Ginástica",
    "image": "https://m.media-amazon.com/images/I/51HfH6xgdNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2758.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C4LFY45K?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H1QX91XX",
    "title": "XPPen Magic Note Pad Tablet, Livros Eletrônicos com Três Modos de Cor",
    "image": "https://m.media-amazon.com/images/I/71SPxorftbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2944.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H1QX91XX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B07BWN2145",
    "title": "EXTRATORA E LAVADORA 35,5 LITROS EA135 1200W IPC A135 EXT 220V UNIC S DEFINICAO",
    "image": "https://m.media-amazon.com/images/I/61VFNZGvD0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2945.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07BWN2145?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0G1LFK4LY",
    "title": "Apple iPhone 13 Pro (128 GB) - Azul Sierra (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41yGCey9asL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2971.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1LFK4LY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FBBT8HHL",
    "title": "Tablet VAIO TL12 8GB 256GB Octa-Core, Tela AMOLED 12.6” 2.5K, com Teclado de Conexão Inteligente e Caneta Ativa, 5G WiFi, Câmera 13MP + Selfie 12MP, 10.090mAh, Android 15 – Preto",
    "image": "https://m.media-amazon.com/images/I/71Y-rWzSFbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2989.62,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FBBT8HHL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GM1JJD66",
    "title": "Smartphone Motorola Edge 70 5G - 512GB 24GB (12GB RAM + 12GB RAM Boost), Ultrafino, 3 cameras 50MP, Tela 1.5K extreme Amoled 120hz - Bronze Green",
    "image": "https://m.media-amazon.com/images/I/61OaHpwFsuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GM1JJD66?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DX2M1RCD",
    "title": "Geladeira Refrigerador HQ Frost Free Side By Side 460 Litros Cinza HQ-460SBSFF (127V)",
    "image": "https://m.media-amazon.com/images/I/41-eSvkKV3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3176.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX2M1RCD?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FTNDXGXJ",
    "title": "Apple iPhone 15 (128 GB) — Rosa (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/41RpmPYWXLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3269.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FTNDXGXJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F8KVQZQX",
    "title": "Smartphone Motorola Razr 60-256GB 24GB (12GB RAM+12GB Ram Boost) Tela dobrável 6,9\" pOLED e externa 3,6” Moto AI camera IP48 - Branco",
    "image": "https://m.media-amazon.com/images/I/61Ik2Dj2zTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3298.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8KVQZQX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0B8MCB6KK",
    "title": "Notebook Acer Aspire Go 15 AG15-71P-5939 Intel core I5 13ª Geração 8GB RAM 256GB SSD Full HD TN Windows 11 Home",
    "image": "https://m.media-amazon.com/images/I/51m1lv0+KCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B8MCB6KK?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B078929VCN",
    "title": "SUGGAR COIFA ILHA REDONDA QUARTZO INOX 35CM 220V TP3522IX",
    "image": "https://m.media-amazon.com/images/I/716jza-SoaS._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3539.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B078929VCN?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DKG5JQXJ",
    "title": "Lava-louças Brastemp 15 Serviços com Smart Sensor - BLF61AE 110v",
    "image": "https://m.media-amazon.com/images/I/41oh649Vd9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3548.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKG5JQXJ?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0D4NSS9XV",
    "title": "Samsung Galaxy Book4 Intel® Core™ i3-1315U, Windows 11 Home, 8GB, 256GB SSD, UHD Graphics, 15.6'' Full HD LED, 1.55kg*.",
    "image": "https://m.media-amazon.com/images/I/71qOQOgOZUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3598.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D4NSS9XV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B082Y9F21N",
    "title": "Acer Notebook Aspire 5 AMD Ryzen 5 5500U 16GB SSD 512GB 15.6\" Full HD Linux Preto Alimentação CA Compatível c/ Mouse USB - A515-45-R478",
    "image": "https://m.media-amazon.com/images/I/51YpwUlKoFL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B082Y9F21N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CLSZ29GC",
    "title": "Ar-condicionado Split Inverter 22000 Btus Springer Midea Airvolution Connect High Wall Só Frio 42afvci22s5/38tvci22s5 220v",
    "image": "https://m.media-amazon.com/images/I/51Chd9onSiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CLSZ29GC?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GF4CL4QY",
    "title": "Macbook Pro Retina Apple 16\", 16gb, Cinza Espacial, Ssd 512gb, Intel Core i7, 2.6 Ghz, Touch Bar e Touch Id - Mvvj2bz/a (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/51eCgpRvYNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3889.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GF4CL4QY?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0G22R3QLT",
    "title": "Notebook Lenovo IdeaPad Slim 3 15.3\" - AMD Ryzen 7 7735HS, 8GB RAM, 256GB SSD, AMD Radeon Graphics, Linux",
    "image": "https://m.media-amazon.com/images/I/61dyWdKC3yL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G22R3QLT?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0G1LFHT38",
    "title": "Apple iPhone 14 Pro Max (128 GB) – Roxo-profundo (Seminovo)",
    "image": "https://m.media-amazon.com/images/I/51iJx7YWDOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3971.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G1LFHT38?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FQG1KWM5",
    "title": "Apple Watch Series 11 GPS, Caixa em alumínio rosa‑dourado de 42 mm com Bracelete desportiva rosa leve - M/G",
    "image": "https://m.media-amazon.com/images/I/419Qj9Ja7VL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQG1KWM5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FY3TV864",
    "title": "Notebook Acer Aspire Go 15 AG15-71P-53R6 Intel Core i5 13º Geração 16BG RAM 512GB SSD 15,6\" Full HD Windows 11 Home",
    "image": "https://m.media-amazon.com/images/I/712nW-3hYBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY3TV864?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXTTX3B1",
    "title": "Creality Impressora 3D SPARKX I7 Combo, Multicolorida com CFS Lite AI Photo to 3D Printing, Alta Velocidade de 500 mm/s, Nivelamento Automático, Luz RGB, 95% Pré-montada, 10,24 × 10,24 × 10 polegadas",
    "image": "https://m.media-amazon.com/images/I/61Cn56b3B0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4299.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXTTX3B1?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CP69NT2N",
    "title": "Apple iPhone 15 (128 GB) — Rosa",
    "image": "https://m.media-amazon.com/images/I/41RpmPYWXLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4443.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CP69NT2N?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0H6N4P465",
    "title": "Samsung Smart TV 70\" Crystal UHD 4K U8000H 2026 | Vision AI Companion, Modo Futebol, Xbox Cloud Gaming, Canais Gratuitos, 7 Anos de Atualização",
    "image": "https://m.media-amazon.com/images/I/61H0840KVGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6N4P465?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F5X4NPK2",
    "title": "Samsung Smart TV 75\" Crystal UHD 4K U8100F 2025",
    "image": "https://m.media-amazon.com/images/I/81QsB0GMcyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F5X4NPK2?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GTRZFNJM",
    "title": "Apple iPhone 17e de 256 GB — Rosa-pálido",
    "image": "https://m.media-amazon.com/images/I/41YoC-wH37L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4699.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTRZFNJM?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CPFBBHP4",
    "title": "eufy X10 Pro Robô Aspirador e Passa Pano,Autolimpante, Sucção 8000Pa, 220V | Lava Seca Reabastece Autosecagem 45°C, Navegação Laser, IA Mapeamento e Evita Obstáculos,Escovas Antiembaraço,Ideal para Pets",
    "image": "https://m.media-amazon.com/images/I/71ylrz9PRgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4749.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CPFBBHP4?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0CC3XQL95",
    "title": "Bicicleta Ergométrica Gallant Smart Spinning Roda de Inercia 18kg até 150kg Magnética Gsb18smga-pt",
    "image": "https://m.media-amazon.com/images/I/51L6DUdxfkL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 4904.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CC3XQL95?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F2TPQVRX",
    "title": "Dyson Airwrap™ Multiestilizador de cabelo - Kit Completo 127v",
    "image": "https://m.media-amazon.com/images/I/6159qOn6gqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5154.63,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F2TPQVRX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08GG5TD1Q",
    "title": "Cervejeira Metalfrio Beer Maxx 336 Litros VN28TP nox - 220V",
    "image": "https://m.media-amazon.com/images/I/516JzI1C5JL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5289.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08GG5TD1Q?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0F68W3N1L",
    "title": "Notebook VAIO FE16 AMD® Ryzen 7-5825U Windows 11 Home 16GB RAM 512GB SSD 16\" IPS WUXGA - Cinza Grafite",
    "image": "https://m.media-amazon.com/images/I/51O6uip8NGL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F68W3N1L?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B082WGSGLL",
    "title": "Computador Acer All In One C24-2YE13U5UNL-BR11 Intel Core i5-1334U de 13ª geração,16GB RAM 512 GB SSD, 23,8”, Full HD 120HZ, Webcam, Windows 11 Sem Teclado e Mouse",
    "image": "https://m.media-amazon.com/images/I/61CaY3gbG8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B082WGSGLL?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B08293MH76",
    "title": "Notebook Acer Aspire 16 A16-71M-51UQ Intel Core Ultra 5 16GB RAM 1TB SSD Tela 16 Led IPS 60Hz WUXGA Windows 11",
    "image": "https://m.media-amazon.com/images/I/61fdWMFFv-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08293MH76?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DJFSKVZ5",
    "title": "Apple iPhone 16 (256 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5599.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJFSKVZ5?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DJFS7GXV",
    "title": "Apple iPhone 16 (512 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJFS7GXV?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GQWP9K1G",
    "title": "Apple iPhone 17 de 256 GB — Sálvia",
    "image": "https://m.media-amazon.com/images/I/41k9Fkg0r7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5887.78,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQWP9K1G?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GPN3XW9T",
    "title": "Bicicleta Elétrica HDJ G60 Aro 20 - Motor 1000W, Bateria 48V 15Ah 32Mph, Até 50km Autonomia, Suspensão Dupla, Freio Hidráulico, 7 Velocidades - Mobilidade Urbana para Adultos",
    "image": "https://m.media-amazon.com/images/I/61vGR09GeeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6174.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GPN3XW9T?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0DS6FVX7W",
    "title": "Gallant Esteira Ergométrica Elétrica Elite Pro 4,5hp 20km/h 160kg 15 Níveis de Inclinação",
    "image": "https://m.media-amazon.com/images/I/51NPdG-tqQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 6608.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DS6FVX7W?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0FXM57JL9",
    "title": "Dreame X50 Ultra Robô Aspirador e Esfregão, 20.000Pa, supera obstáculos de 6 cm, mopa extensível e removível, navegação LDS inteligente, desvio de obstáculos por IA, navegação 360° e modo pet,127V",
    "image": "https://m.media-amazon.com/images/I/71hGLosM04L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 8998.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXM57JL9?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  },
  {
    "asin": "B0GXF8NXKX",
    "title": "DREAME X60 Max Ultra Complete Robô Aspirador e Passa Pano, Sucção 35kPa, Ultrafino 7,95 cm, Transpõe Obstáculos de 8 cm, Desvio de 280 Obstáculos, Autoesvaziamento e Autolimpeza,127V",
    "image": "https://m.media-amazon.com/images/I/71yAGUpbcoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 13157.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXF8NXKX?tag=mdm0a40-20",
    "last_checked_at": "2026-09-01T17:53:13.000Z"
  }
];
