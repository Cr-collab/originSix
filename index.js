const nav = document.querySelector('#header nav')

/** abre e fecha o menu quando clickar no icone : hamburguer e x */
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/** quando clicar em um item do menu esconder o menu  */

const links = document.querySelectorAll('#header nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/** mudar header da page qundo der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/** TESTIMONIASL SLIDER */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  /** um slide por view */
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/** SCROLLREAVEL MOSTRA ELEMENTOS QUANDO TIVER SCOLLANDO A PAGINA */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text , #home .image,
  #about .text , #about .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text , #contact .links`,
  { interval: 100 }
)

/** Botão voltar para topo  */

const backToTopButton = document.querySelector('.top')

window.addEventListener('scroll', () => {
  console.log(window.screenY)
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

/** Menu Ativo conforme a seção visivel na página */
const sections = document.querySelectorAll('gmain section[id]')
window.addEventListener('scroll', () => {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
})
