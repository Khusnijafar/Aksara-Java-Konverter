# Konverter Latin ↔ Aksara Jawa

Aplikasi web sederhana untuk mengkonversi teks Latin ke Aksara Jawa dan sebaliknya secara online. Dibuat dengan HTML, CSS, dan JavaScript murni.

## 🌐 Demo Live

**Demo aplikasi tersedia di:** [https://aksarajawakonverter.netlify.app/](https://aksarajawakonverter.netlify.app/)

## ✨ Fitur Utama

### 🔄 Konversi Dua Arah
- **Latin → Aksara Jawa**: Konversi teks Latin ke aksara Jawa
- **Aksara Jawa → Latin**: Konversi aksara Jawa ke teks Latin

### 🔤 Aksara Jawa yang Didukung

#### 1. **Huruf Vokal (Swara)**
- `a` → ꦄ, `i` → ꦆ, `u` → ꦈ, `e` → ꦌ, `o` → ꦎ

#### 2. **Huruf Konsonan**
- `ka` → ꦏ, `ga` → ꦒ, `nga` → ꦔ
- `ca` → ꦕ, `ja` → ꦗ, `nya` → ꦚ
- `ta` → ꦠ, `da` → ꦢ, `na` → ꦤ
- `pa` → ꦥ, `ba` → ꦧ, `ma` → ꦩ
- `ya` → ꦪ, `ra` → ꦫ, `la` → ꦭ, `wa` → ꦮ
- `sa` → ꦱ, `ha` → ꦲ
- `dha` → ꦝ, `tha` → ꦛ, `pha` → ꦦ

#### 3. **Sandhangan (Tanda Vokal)**
- `i` → ꦶ (wulu)
- `u` → ꦸ (suku)
- `e` → ꦺ (taling)
- `o` → ꦺꦴ (taling tarung)
- `ai` → ꦻ (dirga mure)
- `au` → ꦻꦴ (dirga mure tarung)

#### 4. **Sandhangan Wyanjana**
- `r` → ꦽ (cecak)
- `y` → ꦾ (pengkal)
- `l` → ꦿ (cakra)
- `w` → ꧀ꦮ (keret)

#### 5. **Huruf Murda (Kapital)**
- `Ka` → ꦑ, `Ga` → ꦓ, `Ca` → ꦖ
- `Ja` → ꦘ, `Ta` → ꦡ, `Da` → ꦣ
- `Pa` → ꦦ, `Ba` → ꦨ, `Ra` → ꦬ, `Sa` → ꦯ

#### 6. **Pada (Angka)**
- `0` → ꧐, `1` → ꧑, `2` → ꧒, `3` → ꧓, `4` → ꧔
- `5` → ꧕, `6` → ꧖, `7` → ꧗, `8` → ꧘, `9` → ꧙

### ⌨️ Shortcut Keyboard
- **Ctrl + Enter**: Konversi Latin → Aksara Jawa
- **Ctrl + Shift + Enter**: Konversi Aksara Jawa → Latin
- **Ctrl + C**: Salin hasil
- **Ctrl + K**: Bersihkan semua

### 🎨 Fitur UI/UX
- **Auto-konversi**: Konversi otomatis setelah 1 detik
- **Animasi**: Efek visual yang smooth
- **Responsive**: Tampilan yang responsif untuk semua perangkat
- **Ekspor**: Simpan hasil ke file teks (.txt)
- **Character counter**: Menampilkan jumlah karakter input
- **Loading state**: Indikator saat proses konversi

## 🚀 Cara Penggunaan

1. **Buka aplikasi** di browser
2. **Ketik teks Latin** di kotak input pertama
3. **Tekan tombol konversi** atau gunakan shortcut keyboard
4. **Hasil konversi** akan muncul di bagian output
5. **Salin hasil** dengan tombol copy atau Ctrl+C
6. **Ekspor hasil** ke file teks dengan tombol ekspor

## 📱 Kompatibilitas

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop, Tablet, Mobile
- ✅ Windows, macOS, Linux, Android, iOS

## 🛠️ Teknologi

- **HTML5**: Struktur halaman
- **CSS3**: Styling dan animasi
- **JavaScript ES6+**: Logika konversi
- **Google Fonts**: Noto Sans Javanese untuk aksara Jawa

## 📝 Contoh Penggunaan

### Teks Latin:
```
Sugeng enjing, kula badhe sinau aksara Jawa kangge nguri-uri budaya leluhur.
```

### Hasil Aksara Jawa:
```
ꦱꦸꦒꦺꦁ ꦌꦤ꧀ꦗꦶꦁ ꦏꦸꦭ ꦧꦝꦺ ꦱꦶꦤꦻꦴ ꦄꦏ꧀ꦱꦫ ꦗꦮ ꦏꦔ꧀ꦒꦺ ꦔꦸꦫꦶ ꦈꦫꦶ ꦧꦸꦢꦪ ꦭꦺꦭꦸꦲꦸꦫ꧀.
```

## 🚀 Instalasi & Pengembangan

### Demo Live
**Coba aplikasi langsung:** [https://aksarajawakonverter.netlify.app/](https://aksarajawakonverter.netlify.app/)

### Prerequisites
- Node.js >= 12.0.0 (untuk development server)

### Setup
```bash
# Clone repository
git clone https://github.com/Khusnijafar/Aksara-Java-Konverter.git
cd Aksara-Java-Konverter

# Install dependencies (opsional, untuk development server)
npm install

# Jalankan development server
npm start
# atau
npm run serve
```

### Struktur File
```
Aksara-Java-Konverter/
├── aksara-jawa.html    # File utama aplikasi
├── script.js           # Logika konversi JavaScript
├── styles.css          # Styling CSS
├── package.json        # Konfigurasi npm
└── README.md           # Dokumentasi
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau laporkan bug melalui issues.

### Cara Berkontribusi
1. Fork repository ini
2. Buat branch fitur baru (`git checkout -b fitur-baru`)
3. Commit perubahan (`git commit -am 'Menambah fitur baru'`)
4. Push ke branch (`git push origin fitur-baru`)
5. Buat Pull Request

## 📄 Lisensi

© 2025 Aksara Jawa Converter. Dibuat dengan ❤️ untuk melestarikan budaya Jawa.
