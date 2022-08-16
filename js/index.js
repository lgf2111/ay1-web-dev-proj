let planets = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
let planetList = document.querySelector('.planet')
let showPlanets = false
function togglePlanets() {
    if (!showPlanets) {
        for (var i = 0; i < planets.length; i++) {
            if (planets[i] == 'sun') {
                planet = planets[i];
                planetList.innerHTML += `<li id=${planet}>${planet.charAt(0).toUpperCase() + planet.slice(1)} (Star)</li>`;
            } else if (planets[i] != 'sun') {
                planet = planets[i];
                planetList.innerHTML += `<li id=${planet}>${planet.charAt(0).toUpperCase() + planet.slice(1)}</li>`;
            }
        }     
        showPlanets = true;
    } else {
        planetList.innerHTML = '';
        showPlanets = false;
    }
}
function liBtn() {
document.querySelector(".planets").addEventListener("click", function (event) {
    if (event.target && event.target.matches('.planets')) {
        togglePlanets()
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#sun')) {
        window.open('planet.html?=sun', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#mercury')) {
        window.open('planet.html?=mercury', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#venus')) {
        window.open('planet.html?=venus', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#earth')) {
        window.open('planet.html?=earth', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#mars')) {
        window.open('planet.html?=mars', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#jupiter')) {
        window.open('planet.html?=jupiter', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#saturn')) {
        window.open('planet.html?=saturn', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#uranus')) {
        window.open('planet.html?=uranus', '_self');
    }
});
document.querySelector(".planet").addEventListener("click", function (event) {
    if (event.target && event.target.matches('li#neptune')) {
        window.open('planet.html?=neptune', '_self');
    }
});
};
liBtn();