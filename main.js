// MODO CLARO - OBSCURO // 


// *************** ASIDE IMG ************** //
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
//console.log(inputCircle.value)

const colorName = document.getElementById('input-ColorName');
//console.log(colorName)

inputCircle.addEventListener('input', () => changeBGcolor());

const changeBGcolor = () => {
    let circleColorChoose = inputCircle.value;
    imgMeme.style.backgroundColor = `${circleColorChoose}`;
    colorName.innerHTML = circleColorChoose;
}


// BACKGROUND select //

const effectSelect = document.getElementById("effect-select");
//console.log(effectSelect)
effectSelect.addEventListener('change', () => changeEffects());

function changeEffects() {
    imgMeme.style.backgroundBlendMode = `${effectSelect.value}`
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

// RESET BUTTON

const buttonReset = document.getElementById('button-reset');
//console.log(buttonReset)
buttonReset.addEventListener('click', () => resetButton());

const resetButton = () => {
    imgMeme.style.filter =  "none";
}


// *************** ASIDE TXT ************** //

// tOP TEXT
const topText = document.getElementById('top-text');
console.log(topText)
topText.addEventListener('change', () => changeTopText());

const bottomText = document.getElementById('bottom-text');
console.log(bottomText.value)

const changeTopText = () => {
    let chosenText = topText.value
    topText.textContent.replace = `${chosenText}`;
}

