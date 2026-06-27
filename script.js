// Load local storage edits before script loads
(function() {
  const localEdits = localStorage.getItem("asuka_lesson_data_edits");
  if (localEdits) {
    try {
      const parsed = JSON.parse(localEdits);
      window.lessonData = window.lessonData || {};
      for (const lessonNum in parsed) {
        if (parsed[lessonNum]) {
          window.lessonData[lessonNum] = parsed[lessonNum];
        }
      }
    } catch (e) {
      console.error("Gagal memuat data edit lokal:", e);
    }
  }
})();

const countryLanguageData = [
  {
    country: { japanese: "アメリカ", meaning: "Amerika Serikat" },
    person: { japanese: "アメリカ人", furigana: "アメリカじん" },
    language: { japanese: "英語", furigana: "えいご", meaning: "bahasa Inggris" },
  },
  {
    country: { japanese: "イギリス", meaning: "Inggris" },
    person: { japanese: "イギリス人", furigana: "イギリスじん" },
    language: { japanese: "英語", furigana: "えいご", meaning: "bahasa Inggris" },
  },
  {
    country: { japanese: "イタリア", meaning: "Italia" },
    person: { japanese: "イタリア人", furigana: "イタリアじん" },
    language: { japanese: "イタリア語", furigana: "イタリアご", meaning: "bahasa Italia" },
  },
  {
    country: { japanese: "イラン", meaning: "Iran" },
    person: { japanese: "イラン人", furigana: "イランじん" },
    language: { japanese: "ペルシア語", furigana: "ペルシアご", meaning: "bahasa Persia" },
  },
  {
    country: { japanese: "インド", meaning: "India" },
    person: { japanese: "インド人", furigana: "インドじん" },
    language: { japanese: "ヒンディー語", furigana: "ヒンディーご", meaning: "bahasa India" },
  },
  {
    country: { japanese: "インドネシア", meaning: "Indonesia" },
    person: { japanese: "インドネシア人", furigana: "インドネシアじん" },
    language: { japanese: "インドネシア語", furigana: "インドネシアご", meaning: "bahasa Indonesia" },
  },
  {
    country: { japanese: "エジプト", meaning: "Mesir" },
    person: { japanese: "エジプト人", furigana: "エジプトじん" },
    language: { japanese: "アラビア語", furigana: "アラビアご", meaning: "bahasa Arab" },
  },
  {
    country: { japanese: "オーストラリア", meaning: "Australia" },
    person: { japanese: "オーストラリア人", furigana: "オーストラリアじん" },
    language: { japanese: "英語", furigana: "えいご", meaning: "bahasa Inggris" },
  },
  {
    country: { japanese: "カナダ", meaning: "Kanada" },
    person: { japanese: "カナダ人", furigana: "カナダじん" },
    language: { japanese: "英語 / フランス語", furigana: "えいご / フランスご", meaning: "bahasa Inggris / bahasa Perancis" },
  },
  {
    country: { japanese: "韓国", furigana: "かんこく", meaning: "Korea Selatan" },
    person: { japanese: "韓国人", furigana: "かんこくじん" },
    language: { japanese: "韓国語", furigana: "かんこくご", meaning: "bahasa Korea" },
  },
  {
    country: { japanese: "サウジアラビア", meaning: "Arab Saudi" },
    person: { japanese: "サウジアラビア人", furigana: "サウジアラビアじん" },
    language: { japanese: "アラビア語", furigana: "アラビアご", meaning: "bahasa Arab" },
  },
  {
    country: { japanese: "シンガポール", meaning: "Singapura" },
    person: { japanese: "シンガポール人", furigana: "シンガポールじん" },
    language: { japanese: "英語", furigana: "えいご", meaning: "bahasa Inggris" },
  },
  {
    country: { japanese: "スペイン", meaning: "Spanyol" },
    person: { japanese: "スペイン人", furigana: "スペインじん" },
    language: { japanese: "スペイン語", furigana: "スペインご", meaning: "bahasa Spanyol" },
  },
  {
    country: { japanese: "タイ", meaning: "Thailand" },
    person: { japanese: "タイ人", furigana: "タイじん" },
    language: { japanese: "タイ語", furigana: "タイご", meaning: "bahasa Thailand" },
  },
  {
    country: { japanese: "中国", furigana: "ちゅうごく", meaning: "Cina" },
    person: { japanese: "中国人", furigana: "ちゅうごくじん" },
    language: { japanese: "中国語", furigana: "ちゅうごくご", meaning: "bahasa Cina" },
  },
  {
    country: { japanese: "ドイツ", meaning: "Jerman" },
    person: { japanese: "ドイツ人", furigana: "ドイツじん" },
    language: { japanese: "ドイツ語", furigana: "ドイツご", meaning: "bahasa Jerman" },
  },
  {
    country: { japanese: "日本", furigana: "にほん", meaning: "Jepang" },
    person: { japanese: "日本人", furigana: "にほんじん" },
    language: { japanese: "日本語", furigana: "にほんご", meaning: "bahasa Jepang" },
  },
  {
    country: { japanese: "フランス", meaning: "Perancis" },
    person: { japanese: "フランス人", furigana: "フランスじん" },
    language: { japanese: "フランス語", furigana: "フランスご", meaning: "bahasa Perancis" },
  },
  {
    country: { japanese: "フィリピン", meaning: "Filipina" },
    person: { japanese: "フィリピン人", furigana: "フィリピンじん" },
    language: { japanese: "フィリピノ語", furigana: "フィリピノご", meaning: "bahasa Filipina" },
  },
  {
    country: { japanese: "ブラジル", meaning: "Brazil" },
    person: { japanese: "ブラジル人", furigana: "ブラジルじん" },
    language: { japanese: "ポルトガル語", furigana: "ポルトガルご", meaning: "bahasa Portugis" },
  },
  {
    country: { japanese: "ベトナム", meaning: "Vietnam" },
    person: { japanese: "ベトナム人", furigana: "ベトナムじん" },
    language: { japanese: "ベトナム語", furigana: "ベトナムご", meaning: "bahasa Vietnam" },
  },
  {
    country: { japanese: "マレーシア", meaning: "Malaysia" },
    person: { japanese: "マレーシア人", furigana: "マレーシアじん" },
    language: { japanese: "マレーシア語", furigana: "マレーシアご", meaning: "bahasa Malaysia" },
  },
  {
    country: { japanese: "メキシコ", meaning: "Meksiko" },
    person: { japanese: "メキシコ人", furigana: "メキシコじん" },
    language: { japanese: "スペイン語", furigana: "スペインご", meaning: "bahasa Spanyol" },
  },
  {
    country: { japanese: "ロシア", meaning: "Rusia" },
    person: { japanese: "ロシア人", furigana: "ロシアじん" },
    language: { japanese: "ロシア語", furigana: "ロシアご", meaning: "bahasa Rusia" },
  },
];

