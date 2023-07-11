// MEME URL
const urlInput = document.getElementById('url-input')
const imgMeme = document.getElementById('img-meme')

urlInput.addEventListener('input', (e)=> changeBackground(e))

const changeBackground = (e) => {
    imgMeme.style.backgroundImage = `url('${e.target.value}')`
    imgMeme.style.backgroundSize = 'cover'
    imgMeme.style.backgroundRepeat = 'no-repeat'
}