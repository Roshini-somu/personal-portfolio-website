// Add fade-in animation to sections on load
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
});

// Smooth scroll to sections
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Highlight the active navigation link
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Highlight active section and navigation link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// FAQ Toggle Functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // The <p> tag with the answer
        answer.classList.toggle('show'); // Toggle visibility of the answer
        
        // Optionally, close other open answers
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.nextElementSibling.classList.remove('show');
            }
        });
    });
});
