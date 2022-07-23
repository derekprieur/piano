const keyElements = document.querySelectorAll('[data-note]')
const whiteKeyElements = document.querySelectorAll('.white')
const blackKeyElements = document.querySelectorAll('.black')

const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const blackKeys = ['s', 'd', 'g', 'h', 'j']

keyElements.forEach(key => {
    key.addEventListener('click', () => keyClicked(key))
})

document.addEventListener('keydown', (e) => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = whiteKeys.indexOf(key)
    const blackKeyIndex = blackKeys.indexOf(key)
    if (whiteKeyIndex > -1) {
        keyClicked(whiteKeyElements[whiteKeyIndex])
    }

    if (blackKeyIndex > -1) {
        keyClicked(blackKeyElements[blackKeyIndex])
    }

})

function keyClicked(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('pressed')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('pressed')
    })
}