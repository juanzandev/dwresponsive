// JavaScript Document
const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
];
let currentIndex = 0;
let currentImgElement = null;


function changeImage(step) {
    
    const slideshow = document.getElementById('slideshow');
    if (!slideshow) {
        return;
    }
    currentIndex = (currentIndex + step + images.length) % images.length;
    if (currentImgElement) {
        currentImgElement.classList.remove('active');
    }
    setTimeout(() => {
        
        if (currentImgElement) {
            slideshow.removeChild(currentImgElement);
        }

        
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        
        slideshow.appendChild(imgElement);

        setTimeout(() => {
            imgElement.classList.add('active');
        }, 100);

       
        currentImgElement = imgElement;
    }, 300); 
}

const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => changeImage(1));
    prevButton.addEventListener('click', () => changeImage(-1));
    changeImage(0); 
}

changeImage(0); 

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        this.classList.add('clicked');

        setTimeout(() => {
            this.classList.remove('clicked');
            
            window.location.href = this.getAttribute('href');
        }, 400);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
			console.log('Menu icon clicked');
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
	const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => changeImage(1));
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => changeImage(-1));
    }
});
