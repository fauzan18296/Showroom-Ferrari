import '../css/style.css'
import { carousel } from './logic/carouselGallery'
import { setupMenu } from './logic/menuBar'
import { modalBox } from './logic/modelsBox1'

// Setup navigasi menubar saat device mobile
setupMenu()

// Setup slider carousel gallery
carousel()

// Setup Modal Box
modalBox()
