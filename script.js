const carousel = document.getElementById('carousel-image');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const guamButton = document.getElementById('guam');
const thailandButton = document.getElementById('thailand');
const peruButton = document.getElementById('peru');
const romaniaButton = document.getElementById('romania');
const travelImage = document.getElementById('travel-image');
const googleMap = document.getElementById('google-map');
let timesClicked = 0;

// TRAVEL PHOTOS
const guamPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/guam.png';
const thailandPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/elephant2.png';
const peruPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/peru2.png';
const romaniaPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/romania.png';
//TRAVEL MAPS
const thailandMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7962199.098030164!2d96.18420382936631!3d12.985117741387434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sus!4v1682535815822!5m2!1sen!2sus";
const guamMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220805.2255998216!2d144.65074972425492!3d13.450756284231518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x671f76ff930f24ef%3A0x5571ae91c5b3e5a6!2sGuam!5e0!3m2!1sen!2sus!4v1682444164810!5m2!1sen!2sus";
const peruMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8065931.536291653!2d-80.3261764392826!3d-9.204599620291138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2sPeru!5e0!3m2!1sen!2sus!4v1682536324961!5m2!1sen!2sus";
const romaniaMaps = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842619.7164519164!2d22.375712121387586!3d45.91139346064193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff26958976c3%3A0x84ef4f92a804b194!2sRomania!5e0!3m2!1sen!2sus!4v1682536404868!5m2!1sen!2sus";

//WORK PHOTOS
const amberOxPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/amber-ox.png';
const americanDreamerPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/american-dreamer.png';
const betterPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/betterlogo.png';
const swaggerPhoto = 'file:///Users/tanopaul/Development/code/my-personal-website/images/swagger.png';





// -------TRAVEL-----
const placesObj = {
    photos: [guamPhoto, thailandPhoto, peruPhoto, romaniaPhoto],
    maps: [guamMaps, thailandMaps, peruMaps, romaniaMaps]
};


guamButton.addEventListener('click', function() {
    travelImage.src = placesObj.photos[0];
    googleMap.src = placesObj.maps[0];
});

thailandButton.addEventListener('click', function() {
    travelImage.src = placesObj.photos[1];
    googleMap.src = placesObj.maps[1];
});

peruButton.addEventListener('click', function() {
    travelImage.src = placesObj.photos[2];
    googleMap.src = placesObj.maps[2];
});

romaniaButton.addEventListener('click', function() {
    travelImage.src = placesObj.photos[3];
    googleMap.src = placesObj.maps[3];
});

// rightArrow.addEventListener('click', function() {
//     alert('clicked!')
// });

// leftArrow.addEventListener('click', function() {
//     alert('clicked!')
// });



// ---------WORK----------

const workArr = [amberOxPhoto, americanDreamerPhoto, swaggerPhoto, betterPhoto];

if (timesClicked === 0) {
    leftArrow.style.display = 'none';
};

leftArrow.addEventListener('click', function() {
    timesClicked -= 1;
    carousel.src = workArr[timesClicked];
    rightArrow.style.display = 'block';

    if (timesClicked === 0) {
        leftArrow.style.display = 'none';
    };
})

rightArrow.addEventListener('click', function() {

    timesClicked += 1;
    carousel.src = workArr[timesClicked];
    leftArrow.style.display = 'block';

    if (timesClicked === workArr.length - 1) {
        rightArrow.style.display = 'none'
    }
})
