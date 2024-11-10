export function carousel() {
  // Menambahkan event listener pada window untuk menjalankan kode setelah halaman selesai dimuat
  window.addEventListener("load", () => {
    // Mengambil elemen dengan kelas .gallery-container, yang digunakan sebagai kontainer gambar
    const imageList = document.querySelector(".gallery-container");

    // Mengambil semua elemen dengan kelas .slide-btn, yaitu tombol untuk menggeser galeri
  const slideBtn = document.querySelectorAll(".slide-btn");
  
    // Menambahkan event listener pada setiap tombol slide
    slideBtn.forEach((btn) => {
     // Saat tombol diklik, jalankan fungsi berikut
      btn.addEventListener("click", () => {
      // Mengecek ID tombol untuk menentukan arah geser; "prev" berarti ke kiri (-1), selain itu ke kanan (1)
        const direction = btn.id === "prev" ? -1 : 1;

      // Menghitung jumlah geser sesuai arah dan lebar kontainer
        const scrollAmount = imageList.clientWidth * direction;
        
      // Menggeser kontainer gambar dengan jumlah tertentu secara halus
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
    })
  })
})
}