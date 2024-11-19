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

anonCheckbox.addEventListener('change', (e) => {

    if(e.target.checked){
        nameInput.closest('.w-full').style.display = 'none';
        emailInput.closest('.w-full').style.display = 'none';
        nameLabel.closest('.w-full').style.display = 'none';
        emailLabel.closest('.w-full').style.display = 'none';

        nameInput.value = '';
        emailInput.value = '';
    }else {
        nameInput.closest('.w-full').style.display = 'block';
        emailInput.closest('.w-full').style.display = 'block';
        nameLabel.closest('.w-full').style.display = 'block';
        emailLabel.closest('.w-full').style.display = 'block';
    }

});

formButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const form = e.target.closest('form');
    const originalButtonText = formButton.textContent;

    const data = {
        email: form.elements['email'].value,
        fullname: form.elements['name'].value,
        message: form.elements['message'].value,

    };
    if(data.message == ""){
        alert("Pesan tidak boleh kosong");
        return;
    }
    if(data.fullname == ""){
        data.fullname = "anonym";
    }
    if(data.email == ""){
        data.email = "anonym@gmail";
    }

    try {

        formButton.disabled = true;
        formButton.textContent = "Loading...";

        const result = await fetch('https://mdnstore.vercel.app/api/send/data', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

    
        if(result.ok){
            form.reset();
            alert('pesan berhasil dikirim');
        }else {
            form.reset();
            const errorsDetail = result.text();
            console.error("server error: ", errorsDetail);
            alert('Pesan gagal dikirim');
        }

    }catch(error){
        alert("gagal menghubungi server");
    }finally {
        formButton.disabled = false;
        formButton.textContent = originalButtonText;
    }
    

});