const sideBar = document.querySelector('.sideBar')
const panel = document.querySelector('.panel')

const toggleSideBar = () => {
  sideBar.classList.toggle('change')
  panel.classList.remove('change')
}

const togglePanel = () => {
  panel.classList.toggle('change')
  sideBar.classList.remove('change')
}

document.querySelectorAll('.sideBar a').forEach((el, i) => {
  anime({
    targets: el,
    translateY: [-20, 0],
    opacity: [0, 1],
    delay: i * 50
  })
})