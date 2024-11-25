// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a'); // Ambil semua link di dalam navMenu
const toTop = document.querySelector('#to-top');
const formButton = document.querySelector('#button-form');
const anonCheckbox = document.querySelector('#anon');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const nameLabel = document.querySelector('#name-w');
const emailLabel = document.querySelector('#email-w');



// navbar fixed
window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Tambahkan event listener untuk setiap link di dalam navMenu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-active'); // Nonaktifkan hamburger
        navMenu.classList.add('hidden'); // Sembunyikan navMenu
    });
});

// Tutup navMenu ketika klik di luar area navMenu atau hamburger
document.addEventListener('click', function (event) {
    const isClickInsideNavMenu = navMenu.contains(event.target);
    const isClickInsideHamburger = hamburger.contains(event.target);

    // Jika klik terjadi di luar navMenu dan hamburger, sembunyikan navMenu dan nonaktifkan hamburger
    if (!isClickInsideNavMenu && !isClickInsideHamburger) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}



// Ambil URL saat ini
const urlParams = new URLSearchParams(window.location.search);

// Ambil nilai parameter `title`
const title = urlParams.get('title');

const blogPosts = [
        { title: "Distributed System", slug: "distributed-system", image: "../dist/img/blog/sister.png", description: "How to build a distributed system and ensure accurate and real-time database across multiple servers." },
        { title: "OAuth2 Laravel", slug: "oauth2-laravel", image: "../dist/img/blog/Laravel.png", description: "What is OAuth2, and how is it implemented in Laravel 11 using Laravel Passport?" },
        { title: "Linear Regression", slug: "linear-regression", image: "../dist/img/blog/ml.png", description: "Implementation of Simple Linear Regression to Predict Drug Sales at Pharmacies." },
        { title: "Support Vector Machine", slug: "support-vector-machine", image: "../dist/img/blog/svm.png", description: "Implementation of Support Vector Regression for forecasting." },
    ];

// Jika parameter `title` ada, ubah teks h1

blogPosts.forEach(post => {
    if(post.slug === title){
        
        const h1Element = document.querySelector('h1.text-4xl');
        h1Element.textContent = post.title;

        const imageElement = document.getElementById('img-element');
        imageElement.src = post.image;

    }
});


