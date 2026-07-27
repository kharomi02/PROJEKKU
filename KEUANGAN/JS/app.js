// 1. Tangkap semua elemen HTML berdasarkan ID-nya
const btnTambah = document.getElementById('btnTambah');
const inputJenis = document.getElementById('jenis');
const inputKategori = document.getElementById('kategori');
const inputNominal = document.getElementById('nominal');
const inputTanggal = document.getElementById('tanggal');
const inputCatatan = document.getElementById('catatan');
const tabelTransaksi = document.getElementById('dataTransaksi');

// Wadah data transaksi (Array)
let daftarTransaksi = [];

// 2. Fungsi untuk mengambil data awal saat web dibuka
function ambilData() {
    // Mengambil data dari localStorage (jika ada), jika kosong gunakan array kosong []
    const dataLokal = localStorage.getItem('transaksi_keuanganku');
    if (dataLokal) {
        daftarTransaksi = JSON.parse(dataLokal);
    } else {
        daftarTransaksi = [];
    }
    
    // Tampilkan data ke dalam tabel dan perbarui angka statistik
    tampilkanTabel();
    hitungStatistik();
}

// 3. Fungsi untuk memasukkan data ke tabel HTML
function tampilkanTabel() {
    // Jika tidak ada data transaksi
    if (daftarTransaksi.length === 0) {
        tabelTransaksi.innerHTML = `
            <tr>
                <td colspan="7" class="text-center text-muted">Belum ada transaksi</td>
            </tr>
        `;
        return;
    }

    // Jika ada data, susun baris tabelnya
    let html = '';
    daftarTransaksi.forEach((item, index) => {
        // Tentukan warna badge jenis (Income = Hijau, Outcome = Merah)
        const warnaBadge = item.jenis === 'income' ? 'bg-success' : 'bg-danger';
        
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.tanggal}</td>
                <td><span class="badge ${warnaBadge}">${item.jenis.toUpperCase()}</span></td>
                <td>${item.kategori}</td>
                <td>${item.catatan}</td>
                <td>Rp ${Number(item.nominal).toLocaleString('id-ID')}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="hapusTransaksi(${index})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    tabelTransaksi.innerHTML = html;
}

// 4. Fungsi menghitung total Saldo, Income, Outcome
function hitungStatistik() {
    let totalIncome = 0;
    let totalOutcome = 0;

    daftarTransaksi.forEach(item => {
        if (item.jenis === 'income') {
            totalIncome += Number(item.nominal);
        } else if (item.jenis === 'outcome') {
            totalOutcome += Number(item.nominal);
        }
    });

    const totalSaldo = totalIncome - totalOutcome;

    // Masukkan angka ke elemen HTML
    document.getElementById('saldo').innerText = `Rp ${totalSaldo.toLocaleString('id-ID')}`;
    document.getElementById('income').innerText = `Rp ${totalIncome.toLocaleString('id-ID')}`;
    document.getElementById('outcome').innerText = `Rp ${totalOutcome.toLocaleString('id-ID')}`;
    document.getElementById('jumlah').innerText = daftarTransaksi.length;
}

// 5. Aksi saat tombol "Tambah Transaksi" diklik
btnTambah.addEventListener('click', function() {
    // Validasi input: pastikan semua kolom terisi
    if (!inputJenis.value || !inputKategori.value || !inputNominal.value || !inputTanggal.value) {
        alert('Mohon lengkapi semua kolom data transaksi!');
        return;
    }

    // Buat objek transaksi baru
    const transaksiBaru = {
        jenis: inputJenis.value,
        kategori: inputKategori.value,
        nominal: inputNominal.value,
        tanggal: inputTanggal.value,
        catatan: inputCatatan.value
    };

    // Masukkan ke array utama
    daftarTransaksi.push(transaksiBaru);

    // Simpan ke memori browser (localStorage)
    localStorage.setItem('transaksi_keuanganku', JSON.stringify(daftarTransaksi));

    // Bersihkan formulir kembali kosong
    inputJenis.value = '';
    inputKategori.value = 'Makanan';
    inputNominal.value = '';
    inputTanggal.value = '';
    inputCatatan.value = '';

    // Perbarui visual web
    tampilkanTabel();
    hitungStatistik();
});

// 6. Fungsi menghapus transaksi
function hapusTransaksi(index) {
    daftarTransaksi.splice(index, 1);
    localStorage.setItem('transaksi_keuanganku', JSON.stringify(daftarTransaksi));
    tampilkanTabel();
    hitungStatistik();
}

// JALANKAN FUNGSI AWAL SAAT HALAMAN DIMUAT
ambilData();
