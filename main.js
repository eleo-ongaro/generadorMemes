// MODO CLARO - OBSCURO // 



// MEME URL
const urlInput = document.getElementById('url-input')
const imgMeme = document.getElementById('img-meme')

urlInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) => {
    imgMeme.style.backgroundImage = `url('${e.target.value}')`
    imgMeme.style.backgroundSize = 'contain'
    imgMeme.style.backgroundRepeat = 'no-repeat'
    imgMeme.style.backgroundPosition = 'center'
}
// BG COLOR

const inputCircle = document.getElementById('input-circle');
console.log(inputCircle.value)

const colorName = document.getElementById('input-ColorName');
console.log(colorName)

inputCircle.addEventListener('input', () => changeBGcolor());

const changeBGcolor = () => {
    let circleColorChoose = inputCircle.value;
    imgMeme.style.backgroundColor = `${circleColorChoose}`;
    colorName.innerHTML = circleColorChoose;
}


// BACKGROUND select //

const efectsImage = document.getElementById("efects-image")

efectsImage.addEventListener('change', () => changeEfects());

function changeEfects() {
    imgContainer.style.backgroundBlendMode = `${efectsImage.value}`
}


// FILTROS IMG

const brightFilter = document.getElementById('bright-filter');
brightFilter.addEventListener('input', () => filtros());
//console.log(brightFilter);
const opFilter = document.getElementById('op-filter');
opFilter.addEventListener('input', () => filtros());
// console.log(opFilter.value);
const contrastFilter = document.getElementById('contrast-filter');
contrastFilter.addEventListener('input', () => filtros());
// console.log(contrastFilter.value);
const blurFilter = document.getElementById('blur-filter');
blurFilter.addEventListener('input', () => filtros());
// console.log(blurFilter.value);
const grayScaleFilter = document.getElementById('gray-scale-filter');
grayScaleFilter.addEventListener('input', () => filtros());
// console.log(grayScaleFilter.value);
const sepiaFilter = document.getElementById('sepia-filter');
sepiaFilter.addEventListener('input', () => filtros());
// console.log(sepiaFilter.value);
const satFilter = document.getElementById('sat-filter');
satFilter.addEventListener('input', () => filtros());
// console.log(satFilter.value);
const hueFilter = document.getElementById('hue-filter');
hueFilter.addEventListener('input', () => filtros());
// console.log(satFilter.value);
const negativeFilter = document.getElementById('negative-filter');
negativeFilter.addEventListener('input', () => filtros());
// console.log(negativeFilter.value);

const filtros = () => {
    imgMeme.style.filter = `brightness(${brightFilter.value}) opacity(${opFilter.value}) blur(${blurFilter.value}px) contrast(${contrastFilter.value}%) grayscale(${grayScaleFilter.value}%) hue-rotate(${hueFilter.value}deg) sepia(${sepiaFilter.value}%) saturate(${satFilter.value}%) invert(${negativeFilter.value})`;
}







