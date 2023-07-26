const closeBtn = document.querySelector('.create-x');
const hamburgerIcon = document.querySelector('.hamb-icon');
const mobileMenuBlue = document.querySelector('.mobile-menu-blue');
const portfolioLink = document.getElementById('portfolio-section');
const aboutLink = document.getElementById('about-section');
const contactLink = document.getElementById('contact-section');

const portfolioSection = document.getElementById('portfolio-part');

function appear(){
    mobileMenuBlue.style.display = 'block';
    // document.body.style.overflow = 'hidden';
}

function disappear(){
    mobileMenuBlue.style.display = 'none';
    document.body.style.overflow = 'auto';
}


closeBtn.addEventListener('click', disappear);
hamburgerIcon.addEventListener('click', appear);
portfolioLink.addEventListener('click', disappear);
aboutLink.addEventListener('click',disappear);
contactLink.addEventListener('click', disappear);

