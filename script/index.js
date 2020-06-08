'use strict';

const imagesElements = document.querySelectorAll('img');

const options = {
    root: null,
    threshold: 0.1,
};

const observer = new IntersectionObserver(handleImg, options);

imagesElements.forEach( img => {
   observer.observe(img);
});

function handleImg( myImages, observer ){
    myImages.forEach( myImg => {

       if( myImg.intersectionRatio > 0) {
           console.log( myImg.intersectionRatio );
           loadImage( myImg.target );
           observer.unobserve( myImg.target );
       }
    });
}

function loadImage( image ) {
    image.src = image.getAttribute('data');
}