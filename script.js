const scriptURL = "https://script.google.com/macros/s/AKfycbzRe2lgV8StipYay4ghixsGdkrZXdUpyDi6OGLApV3bidBWkD7Di88mAXAFdGsOkzWI/exec";

// Menampilkan tanggal hari ini
const hari = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

document.getElementById("tanggalHari").innerHTML =
  hari.toLocaleDateString('id-ID', options);

// Isi otomatis tanggal
document.getElementById("tanggal").valueAsDate = new Date();

// Submit Form
document.getElementById("guestForm").addEventListener("submit", function (e) {

  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    instansi: document.getElementById("instansi").value,
    alamat: document.getElementById("alamat").value,
    hp: document.getElementById("hp").value,
    tanggal: document.getElementById("tanggal").value,
    tujuan: document.getElementById("tujuan").value
  };

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  .then(response => response.text())

  .then(result => {

    const status = document.getElementById("status");

    status.classList.remove("d-none");
    status.classList.remove("alert-danger");
    status.classList.add("alert-success");

    status.innerHTML = "✔ Data berhasil disimpan.";

    document.getElementById("guestForm").reset();

    document.getElementById("tanggal").valueAsDate = new Date();

  })

  .catch(error => {

    const status = document.getElementById("status");

    status.classList.remove("d-none");
    status.classList.remove("alert-success");
    status.classList.add("alert-danger");

    status.innerHTML = "❌ Gagal mengirim data.";

    console.error(error);

  });

});
