ALUR PROJEK WEBSITE JADWAL KULIAH


1. MEMBUAT STRUKTUR FOLDER
   JadwalKuliah
     - index.html (halaman utama)
     - css/
         -style.css (mengatur tampilan)
     - js/
         -data.js (menyimpan data jadwal)
         -app.js (mengatur logika)
     - assets
       
2.MEMBUAT HALAMAN HTML
  membuat kerangka website
  - deklarasi DOCTYPE (memberitahu browser dokumen menggunakan html5 agar browser menampilkan halaman sesuai standart html baru)
  - <html> 
  - head (berisi informasi helaman web yg tidak ditampilkan langsung kepada pengguna)
      -<meta charset="UTF-8"> (mengatur format karekter agar huruf,angka, dan simbol dapat ditampilkan dengan             benar)
      - <meta name="viewport"  content="width=device-width, initial-scale=1.0"> (agar website dapat menyesuaikan               ukuran layar pegguna)
      - <title>JADWALKULIAH</title> (memberi judul pada tab browser)
      - <link href="https://cdn.jsdelivr.net/npm/bootstrap..."rel="stylesheet"> (dengan bootstrap saya tidak perlu           membuat desain dari nol)
      - <link rel="stylesheet" href="css/style.css"> (membarikan tampilan tambahan yg tidak ada di bootstrap                seperti warrna,font,backgraound, animasi, ukuran)
   - <body></body> (berisikan seluruh isi website yg akan terlihat oleh pengguna)
         -<div class="container mt-5"> (Container digunakan agar seluruh websitw berada di tengah halaman)
         - <div class="text-center mb-4"> (membuat tulisan ditengah)
         -<h1>JADWALKULIAH</h1> (menampilkan nama website)
         - <p class="text-muted"> Jadwal Kuliah Mahasiswa...</p> (memberikan penjelasan singkat mengenai web)
         - <h5 id="tanggal"> Selasa, 21 Juli 2026 </h5>
         - <button class="btn btn-primary m-1" onclick="tampilJadwal('selasa')"> Selasa </button> (mengubah tombol            menjadi tombol boostrspt, memberikan wwarna biru pada tombol, memberikan antar tombol)
         - <div class="card shadow"> (card boostrapt digunakan sebagai kotak tempat menampilkan jadwal)
         - <div class="card-header"> (memberikan judul pada kota jadwal)

3. MEMbBUAT DATA.JS
    - buat variabel menggunakan const( data yg tidak bisa diganti dengan objek lain selama program berjalan)\
    - di dalam variable tambah properti
