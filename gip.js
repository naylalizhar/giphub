function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === 'user' && password === 'password') {
        alert('Login berhasil!');
        window.location.href = 'halaman_baru.html'; 
        alert('Login gagal. Periksa kembali username dan password.');
    }
}
