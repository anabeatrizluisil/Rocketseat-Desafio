const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) { // when you click a card, modal opens

    card.addEventListener("click", function () {
        modalOverlay.classList.add('active');

        const siteId = card.getAttribute('id');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${siteId}`;

    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active');
})

const modal = document.querySelector('.modal');

document.querySelector('.max-modal').addEventListener("click", function () {
    modal.classList.toggle('maximize');

})

