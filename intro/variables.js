var brand ="mala practica";
let counter =100;
const token = "abx123";

console.log(token);
counter=200;
console.log(counter);

// comentario de una linea

/*
comentario de varias
lineas
:)
*/ 

//interpolacion

let interpolation = `El valor de couter es ${counter}`;
console.log("el valor de counter es: ", counter);
console.log("el valor de counter es " + counter);

const persons =[{
    "name": "Abba",
    "last name": "Francescotti",
    "age": "10/2/2023",
    "gender": "M"
  }, {
    "name": "Marilin",
    "last name": "Zoppo",
    "age": "5/13/2023",
    "gender": "F"
  }, {
    "name": "Babara",
    "last name": "Hessing",
    "age": "3/10/2024",
    "gender": "F"
  }, {
    "name": "Dru",
    "last name": "Maxweell",
    "age": "6/14/2023",
    "gender": "F"
  }, {
    "name": "Jemmie",
    "last name": "Sybry",
    "age": "3/16/2023",
    "gender": "F"
  }, {
    "name": "Benji",
    "last name": "Willder",
    "age": "5/13/2023",
    "gender": "M"
  }, {
    "name": "Una",
    "last name": "Bohills",
    "age": "2/18/2024",
    "gender": "F"
  }, {
    "name": "Dorree",
    "last name": "Assante",
    "age": "1/28/2024",
    "gender": "F"
  }, {
    "name": "Dasi",
    "last name": "Coultass",
    "age": "1/18/2024",
    "gender": "F"
  }, {
    "name": "Hayden",
    "last name": "Whyborne",
    "age": "1/23/2024",
    "gender": "M"
  }, {
    "name": "Muriel",
    "last name": "Cayley",
    "age": "12/1/2023",
    "gender": "F"
  }, {
    "name": "Maximilien",
    "last name": "Blasoni",
    "age": "11/20/2023",
    "gender": "M"
  }, {
    "name": "Carrissa",
    "last name": "Moreby",
    "age": "11/7/2023",
    "gender": "F"
  }, {
    "name": "Marvin",
    "last name": "Geharke",
    "age": "2/26/2024",
    "gender": "M"
  }, {
    "name": "Bonnibelle",
    "last name": "Lesley",
    "age": "10/23/2023",
    "gender": "F"
  }, {
    "name": "Reggie",
    "last name": "Henriquet",
    "age": "12/18/2023",
    "gender": "F"
  }, {
    "name": "Iseabal",
    "last name": "Filan",
    "age": "1/11/2024",
    "gender": "F"
  }, {
    "name": "Brigg",
    "last name": "Cornfoot",
    "age": "10/6/2023",
    "gender": "M"
  }, {
    "name": "Gerrard",
    "last name": "Soane",
    "age": "10/20/2023",
    "gender": "M"
  }, {
    "name": "Jaquelin",
    "last name": "Fearnside",
    "age": "11/18/2023",
    "gender": "F"
  }, {
    "name": "Corey",
    "last name": "Malpas",
    "age": "5/3/2023",
    "gender": "M"
  }, {
    "name": "Gar",
    "last name": "Roomes",
    "age": "3/25/2023",
    "gender": "M"
  }, {
    "name": "Moises",
    "last name": "Ladel",
    "age": "2/2/2024",
    "gender": "M"
  }, {
    "name": "Karol",
    "last name": "Willoughby",
    "age": "10/16/2023",
    "gender": "F"
  }, {
    "name": "Nari",
    "last name": "Sporner",
    "age": "8/1/2023",
    "gender": "F"
  }, {
    "name": "Trudie",
    "last name": "Vedenichev",
    "age": "7/28/2023",
    "gender": "F"
  }, {
    "name": "Archibold",
    "last name": "Crews",
    "age": "10/27/2023",
    "gender": "M"
  }, {
    "name": "Rowney",
    "last name": "Denyukin",
    "age": "9/20/2023",
    "gender": "M"
  }, {
    "name": "Lurleen",
    "last name": "Ottery",
    "age": "7/20/2023",
    "gender": "F"
  }, {
    "name": "Allyson",
    "last name": "Attwater",
    "age": "4/28/2023",
    "gender": "F"
  }, {
    "name": "Moyra",
    "last name": "Liggett",
    "age": "10/15/2023",
    "gender": "F"
  }, {
    "name": "Ritchie",
    "last name": "Quarless",
    "age": "6/17/2023",
    "gender": "M"
  }, {
    "name": "Ronni",
    "last name": "Conechie",
    "age": "3/21/2023",
    "gender": "F"
  }, {
    "name": "Kirby",
    "last name": "Innis",
    "age": "1/15/2024",
    "gender": "M"
  }, {
    "name": "Jozef",
    "last name": "Barok",
    "age": "10/8/2023",
    "gender": "M"
  }, {
    "name": "Berty",
    "last name": "McAtamney",
    "age": "8/22/2023",
    "gender": "M"
  }, {
    "name": "Hatti",
    "last name": "Maggiore",
    "age": "9/8/2023",
    "gender": "F"
  }, {
    "name": "Kev",
    "last name": "Warby",
    "age": "12/17/2023",
    "gender": "M"
  }, {
    "name": "Thaddeus",
    "last name": "Boliver",
    "age": "2/6/2024",
    "gender": "M"
  }, {
    "name": "Maurise",
    "last name": "Oldford",
    "age": "4/3/2023",
    "gender": "F"
  }, {
    "name": "Salomi",
    "last name": "Igo",
    "age": "6/21/2023",
    "gender": "F"
  }, {
    "name": "Antonius",
    "last name": "Harback",
    "age": "10/22/2023",
    "gender": "M"
  }, {
    "name": "Stoddard",
    "last name": "Luther",
    "age": "4/30/2023",
    "gender": "F"
  }, {
    "name": "Ansell",
    "last name": "Caw",
    "age": "8/27/2023",
    "gender": "M"
  }, {
    "name": "Vidovic",
    "last name": "Pettie",
    "age": "2/17/2024",
    "gender": "M"
  }, {
    "name": "Roz",
    "last name": "Maysor",
    "age": "4/21/2023",
    "gender": "F"
  }, {
    "name": "Ade",
    "last name": "Tuttiett",
    "age": "1/19/2024",
    "gender": "M"
  }, {
    "name": "Web",
    "last name": "Godley",
    "age": "9/3/2023",
    "gender": "M"
  }, {
    "name": "Nesta",
    "last name": "Goggan",
    "age": "4/11/2023",
    "gender": "F"
  }, {
    "name": "Meade",
    "last name": "Rihosek",
    "age": "8/15/2023",
    "gender": "M"
  }, {
    "name": "Antoine",
    "last name": "Confait",
    "age": "7/3/2023",
    "gender": "M"
  }, {
    "name": "Kara-lynn",
    "last name": "Gladdifh",
    "age": "4/18/2023",
    "gender": "F"
  }, {
    "name": "Daniel",
    "last name": "Bampford",
    "age": "6/3/2023",
    "gender": "M"
  }, {
    "name": "Pieter",
    "last name": "Cumberland",
    "age": "5/23/2023",
    "gender": "M"
  }, {
    "name": "Juliana",
    "last name": "Jouanny",
    "age": "12/26/2023",
    "gender": "F"
  }, {
    "name": "Tiena",
    "last name": "Lillyman",
    "age": "9/18/2023",
    "gender": "F"
  }, {
    "name": "Lezlie",
    "last name": "Wigzell",
    "age": "1/12/2024",
    "gender": "F"
  }, {
    "name": "Ruperta",
    "last name": "Pendock",
    "age": "8/4/2023",
    "gender": "F"
  }, {
    "name": "Joscelin",
    "last name": "Tungate",
    "age": "3/10/2024",
    "gender": "F"
  }, {
    "name": "Paolo",
    "last name": "Caplan",
    "age": "6/16/2023",
    "gender": "M"
  }, {
    "name": "Issie",
    "last name": "Defau",
    "age": "5/15/2023",
    "gender": "F"
  }, {
    "name": "Graig",
    "last name": "McCarle",
    "age": "5/10/2023",
    "gender": "M"
  }, {
    "name": "Eddy",
    "last name": "Soles",
    "age": "8/12/2023",
    "gender": "M"
  }, {
    "name": "Hatty",
    "last name": "Oliffe",
    "age": "5/8/2023",
    "gender": "F"
  }, {
    "name": "Otes",
    "last name": "Frowd",
    "age": "11/26/2023",
    "gender": "M"
  }, {
    "name": "Carlo",
    "last name": "Marmion",
    "age": "6/21/2023",
    "gender": "M"
  }, {
    "name": "Claudius",
    "last name": "Coggen",
    "age": "9/18/2023",
    "gender": "M"
  }, {
    "name": "Stanleigh",
    "last name": "Vasilechko",
    "age": "12/28/2023",
    "gender": "M"
  }, {
    "name": "Rosalyn",
    "last name": "Jarrelt",
    "age": "5/20/2023",
    "gender": "F"
  }, {
    "name": "Devonna",
    "last name": "Ickovitz",
    "age": "9/20/2023",
    "gender": "F"
  }, {
    "name": "Huntlee",
    "last name": "Witul",
    "age": "11/21/2023",
    "gender": "M"
  }, {
    "name": "Pooh",
    "last name": "Meininking",
    "age": "10/14/2023",
    "gender": "F"
  }, {
    "name": "Whitman",
    "last name": "Seccombe",
    "age": "8/30/2023",
    "gender": "M"
  }, {
    "name": "Redford",
    "last name": "Lorraine",
    "age": "12/24/2023",
    "gender": "M"
  }, {
    "name": "Aggy",
    "last name": "Ciccarello",
    "age": "7/7/2023",
    "gender": "F"
  }, {
    "name": "Gilles",
    "last name": "Maevela",
    "age": "1/30/2024",
    "gender": "M"
  }, {
    "name": "Jerri",
    "last name": "Heephy",
    "age": "2/18/2024",
    "gender": "M"
  }, {
    "name": "Valerie",
    "last name": "Whorlow",
    "age": "5/19/2023",
    "gender": "F"
  }, {
    "name": "Lani",
    "last name": "Kryszkiecicz",
    "age": "4/30/2023",
    "gender": "F"
  }, {
    "name": "Erhard",
    "last name": "Mortel",
    "age": "3/7/2024",
    "gender": "M"
  }, {
    "name": "Deane",
    "last name": "Kelson",
    "age": "10/2/2023",
    "gender": "M"
  }, {
    "name": "Geoff",
    "last name": "Cardno",
    "age": "5/15/2023",
    "gender": "M"
  }, {
    "name": "Derry",
    "last name": "Tsarovic",
    "age": "5/19/2023",
    "gender": "M"
  }, {
    "name": "Alfie",
    "last name": "Fewkes",
    "age": "4/2/2023",
    "gender": "M"
  }, {
    "name": "Kittie",
    "last name": "Kunert",
    "age": "10/21/2023",
    "gender": "F"
  }, {
    "name": "Ax",
    "last name": "Pohlke",
    "age": "9/28/2023",
    "gender": "M"
  }, {
    "name": "Babs",
    "last name": "Jephcott",
    "age": "11/20/2023",
    "gender": "F"
  }, {
    "name": "Ev",
    "last name": "Keggins",
    "age": "9/14/2023",
    "gender": "M"
  }, {
    "name": "Gretchen",
    "last name": "Burnsides",
    "age": "4/23/2023",
    "gender": "F"
  }, {
    "name": "Robbie",
    "last name": "Toms",
    "age": "3/31/2023",
    "gender": "M"
  }, {
    "name": "Gerianna",
    "last name": "Madden",
    "age": "12/8/2023",
    "gender": "F"
  }, {
    "name": "Henry",
    "last name": "Goymer",
    "age": "2/17/2024",
    "gender": "M"
  }, {
    "name": "Kermy",
    "last name": "Whiffen",
    "age": "7/15/2023",
    "gender": "M"
  }, {
    "name": "Corene",
    "last name": "Jansa",
    "age": "11/2/2023",
    "gender": "F"
  }, {
    "name": "Odetta",
    "last name": "Rechert",
    "age": "11/26/2023",
    "gender": "F"
  }, {
    "name": "Alexis",
    "last name": "Pleace",
    "age": "3/31/2023",
    "gender": "M"
  }, {
    "name": "Nerta",
    "last name": "Heningham",
    "age": "11/6/2023",
    "gender": "F"
  }, {
    "name": "Hermina",
    "last name": "Van Arsdall",
    "age": "3/14/2023",
    "gender": "F"
  }, {
    "name": "Maurice",
    "last name": "Mullany",
    "age": "2/4/2024",
    "gender": "M"
  }, {
    "name": "Innis",
    "last name": "GiacobbiniJacob",
    "age": "10/18/2023",
    "gender": "M"
  }]

  console.table(persons);