const cards = document.querySelectorAll('.card')
const close = document.querySelector('.close')
const modal = document.querySelector('.modal')

for (let card of cards ) {
    card.addEventListener('click', function () {
        const img = card.querySelector('img').src
        const text = card.querySelector('h3').textContent
        const subText = card.querySelector('p').textContent

        modal.classList.remove('hidden')
        modal.querySelector('img').src = img
        modal.querySelector('h1').textContent = text
        modal.querySelector('h2').textContent = subText
    })
}

close.addEventListener('click', function() {
    modal.classList.add('hidden')
})