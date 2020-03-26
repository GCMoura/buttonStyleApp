var heightInput = document.querySelector('.height')
var widthInput = document.querySelector('.width')
var borderRadiusInput = document.querySelector('.borderRadius')
var backgroundColorInput = document.querySelector('.backgroundColor')
var fontColorInput = document.querySelector('.fontColor')

var buttonApplication = document.querySelector('.button-app')
var buttonGetCSS = document.querySelector('.getCSS')

var buttonExample = document.querySelector('.button')

var cssCode = document.querySelector('.cssCode')

buttonApplication.addEventListener('click', styleApplication, false)

function styleApplication() {
    buttonExample.style.height = (heightInput.value + 'px')
    buttonExample.style.width = (widthInput.value + 'px')
    buttonExample.style.borderRadius = (borderRadiusInput.value + 'px')
    buttonExample.style.backgroundColor = (backgroundColorInput.value)
    buttonExample.style.color = (fontColorInput.value)

}

buttonGetCSS.addEventListener('click', getCSS, false)

function getCSS() {
    cssCode.style.display = 'block'
    cssCode.innerHTML = `
    height: ${heightInput.value}px; <br>
    width: ${widthInput.value}px;
    `
}