function validate() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (nama == "" && email == "" && alamat == "") {
    alert("Anda harus mengisi data secara lengkap!");
  } else {
    alert("Anda sudah berhasil mengisi");
  }
}
