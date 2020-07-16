const switchBtn = document.querySelector('.switch');
const fileCSS = document.querySelector('link[href="css/style1.css"]');
const switchCircle = document.querySelector('.switch_circle');
let i = 1;

switchBtn.addEventListener('click', switchBg);

function switchBg() {
    const currentFile = i % 2 ? 'css/style2.css': 'css/style1.css';
    const distance = i % 2 ? '27px' : 0;
    switchCircle.style.cssText = `transform: translateX(${distance});`;
    fileCSS.setAttribute('href', currentFile);
    i++;
}