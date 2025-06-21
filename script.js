// Peta transliterasi Latin ke Aksara Jawa - DIPERBAIKI
const transliterationMap = {
  // Huruf vokal (swara)
  a: "ꦄ",
  i: "ꦆ",
  u: "ꦈ",
  e: "ꦌ",
  o: "ꦎ",

  // Huruf konsonan dengan a
  ka: "ꦏ",
  ga: "ꦒ",
  nga: "ꦔ",
  ca: "ꦕ",
  ja: "ꦗ",
  nya: "ꦚ",
  ta: "ꦠ",
  da: "ꦢ",
  na: "ꦤ",
  pa: "ꦥ",
  ba: "ꦧ",
  ma: "ꦩ",
  ya: "ꦪ",
  ra: "ꦫ",
  la: "ꦭ",
  wa: "ꦮ",
  sa: "ꦱ",
  ha: "ꦲ",

  // Konsonan khusus
  dha: "ꦝ",
  tha: "ꦛ",
  pha: "ꦦ",

  // Huruf konsonan tanpa a (untuk akhir kata)
  k: "ꦏ꧀",
  g: "ꦒ꧀",
  ng: "ꦔ꧀",
  c: "ꦕ꧀",
  j: "ꦗ꧀",
  ny: "ꦚ꧀",
  t: "ꦠ꧀",
  d: "ꦢ꧀",
  n: "ꦤ꧀",
  p: "ꦥ꧀",
  b: "ꦧ꧀",
  m: "ꦩ꧀",
  y: "ꦪ꧀",
  r: "ꦫ꧀",
  l: "ꦭ꧀",
  w: "ꦮ꧀",
  s: "ꦱ꧀",
  h: "ꦲ꧀",

  // Konsonan khusus tanpa a
  dh: "ꦝ꧀",
  th: "ꦛ꧀",
  ph: "ꦦ꧀",

  // Huruf murda (kapital)
  Ka: "ꦑ",
  Ga: "ꦓ",
  Nga: "ꦔ",
  Ca: "ꦖ",
  Ja: "ꦘ",
  Nya: "ꦚ",
  Ta: "ꦡ",
  Da: "ꦣ",
  Na: "ꦤ",
  Pa: "ꦦ",
  Ba: "ꦨ",
  Ma: "ꦩ",
  Ya: "ꦪ",
  Ra: "ꦬ",
  La: "ꦭ",
  Wa: "ꦮ",
  Sa: "ꦯ",
  Ha: "ꦲ",

  // Pada (angka)
  0: "꧐",
  1: "꧑",
  2: "꧒",
  3: "꧓",
  4: "꧔",
  5: "꧕",
  6: "꧖",
  7: "꧗",
  8: "꧘",
  9: "꧙",
};

// Peta transliterasi terbalik (Aksara Jawa ke Latin) - DIPERBAIKI
const reverseTransliterationMap = {
  // Huruf vokal (swara)
  ꦄ: "a",
  ꦆ: "i",
  ꦈ: "u",
  ꦌ: "e",
  ꦎ: "o",

  // Huruf konsonan dengan a
  ꦏ: "ka",
  ꦒ: "ga",
  ꦔ: "nga",
  ꦕ: "ca",
  ꦗ: "ja",
  ꦚ: "nya",
  ꦠ: "ta",
  ꦢ: "da",
  ꦤ: "na",
  ꦥ: "pa",
  ꦧ: "ba",
  ꦩ: "ma",
  ꦪ: "ya",
  ꦫ: "ra",
  ꦭ: "la",
  ꦮ: "wa",
  ꦱ: "sa",
  ꦲ: "ha",

  // Konsonan khusus
  ꦝ: "dha",
  ꦛ: "tha",
  ꦦ: "pha",

  // Huruf konsonan tanpa a (dengan layar)
  ꦏ꧀: "k",
  ꦒ꧀: "g",
  ꦔ꧀: "ng",
  ꦕ꧀: "c",
  ꦗ꧀: "j",
  ꦚ꧀: "ny",
  ꦠ꧀: "t",
  ꦢ꧀: "d",
  ꦤ꧀: "n",
  ꦥ꧀: "p",
  ꦧ꧀: "b",
  ꦩ꧀: "m",
  ꦪ꧀: "y",
  ꦫ꧀: "r",
  ꦭ꧀: "l",
  ꦮ꧀: "w",
  ꦱ꧀: "s",
  ꦲ꧀: "h",

  // Konsonan khusus tanpa a
  ꦝ꧀: "dh",
  ꦛ꧀: "th",
  ꦦ꧀: "ph",

  // Huruf murda (kapital)
  ꦑ: "Ka",
  ꦓ: "Ga",
  ꦖ: "Ca",
  ꦘ: "Ja",
  ꦡ: "Ta",
  ꦣ: "Da",
  ꦦ: "Pa",
  ꦨ: "Ba",
  ꦬ: "Ra",
  ꦯ: "Sa",

  // Pada (angka)
  "꧐": "0",
  "꧑": "1",
  "꧒": "2",
  "꧓": "3",
  "꧔": "4",
  "꧕": "5",
  "꧖": "6",
  "꧗": "7",
  "꧘": "8",
  "꧙": "9",
};

