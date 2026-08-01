/* =========================================================================
   GaMa health & beauty clinic — дані сайту
   Усе, що редагується без програміста, зібрано тут.
   ========================================================================= */

const CONFIG = {
  phone: '+380965561051',
  phoneLabel: '+38 (096) 556-10-51',
  instagram: 'https://www.instagram.com/gama_clinic/',
  instagramDirect: 'https://ig.me/m/gama_clinic',
  instagramHandle: '@gama_clinic',
  // Впишіть офіційну пошту клініки — і форма запису почне пропонувати
  // надсилання заявки на неї (кнопка «Написати на пошту» + сама форма
  // відкриє поштову програму з готовим листом). Поки порожньо — сайт
  // працює лише через Instagram Direct, як і раніше.
  email: '',
  addressUa: 'вул. Українська, 6А, м. Коломия, Івано-Франківська обл.',
  addressEn: '6A Ukrainska St., Kolomyia, Ivano-Frankivsk region, Ukraine',
  mapQuery: 'вул. Українська 6А, Коломия, Івано-Франківська область',
  hoursUa: 'Пн–Сб · 10:00 – 18:00 · Нд — вихідний',
  hoursEn: 'Mon–Sat · 10:00 – 18:00 · Sun — closed',
  // Впишіть рік заснування клініки — і на сайті автоматично з'явиться
  // лічильник років роботи. Поки null — текст подається без цифри.
  sinceYear: null
};

/* -------------------------------------------------------------------------
   Спеціалісти
   Щоб з'явилося фото — покладіть файл у assets/img/ з відповідним іменем.
   ------------------------------------------------------------------------- */
const MASTERS = [
  {
    id: 'marta',
    photo: 'assets/img/master-marta.jpg',
    monogram: 'МГ', monogramEn: 'MH',
    lead: true,
    nameUa: 'Марта Галіщук',
    nameEn: 'Marta Halishchuk',
    roleUa: 'Головний косметолог клініки',
    roleEn: 'Chief cosmetologist of the clinic',
    titleUa: 'Лікар-дерматолог · косметолог · трихолог',
    titleEn: 'Dermatologist · cosmetologist · trichologist',
    bioUa: 'Веде найскладніші випадки клініки: лікування акне з супроводом, дерматологічні протоколи, контурну пластику та векторний ліфтинг. Формує стандарти протоколів, за якими працює вся команда GaMa.',
    bioEn: 'Handles the clinic\'s most complex cases: supervised acne treatment, dermatology protocols, contouring and vector lifting. She sets the treatment standards the whole GaMa team follows.',
    servicesUa: ['Дерматологічна консультація', 'Лікування акне із супроводом', 'Біоревіталізація', 'Контурна пластика губ і обличчя', 'Векторний ліфтинг', 'Ботулінотерапія', 'Трихологія'],
    servicesEn: ['Dermatology consultation', 'Supervised acne treatment', 'Biorevitalisation', 'Lip & face contouring', 'Vector lifting', 'Botulinum therapy', 'Trichology'],
    tier: 'marta'
  },
  {
    id: 'olha',
    photo: 'assets/img/master-olha.jpg',
    monogram: 'ОД', monogramEn: 'OD',
    nameUa: 'Ольга Добровоцька',
    nameEn: 'Olha Dobrovotska',
    roleUa: 'Топ-косметолог',
    roleEn: 'Top cosmetologist',
    titleUa: 'Ін\'єкційна косметологія · естетика обличчя',
    titleEn: 'Injectable cosmetology · facial aesthetics',
    bioUa: 'Спеціалізується на ін\'єкційних протоколах: біоревіталізація, бланшинг, плазмоліфтинг, робота з губами. Веде власний прайс — окремий тариф топ-косметолога.',
    bioEn: 'Specialises in injectable protocols: biorevitalisation, blanching, plasma lifting and lip work. Works at her own top-cosmetologist rate.',
    servicesUa: ['Біоревіталізація', 'Бланшинг', 'Плазмоліфтинг Arthrex', 'Контурна пластика губ', 'Ботулінотерапія'],
    servicesEn: ['Biorevitalisation', 'Blanching', 'Arthrex plasma lifting', 'Lip contouring', 'Botulinum therapy'],
    tier: 'olha'
  },
  {
    id: 'team',
    photo: 'assets/img/master-team.jpg',
    monogram: 'GM',
    nameUa: 'Команда GaMa',
    nameEn: 'The GaMa team',
    roleUa: 'Естетика, апаратні методики, тіло',
    roleEn: 'Aesthetics, device treatments, body',
    titleUa: 'Косметологи · масажисти · бровісти · візажисти',
    titleEn: 'Cosmetologists · massage therapists · brow artists · make-up artists',
    bioUa: 'Чистки та пілінги GLYMED+, лазерна епіляція DIOLAZE, фотоомолодження LUMECCA, RF-ліфтинг, ендосфера, масаж, брови й вії, макіяж та доглядові процедури для волосся.',
    bioEn: 'GLYMED+ cleansings and peels, DIOLAZE laser hair removal, LUMECCA photorejuvenation, RF lifting, endosphere, massage, brows and lashes, make-up and hair care rituals.',
    servicesUa: ['Чистки та пілінги', 'Лазерна епіляція', 'LUMECCA · RF-ліфтинг', 'Масаж і корекція фігури', 'Брови / вії / макіяж', 'Догляд за волоссям'],
    servicesEn: ['Cleansings & peels', 'Laser hair removal', 'LUMECCA · RF lifting', 'Massage & body contouring', 'Brows / lashes / make-up', 'Hair care'],
    tier: 'base'
  }
];

/* -------------------------------------------------------------------------
   Обладнання та методики
   ------------------------------------------------------------------------- */
const TECH = [
  {
    tag: 'InMode',
    nameUa: 'LUMECCA',
    nameEn: 'LUMECCA',
    descUa: 'Інтенсивний імпульсний світловий модуль для фотоомолодження: працює з пігментацією, судинами та постакне.',
    descEn: 'Intense pulsed light module for photorejuvenation: pigmentation, vascular lesions and post-acne marks.',
    img: 'assets/instagram/ig-02.jpg'
  },
  {
    tag: 'InMode',
    nameUa: 'DIOLAZE',
    nameEn: 'DIOLAZE',
    descUa: 'Діодний лазер для епіляції з системою охолодження — комфортно працює з великими зонами.',
    descEn: 'Diode hair-removal laser with integrated cooling — comfortable even on large areas.',
    img: 'assets/img/tech-laser.jpg'
  },
  {
    nameUa: 'Мікроголковий RF-ліфтинг',
    nameEn: 'Microneedle RF lifting',
    descUa: 'Радіочастотна енергія подається голками на задану глибину — ущільнення шкіри, робота з рубцями та розтяжками.',
    descEn: 'Radiofrequency energy delivered by needles at a set depth — skin tightening, work with scars and stretch marks.',
    img: 'assets/img/inject-botox.jpg'
  },
  {
    nameUa: 'Endosphere Therapy',
    nameEn: 'Endosphere Therapy',
    descUa: 'Компресійна мікровібрація для обличчя й тіла: лімфодренаж, тонус, робота з целюлітом.',
    descEn: 'Compressive micro-vibration for face and body: lymphatic drainage, tone and cellulite work.',
    img: 'assets/img/care-massage.jpg'
  },
  {
    nameUa: 'VelaShape',
    nameEn: 'VelaShape',
    descUa: 'Апаратна корекція фігури: вакуум, ролики та інфрачервоне світло в одній насадці.',
    descEn: 'Device body contouring: vacuum, rollers and infrared light in a single handpiece.',
    img: 'assets/instagram/ig-02.jpg'
  },
  {
    nameUa: 'Аналізатор шкіри',
    nameEn: 'Skin analyser',
    descUa: 'Апаратна діагностика до початку курсу: рівень зволоження, пігмент, пори, судинна сітка.',
    descEn: 'Device diagnostics before any course: hydration level, pigment, pores and vascular network.',
    img: 'assets/img/care-peel.jpg'
  }
];

