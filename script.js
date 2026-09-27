/* =================================
   曲データ
================================= */

const songs = [
  {
    title: "NEWSニッポン",
  },

  {
    title: "ありがとう・今",
  },

  {
    title: "PrivateHearts",
  },

  {
    title: "希望〜Yell〜",
  },

  {
    title: "Stand Up",
  },

  {
    title: "GoodNews!",
  },

  {
    title: "LET'S GO TO THE PLANETS",
  },

  {
    title: "紅く燃ゆる太陽",
  },

  {
    title: "忘れないさ〜LIFE GOES ON〜",
  },

  {
    title: "DREAMS",
  },

  {
    title: "BEACH ANGEL",
  },

  {
    title: "きらめきの彼方へ",
  },

  {
    title: "I・ZA・NA・I・ZU・KI",
  },

  {
    title: "Say Hello",
  },

  {
    title: "柔らかなままで",
  },

  {
    title: "ずっと",
  },

  {
    title: "チェリッシュ",
  },

  {
    title: "PartyTime",
  },

  {
    title: "SHOCK ME",
  },

  {
    title: "Devil or Angel",
  },

  {
    title: "TEPPEN",
  },

  {
    title: "夢の数だけ愛が生まれる",
  },

  {
    title: "NANDE×2 DAME",
  },

  {
    title: "Fiesta",
  },

  {
    title: "サヤエンドウ",
  },

  {
    title: "裸足のシンデレラボーイ",
  },

  {
    title: "星をめざして",
  },

  {
    title: "Boom! Boom! POWER",
  },

  {
    title: "紅い花",
  },

  {
    title: "Best Friend",
  },

  {
    title: "愛のマタドール",
  },

  {
    title: "Change the World",
  },

  {
    title: "君想フ夜",
  },

  {
    title: "アリバイ",
  },

  {
    title: "チラリズム",
  },

  {
    title: "愛なんて",
  },

  {
    title: "なんとかなるさ",
  },

  {
    title: "真冬のナガレボシ",
  },

  {
    title: "その笑顔 僕に見せて",
  },

  {
    title: "weeeek",
  },

  {
    title: "with me",
  },

  {
    title: "Why",
  },

  {
    title: "Rainbow",
  },

  {
    title: "太陽のナミダ",
  },

  {
    title: "美しすぎてBeautiful Eyes",
  },

  {
    title: "バンビーナ",
  },

  {
    title: "Lady Spider",
  },

  {
    title: "SUMMER TIME",
  },

  {
    title: "EASY COME, EASY GO",
  },

  {
    title: "Liar",
  },

  {
    title: "Baby! Be My Baby!",
  },

  {
    title: "Happy Birthday",
  },

  {
    title: "ガンガンガンバッテ",
  },

  {
    title: "GAME of LOVE",
  },

  {
    title: "Push On!",
  },

  {
    title: "STARDUST",
  },

  {
    title: "SNOW EXPRESS",
  },

  {
    title: "Forever",
  },

  {
    title: "ケセナイ",
  },

  {
    title: "みんながいる世界をひとつに愛をもっとGive & Takeしましょう",
  },

  {
    title: "ムラリスト",
  },

  {
    title: "Smile Maker",
  },

  {
    title: "FLY AGAIN",
  },

  {
    title: "永遠色の恋",
  },

  {
    title: "恋のABO",
  },

  {
    title: "ラビリンス",
  },

  {
    title: "OPEN YOUR EYES",
  },

  {
    title: "さくらガール",
  },

  {
    title: "あなたがとなりにいるだけで",
  },

  {
    title: "Love Melodies",
  },

  {
    title: "FREEDOM",
  },

  {
    title: "LIVE",
  },

  {
    title: "生まれし君へ",
  },

  {
    title: "Supernatural",
  },

  {
    title: "秋の空",
  },

  {
    title: "2人/130000000の奇跡",
  },

  {
    title: "Dancin’ in the Secret",
  },

  {
    title: "ワンダーランド",
  },

  {
    title: "BE FUNKY!",
  },

  {
    title: "D.T.F",
  },

  {
    title: "内容の無い手紙",
  },

  {
    title: "エンドレス・サマー",
  },

  {
    title: "Share",
  },

  {
    title: "言いたいだけ",
  },

  {
    title: "Fighting Man",
  },

  {
    title: "ガムシャラCha Cha Cha",
  },

  {
    title: "Wake Up",
  },

  {
    title: "Winter Moon",
  },

  {
    title: "愛はシンプルなカレーライス",
  },

  {
    title: "チャンカパーナ",
  },

  {
    title: "フルスイング",
  },

  {
    title: "Starry",
  },

  {
    title: "ヴァンパイアはかく語りき",
  },

  {
    title: "PeekaBoo…",
  },

  {
    title: "Love Addiction",
  },

  {
    title: "Uri Sarang",
  },

  {
    title: "暁-AKATSUKI-",
  },

  {
    title: "Pumpkin",
  },

  {
    title: "SUPERMAN",
  },

  {
    title: "HAPPY MUSIC",
  },

  {
    title: "カカオ",
  },

  {
    title: "シャララタンバリン",
  },

  {
    title: "WORLD QUEST",
  },

  {
    title: "ポコポンペコーリャ",
  },

  {
    title: "Quntastic!",
  },

  {
    title: "36℃",
  },

  {
    title: "Hello",
  },

  {
    title: "ONE -for the win-",
  },

  {
    title: "SEVEN COLORS",
  },

  {
    title: "君がいた夏",
  },

  {
    title: "FLYING BIRD",
  },

  {
    title: "4＋FAN",
  },

  {
    title: "渚のお姉サマー",
  },

  {
    title: "恋祭り",
  },

  {
    title: "Greedier",
  },

  {
    title: "べサメ・ムーチョ〜狂おしいボレロ〜",
  },

  {
    title: "Dance in the dark",
  },

  {
    title: "HIGHER GROUND",
  },

  {
    title: "Beautiful Rain",
  },

  {
    title: "Dramacatcher",
  },

  {
    title: "Remedy",
  },

  {
    title: "CRY",
  },

  {
    title: "KAGUYA",
  },

  {
    title: "バタフライ",
  },

  {
    title: "TRAVeLiNG",
  },

  {
    title: "勿忘草",
  },

  {
    title: "TOP OF THE WORLD",
  },

  {
    title: "MR.WHITE",
  },

  {
    title: "NYARO",
  },

  {
    title: "Weather NEWS",
  },

  {
    title: "SuperSONIC",
  },

  {
    title: "BYAKUYA",
  },

  {
    title: "White Love Story",
  },

  {
    title: "愛言葉",
  },

  {
    title: "ロメオ2015",
  },

  {
    title: "Sky Beautiful",
  },

  {
    title: "ESCORT",
  },

  {
    title: "チュムチュム",
  },

  {
    title: "日はまた昇る",
  },

  {
    title: "メガロマニア",
  },

  {
    title: "Sweet Martini",
  },

  {
    title: "ささぶね",
  },

  {
    title: "四銃士",
  },

  {
    title: "ANTHEM",
  },

  {
    title: "永遠",
  },

  {
    title: "SPEAKER",
  },

  {
    title: "ヒカリノシズク",
  },

  {
    title: "Touch",
  },

  {
    title: "星の旅人たち",
  },

  {
    title: "whis・per",
  },

  {
    title: "QUARTETTO",
  },

  {
    title: "シリウス",
  },

  {
    title: "NEWSCHOOL",
  },

  {
    title: "Wonder",
  },

  {
    title: "ライフ",
  },

  {
    title: "Departure",
  },

  {
    title: "LIS’N",
  },

  {
    title: "愛のエレジー",
  },

  {
    title: "星の王子さま",
  },

  {
    title: "恋を知らない君へ",
  },

  {
    title: "Smile",
  },

  {
    title: "サマラバ",
  },

  {
    title: "Distance",
  },

  {
    title: "EMMA",
  },

  {
    title: "Snow Dance",
  },

  {
    title: "スノードロップ",
  },

  {
    title: "NEVERLAND",
  },

  {
    title: "アン・ドゥ・トロワ",
  },

  {
    title: "Brightest",
  },

  {
    title: "Silent Love",
  },

  {
    title: "ミステリア",
  },

  {
    title: "BLACK FIRE",
  },

  {
    title: "ORIHIME",
  },

  {
    title: "流れ星",
  },

  {
    title: "U R not alone",
  },

  {
    title: "ニャン太",
  },

  {
    title: "あやめ",
  },

  {
    title: "FOREVER MINE",
  },

  {
    title: "LPS",
  },

  {
    title: "NEWSICAL",
  },

  {
    title: "madoromi",
  },

  {
    title: "EPCOTIA",
  },

  {
    title: "KINGDOM",
  },

  {
    title: "TWINKLE STAR",
  },

  {
    title: "恋する惑星",
  },

  {
    title: "JUMPAROUND",
  },

  {
    title: "AVALON",
  },

  {
    title: "IT'S YOU",
  },

  {
    title: "UFO",
  },

  {
    title: "EROTICA",
  },

  {
    title: "BLACKHOLE",
  },

  {
    title: "星に願いを",
  },

  {
    title: "イノセンス",
  },

  {
    title: "HAPPY ENDING",
  },

  {
    title: "銀座ラプソディ",
  },

  {
    title: "氷温",
  },

  {
    title: "Thunder",
  },

  {
    title: "BLUE",
  },

  {
    title: "Cascade",
  },

  {
    title: "夜よ踊れ",
  },

  {
    title: "「生きろ」",
  },

  {
    title: "Bring Back the Summer",
  },

  {
    title: "LVE",
  },

  {
    title: "Strawberry",
  },

  {
    title: "WORLDISTA",
  },

  {
    title: "DEAD END",
  },

  {
    title: "CASINO DRIVE",
  },

  {
    title: "インビジブル ダンジョン",
  },

  {
    title: "SPIRIT",
  },

  {
    title: "FIGHTERS.COM",
  },

  {
    title: "Digital Love",
  },

  {
    title: "リボン",
  },

  {
    title: "サンタのいないクリスマス",
  },

  {
    title: "Symphony of Dissonance",
  },

  {
    title: "Going that way",
  },

  {
    title: "世界",
  },

  {
    title: "トップガン",
  },

  {
    title: "Love Story",
  },

  {
    title: "Dragonism",
  },

  {
    title: "STORY",
  },

  {
    title: "SEVEN",
  },

  {
    title: "SUPERSTAR",
  },

  {
    title: "何度でも",
  },

  {
    title: "STAY WITH ME",
  },

  {
    title: "Perfect Lover",
  },

  {
    title: "エス",
  },

  {
    title: "君の言葉に笑みを",
  },

  {
    title: "クローバー",
  },

  {
    title: "NEW STORY",
  },

  {
    title: "戀",
  },

  {
    title: "Narrative",
  },

  {
    title: "STAY ALIVE",
  },

  {
    title: "ビューティフル",
  },

  {
    title: "チンチャうまっか",
  },

  {
    title: "カナリヤ",
  },

  {
    title: "CHANGES",
  },

  {
    title: "朧月",
  },

  {
    title: "Champagne Gold",
  },

  {
    title: "BURN",
  },

  {
    title: "鳴神舞",
  },

  {
    title: "神様になりたいわけじゃない",
  },

  {
    title: "FLY HIGH",
  },

  {
    title: "未来へ",
  },

  {
    title: "ReBorn",
  },

  {
    title: "Future is Here",
  },

  {
    title: "JUNK",
  },

  {
    title: "Running",
  },

  {
    title: "小さなクリスマス",
  },

  {
    title: "LOSER",
  },

  {
    title: "三銃士",
  },

  {
    title: "[0,0,0]",
  },

  {
    title: "CANVAS",
  },

  {
    title: "TOKYO SUMMER",
  },

  {
    title: "Deeper & Deeper",
  },

  {
    title: "TRIAD",
  },

  {
    title: "カノン",
  },

  {
    title: "ポリリズム",
  },

  {
    title: "pink moon",
  },

  {
    title: "KMK the boys rock you all!",
  },

  {
    title: "走れメロスのように",
  },

  {
    title: "Coda",
  },

  {
    title: "Refrain",
  },

  {
    title: "XXX",
  },

  {
    title: "Agitato",
  },

  {
    title: "A Real Man",
  },

  {
    title: "Tick-Tock",
  },

  {
    title: "ハレルヤ",
  },

  {
    title: "メモリーズ",
  },

  {
    title: "白",
  },

  {
    title: "フィナーレ",
  },

  {
    title: "エンターテインメント",
  },

  {
    title: "ストレンジャー",
  },

  {
    title: "Alien",
  },

  {
    title: "チューイングガム",
  },

  {
    title: "Different Lives",
  },

  {
    title: "100年前から",
  },

  {
    title: "二枚舌を今夜絡ませる",
  },

  {
    title: "Haqqy",
  },

  {
    title: "We are Team NEWS",
  },

  {
    title: "劇伴",
  },

  {
    title: "ミカエリビジン",
  },

  {
    title: "人情心中",
  },

  {
    title: "hanami",
  },

  {
    title: "ギフテッド",
  },

  {
    title: "ROOOTS",
  },

  {
    title: "アンチフレンチキス",
  },

  {
    title: "ジキルとハイド",
  },

  {
    title: "熱帯夜",
  },

  {
    title: "幸福論",
  },

  {
    title: "JAPANEWS",
  },

  {
    title: "FIREWORKS",
  },

  {
    title: "おもちですか！",
  },

  {
    title: "origami",
  },

  {
    title: "Cherry Blossom Girl",
  },

  {
    title: "JANGARA",
  },

  {
    title: "うらめしや",
  },

  {
    title: "日出づる処",
  },

  {
    title: "カランコロン",
  },

  {
    title: "almond",
  },

  {
    title: "kawaii",
  },

  {
    title: "あっちむいてほい",
  },

  {
    title: "BAD",
  },

  {
    title: "AI AI AI",
  },

  {
    title: "LOST & FOUND",
  },

  {
    title: "レプリカ",
  },

  {
    title: "Chankapana(English Version)",
  },

  {
    title: "変身",
  },

  {
    title: "JOYER",
  },

  {
    title: "ドライアイス.zip",
  },

  {
    title: "WHAT’S NEW",
  },

  {
    title: "ごめんあそばせ",
  },

  {
    title: "ラブとラブ",
  },
  
  {
    title: "君のままで",
  },

  {
    title: "CHOIYAMA",
  },

  {
    title: "Cocoon",
  },

  {
    title: "TM",
  },

  {
    title: "KMK",
  },

  {
    title: "WE ARE NEWS - Episode１-",
  },

  {
    title: "The boys rock you all!",
  },

  {
    title: "TokinoHazama",
  },

  {
    title: "恋空",
  },

  {
    title: "たたた",
  },

  {
    title: "オニサンコチラ",
  },

  {
    title: "サマーサイダー",
  },

  {
    title: "エール",
  },

  {
    title: "DROP",
  },

  {
    title: "Lost in the rain…",
  },

  {
    title: "Hands",
  },


];

