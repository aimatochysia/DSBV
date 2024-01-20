const slider = document.getElementById('borderSlider')
const initialScreenHeight = window.innerHeight
const borderValue = document.getElementById('borderValue')
const border = document.querySelector('.border')
const darkModeBtn = document.getElementById('darkModeBtn')
const resolutionDisplay = document.getElementById('resolutionDisplay')

slider.max = Math.floor(initialScreenHeight / 4)

slider.addEventListener('input', updateBorder)
darkModeBtn.addEventListener('click', toggleDarkMode)

function updateBorder () {
  const borderThickness = parseInt(slider.value)
  borderValue.textContent = `Border Thickness: ${borderThickness}px`
  border.style.borderWidth = `${borderThickness}px`
  updateResolutionDisplay()
}

function toggleDarkMode () {
  document.body.classList.toggle('dark-mode')
  border.classList.toggle('dark-mode-border')
  updateResolutionDisplay()
}

function updateResolutionDisplay () {
  const screenWidth =
    window.innerWidth - parseInt(border.style.borderWidth || 0) * 2
  const screenHeight =
    window.innerHeight - parseInt(border.style.borderWidth || 0) * 2
  resolutionDisplay.textContent = `Screen Resolution: ${screenWidth} x ${screenHeight}`
}

updateResolutionDisplay()

setInterval(updateResolutionDisplay, 250)
