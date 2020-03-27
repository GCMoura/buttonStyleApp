var heightInput = document.querySelector('.height')
var widthInput = document.querySelector('.width')
var borderInput1 = document.querySelector('.border1')
var borderInput2 = document.querySelector('.border2')
var borderInput3 = document.querySelector('.border3')
var borderRadiusInput = document.querySelector('.borderRadius')
var backgroundColorInput = document.querySelector('.backgroundColor')
var boxShadowInput1 = document.querySelector('.boxShadow1')
var boxShadowInput2 = document.querySelector('.boxShadow2')
var boxShadowInput3 = document.querySelector('.boxShadow3')
var boxShadowInput4 = document.querySelector('.boxShadow4')
var boxShadowInput5 = document.querySelector('.boxShadow5')
var textDecorationInput = document.querySelector('.textDecoration')
var radioBtn = document.querySelectorAll('input[type=checkbox]')
var fontSizeInput = document.querySelector('.fontSize')
var fontColorInput = document.querySelector('.fontColor')

var buttonApplication = document.querySelector('.button-app')
var buttonGetCSS = document.querySelector('.getCSS')

var buttonExample = document.querySelector('.button')

var cssCode = document.querySelector('.cssCode')

buttonApplication.addEventListener('click', styleApplication, false)

function styleApplication() {
    buttonExample.style.height = `${heightInput.value}px`
    buttonExample.style.width = `${widthInput.value}px`
    buttonExample.style.border = `${borderInput1.value}px ${borderInput2.value} ${borderInput3.value}`
    buttonExample.style.borderRadius = `${borderRadiusInput.value}px`
    buttonExample.style.backgroundColor = `${backgroundColorInput.value}`
    buttonExample.style.boxShadow =
        `${boxShadowInput1.value}px ${boxShadowInput2.value}px 
        ${boxShadowInput3.value}px ${boxShadowInput4.value}px
        ${boxShadowInput5.value}`
    buttonExample.style.fontSize = `${fontSizeInput.value}px`
    buttonExample.style.color = `${fontColorInput.value}`
    buttonExample.style.textDecoration = `${textDecorationInput.value}`

    for (var i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            if (radioBtn[i].value == 'bold') {
                buttonExample.style.fontWeight = `${radioBtn[i].value}`
            } else if (radioBtn[i].value == 'italic') {
                buttonExample.style.fontStyle = `${radioBtn[i].value}`
            }
        }
    }
}

buttonGetCSS.addEventListener('click', getCSS, false)

function getCSS() {
    cssCode.style.display = 'block'

    if (heightInput.value != '') {
        cssCode.innerHTML = `height: ${heightInput.value}px; <br>`
    }
    if (widthInput.value != '') {
        cssCode.innerHTML += `width: ${widthInput.value}px; <br>`
    }
    if (borderInput1.value != '' && borderInput2.value != '' && borderInput3.value != '') {
        cssCode.innerHTML += `border: ${borderInput1.value}px ${borderInput2.value} ${borderInput3.value}; <br>`
    }
    if (borderRadiusInput.value != '') {
        cssCode.innerHTML += `border-radius: ${borderRadiusInput.value}px; <br>`
    }
    if (backgroundColorInput.value != '') {
        cssCode.innerHTML += `background-color: ${backgroundColorInput.value}; <br>`
    }
    if (boxShadowInput1.value != '' && boxShadowInput2.value && boxShadowInput3.value && boxShadowInput4.value && boxShadowInput5.value) {
        cssCode.innerHTML += `box-shadow: ${boxShadowInput1.value}px ${boxShadowInput2.value}px ${boxShadowInput3.value}px ${boxShadowInput4.value}px rgba(${boxShadowInput5.value}); <br>`
    }
    if (textDecorationInput.value != '') {
        cssCode.innerHTML += `text-decoration: ${textDecorationInput.value}; <br>`
    }
    if (radioBtn.value != '' && radioBtn.value == 'italic') {
        cssCode.innerHTML += `font-style: ${radioBtn.value}; <br>`
    }
    if (radioBtn.value != '' && radioBtn.value == 'bold') {
        cssCode.innerHTML += `width: ${radioBtn.value}; <br>`
    }
    if (fontSizeInput.value != '') {
        cssCode.innerHTML += `font-size: ${fontSizeInput.value}px; <br>`
    }
    if (fontColorInput.value != '') {
        cssCode.innerHTML += `color: ${fontColorInput.value};`
    }

}