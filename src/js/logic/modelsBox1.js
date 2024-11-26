export function modalBox() {
  const openBtn1 = document.querySelector(".open-modal-1")
  const closeBtn1 = document.querySelector(".close-modal-1")
  const modal1 = document.querySelector(".modal-1")

  // Memastikan modal invisible/tersembunyi dahulu
  modal1.classList.add("invisible")

  // Lalu buat modalnya terlihat dengan menghapus class invisible
  openBtn1.addEventListener("click", () => {
      modal1.classList.remove("invisible")
    });

   // Lalu buat modalnya yang awalnya terlihat menjadi tersembunyi lagi disaat klik tombol silang/X
  closeBtn1.addEventListener("click", () => {
       modal1.classList.add("invisible")
    });
}