// ========================================
// 楽曲ソート
// ========================================

const SONGS_PER_PAGE = 10;
const MAX_RESULT = 20;

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzaAsfhPPGvDqp-QSa-UpOQsNnqfOs7cMloBxk-7ixlw9klQQoYfg8sQGIJNDDAj90EVQ/exec";

let resultSent = false;


// ========================================
// HTML要素
// ========================================

const memberScreen =
  document.getElementById("member-select");

const memberButtons =
  document.querySelectorAll(".member-button");

let selectedMember = "none";

const qualifierScreen =
  document.getElementById("qualifier");

// ========================================
// 誰担を選択
// ========================================

memberButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    selectedMember = button.dataset.member;

    // テーマをリセット
    document.body.classList.remove(
      "theme-koyama",
      "theme-kato",
      "theme-masuda",
      "theme-none"
    );

    // 選んだテーマを追加
    if (selectedMember === "koyama") {
      document.body.classList.add("theme-koyama");
    }

    if (selectedMember === "kato") {
      document.body.classList.add("theme-kato");
    }

    if (selectedMember === "masuda") {
      document.body.classList.add("theme-masuda");
    }

    if (selectedMember === "none") {
      document.body.classList.add("theme-none");
    }

    // 誰担選択画面を隠す
    memberScreen.classList.add("hidden");

    // 予選を表示
    qualifierScreen.classList.remove("hidden");

    currentPage = 0;

    renderQualifier();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});

