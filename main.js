// MODO CLARO - OBSCURO // 



// MEME URL
const urlInput = document.getElementById('url-input')
const imgMeme = document.getElementById('img-meme')

urlInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) => {
    imgMeme.style.backgroundImage = `url('${e.target.value}')`
    imgMeme.style.backgroundSize = 'cover'
    imgMeme.style.backgroundRepeat = 'no-repeat'
    imgMeme.style.backgroundRepeat = 'center'
}

// FILTROS IMG

const brightFilter = document.getElementById('bright-filter');

urlInput.addEventListener('input', (e)=> changeBright(e))

const changeBright = (e) => {
    imgMeme.style.backgroundImage = `url('${e.target.value}')`
    imgMeme.style.backgroundSize = 'cover'
    imgMeme.style.backgroundRepeat = 'no-repeat'
    imgMeme.style.backgroundRepeat = 'center'
}

const opFilter = document.getElementById('op-filter');
const contrastFilter = document.getElementById('contrast-filter');
const blurFilter = document.getElementById('blur-filter');
const grayScaleFilter = document.getElementById('gray-scale-filter');
const sepiaFilter = document.getElementById('sepia-filter');
const satFilter = document.getElementById('sat-filter');
const negativeFilter = document.getElementById('negative-filter');








