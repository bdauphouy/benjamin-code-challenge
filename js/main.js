const marquee = (parent, direction, text) => {
  const container = document.querySelector(parent)
  container.classList.add('slide')
  direction === 'left'
    ? container.classList.add('left')
    : container.classList.add('right')
  for (let i = 0; i < 2; i++) {
    const div = document.createElement('div')
    for (let i = 0; i < 10; i++) {
      const span = document.createElement('span')
      span.innerText = text
      div.appendChild(span)
    }
    container.appendChild(div)
  }
}

const slide1 = marquee('.title-slider', 'left', 'Benjamin Code')
const slide2 = marquee(
  '.subtitle-slider',
  'right',
  'freelancer, creative developer and youtuber',
)

const parallax = (el, speed) => {
  const element = document.querySelector(el)
  console.log(element)

  console.log(getComputedStyle(element).transform)

  window.addEventListener('mousemove', e => {
    element.style.left = e.clientX / (speed * 100) + 'px'
  })
}

const parallax1 = parallax('.content > div > img', 0.8)
const parallax2 = parallax('.circle', -0.4)
const parallax3 = parallax('.point', 0.1)

const year = document.querySelector('.year')
year.innerText = new Date().getFullYear() - 2013
