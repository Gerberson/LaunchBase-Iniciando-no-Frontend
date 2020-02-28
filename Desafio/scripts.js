const modalOver = document.querySelector('.modal-over')
const modalContent = document.querySelector('.modal-content')
const cards = document.querySelectorAll('.cards a')
const minimize = document.querySelector('.min-modal')
const maxmimize = document.querySelector('.max-modal')

for (let card of cards) {
    card.addEventListener("click", function(){
        const id = card.getAttribute('id')
        modalOver.classList.add('active')
        modalOver.querySelector('iframe').src = `https://rocketseat.com.br/${id}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOver.classList.remove("active")
    modalContent.classList.remove("none")
    modalOver.classList.remove("minimize")
    maxmimize.classList.add("hidden")
    minimize.classList.remove("hidden")
    modalOver.querySelector('iframe').src = ""
})

minimize.addEventListener("click", function() {
    modalOver.classList.add("minimize")
    modalContent.classList.add("none")
    minimize.classList.add("hidden")
    maxmimize.classList.remove("hidden")
})

maxmimize.addEventListener("click", function() {
    modalOver.classList.remove("minimize")
    modalContent.classList.remove("none")
    minimize.classList.remove("hidden")
    maxmimize.classList.add("hidden")
})
