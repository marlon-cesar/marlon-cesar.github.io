window.addEventListener('DOMContentLoaded', event => {

    setAge();
    setExperience();

    animatedNumberInterval('certification-count', 3, 200);

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    document.getElementById('current-year').innerHTML = new Date().getFullYear();

    AOS.init({
        duration: 1000,
        once: true
    });

    initSidebarMenu();
})


function setAge() {
    const now = Date.now();
    const birthday = new Date('1998-03-02')

    const ageDiff = now - birthday;
    const ageDate = new Date(ageDiff);

    const age = ageDate.getFullYear() - 1970;

    animatedNumberInterval('age', age, 50);
}

function setExperience() {
    const now = Date.now();
    const startOfExperience = new Date('2019-05-02')

    const yearDiff = now - startOfExperience;
    const yearDate = new Date(yearDiff);

    const year = yearDate.getFullYear() - 1970;

    animatedNumberInterval('years-of-experience', year);
}

function initSidebarMenu() {
    const openBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('sidebarOverlay');

    openBtn.addEventListener('click', () => {
        sidebar.classList.add('show');
        overlay.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    });
}


function animatedNumberInterval(elementId, target, time = 100) {
    let number = 0
    var interval = setInterval(function () {
        document.getElementById(elementId).innerHTML = number;
        if (number >= target) clearInterval(interval);
        number++;
    }, time);
}