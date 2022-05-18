//SCROLL CHANGE on header

const header = document.getElementById('secondary-header')

window.onscroll = ()=> {changeHeaderStyle()}

function changeHeaderStyle() {
    if (document.documentElement.scrollTop > 1) {
        header.style.background = "#b5b7c1";
        header.style.boxShadow = "0 0 200px white inset";
    } else {
        header.style.backgroundColor = "";
        header.style.boxShadow = "none";
    }
}

// DArk/light Theme toggle

function themeToggle() {
    // document.querySelector('body').classList.toggle('theme-dark');
    document.querySelector('body').classList.toggle('theme-light');
}




//------------------------------------------------------------
/*
const pixelLIst = ['.', '--', '<', '\\', '|', '>', '/',]
var pixelCharIndex = 0
function incrementPixelCharCount() {
    if(pixelCharIndex < (pixelLIst.length - 1)) {
        pixelCharIndex++
    } else {pixelCharIndex = 0}
    return pixelCharIndex
}

function mouseTrail(event) {
    const position = getMousePosition(event)
    const pixel = createTrailPixel(position.x, position.y)
    event.target.append(pixel)
}

function randomAnimation(element) {
    const pos = randomPosition()
    const pixel = createTrailPixel(pos.x, pos.y)
    element.append(pixel)
}

function randomPosition() {
    let xMax = window.screen.width;
    let yMax = window.screen.height;
    let min = 0;
    const pos = {
        x: Math.floor(Math.random() * (xMax - min + 1) + min),
        y: Math.floor(Math.random() * (yMax - min + 1) + min)
    }
    return pos;
}

function getMousePosition(event) {
    let pos = {
        x: event.clientX,
        y: event.clientY
    }
    return pos;
}
function destroyPixel(pixel) {
    setTimeout(() => {
        pixel.style.transform = 'rotate(100deg)'// scale(0.1,0.1) translate(-10px, 10px);';
        // pixel.style.transform = '';
        pixel.style.textShadow = 'none'
        // pixel.style.display = 'none';
        
        setTimeout(() => {
            
            pixel.remove()
        }, 5000); 
    }, 500);
    
}
function createTrailPixel(x, y) {
    let pixel = document.createElement('span')
    pixel.className = 'pixel';
    pixel.innerText = pixelLIst[incrementPixelCharCount()]
    // pixel.innerText = '/';
    //set position
    pixel.style.left = `${x}px`;
    pixel.style.top = `${y}px`;

    pixel.onload = destroyPixel(pixel)

    return pixel
}

setInterval(() => {
    randomAnimation(document.getElementById('landing-sect'))
}, 1000);
*/