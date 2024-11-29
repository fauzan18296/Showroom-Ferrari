export function modalBox1() {
  const openBtn1 = document.querySelector("#open-modal-1")
  const closeBtn1 = document.querySelector("#close-modal-1")
  const modal1 = document.querySelector("#modal-1")

      // Memastikan modal invisible/tersembunyi dahulu
    modal1.classList.add("invisible")
  // Lalu buat modalnya terlihat dengan menghapus class invisible
    openBtn1.addEventListener("click", () => {
        modal1.classList.remove("invisible")
      })
  // Lalu buat modalnya yang awalnya terlihat menjadi tersembunyi lagi disaat klik tombol silang/X
   closeBtn1.addEventListener("click", () => {
     modal1.classList.add("invisible")
      })
}

export function modalBox2() {
  const openBtn2 = document.querySelector("#open-modal-2")
  const closeBtn2 = document.querySelector("#close-modal-2")
  const modal2 = document.querySelector("#modal-2")

  modal2.classList.add("invisible")
  openBtn2.addEventListener("click", () => {
    modal2.classList.remove("invisible")
  })
  closeBtn2.addEventListener("click", () => {
    modal2.classList.add("invisible")
  })
}

export function modalBox3() {
  
}

export function modalBox4() {

}

export function modalBox5() {

}

export function modalBox6() {

}

export function modalBox7() {

}

export function modalBox8() {

}

export function modalBox9() {

}

export function modalBox10() {

}

export function modalBox11() {
  
}