const finalScreen =
  document.getElementById("final");

const resultScreen =
  document.getElementById("result");

const songList =
  document.getElementById("song-list");

const prevButton =
  document.getElementById("prev-button");

const nextButton =
  document.getElementById("next-button");

const qualifierProgress =
  document.getElementById("qualifier-progress");

const choice1 =
  document.getElementById("choice1");

const choice2 =
  document.getElementById("choice2");

const finalProgress =
  document.getElementById("final-progress");

const resultHeading =
  document.getElementById("result-heading");

const resultList =
  document.getElementById("result-list");

const restartButton =
  document.getElementById("restart-button");


// ========================================
// 状態
// ========================================

let currentPage = 0;

// 予選で選んだ曲
let selectedSongs = [];

// 本選で現在比較している曲
let currentSongIndex = 1;

// 現在ランキングの何番目と比較しているか
let comparisonPosition = 0;

// 現在作っているランキング
let ranking = [];


// ========================================
// 予選を表示
// ========================================

function renderQualifier() {

  songList.innerHTML = "";

  const start =
    currentPage * SONGS_PER_PAGE;

  const end =
    Math.min(
      start + SONGS_PER_PAGE,
      songs.length
    );


  // ------------------------------
  // 曲を10曲表示
  // ------------------------------

  for (let i = start; i < end; i++) {

    const song = songs[i];

    const label =
      document.createElement("label");

    label.className =
      "qualifier-card";


    const checkbox =
      document.createElement("input");

    checkbox.type =
      "checkbox";


    // 以前選択した曲なら
    // チェックを復元
    checkbox.checked =
      selectedSongs.includes(song);


    const title =
      document.createElement("span");

    title.className =
      "song-name";

    title.textContent =
      song.title;


    label.appendChild(checkbox);
    label.appendChild(title);


    // 選択済みなら見た目も復元
    if (checkbox.checked) {
      label.classList.add("selected");
    }


    // ------------------------------
    // チェックを変更したとき
    // ------------------------------

    checkbox.addEventListener(
      "change",
      function () {

        if (checkbox.checked) {

          if (!selectedSongs.includes(song)) {
            selectedSongs.push(song);
          }

          label.classList.add("selected");

        } else {

          selectedSongs =
            selectedSongs.filter(
              item => item !== song
            );

          label.classList.remove("selected");
        }

      }
    );


    songList.appendChild(label);
  }


  // ========================================
  // 進行状況
  // ========================================

  if (songs.length === 0) {

    qualifierProgress.textContent =
      "曲が登録されていません";

  } else {

    qualifierProgress.textContent =
      `${start + 1}〜${end}曲目 / 全${songs.length}曲`;
  }


  // ========================================
  // 次へボタン
  // ========================================

  const totalPages =
    Math.ceil(
      songs.length / SONGS_PER_PAGE
    );


  if (currentPage === totalPages - 1) {

    nextButton.textContent =
      "本選へ";

  } else {

    nextButton.textContent =
      "次の10曲へ";
  }


  // ========================================
  // 前へボタン
  // ========================================

  if (currentPage === 0) {

    prevButton.disabled =
      true;

  } else {

    prevButton.disabled =
      false;
  }
}


