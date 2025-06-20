# 🧪 API Testing dengan Mocha, Chai, dan node-fetch (reqres.in)

Project ini merupakan contoh sederhana pengujian API (GET, POST, PATCH, DELETE) menggunakan [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), dan [node-fetch](https://github.com/node-fetch/node-fetch) dengan API dummy dari [reqres.in](https://reqres.in).

## ✅ Prasyarat

Pastikan kamu sudah menginstal:

- [Node.js](https://nodejs.org/) (v14 atau lebih tinggi)
- [npm](https://www.npmjs.com/) (biasanya sudah termasuk saat instal Node.js)

## 📦 Instalasi

```bash
# Inisialisasi project baru
npm init -y

# Instalasi Mocha, Chai, dan node-fetch
npm install mocha chai node-fetch

📁 Struktur Direktori
api-test/
├── node_modules
|   └── .....
├── test/
│   └── reqres.test.js
├── package-lock.json
├── package.json
└── README.md

```

🧪 Cara Menjalankan Test
npx mocha test/reqres.test.js
