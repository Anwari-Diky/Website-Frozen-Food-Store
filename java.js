document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function (event) {
        const productName = this.parentElement.querySelector('h3').innerText;
        alert(`Anda telah memilih produk: ${productName}\nSilakan lanjutkan ke WhatsApp untuk pembelian.`);
    });
});

// Highlighting the active navigation link during scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});


const promoSection = document.getElementById('promo');
let promoShown = false;

window.addEventListener('scroll', () => {
    const promoTop = promoSection.offsetTop;
    const windowBottom = window.scrollY + window.innerHeight;

    if (!promoShown && windowBottom >= promoTop) {
        alert('Jangan lewatkan PROMO SPESIAL BULAN INI! Diskon hingga 20% dan Gratis Ongkir!');
        promoShown = true;
    }
});