// ========================================
// 次の10曲へ / 本選へ
// ========================================

nextButton.addEventListener(
  "click",
  function () {

    const totalPages =
      Math.ceil(
        songs.length / SONGS_PER_PAGE
      );


    // まだ次のページがある
    if (currentPage < totalPages - 1) {

      currentPage++;

      renderQualifier();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }


    // 最後のページなら本選
    startFinal();
  }
);


// ========================================
// 前の10曲へ
// ========================================

prevButton.addEventListener(
  "click",
  function () {

    if (currentPage > 0) {

      currentPage--;

      renderQualifier();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
);


// ========================================
// 本選開始
// ========================================

function startFinal() {

  qualifierScreen.classList.add("hidden");

  resultScreen.classList.add("hidden");


  // --------------------------------
  // 0曲
  // --------------------------------

  if (selectedSongs.length === 0) {

    ranking = [];

    showResult();

    return;
  }


  // --------------------------------
  // 1曲
  // --------------------------------

  if (selectedSongs.length === 1) {

    ranking = [
      selectedSongs[0]
    ];

    showResult();

    return;
  }


  // --------------------------------
  // 2曲以上
  // --------------------------------

  finalScreen.classList.remove(
    "hidden"
  );


  ranking = [
    selectedSongs[0]
  ];

  currentSongIndex = 1;

  comparisonPosition = 0;


  showComparison();
}


// ========================================
// 本選の比較画面
// ========================================

function showComparison() {

  // --------------------------------
  // 全曲の順位付けが終わった
  // --------------------------------

  if (
    currentSongIndex >=
    selectedSongs.length
  ) {

    showResult();

    return;
  }


  // --------------------------------
  // ランキングの最後まで
  // 比較しても入らなかった場合
  // --------------------------------

  if (
    comparisonPosition >=
    ranking.length
  ) {

    ranking.push(
      selectedSongs[currentSongIndex]
    );

    currentSongIndex++;

    comparisonPosition = 0;

    showComparison();

    return;
  }


  // --------------------------------
  // 比較する2曲
  // --------------------------------

  const currentSong =
    selectedSongs[currentSongIndex];

  const comparedSong =
    ranking[comparisonPosition];


  choice1.textContent =
    currentSong.title;

  choice2.textContent =
    comparedSong.title;


  finalProgress.textContent =
    `本選：${currentSongIndex + 1} / ${selectedSongs.length}曲目を順位付け中`;
}


// ========================================
// 本選
// 左の曲を選択
// ========================================

choice1.addEventListener(
  "click",
  function () {

    const currentSong =
      selectedSongs[currentSongIndex];


    ranking.splice(
      comparisonPosition,
      0,
      currentSong
    );


    currentSongIndex++;

    comparisonPosition = 0;


    showComparison();
  }
);


// ========================================
// 本選
// 右の曲を選択
// ========================================

choice2.addEventListener(
  "click",
  function () {

    comparisonPosition++;

    showComparison();
  }
);


// ========================================
// 結果
// ========================================

function sendResultToSheet() {
  if (resultSent) return;

  resultSent = true;

  const topResults = ranking
    .slice(0, MAX_RESULT)
    .map(song => song.title);

  const payload = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    member: selectedMember,
    ranking: topResults
  };

  fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body: JSON.stringify(payload)
  }).catch(error => {
    console.error("結果送信エラー:", error);
  });
}

