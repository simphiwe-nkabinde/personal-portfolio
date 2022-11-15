//SCROLL CHANGE on header

const header = document.getElementById('secondary-header')

// SLIDE ANIMATIONS ONSCROLL
slideAnimation('left');
slideAnimation('right');
slideAnimation('top');
slideAnimation('bottom');

function slideAnimation(fromDirection) {
    fromDirection = capitalizeFirstLetter(fromDirection);
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add(`slideFrom${fromDirection}`);
            }
        });
    }, {threshold: 0.5})
    document.querySelectorAll(`.onscroll-from${fromDirection}`).forEach(element => {
        observer.observe(element);    
    });    
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// window.onscroll = ()=> {changeHeaderStyle()}

function changeHeaderStyle() {
    if (document.documentElement.scrollTop > 1) {
        header.style.background = "#b5b7c1";
        header.style.boxShadow = "0 0 200px white inset";
    } else {
        header.style.backgroundColor = "";
        header.style.boxShadow = "none";
    }
}

// DARK/LIGHT THEME TOGGLE
var darkIcon = document.getElementById('dark-theme-icon');
var lightIcon = document.getElementById('light-theme-icon');

if (JSON.parse(sessionStorage.theme_light) == true) {
    document.querySelector('body').className = 'theme-light'
    darkIcon.style.display = 'inline';
    lightIcon.style.display = 'none';
}
else {
    sessionStorage.theme_light = 'false';
    document.querySelector('body').className = 'theme-dark'
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
}

function themeToggle() {
    let theme = document.querySelector('body').className;
    if (theme == 'theme-light') {
        document.querySelector('body').className = 'theme-dark';
        sessionStorage.theme_light = 'false';
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
    } else {
        document.querySelector('body').className = 'theme-light'
        sessionStorage.theme_light = 'true';
        darkIcon.style.display = 'inline';
        lightIcon.style.display = 'none';
    }
}

function openNav() {
    document.getElementById("sideNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0%";
}

function showHeaderBg() {
    const header = document.querySelector('#topNav');
    header.classList.add('headerBg');
}
function hideHeaderBg() {
    const header = document.querySelector('#topNav');
    header.classList.remove('headerBg')
}