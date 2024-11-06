const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentIndex = 1; // Démarre à 1 pour tenir compte du clone
let itemWidth = items[0].getBoundingClientRect().width; // Largeur d'un élément

// Clone du premier et du dernier élément
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

// Ajout des clones au DOM
track.appendChild(firstClone);
track.insertBefore(lastClone, items[0]);

// Mise à jour de l'offset initial
track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

// Fonction de mise à jour du carrousel
const updateCarousel = (animate = true) => {
    track.style.transition = animate ? 'transform 0.5s ease' : 'none'; // Animation activée ou non
    const offset = -currentIndex * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
}

// Événements pour les boutons
nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
    // Réinitialisation après animation si on atteint le clone
    if (currentIndex === items.length + 1) {
        setTimeout(() => {
            currentIndex = 1;
            updateCarousel(false);
        }, 500); // Durée de la transition
    }
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
    // Réinitialisation après animation si on atteint le clone
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = items.length;
            updateCarousel(false);
        }, 500); // Durée de la transition
    }
});

// Redimensionnement dynamique pour conserver le carrousel adaptatif
window.addEventListener('resize', () => {
    itemWidth = items[0].getBoundingClientRect().width;
    updateCarousel(false); // Pas d'animation pendant la mise à jour de la taille
});