function showResult() {

  qualifierScreen.classList.add(
    "hidden"
  );

  finalScreen.classList.add(
    "hidden"
  );

  resultScreen.classList.remove(
    "hidden"
  );


  resultList.innerHTML = "";


  // --------------------------------
  // 0曲
  // --------------------------------

  if (ranking.length === 0) {

    resultHeading.textContent =
      "結果";


    const message =
      document.createElement("p");

    message.textContent =
      "予選で選択された曲はありません。";


    resultList.appendChild(
      message
    );

    return;
  }


  // --------------------------------
  // 表示する曲数
  // --------------------------------

  const resultCount =
    Math.min(
      ranking.length,
      MAX_RESULT
    );


  resultHeading.textContent =
    `あなたのTOP${resultCount}`;


  // --------------------------------
  // ランキング表示
  // --------------------------------

  for (
    let i = 0;
    i < resultCount;
    i++
  ) {

    const item =
      document.createElement("div");

    item.className =
      "result-item";


    const number =
      document.createElement("span");

    number.className =
      "result-number";

    number.textContent =
      `${i + 1}.`;


    const title =
      document.createElement("span");

    title.className =
      "result-song";

    title.textContent =
      ranking[i].title;


    item.appendChild(number);
    item.appendChild(title);


    resultList.appendChild(item);
    
  }


  // --------------------------------
  // TOP20だけ表示した場合
  // --------------------------------

  if (ranking.length > MAX_RESULT) {

    const note =
      document.createElement("p");

    note.className =
      "result-note";

    note.textContent =
      `全${ranking.length}曲を順位付けし、そのうちTOP20を表示しています。`;


    resultList.appendChild(note);
  }
  
    sendResultToSheet();
}


