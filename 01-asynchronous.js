// 1. Apa itu synchronous?
// Jawab : synchronous adalah sebuah operasi akan dijalankan setelah operasi sebelumnya selesai dijalankan alias berurutan
// 2. Apa itu asynchronous?
// Jawab : asynchronous tidak perlu menunggu operasi sebelumnya selesai untuk mengeksekusi operasi setelahnya.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// Jawab : ya dapat
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// Jawab : akan menampilkan tulisan first log: angka 1-5
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}