// Peta sandhangan (tanda vokal) - DIPERBAIKI
const sandhanganMap = {
  // Sandhangan swara (vokal)
  i: "ꦶ",
  u: "ꦸ",
  e: "ꦺ",
  o: "ꦺꦴ",
  ai: "ꦻ",
  au: "ꦻꦴ",

  // Sandhangan wyanjana (konsonan)
  r: "ꦽ",
  y: "ꦾ",
  l: "ꦿ",
  w: "꧀ꦮ",

  // Sandhangan khusus
  ng: "꧀ꦔ",
  ny: "꧀ꦚ",
  m: "꧀ꦩ",
  h: "꧀ꦲ",

  // Sandhangan gantung
  k: "꧀ꦏ",
  g: "꧀ꦒ",
  c: "꧀ꦕ",
  j: "꧀ꦗ",
  t: "꧀ꦠ",
  d: "꧀ꦢ",
  n: "꧀ꦤ",
  p: "꧀ꦥ",
  b: "꧀ꦧ",
  s: "꧀ꦱ",
  l: "꧀ꦭ",
  r: "꧀ꦫ",
};

// Peta sandhangan terbalik - DIPERBAIKI
const reverseSandhanganMap = {
  // Sandhangan swara (vokal)
  "ꦶ": "i",
  "ꦸ": "u",
  "ꦺ": "e",
  "ꦺꦴ": "o",
  "ꦻ": "ai",
  "ꦻꦴ": "au",

  // Sandhangan wyanjana (konsonan)
  "ꦽ": "r",
  "ꦾ": "y",
  "ꦿ": "l",
  "꧀ꦮ": "w",

  // Sandhangan khusus
  "꧀ꦔ": "ng",
  "꧀ꦚ": "ny",
  "꧀ꦩ": "m",
  "꧀ꦲ": "h",

  // Sandhangan gantung
  "꧀ꦏ": "k",
  "꧀ꦒ": "g",
  "꧀ꦕ": "c",
  "꧀ꦗ": "j",
  "꧀ꦠ": "t",
  "꧀ꦢ": "d",
  "꧀ꦤ": "n",
  "꧀ꦥ": "p",
  "꧀ꦧ": "b",
  "꧀ꦱ": "s",
  "꧀ꦭ": "l",
  "꧀ꦫ": "r",
};

// Peta pasangan (untuk konsonan ganda)
const pasanganMap = {
  k: "ꦏ꧀",
  g: "ꦒ꧀",
  ng: "ꦔ꧀",
  c: "ꦕ꧀",
  j: "ꦗ꧀",
  ny: "ꦚ꧀",
  t: "ꦠ꧀",
  d: "ꦢ꧀",
  n: "ꦤ꧀",
  p: "ꦥ꧀",
  b: "ꦧ꧀",
  m: "ꦩ꧀",
  y: "ꦪ꧀",
  r: "ꦫ꧀",
  l: "ꦭ꧀",
  w: "ꦮ꧀",
  s: "ꦱ꧀",
  h: "ꦲ꧀",
  dh: "ꦝ꧀",
  th: "ꦛ꧀",
  ph: "ꦦ꧀",
};

// Peta aksara swara (huruf vokal mandiri)
const swaraMap = {
  A: "ꦄ",
  I: "ꦆ",
  U: "ꦈ",
  E: "ꦌ",
  O: "ꦎ",
};