// ========================================
// もう一度ソートする
// ========================================

restartButton.addEventListener(
  "click",
  function () {

    currentPage = 0;

    selectedSongs = [];

    currentSongIndex = 1;

    comparisonPosition = 0;

    ranking = [];


    resultList.innerHTML = "";


    resultScreen.classList.add(
      "hidden"
    );

    finalScreen.classList.add(
      "hidden"
    );

    qualifierScreen.classList.remove(
      "hidden"
    );


    renderQualifier();


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
);


// ========================================
// 最初に予選を表示
// ========================================

memberScreen.classList.remove("hidden");
qualifierScreen.classList.add("hidden");


// ========================================
// 結果画像
// ========================================

const saveImageButton =
  document.getElementById("save-image-button");

const shareXButton =
  document.getElementById("share-x-button");

const shareCard =
  document.getElementById("share-card");

const shareMember =
  document.getElementById("share-member");

const shareResultTitle =
  document.getElementById("share-result-title");

const shareRanking =
  document.getElementById("share-ranking");


// ========================================
// テーマ情報
// ========================================

function getShareTheme() {

  if (selectedMember === "koyama") {

    return {
      background: "#eee5f7",
      accent: "#9b6bc3",
      member: "小山慶一郎"
    };

  }

  if (selectedMember === "kato") {

    return {
      background: "#e6f4e8",
      accent: "#65ad70",
      member: "加藤シゲアキ"
    };

  }

  if (selectedMember === "masuda") {

    return {
      background: "#fff8d9",
      accent: "#e3c64f",
      member: "増田貴久"
    };

  }

  return {
    background: "#fff0f5",
    accent: "#f5a9c8",
    member: "選べない"
  };
}


// ========================================
// 結果画像を作成
// ========================================

function createResultImage() {

  const theme =
    getShareTheme();


  // 背景色
  shareCard.style.background =
    theme.background;


  // メンバー名
  shareMember.textContent =
    theme.member;


  shareMember.style.background =
    theme.accent;


  // タイトル
  const count =
    Math.min(
      ranking.length,
      MAX_RESULT
    );

  shareResultTitle.textContent =
    `あなたのTOP${count}`;


  // ランキングを空にする
  shareRanking.innerHTML = "";


  // ランキング作成
  for (
    let i = 0;
    i < count;
    i++
  ) {

    const item =
      document.createElement("div");

    item.className =
      "share-ranking-item";


    const number =
      document.createElement("div");

    number.className =
      "share-ranking-number";

    number.textContent =
      `${i + 1}`;


    const title =
      document.createElement("div");

    title.className =
      "share-ranking-title";

    title.textContent =
      ranking[i].title;


    item.appendChild(number);
    item.appendChild(title);


    // テーマカラー
    number.style.color =
      theme.accent;


    shareRanking.appendChild(item);
  }


  return html2canvas(
    shareCard,
    {
      backgroundColor:
        theme.background,

      scale: 2,

      useCORS: true
    }
  );
}


// ========================================
// 画像を保存
// ========================================

saveImageButton.addEventListener(
  "click",
  async function () {

    try {

      const canvas =
        await createResultImage();


      canvas.toBlob(
        function (blob) {

          if (!blob) {
            alert(
              "画像の作成に失敗しました。"
            );
            return;
          }


          const url =
            URL.createObjectURL(blob);


          const link =
            document.createElement("a");

          link.href = url;

          link.download =
            "楽曲ソート結果.png";

          document.body.appendChild(link);

          link.click();

          link.remove();

          setTimeout(
            function () {
              URL.revokeObjectURL(url);
            },
            1000
          );

        },
        "image/png"
      );

    } catch (error) {

      console.error(error);

      alert(
        "画像の作成に失敗しました。"
      );
    }

  }
);


// ========================================
// Xでシェア
// ========================================

shareXButton.addEventListener(
  "click",
  async function () {

    try {

      const canvas =
        await createResultImage();


      canvas.toBlob(
        async function (blob) {

          if (!blob) {
            alert(
              "画像の作成に失敗しました。"
            );
            return;
          }


          const file =
            new File(
              [blob],
              "楽曲ソート結果.png",
              {
                type: "image/png"
              }
            );


          // スマホの共有シート
          if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({
              files: [file]
            })
          ) {

            await navigator.share({

              files: [file],

              title:
                "楽曲ソート結果",

              text:
                "🎵 楽曲ソートの結果です！"

            });

          } else {

            alert(
              "この端末では画像共有に対応していません。まず画像を保存して、Xから画像を添付してください。"
            );

          }

        },
        "image/png"
      );

    } catch (error) {

      // キャンセルした場合など
      console.log(error);

    }

  }
);