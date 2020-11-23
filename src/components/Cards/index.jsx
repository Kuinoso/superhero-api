import React, { useState } from 'react';
import CharacterCard from '../CharacterCard';
import { useStyles } from './styles.js';

const test = [
    {
      "id": "119",
      "name": "Blob",
      "powerstats": {
        "intelligence": "10",
        "strength": "83",
        "speed": "23",
        "durability": "95",
        "power": "28",
        "combat": "72"
      },
      "biography": {
        "full-name": "Frederick J. Dukes",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "Lubbock, Texas",
        "first-appearance": "X-Men #3 (1964)",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "510 lb",
          "230 kg"
        ],
        "eye-color": "Brown",
        "hair-color": "Brown"
      },
      "work": {
        "occupation": "Former criminal, terrorist, government agent, carnival performer",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "X-Cell, formerly X-Corps, Magneto's army, Brotherhood Of Evil Mutants, Freedom Force, Factor Three, former partner of Unus",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1119.jpg"
      }
    },
    {
      "id": "120",
      "name": "Bloodaxe",
      "powerstats": {
        "intelligence": "63",
        "strength": "80",
        "speed": "33",
        "durability": "80",
        "power": "100",
        "combat": "84"
      },
      "biography": {
        "full-name": "Jackie Lukus",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "-",
        "first-appearance": "(as Jackie Lukus) Thor #392 (as Bloodaxe) Thor #449",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "7'2",
          "218 cm"
        ],
        "weight": [
          "1100 lb",
          "495 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Brown"
      },
      "work": {
        "occupation": "Architect, former vigilante",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1509.jpg"
      }
    },
    {
      "id": "121",
      "name": "Bloodhawk",
      "powerstats": {
        "intelligence": "50",
        "strength": "10",
        "speed": "50",
        "durability": "80",
        "power": "80",
        "combat": "64"
      },
      "biography": {
        "full-name": "Lemuel Krug",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Lemuel Halcon"
        ],
        "place-of-birth": "-",
        "first-appearance": "X-Men (2099) #1",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "Black",
        "hair-color": "No Hair"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "X-Peditioners, formerly X-Men, Halo City Protectorate, Oasis",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1510.jpg"
      }
    },
    {
      "id": "122",
      "name": "Bloodwraith",
      "powerstats": {
        "intelligence": "null",
        "strength": "72",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      },
      "biography": {
        "full-name": "Sean Dolan",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Black Wraith",
          "Blood Wraith"
        ],
        "place-of-birth": "-",
        "first-appearance": "(Dolan) Black Knight #2 (1990); (Bloodwraith) Avengers Annual #22 (1993)",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "100'0",
          "30.5 meters"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "White",
        "hair-color": "No Hair"
      },
      "work": {
        "occupation": "Former squire",
        "base": "Slorenia"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/186.jpg"
      }
    },
    {
      "id": "180",
      "name": "Cloak",
      "powerstats": {
        "intelligence": "63",
        "strength": "10",
        "speed": "47",
        "durability": "64",
        "power": "100",
        "combat": "56"
      },
      "biography": {
        "full-name": "Tyrone Johnson",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "South Boston, Massachusetts",
        "first-appearance": "Spectacular Spiderman #64",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "7'5",
          "226 cm"
        ],
        "weight": [
          "155 lb",
          "70 kg"
        ],
        "eye-color": "brown",
        "hair-color": "black"
      },
      "work": {
        "occupation": "Vigilante",
        "base": "Holy Ghost Church, 42nd Street, New York City"
      },
      "connections": {
        "group-affiliation": "Cloak and Dagger, New Warriors, Marvel Knights",
        "relatives": "Smokin' Joe (rumored grandfather)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/46.jpg"
      }
    },
    {
      "id": "181",
      "name": "Clock King",
      "powerstats": {
        "intelligence": "75",
        "strength": "10",
        "speed": "17",
        "durability": "10",
        "power": "7",
        "combat": "40"
      },
      "biography": {
        "full-name": "William Tockman",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Tempus Fugit"
        ],
        "place-of-birth": "-",
        "first-appearance": "World's Finest #111 (August, 1960)",
        "publisher": "DC Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "5'10",
          "178 cm"
        ],
        "weight": [
          "173 lb",
          "78 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "Clockwatchers, Justice League Antarctica, Suicide Squad, Time Foes",
        "relatives": "Beverly (sister, deceased)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10396.jpg"
      }
    },
    {
      "id": "184",
      "name": "Colossal Boy",
      "powerstats": {
        "intelligence": "null",
        "strength": "null",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "-",
        "first-appearance": "-",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "-",
        "hair-color": "-"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1182.jpg"
      }
    },
    {
      "id": "185",
      "name": "Colossus",
      "powerstats": {
        "intelligence": "63",
        "strength": "83",
        "speed": "33",
        "durability": "100",
        "power": "45",
        "combat": "80"
      },
      "biography": {
        "full-name": "Piotr Nikolaievitch Rasputin",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Pete",
          "Peter Nicholas",
          "The Proletarian",
          "Little Brother"
        ],
        "place-of-birth": "Ust-Ordynski Collective, near Lake Baikal, Siberia, Russia",
        "first-appearance": "Giant-Size X-Men #1 (May, 1975)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "7'5",
          "226 cm"
        ],
        "weight": [
          "500 lb",
          "225 kg"
        ],
        "eye-color": "Silver",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "(current) Adventurer, student, (former) Artist",
        "base": "(current) Professor Charles Xavier's Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Isle, Scotland,; a loft in Soho, Manhattan, Ust-Ordynski Collective, Lake Baikal, Siberia, U.S.S.R., X-Men Headquarters in Austra"
      },
      "connections": {
        "group-affiliation": "X-Men; formerly Excalibur, Acolytes, Defender",
        "relatives": "Grigory Efimovich Rasputin (great-grandfather, deceased), Elena (great-grandmother, deceased), Ivan Rasputin (great-grand uncle, deceased), Grigory Rasputin (grandfather, deceased), Nikolai Rasputin (father, deceased), Alexandra Rasputina (mother, deceased), Vladimir Rasputin (uncle, deceased), unidentified aunt & uncle (deceased), Illyana Nikolievna Rasputina (Magik, sister, deceased), Mikhail Rasputin (brother), Peter Jr. (son), Larissa Mishchenko (cousin, deceased), Konstantin (cousin, deceased), Klara (cousin, deceased), Dimitriy (cousin, deceased)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/48.jpg"
      }
    },
    {
      "id": "196",
      "name": "Cyclops",
      "powerstats": {
        "intelligence": "75",
        "strength": "10",
        "speed": "23",
        "durability": "42",
        "power": "76",
        "combat": "80"
      },
      "biography": {
        "full-name": "Scott Summers",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Scotty",
          "Cyke",
          "Slim",
          "Fearless Leader",
          "One-Eye",
          "Erik the Red",
          "Slym Dayspring",
          "Mutate 007",
          "Apocalypse"
        ],
        "place-of-birth": "Anchorage, Alaska",
        "first-appearance": "X-Men #1 (September, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "195 lb",
          "88 kg"
        ],
        "eye-color": "Brown",
        "hair-color": "Brown"
      },
      "work": {
        "occupation": "Leader of mutant race, adventurer, headmaster, former student, radio announcer",
        "base": "Xavier Institute, Salem Center, Westchester County, New York"
      },
      "connections": {
        "group-affiliation": "X-Men (leader, founding member); formerly X-Force (founder); Corsairs (squad leader); The Twelve; X-Factor/X-Terminators (founding member); 198",
        "relatives": "Oscar Summers (adoptive paternal distant ancestor, deceased); Daniel Summers (paternal distant ancestor, deceased); Amanda Mueller (Black Womb) (paternal distant ancestor); unnamed great-grandfather, deceased; Gloria Dayne (Fontanelle) (paternal distant ancestor); Philip Summers (paternal grandfather); Deborah Summers (paternal grandmother); Christopher Summers (Corsair) (father, deceased); Katherine Ann Summers (mother, deceased); Jack Winters (Jack O'Diamonds) (former foster father); Alexander Summers (Havok) (brother); Gabriel Summers (Vulcan) (brother, deceased); Madelyne Pryor-Summers (Red Queen) (first wife/second wife's clone, deceased); Jean Grey-Summers (Phoenix) (second wife, deceased); Nathan Summers (Cable) (son, deceased); Gailyn Bailey (niece, deceased); Joseph Bailey (nephew, deceased); Adam Neramani (X-Treme) (nephew, alleged half-brother); Hope Summers (adoptive granddaughter); Stryfe (son's clone); Summers and Grey Family Tree (more relatives)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/50.jpg"
      }
    },
    {
      "id": "215",
      "name": "Deathlok",
      "powerstats": {
        "intelligence": "69",
        "strength": "32",
        "speed": "30",
        "durability": "70",
        "power": "40",
        "combat": "60"
      },
      "biography": {
        "full-name": "Luther Manning",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Demolisher"
        ],
        "place-of-birth": "-",
        "first-appearance": "Astonishing Tales #25 (August, 1974)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Cyborg",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "395 lb",
          "178 kg"
        ],
        "eye-color": "Brown",
        "hair-color": "Grey"
      },
      "work": {
        "occupation": "-",
        "base": "New York area"
      },
      "connections": {
        "group-affiliation": "Former member of the CIA, Project: Alpha-Mech, US Army, ally of Godwulf's Redeemers",
        "relatives": "Janice (Wife, seperated), Richard (son)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1304.jpg"
      }
    },
    {
      "id": "228",
      "name": "Donatello",
      "powerstats": {
        "intelligence": "88",
        "strength": "14",
        "speed": "46",
        "durability": "60",
        "power": "58",
        "combat": "75"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Don",
          "Donnie"
        ],
        "place-of-birth": "-",
        "first-appearance": "Teenage Mutant Ninja Turtles #1",
        "publisher": "IDW Publishing",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "Green",
        "hair-color": "No Hair"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "Leonardo (brother), Michelangelo (brother), Raphael (brother)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10330.jpg"
      }
    },
    {
      "id": "240",
      "name": "Elongated Man",
      "powerstats": {
        "intelligence": "75",
        "strength": "10",
        "speed": "33",
        "durability": "90",
        "power": "44",
        "combat": "40"
      },
      "biography": {
        "full-name": "Ralph Dibny",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Alvin Burgson; Molder"
        ],
        "place-of-birth": "-",
        "first-appearance": "Flash #112 (1960)",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "6'1",
          "185 cm"
        ],
        "weight": [
          "178 lb",
          "80 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Red"
      },
      "work": {
        "occupation": "Detective",
        "base": "Opal City, Central City"
      },
      "connections": {
        "group-affiliation": "Justice League of America, Justice League Europe, Super Buddies, Outsiders, Croatoans, Black Lantern Corps",
        "relatives": "Sue Dibny (wife, deceased); Ken Dibny (brother); Jake Dibny (uncle); Jim (uncle-in-law)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1381.jpg"
      }
    },
    {
      "id": "258",
      "name": "Firelord",
      "powerstats": {
        "intelligence": "38",
        "strength": "63",
        "speed": "75",
        "durability": "90",
        "power": "52",
        "combat": "28"
      },
      "biography": {
        "full-name": "Pyreus Kril",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Nova Centurion"
        ],
        "place-of-birth": "Xander, planet in Tranta System, Andromeda Galaxy",
        "first-appearance": "THOR Vol. 1 #225",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "-",
        "race": "null",
        "height": [
          "6'4'",
          "193 cm"
        ],
        "weight": [
          "220 lb",
          "99 kg"
        ],
        "eye-color": "White",
        "hair-color": "Yellow"
      },
      "work": {
        "occupation": "Former starship captain, former herald of Galactus",
        "base": "Mobile; usually in space"
      },
      "connections": {
        "group-affiliation": "Formerly Nova Corps, Guardians of the Galaxy (in an alternate future)",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/59.jpg"
      }
    },
    {
      "id": "307",
      "name": "Han Solo",
      "powerstats": {
        "intelligence": "50",
        "strength": "10",
        "speed": "17",
        "durability": "20",
        "power": "43",
        "combat": "60"
      },
      "biography": {
        "full-name": "Han Solo",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "Corellia",
        "first-appearance": "Star Wars: Episode IV - A New Hope (1977)",
        "publisher": "George Lucas",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "176 lb",
          "79 kg"
        ],
        "eye-color": "Brown",
        "hair-color": "Brown"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10456.jpg"
      }
    },
    {
      "id": "329",
      "name": "Hollow",
      "powerstats": {
        "intelligence": "null",
        "strength": "null",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      },
      "biography": {
        "full-name": "Monet St. Croix",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Penace",
          "M",
          "Monet St. Croix",
          "Penny",
          "Yvette"
        ],
        "place-of-birth": "-",
        "first-appearance": "Generation X #1 (1994)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Female",
        "race": "null",
        "height": [
          "5'7",
          "170 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Red"
      },
      "work": {
        "occupation": "-",
        "base": "Massachusetts Academy; Phil Urich's aprtment"
      },
      "connections": {
        "group-affiliation": "Generation X, The Loners",
        "relatives": "M, Emplate, St. Croix Twins"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/931.jpg"
      }
    },
    {
      "id": "388",
      "name": "Kilowog",
      "powerstats": {
        "intelligence": "81",
        "strength": "90",
        "speed": "53",
        "durability": "42",
        "power": "100",
        "combat": "80"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Kilo Wog",
          "Green Lantern 674.1",
          "Dark Lantern",
          "The Green Lantern drill sergeant",
          "\"Poozer\"",
          "Lantern"
        ],
        "place-of-birth": "Bolovax Vik",
        "first-appearance": "Green Lantern Corps #201 (June, 1986)",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Bolovaxian",
        "height": [
          "7'8",
          "234 cm"
        ],
        "weight": [
          "720 lb",
          "324 kg"
        ],
        "eye-color": "Red",
        "hair-color": "No Hair"
      },
      "work": {
        "occupation": "-",
        "base": "Oa, formerly Earth, Bolovax Vik"
      },
      "connections": {
        "group-affiliation": "Green Lantern Corps; formerly New Guardians, Justice League International",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1428.jpg"
      }
    },
    {
      "id": "398",
      "name": "Kylo Ren",
      "powerstats": {
        "intelligence": "56",
        "strength": "44",
        "speed": "33",
        "durability": "30",
        "power": "100",
        "combat": "70"
      },
      "biography": {
        "full-name": "Ben Solo",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "-",
        "first-appearance": "Star Wars: Episode VII - The Force Awakens (2015)",
        "publisher": "George Lucas",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "-",
        "hair-color": "-"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "Han Solo (Father), Princess Leia (Mother), Luke Skywalker (Uncle)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10559.jpg"
      }
    },
    {
      "id": "408",
      "name": "Lightning Lord",
      "powerstats": {
        "intelligence": "44",
        "strength": "10",
        "speed": "23",
        "durability": "42",
        "power": "66",
        "combat": "42"
      },
      "biography": {
        "full-name": "Mekt Ranzz",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "-",
        "first-appearance": "Supergirl and the Legion of Super-Heroes #25 (Feb. 2007)",
        "publisher": "DC Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "6'3",
          "191 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Red"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "The Wanderers, former ally of the Legion of Super-Heroes.",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1179.jpg"
      }
    },
    {
      "id": "413",
      "name": "Lobo",
      "powerstats": {
        "intelligence": "94",
        "strength": "100",
        "speed": "54",
        "durability": "100",
        "power": "100",
        "combat": "85"
      },
      "biography": {
        "full-name": "Lobo",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "The Main Man",
          "The 'Bo",
          "Master Frag",
          "Mister Machete",
          "Popebo; He-Who-Devours-Your-Entrails-And-Thoroughly-Enjoys-It"
        ],
        "place-of-birth": "-",
        "first-appearance": "Omega Men # 3",
        "publisher": "DC Comics",
        "alignment": "neutral"
      },
      "appearance": {
        "gender": "Male",
        "race": "Czarnian",
        "height": [
          "7'6",
          "229 cm"
        ],
        "weight": [
          "640 lb",
          "288 kg"
        ],
        "eye-color": "Red",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "Assassin, Bounty Hunter, Priest",
        "base": "Mobile throughout several galaxies"
      },
      "connections": {
        "group-affiliation": "Formerly LEGION, Young Justice; First Celestial Church of the Triple Fish-God",
        "relatives": "Slobo (clone)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1127.jpg"
      }
    },
    {
      "id": "414",
      "name": "Loki",
      "powerstats": {
        "intelligence": "88",
        "strength": "63",
        "speed": "46",
        "durability": "85",
        "power": "100",
        "combat": "60"
      },
      "biography": {
        "full-name": "Loki Laufeyson",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "God of Mischief",
          "Gem-Keeper",
          "Walter Lawson",
          "Lester",
          "Loren Olsen",
          "Tyfon",
          "Father Williams",
          "Willie",
          "Tso Zhung; has also impersonated hundreds of others."
        ],
        "place-of-birth": "Jotunheim, Asgard",
        "first-appearance": "Journey into Mystery Vol. 1 #85",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Asgardian",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "525 lb",
          "236 kg"
        ],
        "eye-color": "Green",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "God of evil; former god of mischief and madness",
        "base": "Asgard"
      },
      "connections": {
        "group-affiliation": "Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, \"Acts of Vengeance\" prime movers (Dr. Doom, Magneto, Red Skull, Mandari",
        "relatives": "Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/928.jpg"
      }
    },
    {
      "id": "415",
      "name": "Longshot",
      "powerstats": {
        "intelligence": "50",
        "strength": "10",
        "speed": "27",
        "durability": "10",
        "power": "71",
        "combat": "70"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "The Lost Messiah",
          "The Lucky One"
        ],
        "place-of-birth": "-",
        "first-appearance": "Longshot #1 (September, 1985)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "80 lb",
          "36 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "freedom fighter, stuntman rebel, adventurer",
        "base": "X-Factor Investigations Headquarters, New York City, New York; formerly Detroit, Michigan; mobile; Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York; Mojoverse; Cooterman's Creek, Australian Outback, Australia; Alcatraz I"
      },
      "connections": {
        "group-affiliation": "X-Factor Investigations; rebel forces on his homeworld; formerly Exiles; X-Men",
        "relatives": "Arize (creator), Alison Blaire (Dazzler) (wife), Gaveedra Seven (Shatterstar) (alleged son)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1531.jpg"
      }
    },
    {
      "id": "445",
      "name": "Metallo",
      "powerstats": {
        "intelligence": "75",
        "strength": "53",
        "speed": "23",
        "durability": "95",
        "power": "86",
        "combat": "64"
      },
      "biography": {
        "full-name": "John Corben",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "-",
        "first-appearance": "Superman Vol 2 #1 (January, 1987)",
        "publisher": "DC Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Android",
        "height": [
          "6'5",
          "196 cm"
        ],
        "weight": [
          "200 lb",
          "90 kg"
        ],
        "eye-color": "Green",
        "hair-color": "Brown"
      },
      "work": {
        "occupation": "Professional criminal",
        "base": "Mobile, though he generally operates out of Metropolis"
      },
      "connections": {
        "group-affiliation": "Superman Revenge Squad",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/737.jpg"
      }
    },
    {
      "id": "450",
      "name": "Michelangelo",
      "powerstats": {
        "intelligence": "63",
        "strength": "14",
        "speed": "50",
        "durability": "65",
        "power": "59",
        "combat": "75"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Mike",
          "Mikey",
          "Mikester",
          "Michaelangelo"
        ],
        "place-of-birth": "-",
        "first-appearance": "-",
        "publisher": "IDW Publishing",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Mutant",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "-"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "Leonardo (brother), Donatello (brother), Raphael (brother)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10329.jpg"
      }
    },
    {
      "id": "466",
      "name": "Moloch",
      "powerstats": {
        "intelligence": "null",
        "strength": "null",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      },
      "biography": {
        "full-name": "Edgar William Jacobi",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "William Edgar Bright",
          "Moloch the Mystic"
        ],
        "place-of-birth": "-",
        "first-appearance": "-",
        "publisher": "DC Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "-",
        "hair-color": "-"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1061.jpg"
      }
    },
    {
      "id": "529",
      "name": "Psylocke",
      "powerstats": {
        "intelligence": "63",
        "strength": "33",
        "speed": "25",
        "durability": "40",
        "power": "100",
        "combat": "90"
      },
      "biography": {
        "full-name": "Elizabeth Braddock",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Betsy",
          "Captain Britain",
          "Lady Mandarin"
        ],
        "place-of-birth": "Braddock Manor, England",
        "first-appearance": "Captain Britain #8 (December, 1976) / New Mutants Annual #2 (October, 1986) (US)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Female",
        "race": "Mutant",
        "height": [
          "5'11",
          "180 cm"
        ],
        "weight": [
          "155 lb",
          "70 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Purple"
      },
      "work": {
        "occupation": "Adventurer, formerly a STRIKE operative, fashion model",
        "base": "Xavier Institute, Salem Center, Westchester County, New York formerly Braddock Manor, United Kingdom; Australian Outback"
      },
      "connections": {
        "group-affiliation": "X-Men, formerly agent of S.T.R.I.K.E., ally of R.C.X., partner of Captain U.K.",
        "relatives": "John Braddock (ancestor, possibly grandfather); Sir James Braddock (father, deceased); Lady Elizabeth Braddock (mother, deceased); Brian Braddock (Captain Britain) (twin brother); Jamie Braddock (brother, deceased); Meggan Braddock (sister-in-law);"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/114.jpg"
      }
    },
    {
      "id": "609",
      "name": "Solomon Grundy",
      "powerstats": {
        "intelligence": "9",
        "strength": "93",
        "speed": "13",
        "durability": "100",
        "power": "92",
        "combat": "30"
      },
      "biography": {
        "full-name": "Cyrus Gold",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Marshland Monster"
        ],
        "place-of-birth": "Gotham City",
        "first-appearance": "All-American Comics #61 (October, 1944)",
        "publisher": "DC Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Zombie",
        "height": [
          "9'2",
          "279 cm"
        ],
        "weight": [
          "971 lb",
          "437 kg"
        ],
        "eye-color": "Black",
        "hair-color": "White"
      },
      "work": {
        "occupation": "-",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "Formerly, Injustice Society, Injustice League, the Society, Infinity, Inc; Injustice Unlimited, Black Lantern Corps",
        "relatives": "Unnamed wife (deceased); Karin Rykel (possible descendant, deceased); Chrissie Cavendish (possible descendant)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/782.jpg"
      }
    },
    {
      "id": "630",
      "name": "Star-Lord",
      "powerstats": {
        "intelligence": "69",
        "strength": "20",
        "speed": "33",
        "durability": "50",
        "power": "25",
        "combat": "70"
      },
      "biography": {
        "full-name": "Peter Jason Quill",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Starlord"
        ],
        "place-of-birth": "-",
        "first-appearance": "Marvel Preview #4 (January, 1976)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human-Spartoi",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "175 lb",
          "79 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "Adventurer; Royal Prince of Spartax",
        "base": "C.I.T.T.; formerly Kree space; Hala, Daedalus 5"
      },
      "connections": {
        "group-affiliation": "Guardians of the Galaxy (leader); formerly unnamed commando team, United Front, Imperial Guard, partner of Ship, NASA",
        "relatives": "Eson (grandfather, deceased), Gareth (great-uncle, deceased), Jason of Sparta (father), Meredith Quill (mother, deceased), Victoria (half-sister), Kip Holm (adopted brother), Sandy (adopted sister in-law), Alain (adopted niece), Rhys, Robyn (adopted nephews), Kitty Pryde (fiance), Unnamed former Symbiote"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10015.jpg"
      }
    },
    {
      "id": "681",
      "name": "Utgard-Loki",
      "powerstats": {
        "intelligence": "50",
        "strength": "80",
        "speed": "23",
        "durability": "84",
        "power": "85",
        "combat": "64"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "Jotunheim",
        "first-appearance": "-",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Frost Giant",
        "height": [
          "50'0",
          "15.2 meters"
        ],
        "weight": [
          "128000 lb",
          "58 tons"
        ],
        "eye-color": "Blue",
        "hair-color": "White"
      },
      "work": {
        "occupation": "Monarch",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "Giants of Jotunheim",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1484.jpg"
      }
    },
    {
      "id": "705",
      "name": "Warlock",
      "powerstats": {
        "intelligence": "88",
        "strength": "36",
        "speed": "79",
        "durability": "95",
        "power": "71",
        "combat": "95"
      },
      "biography": {
        "full-name": "Adam Warlock",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Him",
          "(in an alternate future) the Magus"
        ],
        "place-of-birth": "The Beehive, Shard Island, Atlantic Ocean",
        "first-appearance": "Fantastic Four #66",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "6'2'",
          "188 cm"
        ],
        "weight": [
          "240 lb",
          "108 kg"
        ],
        "eye-color": "Red",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "Avenger, savior of worlds",
        "base": "Counter-Earth, later mobile"
      },
      "connections": {
        "group-affiliation": "Infinity Watch, (as the Magus) head of Universal Church of Truth in an alternate future",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/154.jpg"
      }
    },
    {
      "id": "725",
      "name": "Yellow Claw",
      "powerstats": {
        "intelligence": "null",
        "strength": "null",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      },
      "biography": {
        "full-name": "",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "The Claw"
        ],
        "place-of-birth": "Somewhere in mainland China",
        "first-appearance": "(historical) YELLOW CLAW #1; (modern) (telepathic 'voice' of Yellow Claw) STRANGE TALES #160, (robot Yellow Claw) STRANGE TALES # 161, (actual Yellow Claw)CAPTAIN AMERICA #164",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "null",
        "height": [
          "6'2",
          "188 cm"
        ],
        "weight": [
          "210 lb",
          "95 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "No Hair"
      },
      "work": {
        "occupation": "Would-be conqueror",
        "base": "Various hidden bases throughout the world"
      },
      "connections": {
        "group-affiliation": "-",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/23.jpg"
      }
    },
    {
      "id": "726",
      "name": "Yellowjacket",
      "powerstats": {
        "intelligence": "88",
        "strength": "10",
        "speed": "12",
        "durability": "28",
        "power": "12",
        "combat": "14"
      },
      "biography": {
        "full-name": "Hank Pym",
        "alter-egos": "Ant-Man, Giant-Man, Goliath, Wasp II",
        "aliases": [
          "Hank Pym"
        ],
        "place-of-birth": "Elmsford, New York",
        "first-appearance": "(as Pym) TALES TO ASTONISH #27, (as Ant-Man) TALES TO ASTONISH #35, (as Giant-Man) TALES TO ASTONISH #49, (as Goliath) AVENGERS #28, (as Yellowjacket) AVENGERS #59",
        "publisher": "Ant-Man",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'",
          "183 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
        "base": "Avengers Mansion, New York City, New York, (formerly)Avengers Compound, Los Angeles, California"
      },
      "connections": {
        "group-affiliation": "The Avengers, The West Coast Avengers, Secret Defenders",
        "relatives": "Maria Trovaya (first wife, deceased), Janet Van Dyne a.k.a. The Wasp (second wife, divorced), Ultron (creation, \"son\"), Jocasta (\"first daughter-in-law\"), Alkhema (\"second daughter-in-law\"), Vision (\"grandson\"), Scarlet Witch (former granddaughter-in-law), Victor Mancha (\"grandson\")"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/70.jpg"
      }
    },
    {
      "id": "727",
      "name": "Yellowjacket II",
      "powerstats": {
        "intelligence": "50",
        "strength": "10",
        "speed": "35",
        "durability": "28",
        "power": "31",
        "combat": "28"
      },
      "biography": {
        "full-name": "Rita DeMara",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "-"
        ],
        "place-of-birth": "-",
        "first-appearance": "Avengers #264",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Female",
        "race": "Human",
        "height": [
          "5'5",
          "165 cm"
        ],
        "weight": [
          "115 lb",
          "52 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Strawberry Blond"
      },
      "work": {
        "occupation": "Adventurer; former criminal, electronics engineer",
        "base": "New York City area"
      },
      "connections": {
        "group-affiliation": "Formerly Guardians of the Galaxy, Avengers, Masters of Evil",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/178.jpg"
      }
    }
  ]

export default function Cards() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.root}>
                {test.map((item) => (
                    <CharacterCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image.url}
                    fullName={item.biography['full-name']}
                    alignment={item.biography.alignment}
                    publisher={item.biography.publisher}
                    />
                ))}
            </div>
        </div>

        // <div classname={classes.root}>
        //     <div className={classes.container}>
        //         {[1, 2, 3, 4, 5].map(item => <CharacterCard key={item} />)}
        //     </div>
        // </div>

    )
}