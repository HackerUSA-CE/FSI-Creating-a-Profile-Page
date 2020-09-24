let htmlContent = document.querySelector('.html.content').innerHTML
let jsContent = document.querySelector('.js-generated.content').innerHTML

let htmlCode = document.querySelector('.html.code')
let jsCode = document.querySelector('.js-generated.code')

let options = {
    "indent": "auto",
    "indent-spaces": 2,
    "wrap": 80,
    "markup": true,
    "output-xml": false,
    "numeric-entities": true,
    "quote-marks": true,
    "quote-nbsp": false,
    "show-body-only": true,
    "quote-ampersand": false,
    "break-before-br": true,
    "uppercase-tags": false,
    "uppercase-attributes": false,
    "drop-font-tags": true,
    "tidy-mark": false
}

htmlCode.innerText = tidy_html5(htmlContent, options)
jsCode.innerText = tidy_html5(jsContent, options)