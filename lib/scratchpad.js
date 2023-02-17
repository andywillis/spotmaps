import logr from './logr';

/* spell-checker: disable */
const data = [
  "Affleck, Ben",
  "Alfredson, Tomas",
  "Andersen, Kresten Vestbjerg",
  "Anderson, Paul Thomas",
  "Anderson, Paul W.S.",
  "Anderson, Wes",
  "Andrews, Mark",
  "Aronofsky, Darren",
  "Audiard, Jacques",
  "Avalos, Stefan",
  "Ayer, David",
  "Babluani, Géla",
  "Badham, John",
  "Bagnall, Alison",
  "Barber, Daniel",
  "Barrish, Seth",
  "Bates Jr., Richard",
  "Batmanglij, Zal",
  "Bergman, Ingmar",
  "Biehn, Michael",
  "Bielinsky, Fabián",
  "Birbiglia, Mike",
  "Bird, Brad",
  "Blakeson, J",
  "Bluth, Don",
  "Bogdanovich, Peter",
  "Boorman, John",
  "Bright, Matthew",
  "Brooks, David",
  "Butler, Chris",
  "Byrne, Darragh",
  "Cahill, Mike",
  "Cahn, Edward L.",
  "Cameron, James",
  "Cammell, Donald",
  "Campanella, Juan José",
  "Carax, Leos",
  "Carruth, Shane",
  "Cattet, Hélène",
  "Chandon, Alex",
  "Chapman, Brenda",
  "Chbosky, Stephen",
  "China, Paul",
  "Cholodenko, Lisa",
  "Christoffersen, Thorbjørn",
  "Coen, Ethan",
  "Coen, Joel",
  "Coppola, Francis Ford",
  "Corbijn, Anton",
  "Corbucci, Sergio",
  "Corneau, Alain",
  "Crary, Scott",
  "Cronenberg, David",
  "Cuarón, Alfonso",
  "Dahl, John",
  "Daniel, Rod",
  "Davison, Bruce",
  "Dayton, Jonathan",
  "De Palma, Brian",
  "Derrickson, Scott",
  "Dominik, Andrew",
  "Donovan, Martin",
  "Dougherty, Michael",
  "Duguay, Christian",
  "Dupieux, Quentin",
  "Eng, Dayyan",
  "Faris, Valerie",
  "Felicioli, Jean-Loup",
  "Fell, Sam",
  "Fiennes, Sophie",
  "Fincher, David",
  "Fitzgibbon, Ian",
  "Fleischer, Richard",
  "Fletcher, Dexter",
  "Foenkinos, David",
  "Foenkinos, Stéphane",
  "Forzani, Bruno",
  "Foy, Ciaran",
  "Franco, Jesús",
  "Franju, Georges",
  "Frears, Stephen",
  "Friedkin, William",
  "Fuller, Samuel",
  "Gagnol, Alain",
  "Gallo, Vincent",
  "García, Rodrigo",
  "Gilroy, Tony",
  "Giorgelli, Pablo",
  "Glendening, Jonathan",
  "Gluck, Will",
  "Goddard, Drew",
  "Goldman, Gary",
  "Gondy, Michel",
  "Granik Debra",
  "Green, Tom",
  "Greno,  Nathan",
  "Hallam, Dallas Richard",
  "Hamilton, Guy",
  "Harlin, Renny",
  "Harron, Mary",
  "Hasumi, Eiichiro",
  "Hawkes, Kieron",
  "Heller, Jack",
  "Hellman, Monte",
  "Herzog, Werner",
  "Hill, George Roy",
  "Hill, Walter",
  "Hillcoat, John",
  "Hiroki, Ryuichi",
  "Hodges, Mike",
  "Hoene, Matthias",
  "Hooper, Tobe",
  "Horvath, Patrick",
  "Howard, Byron",
  "Huber, Raitmund",
  "Huston, John",
  "Ishii, Gakuryu",
  "Jacobson, David",
  "Jaeger, Sam",
  "Jarecki, Nicholas",
  "Johnson, Rian",
  "Jones, Duncan",
  "Jordan, Neil",
  "Katz, Aaron",
  "Kaye, Tony",
  "Keith, David Ryan",
  "Kellogg, Ray",
  "Kim, Ki-duk",
  "Kim, Moon-saeng",
  "Koepp, David",
  "Kosinski, Joseph",
  "Krishnan, Tinge",
  "Kwapis, Ken",
  "Kári, Dagur",
  "Lagos, Aimee",
  "Langridge, John",
  "Larsen, Birger",
  "Lee, Dennis",
  "Lepage, Robert",
  "Levinson, Barry",
  "Linklater, Richard",
  "Lipski, Philip Einstein",
  "Lipstadt, Aaron",
  "Loach, Ken",
  "Lonergan, Kenneth",
  "Lorenz, Robert",
  "Lumet, Sidney",
  "Lurie, Rod",
  "Lynch, Jennifer Chambers",
  "López Moctezuma, Juan",
  "MacLean, Andrew Okpeaha",
  "Malick, Terrence",
  "Mann, Michael",
  "Martini, Derick",
  "Mather, James",
  "Maíllo, Kike",
  "McBride, Jim",
  "McCarthy, Thomas",
  "McDonald, Bruce",
  "McKee Lucky",
  "McKee, Lucky",
  "McPherson, Conor",
  "McQuaid, Glenn",
  "McQueen, Steve",
  "McTiernan, John",
  "Meadows, Shane",
  "Melville, Jean-Pierre",
  "Meyer, Russ",
  "Mitchell, John Cameron",
  "Mitchell, Tony",
  "Miyazaki, Goro",
  "Monroe, Steven R.",
  "Moore, Jason",
  "Morneau, Louis",
  "Moss, Craig",
  "Mottern, James",
  "Na, Hong-jin",
  "Naranjo, Gerardo",
  "Nelson, Gary",
  "Newmeyer, Fred C.",
  "Nichols, Jeff",
  "Noé, Gaspar",
  "Nørgaard, Mikkel",
  "Ohtomo, Keishi",
  "Opel, Rishi",
  "Oshii, Mamoru",
  "Ottinger, Ulrike",
  "Ozu, Yasujirô",
  "Palansky, Mark",
  "Parker, Alan",
  "Paxton, Bill",
  "Penney, John",
  "Petit, Christopher",
  "Pollack, Sydney",
  "Polley, Sarah",
  "Powell, Michael",
  "Purcell, Steve",
  "Radnor, Josh",
  "Ray, Fred Olen",
  "Reeves, Michael",
  "Refn, Nicolas Winding",
  "Richter, W.D.",
  "Robinson, Phil Alden",
  "Rodriguez, Boris",
  "Roeg, Nicolas",
  "Ross, Gary",
  "Ruskin, Matt",
  "Russell, Ken",
  "Ruzowitzky, Stefan",
  "Ryuichi Hiroki",
  "Rønning, Joachim",
  "Sadwith, James Steven",
  "Salvadori, Pierre",
  "Samuell, Yann",
  "Sandberg, Espen",
  "Sarafian, Richard C.",
  "Sargent, John",
  "Sarmiento, Valeria",
  "Savoca, Nancy",
  "Sayles, John",
  "Scafaria, Lorene",
  "Schlamme, Thomas",
  "Schlesinger John",
  "Schlesinger, John",
  "Scott, Ridley",
  "Scott, Tony",
  "Seaton, George",
  "Shainberg, Steven",
  "Shelton, Lynn",
  "Shelton, Ron",
  "Siegel, Don",
  "Singh, Tarsem",
  "Smith, Christopher",
  "Smith, Jim Field",
  "Smith, Nicolas",
  "Sobol, Jonathan",
  "Soderberg, Steven",
  "Soderbergh, Steven",
  "St. Leger, Stephen",
  "Stallone, Sylvester",
  "Stanton, Andrew",
  "Stillman, Whit",
  "Strickland, Peter",
  "Suzuki, Noribumi",
  "Svendsen, Stig",
  "Swanberg, Joe",
  "Tarantino, Quentin",
  "Tarkovskiy, Andrey",
  "Tass, Nadia",
  "Taylor, Sam",
  "Thomas, Logan",
  "Thomas, Rebecca",
  "Traill, Phil",
  "Travis, Pete",
  "Trevorrow, Colin",
  "Trier, Joachim",
  "Trumball, Douglas",
  "Tyldum, Morten",
  "Vaughn, Matthew",
  "Vejdelek, Jirí",
  "Vitello, Art",
  "Weaver, David",
  "Weiler, Lance",
  "Weitz, Paul",
  "Wheatley, Ben",
  "Whedon, Joss",
  "Whitton, Margaret",
  "Wilder, Billy",
  "Wilson, Hugh",
  "Winterbottom, Michael",
  "Wise, Robert",
  "Wojcik, Chris",
  "Wright, Jon",
  "Yun, Jong-bin",
  "Zeitlin, Benh",
  "Zinnemann, Fred",
  "de Heer, Rolf",
  "von Trier, Lars",
  "Øvredal, André"
];

data.sort((a, b) => {
  const prepA = a.replaceAll(/[, \.\-]/g, '').toLocaleLowerCase();
  const prepB = b.replaceAll(/[, \.\-]/g, '').toLocaleLowerCase();
  return prepA.toLocaleString(prepB);
});

const out = {};

for (let i = 0; i < data.length; i++) {
  const first = data[i][0].toLocaleLowerCase();
  const key = first.toUpperCase();
  if (!out[key]) out[key] = [];
  out[key].push(data[i]);
}

logr.json(out);