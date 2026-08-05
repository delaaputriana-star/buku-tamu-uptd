const scriptURL="https://script.google.com/macros/s/AKfycbzRe2lgV8StipYay4ghixsGdkrZXdUpyDi6OGLApV3bidBWkD7Di88mAXAFdGsOkzWI/exec";

document
.getElementById("guestForm")
.addEventListener("submit",function(e){

e.preventDefault();

const data={

nama:document.getElementById("nama").value,

instansi:document.getElementById("instansi").value,

alamat:document.getElementById("alamat").value,

hp:document.getElementById("hp").value,

tanggal:document.getElementById("tanggal").value,

tujuan:document.getElementById("tujuan").value

};

fetch(scriptURL,{

method:"POST",

body:JSON.stringify(data)

})

.then(res=>res.text())

.then(res=>{

document.getElementById("status").innerHTML=

"✔ Data berhasil disimpan";

document.getElementById("guestForm").reset();

})

.catch(error=>{

document.getElementById("status").innerHTML=

"Gagal mengirim data.";

});

});
