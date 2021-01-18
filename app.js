const text = 'Hi, I am Justin I am a developer';
let i = 0;
let letter = '';
let speed = 150;

const type = () => {
    letter = text.slice(0, ++i);
    document.querySelector('.typing').textContent = letter;

    if (letter.length === text.length.length) {
        return;
    }
    setTimeout(type, speed);
}

const blocks = () => {
    document.querySelector('.black-block').style.transform = 'translateX(0)';
    document.querySelector('.blue-block').style.transform = 'translateX(0)';
    document.querySelector('.pink-block').style.transform = 'translateX(0)';
}

window.addEventListener('load', () => {
    type();
    blocks();
});


const work = document.querySelector('.work-link');
const about = document.querySelector('.about-link');
const underline = document.querySelector('.underline');
const workContainer = document.querySelector('.work-container');
const aboutContainer = document.querySelector('.about-container');
const ul = document.querySelector('ul');
let right = (ul.offsetWidth - about.offsetWidth) + 'px'; 
let aboutWidth = about.offsetWidth + 'px';

window.addEventListener('resize', () => {
    right = (ul.offsetWidth - about.offsetWidth) + 'px'; 
    aboutWidth = about.offsetWidth + 'px';
    underline.style.transition = 'none';

    if (underline.style.width === '78px') {
        underline.style.width = '78px';
        underline.style.left = '0';
    }
    else {
        underline.style.width = `${aboutWidth}`;
        underline.style.left = `${right}`;
    }
});

about.addEventListener('click', () => {
    underline.style.transition = 'all 1s ease';
    underline.style.width = `${aboutWidth}`;
    underline.style.left = `${right}`;
    underline.style.background = '#ff77aa';

    aboutContainer.style.left = '0';
    workContainer.style.left = '-200vw';
});

work.addEventListener('click', () => {
    underline.style.transition = 'all 1s ease';
    underline.style.width = '78px';
    underline.style.left = '0';
    underline.style.background = '#77aaff';

    aboutContainer.style.left = '200vw';
    workContainer.style.left = '0';
});
