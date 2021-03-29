const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
const li_home = document.querySelector('#li_home');
const a_home = li_home.getElementsByTagName('a')[0];
const li_about = document.querySelector('#li_about');
const a_about = li_about.getElementsByTagName('a')[0];
const li_contact = document.querySelector('#li_contact');
const a_contact = li_contact.getElementsByTagName('a')[0];

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden');
    }
});

a_home.addEventListener('click', () => {
    a_home.classList.add('border-primary');
    a_about.classList.remove('border-primary');
    a_contact.classList.remove('border-primary');
    li_home.classList.add('text-gray-700', 'font-bold');
    li_about.classList.remove('text-gray-700', 'font-bold');
    li_contact.classList.remove('text-gray-700', 'font-bold');
    
});

a_about.addEventListener('click', () => {
    a_about.classList.add('border-primary');
    a_contact.classList.remove('border-primary');
    a_home.classList.remove('border-primary');
    li_about.classList.add('text-gray-700', 'font-bold');
    li_home.classList.remove('text-gray-700', 'font-bold');
    li_contact.classList.remove('text-gray-700', 'font-bold');
});

a_contact.addEventListener('click', () => {
    a_contact.classList.add('border-primary');
    a_home.classList.remove('border-primary');
    a_about.classList.remove('border-primary');
    li_contact.classList.add('text-gray-700', 'font-bold');
    li_home.classList.remove('text-gray-700', 'font-bold');
    li_about.classList.remove('text-gray-700', 'font-bold');
});