const departmentStoreData = [
  {
    floor: "屋上",
    japanese: "遊園地",
    furigana: "ゆうえんち",
    meaning: "tempat hiburan",
    items: "area bermain, wahana kecil",
  },
  {
    floor: "8階",
    japanese: "レストラン・催し物会場",
    furigana: "レストラン・もよおしものかいじょう",
    meaning: "restoran, tempat pertunjukan",
    items: "makan, acara, pameran",
  },
  {
    floor: "7階",
    japanese: "時計・眼鏡",
    furigana: "とけい・めがね",
    meaning: "jam, kaca mata",
    items: "jam tangan, arloji, kacamata",
  },
  {
    floor: "6階",
    japanese: "スポーツ用品・旅行用品",
    furigana: "スポーツようひん・りょこうようひん",
    meaning: "peralatan olahraga, peralatan bepergian",
    items: "raket, bola, tenda, koper",
  },
  {
    floor: "5階",
    japanese: "子ども服・おもちゃ・本・文房具",
    furigana: "こどもふく・おもちゃ・ほん・ぶんぼうぐ",
    meaning: "pakaian anak, mainan, buku, alat tulis",
    items: "baju anak, boneka, buku, alat tulis",
  },
  {
    floor: "4階",
    japanese: "家具・食器・電化製品",
    furigana: "かぐ・しょっき・でんかせいひん",
    meaning: "perlengkapan rumah, alat makan, barang elektronik",
    items: "mebel, piring, gelas, alat elektronik",
  },
  {
    floor: "3階",
    japanese: "紳士服",
    furigana: "しんしふく",
    meaning: "pakaian pria",
    items: "jas, celana, pakaian pria",
  },
  {
    floor: "2階",
    japanese: "婦人服",
    furigana: "ふじんふく",
    meaning: "pakaian wanita",
    items: "gaun, rok, pakaian wanita",
  },
  {
    floor: "1階",
    japanese: "靴・かばん・アクセサリー・化粧品",
    furigana: "くつ・かばん・アクセサリー・けしょうひん",
    meaning: "sepatu, tas, perhiasan, kosmetik",
    items: "sepatu, tas, aksesori, kosmetik",
  },
  {
    floor: "地下1階",
    japanese: "食品",
    furigana: "しょくひん",
    meaning: "makanan",
    items: "roti, bahan makanan, ikan, minuman",
  },
  {
    floor: "地下2階",
    japanese: "駐車場",
    furigana: "ちゅうしゃじょう",
    meaning: "tempat parkir",
    items: "parkir mobil",
  },
];

const lessonGrid = document.querySelector("#lessonGrid");
const lessonSelect = document.querySelector("#lessonSelect");
const vocabList = document.querySelector("#vocabList");
const wordCount = document.querySelector("#wordCount");
const metricLabel = document.querySelector("#metricLabel");
const pageTitle = document.querySelector("#pageTitle");
const lessonName = document.querySelector("#lessonName");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const extraList = document.querySelector("#extraList");
const quizList = document.querySelector("#quizList");
const extraMenuCards = document.querySelectorAll(".extra-menu-card");
const navItems = document.querySelectorAll(".nav-item");
const headerNavBtns = document.querySelectorAll(".header-nav-btn");
const pages = {
  vocabulary: document.querySelector("#vocabularyPage"),
  patterns: document.querySelector("#patternsPage"),
  quiz: document.querySelector("#quizPage"),
  extra: document.querySelector("#extraPage"),
};

let activeLesson = 1;
let activeExtraCategory = "country";

function getLesson(lessonNumber = activeLesson) {
  return window.lessonData?.[lessonNumber] ?? null;
}

function getLessonVocabulary(lessonNumber = activeLesson) {
  return getLesson(lessonNumber)?.vocabulary ?? [];
}

// Returns the clean japanese string with any trailing group marker (" I", " II", " III") stripped.
function getCleanJapanese(word) {
  return (word.japanese || "").replace(/\s+(I{1,3})$/, "").trim();
}

function getVerbGroup(word) {
  // Priority 1: explicit field
  if (word.group) return word.group;

  // Priority 2: marker embedded in the japanese field (e.g. "集まります I")
  const jpRaw = word.japanese || "";
  const markerMatch = jpRaw.match(/\s+(III|II|I)$/);
  if (markerMatch) return markerMatch[1];

  if (!word.dictionaryForm) return null;

  const jp = getCleanJapanese(word);
  const romaji = (word.romaji || "").toLowerCase().trim();

  // 1. Group III: Ends in します or shimasu, or is 来ます (kimasu, to come)
  if (jp.endsWith("します") || romaji.endsWith("shimasu") || romaji.endsWith(" shimasu")) {
    return "III";
  }
  
  if (jp === "来ます" || jp === "きます" || (romaji === "kimasu" && word.meaning && word.meaning.toLowerCase().includes("datang"))) {
    return "III";
  }

  // 2. Group II exceptions (known -i stem verbs that are actually Group II)
  const groupIIExceptionsJp = [
    "います", "見ます", "みます", "起きます", "おきます", 
    "降ります", "おります", "借ります", "かります", 
    "浴びます", "あびます", "できます", "足ります", "たります",
    "着ます", "きます", "信じます", "しんじます", "過ぎます", "すぎます"
  ];
  
  const groupIIExceptionsRomaji = [
    "imasu", "mimasu", "okimasu", "orimasu", "karimasu", 
    "abimasu", "dekimasu", "tarimasu", "shinjimasu", "sugimasu"
  ];

  if (romaji === "kimasu") {
    if (word.meaning && word.meaning.toLowerCase().includes("pakai")) {
      return "II";
    }
    return "III";
  }
  if (romaji === "furimasu" || (word.meaning && word.meaning.toLowerCase().includes("turun (hujan/salju)"))) {
    return "I";
  }

  if (groupIIExceptionsJp.some(exc => jp.endsWith(exc)) || 
      groupIIExceptionsRomaji.some(exc => romaji.endsWith(exc))) {
    return "II";
  }

  // 3. Regular Group II: Stem ends in -e beforeます
  const cleanRomaji = romaji.replace(/[~]/g, "").trim();
  if (cleanRomaji.endsWith("emasu")) {
    return "II";
  }

  if (jp.endsWith("ます") && jp.length >= 3) {
    const stemChar = jp.charAt(jp.length - 3);
    const eColumn = ["え", "け", "せ", "て", "ね", "へ", "め", "れ", "げ", "ぜ", "で", "べ", "ぺ"];
    if (eColumn.includes(stemChar)) {
      return "II";
    }
  }

  // 4. Regular Group I: Stem ends in -i beforeます
  if (cleanRomaji.endsWith("imasu") || cleanRomaji.endsWith("chimasu") || cleanRomaji.endsWith("shimasu") || cleanRomaji.endsWith("rimasu") || cleanRomaji.endsWith("bimasu") || cleanRomaji.endsWith("gimasu") || cleanRomaji.endsWith("mimasu") || cleanRomaji.endsWith("kimasu") || cleanRomaji.endsWith("nimasu")) {
    return "I";
  }
  
  if (jp.endsWith("ます") && jp.length >= 3) {
    const stemChar = jp.charAt(jp.length - 3);
    const iColumn = ["い", "き", "し", "ち", "に", "ひ", "み", "り", "ぎ", "じ", "ぢ", "び", "ぴ"];
    if (iColumn.includes(stemChar)) {
      return "I";
    }
  }

  if (jp.endsWith("ます") || cleanRomaji.endsWith("masu")) {
    return "I";
  }

  return null;
}

function highlightVerbText(text, group) {
  if (!text || !group) return text;

  if (group === "III") {
    if (text.endsWith("します")) {
      return text.slice(0, -3) + `<span class="indicator-highlight group-III">します</span>`;
    }
    if (text.endsWith("きます")) {
      return text.slice(0, -3) + `<span class="indicator-highlight group-III">きます</span>`;
    }
    return text;
  }

  if (text.endsWith("ます")) {
    const stemChar = text.charAt(text.length - 3);
    const prefix = text.slice(0, text.length - 3);
    const suffix = "ます";
    return prefix + `<span class="indicator-highlight group-${group}">${stemChar}</span>` + suffix;
  }

  return text;
}

function makeJapaneseMarkup(word) {
  // Strip group marker from displayed text (e.g. "集まります I" → "集まります")
  let displayJp = getCleanJapanese(word);
  let displayFurigana = word.furigana;

  const group = getVerbGroup(word);
  if (group) {
    displayJp = highlightVerbText(displayJp, group);
    if (displayFurigana) {
      displayFurigana = highlightVerbText(displayFurigana, group);
    }
  }

  if (!displayFurigana) {
    return `<span class="hiragana-only">${displayJp}</span>`;
  }

  return `<ruby>${displayJp}<rt>${displayFurigana}</rt></ruby>`;
}

function makeRubyMarkup(item) {
  if (!item.furigana) {
    return item.japanese;
  }

  return `<ruby>${item.japanese}<rt>${item.furigana}</rt></ruby>`;
}

