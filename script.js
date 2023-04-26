// const h2 = document.createElement('h2');
// h2.textContent = 'This content added by Javascript';

// document.querySelector('body').appendChild(h2);

const carousel = document.getElementById('carousel-image');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const guamButton = document.getElementById('guam');
const thailandButton = document.getElementById('thailand');
const peruButton = document.getElementById('peru');
const romaniaButton = document.getElementById('romania');
const travelImage = document.getElementById('travel-image');


guamButton.addEventListener('click', function() {
    alert('guam!')
});

thailandButton.addEventListener('click', function() {
    alert('thailand!')
});

peruButton.addEventListener('click', function() {
    alert('peru!')
});

romaniaButton.addEventListener('click', function() {
    alert('romania!')
});

rightArrow.addEventListener('click', function() {
    alert('clicked!')
});

leftArrow.addEventListener('click', function() {
    alert('clicked!')
});