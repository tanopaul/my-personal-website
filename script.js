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
const guamPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/guam.png';
const thailandPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/elephant2.png';
const peruPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/peru2.png';
const romaniaPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/romania.png';


const travelArray = [guamPhoto, thailandPhoto, peruPhoto, romaniaPhoto];


guamButton.addEventListener('click', function() {
    travelImage.src = travelArray[0];
});

thailandButton.addEventListener('click', function() {
    travelImage.src = travelArray[1];
});

peruButton.addEventListener('click', function() {
    travelImage.src = travelArray[2];
});

romaniaButton.addEventListener('click', function() {
    travelImage.src = travelArray[3];
});

rightArrow.addEventListener('click', function() {
    alert('clicked!')
});

leftArrow.addEventListener('click', function() {
    alert('clicked!')
});