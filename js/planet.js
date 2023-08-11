import planetData from './planetData.json';

// Extract data from planetData
const planetDict = planetData.planetDict;
const funFact = planetData.funFact;

// Get planet name from URL
let planet = window.location.toString();
planet = planet.slice(planet.search("planet.html") + 13);

// Update header and title
const header = document.querySelector('#name');
const title = document.querySelector('#title');
const planetNameCapitalized = planet.charAt(0).toUpperCase() + planet.slice(1);
header.innerText += ` ${planetNameCapitalized}`;
title.innerText += ` ${planetNameCapitalized}`;

// Update planet image
const img = document.querySelector('.img');
const imgUrl = new URL(`/images/planets/${planet}.png`, import.meta.url)
img.innerHTML = `<img src="${imgUrl}" width="180">`;

// Update planet specifications
const spec = document.querySelector('.spec');
spec.innerHTML += `Planet Name: ${planetNameCapitalized}`;
spec.innerHTML += `<br>Size: ${planetDict[planet]['size']}kg`;
spec.innerHTML += `<br>Diameter: ${planetDict[planet]['diameter']}km`;
spec.innerHTML += `<br>Rotation Speed: ${planetDict[planet]['rotation']}km/h`;
if (planet !== 'sun') {
    spec.innerHTML += `<br>Distance to the Sun: ${planetDict[planet]['perihelion'] / 1000000}mil km`;
}

// Update fun fact
const fact = document.querySelector('#fact');
fact.innerHTML += `<h3>Fun Fact</h3><hr><p>${funFact[planet][Math.floor(Math.random() * 10)]}</p>`;

// Change fun fact
function changeFact() {
    fact.innerHTML = `<h3>Fun Fact</h3><hr><p>${funFact[planet][Math.floor(Math.random() * 10)]}</p>`;
}