// Peta aksara swara terbalik
const reverseSwaraMap = {
  ꦄ: "A",
  ꦆ: "I",
  ꦈ: "U",
  ꦌ: "E",
  ꦎ: "O",
};

class JavaneseConverter {
  constructor() {
    this.initializeElements();
    this.bindEvents();
    this.updateCharCount();
  }

  initializeElements() {
    this.latinInput = document.getElementById("latin");
    this.javaneseInput = document.getElementById("javanese");
    this.output = document.getElementById("output");
    this.convertToJavaneseBtn = document.getElementById("convertToJavaneseBtn");
    this.convertToLatinBtn = document.getElementById("convertToLatinBtn");
    this.copyLatinBtn = document.getElementById("copyLatinBtn");
    this.copyJavaneseBtn = document.getElementById("copyJavaneseBtn");
    this.clearBtn = document.getElementById("clearBtn");
    this.exportBtn = document.getElementById("exportBtn");
    this.charCount = document.getElementById("charCount");
    this.javaneseCharCount = document.getElementById("javaneseCharCount");
  }

  bindEvents() {
    // Event untuk input Latin
    this.latinInput.addEventListener("input", () => {
      this.updateCharCount();
      this.autoConvertToJavanese();
    });

    this.latinInput.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        this.convertToJavanese();
      }
    });

    // Event untuk input Aksara Jawa
    this.javaneseInput.addEventListener("input", () => {
      this.updateJavaneseCharCount();
      this.autoConvertToLatin();
    });

    this.javaneseInput.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === "Enter") {
        e.preventDefault();
        this.convertToLatin();
      }
    });

    // Event untuk tombol
    this.convertToJavaneseBtn.addEventListener("click", () =>
      this.convertToJavanese()
    );
    this.convertToLatinBtn.addEventListener("click", () =>
      this.convertToLatin()
    );
    this.copyLatinBtn.addEventListener("click", () => this.copyLatin());
    this.copyJavaneseBtn.addEventListener("click", () => this.copyJavanese());
    this.clearBtn.addEventListener("click", () => this.clearAll());
    this.exportBtn.addEventListener("click", () => this.exportResult());
  }

  updateCharCount() {
    const count = this.latinInput.value.length;
    this.charCount.textContent = `${count} karakter`;
  }

  updateJavaneseCharCount() {
    const count = this.javaneseInput.value.length;
    this.javaneseCharCount.textContent = `${count} karakter`;
  }

  autoConvertToJavanese() {
    clearTimeout(this.autoConvertToJavaneseTimer);
    this.autoConvertToJavaneseTimer = setTimeout(() => {
      if (this.latinInput.value.length > 0) {
        this.convertToJavanese();
      }
    }, 1000);
  }

  autoConvertToLatin() {
    clearTimeout(this.autoConvertToLatinTimer);
    this.autoConvertToLatinTimer = setTimeout(() => {
      if (this.javaneseInput.value.length > 0) {
        this.convertToLatin();
      }
    }, 1000);
  }

  convertToJavanese() {
    const input = this.latinInput.value.toLowerCase().trim();

    if (!input) {
      this.showMessage(
        "Silakan masukkan teks Latin terlebih dahulu",
        "warning"
      );
      return;
    }

    this.showLoading(true, this.convertToJavaneseBtn);

    setTimeout(() => {
      try {
        const output = this.transliterateToJavanese(input);
        this.output.textContent = output;
        this.output.classList.remove("empty");

        this.animateOutput();
        this.showMessage("Konversi Latin → Aksara Jawa berhasil!", "success");
      } catch (error) {
        this.showMessage("Terjadi kesalahan dalam konversi", "error");
        console.error("Conversion error:", error);
      } finally {
        this.showLoading(false, this.convertToJavaneseBtn);
      }
    }, 300);
  }

  convertToLatin() {
    const input = this.javaneseInput.value.trim();

    if (!input) {
      this.showMessage(
        "Silakan masukkan Aksara Jawa terlebih dahulu",
        "warning"
      );
      return;
    }

    this.showLoading(true, this.convertToLatinBtn);

    setTimeout(() => {
      try {
        const output = this.transliterateToLatin(input);

        // Cek apakah ada karakter yang tidak dikenali
        const unrecognizedChars = input.match(/[\uA980-\uA9DF\uA9E0-\uA9FF]/g);
        if (unrecognizedChars && unrecognizedChars.length > 0) {
          const uniqueChars = [...new Set(unrecognizedChars)];
          console.warn(
            "Karakter Aksara Jawa yang tidak dikenali:",
            uniqueChars
          );
        }

        this.output.textContent = output;
        this.output.classList.remove("empty");

        this.animateOutput();
        this.showMessage("Konversi Aksara Jawa → Latin berhasil!", "success");
      } catch (error) {
        this.showMessage("Terjadi kesalahan dalam konversi", "error");
        console.error("Conversion error:", error);
      } finally {
        this.showLoading(false, this.convertToLatinBtn);
      }
    }, 300);
  }

  transliterateToJavanese(text) {
    // Normalisasi input
    let output = text.toLowerCase().trim();
    output = output.replace(/[^\w\s0-9]/g, " ");

    // Peta aksara dasar dan sandhangan
    const aksaraDasar = {
      ng: "ꦔ",
      ny: "ꦚ",
      dh: "ꦝ",
      th: "ꦛ",
      ph: "ꦦ",
      k: "ꦏ",
      g: "ꦒ",
      c: "ꦕ",
      j: "ꦗ",
      t: "ꦠ",
      d: "ꦢ",
      n: "ꦤ",
      p: "ꦥ",
      b: "ꦧ",
      m: "ꦩ",
      y: "ꦪ",
      r: "ꦫ",
      l: "ꦭ",
      w: "ꦮ",
      s: "ꦱ",
      h: "ꦲ",
    };
    const sandhangan = {
      i: "ꦶ",
      u: "ꦸ",
      e: "ꦺ",
      o: "ꦺꦴ",
      é: "ꦺ",
      ai: "ꦻ",
      au: "ꦻꦴ",
    };
    const swara = { a: "ꦄ", i: "ꦆ", u: "ꦈ", e: "ꦌ", o: "ꦎ" };
    const pangkon = "꧀";
    const cecak = "ꦁ";
    const angka = {
      0: "꧐",
      1: "꧑",
      2: "꧒",
      3: "꧓",
      4: "꧔",
      5: "꧕",
      6: "꧖",
      7: "꧗",
      8: "꧘",
      9: "꧙",
    };

    // Fungsi memecah kata menjadi suku kata
    function syllabify(word) {
      const result = [];
      let i = 0;
      while (i < word.length) {
        // Cek konsonan ganda
        let cons = "";
        if (
          i + 1 < word.length &&
          ["ng", "ny", "dh", "th", "ph"].includes(word.slice(i, i + 2))
        ) {
          cons = word.slice(i, i + 2);
          i += 2;
        } else if (aksaraDasar[word[i]]) {
          cons = word[i];
          i++;
        }

        // Cek vokal/diftong
        let vow = "";
        if (
          i + 1 < word.length &&
          ["ai", "au"].includes(word.slice(i, i + 2))
        ) {
          vow = word.slice(i, i + 2);
          i += 2;
        } else if ("aiueoé".includes(word[i])) {
          vow = word[i];
          i++;
        }

        // Jika tidak ada konsonan, hanya vokal
        if (!cons && vow) {
          result.push({ cons: "", vow });
        } else if (cons) {
          result.push({ cons, vow });
        } else if (word[i] && angka[word[i]]) {
          result.push({ num: word[i] });
          i++;
        } else {
          i++;
        }
      }
      return result;
    }

    // Proses setiap kata
    return output
      .split(/\s+/)
      .map((word) => {
        const sylls = syllabify(word);
        let aksara = "";

        for (let i = 0; i < sylls.length; i++) {
          const s = sylls[i];
          if (s.num) {
            aksara += angka[s.num];
            continue;
          }

          // Vokal mandiri
          if (!s.cons && s.vow) {
            aksara += swara[s.vow] || "";
            continue;
          }

          // Konsonan + vokal
          if (s.cons) {
            // Penanganan khusus untuk ng di akhir kata
            if (i === sylls.length - 1 && !s.vow && s.cons === "ng") {
              aksara += cecak;
            } else {
              aksara += aksaraDasar[s.cons] || "";

              // Sandhangan jika vokal bukan 'a'
              if (s.vow && s.vow !== "a") {
                aksara += sandhangan[s.vow] || "";
              }

              // Pangkon jika konsonan tanpa vokal (konsonan mati)
              if (!s.vow) {
                aksara += pangkon;
              }
            }
          }
        }
        return aksara;
      })
      .join(" ");
  }

  // Fungsi helper untuk membersihkan teks Aksara Jawa
  cleanJavaneseText(text) {
    return text
      .replace(/[^\uA980-\uA9DF\uA9E0-\uA9FF\s]/g, "") // Hapus karakter non-Aksara Jawa
      .replace(/\s+/g, " ") // Normalisasi spasi
      .trim();
  }

  // Fungsi untuk memvalidasi teks Aksara Jawa
  validateJavaneseText(text) {
    const javaneseRegex = /[\uA980-\uA9DF\uA9E0-\uA9FF\s]/;
    return javaneseRegex.test(text);
  }

  transliterateToLatin(text) {
    // Bersihkan dan validasi input
    text = this.cleanJavaneseText(text);

    if (!text) {
      return "";
    }

    if (!this.validateJavaneseText(text)) {
      console.warn("Teks tidak mengandung Aksara Jawa yang valid");
      return text;
    }

    let output = text;

    // Debug: log input dan karakter per karakter
    console.log("Input Aksara Jawa:", text);
    console.log("Karakter per karakter:");
    for (let i = 0; i < text.length; i++) {
      console.log(
        `Karakter ${i}: '${text[i]}' (kode: ${text.charCodeAt(i).toString(16)})`
      );
    }

    // Mapping yang lebih lengkap dan akurat
    const aksaraMap = {
      // Aksara swara (vokal mandiri)
      ꦄ: "a",
      ꦆ: "i",
      ꦈ: "u",
      ꦌ: "e",
      ꦎ: "o",

      // Aksara nglegena (konsonan dengan a)
      ꦏ: "ka",
      ꦒ: "ga",
      ꦔ: "nga",
      ꦕ: "ca",
      ꦗ: "ja",
      ꦚ: "nya",
      ꦠ: "ta",
      ꦢ: "da",
      ꦤ: "na",
      ꦥ: "pa",
      ꦧ: "ba",
      ꦩ: "ma",
      ꦪ: "ya",
      ꦫ: "ra",
      ꦭ: "la",
      ꦮ: "wa",
      ꦱ: "sa",
      ꦲ: "ha",

      // Konsonan khusus
      ꦝ: "dha",
      ꦛ: "tha",
      ꦦ: "pha",

      // Aksara dengan layar (pangkon)
      ꦏ꧀: "k",
      ꦒ꧀: "g",
      ꦔ꧀: "ng",
      ꦕ꧀: "c",
      ꦗ꧀: "j",
      ꦚ꧀: "ny",
      ꦠ꧀: "t",
      ꦢ꧀: "d",
      ꦤ꧀: "n",
      ꦥ꧀: "p",
      ꦧ꧀: "b",
      ꦩ꧀: "m",
      ꦪ꧀: "y",
      ꦫ꧀: "r",
      ꦭ꧀: "l",
      ꦮ꧀: "w",
      ꦱ꧀: "s",
      ꦲ꧀: "h",
      ꦝ꧀: "dh",
      ꦛ꧀: "th",
      ꦦ꧀: "ph",

      // Sandhangan (tanda vokal)
      "ꦶ": "i",
      "ꦸ": "u",
      "ꦺ": "e",
      "ꦺꦴ": "o",
      "ꦻ": "ai",
      "ꦻꦴ": "au",

      // Sandhangan wyanjana
      "ꦽ": "r",
      "ꦾ": "y",
      "ꦿ": "l",
      "꧀ꦮ": "w",

      // Sandhangan gantung
      "꧀ꦏ": "k",
      "꧀ꦒ": "g",
      "꧀ꦕ": "c",
      "꧀ꦗ": "j",
      "꧀ꦠ": "t",
      "꧀ꦢ": "d",
      "꧀ꦤ": "n",
      "꧀ꦥ": "p",
      "꧀ꦧ": "b",
      "꧀ꦱ": "s",
      "꧀ꦭ": "l",
      "꧀ꦫ": "r",
      "꧀ꦔ": "ng",
      "꧀ꦚ": "ny",
      "꧀ꦩ": "m",
      "꧀ꦲ": "h",

      // Pada (angka)
      "꧐": "0",
      "꧑": "1",
      "꧒": "2",
      "꧓": "3",
      "꧔": "4",
      "꧕": "5",
      "꧖": "6",
      "꧗": "7",
      "꧘": "8",
      "꧙": "9",

      "ꦁ": "ng",
    };

    // Fungsi untuk memecah aksara menjadi komponen
    function parseJavaneseSyllable(text, startIndex) {
      let result = { aksara: "", sandhangan: "", pangkon: false, length: 0 };
      let i = startIndex;

      // Cek aksara swara terlebih dahulu
      if (i < text.length && "ꦄꦆꦈꦌꦎ".includes(text[i])) {
        result.aksara = text[i];
        result.length = 1;
        return result;
      }

      // Cek aksara nglegena
      if (i < text.length && "ꦏꦒꦔꦕꦗꦚꦠꦢꦤꦥꦧꦩꦪꦫꦭꦮꦱꦲꦝꦛꦦ".includes(text[i])) {
        result.aksara = text[i];
        i++;

        // Cek sandhangan
        if (i < text.length && "ꦶꦸꦺꦺꦴꦻꦻꦴꦽꦾꦿ".includes(text[i])) {
          result.sandhangan = text[i];
          i++;
        }

        // Cek pangkon
        if (i < text.length && text[i] === "꧀") {
          result.pangkon = true;
          i++;
        }

        result.length = i - startIndex;
        return result;
      }

      // Cek aksara dengan layar (sudah termasuk pangkon)
      if (
        i < text.length &&
        "ꦏ꧀ꦒ꧀ꦔ꧀ꦕ꧀ꦗ꧀ꦚ꧀ꦠ꧀ꦢ꧀ꦤ꧀ꦥ꧀ꦧ꧀ꦩ꧀ꦪ꧀ꦫ꧀ꦭ꧀ꦮ꧀ꦱ꧀ꦲ꧀ꦝ꧀ꦛ꧀ꦦ꧀".includes(
          text.slice(i, i + 2)
        )
      ) {
        result.aksara = text.slice(i, i + 2);
        result.pangkon = true;
        result.length = 2;
        return result;
      }

      // Cek sandhangan gantung
      if (i < text.length && text[i] === "꧀" && i + 1 < text.length) {
        const nextChar = text[i + 1];
        if ("ꦏꦒꦕꦗꦠꦢꦤꦥꦧꦱꦭꦫꦔꦚꦩꦲꦮ".includes(nextChar)) {
          result.aksara = text.slice(i, i + 2);
          result.pangkon = true;
          result.length = 2;
          return result;
        }
      }

      // Jika tidak dikenali, skip satu karakter
      result.length = 1;
      return result;
    }

    // Proses konversi per suku kata
    let result = "";
    let i = 0;

    while (i < text.length) {
      let found = false;

      // Cek 2 karakter (untuk konsonan mati atau sandhangan gantung)
      if (i + 2 <= text.length) {
        const twoChars = text.substring(i, i + 2);
        if (aksaraMap[twoChars]) {
          result += aksaraMap[twoChars];
          i += 2;
          found = true;
        }
      }

      // Cek 1 karakter
      if (!found && i < text.length) {
        const char = text[i];

        if (aksaraMap[char]) {
          result += aksaraMap[char];
        } else {
          result += char; // untuk karakter yang tidak dikenali
        }
        i++;
      }
    }

    // Normalisasi: hapus 'a' yang tidak perlu setelah sandhangan
    result = result.replace(/a([eiou])/g, "$1");

    // Normalisasi lainnya
    result = result.replace(/\s+/g, " ").trim().toLowerCase();

    return result;
  }

  copyLatin() {
    const text = this.latinInput.value;

    if (!text) {
      this.showMessage("Tidak ada teks Latin untuk disalin", "warning");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.showMessage("Teks Latin berhasil disalin!", "success");
        this.animateButton(this.copyLatinBtn);
      })
      .catch((err) => {
        this.showMessage("Gagal menyalin teks Latin", "error");
        console.error("Copy error:", err);
      });
  }

  copyJavanese() {
    const text = this.javaneseInput.value;

    if (!text) {
      this.showMessage("Tidak ada Aksara Jawa untuk disalin", "warning");
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.showMessage("Aksara Jawa berhasil disalin!", "success");
        this.animateButton(this.copyJavaneseBtn);
      })
      .catch((err) => {
        this.showMessage("Gagal menyalin Aksara Jawa", "error");
        console.error("Copy error:", err);
      });
  }

  clearAll() {
    this.latinInput.value = "";
    this.javaneseInput.value = "";
    this.output.textContent = "Hasil konversi akan muncul di sini...";
    this.output.classList.add("empty");
    this.updateCharCount();
    this.updateJavaneseCharCount();
    this.latinInput.focus();
    this.showMessage("Semua data telah dibersihkan", "info");
  }

  showLoading(show, button) {
    if (show) {
      button.innerHTML = '<span class="loading"></span> Mengkonversi...';
      button.disabled = true;
    } else {
      if (button === this.convertToJavaneseBtn) {
        button.innerHTML =
          '<span class="btn-icon">🔄</span> Latin → Aksara Jawa';
      } else {
        button.innerHTML =
          '<span class="btn-icon">🔄</span> Aksara Jawa → Latin';
      }
      button.disabled = false;
    }
  }

  animateOutput() {
    this.output.style.opacity = "0";
    this.output.style.transform = "translateY(10px)";

    setTimeout(() => {
      this.output.style.transition = "all 0.3s ease";
      this.output.style.opacity = "1";
      this.output.style.transform = "translateY(0)";
    }, 100);
  }

  animateButton(button) {
    button.style.transform = "scale(0.95)";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);
  }

  showMessage(message, type = "info") {
    // Hapus pesan sebelumnya
    const existingMessage = document.querySelector(".success-message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // Buat elemen pesan baru
    const messageEl = document.createElement("div");
    messageEl.className = `success-message ${type}`;
    messageEl.textContent = message;

    // Set warna berdasarkan tipe
    const colors = {
      success: "linear-gradient(135deg, #4CAF50 0%, #45a049 100%)",
      error: "linear-gradient(135deg, #f44336 0%, #d32f2f 100%)",
      warning: "linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",
      info: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
    };

    messageEl.style.background = colors[type] || colors.info;

    document.body.appendChild(messageEl);

    // Tampilkan dengan animasi
    setTimeout(() => {
      messageEl.classList.add("show");
    }, 100);

    // Hilangkan setelah 3 detik
    setTimeout(() => {
      messageEl.classList.remove("show");
      setTimeout(() => {
        if (messageEl.parentNode) {
          messageEl.remove();
        }
      }, 300);
    }, 3000);
  }

  // Metode untuk mengekspor hasil
  exportResult() {
    const output = this.output.textContent;
    if (!output || output === "Hasil konversi akan muncul di sini...") {
      this.showMessage("Tidak ada hasil untuk diekspor", "warning");
      return;
    }

    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "aksara-jawa.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.showMessage("File berhasil diekspor!", "success");
  }
}

// Variabel global untuk akses dari HTML
let converter;

// Inisialisasi aplikasi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  converter = new JavaneseConverter();

  // Tambahkan shortcut keyboard
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      // Salin hasil output jika ada, jika tidak salin input yang aktif
      const activeElement = document.activeElement;
      if (activeElement === converter.latinInput) {
        converter.copyLatin();
      } else if (activeElement === converter.javaneseInput) {
        converter.copyJavanese();
      } else {
        // Salin hasil output
        const output = converter.output.textContent;
        if (output && output !== "Hasil konversi akan muncul di sini...") {
          navigator.clipboard.writeText(output).then(() => {
            converter.showMessage(
              "Hasil konversi berhasil disalin!",
              "success"
            );
          });
        }
      }
    }
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      converter.clearAll();
    }
  });

  // Tambahkan info shortcut
  console.log(
    "Shortcuts: Ctrl+Enter (Latin→Jawa), Ctrl+Shift+Enter (Jawa→Latin), Ctrl+C (copy), Ctrl+K (clear)"
  );
});
