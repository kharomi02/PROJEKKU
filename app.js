function tampilJadwal(hari) {

    console.log("Tombol diklik:", hari);

    const container = document.getElementById("jadwalContainer");

    console.log(container);

    console.log(jadwal);

    const data = jadwal[hari];

    console.log(data);

    let html = "";

    data.forEach(item => {

        html += `
            <div class="card mb-3">
                <div class="card-body">
                    <h5>${item.matkul}</h5>
                    <p>🕒 ${item.jam}</p>
                    <p>📍 ${item.ruang}</p>
                </div>
            </div>
        `;

    });

    container.innerHTML = html;
}