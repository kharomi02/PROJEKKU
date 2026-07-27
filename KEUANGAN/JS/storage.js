function simpanData() {

    localStorage.setItem(
        "transaksi",
        JSON.stringify(transaksi)
    );

}

function ambilData() {

    const data = localStorage.getItem("transaksi");

    if (data) {

        transaksi = JSON.parse(data);

    }

}