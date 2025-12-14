// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById('nav-menu'),
//       navToggle = document.getElementById('nav-toggle'),
//       navClose = document.getElementById('nav-close')

// /* Menu show */
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /* Menu hidden */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }


// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () =>{
//     const navMenu = document.getElementById('nav-menu')
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== RESUME BUTTONS ===============*/

const navLinks = document.querySelectorAll('header nav a');
const resumeBtns = document.querySelectorAll('.resume-btn');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    // Toggle nav visibility for mobile
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }

    // Toggle icon from bars <-> xmark
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

const activePage = () => {
    const header = document.querySelector('header')
    const barsBox = document.querySelector('.bars-box');

    
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });
    
};
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }

        if (nav.style.display === 'block') {
            nav.style.display = 'none';
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        }
    });
});


logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

         setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
})


resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        // Remove active class from all buttons
        resumeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Remove active class from all details
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

/*=============== PORTFOLIO CAROUSEL ===============*/
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const slides = document.querySelectorAll('.portfolio-carousel .img-slide img');

let index = 0;
const totalSlides = slides.length;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    // Move the slide
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
};

// Right arrow click
arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = totalSlides - 1; // Stop at last slide
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

// Left arrow click
arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0; // Stop at first slide
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});
