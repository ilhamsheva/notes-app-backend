# Notes App Backend

Backend API untuk aplikasi catatan sederhana yang dibangun menggunakan Node.js dan Hapi.js framework.

## 📋 Deskripsi

Notes App Backend adalah REST API yang menyediakan layanan untuk mengelola catatan (notes). API ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus catatan dengan format JSON.

## 🚀 Fitur

- ✅ Membuat catatan baru
- ✅ Mengambil semua catatan
- ✅ Mengambil detail catatan berdasarkan ID
- ✅ Memperbarui catatan yang sudah ada
- ✅ Menghapus catatan
- ✅ CORS support untuk integrasi frontend
- ✅ Validasi data dan error handling

## 🛠️ Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript
- **Hapi.js** - Web framework untuk Node.js
- **nanoid** - Generator ID unik
- **ESLint** - Linting tool untuk kualitas kode
- **Nodemon** - Development tool untuk auto-restart server

## 📁 Struktur Proyek

```
notes-app-backend/
├── src/
│   ├── server.js      # Konfigurasi dan inisialisasi server
│   ├── routes.js      # Definisi routing API
│   ├── handler.js     # Handler untuk setiap endpoint
│   └── notes.js       # Data storage (in-memory array)
├── package.json       # Dependencies dan scripts
├── .eslintrc.json     # Konfigurasi ESLint
└── README.md          # Dokumentasi proyek
```

## 🔧 Instalasi

1. Clone repository ini:
```bash
git clone <repository-url>
cd notes-app-backend
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan server dalam mode development:
```bash
npm start
```

Server akan berjalan di `http://localhost:5000`

## 📚 API Endpoints

### 1. Membuat Catatan Baru
- **Method:** `POST`
- **URL:** `/notes`
- **Body:**
```json
{
  "title": "Judul Catatan",
  "tags": ["tag1", "tag2"],
  "body": "Isi catatan..."
}
```
- **Response Success (201):**
```json
{
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "unique-note-id"
  }
}
```

### 2. Mengambil Semua Catatan
- **Method:** `GET`
- **URL:** `/notes`
- **Response Success (200):**
```json
{
  "status": "success",
  "data": {
    "notes": [
      {
        "id": "unique-note-id",
        "title": "Judul Catatan",
        "tags": ["tag1", "tag2"],
        "body": "Isi catatan...",
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

### 3. Mengambil Detail Catatan
- **Method:** `GET`
- **URL:** `/notes/{id}`
- **Response Success (200):**
```json
{
  "status": "success",
  "data": {
    "note": {
      "id": "unique-note-id",
      "title": "Judul Catatan",
      "tags": ["tag1", "tag2"],
      "body": "Isi catatan...",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```
- **Response Error (404):**
```json
{
  "status": "fail",
  "message": "Catatan tidak ditemukan"
}
```

### 4. Memperbarui Catatan
- **Method:** `PUT`
- **URL:** `/notes/{id}`
- **Body:**
```json
{
  "title": "Judul Catatan Baru",
  "tags": ["tag-baru"],
  "body": "Isi catatan yang diperbarui..."
}
```
- **Response Success (200):**
```json
{
  "status": "success",
  "message": "Catatan berhasil diperbarui"
}
```

### 5. Menghapus Catatan
- **Method:** `DELETE`
- **URL:** `/notes/{id}`
- **Response Success (200):**
```json
{
  "status": "success",
  "message": "Catatan berhasil dihapus"
}
```
- **Response Error (404):**
```json
{
  "status": "fail",
  "message": "Catatan tidak ditemukan"
}
```

## 🧪 Testing API

Anda dapat menggunakan tools seperti Postman, Insomnia, atau curl untuk testing API:

### Contoh menggunakan curl:

```bash
# Membuat catatan baru
curl -X POST http://localhost:5000/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Catatan Pertama",
    "tags": ["personal", "reminder"],
    "body": "Ini adalah catatan pertama saya"
  }'

# Mengambil semua catatan
curl -X GET http://localhost:5000/notes

# Mengambil detail catatan
curl -X GET http://localhost:5000/notes/{note-id}

# Memperbarui catatan
curl -X PUT http://localhost:5000/notes/{note-id} \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Catatan yang Diperbarui",
    "tags": ["updated"],
    "body": "Isi catatan yang sudah diperbarui"
  }'

# Menghapus catatan
curl -X DELETE http://localhost:5000/notes/{note-id}
```

## 📝 Scripts yang Tersedia

- `npm start` - Menjalankan server dengan nodemon (auto-restart)
- `npm run lint` - Menjalankan ESLint untuk memeriksa kualitas kode

## ⚠️ Catatan Penting

- Data catatan disimpan dalam memory (array), sehingga akan hilang ketika server di-restart
- Untuk production, disarankan menggunakan database seperti MongoDB, PostgreSQL, atau MySQL
- CORS sudah dikonfigurasi untuk menerima request dari semua origin (`*`)

## 🔮 Pengembangan Selanjutnya

- [ ] Integrasi dengan database
- [ ] Implementasi authentication dan authorization
- [ ] Validasi input yang lebih ketat
- [ ] Unit testing
- [ ] Logging system
- [ ] Rate limiting
- [ ] Pagination untuk endpoint GET /notes

## 📄 Lisensi

ISC License

## 👨‍💻 Kontributor

Dibuat sebagai bagian dari pembelajaran backend development dengan Node.js dan Hapi.js.