let htmlContent = document.querySelector('.html.content').innerHTML
let jsContent = document.querySelector('.js-generated.content').innerHTML

let htmlCode = document.querySelector('.html.code')
let jsCode = document.querySelector('.js-generated.code')

htmlCode.innerText = htmlContent
jsCode.innerText = jsContent