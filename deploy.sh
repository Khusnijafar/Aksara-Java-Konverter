#!/bin/bash

# Script untuk deploy Aksara Jawa Converter ke GitHub Pages
# Pastikan Anda sudah login ke GitHub CLI atau menggunakan SSH key

echo "🚀 Memulai deployment Aksara Jawa Converter ke GitHub Pages..."

# Cek apakah git sudah diinisialisasi
if [ ! -d ".git" ]; then
    echo "📁 Inisialisasi git repository..."
    git init
fi

# Tambahkan semua file
echo "📝 Menambahkan file ke git..."
git add .

# Commit perubahan
echo "💾 Commit perubahan..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Set branch main
echo "🌿 Set branch main..."
git branch -M main

# Cek apakah remote origin sudah ada
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  Remote origin belum dikonfigurasi."
    echo "Silakan tambahkan remote origin dengan perintah:"
    echo "git remote add origin https://github.com/USERNAME/aksara-jawa-converter.git"
    echo "Ganti USERNAME dengan username GitHub Anda"
    exit 1
fi

# Push ke GitHub
echo "⬆️  Push ke GitHub..."
git push -u origin main

echo "✅ Deployment selesai!"
echo ""
echo "📋 Langkah selanjutnya:"
echo "1. Buka repository di GitHub"
echo "2. Pergi ke Settings → Pages"
echo "3. Pilih 'Deploy from a branch'"
echo "4. Pilih branch 'gh-pages' dan folder '/(root)'"
echo "5. Klik Save"
echo ""
echo "🌐 Website akan tersedia di: https://USERNAME.github.io/aksara-jawa-converter"
echo "Ganti USERNAME dengan username GitHub Anda" 