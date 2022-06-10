function changeMode() {
    changeClasses();
    changeText ();
};

const body = document.getElementsByTagName('body')[0];
const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const lightModeClass = 'light-mode';



function changeClasses() {
    body.classList.toggle(lightModeClass);
};

function changeText() {
    const darkMode = 'Dark Mode';
    const lightMode = 'Light Mode';

    if(body.classList.contains(lightModeClass)) {
        btn.innerHTML = darkMode;
        h1.innerHTML = lightMode + ' ON';
        return;
    }

    btn.innerHTML = lightMode;
    h1.innerHTML = darkMode + ' ON'
}

btn.addEventListener('click', changeMode);