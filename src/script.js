import './style.css'

const title = document.querySelector('h1')

let mouseX = 0

window.addEventListener('mousemove', (e) => {
	mouseX = 100 + (e.clientX / window.innerWidth) * 800
	title.style.fontVariationSettings = `"wght" ${mouseX}`
})