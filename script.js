const navLinks = document.querySelectorAll('.top-header ul li a');
const sections = document.querySelectorAll('section[id]');


const navHeight = 160; 

function changeActiveLink() {
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - navHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', changeActiveLink);
window.addEventListener('load', changeActiveLink);