function renderExtraVocabulary() {
  extraMenuCards.forEach((card) => {
    card.classList.toggle("active", card.dataset.extraCategory === activeExtraCategory);
  });

  if (activeExtraCategory === "verbs") {
    extraList.innerHTML = window.verbsExplanationData?.content || `
      <article class="placeholder-page">
        <h3>Penjelasan Kata Kerja</h3>
        <p>Data penjelasan kata kerja tidak ditemukan.</p>
      </article>
    `;
    extraList.style.display = "block";

    if (pages.extra.classList.contains("active")) {
      wordCount.textContent = "3";
      metricLabel.textContent = "golongan";
    }
    return;
  }

  extraList.style.display = "grid";

  if (activeExtraCategory === "department") {
    extraList.innerHTML = departmentStoreData
      .map(
        (row) => `
          <article class="extra-card department-card">
            <span class="department-floor">${row.floor}</span>
            <span class="extra-japanese">${makeRubyMarkup(row)}</span>
            <span class="department-items">${row.meaning}<br>${row.items}</span>
          </article>
        `,
      )
      .join("");
    return;
  }

  extraList.innerHTML = countryLanguageData
    .map((row) => {
      const item = row[activeExtraCategory];
      const meaning = activeExtraCategory === "person" ? `orang ${row.country.meaning}` : item.meaning;

      return `
        <article class="extra-card">
          <span class="extra-japanese">${makeRubyMarkup(item)}</span>
          <span class="extra-meaning">${meaning}</span>
        </article>
      `;
    })
    .join("");
}

function renderLessons() {
  lessonGrid.innerHTML = "";

  for (let lesson = 1; lesson <= 50; lesson += 1) {
    const button = document.createElement("button");
    button.className = `lesson-button${lesson === activeLesson ? " active" : ""}`;
    button.type = "button";
    button.textContent = lesson;
    button.setAttribute("aria-label", `Bab ${lesson}`);
    button.addEventListener("click", () => {
      activeLesson = lesson;
      renderLessons();
      renderVocabulary();
      renderPatterns();
      renderQuiz();
      // Update the title if the patterns page is currently active
      if (document.getElementById("patternsPage").classList.contains("active")) {
        pageTitle.textContent = `Pola Kalimat Bab ${activeLesson}`;
      } else if (document.getElementById("vocabularyPage").classList.contains("active")) {
        pageTitle.textContent = `Kosakata Bab ${activeLesson}`;
      } else if (document.getElementById("quizPage").classList.contains("active")) {
        pageTitle.textContent = `Quiz Bab ${activeLesson}`;
      }
    });
    lessonGrid.appendChild(button);
  }

  if (lessonSelect) {
    lessonSelect.value = activeLesson;
  }
}

function renderPatterns() {
  const patternsList = document.getElementById("patternsList");
  if (!patternsList) return;
  
  patternsList.innerHTML = "";

  const lesson = getLesson();
  if (lesson?.patterns) {
    const template = document.createElement("template");
    template.innerHTML = lesson.patterns;
    const clone = template.content.cloneNode(true);
    clone.querySelectorAll(".vocab-card").forEach(card => {
      card.classList.remove("open");
      
      const main = card.querySelector(".vocab-main");
      if (main) {
        main.style.gridTemplateColumns = "1fr auto";
        
        if (!main.querySelector(".toggle-icon")) {
          const toggleIcon = document.createElement("span");
          toggleIcon.className = "toggle-icon";
          toggleIcon.innerHTML = `
            <svg class="moon-icon" viewBox="0 0 100 100" width="16" height="16">
              <circle cx="50" cy="50" r="45" fill="var(--pink-strong)" />
              <circle class="moon-cutout" cx="50" cy="50" r="41" fill="var(--bg-card, #ffffff)" />
            </svg>
          `;
          main.appendChild(toggleIcon);
        }
      }
    });
    patternsList.appendChild(clone);
  } else {
    patternsList.innerHTML = `<article class="placeholder-page" style="margin-top: 32px;"><div class="placeholder-icon">文</div><h3>Bab ${activeLesson}</h3><p>Pola kalimat untuk bab ini belum tersedia.</p></article>`;
  }
}

