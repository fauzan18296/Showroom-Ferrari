import '../css/style.css'
import { setupMenu } from './logic/menuBar'

// Setup navigasi menubar saat device mobile
setupMenu()

// Setup slider carousel gallery
  const prevBtn = [...document.querySelectorAll(".prev")];
  const nextBtn = document.querySelectorAll(".next");
const galleryContainer = [...document.querySelectorAll(".container")];
  
galleryContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;
  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth
  })
})
