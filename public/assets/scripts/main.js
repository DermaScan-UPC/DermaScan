const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section[id]');
const navHeight = 100;

function changeActiveLink() {
    let currentSectionId = '';
    
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        
        if (window.scrollY + navHeight >= sectionTop) {
            currentSectionId = section.getAttribute('id');
            break;
        }
    }
    
    if (!currentSectionId && sections.length > 0) {
        currentSectionId = sections[0].getAttribute('id');
    }
    
    // Actualiza los enlaces activos
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', changeActiveLink);
window.addEventListener('load', changeActiveLink);

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(changeActiveLink, 100);
        }
    });
});