function renderQuiz() {
  if (!quizList) return;

  const lesson = getLesson();
  const quizItems = lesson?.quiz ?? [];

  if (!quizItems.length) {
    quizList.innerHTML = `
      <article class="placeholder-page">
        <div class="placeholder-icon">Q</div>
        <h3>Quiz Bab ${activeLesson}</h3>
        <p>Quiz untuk bab ini belum ditambahkan.</p>
      </article>
    `;
    return;
  }

  quizList.innerHTML = quizItems
    .map(
      (item, index) => `
        <article class="vocab-card">
          <button class="vocab-main" type="button" aria-expanded="false">
            <span class="japanese">${index + 1}. ${item.question}</span>
            <span class="meaning">${item.options?.length ?? 0} pilihan</span>
            <span class="toggle-icon">
              <svg class="moon-icon" viewBox="0 0 100 100" width="16" height="16">
                <circle cx="50" cy="50" r="45" fill="var(--pink-strong)" />
                <circle class="moon-cutout" cx="50" cy="50" r="41" fill="var(--bg-card, #ffffff)" />
              </svg>
            </span>
          </button>
          <div class="vocab-detail">
            ${
              item.options?.length
                ? `
                  <span class="detail-label">Pilihan</span>
                  <span class="detail-value">
                    ${item.options
                      .map((option) => `<span class="quiz-option${option === item.answer ? " correct" : ""}">${option}</span>`)
                      .join("")}
                  </span>
                `
                : ""
            }
            <span class="detail-label">Jawaban</span>
            <span class="detail-value">${item.answer ?? "-"}</span>
            ${
              item.explanation
                ? `
                  <span class="detail-label">Penjelasan</span>
                  <span class="detail-value detail-explanation">${item.explanation}</span>
                `
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function renderVocabulary() {
  const lesson = getLesson();
  const vocabulary = getLessonVocabulary();
  const query = searchInput.value.trim().toLowerCase();

  pageTitle.textContent = `Kosakata Bab ${activeLesson}`;
  lessonName.textContent = lesson ? lesson.title : `Bab ${activeLesson}`;

  if (!lesson) {
    wordCount.textContent = "0";
    vocabList.innerHTML = `
      <article class="placeholder-page">
        <div class="placeholder-icon">語</div>
        <h3>Bab ${activeLesson}</h3>
        <p>Kosakata untuk bab ini belum ditambahkan.</p>
      </article>
    `;
    emptyState.classList.remove("show");
    return;
  }

  const words = vocabulary.filter((word) => {
    const group = getVerbGroup(word);
    const searchable = [
      word.japanese,
      word.furigana,
      word.meaning,
      word.romaji,
      word.dictionaryForm,
      word.dictionaryRomaji,
      word.example,
      word.exampleRomaji,
      word.translation,
      word.explanation,
      group ? `golongan ${group}` : "",
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });

  wordCount.textContent = vocabulary.length;
  vocabList.innerHTML = words
    .map(
      (word) => {
        const group = getVerbGroup(word);
        return `
          <article class="vocab-card">
            <button class="vocab-main" type="button" aria-expanded="false">
              <span class="japanese">${makeJapaneseMarkup(word)}${group ? `<span class="verb-group-indicator group-${group}" title="Golongan ${group}" data-verb-group="${group}">${group}</span>` : ""}</span>
              <span class="meaning">${word.meaning}</span>
              <span class="toggle-icon">
                <svg class="moon-icon" viewBox="0 0 100 100" width="16" height="16">
                  <circle cx="50" cy="50" r="45" fill="var(--pink-strong)" />
                  <circle class="moon-cutout" cx="50" cy="50" r="41" fill="var(--bg-card, #ffffff)" />
                </svg>
              </span>
            </button>
            <div class="vocab-detail">
              <span class="detail-label">Romaji</span>
              <span class="detail-value">${word.romaji}</span>
              ${
                word.dictionaryForm
                  ? `
                    <span class="detail-label">Bentuk kamus</span>
                    <span class="detail-value">
                      <strong>${word.dictionaryForm}</strong>
                      ${word.dictionaryRomaji ? `<br>${word.dictionaryRomaji}` : ""}
                    </span>
                    <span class="detail-label">Catatan kata kerja</span>
                    <span class="detail-value detail-explanation">Bentuk yang tampil di daftar biasanya bentuk sopan seperti 〜ます atau ungkapan sopan. Bentuk kamus adalah bentuk dasar yang dipakai saat mencari di kamus dan saat belajar pola kalimat lain.</span>
                  `
                  : ""
              }
              ${
                group
                  ? `
                    <span class="detail-label">Golongan</span>
                    <span class="detail-value">
                      <span class="verb-group-badge group-${group}" data-verb-group="${group}" style="cursor: pointer;" title="Klik untuk melihat penjelasan golongan ${group}">Golongan ${group}</span>
                    </span>
                  `
                  : ""
              }
              <span class="detail-label">Contoh</span>
              <span class="detail-value example-jp">${word.example}</span>
              <span class="detail-label">Romaji contoh</span>
              <span class="detail-value">${word.exampleRomaji}</span>
              <span class="detail-label">Arti</span>
              <span class="detail-value">${word.translation}</span>
              ${
                word.explanation
                  ? `
                    <span class="detail-label">Penjelasan</span>
                    <span class="detail-value detail-explanation">${word.explanation}</span>
                  `
                  : ""
              }
            </div>
          </article>
        `;
      }
    )
    .join("");

  emptyState.classList.toggle("show", words.length === 0);
}

function switchPage(pageName) {
  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageName);
  });

  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageName);
  });

  headerNavBtns.forEach((item) => {
    item.classList.toggle("active", item.dataset.page === pageName);
  });

  Object.entries(pages).forEach(([name, page]) => {
    page.classList.toggle("active", name === pageName);
  });

  const titles = {
    vocabulary: `Kosakata Bab ${activeLesson}`,
    patterns: `Pola Kalimat Bab ${activeLesson}`,
    quiz: `Quiz Bab ${activeLesson}`,
    extra: activeExtraCategory === "verbs" ? "Golongan Kata Kerja" : "Negara, Orang, Bahasa",
  };

  pageTitle.textContent = titles[pageName];

  if (pageName === "extra") {
    if (activeExtraCategory === "verbs") {
      wordCount.textContent = "3";
      metricLabel.textContent = "golongan";
    } else if (activeExtraCategory === "department") {
      wordCount.textContent = departmentStoreData.length;
      metricLabel.textContent = "daftar";
    } else {
      wordCount.textContent = countryLanguageData.length;
      metricLabel.textContent = "daftar";
    }
  } else if (pageName === "vocabulary") {
    wordCount.textContent = getLessonVocabulary().length;
    metricLabel.textContent = "kata";
  } else if (pageName === "quiz") {
    wordCount.textContent = getLesson()?.quiz?.length ?? "0";
    metricLabel.textContent = "soal";
    renderQuiz();
  } else {
    wordCount.textContent = "0";
    metricLabel.textContent = "item";
  }
}

vocabList.addEventListener("click", (event) => {
  // Capture click on verb group indicator or detail badge and redirect
  const verbBadge = event.target.closest(".verb-group-indicator, .verb-group-badge");
  if (verbBadge) {
    const group = verbBadge.dataset.verbGroup || verbBadge.textContent.replace("Golongan", "").trim();
    
    // Switch to extra (Lainnya) page
    activeExtraCategory = "verbs";
    switchPage("extra");
    renderExtraVocabulary();
    
    // Scroll to the targeted explanation and flash highlight
    setTimeout(() => {
      const targetCard = document.getElementById(`group-${group}-explanation`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
        targetCard.classList.add("highlight-flash");
        setTimeout(() => {
          targetCard.classList.remove("highlight-flash");
        }, 1600);
      }
    }, 120);
    
    event.stopPropagation();
    event.preventDefault();
    return;
  }

  const button = event.target.closest(".vocab-main");

  if (!button) return;

  const card = button.closest(".vocab-card");
  const isOpen = card.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
});

const patternsList = document.getElementById("patternsList");
if (patternsList) {
  patternsList.addEventListener("click", (event) => {
    const button = event.target.closest(".vocab-main");

    if (!button) return;

    const card = button.closest(".vocab-card");
    const isOpen = card.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

if (quizList) {
  quizList.addEventListener("click", (event) => {
    const button = event.target.closest(".vocab-main");

    if (!button) return;

    const card = button.closest(".vocab-card");
    const isOpen = card.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}

searchInput.addEventListener("input", renderVocabulary);

navItems.forEach((item) => {
  item.addEventListener("click", () => switchPage(item.dataset.page));
});

headerNavBtns.forEach((item) => {
  item.addEventListener("click", () => switchPage(item.dataset.page));
});

// Mobile Drawer Menu events
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menuSettingsBtn = document.getElementById("menuSettingsBtn");
const menuItems = document.querySelectorAll(".menu-item");

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.classList.add("menu-open");
  });
}

if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    switchPage(item.dataset.page);
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  });
});

if (menuSettingsBtn && mobileMenu) {
  menuSettingsBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    const settingsModal = document.getElementById("settingsModal");
    if (settingsModal) {
      settingsModal.classList.add("show");
    }
  });
}

extraMenuCards.forEach((card) => {
  card.addEventListener("click", () => {
    activeExtraCategory = card.dataset.extraCategory;
    renderExtraVocabulary();
    // Also update headers immediately
    if (pages.extra.classList.contains("active")) {
      pageTitle.textContent = activeExtraCategory === "verbs" ? "Golongan Kata Kerja" : "Negara, Orang, Bahasa";
    }
  });
});

function initLessonSelect() {
  if (!lessonSelect) return;
  lessonSelect.innerHTML = "";
  for (let lesson = 1; lesson <= 50; lesson += 1) {
    const option = document.createElement("option");
    option.value = lesson;
    option.textContent = `Bab ${lesson}`;
    lessonSelect.appendChild(option);
  }
  lessonSelect.value = activeLesson;

  lessonSelect.addEventListener("change", (e) => {
    activeLesson = parseInt(e.target.value, 10);
    renderLessons();
    renderVocabulary();
    renderPatterns();
    renderQuiz();
    // Update the title if active page changes
    const activePage = document.querySelector(".page.active");
    if (activePage) {
      if (activePage.id === "patternsPage") {
        pageTitle.textContent = `Pola Kalimat Bab ${activeLesson}`;
      } else if (activePage.id === "vocabularyPage") {
        pageTitle.textContent = `Kosakata Bab ${activeLesson}`;
      } else if (activePage.id === "quizPage") {
        pageTitle.textContent = `Quiz Bab ${activeLesson}`;
      }
    }
  });
}

initLessonSelect();
renderLessons();
renderVocabulary();
renderPatterns();
renderQuiz();
renderExtraVocabulary();

// --- Settings Logic ---
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const fontSizeBtns = document.querySelectorAll(".font-size-btn");
const fontFamilySelect = document.getElementById("fontFamilySelect");
const themeSelect = document.getElementById("themeSelect");
const customColorGroup = document.getElementById("customColorGroup");
const customBg = document.getElementById("customBg");
const customSurface = document.getElementById("customSurface");
const customPink = document.getElementById("customPink");

let currentSettings = JSON.parse(localStorage.getItem("minnaSettings")) || {
  fontSize: "16px",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  theme: "default",
  customColors: { bg: "#faf8f8", surface: "#ffffff", pink: "#d61a21" }
};

const root = document.documentElement;

function applySettings() {
  root.style.setProperty("--font-size-base", currentSettings.fontSize);
  fontSizeBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.size === currentSettings.fontSize);
  });

  root.style.setProperty("--font-family-base", currentSettings.fontFamily);
  fontFamilySelect.value = currentSettings.fontFamily;

  themeSelect.value = currentSettings.theme;
  customColorGroup.style.display = currentSettings.theme === "custom" ? "block" : "none";

  if (currentSettings.theme === "default") {
    root.style.setProperty("--bg", "#faf8f8");
    root.style.setProperty("--surface", "#ffffff");
    root.style.setProperty("--surface-soft", "#f6eeef");
    root.style.setProperty("--pink", "#ff4d5a");
    root.style.setProperty("--pink-strong", "#d61a21");
    root.style.setProperty("--ink", "#1f1b1c");
    root.style.setProperty("--muted", "#726668");
    root.style.setProperty("--line", "#ecdfe2");
  } else if (currentSettings.theme === "light") {
    root.style.setProperty("--bg", "#f1f5f9");
    root.style.setProperty("--surface", "#ffffff");
    root.style.setProperty("--surface-soft", "#e2e8f0");
    root.style.setProperty("--pink", "#3b82f6");
    root.style.setProperty("--pink-strong", "#2563eb");
    root.style.setProperty("--ink", "#0f172a");
    root.style.setProperty("--muted", "#64748b");
    root.style.setProperty("--line", "#cbd5e1");
  } else if (currentSettings.theme === "dark") {
    root.style.setProperty("--bg", "#0f172a");
    root.style.setProperty("--surface", "#1e293b");
    root.style.setProperty("--surface-soft", "#334155");
    root.style.setProperty("--pink", "#8b5cf6");
    root.style.setProperty("--pink-strong", "#a855f7");
    root.style.setProperty("--ink", "#f8fafc");
    root.style.setProperty("--muted", "#94a3b8");
    root.style.setProperty("--line", "#475569");
  } else if (currentSettings.theme === "custom") {
    const { bg, surface, pink } = currentSettings.customColors;
    root.style.setProperty("--bg", bg);
    root.style.setProperty("--surface", surface);
    root.style.setProperty("--surface-soft", surface); 
    root.style.setProperty("--pink", pink);
    root.style.setProperty("--pink-strong", pink);
    root.style.setProperty("--ink", "#28242a"); // Default text color for custom
    root.style.setProperty("--muted", "#766e78");
    root.style.setProperty("--line", "#e2e8f0");
  }
  
  localStorage.setItem("minnaSettings", JSON.stringify(currentSettings));
}

if (settingsBtn) {
  settingsBtn.addEventListener("click", () => settingsModal.classList.add("show"));
}
closeSettingsBtn.addEventListener("click", () => settingsModal.classList.remove("show"));
settingsModal.addEventListener("click", (e) => {
  if (e.target === settingsModal) settingsModal.classList.remove("show");
});

fontSizeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSettings.fontSize = btn.dataset.size;
    applySettings();
  });
});

fontFamilySelect.addEventListener("change", (e) => {
  currentSettings.fontFamily = e.target.value;
  applySettings();
});

themeSelect.addEventListener("change", (e) => {
  currentSettings.theme = e.target.value;
  if (currentSettings.theme === "custom") {
      customBg.value = currentSettings.customColors.bg;
      customSurface.value = currentSettings.customColors.surface;
      customPink.value = currentSettings.customColors.pink;
  }
  applySettings();
});

function updateCustomColor() {
  currentSettings.customColors = {
    bg: customBg.value,
    surface: customSurface.value,
    pink: customPink.value
  };
  currentSettings.theme = "custom";
  applySettings();
}

customBg.addEventListener("input", updateCustomColor);
customSurface.addEventListener("input", updateCustomColor);
customPink.addEventListener("input", updateCustomColor);

// Initialize settings on load
applySettings();

// =============================================
// ADMIN PANEL FUNCTIONALITY
// =============================================

(function() {
  // Select DOM Elements
  const openAdminBtn = document.getElementById("openAdminBtn");
  const adminPasswordModal = document.getElementById("adminPasswordModal");
  const closeAdminPwBtn = document.getElementById("closeAdminPwBtn");
  const adminPasswordInput = document.getElementById("adminPasswordInput");
  const adminLoginBtn = document.getElementById("adminLoginBtn");
  const adminPwError = document.getElementById("adminPwError");

  const adminPanelModal = document.getElementById("adminPanelModal");
  const closeAdminPanelBtn = document.getElementById("closeAdminPanelBtn");
  const adminLessonList = document.getElementById("adminLessonList");
  const adminLessonTitle = document.getElementById("adminLessonTitle");
  const adminAddWordBtn = document.getElementById("adminAddWordBtn");
  const adminWordList = document.getElementById("adminWordList");

  const adminExportBtn = document.getElementById("adminExportBtn");
  const adminExportModal = document.getElementById("adminExportModal");
  const closeExportBtn = document.getElementById("closeExportBtn");
  const exportCodeArea = document.getElementById("exportCodeArea");
  const copyExportBtn = document.getElementById("copyExportBtn");

  let adminSelectedLesson = 1;
  const adminPasswordHash = "asuka3821"; // The plain text password required

  // 1. Password Verification & Modal Toggle
  if (openAdminBtn) {
    openAdminBtn.addEventListener("click", () => {
      // Hide settings modal first if it is open
      const settingsModal = document.getElementById("settingsModal");
      if (settingsModal) {
        settingsModal.classList.remove("show");
      }
      adminPasswordInput.value = "";
      adminPwError.style.display = "none";
      adminPasswordModal.classList.add("show");
      adminPasswordInput.focus();
    });
  }

  if (closeAdminPwBtn) {
    closeAdminPwBtn.addEventListener("click", () => {
      adminPasswordModal.classList.remove("show");
    });
  }

  adminPasswordModal.addEventListener("click", (e) => {
    if (e.target === adminPasswordModal) {
      adminPasswordModal.classList.remove("show");
    }
  });

  function attemptAdminLogin() {
    const entered = adminPasswordInput.value.trim();
    if (entered === adminPasswordHash) {
      adminPasswordModal.classList.remove("show");
      openAdminPanel();
    } else {
      adminPwError.style.display = "block";
    }
  }

  if (adminLoginBtn) {
    adminLoginBtn.addEventListener("click", attemptAdminLogin);
  }

  if (adminPasswordInput) {
    adminPasswordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        attemptAdminLogin();
      }
    });
  }

  // 2. Open Admin Panel & Build Sidebar
  function openAdminPanel() {
    adminPanelModal.classList.add("show");
    // Default to activeLesson in main app or selected lesson
    adminSelectedLesson = activeLesson || 1;
    buildAdminSidebar();
    loadAdminLesson(adminSelectedLesson);
  }

  if (closeAdminPanelBtn) {
    closeAdminPanelBtn.addEventListener("click", () => {
      adminPanelModal.classList.remove("show");
    });
  }

  // 3. Build Sidebar Lesson List (1 to 50)
  function buildAdminSidebar() {
    if (!adminLessonList) return;
    adminLessonList.innerHTML = "";
    for (let i = 1; i <= 50; i++) {
      const btn = document.createElement("button");
      btn.className = "admin-lesson-btn";
      if (i === adminSelectedLesson) {
        btn.classList.add("active");
      }
      btn.textContent = `Bab ${i}`;
      btn.addEventListener("click", () => {
        // Remove active class from previous
        const activeBtn = adminLessonList.querySelector(".admin-lesson-btn.active");
        if (activeBtn) activeBtn.classList.remove("active");
        btn.classList.add("active");
        
        adminSelectedLesson = i;
        loadAdminLesson(i);
      });
      adminLessonList.appendChild(btn);
    }
  }

  // 4. Load Lesson Vocabulary into Admin Editor
  function loadAdminLesson(lessonNum) {
    adminLessonTitle.textContent = `Bab ${lessonNum}`;
    renderAdminWords();
  }

  function getLessonData(lessonNum) {
    if (!window.lessonData) {
      window.lessonData = {};
    }
    if (!window.lessonData[lessonNum]) {
      window.lessonData[lessonNum] = {
        title: `Bab ${lessonNum}`,
        vocabulary: []
      };
    }
    return window.lessonData[lessonNum];
  }

  // 4. Tab Toggling Logic
  const adminTabBtns = document.querySelectorAll(".admin-tab-btn");
  const adminPatternsArea = document.getElementById("adminPatternsArea");
  const adminPatternsTextarea = document.getElementById("adminPatternsTextarea");
  const adminSavePatternsBtn = document.getElementById("adminSavePatternsBtn");
  const adminAddQuizBtn = document.getElementById("adminAddQuizBtn");
  const adminQuizList = document.getElementById("adminQuizList");

  let adminActiveTab = "vocabulary";

  adminTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      adminTabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      adminActiveTab = btn.dataset.tab;
      
      // Update Active Panels
      adminWordList.style.display = adminActiveTab === "vocabulary" ? "flex" : "none";
      adminPatternsArea.style.display = adminActiveTab === "patterns" ? "flex" : "none";
      adminQuizList.style.display = adminActiveTab === "quiz" ? "flex" : "none";

      // Update Action Buttons in Header
      adminAddWordBtn.style.display = adminActiveTab === "vocabulary" ? "inline-block" : "none";
      adminSavePatternsBtn.style.display = adminActiveTab === "patterns" ? "inline-block" : "none";
      adminAddQuizBtn.style.display = adminActiveTab === "quiz" ? "inline-block" : "none";

      // Load Tab Data
      refreshAdminTabContent();
    });
  });

  function refreshAdminTabContent() {
    if (adminActiveTab === "vocabulary") {
      renderAdminWords();
    } else if (adminActiveTab === "patterns") {
      renderAdminPatterns();
    } else if (adminActiveTab === "quiz") {
      renderAdminQuiz();
    }
  }

  // 5. Load Lesson Vocabulary, Patterns, or Quiz
  function loadAdminLesson(lessonNum) {
    adminLessonTitle.textContent = `Bab ${lessonNum}`;
    refreshAdminTabContent();
  }

  function getLessonData(lessonNum) {
    if (!window.lessonData) {
      window.lessonData = {};
    }
    if (!window.lessonData[lessonNum]) {
      window.lessonData[lessonNum] = {
        title: `Bab ${lessonNum}`,
        vocabulary: [],
        patterns: "",
        quiz: []
      };
    }
    return window.lessonData[lessonNum];
  }

  // Render Vocabulary Cards
  function renderAdminWords() {
    if (!adminWordList) return;
    adminWordList.innerHTML = "";
    const lesson = getLessonData(adminSelectedLesson);
    const vocabulary = lesson.vocabulary || [];

    if (vocabulary.length === 0) {
      adminWordList.innerHTML = `<div style="text-align: center; padding: 40px; color: #64748b; font-weight: 500;">Belum ada kata kerja atau kosakata di bab ini. Klik "+ Tambah Kata" di atas untuk menambahkan.</div>`;
      return;
    }

    vocabulary.forEach((word, idx) => {
      const card = document.createElement("div");
      card.className = "admin-word-card";
      card.dataset.index = idx;

      const currentGroup = getVerbGroup(word) || "";
      const jpClean = getCleanJapanese(word);
      const meaningText = word.meaning || "";

      card.innerHTML = `
        <div class="admin-word-card-header">
          <div class="admin-word-preview">
            <span class="admin-word-jp">${escapeHtml(word.japanese || '')}</span>
            <span class="admin-word-meaning-preview">&ndash; ${escapeHtml(meaningText)}</span>
          </div>
          <div class="admin-word-card-actions">
            <!-- Normal Mode Actions -->
            <button class="admin-word-edit-btn normal-action">✏️ Edit</button>
            <button class="admin-word-delete-btn normal-action">🗑️ Hapus</button>
            <!-- Edit Mode Actions -->
            <button class="admin-word-save-btn edit-action" style="display: none;">💾 Simpan</button>
            <button class="admin-word-cancel-btn edit-action" style="display: none;">❌ Batal</button>
          </div>
        </div>
        <div class="admin-word-form">
          <div class="admin-field">
            <label>Jepang / Kanji (Tanpa Golongan)</label>
            <input type="text" class="jp-input field-japanese" value="${escapeHtml(jpClean)}" placeholder="e.g. 集まります">
          </div>
          <div class="admin-field">
            <label>Golongan Kata Kerja</label>
            <select class="field-group">
              <option value="" ${currentGroup === '' ? 'selected' : ''}>Bukan Kata Kerja / Deteksi Otomatis</option>
              <option value="I" ${currentGroup === 'I' ? 'selected' : ''}>Golongan 1 (I)</option>
              <option value="II" ${currentGroup === 'II' ? 'selected' : ''}>Golongan 2 (II)</option>
              <option value="III" ${currentGroup === 'III' ? 'selected' : ''}>Golongan 3 (III)</option>
            </select>
          </div>
          <div class="admin-field">
            <label>Furigana / Kana</label>
            <input type="text" class="field-furigana" value="${escapeHtml(word.furigana || '')}" placeholder="e.g. あつまります">
          </div>
          <div class="admin-field">
            <label>Romaji</label>
            <input type="text" class="field-romaji" value="${escapeHtml(word.romaji || '')}" placeholder="e.g. atsumarimasu">
          </div>
          <div class="admin-field">
            <label>Arti / Makna</label>
            <input type="text" class="field-meaning" value="${escapeHtml(word.meaning || '')}" placeholder="e.g. berkumpul">
          </div>
          <div class="admin-field">
            <label>Bentuk Kamus (Opsional)</label>
            <input type="text" class="field-dictionaryForm" value="${escapeHtml(word.dictionaryForm || '')}" placeholder="e.g. 集まる（あつまる）">
          </div>
          <div class="admin-field">
            <label>Romaji Kamus (Opsional)</label>
            <input type="text" class="field-dictionaryRomaji" value="${escapeHtml(word.dictionaryRomaji || '')}" placeholder="e.g. atsumaru">
          </div>
          <div class="admin-field full-width">
            <label>Contoh Kalimat (Opsional)</label>
            <input type="text" class="field-example" value="${escapeHtml(word.example || '')}" placeholder="e.g. 人が 集まっています。">
          </div>
          <div class="admin-field">
            <label>Romaji Contoh (Opsional)</label>
            <input type="text" class="field-exampleRomaji" value="${escapeHtml(word.exampleRomaji || '')}" placeholder="e.g. Hito ga atsumatte imasu.">
          </div>
          <div class="admin-field">
            <label>Terjemahan Contoh (Opsional)</label>
            <input type="text" class="field-translation" value="${escapeHtml(word.translation || '')}" placeholder="e.g. Orang-orang sedang berkumpul.">
          </div>
        </div>
      `;

      // Event Listeners
      const editBtn = card.querySelector(".admin-word-edit-btn");
      const deleteBtn = card.querySelector(".admin-word-delete-btn");
      const saveBtn = card.querySelector(".admin-word-save-btn");
      const cancelBtn = card.querySelector(".admin-word-cancel-btn");

      editBtn.addEventListener("click", () => {
        card.classList.add("editing");
        card.querySelectorAll(".normal-action").forEach(el => el.style.display = "none");
        card.querySelectorAll(".edit-action").forEach(el => el.style.display = "inline-block");
      });

      cancelBtn.addEventListener("click", () => {
        card.classList.remove("editing");
        card.querySelectorAll(".normal-action").forEach(el => el.style.display = "inline-block");
        card.querySelectorAll(".edit-action").forEach(el => el.style.display = "none");
        // Reset
        card.querySelector(".field-japanese").value = jpClean;
        card.querySelector(".field-group").value = currentGroup;
        card.querySelector(".field-furigana").value = word.furigana || "";
        card.querySelector(".field-romaji").value = word.romaji || "";
        card.querySelector(".field-meaning").value = word.meaning || "";
        card.querySelector(".field-dictionaryForm").value = word.dictionaryForm || "";
        card.querySelector(".field-dictionaryRomaji").value = word.dictionaryRomaji || "";
        card.querySelector(".field-example").value = word.example || "";
        card.querySelector(".field-exampleRomaji").value = word.exampleRomaji || "";
        card.querySelector(".field-translation").value = word.translation || "";
      });

      saveBtn.addEventListener("click", () => {
        const cleanJp = card.querySelector(".field-japanese").value.trim();
        const selectedGroup = card.querySelector(".field-group").value;

        // Append Roman Numeral suffix if group is specified
        let finalJp = cleanJp;
        if (selectedGroup) {
          finalJp = `${cleanJp} ${selectedGroup}`;
        }

        const updatedWord = {
          japanese: finalJp,
          furigana: card.querySelector(".field-furigana").value.trim(),
          romaji: card.querySelector(".field-romaji").value.trim(),
          meaning: card.querySelector(".field-meaning").value.trim()
        };

        if (selectedGroup) {
          updatedWord.group = selectedGroup;
        } else {
          // delete explicit group if set to automatic/none
          delete updatedWord.group;
        }

        const dictForm = card.querySelector(".field-dictionaryForm").value.trim();
        if (dictForm) updatedWord.dictionaryForm = dictForm;

        const dictRomaji = card.querySelector(".field-dictionaryRomaji").value.trim();
        if (dictRomaji) updatedWord.dictionaryRomaji = dictRomaji;

        const example = card.querySelector(".field-example").value.trim();
        if (example) updatedWord.example = example;

        const exampleRomaji = card.querySelector(".field-exampleRomaji").value.trim();
        if (exampleRomaji) updatedWord.exampleRomaji = exampleRomaji;

        const translation = card.querySelector(".field-translation").value.trim();
        if (translation) updatedWord.translation = translation;

        vocabulary[idx] = updatedWord;
        saveEditsToLocalStorage();

        card.classList.remove("editing");
        card.querySelector(".admin-word-jp").textContent = updatedWord.japanese;
        card.querySelector(".admin-word-meaning-preview").textContent = `– ${updatedWord.meaning}`;
        card.querySelectorAll(".normal-action").forEach(el => el.style.display = "inline-block");
        card.querySelectorAll(".edit-action").forEach(el => el.style.display = "none");
        
        refreshMainAppUI();
      });

      deleteBtn.addEventListener("click", () => {
        if (confirm(`Apakah Anda yakin ingin menghapus kata "${word.japanese || word.meaning}"?`)) {
          vocabulary.splice(idx, 1);
          saveEditsToLocalStorage();
          renderAdminWords();
          refreshMainAppUI();
        }
      });

      adminWordList.appendChild(card);
    });
  }

  // Render Grammar Patterns Editor
  function renderAdminPatterns() {
    if (!adminPatternsTextarea) return;
    const lesson = getLessonData(adminSelectedLesson);
    adminPatternsTextarea.value = lesson.patterns || "";
  }

  if (adminSavePatternsBtn) {
    adminSavePatternsBtn.addEventListener("click", () => {
      const lesson = getLessonData(adminSelectedLesson);
      lesson.patterns = adminPatternsTextarea.value;
      saveEditsToLocalStorage();
      
      // Update Main App Pola Kalimat View
      if (typeof renderPatterns === "function") {
        renderPatterns();
      }

      // Visual feedback on save
      const origText = adminSavePatternsBtn.textContent;
      adminSavePatternsBtn.textContent = "✅ Tersimpan!";
      adminSavePatternsBtn.style.background = "#059669";
      setTimeout(() => {
        adminSavePatternsBtn.textContent = origText;
        adminSavePatternsBtn.style.background = "#3b82f6";
      }, 1500);
    });
  }

  // Render Quiz Editor
  function renderAdminQuiz() {
    if (!adminQuizList) return;
    adminQuizList.innerHTML = "";
    const lesson = getLessonData(adminSelectedLesson);
    const quizItems = lesson.quiz || [];

    if (quizItems.length === 0) {
      adminQuizList.innerHTML = `<div style="text-align: center; padding: 40px; color: #64748b; font-weight: 500;">Belum ada kuis untuk bab ini. Klik "+ Tambah Kuis" di atas untuk menambahkan.</div>`;
      return;
    }

    quizItems.forEach((quiz, idx) => {
      const card = document.createElement("div");
      card.className = "admin-word-card";
      card.dataset.index = idx;

      const questionText = quiz.question || "";
      const answerText = quiz.answer || "";

      card.innerHTML = `
        <div class="admin-word-card-header">
          <div class="admin-word-preview">
            <span class="admin-word-jp" style="font-size: 15px;">${idx + 1}. ${escapeHtml(questionText)}</span>
            <span class="admin-word-meaning-preview">&ndash; Jawaban: ${escapeHtml(answerText)}</span>
          </div>
          <div class="admin-word-card-actions">
            <!-- Normal Mode Actions -->
            <button class="admin-word-edit-btn normal-action">✏️ Edit</button>
            <button class="admin-word-delete-btn normal-action">🗑️ Hapus</button>
            <!-- Edit Mode Actions -->
            <button class="admin-word-save-btn edit-action" style="display: none;">💾 Simpan</button>
            <button class="admin-word-cancel-btn edit-action" style="display: none;">❌ Batal</button>
          </div>
        </div>
        <div class="admin-word-form">
          <div class="admin-field full-width">
            <label>Pertanyaan Kuis</label>
            <input type="text" class="field-question" value="${escapeHtml(questionText)}" placeholder="e.g. Apa arti dari わたし?">
          </div>
          <div class="admin-field">
            <label>Pilihan A</label>
            <input type="text" class="field-option-a" value="${escapeHtml(quiz.options?.[0] || '')}" placeholder="Pilihan A">
          </div>
          <div class="admin-field">
            <label>Pilihan B</label>
            <input type="text" class="field-option-b" value="${escapeHtml(quiz.options?.[1] || '')}" placeholder="Pilihan B">
          </div>
          <div class="admin-field">
            <label>Pilihan C</label>
            <input type="text" class="field-option-c" value="${escapeHtml(quiz.options?.[2] || '')}" placeholder="Pilihan C">
          </div>
          <div class="admin-field">
            <label>Pilihan D</label>
            <input type="text" class="field-option-d" value="${escapeHtml(quiz.options?.[3] || '')}" placeholder="Pilihan D">
          </div>
          <div class="admin-field">
            <label>Jawaban yang Benar</label>
            <select class="field-answer">
              <option value="" ${answerText === '' ? 'selected' : ''}>-- Pilih Jawaban --</option>
              <option value="A" ${quiz.options?.[0] === answerText && answerText !== '' ? 'selected' : ''}>Pilihan A</option>
              <option value="B" ${quiz.options?.[1] === answerText && answerText !== '' ? 'selected' : ''}>Pilihan B</option>
              <option value="C" ${quiz.options?.[2] === answerText && answerText !== '' ? 'selected' : ''}>Pilihan C</option>
              <option value="D" ${quiz.options?.[3] === answerText && answerText !== '' ? 'selected' : ''}>Pilihan D</option>
            </select>
          </div>
          <div class="admin-field full-width">
            <label>Penjelasan Jawaban (Opsional)</label>
            <textarea class="field-explanation" placeholder="Penjelasan tambahan saat menjawab...">${escapeHtml(quiz.explanation || '')}</textarea>
          </div>
        </div>
      `;

      const editBtn = card.querySelector(".admin-word-edit-btn");
      const deleteBtn = card.querySelector(".admin-word-delete-btn");
      const saveBtn = card.querySelector(".admin-word-save-btn");
      const cancelBtn = card.querySelector(".admin-word-cancel-btn");

      editBtn.addEventListener("click", () => {
        card.classList.add("editing");
        card.querySelectorAll(".normal-action").forEach(el => el.style.display = "none");
        card.querySelectorAll(".edit-action").forEach(el => el.style.display = "inline-block");
      });

      cancelBtn.addEventListener("click", () => {
        card.classList.remove("editing");
        card.querySelectorAll(".normal-action").forEach(el => el.style.display = "inline-block");
        card.querySelectorAll(".edit-action").forEach(el => el.style.display = "none");
        
        card.querySelector(".field-question").value = questionText;
        card.querySelector(".field-option-a").value = quiz.options?.[0] || "";
        card.querySelector(".field-option-b").value = quiz.options?.[1] || "";
        card.querySelector(".field-option-c").value = quiz.options?.[2] || "";
        card.querySelector(".field-option-d").value = quiz.options?.[3] || "";
        card.querySelector(".field-answer").value = quiz.options?.findIndex(o => o === answerText) !== -1 ? ["A","B","C","D"][quiz.options.findIndex(o => o === answerText)] : "";
        card.querySelector(".field-explanation").value = quiz.explanation || "";
      });

      saveBtn.addEventListener("click", () => {
        const qText = card.querySelector(".field-question").value.trim();
        const optA = card.querySelector(".field-option-a").value.trim();
        const optB = card.querySelector(".field-option-b").value.trim();
        const optC = card.querySelector(".field-option-c").value.trim();
        const optD = card.querySelector(".field-option-d").value.trim();
        const ansChoice = card.querySelector(".field-answer").value;
        const explanationVal = card.querySelector(".field-explanation").value.trim();

        const optionsArr = [optA, optB, optC, optD];
        let correctAns = "";
        if (ansChoice === "A") correctAns = optA;
        else if (ansChoice === "B") correctAns = optB;
        else if (ansChoice === "C") correctAns = optC;
        else if (ansChoice === "D") correctAns = optD;

        const updatedQuiz = {
          question: qText,
          options: optionsArr,
          answer: correctAns
        };

        if (explanationVal) {
          updatedQuiz.explanation = explanationVal;
        }

        quizItems[idx] = updatedQuiz;
        saveEditsToLocalStorage();

        card.classList.remove("editing");
        card.querySelector(".admin-word-preview").querySelector(".admin-word-jp").textContent = `${idx + 1}. ${updatedQuiz.question}`;
        card.querySelector(".admin-word-preview").querySelector(".admin-word-meaning-preview").textContent = `– Jawaban: ${updatedQuiz.answer}`;
        card.querySelectorAll(".normal-action").forEach(el => el.style.display = "inline-block");
        card.querySelectorAll(".edit-action").forEach(el => el.style.display = "none");

        // Sync to main application kuis view
        if (typeof renderQuiz === "function") {
          renderQuiz();
        }
      });

      deleteBtn.addEventListener("click", () => {
        if (confirm(`Apakah Anda yakin ingin menghapus kuis "${quiz.question}"?`)) {
          quizItems.splice(idx, 1);
          saveEditsToLocalStorage();
          renderAdminQuiz();
          if (typeof renderQuiz === "function") {
            renderQuiz();
          }
        }
      });

      adminQuizList.appendChild(card);
    });
  }

  // Add Quiz Question
  if (adminAddQuizBtn) {
    adminAddQuizBtn.addEventListener("click", () => {
      const lesson = getLessonData(adminSelectedLesson);
      const quizItems = lesson.quiz || [];

      const newQuiz = {
        question: "",
        options: ["", "", "", ""],
        answer: "",
        explanation: ""
      };

      quizItems.unshift(newQuiz);
      saveEditsToLocalStorage();
      renderAdminQuiz();

      // Put first card in editing state
      const firstCard = adminQuizList.querySelector(".admin-word-card");
      if (firstCard) {
        firstCard.classList.add("editing");
        firstCard.querySelectorAll(".normal-action").forEach(el => el.style.display = "none");
        firstCard.querySelectorAll(".edit-action").forEach(el => el.style.display = "inline-block");
        firstCard.querySelector(".field-question").focus();
      }
    });
  }

  // 6. Add Word Functionality
  if (adminAddWordBtn) {
    adminAddWordBtn.addEventListener("click", () => {
      const lesson = getLessonData(adminSelectedLesson);
      const vocabulary = lesson.vocabulary || [];
      
      // Create new empty word object
      const newWord = {
        japanese: "",
        furigana: "",
        romaji: "",
        meaning: ""
      };

      // Add to beginning of array so it shows up at the top
      vocabulary.unshift(newWord);
      
      // Save and re-render
      saveEditsToLocalStorage();
      renderAdminWords();
      
      // Automatically focus and put the first card into edit mode
      const firstCard = adminWordList.querySelector(".admin-word-card");
      if (firstCard) {
        firstCard.classList.add("editing");
        firstCard.querySelectorAll(".normal-action").forEach(el => el.style.display = "none");
        firstCard.querySelectorAll(".edit-action").forEach(el => el.style.display = "inline-block");
        firstCard.querySelector(".jp-input").focus();
      }
    });
  }

  // 7. Save Edits to Local Storage
  function saveEditsToLocalStorage() {
    const localEdits = {};
    for (let i = 1; i <= 50; i++) {
      if (window.lessonData && window.lessonData[i]) {
        localEdits[i] = window.lessonData[i];
      }
    }
    localStorage.setItem("asuka_lesson_data_edits", JSON.stringify(localEdits));
  }

  // 8. Refresh Main Application UI
  function refreshMainAppUI() {
    // Check if the functions exist in main script context
    if (typeof renderVocabulary === "function") {
      renderVocabulary();
    }
    if (typeof renderExtraVocabulary === "function") {
      renderExtraVocabulary();
    }
    // Update word count indicator in current header if any
    const activePage = document.querySelector(".page.active");
    if (activePage && activePage.id === "vocabularyPage") {
      const wordCount = document.getElementById("wordCount");
      if (wordCount && typeof getLessonVocabulary === "function") {
        wordCount.textContent = getLessonVocabulary().length;
      }
    }
  }

  // 9. Export JS Modal Handling
  if (adminExportBtn) {
    adminExportBtn.addEventListener("click", () => {
      const lesson = getLessonData(adminSelectedLesson);
      const output = generateJsCodeString(adminSelectedLesson, lesson);
      exportCodeArea.value = output;
      adminExportModal.classList.add("show");
    });
  }

  if (closeExportBtn) {
    closeExportBtn.addEventListener("click", () => {
      adminExportModal.classList.remove("show");
    });
  }

  adminExportModal.addEventListener("click", (e) => {
    if (e.target === adminExportModal) {
      adminExportModal.classList.remove("show");
    }
  });

  if (copyExportBtn) {
    copyExportBtn.addEventListener("click", () => {
      exportCodeArea.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          copyExportBtn.textContent = "✅ Tersalin!";
          setTimeout(() => {
            copyExportBtn.textContent = "📋 Salin Semua";
          }, 2000);
        }
      } catch (err) {
        console.error("Gagal menyalin kode:", err);
      }
    });
  }

  function generateJsCodeString(lessonNum, lessonData) {
    const title = lessonData.title || `Bab ${lessonNum}`;
    const vocabJson = JSON.stringify(lessonData.vocabulary || [], null, 2);
    const quizJson = JSON.stringify(lessonData.quiz || [], null, 2);
    const patternsHtml = lessonData.patterns || "";

    // Indent vocabJson correctly to look exactly like standard code files
    const indentedVocab = vocabJson.split("\n").map((line, idx) => {
      if (idx === 0) return line;
      return "  " + line;
    }).join("\n");

    const indentedQuiz = quizJson.split("\n").map((line, idx) => {
      if (idx === 0) return line;
      return "  " + line;
    }).join("\n");

    return `window.lessonData = window.lessonData || {};

window.lessonData[${lessonNum}] = {
  title: "${title}",

  vocabulary: ${indentedVocab},

  patterns: String.raw\`${patternsHtml}\`,

  quiz: ${indentedQuiz}
};
`;
  }

  // Helper function to escape HTML
  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
