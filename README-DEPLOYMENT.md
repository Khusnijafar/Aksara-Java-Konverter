# 🚀 Panduan Deployment & Troubleshooting

## Masalah Umum Deployment Netlify

### 1. **Error 404 - Halaman Tidak Ditemukan**

**Penyebab:**
- Netlify tidak menemukan file `index.html` sebagai entry point
- Routing tidak dikonfigurasi dengan benar

**Solusi:**
- File `index.html` sudah dibuat sebagai redirect ke `aksara-jawa.html`
- File `_redirects` sudah dikonfigurasi
- File `netlify.toml` sudah dibuat dengan pengaturan yang benar

### 2. **Error Build Failed**

**Penyebab:**
- Dependencies tidak terinstall
- Build command tidak sesuai

**Solusi:**
- Project ini menggunakan static HTML, tidak memerlukan build process
- Pastikan `netlify.toml` memiliki `command = ""` (kosong)

### 3. **File Tidak Ter-deploy**

**Penyebab:**
- File tidak ter-commit ke repository
- `.gitignore` memblokir file penting

**Solusi:**
- Commit semua file: `git add . && git commit -m "Fix deployment"`
- Push ke repository: `git push origin main`

## Langkah-langkah Deployment

### Netlify
1. **Connect Repository:**
   - Login ke Netlify
   - Klik "New site from Git"
   - Pilih repository Anda

2. **Build Settings:**
   - Build command: `(kosong)`
   - Publish directory: `.`
   - Node version: `18`

3. **Deploy Settings:**
   - Branch: `main` atau `master`
   - Auto deploy: `enabled`

### Vercel (Alternatif)
1. **Connect Repository:**
   - Login ke Vercel
   - Import project dari Git
   - Pilih repository

2. **Framework Preset:**
   - Pilih "Other" atau "Static Site"

3. **Build Settings:**
   - Build command: `(kosong)`
   - Output directory: `.`

## File Konfigurasi yang Sudah Dibuat

### `netlify.toml`
```toml
[build]
  publish = "."
  command = ""

[[redirects]]
  from = "/*"
  to = "/aksara-jawa.html"
  status = 200
```

### `_redirects`
```
/*    /aksara-jawa.html   200
```

### `index.html`
- File redirect otomatis ke `aksara-jawa.html`
- Halaman loading yang menarik

### `vercel.json`
- Konfigurasi alternatif untuk Vercel
- Routing dan headers yang sesuai

## Troubleshooting Checklist

- [ ] Semua file sudah ter-commit dan ter-push
- [ ] File `index.html` ada di root directory
- [ ] File `aksara-jawa.html` ada dan bisa diakses
- [ ] File `script.js` dan `styles.css` ada
- [ ] Tidak ada error di browser console
- [ ] Build log Netlify tidak menunjukkan error

## Test Lokal

Sebelum deploy, test di lokal:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx http-server -p 8000

# Menggunakan PHP
php -S localhost:8000
```

Kemudian buka `http://localhost:8000`

## Kontak Support

Jika masih mengalami masalah:
1. Cek build log di Netlify dashboard
2. Test di browser developer tools
3. Pastikan semua file ter-upload dengan benar
4. Coba deploy ulang dengan "Clear cache and deploy"

## Alternatif Platform

Jika Netlify bermasalah, coba:
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Aktifkan di repository settings
- **Firebase Hosting**: `firebase deploy`
- **Surge.sh**: `surge .` 