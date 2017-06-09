
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("planets").del()
    .then(() => {
      // Inserts seed entries
      return knex("planets").insert([
        {
          id: 1,
          name: "Sun",
          num_moons: 0,
          moon_name: "",
          orbit_period: 27,
          low_temp: 7300,
          hi_temp: 27000000,
          facts: "The Sun accounts for 99.86% of the mass in the solar system. It has a mass of around 330,000 times that of Earth. It is three quarters hydrogen and most of its remaining mass is helium. The Sun doesn't have a crust like the Earth that you can stand on. The whole Sun is made out of gases, fire, and plasma. The gas becomes thinner as you go farther from the center of the Sun. Astronomers think that the Sun (and the planets) formed from the solar nebula about 4.59 billion years ago. The Sun is in the main sequence stage right now,slowly using up its hydrogen fuel. But at some point, in about 5 billion yearsfrom now, the Sun will enter the red giant phase, where it swells up to consumethe inner planets – including Earth (probably). It will slough off its outer layers,and then shrink back down to a relatively tiny white dwarf. The Sun is actually slowly heating up. It’s becoming 10% more luminousevery billion years. In fact, within just a billion years, the heat from the Sun will be so intense that liquid water won’t exist on the surface of the Earth. ",
          link: "https://theplanets.org/the-sun/"
        },
        {
          id: 2,
          name: "Mercury",
          num_moons: 0,
          moon_name: "",
          orbit_period: 88,
          low_temp: -279,
          hi_temp: 800,
          facts: "Mercury has been known to humanity since ancient times and although its discovery date is unknown, the first mentions of the planet are believed to be around 3000 BC by the Sumerians. A year in Mercury is 88 days, yet a Mercury day is 176 Earth days. Mercury is nearly tidally locked to the Sun – also known as a gravitational lock – and over time this has slowed the rotation of the planet to almost match its orbit around the Sun. Mercury orbits so quickly around the Sun that early civilizations believed it was actually two different stars – one which appeared in the morning and another which appeared in the evening. Mercury is the smallest planet in the solar system with a diameter of 4,879 km and is one of five planets that is visible to the naked eye. Despite its small size, Mercury is very dense because it is composed mainly of heavy metals and rock – the main characteristic of terrestrial planets. Mercury is named after the messenger of the Roman gods, who is also known as Hermes in Greek mythology.",
          link: "https://theplanets.org/mercury/"
        },
        {
          id: 3,
          name: "Venus",
          num_moons: 0,
          moon_name: "",
          orbit_period: 224,
          low_temp: -283,
          hi_temp: 863,
          facts: "Venus is the second brightest natural object in the sky. The planet has an apparent magnitude of -3.8 to -4.6, which makes it visible on a bright, clear day. The Moon is the only other natural object that is brighter. Venus is sometimes referred to as the “morning star” and “evening star”. This dates back to ancient civilizations who believed that Venus was in fact two distinct stars appearing in the sky. When the orbit of Venus overtakes Earth’s orbit, it changes from being visible at sunrise to being visible at sunset. Venus is named after the Roman goddess of love and beauty. This may be, in part, due the brightness of the planet and may date back to the Babylonians in 1581 who referred to Venus as “bright queen of the sky”. Billions of years ago, the climate of Venus may been similar to that of Earth and scientists believe that Venus once possessed large amounts of water or oceans. However, due to the high temperatures produce from the extreme greenhouse effect, this water boiled off long ago and the surface of the planet is now too hot and hostile to sustain life. Venus rotate in the opposite direction to other planets.",
          link: "https://theplanets.org/venus/"
        },
        {
          id: 4,
          name: "Earth",
          num_moons: 1,
          moon_name: "Luna",
          orbit_period: 365,
          low_temp: -126,
          hi_temp: 136,
          facts: "Earth is the only planet not named for a mythological god or goddess. The other seven planets in the solar system were named after Roman gods or goddesses. Earth is the most dense planet in the solar system. The density of Earth differs in each part of the planet – the core, for example, is denser than the Earth’s crust – but the average density of the planet is around 5.52 grams per cubic centimetre. The rotation of the Earth is gradually slowing down. The deceleration of the Earth’s rotation is very slow, approximately 17 milliseconds per hundred years. Earth’s water was initially trapped within the planet. Over time the Earth’s water was brought to the surface by the planet’s volcanic activity. The highest point found on Earth is Mount Everest which reaches a height of 8.8 km. The lowest point on Earth is called Challenger Deep and at 10.9 km below sea level, it is further than the peak of Mount Everest.",
          link: "http://nineplanets.org/earth.html"
        },
        {
          id: 5,
          name: "Moon",
          num_moons: 0,
          moon_name: "Earth",
          orbit_period: 29,
          low_temp: -387,
          hi_temp: 253,
          facts: "There is no dark side of the Moon. Both sides of the Moon see the same amount of sunlight, however because the Moon is tidally locked to Earth, only one face of the Moon is ever seen from Earth. This is because the Moon rotates around its axis in exactly the same time it takes to orbit Earth. The side we see from Earth is reflected by sunlight, while the “dark” side has only been seen by the human eye from a spacecraft and lies in darkness. The diameter of the Moon is the same distance from New York City to Phoenix, Arizona. The Moon is slowly drifting away from Earth. Every year, the Moon moves roughly 3.8 cm further away from Earth. The Moon will be visited by man again. NASA has plans to set up a permanent space station on the Moon, and man may walk on the Moon again sometime around 2019-2020. The Moon is the fifth largest natural satellite. ",
          link: "http://nineplanets.org/luna.html"
        },
        {
          id: 6,
          name: "Mars",
          num_moons: 2,
          moon_name: "Phobos & Deimos",
          orbit_period: 686,
          low_temp: -124,
          hi_temp: 23,
          facts: "The planet is named after Mars, the Roman god of war. The landmass of Mars and Earth is very similar. Despite Mars being just 15% the volume and 10% the mass of Earth, it actually has a similar landmass because water covers about 70% of Earth’s surface. The surface gravity of Mars is about 37% the gravity found on Earth. Pieces of Mars have been found on Earth. It is believed that trace amounts of the Martian atmosphere were within meteorites that the planet ejected. Only 16 of the 39 Mars missions have been successful. The tallest mountain known in the solar system is on Mars. Olympus Mons is a 21 km high and 600 km diameter shield volcano that was formed billions of years ago.",
          link: "http://nineplanets.org/mars.html"
        },
        {
          id: 7,
          name: "Jupiter",
          num_moons: 67,
          moon_name: "Io, Europa, Ganymede, Callisto",
          orbit_period: 4332,
          low_temp: -162,
          hi_temp: 43000,
          facts: "Jupiter has the shortest day of the eight planets. The planet rotates very quickly, turning on its axis once every 9 hours and 55 minutes. When Galileo discovered the four moons of Jupiter in 1610 this was the first proof of celestial bodies orbiting something other than Earth. Jupiter has a faint ring system around it. Its ring is mostly comprised of dust particles from some of Jupiter’s moons during impacts from comets and asteroids. Jupiter’s Great Red Spot is an enormous storm that has been raging for over 300 years. This storm is so wide that three Earth’s would fit inside of it.",
          link: "http://nineplanets.org/jupiter.html"
        },
        {
          id: 8,
          name: "Io",
          num_moons: 0,
          moon_name: "One of 4 Galilean Moons",
          orbit_period: 2,
          low_temp: -261,
          hi_temp: 3000,
          facts: "Io was the first discovered moon after Earth moon. The moon is named after a nymph seduced by Zeus. Nasa describes io as a 'Giant pizza covered with melted cheese and splotches of tomato and ripe olives'Io has over 400 active volcanos",
          link: "http://nineplanets.org/io.html"
        },
        {
          id: 9,
          name: "Callisto",
          num_moons: 0,
          moon_name: "One of 4 Galilean Moons",
          orbit_period: 16,
          low_temp: -315,
          hi_temp: -218,
          facts: "Since Callisto is larger than the dwarf planet Pluto and a similar size to Mercury you might think it could be considered a planet. However, it orbits the planet Jupiter and not the Sun, which is one of the primary factors in bodies being officially named as a planet. The surface of Callisto is the most heavily cratered and also one of the oldest landscapes in our solar system. Scientists believe it is a dead world with no signs of geologic activity like plate tectonics or volcanism on its surface. Despite being 628,300,000 km from Earth, Callisto appears much brighter in the sky than our Moon when viewed through a telescope – despite our Moon being only 384,400 km. This is because the surface of Callisto is made up of a very thick layer of ice which reflects the Sun much more than the surface of our Moon.",
          link: "http://nineplanets.org/callisto.html"
        },
        {
          id: 10,
          name: "Ganymede",
          num_moons: 0,
          moon_name: "One of 4 Galilean Moons",
          orbit_period: 7,
          low_temp: -315,
          hi_temp: -215,
          facts: "Ganymede is larger than both Mercury and Pluto, and is 2/3 the size of Mars with a diameter of 5,268 km (3,273 miles) – 8% larger than Mercury. It has the highest mass of all planetary satellites and has more than twice the mass of the Earth’s Moon. There might be a layer of liquid water beneath the surface of Ganymede. The moon has a very thin atmosphere and it does contain small amounts of oxygen but there is not enough to support any form of life. Ganymede is made of rocky material and water ice. It has a metallic iron and iron sulfide core which is surrounded by a rocky mantle and a very thick icy crust.",
          link: "http://nineplanets.org/ganymede.html"
        },
        {
          id: 11,
          name: "Europa",
          num_moons: 0,
          moon_name: "One of 4 Galilean Moons",
          orbit_period: 3,
          low_temp: -370,
          hi_temp: -260,
          facts: "Europa was officially discovered on January 8, 1610 but Galileo may have actually discovered the moon the day before. He was using a low-powered telescope and couldn’t actually distinguish Europa from the other Galilean moon Io until the next day. Europa was a noblewoman which the continent of Europe was named after. The surface of Europa is made of frozen water and has the smoothest surface of any other objects in the solar system – i.e. it lacks large features such as mountains or craters. There are very few craters on the surface of the moon because it is tectonically active and relatively young. Scientists believe that there is a liquid ocean somewhere around 100 km (60 miles) beneath the thick, icy crust of Europa.",
          link: "https://theplanets.org/europa/"
        },
        {
          id: 12,
          name: "Saturn",
          num_moons: 62,
          moon_name: "Titan, Rhea & Enceladus",
          orbit_period: 10755,
          low_temp: -285,
          hi_temp: 21000,
          facts: "It takes Saturn 29.4 Earth years to orbit the Sun. This slow movement against a backdrop of stars led to the planet being nicknamed “Lubadsagush” – or “oldest of the old” – by the ancient Assyrians. Saturn has 150 moons and smaller moonlets. All of these moons are frozen – the largest of which are Titan and Rhea. The moon Enceladus also appears to have an ocean hidden below its frozen surface. Saturn’s moon Titan is the second largest moon in the Solar System, behind Jupiter’s moon Ganymede. Saturn has oval shaped storms which are similar to those of Jupiter. Scientists believe that the hexadiagonal-shaped pattern of clouds around Saturn’s north pole may be a wave pattern in the upper clouds. There is also a vortex over the south pole which resembles hurricane storms on Earth. Saturn is known as a gas giant, but scientists believe it has a solid rocky core surrounded by hydrogen and helium",
          link: "https://theplanets.org/saturn/"
        },
        {
          id: 13,
          name: "Titan",
          num_moons: 0,
          moon_name: "Notable Saturn moon",
          orbit_period: 16,
          low_temp: -290,
          hi_temp: -290,
          facts: "It is believed the atmosphere of early Earth was very similar in composition to what we see on Titan today. As a result Titan is often compared to a frozen version of primordial Earth. As methane is a substitute for water on Titan some forms of methanogenic lifeforms could exist in the harsh conditions. Another theory is that liquid ammonia oceans could be present deep under the surface which could provide an environment for microbial life to exist. Titan is the sixth moon in distance from Saturn. It is the largest of Saturn's moons and the second largest in the solar system.",
          link: "http://www.solarsystemquick.com/titan.htm"
        },
        {
          id: 14,
          name: "Neptune",
          num_moons: 14,
          moon_name: "Notable Moon Triton",
          orbit_period: 60190,
          low_temp: -369,
          hi_temp: -387,
          facts: "Neptune also has a second storm called the Small Dark Spot. This storm is around the same size as Earth’s moon. Neptune spins very quickly on its axis. The planets equatorial clouds take 18 hours to complete one rotation. The reason this happens is that Neptune does not have a solid body. Only one spacecraft, the Voyager 2, has flown past Neptune. It happened in 1989 and captured the first close-up images of the Neptunian system. It took 246 minutes – four hours and six minutes – for signals from Voyager 2 to reach back to Earth. The climate on Neptune is extremely active. In its upper atmosphere, large storms sweep across it and high-speed solar winds track around the planet at up to 1,340 km per second. The largest storm was the Great Dark Spot in 1989 which lasted for around five years.",
          link: "https://theplanets.org/neptune/"
        },
        {
          id: 15,
          name: "Pluto",
          num_moons: 0,
          moon_name: "",
          orbit_period: 90520,
          low_temp: -400,
          hi_temp: -360,
          facts: "American astronomer Percival Lowell first caught hints of Pluto's existence in 1905 from odd deviations he observed in the orbits of Neptune and Uranus, suggesting that another world's gravity was tugging at these two planets from beyond. Lowell predicted the mystery planet's location in 1915, but died without finding it. Pluto was finally discovered in 1930 by Clyde Tombaugh at the Lowell Observatory, based on predictions by Lowell and other astronomers. Pluto got its name from an 11-year-old Venetia Burney of Oxford, England, who suggested to her grandfather that the new world get its name from the Roman god of the underworld. Her grandfather then passed the name on to Lowell Observatory. The name also honors Percival Lowell, whose initials are the first two letters of Pluto.",
          link: "http://www.space.com/43-pluto-the-ninth-planet-that-was-a-dwarf.html"
        }
      ]);
    });
};
