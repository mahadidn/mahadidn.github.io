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

        const result = await fetch('https://mahadidn.vercel.app/api/send/data', {
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


// pagination blog
// Simulated blog data
    const blogPosts = [
        { title: "Distributed System", slug: "distributed-system", image: "dist/img/blog/sister.png", description: "How to build a distributed system and ensure accurate and real-time database across multiple servers." },
        { title: "OAuth2 Laravel", slug: "oauth2-laravel", image: "dist/img/blog/Laravel.png", description: "What is OAuth2, and how is it implemented in Laravel 11 using Laravel Passport?" },
        { title: "Linear Regression", slug: "linear-regression", image: "dist/img/blog/ml.png", description: "Implementation of Simple Linear Regression to Predict Drug Sales at Pharmacies." },
        { title: "Support Vector Machine", slug: "support-vector-machine", image: "dist/img/blog/svm.png", description: "Implementation of Support Vector Regression for forecasting." },
    ];

    const postsPerPage = 3;
    let currentPage = 1;

    // Function to render posts
    function renderPosts(page) {
        const start = (page - 1) * postsPerPage;
        const end = start + postsPerPage;
        const postsToDisplay = blogPosts.slice(start, end);

        const blogContainer = document.getElementById("blog-posts");
        blogContainer.innerHTML = postsToDisplay
            .map(
                (post) => `
            <div class="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-700">
                    <img src="${post.image}" alt="${post.title}" class="p-3 w-full rounded-lg">
                    <div class="py-8 px-6">
                        <h3>
                            <a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate dark:text-white">${post.title}</a>
                        </h3>
                        <p class="font-medium text-base text-secondary mb-6">${post.description}</p>
                        <a href="/blog/index.html?title=${post.slug}" class="font-medium text-sm text-white bg-primary py-3 px-6 rounded-full hover:opacity-80">Read More</a>
                    </div>
                </div>
            </div>
        `
            )
            .join("");
    }

    // Function to render pagination
    function renderPagination() {
        const totalPages = Math.ceil(blogPosts.length / postsPerPage);
        const paginationContainer = document.getElementById("pagination").querySelector("ul");
        paginationContainer.innerHTML = "";

        // Previous button
        paginationContainer.innerHTML += `
            <li>
                <a href="#blog" onclick="changePage(${currentPage - 1})" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </a>
            </li>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.innerHTML += `
                <li>
                    <a href="#blog" onclick="changePage(${i})" class="flex items-center justify-center px-4 h-10 leading-tight ${
                        i === currentPage
                            ? "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }">${i}</a>
                </li>
            `;
        }

        // Next button
        paginationContainer.innerHTML += `
            <li>
                <a href="#blog" onclick="changePage(${currentPage + 1})" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
            </li>
        `;
    }

    // Function to change page
    function changePage(page) {
        const totalPages = Math.ceil(blogPosts.length / postsPerPage);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        renderPosts(currentPage);
        renderPagination();
    }

    // Initial render
    renderPosts(currentPage);
    renderPagination();