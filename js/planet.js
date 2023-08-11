let planetDict = {
    'sun': {
        'size': 696340,
        'diameter': 1392700,
        'rotation': 7.19
    },
    'mercury': {
        'size': 2440,
        'diameter': 4879,
        'rotation': 10.9,
        'perihelion': 46000000
    },
    'venus': {
        'size': 6052,
        'diameter': 12104,
        'rotation': 6.52,
        'perihelion': 107000000
    },
    'earth': {
        'size': 6371,
        'diameter': 12742,
        'rotation': 1656,
        'perihelion': 147000000
    },
    'mars': {
        'size': 3389,
        'diameter': 6779,
        'rotation': 868,
        'perihelion': 147000000
    },
    'jupiter': {
        'size': 69911,
        'diameter': 139820,
        'rotation': 43000,
        'perihelion': 741000000
    },
    'saturn': {
        'size': 58232,
        'diameter': 116460,
        'rotation': 35.5,
        'perihelion': 1353000000
    },
    'uranus': {
        'size': 25362,
        'diameter': 50740,
        'rotation': 24607,
        'perihelion': 2741000000
    },
    'neptune': {
        'size': 24622,
        'diameter': 49244,
        'rotation': 6.95,
        'perihelion': 4444000000
    }
}
let funFact = {
    'sun': ['The sun is the closest star to our planet, which is why we see the sun so big and bright.',
        'The Earth orbits around the sun.',
        'The sun is way bigger than the Earth. The sun\'s radius is more than 432,000 miles and the Earth\'s radius is just under 4,000 miles.',
        'The sun\'s average surface temperature is more than 10,000 degrees Fahrenheit! Compare that to the Earth\'s average temperature, which is 68 degrees.',
        'Like the Earth, the sun has layers. But unlike the Earth, the sun is entirely gaseous; there is no solid surface.',
        'The sun rotates on its axis about once every 26 days.',
        'No matter when or where we look at the sun, we will always see something interesting. Scientists observe these changes by watching the sunspots, which increase and decrease about every 10 years.',
        'The Sun accounts for 99.86% of the mass in the solar system. It has a mass of around 330,000 times that of Earth. It is three quarters hydrogen and most of its remaining mass is helium.',
        'The Sun will eventually be about the size of Earth. Once the Sun has completed its red giant phase, it will collapse. It\'s huge mass will be retained, but it will have a volume similar to that of Earth. When that happens, it will be known as a white dwarf.',
        'The Sun is halfway through its life. At 4.5 billion years old, the Sun has burned off around half of its hydrogen stores and has enough left to continue burning hydrogen for another 5 billion years. Currently the Sun is a yellow dwarf star.'],
    'mercury': ['Mercury is the closest planet to the Sun. At a distance of only about 1/3 of Earth\'s distance to Sun, Mercury is the first planet in our Solar System.',
        'In a very, very slow process, Mercury is getting smaller every day. It is estimated that the planet is about 9 miles smaller than it was four billion years ago (we told you it was a slow process).',
        'With a diameter of only 4880 kilometers (3032 miles) Mercury is the smallest planet in the Solar System. It is barely bigger than our Moon.',
        'Because Mercury\'s atmosphere is so weak, the planet has nothing to protect it against meteor impacts. This has filled its surface of crater impacts and has given Mercury a very similar look to our Moon.',
        'The planet\'s closeness to the Sun makes Mercury\'s orbit shorter than those of any other planet in the Solar System. One year in Mercury is only about 88 Earth days. That is less than three months.',
        'Because Mercury\'s orbit is so small, it seems like it\'s moving faster in the sky than other planets. This is why the Romans named it after their fasted god, Mercury.',
        'Because of its weak atmosphere, Mercury can\'t contain any of the heat coming from the Sun, so it goes through some wild temperature changes. By day the surface temperature can reach 800 °F (427 °C) but at night it can drop down to -269 °F (−173 °C).',
        'Mercury rotates very slowly around its axis. One Mercurial day takes almost 59 Earth days.',
        'Due to its small size, low gravity and closeness to the Sun, Mercury isn\'t able to keep a Moon in place.',
        'Because of its position inside our own orbit, Mercury also goes through phases where only a part of it reflects the Sun\'s light.'],
    'venus': ['It takes Venus longer to rotate once on its axis than to complete one orbit of the Sun. That\'s 243 Earth days to rotate once - the longest rotation of any planet in the Solar System - and only 224.7 Earth days to complete one orbit of the Sun.',
        'Its mean temperature is 462°C. This is because of the high concentration of carbon dioxide in Venus\' atmosphere which works to produce an intense greenhouse effect, trapping heat in the atmosphere like a blanket and causing the temperature of the planet to be much higher than its proximity to the Sun would suggest.',
        'All other planets spin anti-clockwise on their axis and orbit the Sun in an anti-clockwise direction. Venus also orbits the Sun anti-clockwise, but its unusual axis rotation is due to being upside down - it was knocked off its upright position earlier in its history!',
        "The clouds of sulfuric acid in Venus\' atmosphere make it reflective and shiny and obscure our view of its surface. It's brightness makes it visible during the day if it\'s clear and you know where to look",
        "Venus has 90 times the atmospheric pressure of Earth. That\'s about the same as the pressure at a depth of 1 km in Earth's oceans.",
        'It is thought that Venus was named after the beautiful Roman goddess (counterpart to the Greek Aphrodite) due to its bright, shining appearance in the sky. Of the five planets known to ancient astronomers, it would have been the brightest.',
        'Because Venus is easy to spot with the naked eye, it is impossible to say who discovered the planet. But over the centuries, we have been able to measure Venus\' motions, such as the rare transit of Venus when the planet appears from Earth to cross in front of the Sun.',
        'Following the rules of Latin, we should say ‘venerean\' as the adjective to describe things related to Venus. However, this is deemed to be too close to the word ‘venereal\'. The more commonly used word is ‘Venusian\' despite its clunky etymology.',
        'There are more volcanoes on Venus than on any other planet in the solar system. Astronomers know of more than 1,600 volcanoes on its surface, but there are likely many more too small for us to see. Scientists think most of these are dormant, though a handful may still be active.',
        "Of all the solar system's planets, Venus is the closest to a twin of Earth. The two bodies are nearly of equal size, and Venus' composition is largely the same as Earth's. The orbit of Venus is also the closest to Earth's of any solar system planet. Both worlds have relatively young surfaces, and both have thick atmospheres with clouds (however, it's worth nothing that Venus' clouds are mostly made of poisonous sulfuric acid)."],
    'earth': ['Earth has never been perfectly round. The planet bulges around the equator by an extra 0.3 percent as a result of the fact that it rotates about its axis.',
        "The length of Earth's day is increasing. When Earth was formed 4.6 billion years ago, its day would have been roughly six hours long. By 620 million years ago, this had increased to 21.9 hours. Today, the average day is 24 hours long, but is increasing by about 1.7 milliseconds every century.",
        'About 600-800 million years ago, Earth underwent several extreme climate changes known as ice ages. The climate became so cold that some scientists believe Earth nearly or completely froze several times; this is known as the "snowball Earth" theory.',
        "Ironically, the driest place in the world — the Atacama Desert in northern Chile — is next to the biggest body of water — the Pacific Ocean. Average annual rainfall in Arica, Chile, is just 0.8 millimeters (0.03 inches). It is believed that Atacama's Calama city saw no rain for 400 years until a sudden storm fell in 1972.",
        "If Earth were a perfect sphere, its gravitational field would be the same everywhere. But in reality, the planet's surface is bumpy, and water flow, ice drift and the movement of the tectonic plates beneath Earth's crust all change the pull of gravity. These variations are known as gravity anomalies.",
        'There are two other bodies orbiting near Earth that are sometimes referred to as moons, though they are not strictly worthy of the title. Discovered in 1986, 3753 Cruithne is an asteroid that actually orbits the sun. Since it takes the same amount of time to orbit the sun as Earth, it looks as if Cruithne is following our planet.',
        'Earth orbits the sun once every 365.25 days. Since our calendar years have only 365 days, we add an extra leap day every four years to account for the difference.',
        "About 4.5 billion years ago, gravity coaxed Earth to form from the gaseous, dusty disk that surrounded our young sun. Over time, Earth's interior—which is made mostly of silicate rocks and metals—differentiated into four layers.",
        "Earth's atmosphere is 78 percent nitrogen, 21 percent oxygen, and one percent other gases such as carbon dioxide, water vapor, and argon. Much like a greenhouse, this blanket of gases absorbs and retains heat. On average, Earth's surface temperature is about 57 degrees Fahrenheit; without our atmosphere, it'd be zero degrees.",
        "Earth is the planet we have the best opportunity to understand in detail—helping us see how other rocky planets behave, even those orbiting distant stars. As a result, scientists are increasingly monitoring Earth from space. NASA alone has dozens of missions dedicated to solving our planet's mysteries."],
    'mars': ['Mars is also known as the Red Planet. This is because Mars is covered in soil, rock, and dust made from iron oxide which gives the surface a red rusty colour.',
        'Mars has 2 moons called Deimos and Phobos. They are named after the two horses that pull the Roman god of war, Mars\', chariot. They may be asteroids captured by Mars\' gravity.',
        'Mars is the 4th planet from the sun. It is 227,936,637 km (141 million miles) away from the sun. It would take 300 days (around 8 months) to get there from Earth.',
        'One year on Mars is 687 days long. That\'s 1.9 Earth years. This is because Mars is further away from the sun so it takes longer to orbit it.',
        'The tilt on the axis of Mars is 25 degrees which means that the planet experiences seasons like we do on Earth as different parts of the planet are closer to the sun at different times of its orbit.',
        'Mars has a thin atmosphere made from 95.9% carbon dioxide and 2.7% nitrogen. The atmosphere is so thin that it\'s not thick enough to trap the sun\'s heat so it is very cold - ranging from -100℃ in winter to 20℃  in summer.',
        'Mars has very weak gravity. Gravity on Mars is 37% less than on Earth. This means that on Mars you could jump 3x higher than on Earth.',
        'Mars is a terrestrial planet because it has a hard and rocky surface. Its northern side is full of flat plains and the southern side has ridges and craters.',
        'Mars\' surface has many channels, plains, and canyons which could have been caused by water erosion (water wearing away the surface). This could be evidence that open water in liquid form once existed on the surface billions of years ago.',
        'Mars experiences violent dust storms powered by the sun which can last for months. The dust storms can completely cover the planet and continually change Mars\' surface.'],
    'jupiter': ['Jupiter\'s four largest moons (the Galilean Satellites) are Io, Europa, Ganymede and Callisto.',
        'Jupiter is the largest planet in our solar system at nearly 11 times the size of Earth and 317 times its mass.',
        'Jupiter, being the biggest planet, gets its name from the king of the ancient Roman gods.',
        'Despite its size, Jupiter has the shortest day of any other planet; it only takes about 10 hours for a complete rotation.',
        'A lot like the Sun, Jupiter is mostly composed of hydrogen and helium. Jupiter contains the largest ocean in the solar system, an ocean of liquid hydrogen.',
        'It\'s no secret that Jupiter is the largest planet in the Solar System. But this description really doesn\'t do it justice. For one, the mass of Jupiter is 318 times as massive as the Earth. In fact, Jupiter is 2.5 times more massive than all of the other planets in the Solar System combined.',
        'If Jupiter got any more massive, it would actually get smaller. Additional mass would actually make the planet more dense, which would cause it to start pulling it in on itself. Astronomers estimate that Jupiter could end up with 4 times its current mass, and still remain about the same size.',
        'Astronomers call Jupiter a failed star, but that\'s not really an appropriate description. While it is true that, like a star, Jupiter is rich in hydrogen and helium, Jupiter does not have nearly enough mass to trigger a fusion reaction in its core. This is how stars generate energy, by fusing hydrogen atoms together under extreme heat and pressure to create helium, releasing light and heat in the process.',
        'All those beautiful whirling clouds and storms you see on Jupiter are only about 50 km thick. They\'re made of ammonia crystals broken up into two different cloud decks. The darker material is thought to be compounds brought up from deeper inside Jupiter, and then change color when they reacted with sunlight. But below those clouds, it\'s just hydrogen and helium, all the way down.',
        'The Great Red Spot on Jupiter is one of its most familiar features. This persistent anticyclonic storm, which is located south of its equator, measures between 24,000 km in diameter and 12–14,000 km in height. As such, it is large enough to contain two or three planets the size of Earth\'s diameter. And the spot has been around for at least 350 years, since it was spotted as far back as the 17th century.'],
    'saturn': ['Saturn is sometimes called "The Jewel of the Solar System." It is a planet that is nothing like our own. Humans have been gazing up at Saturn for a long time. They have been wondering about it for thousands of years.',
        'You cannot stand on Saturn. It is not like Earth. Saturn is made mostly of gases. It has a lot of helium. This is the same kind of gas that you put in balloons.',
        'The rings are huge but thin. The main rings could almost go from Earth to the moon. Yet, they are less than a kilometer thick.',
        'It is very windy on Saturn. Winds around the equator can be 1,800 kilometers per hour. That\'s 1,118 miles per hour! On Earth, the fastest winds "only" get to about 400 kilometers per hour. That\'s only about 250 miles per hour.',
        'The Ringed Planet is so far away from the Sun that it receives much less sunlight than we do here on Earth. Yes, the Sun looks smaller from there.',
        'Its beautiful rings are not solid. They are made up of bits of ice, dust and rock. Some of these bits are as small as grains of sand. Some are much larger than tall buildings. Some are up to a kilometer (more than half-a-mile) across.',
        'Saturn has a density of 0.687 grams/cubic centimeter. Just for comparison, water is 1 g/cm3 and the Earth is 5.52. Since Saturn is less dense than water, it would actually float like an apple if you could find a pool large enough. Of course, why you\'d want to ruin a pool with all that hydrogen, helium and ices…',
        'Saturn spins so quickly on its axis that the planet flattens itself out into an oblate spheroid. Seriously, you see this by eye when you look at a picture of Saturn; it looks like someone squished the planet a little. Of course, it\'s the rapid spinning that\'s squishing it, causing the equator to bulge out.',
        'When Galileo first turned his rudimentary telescope on Saturn in 1610, he could see Saturn and its rings, but he didn\'t know what he was looking at. He though that the rings might actually be two large moons stuck to either side of Saturn – ears maybe?',
        'Jupiter has 67 discovered moons, but Saturn is a close second with 62. Some of these are large, like Titan, the second largest moon in the Solar System. But most are tiny – just a few km across, and they have no official names. In fact, the last few were discovered by NASA\'s Cassini orbiter just a few years ago. More will probably be discovered in the coming years.'],
    'uranus': ['Uranus is known as the “sideways planet” because it rotates on its side.',
        'The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.',
        'Uranus is about four times wider than Earth. If Earth were a large apple, Uranus would be the size of a basketball.',
        'Uranus orbits our Sun, a star, and is the seventh planet from the Sun at a distance of about 1.8 billion miles (2.9 billion kilometers).',
        'Uranus takes about 17 hours to rotate once (a Uranian day), and about 84 Earth years to complete an orbit of the Sun (a Uranian year).',
        'Uranus is an ice giant. Most of its mass is a hot, dense fluid of "icy" materials – water, methane and ammonia – above a small rocky core.',
        'Uranus has an atmosphere made mostly of molecular hydrogen and atomic helium, with a small amount of methane.',
        'Uranus has 27 known moons, and they are named after characters from the works of William Shakespeare and Alexander Pope.',
        'Uranus has 13 known rings. The inner rings are narrow and dark and the outer rings are brightly colored.',
        'Uranus\' unique sideways rotation makes for weird seasons. The planet\'s north pole experiences 21 years of nighttime in winter, 21 years of daytime in summer and 42 years of day and night in the spring and fall.'],
    'neptune': ['This may sound like a pretty simple statement, but it\'s actually rather complicated. When it was first discovered by in 1846, Neptune became the most distant planet in the Solar System. But then in 1930, Pluto was discovered, and Neptune became the second-most distant planet. But Pluto\'s orbit is very elliptical; and so there are periods when Pluto actually orbits closer to the Sun than Neptune. The last time this happened was in 1979, which lasted until 1999. During that period, Neptune was again the most distant planet.',
        'With an equatorial radius of only 24,764 km, Neptune is smaller than all the other gas giants in the Solar System: Jupiter, Saturn and Uranus. But here\'s the funny thing: Neptune is actually more massive than Uranus by about 18%. Since it\'s smaller but more massive, Neptune has  a much higher  density than Uranus. In fact, at 1.638 g/cm3, Neptune is the densest gas giant in the Solar System.',
        'Neptune is a ball of gas and ice, probably with a rocky core. There\'s no way you could actually stand on the surface of Neptune without just sinking in. However, if you could stand on the surface of Neptune, you would notice something amazing. The force of gravity pulling you down is almost exactly the same as the force of gravity you feel walking here on Earth.',
        'The first person to have seen Neptune was likely Galileo, who marked it as a star in one of his drawings. However, since he did not identify it as a planet, he is not credited with the discovery. That credit goes to French mathematician Urbain Le Verrier and the English mathematician John Couch Adams, both of whom predicted that a new planet – known as Planet X – would be discovered in a specific region of the sky.',
        'Think a hurricane is scary? Imagine a hurricane with winds that go up to 2,100 km/hour. As you can probably imagine, scientists are puzzled how an icy cold planet like Neptune can get its cloud tops t0 move so fast. One idea is that the cold temperatures and the flow of fluid gasses in the planet\'s atmosphere might reduce friction to the point that it\'s easy to generate winds that move so quickly.',
        'At the top of its clouds, temperatures on Neptune can dip down to 51.7 Kelvin, or -221.45 degrees Celsius (-366.6 °F). That\'s almost three times the coldest temperature ever recorded here on Earth (-89.2°C; -129°F), which means that an unprotected human being would flash freeze in a second!',
        'Neptune has five rings, all of which are named after astronomers who made important discoveries about Neptune – Galle, Le Verrier, Lassell, Arago, and Adams.',
        'Neptune\'s largest Moon, Triton, circles Neptune in a retrograde orbit. That\'s means that it orbits the planet backwards relative to Neptune\'s other moons. This is seen as an indication that Neptune probably captured Triton – i.e. the moon didn\'t form in place like the rest of Neptune\'s moons. Triton is locked into a synchronous rotation with Neptune, and is slowly spiraling inward towards the planet.',
        'The only spacecraft that has ever visited Neptune was NASA\'s Voyager 2 spacecraft, which visited the planet during its Grand Tour of the Solar System. Voyager 2 made its Neptune flyby on August 25, 1989, passing within 3,000 km of the planet\'s north pole. This was the closest approach to any object that Voyager 2 made since it was launched from Earth.',
        'Just like other gas giants, Neptune\'s days are quite short. It takes 16 hours to complete one rotation. Gas giants rotate really fast. For example, Uranus takes 17 hours and Jupiter takes only 10 hours. In comparison, rocky planets take longer to rotate; Mars takes 25 hours, while Mercury takes 1,408 hours which is equal to 59 Earth days.']
}

