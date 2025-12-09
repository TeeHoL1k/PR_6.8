const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);

const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

function changeLight() {
   if (trafficLightEl1.style.background === 'green') {
        trafficLightEl1.style.background = 'black';
        trafficLightEl2.style.background = 'yellow';
        trafficLightEl3.style.background = 'black';
   }
   else if (trafficLightEl2.style.background === 'yellow') {
        trafficLightEl1.style.background = 'black';
        trafficLightEl2.style.background = 'black';
        trafficLightEl3.style.background = 'red';
   }
   else if (trafficLightEl3.style.background === 'red') {
        trafficLightEl1.style.background = 'green';
        trafficLightEl2.style.background = 'black';
        trafficLightEl3.style.background = 'black';
   }
   else {
        trafficLightEl1.style.background = 'green';
        trafficLightEl2.style.background = 'black';
        trafficLightEl3.style.background = 'black';
   }
}

trafficLightEl1.addEventListener('click', changeLight);
trafficLightEl2.addEventListener('click', changeLight);
trafficLightEl3.addEventListener('click', changeLight);
