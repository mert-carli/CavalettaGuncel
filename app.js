/**
 * CAVALETTA — Brand Website Application Logic
 * Collection 2026 • Handcrafted for everyday living
 */

(function () {
  'use strict';

  // --- 1. PRODUCT DATABASE (All 21 Catalog Products) ---
  const PRODUCTS = [
    {
      id: 'luna-supla',
      name: 'Luna Supla',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Sofranın merkezinde zamansız zarafet.',
      catalogPage: 6,
      file: 'Cavaletta Luna Supla Placemat.png',
      webp: 'img/optimized/Cavaletta Luna Supla Placemat.webp',
      img: 'img/Cavaletta Luna Supla Placemat.png',
      dimensions: 'Ø 36 cm • 7 mm Tok Dokuma',
      specs: [
        '%100 Yapıştırıcısız El Dikişi',
        'Isıya ve Leke Dirençli İp',
        '30°C\'de Yıkanabilir',
        'Hakiki Deri Arma Detayı'
      ],
      description: 'Akdeniz doğallığını sofralarınıza taşıyan Luna Supla, geri dönüştürülmüş polyester ipin spiral formuyla el işçiliğinde buluştuğu imza bir tasarım. Tabak altlığı olarak masanızı ısı ve çiziklerden korurken, heykelsi bir zemin oluşturur.'
    },
    {
      id: 'tavola-mat',
      name: 'Tavola Mat',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Geniş sofralar için oval formun dinginliği.',
      catalogPage: 7,
      file: 'Cavaletta Tavola Mat.png',
      webp: 'img/optimized/Cavaletta Tavola Mat.webp',
      img: 'img/Cavaletta Tavola Mat.png',
      dimensions: '35 × 50 cm Geniş Oval',
      specs: [
        'Geniş Alanlı Oval Form',
        'Çizilmelere Karşı Tam Koruma',
        'Geri Dönüştürülmüş Kordon',
        'Formunu Koruyan Tok Dikiş'
      ],
      description: 'Dikdörtgen ve oval masalara kusursuz uyum sağlayan Tavola Mat; servis tabakları, çatal-bıçak takımları ve kadehler için ferah ve bütüncül bir sunum alanı açar. Günlük kahvaltılardan özenli akşam davetlerine uzanan sofistike doku.'
    },
    {
      id: 'tazza-coaster',
      name: 'Tazza Coaster',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Kahve anlarının zarif eşlikçisi.',
      catalogPage: 8,
      file: 'Cavaletta Tazza Coaster.png',
      webp: 'img/optimized/Cavaletta Tazza Coaster.webp',
      img: 'img/Cavaletta Tazza Coaster.png',
      dimensions: 'Ø 14 cm',
      specs: [
        'Isı yalıtımlı sıkı spiral dikiş',
        'Orijinal deri etiket detayı',
        'Fincan ve kupalar için ideal ölçek'
      ],
      description: 'Fincan ve kupalar için ideal boyutta tasarlanan Tazza, sıcak içeceklerin masanızda iz bırakmasını önlerken minimalist deri detayıyla sunumu tamamlar.'
    },
    {
      id: 'lino-coaster-set',
      name: 'Lino Coaster Set',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Doğal dokunun üçlü uyumu.',
      catalogPage: 8,
      file: 'Cavaletta Lino Coaster Set.jpg',
      webp: 'img/optimized/Cavaletta Lino Coaster Set.webp',
      img: 'img/Cavaletta Lino Coaster Set.jpg',
      dimensions: 'Ø 12 cm (3\'lü Set)',
      specs: [
        '3\'lü set halinde sunum',
        'Kompakt depolama ve toka detayı',
        'Kadeh ve su bardakları için uyumlu'
      ],
      description: 'Üçlü set halinde sunulan Lino Bardak Altlığı, çoklu servislerde masaya doğal bir ritim katar. Kadeh ve bardaklar için pratik ve şık koruma.'
    },
    {
      id: 'fiore-runner-set',
      name: 'Fiore Runner Set',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Masanın ortasında heykelsi bir çiçek silueti.',
      catalogPage: 9,
      file: 'Cavaletta Fiore Coaster Set.png',
      webp: 'img/optimized/Cavaletta Fiore Coaster Set.webp',
      img: 'img/Cavaletta Fiore Coaster Set.png',
      dimensions: 'Merkez Ø 36 cm • Toplam Boy 85 cm',
      specs: [
        'Çok Parçalı Organik Mimari',
        'Nihale & Masa Ortası Runner',
        'Birbirine Kenetli Sağlam Dikiş',
        'Özel Davet Sunum Odak Noktası'
      ],
      description: 'Çiçek yapraklarının organik ritminden ilham alan Fiore, merkezdeki büyük servis alanını çevreleyen dairesel modülleriyle masanın odak noktası haline gelir. Hem sanatsal bir orta runner hem de sıcak tencereler için şık bir nihaledir.'
    },
    {
      id: 'pane-basket',
      name: 'Pane Basket',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Sıcak ekmekler ve taze meyveler için doğal yuva.',
      catalogPage: 10,
      file: 'Cavaletta Pane Basket.png',
      webp: 'img/optimized/Cavaletta Pane Basket.webp',
      img: 'img/Cavaletta Pane Basket.png',
      dimensions: '32 × 20 × 10 cm Derin Oval',
      specs: [
        'Gıdayla Temasa Uygun Yapı',
        'Yapıştırıcısız Saf Dikiş',
        'Yıkanabilir Kolay Kurur İp',
        'Pirinç Perçinli Deri Arma'
      ],
      description: 'Oval formu ve derin gövdesiyle Pane Sepet; fırından yeni çıkmış çıtır ekmekleri, simitleri veya mevsim meyvelerini sofraya taşımak için el dikişiyle şekillendirildi. Ekmek kırıntılarını içeride tutarken sofraya samimiyet kazandırır.'
    },
    {
      id: 'vela-napkin-holder',
      name: 'Vela Napkin Holder',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Dairesel formda pratik peçete şıklığı.',
      catalogPage: 11,
      file: 'Cavaletta Vela Napkin Holder.png',
      webp: 'img/optimized/Cavaletta Vela Napkin Holder.webp',
      img: 'img/Cavaletta Vela Napkin Holder.png',
      dimensions: 'Ø 24 cm • Y: 9 cm',
      specs: [
        'Çıkarılabilir delikli kapak',
        'Kompakt ve korunaklı silindirik yapı',
        'Peçeteleri tozdan koruyan çekme yuvası'
      ],
      description: 'Kapaklı silindirik yapısı ve ortasındaki ergonomik çekme boşluğuyla peçeteleri tozdan korur, tek hareketle sofraya şıklık katar.'
    },
    {
      id: 'ovale-napkin-holder',
      name: 'Ovale Napkin Holder',
      collection: 'Tavola',
      collectionName: 'Masa & Sunum',
      tagline: 'Geniş sofraların oval peçete düzeni.',
      catalogPage: 11,
      file: 'Cavaletta Ovale Napkin Holder.png',
      webp: 'img/optimized/Cavaletta Ovale Napkin Holder.webp',
      img: 'img/Cavaletta Ovale Napkin Holder.png',
      dimensions: '28 × 18 × 8 cm',
      specs: [
        'Geniş oval çekme yuvası',
        'Tok ve dengeli yan paneller',
        'Klasik katlı peçetelere tam uyum'
      ],
      description: 'Klasik katlı peçetelere tam uyum sağlayan geniş hazneli oval peçetelik. Açık mutfak tezgahında veya masada düzen sağlar.'
    },
    {
      id: 'duo-organizer',
      name: 'Duo Organizer',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'İki bölmeli akıllı düzen.',
      catalogPage: 14,
      file: 'Cavaletta Duo Organizer.jpg',
      webp: 'img/optimized/Cavaletta Duo Organizer.webp',
      img: 'img/Cavaletta Duo Organizer.jpg',
      dimensions: '30 × 16 × 10 cm Bölmeli Sepet',
      specs: [
        'Sabit Entegre Separatör Duvar',
        'Geniş Çift Bölmeli Hacim',
        'Formunu Koruyan Dik Duruş',
        'Hakiki Deri Cavaletta Künye'
      ],
      description: 'Ortadan ikiye ayrılmış sabit bölmesiyle Duo Organizer; banyoda cilt bakım şişelerini, makyaj masasında fırçaları, çalışma masasında ise not defteri ve kalemleri kusursuz bir uyumla ayrıştırır.'
    },
    {
      id: 'ovale-organizer-set',
      name: 'Ovale Organizer Set',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'İç içe geçen düzen armonisi.',
      catalogPage: 15,
      file: 'Cavaletta Ovale Organizer Set.png',
      webp: 'img/optimized/Cavaletta Ovale Organizer Set.webp',
      img: 'img/Cavaletta Ovale Organizer Set.png',
      dimensions: 'S: 20×14 cm | M: 25×18 cm | L: 30×22 cm',
      specs: [
        '3 Farklı Boyutta Oval Aile',
        'İç İçe Geçebilir (Nesting) Tasarım',
        'Her Boyda Bağımsız Deri Etiket',
        'Dayanıklı Geri Dönüşümlü İp'
      ],
      description: 'Farklı boyuttaki üç oval sepetten oluşan Ovale Set; banyo dolaplarında, antre konsolunda ve gardıroplarda eşyalarınızı hiyerarşik bir düzene kavuşturur. Kullanılmadığında iç içe geçerek yer tasarrufu sağlar.'
    },
    {
      id: 'nido-organizer-set',
      name: 'Nido Organizer Set',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'Kusursuz dairesel formlar, sıcak saklama alanları.',
      catalogPage: 16,
      file: 'Cavaletta Nido Organizer Set.png',
      webp: 'img/optimized/Cavaletta Nido Organizer Set.webp',
      img: 'img/Cavaletta Nido Organizer Set.png',
      dimensions: 'S: Ø 16 cm | M: Ø 20 cm | L: Ø 24 cm',
      specs: [
        '3\'lü Dairesel Kase Formu',
        'Yumuşak ve Güvenli Kenarlar',
        'Masaüstü ve Komodin Uyumlu',
        'Çizilmez Mobilya Dostu Taban'
      ],
      description: 'Yuvarlak çanak formuyla mekanın keskin köşelerini yumuşatan Nido Set, anahtarlardan saatlere, banyo pamuklarından kişisel aksesuarlara kadar dağılan eşyaları derleyip toparlar.'
    },
    {
      id: 'nido-lidded-basket',
      name: 'Nido Lidded Basket',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'Gözden uzak, stile yakın saklama.',
      catalogPage: 17,
      file: 'Cavaletta Nido Lidded Basket.png',
      webp: 'img/optimized/Cavaletta Nido Lidded Basket.webp',
      img: 'img/Cavaletta Nido Lidded Basket.png',
      dimensions: 'Ø 24 cm • Y: 14 cm',
      specs: [
        'Tam kapanan entegre kapak',
        'Özel tasarım deri tutaç',
        'Konsol ve sehpa üzerinde dekoratif dinginlik'
      ],
      description: 'Deri kulplu ve pirinç perçinli kapağıyla dağınıklığı tamamen gizleyen kapaklı sepet. Konsol ve sehpa üzerinde dekoratif dinginlik.'
    },
    {
      id: 'nero-box',
      name: 'Nero Box',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'Minimalist kutu formunda kapaklı konfor.',
      catalogPage: 17,
      file: 'Cavaletta Nero Box.png',
      webp: 'img/optimized/Cavaletta Nero Box.webp',
      img: 'img/Cavaletta Nero Box.png',
      dimensions: 'Ø 22 cm • Y: 12 cm',
      specs: [
        'Tok kordon gövde yapısı',
        'Toz almayan korumalı kapak',
        'Ergonomik açma kulakçığı'
      ],
      description: 'Düz hatlı derin silindiri ve ergonomik açma kulakçığıyla kablolar, mücevherler ve özel eşyalar için güvenli saklama kutusu.'
    },
    {
      id: 'casa-mini-basket',
      name: 'Casa Mini Basket',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'Tek bir form, sınırsız kullanım senaryosu.',
      catalogPage: 18,
      file: 'Cavaletta Casa Mini Basket.png',
      webp: 'img/optimized/Cavaletta Casa Mini Basket.webp',
      img: 'img/Cavaletta Casa Mini Basket.png',
      dimensions: 'Ø 13 cm • Y: 12 cm Kompakt',
      specs: [
        'Banyo: Tarak, fırça ve losyonlar',
        'Çalışma: Kalemlik ve cetveller',
        'Salon: Doğal saksı kılıfı',
        'İkram: Ceviz & kuruyemiş kasesi'
      ],
      description: 'Casa Mini; evin her odasında yeni bir görev üstlenen eğlenceli ve işlevsel bir tasarım. Banyo, çalışma masası, salon ve ikram için ideal kompakt form.'
    },
    {
      id: 'sole-basket',
      name: 'Sole Basket',
      collection: 'Ordine',
      collectionName: 'Düzen & Saklama',
      tagline: 'Geniş oval hatlarla sergileme zarafeti.',
      catalogPage: 19,
      file: 'Cavaletta Sole Basket.png',
      webp: 'img/optimized/Cavaletta Sole Basket.webp',
      img: 'img/Cavaletta Sole Basket.png',
      dimensions: '34 × 22 × 8 cm Alçak Oval',
      specs: [
        'Ferah ve Alçak Kenar Tasarımı',
        'Konsol ve Sehpa Tepsisi İşlevi',
        'Dikiş Mukavemeti Yüksek Taban',
        'Hakiki Deri Cavaletta Rozeti'
      ],
      description: 'Alçak kenarlı ve ferah tabanlı yapısıyla Sole Sepet; sehpa üstlerinde dergiler ve mumlar, antre dresuarında günlük anahtarlıklar veya yatak odasında takı tepsisi olarak heykelsi bir sergileme alanı sunar.'
    },
    {
      id: 'terra-planter-set',
      name: 'Terra Planter Set',
      collection: 'Casa',
      collectionName: 'Yaşam & Mekan',
      tagline: 'Bitkilerinize doğanın en sıcak dokunuşu.',
      catalogPage: 22,
      file: 'Cavaletta Terra Planter.jpg',
      webp: 'img/optimized/Cavaletta Terra Planter.webp',
      img: 'img/Cavaletta Terra Planter.jpg',
      dimensions: 'S: Ø 18 cm | M: Ø 24 cm | L: Ø 30 cm',
      specs: [
        '3 Farklı Saksı Boyuna Uyum',
        'Kök Yalıtımı Sağlayan Tok Yapı',
        'Su Damlamalarına Dirençli',
        'İç İçe Geçen Kolay Depolama'
      ],
      description: 'Plastik ve seramik saksıların soğuk görüntüsünü sıcacık bir Akdeniz atmosferine dönüştüren Terra Saksı Kılıfı; orkideler, sukulentler ve salon yaprakları için nefes alan, kökleri koruyan bir kılıf vazifesi görür.'
    },
    {
      id: 'piccolo-waste-bin',
      name: 'Piccolo Waste Bin',
      collection: 'Casa',
      collectionName: 'Yaşam & Mekan',
      tagline: 'Gündelik ihtiyaçlara estetik bir kamuflaj.',
      catalogPage: 23,
      file: 'Cavaletta Piccolo Waste Bin.png',
      webp: 'img/optimized/Cavaletta Piccolo Waste Bin.webp',
      img: 'img/Cavaletta Piccolo Waste Bin.png',
      dimensions: 'Ø 20 cm • Yükseklik: 22 cm',
      specs: [
        'Çıkarılabilir Dairesel Kapak',
        'İç Kova / Poşet Kamuflajı',
        'Yıkanabilir Hijyenik İp',
        'Deri Detaylı Estetik Kapak Tutaç'
      ],
      description: 'Geleneksel çöp kutularının endüstriyel soğukluğundan uzak, el dikimi kordon dokusu ve özel kapak tasarımıyla banyolarda, makyaj masalarında veya çalışma odalarında dekorasyonu bozmayan şık bir atık kutusu.'
    },
    {
      id: 'alba-towel-basket',
      name: 'Alba Towel Basket',
      collection: 'Sereno',
      collectionName: 'Banyo & Spa',
      tagline: 'Spa dinginliği, rulo havluların zarafeti.',
      catalogPage: 26,
      file: 'Cavaletta Alba Towel Basket.png',
      webp: 'img/optimized/Cavaletta Alba Towel Basket.webp',
      img: 'img/Cavaletta Alba Towel Basket.png',
      dimensions: 'Ø 32 cm • Y: 14 cm (3-5 Rulo Havlu)',
      specs: [
        'Rulo Havlu İçin İdeal Derinlik',
        'Neme ve Su Buharına Dayanıklı',
        'Banyo Tezgahında Tok Duruş',
        '30°C\'de Kolayca Yıkanabilir'
      ],
      description: 'Banyolarınıza butik otel ve spa konforunu taşıyan Alba Sepet; rulo yapılmış yüz ve el havlularını düzenli bir zarafetle sergiler. Nemli banyo ortamına tam dayanıklılık gösterir ve formunu korur.'
    },
    {
      id: 'towel-basket',
      name: 'Towel Basket',
      collection: 'Sereno',
      collectionName: 'Banyo & Spa',
      tagline: 'Derin hazne, ferah depolama konforu.',
      catalogPage: 27,
      file: 'Cavaletta Towel Basket.png',
      webp: 'img/optimized/Cavaletta Towel Basket.webp',
      img: 'img/Cavaletta Towel Basket.png',
      dimensions: 'Ø 28 cm • Yükseklik: 20 cm Derin Gövde',
      specs: [
        'Yüksek Kenarlı Derin Hacim',
        'Ağır Havluları Taşıyan Tok Örgü',
        'Banyo ve Spa Zarafeti',
        'Doğal Bej / Krem Ton Dengesi'
      ],
      description: 'Daha yüksek kenarlı silindirik mimarisiyle büyük banyo havluları, bornozlar veya saç bakım gereçleri için ferah bir saklama alanı yaratan zamansız bir banyo ve spa sepeti.'
    },
    {
      id: 'aura-bath-mat-set',
      name: 'Aura Bath Mat Set',
      collection: 'Sereno',
      collectionName: 'Banyo & Spa',
      tagline: 'Banyoda adımlarınızı karşılayan heykelsi konfor.',
      catalogPage: 29,
      file: 'Cavaletta Aura Bath Mat Set.png',
      webp: 'img/optimized/Cavaletta Aura Bath Mat Set.webp',
      img: 'img/Cavaletta Aura Bath Mat Set.png',
      dimensions: 'Oval: 55×90 cm • Yuvarlak: Ø 60 cm (2\'li Takım)',
      specs: [
        'Özel Burgu Ajurlu El Örgüsü',
        'Ayak Altında Tok Masaj Hissi',
        'Hızlı Kuruyan Polyester İp',
        'Zeminde Toplanma Yapmaz'
      ],
      description: 'Kataloğın en güçlü lifestyle parçalarından Aura Paspas Seti; ortasındaki burgu ajur örgüsü ve çift tonlu kontrast bordürüyle banyonuzu lüks bir spa alanına dönüştürür. Islak adımlarda sıcak, tok ve masaj etkisi uyandıran zemin konforu.'
    },
    {
      id: 'nido-pet-mat',
      name: 'Nido Pet Mat',
      collection: 'Sereno',
      collectionName: 'Banyo & Spa',
      tagline: 'Evcil dostlarımıza özel tasarım konfor.',
      catalogPage: 30,
      file: 'Cavaletta Nido Pet Mat.png',
      webp: 'img/optimized/Cavaletta Nido Pet Mat.webp',
      img: 'img/Cavaletta Nido Pet Mat.png',
      dimensions: 'Ø 45 cm (+ Kulaklar ve Püsküllü Kuyruk)',
      specs: [
        'Sevimli Kulak ve Püskül Formu',
        'Tırnak Takılmalarına Dirençli',
        'Yıkanabilir Hijyenik Kordon',
        'Deri Cavaletta Etiket Detayı'
      ],
      description: 'Kedi ve küçük ırk köpekler için kulak ve ahşap boncuklu püskül kuyruk detayıyla esprili bir şıklık sunan Nido Pet Mat; mama-su kabı altlığı veya konforlu bir dinlenme köşesi olarak evin dekorasyonunu tamamlar.'
    }
  ];

  // --- 2. CATALOG METADATA (34 Pages) ---
  const TOTAL_CATALOG_PAGES = 34;
  const CATALOG_PDF_PATH = 'Cavaletta_2026_Katalog.pdf';

  const CATALOG_BOOKMARKS = [
    { page: 1, title: 'Kapak', subtitle: 'Collection 2026' },
    { page: 2, title: 'Felsefe', subtitle: 'Doğal Dokular' },
    { page: 3, title: 'Zanaat', subtitle: 'Crafted By Hand' },
    { page: 4, title: '01 / Tavola', subtitle: 'Masa Koleksiyonu' },
    { page: 12, title: '02 / Ordine', subtitle: 'Düzen Koleksiyonu' },
    { page: 20, title: '03 / Casa', subtitle: 'Yaşam Koleksiyonu' },
    { page: 24, title: '04 / Sereno', subtitle: 'Banyo & Lifestyle' },
    { page: 31, title: 'İmzalı Seçki', subtitle: '21 Parçalık Özet' },
    { page: 32, title: 'Bakım', subtitle: 'Kullanım Kılavuzu' },
    { page: 33, title: 'İletişim & B2B', subtitle: 'Sipariş Rehberi' }
  ];

  // --- STATE ---
  let activeFilter = 'all';
  let searchQuery = '';
  let currentCatalogPage = 1;
  let catalogZoomLevel = 1;
  let catalogViewMode = 'digital'; // 'digital' or 'pdf'

  // --- DOM CACHE ---
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navDrawer = document.getElementById('navDrawer');
  const navDrawerClose = document.getElementById('navDrawerClose');
  const navDrawerLinks = document.querySelectorAll('.drawer-link');
  const productGrid = document.getElementById('productGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Search DOM
  const productSearchInput = document.getElementById('productSearchInput');
  const productSearchClear = document.getElementById('productSearchClear');
  const productSearchCount = document.getElementById('productSearchCount');

  // Product Modal DOM
  const productModal = document.getElementById('productModal');
  const productModalClose = document.getElementById('productModalClose');
  const modalImgEl = document.getElementById('modalProductImg');
  const modalImgSource = document.getElementById('modalProductSource');
  const modalCollectionEl = document.getElementById('modalProductCollection');
  const modalNameEl = document.getElementById('modalProductName');
  const modalTaglineEl = document.getElementById('modalProductTagline');
  const modalDescEl = document.getElementById('modalProductDesc');
  const modalDimensionsEl = document.getElementById('modalProductDimensions');
  const modalSpecsList = document.getElementById('modalProductSpecs');
  const modalCatalogJumpBtn = document.getElementById('modalCatalogJumpBtn');
  const modalB2bBtn = document.getElementById('modalB2bBtn');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

  // Catalog Modal DOM
  const catalogModal = document.getElementById('catalogModal');
  const catalogModalClose = document.getElementById('catalogModalClose');
  const catalogPageImg = document.getElementById('catalogPageImg');
  const catalogPageCounter = document.getElementById('catalogPageCounter');
  const catalogPageSubtitle = document.getElementById('catalogPageSubtitle');
  const catalogPrevBtn = document.getElementById('catalogPrevBtn');
  const catalogNextBtn = document.getElementById('catalogNextBtn');
  const catalogThumbnailsTrack = document.getElementById('catalogThumbnailsTrack');
  const catalogBookmarksContainer = document.getElementById('catalogBookmarks');
  const catalogDigitalView = document.getElementById('catalogDigitalView');
  const catalogPdfView = document.getElementById('catalogPdfView');
  const catalogViewToggle = document.getElementById('catalogViewToggle');
  const catalogZoomInBtn = document.getElementById('catalogZoomIn');
  const catalogZoomOutBtn = document.getElementById('catalogZoomOut');
  const catalogZoomResetBtn = document.getElementById('catalogZoomReset');
  const catalogOpenTriggers = document.querySelectorAll('[data-action="open-catalog"]');

  // B2B Modal DOM
  const b2bModal = document.getElementById('b2bModal');
  const b2bModalClose = document.getElementById('b2bModalClose');
  const b2bTriggers = document.querySelectorAll('[data-action="open-b2b"]');
  const b2bForm = document.getElementById('b2bForm');
  const b2bSuccessMsg = document.getElementById('b2bSuccessMsg');

  // Global Floating & Utility DOM
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const texturePictureSource = document.getElementById('texturePictureSource');
  const textureImg = document.getElementById('textureImg');

  // --- 3. INITIALIZATION ---
  function init() {
    renderProducts();
    initFilters();
    initProductSearch();
    initNavScroll();
    initMobileDrawer();
    initCatalogViewer();
    initCatalogTriggers();
    initB2BModal();
    initTextureTabs();
    initScrollProgressAndBackToTop();
    initPdfDownloadFeedback();
  }

  // --- 4. PRODUCT RENDERING & FILTERING ---
  function normalizeSearchText(str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/ı/g, 'i')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .trim();
  }

  function renderProducts() {
    if (!productGrid) return;

    // Filter by category
    let list = activeFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.collection.toLowerCase() === activeFilter.toLowerCase());

    // Filter by live search query
    if (searchQuery.trim() !== '') {
      const q = normalizeSearchText(searchQuery);
      list = list.filter(p => {
        const name = normalizeSearchText(p.name);
        const col = normalizeSearchText(p.collection + ' ' + p.collectionName);
        const tagline = normalizeSearchText(p.tagline);
        const desc = normalizeSearchText(p.description);
        const dims = normalizeSearchText(p.dimensions);
        const specs = normalizeSearchText(p.specs.join(' '));
        return name.includes(q) || col.includes(q) || tagline.includes(q) || desc.includes(q) || dims.includes(q) || specs.includes(q);
      });
    }

    // Update search count badge
    if (productSearchCount) {
      if (searchQuery.trim() !== '') {
        productSearchCount.textContent = `${list.length} Sonuç Bulundu`;
      } else if (activeFilter === 'all') {
        productSearchCount.textContent = `21 Parça Koleksiyon`;
      } else {
        productSearchCount.textContent = `${list.length} Parça Gösteriliyor`;
      }
    }

    productGrid.innerHTML = '';

    // Handle Empty Results
    if (list.length === 0) {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'product-empty-state';
      emptyBox.innerHTML = `
        <svg class="product-empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        <h3 class="product-empty-title">Eşleşen Tasarım Bulunamadı</h3>
        <p class="product-empty-desc">
          "<strong>${escapeHtml(searchQuery)}</strong>" aramanıza uygun bir parça bulunamadı. Farklı bir terim deneyebilir veya aramayı sıfırlayabilirsiniz.
        </p>
        <button type="button" class="btn btn-secondary" id="emptyStateResetBtn">
          Aramayı Sıfırla
        </button>
      `;

      const resetBtn = emptyBox.querySelector('#emptyStateResetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchQuery = '';
          if (productSearchInput) productSearchInput.value = '';
          if (productSearchClear) productSearchClear.style.display = 'none';
          renderProducts();
        });
      }

      productGrid.appendChild(emptyBox);
      return;
    }

    // Render Cards
    list.forEach((product, idx) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-id', product.id);
      card.setAttribute('data-collection', product.collection.toLowerCase());
      
      // Asymmetric rhythm: mark every 4th item as featured in desktop grid when in full view
      if (activeFilter === 'all' && searchQuery === '' && (idx % 6 === 0 || idx % 6 === 3)) {
        card.classList.add('product-card--featured');
      }

      card.innerHTML = `
        <div class="product-media-wrap" data-id="${product.id}">
          <picture>
            <source srcset="${product.webp}" type="image/webp">
            <img 
              src="${product.img}" 
              alt="${product.name} — Cavaletta el yapımı ${product.collectionName.toLowerCase()}" 
              loading="lazy"
              decoding="async"
              class="product-img"
            >
          </picture>
          <div class="product-media-overlay">
            <span class="product-inspect-pill">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Detayları İncele
            </span>
          </div>
          <span class="product-collection-badge">${product.collection}</span>
        </div>
        <div class="product-info">
          <div class="product-header-line">
            <h3 class="product-title">${product.name}</h3>
            <span class="product-page-hint">Katalog S. ${product.catalogPage}</span>
          </div>
          <p class="product-tagline">${product.tagline}</p>
          <div class="product-meta-row">
            <span class="product-dimension">${product.dimensions}</span>
            <button type="button" class="product-card-cta" data-id="${product.id}" aria-label="${product.name} detaylarını aç">
              Keşfet
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      // Event listeners to open detail
      const clickables = card.querySelectorAll('[data-id]');
      clickables.forEach(el => {
        el.addEventListener('click', () => openProductModal(product.id));
      });

      productGrid.appendChild(card);
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    })[m]);
  }

  function initFilters() {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-filter');
        if (target === activeFilter && searchQuery === '') return;

        filterButtons.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        activeFilter = target;

        // Smooth fade re-render
        productGrid.style.opacity = '0';
        productGrid.style.transform = 'translateY(8px)';
        setTimeout(() => {
          renderProducts();
          productGrid.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          productGrid.style.opacity = '1';
          productGrid.style.transform = 'translateY(0)';
        }, 160);
      });
    });
  }

  function initProductSearch() {
    if (!productSearchInput) return;

    let debounceTimer = null;
    productSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      searchQuery = val;

      if (productSearchClear) {
        productSearchClear.style.display = val.trim().length > 0 ? 'flex' : 'none';
      }

      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        renderProducts();
      }, 120);
    });

    if (productSearchClear) {
      productSearchClear.addEventListener('click', () => {
        productSearchInput.value = '';
        searchQuery = '';
        productSearchClear.style.display = 'none';
        productSearchInput.focus();
        renderProducts();
      });
    }
  }

  // --- 5. PRODUCT DETAIL MODAL ---
  function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !productModal) return;

    modalImgSource.srcset = product.webp;
    modalImgEl.src = product.img;
    modalImgEl.alt = `${product.name} — Cavaletta`;
    modalCollectionEl.textContent = `${product.collection} Collection • ${product.collectionName}`;
    modalNameEl.textContent = product.name;
    modalTaglineEl.textContent = product.tagline;
    modalDescEl.textContent = product.description;
    modalDimensionsEl.textContent = product.dimensions;

    modalSpecsList.innerHTML = '';
    product.specs.forEach(spec => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="spec-dot"></span>
        <span>${spec}</span>
      `;
      modalSpecsList.appendChild(li);
    });

    if (modalCatalogJumpBtn) {
      modalCatalogJumpBtn.onclick = () => {
        closeProductModal();
        openCatalogViewer(product.catalogPage);
      };
      const jumpSpan = modalCatalogJumpBtn.querySelector('.jump-page-number');
      if (jumpSpan) jumpSpan.textContent = `Sayfa ${product.catalogPage}`;
    }

    if (modalB2bBtn) {
      modalB2bBtn.onclick = () => {
        closeProductModal();
        openB2BModalWithProduct(product);
      };
    }

    if (modalWhatsappBtn) {
      const waMsg = encodeURIComponent(
        `Merhaba Cavaletta ekibi, Collection 2026 seçkisindeki "${product.name}" (${product.collection} Serisi, Katalog S. ${product.catalogPage}) hakkında toptan / perakende fiyat ve sipariş detaylarını öğrenmek istiyorum.`
      );
      modalWhatsappBtn.href = `https://wa.me/905320000000?text=${waMsg}`;
    }

    productModal.classList.add('is-open');
    document.body.classList.add('modal-locked');
    productModal.setAttribute('aria-hidden', 'false');

    // Accessibility focus
    if (productModalClose) productModalClose.focus();
  }

  function closeProductModal() {
    if (!productModal) return;
    productModal.classList.remove('is-open');
    productModal.setAttribute('aria-hidden', 'true');
    if (!catalogModal.classList.contains('is-open') && !b2bModal.classList.contains('is-open')) {
      document.body.classList.remove('modal-locked');
    }
  }

  if (productModalClose) {
    productModalClose.addEventListener('click', closeProductModal);
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
  }

  // --- 6. CATALOG VIEWER LOGIC ---
  function initCatalogViewer() {
    // Generate thumbnail drawer
    if (catalogThumbnailsTrack) {
      catalogThumbnailsTrack.innerHTML = '';
      for (let i = 1; i <= TOTAL_CATALOG_PAGES; i++) {
        const thumb = document.createElement('button');
        thumb.type = 'button';
        thumb.className = `catalog-thumb-item ${i === currentCatalogPage ? 'is-active' : ''}`;
        thumb.setAttribute('data-page', i);
        thumb.setAttribute('aria-label', `Katalog Sayfa ${i}`);
        
        const pad = i.toString().padStart(2, '0');
        thumb.innerHTML = `
          <img src="catalog_pages/thumb_${pad}.jpg" alt="Sayfa ${i}" loading="lazy" class="thumb-img">
          <span class="thumb-num">${i}</span>
        `;

        thumb.addEventListener('click', () => {
          goToCatalogPage(i);
        });

        catalogThumbnailsTrack.appendChild(thumb);
      }
    }

    // Generate Bookmarks
    if (catalogBookmarksContainer) {
      catalogBookmarksContainer.innerHTML = '';
      CATALOG_BOOKMARKS.forEach(bm => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `catalog-bm-pill ${bm.page === currentCatalogPage ? 'is-active' : ''}`;
        btn.setAttribute('data-page', bm.page);
        btn.innerHTML = `
          <span class="bm-title">${bm.title}</span>
          <span class="bm-sub">S. ${bm.page}</span>
        `;
        btn.addEventListener('click', () => goToCatalogPage(bm.page));
        catalogBookmarksContainer.appendChild(btn);
      });
    }

    // Prev / Next button listeners
    if (catalogPrevBtn) {
      catalogPrevBtn.addEventListener('click', () => goToCatalogPage(currentCatalogPage - 1));
    }
    if (catalogNextBtn) {
      catalogNextBtn.addEventListener('click', () => goToCatalogPage(currentCatalogPage + 1));
    }

    // Zoom Controls
    if (catalogZoomInBtn) {
      catalogZoomInBtn.addEventListener('click', () => adjustCatalogZoom(0.25));
    }
    if (catalogZoomOutBtn) {
      catalogZoomOutBtn.addEventListener('click', () => adjustCatalogZoom(-0.25));
    }
    if (catalogZoomResetBtn) {
      catalogZoomResetBtn.addEventListener('click', () => resetCatalogZoom());
    }

    // Toggle view mode (Digital vs Native PDF Embed)
    if (catalogViewToggle) {
      catalogViewToggle.addEventListener('click', toggleCatalogViewMode);
    }

    // Touch swipe support on catalogPageImg
    let touchStartX = 0;
    let touchEndX = 0;
    if (catalogPageImg) {
      catalogPageImg.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      catalogPageImg.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleCatalogSwipe();
      }, { passive: true });
    }

    function handleCatalogSwipe() {
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          // Swipe left -> Next page
          goToCatalogPage(currentCatalogPage + 1);
        } else {
          // Swipe right -> Prev page
          goToCatalogPage(currentCatalogPage - 1);
        }
      }
    }
  }

  function goToCatalogPage(pageNumber) {
    const target = Math.max(1, Math.min(TOTAL_CATALOG_PAGES, pageNumber));
    currentCatalogPage = target;

    // Reset zoom when switching pages
    resetCatalogZoom();

    // Update page image with high-performance WebP and JPG fallback
    if (catalogPageImg) {
      const pad = target.toString().padStart(2, '0');
      catalogPageImg.style.opacity = '0.35';
      const nextImg = new Image();
      nextImg.src = `catalog_pages/page_${pad}.webp`;
      nextImg.onload = () => {
        catalogPageImg.src = nextImg.src;
        catalogPageImg.style.opacity = '1';
      };
      nextImg.onerror = () => {
        catalogPageImg.src = `catalog_pages/page_${pad}.jpg`;
        catalogPageImg.style.opacity = '1';
      };
    }

    // Update counter
    if (catalogPageCounter) {
      catalogPageCounter.textContent = `${target} / ${TOTAL_CATALOG_PAGES}`;
    }

    // Update subtitle if matches a section
    if (catalogPageSubtitle) {
      const currentBm = CATALOG_BOOKMARKS.slice().reverse().find(bm => target >= bm.page);
      catalogPageSubtitle.textContent = currentBm ? `${currentBm.title} • ${currentBm.subtitle}` : 'Cavaletta Collection 2026';
    }

    // Update prev/next disabled states
    if (catalogPrevBtn) catalogPrevBtn.disabled = target === 1;
    if (catalogNextBtn) catalogNextBtn.disabled = target === TOTAL_CATALOG_PAGES;

    // Update active thumb
    if (catalogThumbnailsTrack) {
      const thumbs = catalogThumbnailsTrack.querySelectorAll('.catalog-thumb-item');
      thumbs.forEach((th, idx) => {
        if (idx + 1 === target) {
          th.classList.add('is-active');
          th.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
          th.classList.remove('is-active');
        }
      });
    }

    // Update active bookmark pill
    if (catalogBookmarksContainer) {
      const pills = catalogBookmarksContainer.querySelectorAll('.catalog-bm-pill');
      pills.forEach(p => {
        const page = parseInt(p.getAttribute('data-page'), 10);
        if (page === target) {
          p.classList.add('is-active');
        } else {
          p.classList.remove('is-active');
        }
      });
    }
  }

  function adjustCatalogZoom(delta) {
    catalogZoomLevel = Math.max(1, Math.min(2.5, catalogZoomLevel + delta));
    applyCatalogZoom();
  }

  function resetCatalogZoom() {
    catalogZoomLevel = 1;
    applyCatalogZoom();
  }

  function applyCatalogZoom() {
    if (catalogPageImg) {
      catalogPageImg.style.transform = `scale(${catalogZoomLevel})`;
      catalogPageImg.style.cursor = catalogZoomLevel > 1 ? 'grab' : 'zoom-in';
    }
    if (catalogZoomResetBtn) {
      catalogZoomResetBtn.textContent = `${Math.round(catalogZoomLevel * 100)}%`;
    }
  }

  function toggleCatalogViewMode() {
    if (catalogViewMode === 'digital') {
      catalogViewMode = 'pdf';
      catalogDigitalView.style.display = 'none';
      catalogPdfView.style.display = 'block';
      catalogViewToggle.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
        Dijital Okuyucuya Dön
      `;
    } else {
      catalogViewMode = 'digital';
      catalogDigitalView.style.display = 'flex';
      catalogPdfView.style.display = 'none';
      catalogViewToggle.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
        Orijinal PDF Belgesi
      `;
    }
  }

  function openCatalogViewer(initialPage = 1) {
    if (!catalogModal) return;
    catalogModal.classList.add('is-open');
    document.body.classList.add('modal-locked');
    catalogModal.setAttribute('aria-hidden', 'false');

    goToCatalogPage(initialPage);

    if (catalogModalClose) catalogModalClose.focus();
  }

  function closeCatalogViewer() {
    if (!catalogModal) return;
    catalogModal.classList.remove('is-open');
    catalogModal.setAttribute('aria-hidden', 'true');
    if (!productModal.classList.contains('is-open') && !b2bModal.classList.contains('is-open')) {
      document.body.classList.remove('modal-locked');
    }
  }

  function initCatalogTriggers() {
    catalogOpenTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const startPage = parseInt(btn.getAttribute('data-page') || '1', 10);
        openCatalogViewer(startPage);
      });
    });

    if (catalogModalClose) {
      catalogModalClose.addEventListener('click', closeCatalogViewer);
    }

    if (catalogModal) {
      catalogModal.addEventListener('click', (e) => {
        if (e.target === catalogModal) closeCatalogViewer();
      });
    }
  }

  // --- 7. KEYBOARD SHORTCUTS ---
  window.addEventListener('keydown', (e) => {
    // ESC closes open modals
    if (e.key === 'Escape') {
      if (catalogModal && catalogModal.classList.contains('is-open')) {
        closeCatalogViewer();
      } else if (productModal && productModal.classList.contains('is-open')) {
        closeProductModal();
      } else if (b2bModal && b2bModal.classList.contains('is-open')) {
        closeB2BModal();
      } else if (navDrawer && navDrawer.classList.contains('is-open')) {
        closeMobileDrawer();
      }
    }

    // Left/Right arrows navigate catalog if catalog is open
    if (catalogModal && catalogModal.classList.contains('is-open') && catalogViewMode === 'digital') {
      if (e.key === 'ArrowLeft') {
        goToCatalogPage(currentCatalogPage - 1);
      } else if (e.key === 'ArrowRight') {
        goToCatalogPage(currentCatalogPage + 1);
      }
    }
  });

  // --- 8. NAVBAR SCROLL EFFECT ---
  function initNavScroll() {
    if (!navbar) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- 9. MOBILE DRAWER ---
  function initMobileDrawer() {
    if (navToggle && navDrawer) {
      navToggle.addEventListener('click', () => {
        navDrawer.classList.add('is-open');
        document.body.classList.add('modal-locked');
      });
    }
    if (navDrawerClose && navDrawer) {
      navDrawerClose.addEventListener('click', closeMobileDrawer);
    }
    navDrawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  function closeMobileDrawer() {
    if (navDrawer) {
      navDrawer.classList.remove('is-open');
      if (!catalogModal.classList.contains('is-open') && !productModal.classList.contains('is-open')) {
        document.body.classList.remove('modal-locked');
      }
    }
  }

  // --- 10. TEXTURE STORY TABS WITH DYNAMIC VISUALS ---
  const TEXTURE_VISUALS = {
    spiral: {
      webp: 'catalog_pages/page_05.webp',
      img: 'catalog_pages/page_05.jpg',
      alt: '7 mm tok spiral dikiş ve kordon örgüsü — Luna Supla'
    },
    leather: {
      webp: 'assets/macro_texture_hero.webp',
      img: 'assets/macro_texture_hero.jpg',
      alt: 'Pirinç perçinli hakiki deri Cavaletta logo arması ve dikiş detayları'
    },
    resistant: {
      webp: 'assets/craftsmanship/craft_washable.jpg',
      img: 'assets/craftsmanship/craft_washable.jpg',
      alt: 'Su ve leke itici hidrofobik el örgüsü kordon'
    },
    tones: {
      webp: 'assets/craftsmanship/craft_recycled.jpg',
      img: 'assets/craftsmanship/craft_recycled.jpg',
      alt: 'Traverten ve doğal mimari ile uyumlu Akdeniz tonları'
    }
  };

  function initTextureTabs() {
    const tabs = document.querySelectorAll('.texture-tab-btn');
    const cards = document.querySelectorAll('.texture-detail-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-texture');
        tabs.forEach(t => t.classList.remove('is-active'));
        cards.forEach(c => c.classList.remove('is-active'));

        tab.classList.add('is-active');
        const activeCard = document.querySelector(`.texture-detail-card[data-texture="${target}"]`);
        if (activeCard) activeCard.classList.add('is-active');

        // Dynamically swap the visual preview with smooth transition
        const visual = TEXTURE_VISUALS[target];
        if (visual && textureImg && texturePictureSource) {
          textureImg.style.opacity = '0.35';
          textureImg.style.transform = 'scale(0.98)';
          
          setTimeout(() => {
            texturePictureSource.srcset = visual.webp;
            textureImg.src = visual.img;
            textureImg.alt = visual.alt;
            textureImg.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            textureImg.style.opacity = '1';
            textureImg.style.transform = 'scale(1)';
          }, 140);
        }
      });
    });
  }

  // --- 11. B2B MODAL & PRODUCT PRE-FILL ---
  function initB2BModal() {
    b2bTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openB2BModal();
      });
    });

    if (b2bModalClose) {
      b2bModalClose.addEventListener('click', closeB2BModal);
    }

    if (b2bModal) {
      b2bModal.addEventListener('click', (e) => {
        if (e.target === b2bModal) closeB2BModal();
      });
    }

    if (b2bForm) {
      b2bForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = b2bForm.querySelector('input[name="name"]');
        const name = nameInput?.value?.trim() || 'Değerli Müşterimiz';
        
        // Show success confirmation
        b2bForm.style.display = 'none';
        if (b2bSuccessMsg) {
          b2bSuccessMsg.style.display = 'block';
          const nameSpan = b2bSuccessMsg.querySelector('.success-name');
          if (nameSpan) nameSpan.textContent = name;
        }

        showToast(`Teşekkürler ${name}, B2B talebiniz alındı.`);
      });
    }
  }

  function openB2BModal() {
    if (!b2bModal) return;
    b2bModal.classList.add('is-open');
    document.body.classList.add('modal-locked');
    if (b2bForm) b2bForm.style.display = 'block';
    if (b2bSuccessMsg) b2bSuccessMsg.style.display = 'none';
    if (b2bModalClose) b2bModalClose.focus();
  }

  function openB2BModalWithProduct(product) {
    openB2BModal();
    if (b2bForm) {
      const msgArea = b2bForm.querySelector('textarea[name="message"]');
      if (msgArea) {
        msgArea.value = `İlgilenilen Model: ${product.name} (${product.collection} Koleksiyonu • Katalog Sayfa ${product.catalogPage})\nÖlçü: ${product.dimensions}\n\nTalep Edilen Proje & Sipariş Detayı: `;
        msgArea.focus();
      }
    }
  }

  function closeB2BModal() {
    if (!b2bModal) return;
    b2bModal.classList.remove('is-open');
    if (!catalogModal.classList.contains('is-open') && !productModal.classList.contains('is-open')) {
      document.body.classList.remove('modal-locked');
    }
  }

  // --- 12. SCROLL PROGRESS & BACK TO TOP ---
  function initScrollProgressAndBackToTop() {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      
      if (scrollProgressBar) {
        scrollProgressBar.style.width = scrolled + '%';
      }

      if (backToTopBtn) {
        if (winScroll > 320) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // --- 13. TOAST NOTIFICATIONS & PDF FEEDBACK ---
  let toastTimer = null;
  function showToast(msg, duration = 3400) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('is-visible');
    }, duration);
  }

  function initPdfDownloadFeedback() {
    const pdfLinks = document.querySelectorAll('a[download*="Cavaletta_2026_Katalog.pdf"]');
    pdfLinks.forEach(link => {
      link.addEventListener('click', () => {
        showToast('Cavaletta 2026 Kataloğu (PDF) indiriliyor...');
      });
    });
  }

  // Expose global API for inline buttons if needed
  window.Cavaletta = {
    openCatalog: openCatalogViewer,
    openProduct: openProductModal,
    openB2B: openB2BModal,
    openB2BWithProduct: openB2BModalWithProduct,
    showToast: showToast,
    goToCatalogPage: goToCatalogPage
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
