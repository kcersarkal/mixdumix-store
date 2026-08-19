const PRODUCTS = [
  {
    "asin": "6559801365",
    "title": "O Pequeno Príncipe – Edição de luxo com capa dura almofadada e aquarelas originais do autor",
    "image": "https://m.media-amazon.com/images/I/81QluJ4QXyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 13.88,
    "affiliate_url": "https://www.amazon.com.br/dp/6559801365?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CBQPMJ56",
    "title": "LYOR - Porta-Retrato de MDF 15cm x 20cm",
    "image": "https://m.media-amazon.com/images/I/61Hq24mu5LL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 15.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CBQPMJ56?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07W6B8LCZ",
    "title": "Protetor Díário Intimus® Tecnologia Antibacteriana - 80 un",
    "image": "https://m.media-amazon.com/images/I/61wj2Rc59YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 15.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B07W6B8LCZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GVZXW9N2",
    "title": "Cabo USB-C para USB-C 2m 60W, Nylon Trançado Reforçado, Carga e Dados | Compatível com iPhone 15/16, Samsung Galaxy, Xiaomi, iPad, MacBook, notebook e tablet; PD 3.0, USB 2.0 e até 480 Mbps.",
    "image": "https://m.media-amazon.com/images/I/61er28e49TL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 18.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVZXW9N2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B074LTNDPQ",
    "title": "Lola Cosmetics - Morte Subita - Shampoo hidratante para cabelos secos e danificados que foi quimicamente tratado vegano, livre de crueldade, sem parabenos, sem sulfatos, 250 ml",
    "image": "https://m.media-amazon.com/images/I/714XCIlHoNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LTNDPQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09GHN14FP",
    "title": "Danos Vorazes Óleo Reparador 50ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71AMqfOXdAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 19.93,
    "affiliate_url": "https://www.amazon.com.br/dp/B09GHN14FP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GMXN4H9M",
    "title": "Cabo Carregador Turbo USB-C 1 Metro Trançado De Nylon Branco Compativel Com Iphone 14,13,12,11,X e XR",
    "image": "https://m.media-amazon.com/images/I/51jTagQW4aL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 20.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GMXN4H9M?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07DPDT13Y",
    "title": "Desodorante Natural e Vegano com óleos essenciais de Melaleuca e Toranja, 24h de proteção, Sem Alumínio, Sem Parabeno, Boni Natural, Transparente",
    "image": "https://m.media-amazon.com/images/I/41MaQ7Ajv3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.58,
    "affiliate_url": "https://www.amazon.com.br/dp/B07DPDT13Y?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09LD48ZZ4",
    "title": "Caixa de Pilha AAA com 40 unidades Elgin Palito - Tubo, Zinco",
    "image": "https://m.media-amazon.com/images/I/51wlcSTwZsL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B09LD48ZZ4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CTN4ZMZY",
    "title": "Cera Modeladora Hair Wax Stick",
    "image": "https://m.media-amazon.com/images/I/61OHIJ3gmBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CTN4ZMZY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B074LX2C86",
    "title": "Meu Cacho Minha Vida Shampoo 500ml , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/71sRs80kVLL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 21.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LX2C86?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07C62SYMJ",
    "title": "Inoar, Cicatrifios, Shampoo Reconstrutor, Hidratação Profunda e Redução de Volume, Pantenol, Creatina Vegetal e Rejucomplex®, Vegano – Para Cabelos Danificados ou Quebradiços, 1L",
    "image": "https://m.media-amazon.com/images/I/51sKfWhWh0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 22.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07C62SYMJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DJF28PY4",
    "title": "LYOR - Coqueleira shaker 3 em 1 - Performance Cinza 650ml",
    "image": "https://m.media-amazon.com/images/I/519MMH0EZQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 23.92,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJF28PY4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FT5LC4XR",
    "title": "Limppano Lava Roupas Líquido ODD Intense Repair 3L",
    "image": "https://m.media-amazon.com/images/I/51qWF1kopWL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FT5LC4XR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B074LVYZDJ",
    "title": "Lola From Rio - Meu Cacho Minha Vida - Creme de Pentear: brilho, maciez e definição. Cabelos Cacheados. 500ml",
    "image": "https://m.media-amazon.com/images/I/51omKxWOC3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.85,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LVYZDJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B078BBVGHC",
    "title": "Forever Liss, FOR86, Desmaia Cabelo, 350g",
    "image": "https://m.media-amazon.com/images/I/61+2A9jxAwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 24.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B078BBVGHC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CQ1QVJ3L",
    "title": "Colgate Luminous White Carvão Ativado Creme Dental Clareador, 4x70g",
    "image": "https://m.media-amazon.com/images/I/8193hRZ3ttL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQ1QVJ3L?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B074LQXGM7",
    "title": "Meu Cacho Minha Vida Condicionador 500g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/51yaUGrtIOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LQXGM7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H12J7P5G",
    "title": "Carregador Turbo 30w Usb-c Com Cabo Tipo C 1 Metro Trançado Branco Fonte De Carregamento Turbo, Alta Potência, Seguro E Compatível Com Iphone 15 16 17, Samsung Xiaomi Motorola LG",
    "image": "https://m.media-amazon.com/images/I/615Fewv04mL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H12J7P5G?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0BYBFXFKH",
    "title": "Inoar, Meu Cacho, Meu Crush – Creme de Pentear, Define Cachos, Hidrata e Controla o Frizz, Com Óleos Naturais e Vitaminas - 500ml",
    "image": "https://m.media-amazon.com/images/I/61688fq+JtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BYBFXFKH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0G619WNVL",
    "title": "Taça Térmica A Vácuo 410Ml 2-Em-1 Inox Haste Rosqueável Removível Copo E Taça Parede Dupla Isolante Antiderrapante Ideal Para Gin Vinho Drinks Viagem E Churrasco (Preta)",
    "image": "https://m.media-amazon.com/images/I/41uFGYjgWKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 26.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G619WNVL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B06X974F7H",
    "title": "Tio Nacho Shampoo Antiqueda Hidratante Com Henna Egipcia E Geleia Real Para Cabelos Grisalhos, Fortalecimento E Nutrição Profunda Dos Fios 415 Ml 1-Pack",
    "image": "https://m.media-amazon.com/images/I/71VCd0T2G1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.47,
    "affiliate_url": "https://www.amazon.com.br/dp/B06X974F7H?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07SLGHB35",
    "title": "Meu Cacho Minha Vida Máscara 450g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61xqM0kKJjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B07SLGHB35?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09XFLHJ1S",
    "title": "Danos Vorazes Máscara de Tratamento 450g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/61C0iM4H-iL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 28.94,
    "affiliate_url": "https://www.amazon.com.br/dp/B09XFLHJ1S?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CRZ4TPCM",
    "title": "Plot Twist Nut Butter Cream 480g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/51IBKCZ1f+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 29.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CRZ4TPCM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GH7YVJ59",
    "title": "Fone de Ouvido Bluetooth 5.3, Graves Potentes, Drivers de 13mm, 14H de Reprodução, Resistência à Água, Fone sem fio tws, Preto",
    "image": "https://m.media-amazon.com/images/I/51oJC0uKvXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 32.14,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GH7YVJ59?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FCJ1JZWG",
    "title": "BONI NATURAL - Creme Dental com óleos naturais de Menta e Melaleuca Vegano e Natural, Sem Flúor, Sem Triclosan, 90g, 3 unidades Leve Mais Pague Menos",
    "image": "https://m.media-amazon.com/images/I/6108qlBKLHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 33.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FCJ1JZWG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CGSPL87J",
    "title": "Eudora Niina Secrets Batom Líquido Skinny Matte Vermelho Hibisco 5Ml",
    "image": "https://m.media-amazon.com/images/I/51kQ9-stKjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.18,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CGSPL87J?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B08B5GFHZN",
    "title": "Anasol Protetor Solar Facial FPS 70 Clareador - 60 g",
    "image": "https://m.media-amazon.com/images/I/51wZRC7vnPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 34.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08B5GFHZN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GXLBG3DK",
    "title": "Panos de Prato Kit 5 Peças Branco Xadrez Colorido Alta Absorção",
    "image": "https://m.media-amazon.com/images/I/614F6kg7ScL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 37.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXLBG3DK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DKVJ1HWB",
    "title": "Lola Cosmetics Kit Cronograma Capilar Be(m) Dita Ghee - 3 Produtos",
    "image": "https://m.media-amazon.com/images/I/71K-GAoX50L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 38.74,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DKVJ1HWB?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FMFXH7RT",
    "title": "Faber-Castell Lápis De Cor Supersoft com 24 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZzxtsCXmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.22,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFXH7RT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07XYH874V",
    "title": "Rum Bacardi Carta Blanca 980ml",
    "image": "https://m.media-amazon.com/images/I/61d7pJypApL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 39.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B07XYH874V?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0C7C5ST5K",
    "title": "Extensão Tomada, Régua Tomada, Régua de Energia, 5 Tomadas, 4 Interfaces USB, 1 Porta USB Tipo-C, Cabo de Alimentação de 1,9 metros, Suporte a Tensão de 110-220V, Potência de 2500W (Preto)",
    "image": "https://m.media-amazon.com/images/I/61cqHsWOW7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.07,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7C5ST5K?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B077T442QN",
    "title": "KNUT Hair Care Elixir Camelina E Ojon 35 Ml Knut Hair Care",
    "image": "https://m.media-amazon.com/images/I/61JhKZNpnXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B077T442QN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0C5P3F1NJ",
    "title": "Eudora Siàge Cauterização dos Lisos Máscara Capilar 250g",
    "image": "https://m.media-amazon.com/images/I/61kUVEABq2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 42.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C5P3F1NJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DD2FHQ3P",
    "title": "Vitamina B12 Ativa (metilcobalamina) Longa Duração: 4 Meses de Uso, 120 Cápsulas,Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61-T11tf4dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 44.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DD2FHQ3P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09RQ4WRBV",
    "title": "Siàge Máscara Capilar Cica-Therapy 250G",
    "image": "https://m.media-amazon.com/images/I/51+LqJPOIyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 45.59,
    "affiliate_url": "https://www.amazon.com.br/dp/B09RQ4WRBV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "8535944710",
    "title": "Aos pés da letra",
    "image": "https://m.media-amazon.com/images/I/719o+9czKiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 46.23,
    "affiliate_url": "https://www.amazon.com.br/dp/8535944710?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09HW92VTZ",
    "title": "Eudora Siàge Hair-Plastia Máscara Capilar 250g",
    "image": "https://m.media-amazon.com/images/I/61WDdVwpX9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B09HW92VTZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0C1LG111K",
    "title": "Jogo Lençol Casal 3 Peças 400 Fios 100% Algodão Premium (Branco)",
    "image": "https://m.media-amazon.com/images/I/61p9V-ttF4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 49.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C1LG111K?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GHPGBPSR",
    "title": "Kit Morte Súbita (Shampoo + Condicionador + Spray Reparaçao) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/71ggER1mlqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 56.81,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHPGBPSR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GXWZG4NG",
    "title": "Frigideira Grande 24cm Revestimento Antiaderente Cerâmica Cabo de Madeira Moderna Durável Elegante Saudável - Ideal Para Indução, Fogao A Gás Ou Elétrico - Frita Sem Usar Oleo - Acompanha Espátula",
    "image": "https://m.media-amazon.com/images/I/610JKIPnFqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 57.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXWZG4NG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GHP4NL1J",
    "title": "Kit Rapunzel (Shampoo + Tônico + Milk Spray) - Lola From Rio",
    "image": "https://m.media-amazon.com/images/I/41OcWO275YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 58.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHP4NL1J?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B08FVVH9BC",
    "title": "Creme Preventivo Assaduras Huggies Pele Protegida c/3 de 80g",
    "image": "https://m.media-amazon.com/images/I/619A5eTbmwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 59.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B08FVVH9BC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6550477638",
    "title": "Inteligência pragmática: A habilidade humana que a IA nunca substituirá - Como transformar objetivos em realidade",
    "image": "https://m.media-amazon.com/images/I/71Islz8MOpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 62.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6550477638?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6560001776",
    "title": "Os imortais",
    "image": "https://m.media-amazon.com/images/I/81esC3zEBRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.69,
    "affiliate_url": "https://www.amazon.com.br/dp/6560001776?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B074LWHJ2H",
    "title": "Hair Vintage Girl Creme Alisante 850g , Lola Cosmetics",
    "image": "https://m.media-amazon.com/images/I/619Y5opifoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 63.84,
    "affiliate_url": "https://www.amazon.com.br/dp/B074LWHJ2H?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0G2682GZF",
    "title": "5 Magnésio Treonina 180 Cápsulas, 3 Meses de Uso, Longa Duração, Alto Teor Treonina + 5 tipos de Magnésio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61HHbHcWzlL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 64.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2682GZF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H5TD19NQ",
    "title": "Blocos Magneticos Infantil de Montar Peças, Brinquedo Educativo Construção Infantil 2D, 3D, mini Jogo Pedagógico para Coordenação Motora, Raciocínio Lógico, Criatividade e Aprendizado STEM (56 peças)",
    "image": "https://m.media-amazon.com/images/I/71dl-5DxaeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5TD19NQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B077C3YBM3",
    "title": "Difusor, Taiff, Curves 1000013, Preto",
    "image": "https://m.media-amazon.com/images/I/51ZJowgZ+YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 66.43,
    "affiliate_url": "https://www.amazon.com.br/dp/B077C3YBM3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B08WKRYQHN",
    "title": "Cartucho de Tinta HP 667 Colorido Original (3YM78AB) Para Impressora Deskjet 2376, 2776, 6476, 5076, 5276",
    "image": "https://m.media-amazon.com/images/I/71O7EqV7aCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 72.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B08WKRYQHN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D9YT8FGP",
    "title": "Truss NOVO Shampoo Uso Obrigatório 300 ml",
    "image": "https://m.media-amazon.com/images/I/616mEWIE+FL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.87,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9YT8FGP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DLVH2WN4",
    "title": "NAC 600mg 120 Cápsulas 4 Meses de Uso, Longa Duração 2x Mais, com Molibdênio e Selênio, Fortalvit",
    "image": "https://m.media-amazon.com/images/I/61XbBNvBG-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 76.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DLVH2WN4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GXLPJPCQ",
    "title": "Kit 12 Pares Meia Lupo Sapatilha Soquete Invisível Original Unissex",
    "image": "https://m.media-amazon.com/images/I/816Ugu9XRNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 78.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXLPJPCQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D9ZQD6LW",
    "title": "LYOR - Lixeira Redonda De Metal Com Pedal e Tampa Em Bambu Branca 3L",
    "image": "https://m.media-amazon.com/images/I/61tgvo-n6jL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 83.42,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9ZQD6LW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B08CS1S553",
    "title": "Capa Lenovo para Notebook - Urban Sleeve 15.6\" Cinza",
    "image": "https://m.media-amazon.com/images/I/8114RTMYDoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 84.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B08CS1S553?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CZBM7728",
    "title": "ELG, SHCI603, Câmera interna 1080P Full HD Inteligente Wi-Fi com Botão SOS, Áudio Bidirecional, Visão Noturna e Detecção de Movimentos, Branco",
    "image": "https://m.media-amazon.com/images/I/61exKmRRnDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZBM7728?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FMF4NMLY",
    "title": "Luminária Pendente LED Moderna 3 Anéis 72W, Redonda Embutida, Regulável, 3 Cores de Luz (3000K/4000K/6000K), Altura Ajustável, Design Luxuoso para Sala, Quarto ou Escritório (Preto)",
    "image": "https://m.media-amazon.com/images/I/71HWhRJtW3L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.32,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMF4NMLY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DSC8C4XH",
    "title": "Fralda Huggies Premium Dermacare XG - 38 Un",
    "image": "https://m.media-amazon.com/images/I/719yVPNSxpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSC8C4XH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0BFSYDMMJ",
    "title": "Tech T-shirt Gola U Masculino",
    "image": "https://m.media-amazon.com/images/I/51p6HHzap5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BFSYDMMJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DZ36BKWP",
    "title": "The Perfect Top Feminino",
    "image": "https://m.media-amazon.com/images/I/31WA7oaN4YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 89.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DZ36BKWP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GVGQHDWG",
    "title": "Hub USB-C 3.0 Extensor Adaptador 6 em 1 - RJ45 Ethernet (Rede Lan), HDMI 4K, USB 3.0, USB 2.0, USB-C, PD 100W - Para Notebook, Macbook, Ipad, Dock Station, Dex, Raspberry - Compacto em Alumínio",
    "image": "https://m.media-amazon.com/images/I/71WHy6sjHhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 91.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GVGQHDWG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FDW1LPX8",
    "title": "Mochila Grande para Notebook 17.3 Masculina Feminina,Mochila Backpack Executiva Antifurto, Reforçada, Saídas USB,Impermeável, Escolar, Faculdade, Trabalho,Viagem,Presente (Preto)",
    "image": "https://m.media-amazon.com/images/I/81d-fw0QFpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 94.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FDW1LPX8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D9YTZ8CR",
    "title": "Truss Reconstrutor Capilar Uso Obrigatório Spray | Hidratação e Reconstrução Imediata | 260ml",
    "image": "https://m.media-amazon.com/images/I/61rcwreK7WL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 95.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9YTZ8CR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CQKM2VVC",
    "title": "Kit 4 Pacotes Café Especial em Grãos Coffee Mais Variedades: Arara, Caparaó, Chapada de Minas e Clássico - 100% Arábica (4x250g)",
    "image": "https://m.media-amazon.com/images/I/61zVRBe3oDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 96.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CQKM2VVC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FMFVYV1R",
    "title": "Faber-Castell Lápis De Cor Supersoft com 50 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ZqK+1cPBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 98.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFVYV1R?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0C3MZVWKB",
    "title": "Kit 4 Pacotes Café Especial Torrado e Moído Coffee Mais Variedades: Arara, Chapada de Minas, Sul de Minas e Cerrado Mineiro - 100% Arábica (4x250g)",
    "image": "https://m.media-amazon.com/images/I/718gJSw5V2L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C3MZVWKB?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DR45KLST",
    "title": "Carregador Portátil 10000mAh com Display LED, Mini Power Bank Rápido 22.5W com PD 3.0 e QC 3.0, USB-C Leve e Compatível com iPhone 16/15/14/13/12/11 e Samsung, Preto",
    "image": "https://m.media-amazon.com/images/I/51NJI69bhaL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 99.52,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DR45KLST?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FPT7HB8G",
    "title": "Carrinho Organizador Multiuso 3 Prateleiras Com Rodinhas 360° (Preto)",
    "image": "https://m.media-amazon.com/images/I/6163J3IhSwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 101.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FPT7HB8G?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B079VVRXZL",
    "title": "ISDIN Clareador Facial Foto Ultra Active Unify Sem Cor FPS 99-50ml",
    "image": "https://m.media-amazon.com/images/I/61ppzaUoQuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 102.34,
    "affiliate_url": "https://www.amazon.com.br/dp/B079VVRXZL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FSRS4QWS",
    "title": "Câmera de Segurança, Wifi 1080p 360° Full Hd Ip Prova D'áGua Infravermelho Ao Ar Livre Hd VisãO Noturna Pode DiáLogo HC0T256",
    "image": "https://m.media-amazon.com/images/I/71YFlrKsKTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 104.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSRS4QWS?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D9R7SVZ9",
    "title": "Secador de Cabelos Britânia Bivolt 2100W BSC2250 Bivolt",
    "image": "https://m.media-amazon.com/images/I/51toXA5ux1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 105.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9R7SVZ9?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H7BXMKLX",
    "title": "Airwit Ventilador de Teto E27 40 cm Bivolt Branco com Controle Remoto | LED 18W, 3 temperaturas de cor, 4 velocidades, instalação E27, quartos, cozinhas, salas pequenas",
    "image": "https://m.media-amazon.com/images/I/61P5Cf3ssbL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 108.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H7BXMKLX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DCNBFHNT",
    "title": "VEDO Amplificador de Guitarra Elétrica 5W Portátil com Bluetooth, Canais Clean e Overdrive, Bateria Recarregável, Alto-Falante Duplo, Ideal para Prática em Casa e Viagens Pré-Amplificadores",
    "image": "https://m.media-amazon.com/images/I/71V4laqRziL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 108.28,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DCNBFHNT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DWMZ9PPQ",
    "title": "Mochila de Viagem Expansivel Masculina Feminina Para Notebook",
    "image": "https://m.media-amazon.com/images/I/61lSXM4RsqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 111.12,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DWMZ9PPQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DMSM31ZQ",
    "title": "Boneco Sonic 13cm Figura Articulada Filme Sonic 3 - Sunny",
    "image": "https://m.media-amazon.com/images/I/61+xcySzjiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 112.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DMSM31ZQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GJS9BQ9B",
    "title": "Basike Power Bank 20000mAh, Carregamento Rápido 22,5W, 2 Cabos Integrados | Carregador Portátil Universal, USB-A(até 22.5W)+USB-C(até PD20W), Led Indicador de Bateria para iPhone/Samsung/Xiaomi, Rosa",
    "image": "https://m.media-amazon.com/images/I/71qta0Su27L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 114.95,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJS9BQ9B?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0765LSCFY",
    "title": "Suporte de TV Articulado de Parede, Função Avanço e Recuo, Giro Horizontal de Até 90°, VESA 100x100 a 400x400mm, 26\" a 75\", Preto, A02V4N, ELG",
    "image": "https://m.media-amazon.com/images/I/51Tk+CNmLnL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0765LSCFY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6558820250",
    "title": "Terapia cognitivo-comportamental: teoria e prática",
    "image": "https://m.media-amazon.com/images/I/71KE7JJesyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 115.99,
    "affiliate_url": "https://www.amazon.com.br/dp/6558820250?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D1CBDFP3",
    "title": "NIIMBOT Máquina de etiquetar, versão atualizada D110, para escola e casa",
    "image": "https://m.media-amazon.com/images/I/51K2cuF9MtL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.14,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1CBDFP3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FZPF88HP",
    "title": "Panela de Pressão Antiaderente 4,5 Litros em Alumínio, Fechamento Externo",
    "image": "https://m.media-amazon.com/images/I/41Yo3g2RxCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FZPF88HP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GXWTH7H7",
    "title": "GODREAM Mop Limpa Vidro, com Rodo Limpa Vidro, Cabo Extensível Até 2.26m, Rodo para Limpar Vidro de Janela, Base Rotativa 180°, 4 Panos de Esfregão, Limpador de Janela Altas Internas e Externas",
    "image": "https://m.media-amazon.com/images/I/81hnvahWgdL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 116.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GXWTH7H7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "8582715153",
    "title": "Princípios Básicos de Análise do Comportamento",
    "image": "https://m.media-amazon.com/images/I/71vKqM13DiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 120.64,
    "affiliate_url": "https://www.amazon.com.br/dp/8582715153?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6558821249",
    "title": "Questionamento Socrático para Terapeutas: Aprenda a Pensar e a Intervir como um Terapeuta Cognitivo-comportamental",
    "image": "https://m.media-amazon.com/images/I/71zGFQ26hJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 121.23,
    "affiliate_url": "https://www.amazon.com.br/dp/6558821249?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "8539638517",
    "title": "Panelinha receitas que funcionam",
    "image": "https://m.media-amazon.com/images/I/71+OlSCIeNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 129.67,
    "affiliate_url": "https://www.amazon.com.br/dp/8539638517?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D8R5M9FV",
    "title": "ISDIN Protetor Solar Corporal Infantil Gel Cream Pediatrics FPS 50-250g",
    "image": "https://m.media-amazon.com/images/I/615UiMt41-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 132.33,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8R5M9FV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0B3X8HF2Y",
    "title": "Brastoy Blocos de Montar Magnéticos Infantil Construção Brinquedo (65 Peças)",
    "image": "https://m.media-amazon.com/images/I/811ByrUELKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 133.2,
    "affiliate_url": "https://www.amazon.com.br/dp/B0B3X8HF2Y?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FKZ2S4NC",
    "title": "Torneira Cozinha Gourmet, LucZeng Misturador Monocomando Extensível com bico giratório de 3 modos de jato, pulverizador dobrável, alça única de arco alto extraível, Aço Escovado",
    "image": "https://m.media-amazon.com/images/I/514B1GFUpgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 134.8,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FKZ2S4NC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B08GK9LCRW",
    "title": "Caixa de som Redragon Anvil RGB Preto",
    "image": "https://m.media-amazon.com/images/I/71UuyaUmkhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 141.55,
    "affiliate_url": "https://www.amazon.com.br/dp/B08GK9LCRW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FNJ7T8HZ",
    "title": "Basike Carregador Portátil 10000mAh, Mini Power Bank (Prata) | Cabos Integrados, Carregamento Rápido 22.5W(MAX), Pequeno, Led Indicador de Bateria para iPhone/Samsung/Huawei/Xiaomi, etc",
    "image": "https://m.media-amazon.com/images/I/61CdjOizDjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 147.25,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FNJ7T8HZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B097K16GKC",
    "title": "Brastoy Blocos de Montar Magnéticos Construção Infantil Brinquedo Educativo (120 Peças Roda-gigante)",
    "image": "https://m.media-amazon.com/images/I/71mpI-3AuZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 151.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B097K16GKC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GQK6ZQ57",
    "title": "iCoffee Moedor de Café Manual M3PRO Com Capacidade de 20g | Broca Cônica de Aço Inoxidável CNC, Ajuste Interno Ajustável, Posicionamento de Rolamento Duplo (Cinza chumbo)",
    "image": "https://m.media-amazon.com/images/I/811qA21WPeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 154.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQK6ZQ57?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0G8WWP8RT",
    "title": "4 Toalhas De Banho Gigante Gramatura 500 G/m² Grossa Felpuda Eleganz (Branco)",
    "image": "https://m.media-amazon.com/images/I/71IHi7WU-eL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 158.57,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G8WWP8RT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07TM6SVL7",
    "title": "BLACK+DECKER Aspirador de Pó Elétrico Portátil BDCV370 Ideal para Automóveis 12V",
    "image": "https://m.media-amazon.com/images/I/41-EloZUCJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 159.16,
    "affiliate_url": "https://www.amazon.com.br/dp/B07TM6SVL7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GTJXLZN6",
    "title": "Kit 4 Toalhas De Banho 100% Algodão Premium 500g/m² – Toalhas Macias Alta Absorção Extra Macias e Felpudas (Multicolorido)",
    "image": "https://m.media-amazon.com/images/I/71D7WtCHxXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 159.24,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GTJXLZN6?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0085HUOTW",
    "title": "Saint Germain, Licor de Flores, Francês, 750 ml",
    "image": "https://m.media-amazon.com/images/I/61jCY7NJOrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 159.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0085HUOTW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07HR1MZQP",
    "title": "Umidificador de Ar Ultrassônico 3,4 Litros Bivolt Fisher Price - HC115",
    "image": "https://m.media-amazon.com/images/I/41Gjg7-IkUL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 160.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B07HR1MZQP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FHHLZZVD",
    "title": "Basike Carregador Portátil, Power Bank 20000mAh com Cabos Integrados(Cinza) | Carregamento Rápido 22.5W(MAX), Compacto, Led Indicador de Bateria para iPhone/Samsung/Huawei/Xiaomi",
    "image": "https://m.media-amazon.com/images/I/610pOa72wuL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 163.77,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FHHLZZVD?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6584004406",
    "title": "Vade Mecum Saraiva Tradicional - 41ª Edição 2026",
    "image": "https://m.media-amazon.com/images/I/81HmyZ8mCzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 164.9,
    "affiliate_url": "https://www.amazon.com.br/dp/6584004406?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GQT5355J",
    "title": "Basike Fone de Ouvido Bluetooth, Headphone com Cancelamento de Ruído ANC | BT 5.4, Som de Alta Fidelidade, Chamadas Claras, Carregamento USB-C, 40 Horas de Bateria (Azul)",
    "image": "https://m.media-amazon.com/images/I/61IxUkR8hDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 165.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GQT5355J?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H4S1B1Y1",
    "title": "Calça Legging Lupo Fitness Feminina Esportiva Em Poliamida Texturizada a Ar Sem Costura",
    "image": "https://m.media-amazon.com/images/I/61-hQbBX-nL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 166.65,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4S1B1Y1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CBSLM49N",
    "title": "Kit Acessórios para Banheiro 4 Peças Inox [Q4C]",
    "image": "https://m.media-amazon.com/images/I/61AzzP1O2OL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 169.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CBSLM49N?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DG6PX7HM",
    "title": "TECLADO MEMBRANA GAMER REDRAGON HARPE WIRELESS PRETO",
    "image": "https://m.media-amazon.com/images/I/71lTY0XIO6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 178.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DG6PX7HM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D5BCR8KT",
    "title": "GameSir Nova Lite Controle Bluetooth e Sem Fio 2.4G para PC Windows, Celular Android iPhone, Nintendo Switch e Steam Deck, Gamepad com Hall Effect Anti-Drift, Turbo, Vibração, Dongle USB（roxo escuro)",
    "image": "https://m.media-amazon.com/images/I/51TYMb7-VhL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 179.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D5BCR8KT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FS1RQRD9",
    "title": "Aparador de Pelos Masculino Elétrico MANSPOT, Lâmina Cerâmica, Motor 7000 RPM, À Prova d'Água, para Corpo e Áreas Íntimas",
    "image": "https://m.media-amazon.com/images/I/613KLlLzT8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 180.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FS1RQRD9?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09DL8R142",
    "title": "Chaleira Elétrica Oster Tea com Infusor de Chá 1,8L - 127V",
    "image": "https://m.media-amazon.com/images/I/51LtG39jtjL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 180.4,
    "affiliate_url": "https://www.amazon.com.br/dp/B09DL8R142?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H34MKYBT",
    "title": "OSTER - Panela Elétrica De Arroz Oster OPAN310 Bordô 127v",
    "image": "https://m.media-amazon.com/images/I/61V0tm0Sm1L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 185.29,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H34MKYBT?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FQCK9YB4",
    "title": "WISETA Cartucho de Tinta Compatível com HP 667 667XL Para DeskJet 2376 | Compatível com DeskJet Ink Advantage 2775 2776 2374 1275 2375 6475 6476 6075 5076 5276, 1 Preto 1 Colorido",
    "image": "https://m.media-amazon.com/images/I/71R+VSEuT0L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 185.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQCK9YB4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B07VPFC6RN",
    "title": "Secador 2000w 127v, Taiff, Style 333, Preto, Pequeno",
    "image": "https://m.media-amazon.com/images/I/61EW-1ytQ+L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 187.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B07VPFC6RN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H5RJ5JBQ",
    "title": "OSTER - Multiprocessador Oster 3 Em 1 OMPR680 127v",
    "image": "https://m.media-amazon.com/images/I/71On3GYLYIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 188.52,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H5RJ5JBQ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FM4D1HQG",
    "title": "Havit Fone de Ouvido Headset Gamer Fuxi-H6 Com Fio e Sem Fio, Wireless 2,4GHz, Bluetooth, Cabo USB-C",
    "image": "https://m.media-amazon.com/images/I/61Fs46kV2PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FM4D1HQG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GCMGNXTD",
    "title": "Tábua de Passar Roupa Dobrável com Duas Prateleiras, Tábua de Passar Roupa Reforçada com Rodas, Móvel e Prática para Quarto, Sala de Estar e Varanda",
    "image": "https://m.media-amazon.com/images/I/81p0EYsvg6L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 189.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GCMGNXTD?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GRCKVGGN",
    "title": "Estante Livreiro 5 Prateleiras Estilo Industrial Organizador Multiuso Mega Chicó 178x63x30cm (Preto/Nature)",
    "image": "https://m.media-amazon.com/images/I/51DoSl7gByL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 197.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GRCKVGGN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DGTSFP5Q",
    "title": "Alimentador Automático Pet, 4L Comedouro para Caes Fácil Comedouro Elevado para Caes, Controle de Aplicativo WiFi - Gravador de Voz",
    "image": "https://m.media-amazon.com/images/I/51ansqiUO5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGTSFP5Q?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FMFVYFXC",
    "title": "Faber-Castell Lápis De Cor Supersoft com 100 Cores - Ecolápis super mácio com cores mais vivas, excelente cobertura",
    "image": "https://m.media-amazon.com/images/I/61ARQT0CGHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 198.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FMFVYFXC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09ZPK9S7B",
    "title": "ISDIN Creme Anti-Idade para Pele Sensível Isdinceutics Hyaluronic Moisture Sensitive Skin - 50g",
    "image": "https://m.media-amazon.com/images/I/61cgaqKT7qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 199.35,
    "affiliate_url": "https://www.amazon.com.br/dp/B09ZPK9S7B?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0G92MZ5F5",
    "title": "Basike Power Bank 65W, Carregador Portátil Universal 20000mAh (Prata) | USB-C + Cabo Type-C Integrado e Removível, Carregamento Rápido PD/PPS para Samsung Séries S26-S21 e iPhone Séries 17-14",
    "image": "https://m.media-amazon.com/images/I/61YyyyDwhXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 212.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G92MZ5F5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FH6YR2ZR",
    "title": "3m Portão Grade Retrátil de Proteção para Bebês e Cachorros, Portaozinho de Escada Instalação Sem Furos, Trava Dupla,Operação com uma mão,Portao Segurança Bebê Pet, Cercado para Cachorros（preto）",
    "image": "https://m.media-amazon.com/images/I/71LGcAAC4hL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 215.68,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FH6YR2ZR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H6B1RR35",
    "title": "TURU HOME 6 em 1 mixer de mão, 1000W, 8 velocidades, Exibição digital LCD, Vem com um copo de 860 ml, Livre BPA,Triturador de 600 ml, Adequado para sopas, smoothies e purés(220V)",
    "image": "https://m.media-amazon.com/images/I/61FnnecRGDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 215.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6B1RR35?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DGXR6FRP",
    "title": "PHILIPS, Fone de Ouvido Sem Fio TWS, TAT3509GY/00, Bluetooth, Com Cancelamento de Ruído Ativo ANC, Até 24 horas de bateria, Cinza",
    "image": "https://m.media-amazon.com/images/I/51Exh1jSSqL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 219.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGXR6FRP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DPJ6BXTX",
    "title": "WOLFF - Faqueiro de Aço Inox Pérola 30 Peças com Faca para Churrasco - Jogos de Talheres - Mesa Posta - Utensílios de Cozinha, Enxoval, Casamento, Decoração",
    "image": "https://m.media-amazon.com/images/I/51AHo0JKn9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 222.83,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DPJ6BXTX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B089Y3ZL8C",
    "title": "Mesa para Escritório Office Estilo Industrial 1,20m Kuadra, Compace, Snow/Est.Preta",
    "image": "https://m.media-amazon.com/images/I/71bokwHcMKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.3,
    "affiliate_url": "https://www.amazon.com.br/dp/B089Y3ZL8C?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H11WS8C5",
    "title": "GOKOCO Escova Secadora Bivolt GD037, Escova Modeladora Íons, Escova Rotativa Styler, Preto",
    "image": "https://m.media-amazon.com/images/I/61ogqOM9UVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 224.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H11WS8C5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FQK3V9QF",
    "title": "Bettdow SmartWatch, Relogio Smartwatch Feminino, 1.27\" Ecrã tátil, à prova d'água IP68, 100+ Modos Esportivos, chamada Bluetooth, Compatível com Android iOS, voz por IA (Bege)",
    "image": "https://m.media-amazon.com/images/I/61sC9cAm1tL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 229.37,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FQK3V9QF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FY6H3HVR",
    "title": "Bettdow Smartwatch GPS FB041, Relogio Smartwatch Feminino e Masculino,Tela HD de 1,85\", Alexa, 100 Esportes,3ATM à rova d'água, Chamada Bluetooth, Compatível com Android iOS(Preto)",
    "image": "https://m.media-amazon.com/images/I/61HrHnK+98L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 230.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY6H3HVR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FFTSBVB6",
    "title": "Tênis Mizuno Virtue 2",
    "image": "https://m.media-amazon.com/images/I/61MhSdOhFQL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 239.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFTSBVB6?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D98X56KL",
    "title": "Mala De Bordo 10Kg Polipropileno Medidas 55x35x25 Padrão Anac Mala De Viagem Pequena De Mão 4 Rodas Duplas 360° Cadeado Segredo Zíper Antifurto Rígida Leve (ROXO, PEQUENA)",
    "image": "https://m.media-amazon.com/images/I/61aT-r0qhHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 249.73,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D98X56KL?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FGNFRPHJ",
    "title": "Baseus Power Bank EnerFill FC31 com Display Digital e 2 Cabos (Preto Cósmico, Milliamp Hours, 20000)",
    "image": "https://m.media-amazon.com/images/I/61faUsmPkiL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 250.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FGNFRPHJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6558820935",
    "title": "Manual Diagnóstico e Estatístico de Transtornos Mentais - DSM-5-TR: Texto Revisado",
    "image": "https://m.media-amazon.com/images/I/61CmyiZfa8L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 252.0,
    "affiliate_url": "https://www.amazon.com.br/dp/6558820935?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DTKS82JJ",
    "title": "Tênis Mizuno Cool Ride 3",
    "image": "https://m.media-amazon.com/images/I/61A0zP8LkPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 254.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DTKS82JJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0G2XQ64K5",
    "title": "Cadeira de escritório ergonômica com estofado de mesh (Cabide)",
    "image": "https://m.media-amazon.com/images/I/71uRmPebmPL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 275.44,
    "affiliate_url": "https://www.amazon.com.br/dp/B0G2XQ64K5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0F1FPFSNX",
    "title": "Intercomunicador Bluetooth V6 Plus X6, Alcance 1200m, Kit Duplo con Micrófono, 2 Unidades",
    "image": "https://m.media-amazon.com/images/I/51GClAd8yyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 279.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F1FPFSNX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B097HYQPJ1",
    "title": "SECADOR Taiff TOURMALINE 2100W 127V, preto",
    "image": "https://m.media-amazon.com/images/I/51BoILwnCJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 282.26,
    "affiliate_url": "https://www.amazon.com.br/dp/B097HYQPJ1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FW3NGNQH",
    "title": "Cadeira Ergonômica de Escritório Blackninja Presidente com Apoio de Cabeça e Lombar - Tela Mesh Respirável, Reclinável até 120°, Suporta 150kg",
    "image": "https://m.media-amazon.com/images/I/71xbWa-USyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 284.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FW3NGNQH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09NCZ4TP4",
    "title": "Aspirador de Pó Vertical Oster Sem Fio 3 em 1, Bateria, Azul, 90W, OASP630",
    "image": "https://m.media-amazon.com/images/I/41qrfBunpgL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B09NCZ4TP4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GJD29WP2",
    "title": "GOKOCO Secador de Cabelo Dobrável de Alta Velocidade,Bivolt,GD045 Motor Brushless 110.000 RPM,Íons Negativos,4 Temperaturas,3 Velocidades,com Difusor e Bicos Modeladores para Viagem,Preto",
    "image": "https://m.media-amazon.com/images/I/61QThHd0LCL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 299.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GJD29WP2?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0F6L1X2Z8",
    "title": "AstroAI B8 Auxiliar Partida Portátil Veicular 3000A | Carregador de Bateria 12V para Motores 7.0L Gasolina e 5.5L Diesel, com 3 Modos de Lanterna e Cabos",
    "image": "https://m.media-amazon.com/images/I/81nyNDZMyJL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 314.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F6L1X2Z8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H4KZVLGZ",
    "title": "Cadeira De Alimentação Bebe Multifuncional 6 Em 1 Para Bebês, Com Dobragem Com Um Único Toque, Bandeja E Encosto Ajustáveis Em 3 Alturas, Cinto De Segurança De 5 Pontos, Rodas Com Freio E Assento Removível Em PU Que Se Limpa Com Um Pano Úmido; Ideal Para Pais Ocupados Que Cuidam Dos Filhos Em Casa, Em Viagens Ou Na Casa Dos Avós (Azul escuro)",
    "image": "https://m.media-amazon.com/images/I/71uOEtJeT-L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 320.13,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4KZVLGZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0F9T2DD2P",
    "title": "Airwit Ventilador de Teto Preto 106,7 cm com Luz LED, 6 Velocidades",
    "image": "https://m.media-amazon.com/images/I/61z7c5eTTwL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 323.1,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F9T2DD2P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DG5JXLHB",
    "title": "Cadeira de escritório com design ergonômico conforme NR-17, suporte lombar independente, malha respirável e encosto de cabeça ajustável,Python Fly（Amarelo）",
    "image": "https://m.media-amazon.com/images/I/613xr44D3aL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 324.88,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DG5JXLHB?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FZ9MV9CM",
    "title": "Cama Queen 158x198cm, Estrutura Metálica Preta | Estrutura metálica resistente com ripas de suporte, boa estabilidade e espaço livre sob a cama.",
    "image": "https://m.media-amazon.com/images/I/51+tBAUfQXL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 332.48,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FZ9MV9CM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D8JJRCJN",
    "title": "GameSir G8 Plus Bluetooth Mobile Game Controller for Switch & iOS & Android & Tablets, Wireless Gamepad with Hall Effect Joysticks/Hall Trigger, Play Minecraft, Genshin Impact, Call of Duty Mobile",
    "image": "https://m.media-amazon.com/images/I/717de+4D0kL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D8JJRCJN?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0BQ3NT5JM",
    "title": "Mesa Dynamica Diretor 180x60x75cm Branco Chess/Est.preta",
    "image": "https://m.media-amazon.com/images/I/61VTDrykqmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 339.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ3NT5JM?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B089Y4SNJZ",
    "title": "Mesa de Escritório em L Estilo Industrial 1,50mX1,50m Kuadra, Compace, Preto Ônix/Est.Preta",
    "image": "https://m.media-amazon.com/images/I/31RU-AWsqOL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.5,
    "affiliate_url": "https://www.amazon.com.br/dp/B089Y4SNJZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FVYB71RW",
    "title": "American Tourister Mala de Viagem Tesa 4.0 Média",
    "image": "https://m.media-amazon.com/images/I/51zQCYgjZ4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 349.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVYB71RW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FXRRJ3GH",
    "title": "Monitor 21,5 Polegadas, Alto-falantes Integrados, Full HD 1920x1080, 100 Hz, 230cd/m², HDMI/VGA/3.55(110-240V)",
    "image": "https://m.media-amazon.com/images/I/714DDtiPl4L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 357.19,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXRRJ3GH?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "8582714327",
    "title": "Neurociências: Desvendando o Sistema Nervoso",
    "image": "https://m.media-amazon.com/images/I/91SaH52nWIL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 374.61,
    "affiliate_url": "https://www.amazon.com.br/dp/8582714327?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H2LXQPSP",
    "title": "Airwit Ventilador de Teto Bivolt 132 cm com Controle Remoto | Funcionamento silencioso, 6 velocidades, função reversa, luz 3 cores, quartos, salas, ambientes amplos",
    "image": "https://m.media-amazon.com/images/I/51SxQt7J4sL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 378.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H2LXQPSP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "8520467962",
    "title": "Medicina de emergência: Abordagem Prática",
    "image": "https://m.media-amazon.com/images/I/81i9bV+dcvL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 379.99,
    "affiliate_url": "https://www.amazon.com.br/dp/8520467962?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CXZ6KJ8Y",
    "title": "GABINETE REDRAGON WIDELOAD PRO BRANCO CA-604W-PRO",
    "image": "https://m.media-amazon.com/images/I/61EFNhsLQ7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 384.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CXZ6KJ8Y?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FSL3F3WP",
    "title": "Banco de Musculação Dobrável e Ajustável - Suporta até 150kg, Encosto com 5 Posições, Estrutura Triangular Reforçada, Assento Largo e Apoio de Pés Regulável para Treino em Casa",
    "image": "https://m.media-amazon.com/images/I/71BM5C1xvAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 385.03,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FSL3F3WP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DSJ5ZH8F",
    "title": "UGREEN Base e Suporte para Mac mini M4 com Caixa SSD NVMe",
    "image": "https://m.media-amazon.com/images/I/51LErdjU+YL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DSJ5ZH8F?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H8R6ZHM5",
    "title": "VireColor Cadeira de Escritório Ergonômica Presidente Mesh 200kg Giratória | Preto, apoio lombar, apoio de cabeça 3D, pistão Classe 3 regulável 10cm, assento largo e malha respirável para home office",
    "image": "https://m.media-amazon.com/images/I/71aXuj6+FEL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 399.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H8R6ZHM5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0C3BV19Q3",
    "title": "Headset Gamer HyperX Cloud III – Compatível com PC, PS5, Xbox Series X|S, Drivers Angulados de 53mm, Áudio DTS, Microfone de 10 mm, USB-C, USB-A, Fio de 3,5 mm, Vermelho e Preto (727A9AA)",
    "image": "https://m.media-amazon.com/images/I/71pz2njkNRL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 409.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C3BV19Q3?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FXH6Y9G8",
    "title": "Berço Portátil Bebê Acoplado Co-Bed Connect Maxi baby (Grafite)",
    "image": "https://m.media-amazon.com/images/I/51ougekSbcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 410.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FXH6Y9G8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CJV2WKQF",
    "title": "Cadeira Ergonomica Gamer Com Apoio Para Os Pés Branco",
    "image": "https://m.media-amazon.com/images/I/613NfdEWPyL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 414.23,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CJV2WKQF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D78TTV94",
    "title": "Cadeira Gamer Python Fly em tecido, respirável e ecológica, ângulo ajustável (Cinza Claro)",
    "image": "https://m.media-amazon.com/images/I/714s0-e1cmL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 414.67,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D78TTV94?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DX7K4QP5",
    "title": "BETTDOW Capa com Teclado e Trackpad para Samsung Galaxy Tab S10 Lite/S10 Fe/S9 Fe/S9/S8/S7 de 11 polegadas,Teclado com LCD Display",
    "image": "https://m.media-amazon.com/images/I/71DMQPOFAoL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 417.05,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DX7K4QP5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H4RZ8WNY",
    "title": "Panela de Pressão Elétrica Digital 5,7L Oster - 127V",
    "image": "https://m.media-amazon.com/images/I/71I4mPc0ofL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 432.91,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4RZ8WNY?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0BQ3LPGWP",
    "title": "Mesa Kuadra Diretor 180X70X75cm",
    "image": "https://m.media-amazon.com/images/I/31s3+SaW8eL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 446.41,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BQ3LPGWP?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0BR51ZZY6",
    "title": "TakTark Babá Eletrônica Câmera, 4.3\" Monitores de Câmara de Vídeo, Pan & Tilt, 2 Way Audio, Visão Nocturna, Zoom Digital, Decoração Sonora VOX, Ideal para Novos Pais",
    "image": "https://m.media-amazon.com/images/I/619dcpdoSrL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 484.49,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BR51ZZY6?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GHFCKKV6",
    "title": "Câmera Mirrorless Retrô 64MP | Filmadora 4K Ultra HD com Wi-Fi | Leve e Portátil para Viagens & Vlog",
    "image": "https://m.media-amazon.com/images/I/71YZWi6ClAL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 519.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GHFCKKV6?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "6558040247",
    "title": "Princípios de Neurociências",
    "image": "https://m.media-amazon.com/images/I/813geU8pmxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 521.09,
    "affiliate_url": "https://www.amazon.com.br/dp/6558040247?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FD41XC3P",
    "title": "GameSir G7 Pro Controle Gamer Tri-Mode para Xbox, PC e Android Sem Fio 2.4G/Bluetooth e Com Fio Joystick Hall Effect + TMR 1000Hz Polling Rate Botões Macro Giroscópio Vibração 4 Motores Anti-Drift Controle Profissional - Branco",
    "image": "https://m.media-amazon.com/images/I/719XHbmvmBL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 579.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FD41XC3P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FJ811D4C",
    "title": "Bettdow Projetor 4k [Netflix-Licensed], Projetores Portatil 12000 Lumens Full Hd 1080p Compatível Com Android 13, HDR10+ Retroprojetor WiFi 6 BT 5.2, Keystone automático, Foco Automático",
    "image": "https://m.media-amazon.com/images/I/61IToccFirL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 603.76,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FJ811D4C?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GKG887B1",
    "title": "YARUIKE Soprador de Folhas Elétrico Sem Fio, 2 Baterias, 5 Velocidades | Soprador Portátil para Jardim, Limpeza de Quintal, Remoção de Folhas Secas e Poeira, Baixo Ruído.",
    "image": "https://m.media-amazon.com/images/I/61nr6F3EJTL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 638.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GKG887B1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FFP2W7KZ",
    "title": "Óculos de Sol Ray-Ban Wayfarer Puffer 0RB4940 601/87 Tam 47 / Preto - Lentes Preto",
    "image": "https://m.media-amazon.com/images/I/51OY6scyHNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 669.99,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FFP2W7KZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B08JY31RQF",
    "title": "Depilador e Rejuvenescedor a Laser Permanente Luz Pulsada Lescolton T-009i",
    "image": "https://m.media-amazon.com/images/I/61blZNksG5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 695.79,
    "affiliate_url": "https://www.amazon.com.br/dp/B08JY31RQF?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B076C6B4J7",
    "title": "Bebedouro Gelágua Esmaltec EGC35B Coluna Natural e Gelada Branco 220V",
    "image": "https://m.media-amazon.com/images/I/41+A0RZbZ7L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 712.66,
    "affiliate_url": "https://www.amazon.com.br/dp/B076C6B4J7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B01N4V94GX",
    "title": "Samsonite Mala de Viagem Octolite Branca Pequena",
    "image": "https://m.media-amazon.com/images/I/419an8Q88dL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 719.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B01N4V94GX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CZLBXZ56",
    "title": "Cadeira de Escritório Ergonômica Python Fly em Malha - Testada conforme NR-17, Lombar Integrada Fixa, Assento Arejado, Braços 3D, Suporta até 150kg(preto)",
    "image": "https://m.media-amazon.com/images/I/7184zXQJSpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 745.04,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CZLBXZ56?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FY3642C4",
    "title": "VEDO Kit de Microfone Dinâmico para Bateria 7 Peças - Microfones para Bumbo, Tom/Caixa e Pratos - Conjunto Completo em Metal para Gravação Profissional e Performances ao Vivo com Alta",
    "image": "https://m.media-amazon.com/images/I/71W1w3lg4lL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 747.17,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FY3642C4?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FF9NBGDR",
    "title": "M-VAVE VEDO Pedaleira Multi-Efeitos MK-300 para Guitarra e Baixo com Tela LCD 3.5, 320+ Efeitos, 160 Presets, 120 Simulações ANN, 100 IR CAB, Looper 301s, Drum 128 Ritmos, Bluetooth, USB Audio,",
    "image": "https://m.media-amazon.com/images/I/71Z4POBnNeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 811.96,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FF9NBGDR?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GWJYYDLX",
    "title": "Cama Infantil Montessoriana Solteiro com Reversiteiro e Organizador Tamiê Carvalho Mel",
    "image": "https://m.media-amazon.com/images/I/81UGLtWktVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 829.98,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GWJYYDLX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B086V1R21L",
    "title": "Philips Cacheador Automático Prestige com Tecnologia MoistureProtect",
    "image": "https://m.media-amazon.com/images/I/41Yu1QTOtHL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 854.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B086V1R21L?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H4G895KZ",
    "title": "VEDO M-VAVE MK-300 Multi Pedais Para Guitarra e Baixo, Profissional Modelador de Amplificador Processador, Mais 320 Efeitos, 160 Presets, Looper, Bateria Eletrônica, USB/Bluetooth, Para Músicos, Preto",
    "image": "https://m.media-amazon.com/images/I/71dO5D8UchL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 856.45,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H4G895KZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D9W4778P",
    "title": "Bettdow Projetor 4k 8k 15000 Lumens Hd 1080p Compatível Completo De Android 9, Smart Projetores Retroprojetor Portatil 600 ANSI WiFi6, Auto Correção Trapezoidal, Foco Eletronico",
    "image": "https://m.media-amazon.com/images/I/71tOGhQUWxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 874.51,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D9W4778P?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0F8P8KKH1",
    "title": "Jipe Infantil Elétrico 12v Carrinho Controle Remoto Música (Preto)",
    "image": "https://m.media-amazon.com/images/I/71ydB+Bt-cL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 919.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F8P8KKH1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0C7H3P3C8",
    "title": "Forno à Gás de Embutir Stelar 46 litros Topázio Preto 127v",
    "image": "https://m.media-amazon.com/images/I/51oUE+WfXVL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1073.61,
    "affiliate_url": "https://www.amazon.com.br/dp/B0C7H3P3C8?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0F3ZTQF92",
    "title": "Cadeira Ergométrica Escritório Ajuste Lombar Estudo Preto Encosto Comfy Reclinável Mesh Tecido Giratória Cadeiras 200kg Confortável Gamer Braço 6D",
    "image": "https://m.media-amazon.com/images/I/61DBR67u0PL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1098.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0F3ZTQF92?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D1H1H8RZ",
    "title": "Cadeira Escritório Ergonomica e Confortável DT3 Vita Super com apoio de cabeça 2D com revestimento Mesh Vintex-Y+Tecido Max2Weave,braço retrátil até 90º+rotação (Black)",
    "image": "https://m.media-amazon.com/images/I/51knV7aB8qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1109.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D1H1H8RZ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DNZKWSLX",
    "title": "Cama Solteiro De Madeira Maciça e Mdf Com Cama Auxiliar Woodstore (Branco)",
    "image": "https://m.media-amazon.com/images/I/71A7RgIk8QL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1169.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNZKWSLX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CLHFQ8D1",
    "title": "Mesa para Escritório Diretor em L 3 Gavetas 1 Porta Spring Itapuã/Branco",
    "image": "https://m.media-amazon.com/images/I/61f13F5QSpL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1170.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CLHFQ8D1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DWJ5CLB5",
    "title": "Tratado de Medicina Intensiva: AMIB e SPCI",
    "image": "https://m.media-amazon.com/images/I/71YSUCpRhZL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1269.72,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DWJ5CLB5?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0BBMRF9ZX",
    "title": "Bolsa de Transporte Rolling Massive Mouth® XL",
    "image": "https://m.media-amazon.com/images/I/51UHc8hyIDL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1314.89,
    "affiliate_url": "https://www.amazon.com.br/dp/B0BBMRF9ZX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D166KMVC",
    "title": "SUGGAR FOGÃO MASTER GRILL BRANCO MESA DE VIDRO 5 BOCAS TRIPLA CHAMA GRILL 110V TREMPE FERRO FUNDIDO ACENDIMENTO SUPERAUTOMÁTICO FGVMTG511BR",
    "image": "https://m.media-amazon.com/images/I/51EXUy1SerL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1534.86,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D166KMVC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0CFG6XP6T",
    "title": "Cadeira Escritório Ergonomica DT3 Alera+, em Mesh Vidartex™, apoio de cabeça 2D, braços 3D, apoio lombar AWS+ajuste na altura do encosto, Assento deslizante,Certificada.(Black)",
    "image": "https://m.media-amazon.com/images/I/81v8kpjxmNL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1799.9,
    "affiliate_url": "https://www.amazon.com.br/dp/B0CFG6XP6T?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0D4V3JMGB",
    "title": "Câmera 4K NDI PTZ 20X, saídas HDMI USB LAN, câmera de videoconferência, webcam para cultos religiosos/eventos/serviços educacionais, compatível com Zoom, Skype, OBS (enviada do Brasil)",
    "image": "https://m.media-amazon.com/images/I/61DeG0-vznL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1979.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0D4V3JMGB?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B09LHW62H7",
    "title": "Coifa de Ilha Oster Inox Touch Control, 90cm, 110v, OCFA590",
    "image": "https://m.media-amazon.com/images/I/419jwVCZRzL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1994.02,
    "affiliate_url": "https://www.amazon.com.br/dp/B09LHW62H7?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H51W1L8W",
    "title": "Electrolux Ar-condicionado Split Electrolux MaxComfort Full Inverter Frio 12.000 BTUs (NI12F/NE12F) 220V",
    "image": "https://m.media-amazon.com/images/I/41LJSdrWwML._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 1999.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H51W1L8W?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DJ3P76ZC",
    "title": "Quarto Modulado Casal Completo 4 Peças 5 Portas 4 Gavetas Com Maleiro Smart Plus Cinamomo",
    "image": "https://m.media-amazon.com/images/I/71mLMXf64LL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2149.97,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJ3P76ZC?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FVMFSWGV",
    "title": "Electrolux Geladeira Electrolux Frost Free 320L Duplex Branca (TF38) 220V",
    "image": "https://m.media-amazon.com/images/I/319xY36QjcL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2299.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVMFSWGV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H6F7GYCX",
    "title": "ThinkRider X2Max Treinador de Bicicleta Inteligente, design silencioso e portátil para treinos internos, simula inclinação de 18%, compatível com ANT+ e BLE",
    "image": "https://m.media-amazon.com/images/I/618AE719bfL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2699.09,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H6F7GYCX?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DNR7TBTW",
    "title": "Geladeira Electrolux Frost Free 431L Efficient AutoSense Duplex Branca (TF70) 127V",
    "image": "https://m.media-amazon.com/images/I/416e19mr7qL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 2899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DNR7TBTW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0FVPLDKKG",
    "title": "Electrolux Geladeira Electrolux Frost Free Inverter 400L Efficient AutoSense e Rapid Freeze Inverse Black Inox Look (IB6B) Bivolt",
    "image": "https://m.media-amazon.com/images/I/31K+KWPwGeL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 3899.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0FVPLDKKG?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DGM1PJMK",
    "title": "Apple iPhone 16 (128 GB) – Branco",
    "image": "https://m.media-amazon.com/images/I/61ctYsUobKL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5110.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGM1PJMK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H37DL2F1",
    "title": "Notebook Dell 15 I DC15-i71355U-U90 15.6\" Full HD 13ª Gen Intel Core i7 16GB 512GB SSD Ubuntu Linux Preto Carbono",
    "image": "https://m.media-amazon.com/images/I/5152rTpvy5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5199.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H37DL2F1?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0H37H5PCJ",
    "title": "Notebook Dell 15 I DC15-i71355U-M90 15.6\" Full HD 13ª Gen Intel Core i7 16GB 512GB SSD Win 11 Preto Carbono",
    "image": "https://m.media-amazon.com/images/I/5152rTpvy5L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5499.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0H37H5PCJ?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DJFS7GXV",
    "title": "Apple iPhone 16 (512 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DJFS7GXV?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0DGM22BZK",
    "title": "Apple iPhone 16 (512 GB) – Preto",
    "image": "https://m.media-amazon.com/images/I/41uUYcqfLxL._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 5799.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0DGM22BZK?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  },
  {
    "asin": "B0GRJNQWHW",
    "title": "Notebook Gamer Alienware 16 AC16250, Intel Core 5 210H, Windows 11 Home | NVIDIA GeForce RTX 4050 6GB GDDR6, 16 WQXGA 120 Hz, 16 GB DDR5, 512 GB SSD, Cor Azul Escuro, Wi-Fi 7, Teclado Retroiluminado",
    "image": "https://m.media-amazon.com/images/I/514EAjs4c9L._AC_SF226,226_QL85_.jpg?aicid=discounts-widgets-horizonte",
    "price_current": 7249.0,
    "affiliate_url": "https://www.amazon.com.br/dp/B0GRJNQWHW?tag=mdm0a40-20",
    "last_checked_at": "2026-08-19T17:02:43.000Z"
  }
];
