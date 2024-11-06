const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 0; // Index actuel

const updateCarousel = () => {
    const itemWidth = items[0].getBoundingClientRect().width; // Largeur d'un élément
    const offset = -currentIndex * itemWidth; // Calcul de l'offset
    track.style.transform = `translateX(${offset}px)`; // Appliquer l'offset
}

// Événements pour les boutons
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Incrémente l'index, retourne à 0 après le dernier
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Décrémente l'index, retourne au dernier si négatif
    updateCarousel();
});
