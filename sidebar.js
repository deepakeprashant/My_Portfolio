const logo = document.querySelector('.logo');
const sidebarMenu = document.querySelector('.sidebarMenu');
const closeSidebar = document.querySelector('.close');

logo.addEventListener('click', e => {
    sidebarMenu.classList.remove('display-none');
    logo.classList.add('display-none');
});

closeSidebar.addEventListener('click', () => {
    logo.classList.remove('display-none');
    sidebarMenu.classList.add('display-none');
});