let title = document.querySelector('#title')
let header = document.querySelector('#name')
let planet = window.location.toString()
planet = planet.slice(planet.search("planet.html") + 13)
header.innerText += ` ${planet.charAt(0).toUpperCase() + planet.slice(1)}`
title.innerText += ` ${planet.charAt(0).toUpperCase() + planet.slice(1)}`

let img = document.querySelector('.img')
img.innerHTML = `<img src="images/planets/${planet}.png" width="180">`

let spec = document.querySelector('.spec')
spec.innerHTML += `Planet Name: ${header.innerText.slice(6)}`
spec.innerHTML += `<br>Size: ${planetDict[planet]['size']}kg`
spec.innerHTML += `<br>Diameter: ${planetDict[planet]['diameter']}km`
spec.innerHTML += `<br>Rotation Speed: ${planetDict[planet]['rotation']}km/h`
if (planet != 'sun') {
    spec.innerHTML += `<br>Distance to the Sun: ${planetDict[planet]['perihelion'] / 1000000}mil km`
}

let fact = document.querySelector('#fact')
fact.innerHTML += `<h3>Fun Fact</h3><hr><p>${funFact[planet][Math.floor(Math.random() * 10)]}</p>`

function changeFact() {
    fact.innerHTML = `<h3>Fun Fact</h3><hr><p>${funFact[planet][Math.floor(Math.random() * 10)]}</p>`
}