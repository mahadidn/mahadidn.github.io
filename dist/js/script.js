// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a'); // Ambil semua link di dalam navMenu
const toTop = document.querySelector('#to-top');
const formButton = document.querySelector('#button-form');

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Maaf untuk sekarang tidak bisa mengirim pesan');
});

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