const BRANDS = ['GLYMED+', 'MEDIK8', 'RESTYLANE', 'JALUPRO', 'VITARAN', 'SAYPHA', 'NEAUVIA', 'REJURAN', 'PLINEST', 'RADIESSE', 'JUVELOOK', 'NEURAMIS', 'RRS', 'MEDAVITA', 'NEVITALY', 'BIACRE', 'COLORESCIENCE', 'ARTHREX'];

/* -------------------------------------------------------------------------
   Прайс-лист
   price: число, рядок ("1500–2000") або об'єкт тарифів {base, olha, marta}
   layout: 'list' — розкривні картки з описом · 'table' — компактна таблиця зон
   ------------------------------------------------------------------------- */
const CATEGORIES = [
  /* ---------------------------------------------------------------- 01 */
  {
    id: 'consult',
    num: '01',
    ua: 'Консультації та діагностика',
    en: 'Consultations & diagnostics',
    leadUa: 'Будь-який курс у GaMa починається з огляду. Лікар оцінює стан шкіри, збирає анамнез і складає план — тільки після цього обираються процедури.',
    leadEn: 'Every GaMa course starts with an examination. The doctor assesses your skin, takes a history and builds a plan — procedures are chosen only after that.',
    groups: [{
      items: [
        { ua: 'Консультація косметолога', en: 'Cosmetologist consultation', price: 500,
          dUa: 'Базовий огляд шкіри, визначення типу та стану, підбір домашнього догляду й напряму процедур.',
          dEn: 'Basic skin examination, skin type and condition assessment, home-care selection and a treatment direction.' },
        { ua: 'Дерматологічна консультація Марти Галіщук', en: 'Dermatology consultation with Marta Halishchuk', price: 1000, master: 'marta',
          dUa: 'Прийом лікаря-дерматолога: розбір висипань, дерматозів, постакне. За потреби — направлення на аналізи.',
          dEn: 'Dermatologist appointment: rashes, dermatoses and post-acne assessment, with lab referrals if needed.' },
        { ua: 'Косметологічна консультація Марти Галіщук', en: 'Cosmetology consultation with Marta Halishchuk', price: 1000, master: 'marta',
          dUa: 'Розробка індивідуального протоколу: послідовність ін\'єкцій, апаратних методик і доглядів на кілька місяців уперед.',
          dEn: 'An individual protocol: the sequence of injections, device treatments and care routines for the months ahead.' },
        { ua: 'Трихологічна консультація', en: 'Trichology consultation', price: 1000,
          dUa: 'Огляд шкіри голови та волосся: причини випадіння, лупи, себорейних станів; план лікування.',
          dEn: 'Scalp and hair examination: causes of hair loss, dandruff and seborrhoeic conditions, plus a treatment plan.' },
        { ua: 'Онлайн-консультація Марти Галіщук', en: 'Online consultation with Marta Halishchuk', price: 700, master: 'marta',
          dUa: 'Відеозустріч для тих, хто не в Коломиї: розбір фото, підбір догляду, коригування вже початого курсу.',
          dEn: 'A video appointment for patients outside Kolomyia: photo review, care selection and adjustment of an ongoing course.' },
        { ua: 'Повторна консультація Марти Галіщук', en: 'Follow-up with Marta Halishchuk', price: 500, master: 'marta',
          dUa: 'Контрольний візит у межах курсу: оцінка динаміки та корекція призначень.',
          dEn: 'A check-up within the course: progress assessment and adjustment of prescriptions.' },
        { ua: 'Консультація + лікування акне із супроводом 3 місяці', en: 'Consultation + acne treatment with 3-month supervision', price: 3000,
          dUa: 'Повний протокол ведення акне: призначення, домашній догляд і зв\'язок із лікарем протягом трьох місяців.',
          dEn: 'A full acne protocol: prescriptions, home care and direct contact with the doctor for three months.' },
        { ua: 'Консультація + лікування акне із супроводом на весь курс', en: 'Consultation + acne treatment supervised throughout', price: 5000,
          dUa: 'Той самий протокол без обмеження в часі — супровід триває до завершення лікування.',
          dEn: 'The same protocol with no time limit — supervision continues until treatment is complete.' },
        { ua: 'Консультація + діагностика аналізатором шкіри', en: 'Consultation + skin analyser diagnostics', price: 2000,
          dUa: 'Огляд лікаря разом з апаратним зчитуванням параметрів шкіри: зволоження, пігмент, пори, судини.',
          dEn: 'A doctor\'s examination together with a device readout of skin parameters: hydration, pigment, pores, vessels.' },
        { ua: 'Діагностика аналізатором шкіри', en: 'Skin analyser diagnostics', price: 1000,
          dUa: 'Окрема апаратна діагностика з протоколом — зручно для контролю результату в динаміці.',
          dEn: 'Standalone device diagnostics with a printed report — useful for tracking results over time.' },
        { ua: 'Консультація + подальше онлайн-ведення', en: 'Consultation + ongoing online supervision', price: 2000,
          dUa: 'Очний прийом і подальший дистанційний супровід курсу до отримання результату.',
          dEn: 'An in-person appointment followed by remote supervision of the course until results are achieved.' }
      ]
    }]
  },

  /* ---------------------------------------------------------------- 02 */
  {
    id: 'aesthetic',
    num: '02',
    ua: 'Естетична косметологія',
    en: 'Aesthetic cosmetology',
    leadUa: 'Чистки, пілінги, карбокситерапія та доглядові протоколи на професійних лініях GLYMED+, Medik8 і RENEW.',
    leadEn: 'Cleansings, peels, carboxytherapy and care protocols on the professional GLYMED+, Medik8 and RENEW lines.',
    groups: [
      {
        ua: 'Чистка обличчя', en: 'Facial cleansing',
        items: [
          { ua: 'Атравматична чистка обличчя GLYMED+ (ультразвук + механічна)', en: 'Atraumatic facial cleansing GLYMED+ (ultrasound + manual)', price: 1700,
            dUa: 'Комбінована чистка: ультразвук знімає поверхневе забруднення, механічний етап опрацьовує щільні комедони. Без агресивного травмування шкіри.',
            dEn: 'A combined cleansing: ultrasound removes surface debris, the manual stage works on dense comedones — without aggressive trauma to the skin.' },
          { ua: 'Чистка для чутливої шкіри GLYMED+', en: 'Cleansing for sensitive skin GLYMED+', price: 2000,
            dUa: 'Протокол для реактивної шкіри та куперозу: мʼякі ензими, заспокійливі маски, мінімум механіки.',
            dEn: 'A protocol for reactive skin and couperose: gentle enzymes, soothing masks and minimal mechanical work.' },
          { ua: 'Чистка спини + пілінг GLYMED+', en: 'Back cleansing + peel GLYMED+', price: 2500,
            dUa: 'Робота із висипаннями на спині: чистка, кислотний пілінг і протизапальний фініш.',
            dEn: 'Work on back breakouts: cleansing, acid peel and an anti-inflammatory finish.' }
        ]
      },
      {
        ua: 'Пілінги', en: 'Peels',
        note: { ua: 'Курс: 4 кислотні пілінги + 1 у подарунок', en: 'Course offer: 4 acid peels + 1 free' },
        items: [
          { ua: 'Кислотний пілінг за типом шкіри GLYMED+', en: 'Acid peel by skin type GLYMED+', price: 1500,
            dUa: 'Склад кислот добирається під запит: постакне, пігмент, тьмяність, розширені пори. Курсом працює найкраще.',
            dEn: 'The acid blend is matched to your concern: post-acne, pigment, dullness or enlarged pores. Works best as a course.' },
          { ua: 'Пілінг Royal Peel', en: 'Royal Peel', price: 1400,
            dUa: 'Пілінг із вираженим освітлювальним ефектом і коротким періодом відновлення.',
            dEn: 'A peel with a pronounced brightening effect and a short recovery period.' }
        ]
      },
      {
        ua: 'Карбокситерапія', en: 'Carboxytherapy',
        items: [
          { ua: 'Medicare Intense Carboxy System', en: 'Medicare Intense Carboxy System', price: 2000,
            dUa: 'Неінвазивна карбокситерапія: CO₂ підсилює мікроциркуляцію, шкіра виглядає щільнішою вже після процедури.',
            dEn: 'Non-invasive carboxytherapy: CO₂ boosts microcirculation and skin looks denser right after the session.' },
          { ua: 'Medicare Probiotic Carboxy System', en: 'Medicare Probiotic Carboxy System', price: 1700,
            dUa: 'Версія з пробіотичним комплексом — для шкіри з порушеним барʼєром і схильністю до подразнень.',
            dEn: 'The probiotic version — for skin with a compromised barrier and a tendency to irritation.' }
        ]
      },
      {
        ua: 'Догляди', en: 'Care rituals',
        items: [
          { ua: 'Зволоження RENEW', en: 'RENEW hydration', price: 1000,
            dUa: 'Базовий зволожувальний догляд: відновлює комфорт шкіри після перельотів, морозу чи агресивних процедур.',
            dEn: 'A base hydrating ritual: restores comfort after flights, cold weather or aggressive treatments.' },
          { ua: 'Зволоження RENEW + пілінг під очі', en: 'RENEW hydration + eye-area peel', price: 1500,
            dUa: 'Догляд для обличчя з окремою делікатною роботою по періорбітальній зоні.',
            dEn: 'A facial ritual with separate, delicate work on the periorbital area.' },
          { ua: 'RENEW зволоження під очі', en: 'RENEW eye hydration', price: 1000,
            dUa: 'Локальний протокол для зони навколо очей: набряки, сухість, дрібні зморшки.',
            dEn: 'A local protocol for the eye area: puffiness, dryness and fine lines.' },
          { ua: 'Мікрострумова терапія', en: 'Microcurrent therapy', price: 1000,
            dUa: 'Слабкі імпульси тонізують мімічні мʼязи та знімають набряк — помітний лімфодренажний ефект.',
            dEn: 'Low-level impulses tone the facial muscles and reduce puffiness — a noticeable lymphatic effect.' },
          { ua: 'Medik8', en: 'Medik8', price: 2500,
            dUa: 'Професійний протокол Medik8 із високими концентраціями активів — для щільної, вікової чи пігментованої шкіри.',
            dEn: 'A professional Medik8 protocol with high active concentrations — for dense, mature or pigmented skin.' },
          { ua: 'Ферментативний ліфтинг', en: 'Enzyme lifting', price: 2500,
            dUa: 'Ензими мʼяко знімають кератин, після чого шкіра краще приймає активи. Виражений ефект свіжості.',
            dEn: 'Enzymes gently remove keratin so the skin absorbs actives better. A pronounced fresh-skin effect.' }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 03 */
  {
    id: 'injection',
    num: '03',
    ua: 'Ін\'єкційна косметологія',
    en: 'Injectable cosmetology',
    leadUa: 'Біоревіталізація й мезотерапія. Три тарифи на одну процедуру: базовий прайс клініки, прайс топ-косметолога та прайс головного косметолога.',
    leadEn: 'Biorevitalisation and mesotherapy. Three rates for the same procedure: the clinic base rate, the top-cosmetologist rate and the chief-cosmetologist rate.',
    tiered: true,
    groups: [
      {
        ua: 'Біоревіталізація', en: 'Biorevitalisation',
        items: [
          { ua: 'Jalupro', en: 'Jalupro', price: { base: 3700, olha: 4000, marta: 5000 },
            dUa: 'Амінокислотний коктейль із гіалуроновою кислотою. Працює з тьмяністю, зневодненням і дрібними зморшками.',
            dEn: 'An amino-acid cocktail with hyaluronic acid. Targets dullness, dehydration and fine lines.' },
          { ua: 'Jalupro HMW', en: 'Jalupro HMW', price: { base: 4700, olha: 5000, marta: 5500 },
            dUa: 'Версія з високомолекулярною гіалуроновою кислотою — щільніше наповнення й довший ефект.',
            dEn: 'The high-molecular-weight version — denser filling and a longer-lasting effect.' },
          { ua: 'Jalupro Super Hydro', en: 'Jalupro Super Hydro', price: { base: 5700, olha: 6000, marta: 6500 },
            dUa: 'Найнасиченіший протокол лінійки для вираженого зневоднення та втрати тонусу.',
            dEn: 'The most concentrated protocol in the line, for marked dehydration and loss of tone.' },
          { ua: 'Rejuran HB Plus', en: 'Rejuran HB Plus', price: { olha: 4800, marta: 5300 },
            dUa: 'Полінуклеотиди лососевого походження: відновлення після акне, підвищення щільності шкіри.',
            dEn: 'Salmon-derived polynucleotides: recovery after acne and improved skin density.' },
          { ua: 'Restylane Vital Light', en: 'Restylane Vital Light', price: { base: 4000, olha: 4200, marta: 4700 },
            dUa: 'Класичний скінбустер для тонкої шкіри — обличчя, шия, зона декольте.',
            dEn: 'A classic skinbooster for thin skin — face, neck and décolleté.' },
          { ua: 'Revok 50', en: 'Revok 50', price: { olha: 5000, marta: 5500 },
            dUa: 'Стабілізована гіалуронова кислота високої концентрації для зрілої шкіри.',
            dEn: 'High-concentration stabilised hyaluronic acid for mature skin.' },
          { ua: 'Plinest', en: 'Plinest', price: { olha: 4500, marta: 5000 },
            dUa: 'Полінуклеотиди для регенерації: працює з якістю шкіри, а не з обʼємом.',
            dEn: 'Polynucleotides for regeneration: works on skin quality rather than volume.' },
          { ua: 'Saypha Rich', en: 'Saypha Rich', price: { base: 3200, olha: 3500, marta: 4000 },
            dUa: 'Гіалуронова кислота з гліцеролом — глибоке зволоження без ефекту наповнення.',
            dEn: 'Hyaluronic acid with glycerol — deep hydration with no filling effect.' },
          { ua: 'Vitaran I (1 мл)', en: 'Vitaran I (1 ml)', price: { base: 3600, olha: 3900, marta: 4400 },
            dUa: 'Полінуклеотидний препарат першого рівня — старт курсу відновлення.',
            dEn: 'A first-level polynucleotide product — the start of a recovery course.' },
          { ua: 'Vitaran II (2 мл)', en: 'Vitaran II (2 ml)', price: { base: 4700, olha: 5000, marta: 5500 },
            dUa: 'Подвійний обʼєм і вища концентрація для щільніших зон і вираженіших змін.',
            dEn: 'Double volume and higher concentration for denser areas and more marked changes.' },
          { ua: 'Vitaran Whitening & Anti-Aging', en: 'Vitaran Whitening & Anti-Aging', price: { base: 4200, olha: 5000, marta: 5500 },
            dUa: 'Протокол проти пігментації з одночасним антивіковим компонентом.',
            dEn: 'An anti-pigmentation protocol with a simultaneous anti-ageing component.' },
          { ua: 'Vitaran Tox Eye & Face Collagen', en: 'Vitaran Tox Eye & Face Collagen', price: { base: 5200, olha: 5500, marta: 6000 },
            dUa: 'Комбінація колагенового стимулятора та мʼякого розслаблення мімічних мʼязів.',
            dEn: 'A combination of a collagen stimulator and gentle relaxation of the mimic muscles.' },
          { ua: 'Electri', en: 'Electri', price: { base: 2900, olha: 3200, marta: 3700 },
            dUa: 'Ліфтинговий коктейль для швидкого «зібраного» вигляду обличчя.',
            dEn: 'A lifting cocktail for a quick, more defined look.' },
          { ua: 'RRS (R)HA', en: 'RRS (R)HA', price: { olha: 5500, marta: 6000 },
            dUa: 'Мультикомпонентний препарат: гіалуронова кислота, вітаміни, амінокислоти й антиоксиданти.',
            dEn: 'A multi-component product: hyaluronic acid, vitamins, amino acids and antioxidants.' },
          { ua: 'Jalupro Young Eye (під очі)', en: 'Jalupro Young Eye (under-eye)', price: { base: 5000, olha: 5200, marta: 5700 },
            dUa: 'Спеціалізований препарат для періорбітальної зони: тонка шкіра, темні кола, дрібна сітка зморшок.',
            dEn: 'A dedicated product for the periorbital area: thin skin, dark circles and fine lines.' },
          { ua: 'Neauvia Hydra', en: 'Neauvia Hydra', price: { base: 4200, olha: 4500, marta: 5000 },
            dUa: 'Гіалуронова кислота на PEG-технології — рівномірний розподіл і передбачуваний результат.',
            dEn: 'PEG-technology hyaluronic acid — even distribution and a predictable result.' },
          { ua: '+ фракційна біоревіталізація Дермапеном', en: '+ fractional biorevitalisation with Dermapen', price: 500, addon: true,
            dUa: 'Доповнення до будь-якого препарату: мікроголки створюють канали, через які актив розподіляється рівномірніше.',
            dEn: 'An add-on to any product: micro-needles create channels so the active spreads more evenly.' },
          { ua: '+ канюля', en: '+ cannula', price: 500, addon: true, master: 'marta',
            dUa: 'Введення тупокінцевою канюлею замість голки — менше проколів, менший ризик гематом.',
            dEn: 'Delivery with a blunt-tip cannula instead of a needle — fewer punctures and less bruising risk.' }
        ]
      },
      {
        ua: 'Мезотерапія', en: 'Mesotherapy',
        items: [
          { ua: 'Мезотерапія шкіри голови', en: 'Scalp mesotherapy', price: 1700,
            dUa: 'Ін\'єкції у волосисту частину голови для укріплення фолікулів — базова процедура трихологічного курсу.',
            dEn: 'Injections into the scalp to strengthen follicles — the base procedure of a trichology course.' },
          { ua: 'Ліполітик для обличчя', en: 'Facial lipolytic', price: '1700–2000',
            dUa: 'Локальна робота з жировими пакетами обличчя: друге підборіддя, брилі. Курсом 3–5 процедур.',
            dEn: 'Local work on facial fat pads: double chin and jowls. A course of 3–5 sessions.' },
          { ua: 'Ліполітик для тіла', en: 'Body lipolytic', price: 2500,
            dUa: 'Ін\'єкційна корекція локальних жирових відкладень на тілі.',
            dEn: 'Injectable correction of localised fat deposits on the body.' },
          { ua: '+ фракційна мезотерапія Дермапеном', en: '+ fractional mesotherapy with Dermapen', price: 500, addon: true,
            dUa: 'Апаратне доповнення до мезотерапії для рівномірнішого розподілу коктейлю.',
            dEn: 'A device add-on to mesotherapy for a more even distribution of the cocktail.' }
        ]
      },
      {
        ua: 'Бланшинг і плазмоліфтинг', en: 'Blanching & plasma lifting',
        items: [
          { ua: 'Бланшинг Neuramis Light 1 мл', en: 'Blanching Neuramis Light 1 ml', price: { olha: 4500, marta: 5000 },
            dUa: 'Поверхневе введення філера у дрібні зморшки — розгладжує «кисетні» зморшки й носогубну складку.',
            dEn: 'Superficial filler placement into fine lines — smooths perioral lines and the nasolabial fold.' },
          { ua: 'Бланшинг CG Styler', en: 'Blanching CG Styler', price: { olha: 5000, marta: 5000 },
            dUa: 'Препарат з підвищеною пластичністю для роботи з тонкими лініями обличчя.',
            dEn: 'A highly plastic product for work on fine facial lines.' },
          { ua: 'Плазмоліфтинг Arthrex (1 пробірка)', en: 'Arthrex plasma lifting (1 tube)', price: 4500, master: 'olha',
            dUa: 'Власна плазма пацієнта після центрифугування вводиться у шкіру — стимулює регенерацію без сторонніх речовин.',
            dEn: 'The patient\'s own centrifuged plasma is injected into the skin — regeneration stimulated with no foreign substances.' }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 04 */
  {
    id: 'contour',
    num: '04',
    ua: 'Контурна пластика та ботулінотерапія',
    en: 'Contouring & botulinum therapy',
    leadUa: 'Робота з обʼємом і мімікою. Процедури виконують Марта Галіщук та Ольга Добровоцька — тарифи вказано окремо.',
    leadEn: 'Work with volume and facial expression. Performed by Marta Halishchuk and Olha Dobrovotska — rates are listed separately.',
    tiered: true,
    groups: [
      {
        ua: 'Контурна пластика губ', en: 'Lip contouring',
        items: [
          { ua: 'Restylane Kysse 1 мл', en: 'Restylane Kysse 1 ml', price: { olha: 6500, marta: 7000 },
            dUa: 'Філер, розроблений спеціально для губ: зберігає природну рухливість і міміку.',
            dEn: 'A filler designed specifically for lips: it preserves natural movement and expression.' },
          { ua: 'Saypha Filler', en: 'Saypha Filler', price: { olha: 5000, marta: 5500 },
            dUa: 'Універсальний філер середньої щільності для корекції форми та обʼєму.',
            dEn: 'A universal medium-density filler for shape and volume correction.' },
          { ua: 'Saypha Lips', en: 'Saypha Lips', price: { olha: 5000, marta: 5500 },
            dUa: 'Мʼякша формула лінійки, орієнтована на природний результат.',
            dEn: 'The softer formula in the line, aimed at a natural result.' },
          { ua: 'Гіалуронідаза / ліпаза — розчинення філера (1 флакон)', en: 'Hyaluronidase / lipase — filler dissolution (1 vial)', price: 1500,
            dUa: 'Ферментне розчинення раніше введеного філера: корекція надлишку обʼєму або міграції.',
            dEn: 'Enzymatic dissolution of previously placed filler: correcting excess volume or migration.' }
        ]
      },
      {
        ua: 'Контурна пластика обличчя', en: 'Face contouring', master: 'marta',
        items: [
          { ua: 'Neuramis Volume 1 мл', en: 'Neuramis Volume 1 ml', price: { marta: 4900 },
            dUa: 'Щільний філер для відновлення обʼєму вилиць і підборіддя.',
            dEn: 'A dense filler for restoring cheekbone and chin volume.' },
          { ua: 'Restylane Lyft', en: 'Restylane Lyft', price: { marta: 7500 },
            dUa: 'Обʼємний філер для середньої третини обличчя — підтримує тканини у проєкції.',
            dEn: 'A volumising filler for the midface — it supports tissue projection.' },
          { ua: 'Restylane Defyne', en: 'Restylane Defyne', price: { marta: 7500 },
            dUa: 'Пластичний філер для глибоких складок зі збереженням природної міміки.',
            dEn: 'A flexible filler for deep folds that preserves natural expression.' },
          { ua: 'Restylane Skinboosters', en: 'Restylane Skinboosters', price: { marta: 3500 },
            dUa: 'Не про обʼєм, а про якість шкіри: рівність тону, пружність, зволоження.',
            dEn: 'Not about volume but about skin quality: even tone, firmness and hydration.' },
          { ua: 'Saypha Volume Plus', en: 'Saypha Volume Plus', price: { marta: 7000 },
            dUa: 'Високоеластичний філер для великих обʼємів і чіткої лінії щелепи.',
            dEn: 'A highly elastic filler for larger volumes and a defined jawline.' }
        ]
      },
      {
        ua: 'Векторний ліфтинг', en: 'Vector lifting', master: 'marta',
        items: [
          { ua: 'Aesplla — полімолочна кислота', en: 'Aesplla — poly-L-lactic acid', price: { marta: 15000 },
            dUa: 'Стимулятор колагену: результат розкривається поступово протягом кількох місяців і тримається довго.',
            dEn: 'A collagen stimulator: the result develops gradually over several months and lasts a long time.' },
          { ua: 'JuveLook — полімолочна кислота', en: 'JuveLook — poly-L-lactic acid', price: { marta: 15000 },
            dUa: 'Полімолочна кислота у мікросферах з гіалуроновою кислотою — щільність шкіри плюс мʼякий обʼєм.',
            dEn: 'Poly-L-lactic acid microspheres with hyaluronic acid — skin density plus gentle volume.' },
          { ua: 'Radiesse — 1 шприц', en: 'Radiesse — 1 syringe', price: { marta: 10000 },
            dUa: 'Кальцію гідроксіапатит: миттєвий ліфтинг і подальша стимуляція власного колагену.',
            dEn: 'Calcium hydroxyapatite: an immediate lift and subsequent stimulation of your own collagen.' },
          { ua: 'Radiesse — 2 шприци', en: 'Radiesse — 2 syringes', price: { marta: 18000 },
            dUa: 'Обʼєм для роботи з двома зонами за один візит.',
            dEn: 'Enough volume to treat two areas in a single visit.' },
          { ua: 'Radiesse — 3 шприци', en: 'Radiesse — 3 syringes', price: { marta: 27000 },
            dUa: 'Повний протокол ліфтингу обличчя й шиї за одну сесію.',
            dEn: 'A full face-and-neck lifting protocol in one session.' },
          { ua: 'Полімолочна кислота під очі', en: 'Poly-L-lactic acid under the eyes', price: { marta: 7000 },
            dUa: 'Делікатна робота з періорбітальною зоною: щільність шкіри без ефекту наповнення.',
            dEn: 'Delicate work on the periorbital area: skin density without a filling effect.' }
        ]
      },
      {
        ua: 'Ботулінотерапія', en: 'Botulinum therapy',
        items: [
          { ua: 'Чоло + міжбрівʼя', en: 'Forehead + glabella', price: { olha: 5000, marta: 6000 },
            dUa: 'Класична зона: розслаблює горизонтальні зморшки чола та вертикальні між бровами.',
            dEn: 'The classic area: relaxes horizontal forehead lines and vertical glabellar lines.' },
          { ua: 'Чоло + міжбрівʼя + очі', en: 'Forehead + glabella + eyes', price: { olha: 7000, marta: 8000 },
            dUa: 'Верхня третина обличчя цілком — найзбалансованіший варіант за результатом.',
            dEn: 'The entire upper third of the face — the most balanced option in terms of result.' },
          { ua: 'Міжбрівʼя', en: 'Glabella', price: { olha: 3000, marta: 3500 },
            dUa: 'Локальна корекція «злої» вертикальної складки між бровами.',
            dEn: 'Local correction of the vertical frown line between the brows.' },
          { ua: 'Гусячі лапки', en: 'Crow\'s feet', price: { olha: 3000, marta: 3500 },
            dUa: 'Промені зморшок у зовнішніх кутиках очей.',
            dEn: 'The radiating lines at the outer corners of the eyes.' },
          { ua: 'Зморшки кролика', en: 'Bunny lines', price: { olha: 1600, marta: 2100 },
            dUa: 'Дрібні складки на спинці носа, що зʼявляються при усмішці.',
            dEn: 'Fine creases on the bridge of the nose that appear when smiling.' },
          { ua: 'Ясенева посмішка', en: 'Gummy smile', price: { olha: 1000, marta: 1500 },
            dUa: 'Корекція надмірного підняття верхньої губи під час усмішки.',
            dEn: 'Correction of excessive upper-lip elevation when smiling.' },
          { ua: 'Підборіддя (розслаблення)', en: 'Chin (relaxation)', price: { olha: 1000, marta: 1500 },
            dUa: 'Прибирає ефект «бруківки» на підборідді.',
            dEn: 'Removes the dimpled, "cobblestone" texture on the chin.' },
          { ua: 'Кисетні зморшки', en: 'Perioral lines', price: { olha: 1000, marta: 1300 },
            dUa: 'Вертикальні зморшки навколо губ — мʼяке розслаблення колового мʼяза рота.',
            dEn: 'Vertical lines around the lips — gentle relaxation of the orbicularis oris.' },
          { ua: 'Очі', en: 'Eyes', price: { olha: 3000, marta: 3500 },
            dUa: 'Окрема робота з періорбітальною мімікою.',
            dEn: 'Focused work on periorbital expression lines.' },
          { ua: 'Гіпергідроз', en: 'Hyperhidrosis', price: { olha: 9000, marta: 10000 },
            dUa: 'Блокування надмірного потовиділення в зоні пахв. Ефект тримається 6–9 місяців.',
            dEn: 'Blocks excessive underarm sweating. The effect lasts 6–9 months.' },
          { ua: 'Full Face', en: 'Full Face', price: { olha: 13000, marta: 14000 },
            dUa: 'Комплексна робота з мімікою всього обличчя за один протокол.',
            dEn: 'Comprehensive work on the expression of the whole face in a single protocol.' }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 05 */
  {
    id: 'laser',
    num: '05',
    ua: 'Лазерна епіляція DIOLAZE',
    en: 'DIOLAZE laser hair removal',
    leadUa: 'Діодний лазер InMode з системою охолодження. Ціни вказано у форматі жіноча / чоловіча процедура. На перший візит діє −15%.',
    leadEn: 'InMode diode laser with integrated cooling. Prices are shown as female / male. First visit is −15%.',
    groups: [
      {
        ua: 'Зони', en: 'Areas', layout: 'table',
        items: [
          { ua: 'Чоло', en: 'Forehead', price: 350 },
          { ua: 'Шия', en: 'Neck', price: '400 / 600' },
          { ua: 'Вуха', en: 'Ears', price: 350 },
          { ua: 'Верхня губа', en: 'Upper lip', price: '300 / 400' },
          { ua: 'Підборіддя', en: 'Chin', price: '400 / 500' },
          { ua: 'Вилиці', en: 'Cheekbones', price: '300 / 400' },
          { ua: 'Щоки', en: 'Cheeks', price: '350 / 450' },
          { ua: 'Лінія живота', en: 'Abdominal line', price: '350 / 450' },
          { ua: 'Живіт', en: 'Abdomen', price: '600 / 800' },
          { ua: 'Зона декольте', en: 'Décolleté', price: 400 },
          { ua: 'Груди', en: 'Chest', price: '450 / 600' },
          { ua: 'Пахви', en: 'Underarms', price: '450 / 550' },
          { ua: 'Руки з ліктями', en: 'Arms incl. elbows', price: 600 },
          { ua: 'Руки повністю', en: 'Full arms', price: '800 / 950' },
          { ua: 'Спина', en: 'Back', price: '1300 / 1500' },
          { ua: 'Пальці', en: 'Fingers', price: '250 / 350' },
          { ua: 'Ноги до колін', en: 'Legs below the knee', price: 700 },
          { ua: 'Ноги з колінами', en: 'Legs incl. knees', price: '1000 / 1400' },
          { ua: 'Ноги повністю', en: 'Full legs', price: '1700 / 2200' },
          { ua: 'Коліна', en: 'Knees', price: '300 / 400' },
          { ua: 'Внутрішня частина стегна', en: 'Inner thigh', price: '700 / 900' },
          { ua: 'Бікіні по лінію трусиків', en: 'Bikini line', price: 450 },
          { ua: 'Бікіні неглибоке', en: 'Shallow bikini', price: 650 },
          { ua: 'Бікіні глибоке', en: 'Deep bikini', price: 950 },
          { ua: 'Лобок', en: 'Pubic area', price: 400 },
          { ua: 'Ареоли', en: 'Areolas', price: '300 / 400' },
          { ua: 'Міжсіднична складка', en: 'Intergluteal area', price: 350 },
          { ua: 'Сідниці', en: 'Buttocks', price: 800 },
          { ua: 'Плечі', en: 'Shoulders', price: '550 / 750' }
        ]
      },
      {
        ua: 'Сети — вигідніше за окремі зони', en: 'Sets — cheaper than separate areas',
        items: [
          { ua: 'Ноги повністю + пахви + бікіні глибоке', en: 'Full legs + underarms + deep bikini', price: 2700, was: 3100,
            dUa: 'Найпопулярніший сет: закриває основні зони за один візит.',
            dEn: 'The most popular set: it covers the main areas in a single visit.' },
          { ua: 'Ноги з колінами + пахви + бікіні глибоке', en: 'Legs incl. knees + underarms + deep bikini', price: 2000, was: 2400,
            dUa: 'Компактніша версія попереднього сету.',
            dEn: 'A more compact version of the previous set.' },
          { ua: 'Верхня губа + підборіддя + пахви', en: 'Upper lip + chin + underarms', price: 950, was: 1150,
            dUa: 'Сет для обличчя та пахв — швидко й недорого.',
            dEn: 'A face-and-underarm set — quick and affordable.' },
          { ua: 'Руки повністю + пахви', en: 'Full arms + underarms', price: 950, was: 1250,
            dUa: 'Для тих, хто працює лише з верхньою частиною тіла.',
            dEn: 'For those treating the upper body only.' },
          { ua: 'Все тіло', en: 'Full body', price: 4000, was: 4600,
            dUa: 'Ноги повністю + бікіні глибоке + пахви + руки повністю + верхня губа + підборіддя.',
            dEn: 'Full legs + deep bikini + underarms + full arms + upper lip + chin.' }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 06 */
  {
    id: 'lumecca',
    num: '06',
    ua: 'LUMECCA та RF-ліфтинг',
    en: 'LUMECCA & RF lifting',
    leadUa: 'Фотоомолодження, робота з судинами, пігментацією та акне — і мікроголковий RF-ліфтинг для ущільнення шкіри.',
    leadEn: 'Photorejuvenation, vascular and pigment work, acne treatment — plus microneedle RF lifting for skin tightening.',
    groups: [
      {
        ua: 'LUMECCA — фотоомолодження', en: 'LUMECCA — photorejuvenation',
        note: { ua: 'Курс: 3 процедури на все обличчя + 1 у подарунок', en: 'Course offer: 3 full-face sessions + 1 free' },
        items: [
          { ua: 'Обличчя', en: 'Face', price: 2500,
            dUa: 'Інтенсивне імпульсне світло вирівнює тон, освітлює пігментні плями та зменшує почервоніння. Курс — 3–4 процедури.',
            dEn: 'Intense pulsed light evens out tone, lightens pigment spots and reduces redness. A course of 3–4 sessions.' },
          { ua: 'Обличчя + шия', en: 'Face + neck', price: 4000,
            dUa: 'Розширений протокол — шия часто видає вік раніше за обличчя.',
            dEn: 'An extended protocol — the neck often shows age before the face does.' },
          { ua: 'Шия', en: 'Neck', price: 2500,
            dUa: 'Локальна робота з пігментом і судинною сіткою на шиї.',
            dEn: 'Local work on pigment and vascular network on the neck.' },
          { ua: 'Щічки', en: 'Cheeks', price: 1500,
            dUa: 'Зона, де найчастіше зʼявляється купероз і рум\'янець.',
            dEn: 'The area where couperose and flushing appear most often.' },
          { ua: 'Ділянка 3×3 см', en: 'Area 3×3 cm', price: '300–500',
            dUa: 'Точкова робота з окремою судиною чи пігментною плямою.',
            dEn: 'Spot treatment of a single vessel or pigment mark.' },
          { ua: 'Декольте', en: 'Décolleté', price: 2500,
            dUa: 'Зона, найбільш чутлива до сонця — тут пігмент накопичується швидше.',
            dEn: 'The area most exposed to the sun — pigment accumulates here faster.' },
          { ua: 'Кисті рук', en: 'Hands', price: 1200,
            dUa: 'Освітлення вікових плям на тильній стороні кистей.',
            dEn: 'Lightening of age spots on the back of the hands.' },
          { ua: 'Ніс', en: 'Nose', price: 700,
            dUa: 'Робота з судинними зірочками на крилах носа.',
            dEn: 'Treatment of spider veins on the sides of the nose.' },
          { ua: 'Підборіддя', en: 'Chin', price: 700,
            dUa: 'Локальний протокол для зони підборіддя.',
            dEn: 'A local protocol for the chin area.' },
          { ua: 'Чоло', en: 'Forehead', price: 700,
            dUa: 'Локальний протокол для зони чола.',
            dEn: 'A local protocol for the forehead.' }
        ]
      },
      {
        ua: 'Мікроголковий RF-ліфтинг', en: 'Microneedle RF lifting', layout: 'table',
        items: [
          { ua: 'Обличчя', en: 'Face', price: 6500 },
          { ua: 'Шия', en: 'Neck', price: 4000 },
          { ua: 'Обличчя + шия', en: 'Face + neck', price: 8000 },
          { ua: 'Декольте', en: 'Décolleté', price: 5500 },
          { ua: 'Шия + декольте', en: 'Neck + décolleté', price: 8000 },
          { ua: 'Обличчя + шия + декольте', en: 'Face + neck + décolleté', price: 12000 },
          { ua: 'Зона очей', en: 'Eye area', price: 5500 },
          { ua: 'Нижня третина обличчя', en: 'Lower third of the face', price: 6000 },
          { ua: 'Кисті рук', en: 'Hands', price: 4500 },
          { ua: 'Руки', en: 'Arms', price: 7000 },
          { ua: 'Живіт', en: 'Abdomen', price: 7000 },
          { ua: 'Коліна', en: 'Knees', price: 5000 },
          { ua: 'Рубці / шрами / розтяжки', en: 'Scars / stretch marks', price: 4000 },
          { ua: 'Стегна', en: 'Thighs', price: 12000 },
          { ua: 'Сідниці', en: 'Buttocks', price: 12000 }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 07 */
  {
    id: 'body',
    num: '07',
    ua: 'Естетика тіла',
    en: 'Body aesthetics',
    leadUa: 'Ручний масаж, апаратна корекція фігури та ендосфера. На курси масажу діє прогресивна знижка: 5 сеансів −5%, 10 сеансів −10%, 15 сеансів −15%.',
    leadEn: 'Manual massage, device body contouring and endosphere. Massage courses come with a progressive discount: 5 sessions −5%, 10 sessions −10%, 15 sessions −15%.',
    groups: [
      {
        ua: 'Масаж', en: 'Massage', layout: 'table',
        items: [
          { ua: 'Релакс-масаж · 90 хв', en: 'Relaxing massage · 90 min', price: 800 },
          { ua: 'Антицелюлітний (ручний) · 80 хв', en: 'Anti-cellulite (manual) · 80 min', price: 900 },
          { ua: 'Антицелюлітний (ручний) · 45 хв', en: 'Anti-cellulite (manual) · 45 min', price: 650 },
          { ua: 'Оздоровчий масаж спини · 40 хв', en: 'Therapeutic back massage · 40 min', price: 500 },
          { ua: 'Лімфодренажний · 60 хв', en: 'Lymphatic drainage · 60 min', price: 650 },
          { ua: 'Лімфодренажний · 80 хв', en: 'Lymphatic drainage · 80 min', price: 800 },
          { ua: 'Класичний (спина + комірцева зона) · 30 хв', en: 'Classic (back + collar area) · 30 min', price: 400 },
          { ua: 'Загальний масаж · 90 хв', en: 'Full-body massage · 90 min', price: 800 },
          { ua: 'Загальний масаж · 60 хв', en: 'Full-body massage · 60 min', price: 650 },
          { ua: 'Масаж комірцевої зони · 30 хв', en: 'Collar-area massage · 30 min', price: 300 },
          { ua: 'Масаж ніг · 30 хв', en: 'Leg massage · 30 min', price: 300 },
          { ua: 'Масаж рук · 30 хв', en: 'Arm massage · 30 min', price: 300 },
          { ua: 'Масаж стоп · 20 хв', en: 'Foot massage · 20 min', price: 300 },
          { ua: 'Масаж голови · 15 хв', en: 'Head massage · 15 min', price: 200 }
        ]
      },
      {
        ua: 'Масаж обличчя', en: 'Facial massage',
        items: [
          { ua: 'Масаж обличчя, шиї та декольте · 60 хв', en: 'Face, neck and décolleté massage · 60 min', price: 1000,
            dUa: 'Класична техніка: покращує мікроциркуляцію, знімає набряк і напруження мімічних мʼязів.',
            dEn: 'A classic technique: improves microcirculation, reduces puffiness and releases tension in the mimic muscles.' },
          { ua: 'Міофасціальний масаж обличчя, шиї та декольте · 60 хв', en: 'Myofascial face, neck and décolleté massage · 60 min', price: 1500,
            dUa: 'Глибша робота з фасціями та мʼязовими затисками — виражений ефект підтягування овалу.',
            dEn: 'Deeper work with fascia and muscle tension — a pronounced tightening effect on the facial contour.' }
        ]
      },
      {
        ua: 'Корекція фігури', en: 'Body contouring',
        items: [
          { ua: 'Апаратний масаж VelaShape — одна зона · 30 хв', en: 'VelaShape device massage — one area · 30 min', price: 450,
            dUa: 'Вакуум, ролики та інфрачервоне світло в одній насадці. При оплаті 6 процедур — знижка 5%.',
            dEn: 'Vacuum, rollers and infrared in one handpiece. Pay for 6 sessions — 5% off.' },
          { ua: 'Апаратний масаж VelaShape — дві зони · 60 хв', en: 'VelaShape device massage — two areas · 60 min', price: 700,
            dUa: 'Розширений сеанс на дві зони. При оплаті 10 процедур — знижка 10%.',
            dEn: 'An extended session covering two areas. Pay for 10 sessions — 10% off.' },
          { ua: 'Пресотерапія', en: 'Pressotherapy', price: 400,
            dUa: 'Апаратний лімфодренаж у костюмі з компресійними камерами — знімає набряк і відчуття важкості в ногах.',
            dEn: 'Device lymphatic drainage in a compression suit — relieves swelling and heaviness in the legs.' }
        ]
      },
      {
        ua: 'Ендосфера', en: 'Endosphere',
        items: [
          { ua: 'Масаж обличчя · 30 хв', en: 'Facial · 30 min', price: 1000,
            dUa: 'Компресійна мікровібрація для обличчя: лімфодренаж і тонус без ін\'єкцій. Курс 10 процедур — 9 000 грн.',
            dEn: 'Compressive micro-vibration for the face: drainage and tone with no injections. A 10-session course — UAH 9,000.' },
          { ua: 'Масаж тіла · 50 хв', en: 'Body · 50 min', price: 1200,
            dUa: 'Робота з целюлітом і набряками. Курс 10 процедур — 10 000 грн.',
            dEn: 'Work on cellulite and swelling. A 10-session course — UAH 10,000.' },
          { ua: 'Масаж тіла · 80 хв', en: 'Body · 80 min', price: 1600,
            dUa: 'Розширений сеанс на все тіло.',
            dEn: 'An extended full-body session.' }
        ]
      },
      {
        ua: 'IV-терапія · крапельниці', en: 'IV therapy · drips',
        items: [
          { ua: 'Детокс', en: 'Detox', price: 1500,
            dUa: 'Інфузійний протокол для підтримки організму після навантажень. Призначається після огляду лікаря.',
            dEn: 'An infusion protocol supporting the body after strain. Prescribed after a doctor\'s examination.' },
          { ua: 'Енергія', en: 'Energy', price: 1500,
            dUa: 'Вітамінно-мінеральний коктейль при виснаженні та хронічній втомі.',
            dEn: 'A vitamin and mineral cocktail for exhaustion and chronic fatigue.' },
          { ua: 'Залізо', en: 'Iron', price: 4200,
            dUa: 'Внутрішньовенне відновлення рівня заліза. Виконується виключно за результатами аналізів.',
            dEn: 'Intravenous iron replenishment. Performed strictly on the basis of lab results.' },
          { ua: 'Клітинне перезавантаження', en: 'Cellular reset', price: 1800,
            dUa: 'Антиоксидантний протокол для підтримки шкіри та загального тонусу.',
            dEn: 'An antioxidant protocol supporting the skin and overall tone.' }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 08 */
  {
    id: 'hair',
    num: '08',
    ua: 'Догляд за волоссям і трихологія',
    en: 'Hair care & trichology',
    leadUa: 'Салонні протоколи на лініях MEDAVITA, BIACRE та NEVITALY. Ціна залежить від довжини й густини волосся.',
    leadEn: 'Salon protocols on the MEDAVITA, BIACRE and NEVITALY lines. The price depends on hair length and density.',
    groups: [
      {
        ua: 'MEDAVITA', en: 'MEDAVITA',
        items: [
          { ua: 'Процедура проти випадіння', en: 'Anti-hair-loss treatment', price: '1500–2000',
            dUa: 'Курсовий протокол зі стимуляцією фолікулів. Найкраще працює у парі з мезотерапією шкіри голови.',
            dEn: 'A course protocol stimulating the follicles. It works best paired with scalp mesotherapy.' },
          { ua: 'Процедура проти лупи (себорейний дерматит, псоріаз)', en: 'Anti-dandruff treatment (seborrhoeic dermatitis, psoriasis)', price: '1500–2000',
            dUa: 'Протокол для шкіри голови із порушеним станом — знімає лущення та свербіж.',
            dEn: 'A protocol for a compromised scalp — it relieves flaking and itching.' },
          { ua: 'Відновлення волосся', en: 'Hair restoration', price: '1500–2000',
            dUa: 'Реконструкція структури після освітлення, хімічних процедур і термічних пошкоджень.',
            dEn: 'Structural reconstruction after bleaching, chemical services and heat damage.' },
          { ua: 'Детокс-очищення шкіри голови та волосся', en: 'Scalp and hair detox', price: '1500–2000',
            dUa: 'Глибоке очищення від силіконів і продуктів стайлінгу — «нульова точка» перед курсом.',
            dEn: 'Deep cleansing from silicones and styling residue — a reset before starting a course.' },
          { ua: 'Реконструкція PRODIGE з амінокислотами', en: 'PRODIGE reconstruction with amino acids', price: '1500–2000',
            dUa: 'Амінокислотне заповнення пористої структури волосся.',
            dEn: 'Amino-acid filling of a porous hair structure.' },
          { ua: 'Ритуал ELISIER — відновлення та зміцнення', en: 'ELISIER ritual — repair and strengthening', price: '1500–2000',
            dUa: 'Комплексний догляд із масажем голови — і результат, і релакс.',
            dEn: 'A comprehensive ritual with a head massage — both result and relaxation.' }
        ]
      },
      {
        ua: 'BIACRE · NEVITALY', en: 'BIACRE · NEVITALY',
        items: [
          { ua: 'Відновлення волосся BIACRE', en: 'BIACRE hair restoration', price: '1300–1500',
            dUa: 'Бюджетніша альтернатива з відчутним ефектом уже після першої процедури.',
            dEn: 'A more affordable alternative with a noticeable effect after the first session.' },
          { ua: 'NEVITALY — перша довжина', en: 'NEVITALY — short length', price: 1500,
            dUa: 'Доглядовий протокол для шкіри голови та волосся до плечей.',
            dEn: 'A care protocol for scalp and hair down to the shoulders.' },
          { ua: 'NEVITALY — друга довжина', en: 'NEVITALY — medium length', price: 1700,
            dUa: 'Той самий протокол для середньої довжини.',
            dEn: 'The same protocol for medium-length hair.' },
          { ua: 'NEVITALY — третя довжина', en: 'NEVITALY — long length', price: 1900,
            dUa: 'Протокол для довгого й густого волосся.',
            dEn: 'A protocol for long, thick hair.' },
          { ua: 'NEVITALY для чоловіків', en: 'NEVITALY for men', price: 1000,
            dUa: 'Скорочений протокол із акцентом на шкіру голови.',
            dEn: 'A shortened protocol focused on the scalp.' }
        ]
      },
      {
        ua: 'Перукарські послуги', en: 'Hairdressing', layout: 'table',
        items: [
          { ua: 'Миття голови + укладка', en: 'Wash + blow-dry', price: '300–400' },
          { ua: 'Накрутка без миття', en: 'Curling without wash', price: 300 },
          { ua: 'Накрутка з миттям', en: 'Curling with wash', price: 400 },
          { ua: 'Стрижка кінців без миття', en: 'Ends trim without wash', price: 300 },
          { ua: 'Стрижка кінців з миттям', en: 'Ends trim with wash', price: 400 },
          { ua: 'Полірування волосся', en: 'Hair polishing', price: '300–400' },
          { ua: 'Лікувальна стрижка', en: 'Therapeutic haircut', price: '700–1200' }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------------- 09 */
  {
    id: 'beauty',
    num: '09',
    ua: 'Брови, вії, макіяж, педикюр',
    en: 'Brows, lashes, make-up, pedicure',
    leadUa: 'Щоденна естетика: бровіст, ламімейкер, візажист і апаратний педикюр — в одному місці з медичною косметологією.',
    leadEn: 'Everyday aesthetics: brow artist, lash lift specialist, make-up artist and device pedicure — in the same place as medical cosmetology.',
    groups: [
      {
        ua: 'Бровіст / ламімейкер', en: 'Brow artist / lash lift',
        items: [
          { ua: 'Ламінування + корекція брів', en: 'Brow lamination + shaping', price: 400,
            dUa: 'Волоски фіксуються у заданій формі на 4–6 тижнів, брова виглядає густішою.',
            dEn: 'The hairs are fixed in the chosen shape for 4–6 weeks and the brow looks fuller.' },
          { ua: 'Ламінування + фарбування + корекція брів', en: 'Brow lamination + tinting + shaping', price: 500,
            dUa: 'Повний комплекс: форма, фіксація та колір за один візит.',
            dEn: 'The full package: shape, fixation and colour in one visit.' },
          { ua: 'Корекція брів', en: 'Brow shaping', price: 150,
            dUa: 'Підтримка форми між основними процедурами.',
            dEn: 'Maintaining the shape between main appointments.' },
          { ua: 'Ламінування вій + фарбування', en: 'Lash lift + tinting', price: 550,
            dUa: 'Вигин і насичений колір без нарощування — вії виглядають довшими.',
            dEn: 'Curl and rich colour without extensions — lashes look longer.' },
          { ua: 'Ламінування вій', en: 'Lash lift', price: 450,
            dUa: 'Тільки вигин і живлення без фарбування.',
            dEn: 'Curl and nourishment only, without tinting.' },
          { ua: 'Фарбування брів', en: 'Brow tinting', price: 200,
            dUa: 'Фарба або хна на вибір.',
            dEn: 'Dye or henna, your choice.' },
          { ua: 'Фарбування вій', en: 'Lash tinting', price: 200,
            dUa: 'Насичує колір вій без щоденної туші.',
            dEn: 'Deepens lash colour without daily mascara.' },
          { ua: 'Надгубна зона — воскове видалення', en: 'Upper lip — waxing', price: 100,
            dUa: 'Швидка депіляція воском.',
            dEn: 'Quick wax depilation.' }
        ]
      },
      {
        ua: 'Макіяж', en: 'Make-up',
        items: [
          { ua: 'Нюдовий макіяж', en: 'Nude make-up', price: 600,
            dUa: 'Максимально природний результат — «як без макіяжу, тільки краще».',
            dEn: 'The most natural result — "no make-up, but better".' },
          { ua: 'Денний макіяж', en: 'Day make-up', price: 500,
            dUa: 'Легкий варіант для роботи, зйомки чи зустрічі.',
            dEn: 'A light option for work, a shoot or a meeting.' },
          { ua: 'Вечірній макіяж', en: 'Evening make-up', price: 700,
            dUa: 'Насиченіші акценти й стійкість на весь вечір.',
            dEn: 'Bolder accents and staying power for the whole evening.' },
          { ua: 'Поклейка вій', en: 'Strip lashes', price: '100–200',
            dUa: 'Пучки або стрічка як доповнення до макіяжу.',
            dEn: 'Clusters or a strip as an addition to your make-up.' }
        ]
      },
      {
        ua: 'Педикюр', en: 'Pedicure', layout: 'table',
        items: [
          { ua: 'Чистка пальчиків + покриття', en: 'Toes + polish', price: 600 },
          { ua: 'Чистка пальчиків + пʼятка + покриття', en: 'Toes + heels + polish', price: 700 },
          { ua: 'Чистка пальчиків + пʼятка без покриття', en: 'Toes + heels, no polish', price: 550 }
        ]
      }
    ]
  }
];

/* -------------------------------------------------------------------------
   Стрічка Instagram — фото завантажені з @gama_clinic
   ------------------------------------------------------------------------- */
const FEED = [
  { img: 'assets/instagram/ig-08.jpg', ua: 'Ферментотерапія GLYMED+ · до / після', en: 'GLYMED+ enzyme therapy · before / after' },
  { img: 'assets/instagram/ig-11.jpg', ua: 'Ламінування вій · після', en: 'Lash lamination · after' },
  { img: 'assets/instagram/ig-05.jpg', ua: 'Контурна пластика губ · після процедури', en: 'Lip contouring · after the procedure' },
  { img: 'assets/instagram/ig-01.jpg', ua: 'Прайс · косметологія', en: 'Price · cosmetology' },
  { img: 'assets/instagram/ig-02.jpg', ua: 'Прайс · апаратні методики', en: 'Price · device treatments' },
  { img: 'assets/instagram/ig-03.jpg', ua: 'Акційні сети процедур', en: 'Discounted treatment sets' },
  { img: 'assets/instagram/ig-07.jpg', ua: 'Догляд в кабінеті', en: 'In-clinic care' },
  { img: 'assets/instagram/ig-09.jpg', ua: 'У клініці', en: 'At the clinic' },
  { img: 'assets/instagram/ig-06.jpg', ua: 'MEDAVITA Solarich', en: 'MEDAVITA Solarich' },
  { img: 'assets/instagram/ig-12.jpg', ua: 'Colorescience SPF 50', en: 'Colorescience SPF 50' },
  { img: 'assets/instagram/ig-10.jpg', ua: 'З життя клініки', en: 'Life at the clinic' }
];
