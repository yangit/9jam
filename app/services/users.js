//This file mocks user database.
//Take a few arrays, shuffle them around. Push results to angular.
angular.module('9jam')
    .factory('Users', function (Defaults,Utils) {
        var defaults = Defaults.get();
        var utils = Utils.get();
        var names = {};
        names.girls = ['Emma',
            'Isabella',
            'Olivia',
            'Ava',
            'Emily',
            'Abigail',
            'Mia',
            'Madison',
            'Elizabeth',
            'Chloe',
            'Ella',
            'Avery',
            'Addison',
            'Aubrey',
            'Lily',
            'Natalie',
            'Sofia',
            'Charlotte',
            'Zoey',
            'Grace',
            'Hannah',
            'Amelia',
            'Harper',
            'Lillian',
            'Samantha',
            'Evelyn',
            'Victoria',
            'Brooklyn',
            'Zoe',
            'Layla',
            'Hailey',
            'Leah',
            'Kaylee',
            'Anna',
            'Aaliyah',
            'Gabriella',
            'Allison',
            'Nevaeh',
            'Alexis',
            'Audrey',
            'Savannah',
            'Sarah',
            'Alyssa',
            'Claire',
            'Taylor',
            'Riley',
            'Camila',
            'Arianna',
            'Ashley',
            'Brianna',
            'Sophie',
            'Peyton',
            'Bella',
            'Khloe',
            'Genesis',
            'Alexa',
            'Serenity',
            'Kylie',
            'Aubree',
            'Scarlett',
            'Stella',
            'Maya',
            'Katherine',
            'Julia',
            'Lucy',
            'Madelyn',
            'Autumn',
            'Makayla',
            'Kayla',
            'Mackenzie',
            'Lauren',
            'Gianna',
            'Ariana',
            'Faith',
            'Alexandra',
            'Melanie',
            'Sydney',
            'Bailey',
            'Caroline',
            'Naomi',
            'Morgan',
            'Kennedy',
            'Ellie',
            'Jasmine',
            'Eva',
            'Skylar',
            'Kimberly',
            'Violet',
            'Molly',
            'Aria',
            'Jocelyn',
            'Trinity',
            'London',
            'Lydia',
            'Madeline',
            'Reagan',
            'Piper',
            'Andrea',
            'Annabelle',
            'Maria',
            'Brooke',
            'Payton',
            'Paisley',
            'Paige',
            'Ruby',
            'Nora',
            'Mariah',
            'Rylee',
            'Lilly',
            'Brielle',
            'Jade',
            'Destiny',
            'Nicole',
            'Mila',
            'Kendall',
            'Liliana',
            'Kaitlyn',
            'Natalia',
            'Sadie',
            'Jordyn',
            'Vanessa',
            'Mary',
            'Mya',
            'Penelope',
            'Isabelle',
            'Alice',
            'Reese',
            'Gabrielle',
            'Hadley',
            'Katelyn',
            'Angelina',
            'Rachel',
            'Isabel',
            'Eleanor',
            'Clara',
            'Brooklynn',
            'Jessica',
            'Elena',
            'Aliyah',
            'Vivian',
            'Laila',
            'Sara',
            'Amy',
            'Eliana',
            'Lyla',
            'Juliana',
            'Valeria',
            'Adriana',
            'Makenzie',
            'Elise',
            'Mckenzie',
            'Quinn',
            'Delilah',
            'Cora',
            'Kylee',
            'Rebecca',
            'Gracie',
            'Izabella',
            'Josephine',
            'Alaina',
            'Michelle',
            'Jennifer',
            'Eden',
            'Valentina',
            'Aurora',
            'Catherine',
            'Stephanie',
            'Valerie',
            'Jayla',
            'Willow',
            'Daisy',
            'Alana',
            'Melody',
            'Hazel',
            'Summer',
            'Melissa',
            'Margaret',
            'Kinsley',
            'Kinley',
            'Ariel',
            'Lila',
            'Giselle',
            'Ryleigh',
            'Haley',
            'Julianna',
            'Ivy',
            'Alivia',
            'Brynn',
            'Keira',
            'Daniela',
            'Aniyah',
            'Angela',
            'Kate',
            'Londyn',
            'Hayden',
            'Harmony',
            'Adalyn',
            'Megan',
            'Allie',
            'Gabriela',
            'Alayna',
            'Presley',
            'Jenna',
            'Alexandria',
            'Ashlyn',
            'Adrianna',
            'Jada',
            'Fiona',
            'Norah',
            'Emery',
            'Maci',
            'Miranda',
            'Ximena',
            'Amaya',
            'Cecilia',
            'Ana',
            'Shelby',
            'Katie',
            'Hope',
            'Callie',
            'Jordan',
            'Luna',
            'Leilani',
            'Eliza',
            'Mckenna',
            'Angel',
            'Genevieve',
            'Makenna',
            'Isla',
            'Lola',
            'Danielle',
            'Chelsea',
            'Leila',
            'Tessa',
            'Adelyn',
            'Camille',
            'Mikayla',
            'Adeline',
            'Adalynn',
            'Sienna',
            'Esther',
            'Jacqueline',
            'Emerson',
            'Arabella',
            'Maggie',
            'Athena',
            'Lucia',
            'Lexi',
            'Ayla',
            'Diana',
            'Alexia',
            'Juliet',
            'Josie',
            'Allyson',
            'Addyson',
            'Delaney',
            'Teagan',
            'Marley',
            'Amber',
            'Rose',
            'Erin',
            'Leslie',
            'Kayleigh',
            'Amanda',
            'Kathryn',
            'Kelsey',
            'Emilia',
            'Alina',
            'Kenzie',
            'Kaydence',
            'Alicia',
            'Alison',
            'Paris',
            'Sabrina',
            'Ashlynn',
            'Lilliana',
            'Sierra',
            'Cassidy',
            'Laura',
            'Alondra',
            'Iris',
            'Kyla',
            'Christina',
            'Carly',
            'Jillian',
            'Madilyn',
            'Kyleigh',
            'Madeleine',
            'Cadence',
            'Nina',
            'Evangeline',
            'Nadia',
            'Raegan',
            'Lyric',
            'Giuliana',
            'Briana',
            'Georgia',
            'Yaretzi',
            'Elliana',
            'Haylee',
            'Fatima',
            'Phoebe',
            'Selena',
            'Charlie',
            'Dakota',
            'Annabella',
            'Abby',
            'Daniella',
            'Juliette',
            'Lilah',
            'Bianca',
            'Mariana',
            'Miriam',
            'Parker',
            'Veronica',
            'Gemma',
            'Noelle',
            'Cheyenne',
            'Marissa',
            'Heaven',
            'Vivienne',
            'Brynlee',
            'Joanna',
            'Mallory',
            'Aubrie',
            'Journey',
            'Nyla',
            'Cali',
            'Tatum',
            'Carmen',
            'Gia',
            'Jazmine',
            'Heidi',
            'Miley',
            'Baylee',
            'Elaina',
            'Macy',
            'Ainsley',
            'Jane',
            'Raelynn',
            'Anastasia',
            'Adelaide',
            'Ruth',
            'Camryn',
            'Kiara',
            'Alessandra',
            'Hanna',
            'Finley',
            'Maddison',
            'Lia',
            'Bethany',
            'Karen',
            'Kelly',
            'Malia',
            'Jazmin',
            'Jayda',
            'Esmeralda',
            'Kira',
            'Lena',
            'Kamryn',
            'Kamila',
            'Karina',
            'Eloise',
            'Kara',
            'Elisa',
            'Rylie',
            'Olive',
            'Nayeli',
            'Tiffany',
            'Macie',
            'Skyler',
            'Addisyn',
            'Angelica',
            'Briella',
            'Fernanda',
            'Annie',
            'Maliyah',
            'Amiyah',
            'Jayden',
            'Charlee',
            'Caitlyn',
            'Elle',
            'Crystal',
            'Julie',
            'Imani',
            'Kendra',
            'Talia',
            'Angelique',
            'Jazlyn',
            'Guadalupe',
            'Alejandra',
            'Emely',
            'Lucille',
            'Anya',
            'April',
            'Elsie',
            'Madelynn',
            'Myla',
            'Julissa',
            'Scarlet',
            'Helen',
            'Breanna',
            'Kyra',
            'Madisyn',
            'Rosalie',
            'Brittany',
            'Brylee',
            'Jayleen',
            'Arielle',
            'Karla',
            'Kailey',
            'Arya',
            'Sarai',
            'Harley',
            'Miracle',
            'Kaelyn',
            'Kali',
            'Cynthia',
            'Daphne',
            'Aleah',
            'Caitlin',
            'Cassandra',
            'Holly',
            'Janelle',
            'Marilyn',
            'Katelynn',
            'Kaylie',
            'Itzel',
            'Carolina',
            'Bristol',
            'Haven',
            'Michaela',
            'Monica',
            'June',
            'Janiyah',
            'Camilla',
            'Jamie',
            'Rebekah',
            'Audrina',
            'Dayana',
            'Lana',
            'Serena',
            'Tiana',
            'Nylah',
            'Braelyn',
            'Savanna',
            'Skye',
            'Raelyn',
            'Madalyn',
            'Sasha',
            'Perla',
            'Bridget',
            'Aniya',
            'Rowan',
            'Logan',
            'Mckinley',
            'Averie',
            'Jaylah',
            'Aylin',
            'Joselyn',
            'Nia',
            'Hayley',
            'Lilian',
            'Adelynn',
            'Jaliyah',
            'Kassidy',
            'Kaylin',
            'Kadence',
            'Celeste',
            'Jaelyn',
            'Zariah',
            'Tatiana',
            'Jimena',
            'Lilyana',
            'Anaya',
            'Catalina',
            'Viviana',
            'Cataleya',
            'Sloane',
            'Courtney',
            'Johanna',
            'Amari',
            'Melany',
            'Anabelle',
            'Francesca',
            'Ada',
            'Alanna',
            'Priscilla',
            'Danna',
            'Angie',
            'Kailyn',
            'Lacey',
            'Sage',
            'Lillie',
            'Brinley',
            'Caylee',
            'Joy',
            'Kenley',
            'Vera'
        ]
        names.boys = ['Mason',
            'Ethan',
            'Noah',
            'William',
            'Liam',
            'Jayden',
            'Michael',
            'Alexander',
            'Aiden',
            'Daniel',
            'Matthew',
            'Elijah',
            'James',
            'Anthony',
            'Benjamin',
            'Joshua',
            'Andrew',
            'David',
            'Joseph',
            'Logan',
            'Jackson',
            'Christopher',
            'Gabriel',
            'Samuel',
            'Ryan',
            'Lucas',
            'John',
            'Nathan',
            'Isaac',
            'Dylan',
            'Caleb',
            'Christian',
            'Landon',
            'Jonathan',
            'Carter',
            'Luke',
            'Owen',
            'Brayden',
            'Gavin',
            'Wyatt',
            'Isaiah',
            'Henry',
            'Eli',
            'Hunter',
            'Jack',
            'Evan',
            'Jordan',
            'Nicholas',
            'Tyler',
            'Aaron',
            'Jeremiah',
            'Julian',
            'Cameron',
            'Levi',
            'Brandon',
            'Angel',
            'Austin',
            'Connor',
            'Adrian',
            'Robert',
            'Charles',
            'Thomas',
            'Sebastian',
            'Colton',
            'Jaxon',
            'Kevin',
            'Zachary',
            'Ayden',
            'Dominic',
            'Blake',
            'Jose',
            'Oliver',
            'Justin',
            'Bentley',
            'Jason',
            'Chase',
            'Ian',
            'Josiah',
            'Parker',
            'Xavier',
            'Adam',
            'Cooper',
            'Nathaniel',
            'Grayson',
            'Jace',
            'Carson',
            'Nolan',
            'Tristan',
            'Luis',
            'Brody',
            'Juan',
            'Hudson',
            'Bryson',
            'Carlos',
            'Easton',
            'Damian',
            'Alex',
            'Kayden',
            'Ryder',
            'Jesus',
            'Cole',
            'Micah',
            'Vincent',
            'Max',
            'Jaxson',
            'Eric',
            'Asher',
            'Hayden',
            'Diego',
            'Miles',
            'Steven',
            'Ivan',
            'Elias',
            'Aidan',
            'Maxwell',
            'Bryce',
            'Antonio',
            'Giovanni',
            'Timothy',
            'Bryan',
            'Santiago',
            'Colin',
            'Richard',
            'Braxton',
            'Kaleb',
            'Kyle',
            'Kaden',
            'Preston',
            'Miguel',
            'Jonah',
            'Lincoln',
            'Riley',
            'Leo',
            'Victor',
            'Brady',
            'Jeremy',
            'Mateo',
            'Brian',
            'Jaden',
            'Ashton',
            'Patrick',
            'Declan',
            'Sean',
            'Joel',
            'Gael',
            'Sawyer',
            'Alejandro',
            'Marcus',
            'Leonardo',
            'Jesse',
            'Caden',
            'Jake',
            'Kaiden',
            'Wesley',
            'Camden',
            'Edward',
            'Brantley',
            'Roman',
            'Axel',
            'Silas',
            'Jude',
            'Grant',
            'Cayden',
            'Emmanuel',
            'George',
            'Maddox',
            'Malachi',
            'Bradley',
            'Alan',
            'Weston',
            'Gage',
            'Devin',
            'Greyson',
            'Kenneth',
            'Mark',
            'Oscar',
            'Tanner',
            'Rylan',
            'Nicolas',
            'Harrison',
            'Derek',
            'Peyton',
            'Ezra',
            'Tucker',
            'Emmett',
            'Avery',
            'Cody',
            'Calvin',
            'Andres',
            'Jorge',
            'Abel',
            'Paul',
            'Abraham',
            'Kai',
            'Collin',
            'Theodore',
            'Ezekiel',
            'Omar',
            'Jayce',
            'Conner',
            'Bennett',
            'Trevor',
            'Eduardo',
            'Peter',
            'Maximus',
            'Jaiden',
            'Jameson',
            'Seth',
            'Kingston',
            'Javier',
            'Travis',
            'Garrett',
            'Everett',
            'Graham',
            'Xander',
            'Cristian',
            'Damien',
            'Ryker',
            'Griffin',
            'Corbin',
            'Myles',
            'Luca',
            'Zane',
            'Francisco',
            'Ricardo',
            'Alexis',
            'Stephen',
            'Zayden',
            'Iker',
            'Drake',
            'Lukas',
            'Charlie',
            'Spencer',
            'Zion',
            'Erick',
            'Josue',
            'Jeffrey',
            'Trenton',
            'Chance',
            'Paxton',
            'Elliot',
            'Fernando',
            'Keegan',
            'Landen',
            'Manuel',
            'Amir',
            'Shane',
            'Raymond',
            'Zander',
            'Andre',
            'Israel',
            'Mario',
            'Cesar',
            'Simon',
            'King',
            'Jaylen',
            'Johnathan',
            'Troy',
            'Dean',
            'Clayton',
            'Dominick',
            'Tyson',
            'Jasper',
            'Martin',
            'Kyler',
            'Hector',
            'Edgar',
            'Marco',
            'Cash',
            'Edwin',
            'Shawn',
            'Judah',
            'Andy',
            'Donovan',
            'Kameron',
            'Elliott',
            'Dante',
            'Braylon',
            'Anderson',
            'Johnny',
            'Drew',
            'Sergio',
            'Cruz',
            'Dalton',
            'Rafael',
            'Gregory',
            'Lane',
            'Erik',
            'Skyler',
            'Finn',
            'Reid',
            'Gunner',
            'Jared',
            'Caiden',
            'Holden',
            'Emilio',
            'Fabian',
            'Aden',
            'Brendan',
            'Rowan',
            'Emiliano',
            'Braden',
            'Jase',
            'Jax',
            'Emanuel',
            'Lorenzo',
            'Roberto',
            'Amari',
            'Angelo',
            'Beau',
            'Louis',
            'Derrick',
            'Beckett',
            'Dawson',
            'Felix',
            'Pedro',
            'Brennan',
            'Frank',
            'Maximiliano',
            'Quinn',
            'Dallas',
            'Romeo',
            'Braylen',
            'Joaquin',
            'Waylon',
            'Allen',
            'Colt',
            'Ruben',
            'Milo',
            'Julius',
            'Grady',
            'August',
            'Dakota',
            'Cohen',
            'Brock',
            'Kellen',
            'Brycen',
            'Desmond',
            'Malik',
            'Colby',
            'Nehemiah',
            'Leland',
            'Jett',
            'Marcos',
            'Taylor',
            'Karter',
            'Marshall',
            'Ty',
            'Phillip',
            'Corey',
            'Ali',
            'Adan',
            'Dillon',
            'Arthur',
            'Maverick',
            'Leon',
            'Brooks',
            'Tristen',
            'Titus',
            'Keith',
            'Dexter',
            'Karson',
            'Emerson',
            'Landyn',
            'Armando',
            'Pablo',
            'Knox',
            'Enrique',
            'Cade',
            'Gerardo',
            'Reed',
            'Kellan',
            'Jayson',
            'Barrett',
            'Walter',
            'Dustin',
            'Kolton',
            'Ronald',
            'Trent',
            'Phoenix',
            'Ismael',
            'Julio',
            'Danny',
            'Kason',
            'Scott',
            'Messiah',
            'Jay',
            'Esteban',
            'Gideon',
            'Tate',
            'Abram',
            'Trey',
            'Keaton',
            'Jakob',
            'Jaime',
            'Devon',
            'Braydon',
            'Izaiah',
            'Donald',
            'Albert',
            'Raul',
            'Darius',
            'Archer',
            'Colten',
            'Damon',
            'River',
            'Gustavo',
            'Philip',
            'Atticus',
            'Walker',
            'Matteo',
            'Randy',
            'Saul',
            'Rocco',
            'Davis',
            'Enzo',
            'Noel',
            'Orion',
            'Jamari',
            'Remington',
            'Bruce',
            'Darren',
            'Larry',
            'Mathew',
            'Russell',
            'Dennis',
            'Tony',
            'Chris',
            'Porter',
            'Rodrigo',
            'Armani',
            'Zaiden',
            'Kade',
            'Ari',
            'Hugo',
            'Zachariah',
            'Kamden',
            'Mohamed',
            'Quentin',
            'Solomon',
            'Curtis',
            'Leonel',
            'Issac',
            'Khalil',
            'Alberto',
            'Jerry',
            'Alec',
            'Gianni',
            'Moises',
            'Gunnar',
            'Adriel',
            'Lawrence',
            'Alijah',
            'Chandler',
            'Ronan',
            'Prince',
            'Payton',
            'Arturo',
            'Jimmy',
            'Orlando',
            'Ricky',
            'Mitchell',
            'Maximilian',
            'Cason',
            'Malcolm',
            'Muhammad',
            'Kasen',
            'Marvin',
            'Jalen',
            'Cyrus',
            'Mauricio',
            'Warren',
            'Jonas',
            'Kendrick',
            'Rhys',
            'Dane',
            'Ryland',
            'Pierce',
            'Johan',
            'Rory',
            'Uriel',
            'Major',
            'Bryant',
            'Reece',
            'Casey',
            'Ibrahim',
            'Nikolas',
            'Arjun',
            'Sullivan',
            'Finnegan',
            'Alfredo',
            'Royce',
            'Ahmed',
            'Amare',
            'Lance',
            'Ramon',
            'Jamison',
            'Brayan',
            'Brenden']
        names.last = ['SMITH',
            'JOHNSON',
            'WILLIAMS',
            'JONES',
            'BROWN',
            'DAVIS',
            'MILLER',
            'WILSON',
            'MOORE',
            'TAYLOR',
            'ANDERSON',
            'THOMAS',
            'JACKSON',
            'WHITE',
            'HARRIS',
            'MARTIN',
            'THOMPSON',
            'GARCIA',
            'MARTINEZ',
            'ROBINSON',
            'CLARK',
            'RODRIGUEZ',
            'LEWIS',
            'LEE',
            'WALKER',
            'HALL',
            'ALLEN',
            'YOUNG',
            'HERNANDEZ',
            'KING',
            'WRIGHT',
            'LOPEZ',
            'HILL',
            'SCOTT',
            'GREEN',
            'ADAMS',
            'BAKER',
            'GONZALEZ',
            'NELSON',
            'CARTER',
            'MITCHELL',
            'PEREZ',
            'ROBERTS',
            'TURNER',
            'PHILLIPS',
            'CAMPBELL',
            'PARKER',
            'EVANS',
            'EDWARDS',
            'COLLINS',
            'STEWART',
            'SANCHEZ',
            'MORRIS',
            'ROGERS',
            'REED',
            'COOK',
            'MORGAN',
            'BELL',
            'MURPHY',
            'BAILEY',
            'RIVERA',
            'COOPER',
            'RICHARDSON',
            'COX',
            'HOWARD',
            'WARD',
            'TORRES',
            'PETERSON',
            'GRAY',
            'RAMIREZ',
            'JAMES',
            'WATSON',
            'BROOKS',
            'KELLY',
            'SANDERS',
            'PRICE',
            'BENNETT',
            'WOOD',
            'BARNES',
            'ROSS',
            'HENDERSON',
            'COLEMAN',
            'JENKINS',
            'PERRY',
            'POWELL',
            'LONG',
            'PATTERSON',
            'HUGHES',
            'FLORES',
            'WASHINGTON',
            'BUTLER',
            'SIMMONS',
            'FOSTER',
            'GONZALES',
            'BRYANT',
            'ALEXANDER',
            'RUSSELL',
            'GRIFFIN',
            'DIAZ',
            'HAYES',
            'MYERS',
            'FORD',
            'HAMILTON',
            'GRAHAM',
            'SULLIVAN',
            'WALLACE',
            'WOODS',
            'COLE',
            'WEST',
            'JORDAN',
            'OWENS',
            'REYNOLDS',
            'FISHER',
            'ELLIS',
            'HARRISON',
            'GIBSON',
            'MCDONALD',
            'CRUZ',
            'MARSHALL',
            'ORTIZ',
            'GOMEZ',
            'MURRAY',
            'FREEMAN',
            'WELLS',
            'WEBB',
            'SIMPSON',
            'STEVENS',
            'TUCKER',
            'PORTER',
            'HUNTER',
            'HICKS',
            'CRAWFORD',
            'HENRY',
            'BOYD',
            'MASON',
            'MORALES',
            'KENNEDY',
            'WARREN',
            'DIXON',
            'RAMOS',
            'REYES',
            'BURNS',
            'GORDON',
            'SHAW',
            'HOLMES',
            'RICE',
            'ROBERTSON',
            'HUNT',
            'BLACK',
            'DANIELS',
            'PALMER',
            'MILLS',
            'NICHOLS',
            'GRANT',
            'KNIGHT',
            'FERGUSON',
            'ROSE',
            'STONE',
            'HAWKINS',
            'DUNN',
            'PERKINS',
            'HUDSON',
            'SPENCER',
            'GARDNER',
            'STEPHENS',
            'PAYNE',
            'PIERCE',
            'BERRY',
            'MATTHEWS',
            'ARNOLD',
            'WAGNER',
            'WILLIS',
            'RAY',
            'WATKINS',
            'OLSON',
            'CARROLL',
            'DUNCAN',
            'SNYDER',
            'HART',
            'CUNNINGHAM',
            'BRADLEY',
            'LANE',
            'ANDREWS',
            'RUIZ',
            'HARPER',
            'FOX',
            'RILEY',
            'ARMSTRONG',
            'CARPENTER',
            'WEAVER',
            'GREENE',
            'LAWRENCE',
            'ELLIOTT',
            'CHAVEZ',
            'SIMS',
            'AUSTIN',
            'PETERS',
            'KELLEY',
            'FRANKLIN',
            'LAWSON',
            'FIELDS',
            'GUTIERREZ',
            'RYAN',
            'SCHMIDT',
            'CARR',
            'VASQUEZ',
            'CASTILLO',
            'WHEELER',
            'CHAPMAN',
            'OLIVER',
            'MONTGOMERY',
            'RICHARDS',
            'WILLIAMSON',
            'JOHNSTON',
            'BANKS',
            'MEYER',
            'BISHOP',
            'MCCOY',
            'HOWELL',
            'ALVAREZ',
            'MORRISON',
            'HANSEN',
            'FERNANDEZ',
            'GARZA',
            'HARVEY',
            'LITTLE',
            'BURTON',
            'STANLEY',
            'NGUYEN',
            'GEORGE',
            'JACOBS',
            'REID',
            'KIM',
            'FULLER',
            'LYNCH',
            'DEAN',
            'GILBERT',
            'GARRETT',
            'ROMERO',
            'WELCH',
            'LARSON',
            'FRAZIER',
            'BURKE',
            'HANSON',
            'DAY',
            'MENDOZA',
            'MORENO',
            'BOWMAN',
            'MEDINA',
            'FOWLER',
            'BREWER',
            'HOFFMAN',
            'CARLSON',
            'SILVA',
            'PEARSON',
            'HOLLAND',
            'DOUGLAS',
            'FLEMING',
            'JENSEN',
            'VARGAS',
            'BYRD',
            'DAVIDSON',
            'HOPKINS',
            'MAY',
            'TERRY',
            'HERRERA',
            'WADE',
            'SOTO',
            'WALTERS',
            'CURTIS',
            'NEAL',
            'CALDWELL',
            'LOWE',
            'JENNINGS',
            'BARNETT',
            'GRAVES',
            'JIMENEZ',
            'HORTON',
            'SHELTON',
            'BARRETT',
            'OBRIEN',
            'CASTRO',
            'SUTTON',
            'GREGORY',
            'MCKINNEY',
            'LUCAS',
            'MILES',
            'CRAIG',
            'RODRIQUEZ',
            'CHAMBERS',
            'HOLT',
            'LAMBERT',
            'FLETCHER',
            'WATTS',
            'BATES',
            'HALE',
            'RHODES',
            'PENA',
            'BECK',
            'NEWMAN',
            'HAYNES',
            'MCDANIEL',
            'MENDEZ',
            'BUSH',
            'VAUGHN',
            'PARKS',
            'DAWSON',
            'SANTIAGO',
            'NORRIS',
            'HARDY',
            'LOVE',
            'STEELE',
            'CURRY',
            'POWERS',
            'SCHULTZ',
            'BARKER',
            'GUZMAN',
            'PAGE',
            'MUNOZ',
            'BALL',
            'KELLER',
            'CHANDLER',
            'WEBER',
            'LEONARD',
            'WALSH',
            'LYONS',
            'RAMSEY',
            'WOLFE',
            'SCHNEIDER',
            'MULLINS',
            'BENSON',
            'SHARP',
            'BOWEN',
            'DANIEL',
            'BARBER',
            'CUMMINGS',
            'HINES',
            'BALDWIN',
            'GRIFFITH',
            'VALDEZ',
            'HUBBARD',
            'SALAZAR',
            'REEVES',
            'WARNER',
            'STEVENSON',
            'BURGESS',
            'SANTOS',
            'TATE',
            'CROSS',
            'GARNER',
            'MANN',
            'MACK',
            'MOSS',
            'THORNTON',
            'DENNIS',
            'MCGEE',
            'FARMER',
            'DELGADO',
            'AGUILAR',
            'VEGA',
            'GLOVER',
            'MANNING',
            'COHEN',
            'HARMON',
            'RODGERS',
            'ROBBINS',
            'NEWTON',
            'TODD',
            'BLAIR',
            'HIGGINS',
            'INGRAM',
            'REESE',
            'CANNON',
            'STRICKLAND',
            'TOWNSEND',
            'POTTER',
            'GOODWIN',
            'WALTON',
            'ROWE',
            'HAMPTON',
            'ORTEGA',
            'PATTON',
            'SWANSON',
            'JOSEPH',
            'FRANCIS',
            'GOODMAN',
            'MALDONADO',
            'YATES',
            'BECKER',
            'ERICKSON',
            'HODGES',
            'RIOS',
            'CONNER',
            'ADKINS',
            'WEBSTER',
            'NORMAN',
            'MALONE',
            'HAMMOND',
            'FLOWERS',
            'COBB',
            'MOODY',
            'QUINN',
            'BLAKE',
            'MAXWELL',
            'POPE',
            'FLOYD',
            'OSBORNE',
            'PAUL',
            'MCCARTHY',
            'GUERRERO',
            'LINDSEY',
            'ESTRADA',
            'SANDOVAL',
            'GIBBS',
            'TYLER',
            'GROSS',
            'FITZGERALD',
            'STOKES',
            'DOYLE',
            'SHERMAN',
            'SAUNDERS',
            'WISE',
            'COLON',
            'GILL',
            'ALVARADO',
            'GREER',
            'PADILLA',
            'SIMON',
            'WATERS',
            'NUNEZ',
            'BALLARD',
            'SCHWARTZ',
            'MCBRIDE',
            'HOUSTON',
            'CHRISTENSEN',
            'KLEIN',
            'PRATT',
            'BRIGGS',
            'PARSONS',
            'MCLAUGHLIN',
            'ZIMMERMAN',
            'FRENCH',
            'BUCHANAN',
            'MORAN',
            'COPELAND',
            'ROY',
            'PITTMAN',
            'BRADY',
            'MCCORMICK',
            'HOLLOWAY',
            'BROCK',
            'POOLE',
            'FRANK',
            'LOGAN',
            'OWEN',
            'BASS',
            'MARSH',
            'DRAKE',
            'WONG',
            'JEFFERSON',
            'PARK',
            'MORTON',
            'ABBOTT',
            'SPARKS',
            'PATRICK',
            'NORTON',
            'HUFF',
            'CLAYTON',
            'MASSEY',
            'LLOYD',
            'FIGUEROA',
            'CARSON',
            'BOWERS',
            'ROBERSON',
            'BARTON',
            'TRAN',
            'LAMB',
            'HARRINGTON',
            'CASEY',
            'BOONE',
            'CORTEZ',
            'CLARKE',
            'MATHIS',
            'SINGLETON',
            'WILKINS',
            'CAIN',
            'BRYAN',
            'UNDERWOOD',
            'HOGAN',
            'MCKENZIE',
            'COLLIER',
            'LUNA',
            'PHELPS',
            'MCGUIRE',
            'ALLISON',
            'BRIDGES',
            'WILKERSON',
            'NASH',
            'SUMMERS']

        var users = [];
        for (var i = 0; i < 500; i++) {
            var u = JSON.parse(JSON.stringify(defaults.user));
            names.first = (i % 2 == 0 ? names.boys : names.girls);
            u.name.first = utils.rand(names.first);
            u.name.middle = utils.rand(names.first);
            u.name.last = utils.capitalize(utils.rand(names.last).toLowerCase());
            u.name.shy = utils.rand([true, false]);
            u.lang.en = utils.rand([0, 1, 2, 3]);
            u.lang.my = utils.rand([0, 1, 2, 3]);
            u.lang.mn = utils.rand([0, 1, 2, 3]);
            u.lang.tm = utils.rand([0, 1, 2, 3]);
            u.education = utils.rand([0, 1, 2, 3]);
            u.location = utils.rand(defaults.locations);
            u.rate = Math.floor(Math.random() * (90 - 5 + 1)) + 5;
            u.phone = "0" + (Math.floor(Math.random() * 1000000000)).toString();
            u.age = Math.floor(Math.random() * (55 - 18 + 1)) + 18;
            u.lastSeen = utils.randRange(1350000000000,+(new Date()));


            users.push(u);
        }

        // Service logic
        // ...

        // Public API here
        return {
            get: function () {
                return users;
            }
        }

    });