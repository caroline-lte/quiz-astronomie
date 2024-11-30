document.getElementById('startQuiz1').addEventListener('click', startQuizLevel1);
document.getElementById('startQuiz2').addEventListener('click', startQuizLevel2);
document.getElementById('startQuiz3').addEventListener('click', startQuizLevel3);
document.getElementById('startQuiz4').addEventListener('click', startQuizLevel4);
document.getElementById('startQuiz5').addEventListener('click', startQuizLevel5);

// Questions pour le niveau 1 (Facile)
let questionsLevel1 = [

    {
        question: "Combien de planètes composent le système solaire ?",
        choices: ["7", "8", "9", "10"],
        correctAnswer: "8",
        anecdoteCorrect: "Le système solaire est composé de 8 planètes depuis que Pluton a été reclassée en planète naine.",
        anecdoteIncorrect: "La bonne réponse est 8. Pluton est une planète naine depuis 2006.",
        imageUrl:"images/planetes-systeme-solaire.webp"
    },
    {
        question: "Comment s'appelle notre galaxie ?",
        choices: ["Andromède", "Voie Lactée", "Galaxie du Sombrero", "Orion"],
        correctAnswer: "Voie Lactée",
        anecdoteCorrect: "Notre galaxie, la Voie Lactée, contient entre 100 et 400 milliards d'étoiles.",
        anecdoteIncorrect: "La bonne réponse est Voie Lactée, notre galaxie.",
        imageUrl:"images/voie lacté.jpg"
    },
    {
        question: "Quelle étoile est la plus proche de la Terre après le Soleil ?",
        choices: ["Proxima du Centaure", "Sirius", "Vega", "Bételgeuse"],
        correctAnswer: "Proxima du Centaure",
        anecdoteCorrect: "Proxima du Centaure est située à 4,24 années-lumière de nous.",
        anecdoteIncorrect: "La bonne réponse est Proxima du Centaure, l'étoile la plus proche de notre système solaire.",
        imageUrl:"images/proxima.jpeg"
    },
    {
        question: "Qu'est-ce qui se trouve au centre de la Voie Lactée ?",
        choices: ["Un trou noir supermassif", "Une étoile géante", "Un amas d'étoiles", "Une nébuleuse"],
        correctAnswer: "Un trou noir supermassif",
        anecdoteCorrect: "Au centre de la Voie Lactée se trouve Sagittarius A*, un trou noir supermassif dont la masse est environ 4 millions de fois celle du Soleil.",
        anecdoteIncorrect: "La bonne réponse est un trou noir supermassif nommé Sagittarius A*, situé au centre de la Voie Lactée.",
        imageUrl: "images/trou.jpeg" 
    },
    {
        question: "Quel astre est responsable des marées terrestres ?",
        choices: ["Le Soleil", "La Lune", "Mars", "Jupiter"],
        correctAnswer: "La Lune",
        anecdoteCorrect: "La gravité de la Lune est responsable des marées sur Terre.",
        anecdoteIncorrect: "La bonne réponse est La Lune, qui crée les marées grâce à son attraction gravitationnelle.",
        imageUrl:"images/marée.jpg"
    },
    {
        question: "Quelle planète est surnommée la géante bleue ?",
        choices: ["Uranus", "Neptune", "Saturne", "Jupiter"],
        correctAnswer: "Neptune",
        anecdoteCorrect: "Neptune est bleue en raison de la présence de méthane dans son atmosphère.",
        anecdoteIncorrect: "La bonne réponse est Neptune, surnommée la géante bleue.",
        imageUrl: "images/neptune.webp"
    },
    {
        question: "Quelle est la couleur dominante de la planète Uranus ?",
        choices: ["Rouge", "Bleu", "Jaune", "Vert"],
        correctAnswer: "Bleu",
        anecdoteCorrect: "Uranus apparaît bleue en raison du méthane présent dans son atmosphère, qui absorbe la lumière rouge.",
        anecdoteIncorrect: "La bonne réponse est bleu. Le méthane dans l'atmosphère d'Uranus donne à la planète sa teinte bleue.",
        imageUrl: "images/uranus.jpg"
    },
    {
        question: "Comment s'appelle le rover envoyé sur Mars en 2020 par la NASA ?",
        choices: ["Curiosity", "Perseverance", "Spirit", "Opportunity"],
        correctAnswer: "Perseverance",
        anecdoteCorrect: "Le rover Perseverance explore Mars depuis 2021 et recherche des signes de vie ancienne.",
        anecdoteIncorrect: "La bonne réponse est Perseverance, un rover de la NASA lancé en 2020.",
        imageUrl: "images/pers.jpg"
    },
    {
        question: "Quel phénomène explique les éclipses de Soleil ?",
        choices: ["L'alignement du Soleil, de la Terre et de Mars", "L'alignement du Soleil, de la Terre et de la Lune", "L'ombre projetée par la Terre sur le Soleil", "La rotation rapide du Soleil"],
        correctAnswer: "L'alignement du Soleil, de la Terre et de la Lune",
        anecdoteCorrect: "Les éclipses de Soleil se produisent lorsque la Lune passe entre la Terre et le Soleil, bloquant temporairement sa lumière.",
        anecdoteIncorrect: "La bonne réponse est l'alignement du Soleil, de la Terre et de la Lune. C'est ce qui provoque une éclipse de Soleil.",
        imageUrl: "images/eclipse.jpg"
    },
    {
        question: "Quelle planète a le plus grand volcan du système solaire ?",
        choices: ["Terre", "Mars", "Vénus", "Jupiter"],
        correctAnswer: "Mars",
        anecdoteCorrect: "Mars abrite Olympus Mons, le plus grand volcan connu du système solaire, mesurant 22 km de haut.",
        anecdoteIncorrect: "La bonne réponse est Mars. Olympus Mons, sur Mars, est le plus grand volcan de notre système solaire.",
        imageUrl: "images/volcan.jpg"
    }
];
// Questions pour le niveau 2 (Facile)
let questionsLevel2 = [
    {
        question: "Quelle est la planète la plus proche du Soleil ?",
        choices: ["Venus", "Terre", "Mercure", "Mars"],
        correctAnswer: "Mercure",
        anecdoteCorrect: "Mercure est la planète la plus proche du Soleil, mais elle n'a pas d'atmosphère significative, ce qui signifie qu'elle connaît des températures extrêmes.",
        anecdoteIncorrect: "La bonne réponse est Mercure. Elle est la plus proche du Soleil et connaît des températures extrêmement chaudes pendant la journée et très froides la nuit.",
        imageUrl: "images/mercure.jpg"// Lien vers l'image    
    },
        {
        question: "Quelle navette spatiale américaine a explosé en plein vol en 1986, en direct à la télévision ?",
        choices: ["Atlantis", "Columbia", "Discovery", "Challenger"],
        correctAnswer: "Challenger",
        anecdoteCorrect: "La navette Challenger a explosé 73 secondes après son lancement le 28 janvier 1986. Cette tragédie a coûté la vie aux sept membres d'équipage, dont Christa McAuliffe, une enseignante qui devait être la première civile dans l'espace.",
        anecdoteIncorrect: "La bonne réponse est Challenger. La tragédie a été un événement marquant de l'histoire spatiale, soulignant la nécessité de réévaluer les conditions de sécurité dans les missions spatiales.",
        imageUrl: "images/crash.jpg"// Lien vers l'i
    },
    {
        question: "Quelle planète du système solaire est la plus chaude ?",
        choices: ["Vénus", "Mercure", "Mars", "Jupiter"],
        correctAnswer: "Vénus",
        anecdoteCorrect: "Vénus est la planète la plus chaude de notre système solaire, avec des températures de surface pouvant atteindre 465°C. Cela est dû à son atmosphère dense, principalement composée de dioxyde de carbone, qui crée un effet de serre extrême.",
        anecdoteIncorrect: "La bonne réponse est Vénus. Bien que Mercure soit la planète la plus proche du Soleil, Vénus est la plus chaude en raison de son atmosphère épaisse et de son effet de serre incontrôlé.",
    imageUrl: "images/venus.jpg"
    },
    
    {
        question: "De quelle planète vient la célèbre 'Grande Tache Rouge' ?",
        choices: ["Saturne", "Jupiter", "Mars", "Uranus"],
        correctAnswer: "Jupiter",
        anecdoteCorrect: "La Grande Tache Rouge de Jupiter est une tempête massive qui fait rage depuis des siècles. Elle est si grande qu'elle pourrait englober plusieurs Terres.",
        anecdoteIncorrect: "La bonne réponse est Jupiter. La Grande Tache Rouge est une tempête géante qui existe depuis au moins 350 ans.",
        imageUrl: "images/tache.png"
    },
    {
        question: "Combien de planètes dans notre système solaire ont des anneaux visibles ?",
        choices: ["1", "2", "3", "4"],
        correctAnswer: "4",
        anecdoteCorrect: "Les quatre planètes géantes (Saturne, Jupiter, Uranus et Neptune) possèdent des anneaux, mais ceux de Saturne sont les plus impressionnants.",
        anecdoteIncorrect: "La bonne réponse est 4. Saturne, Jupiter, Uranus et Neptune ont des anneaux visibles, bien que ceux de Saturne soient les plus spectaculaires.",
        imageUrl: "images/anneaux.jpg"
    },
    {
        question: "Pourquoi ne voyons-nous qu'une seule face de la Lune depuis la Terre ?",
        choices: ["La Lune a une seule face visible à cause de sa rotation synchronisée avec la Terre", 
                  "La Lune est toujours à l'opposé du Soleil", 
                  "La Lune tourne sur elle-même à une vitesse plus rapide que sa révolution autour de la Terre", 
                  "La Lune a une orbite elliptique qui nous permet de voir les deux faces"],
        correctAnswer: "La Lune a une seule face visible à cause de sa rotation synchronisée avec la Terre",
        anecdoteCorrect: "La Lune effectue une rotation sur elle-même en exactement le même temps qu'elle met pour orbiter autour de la Terre, un phénomène appelé rotation synchrone.",
        anecdoteIncorrect: "La bonne réponse est que la Lune a une rotation synchrone avec la Terre. Cela signifie qu'elle met le même temps pour tourner sur elle-même que pour faire le tour de la Terre, ce qui fait que nous voyons toujours la même face.",
        imageUrl: "images/lune.jpg"
    },
    
    {
        question: "Quelle est la plus grande planète du système solaire ?",
        choices: ["Jupiter", "Saturne", "Uranus", "Neptune"],
        correctAnswer: "Jupiter",
        anecdoteCorrect: "Jupiter est une planète géante gazeuse et possède une masse plus de deux fois et demie plus grande que celle de toutes les autres planètes du système solaire combinées.",
        anecdoteIncorrect: "La bonne réponse est Jupiter. Elle est la plus grande planète de notre système solaire et possède une atmosphère constituée principalement d'hydrogène et d'hélium.",
        imageUrl: "images/taille.jpg"
    },
    {
        question: "Quel est le nom de la galaxie la plus proche de la Voie Lactée ?",
        choices: ["Galaxie d'Andromède", "Galaxie du Sombrero", "Galaxie du Triangle", "Galaxie de Bode"],
        correctAnswer: "Galaxie d'Andromède",
        anecdoteCorrect: "La galaxie d'Andromède est située à environ 2,5 millions d'années-lumière de la Terre et est la plus grande galaxie du groupe local, qui comprend la Voie Lactée.",
        anecdoteIncorrect: "La bonne réponse est la galaxie d'Andromède. Elle est notre voisine la plus proche et se rapproche lentement de la Voie Lactée.",
        imageUrl: "images/andro.jpg"
    },
    
    {
        question: "Quel est le nom de la première mission spatiale qui a permis à l'homme de marcher sur la Lune ?",
        choices: ["Apollo 11", "Apollo 13", "Gemini 12", "Mercury 7"],
        correctAnswer: "Apollo 11",
        anecdoteCorrect: "Apollo 11 a été la première mission à poser des astronautes sur la Lune en 1969. Neil Armstrong et Buzz Aldrin ont fait l'histoire en devenant les premiers humains à marcher sur la surface lunaire.",
        anecdoteIncorrect: "La bonne réponse est Apollo 11. Cette mission a permis à Neil Armstrong et Buzz Aldrin de faire un pas géant pour l'humanité en 1969.",
        imageUrl: "images/appolo.jpg"
    },
    
    {
        question: "Quelle est la principale composition de l'atmosphère de la Terre ?",
        choices: ["Oxygène", "Carbone", "Azote", "Hydrogène"],
        correctAnswer: "Azote",
        anecdoteCorrect: "L'azote compose environ 78% de l'atmosphère terrestre, ce qui en fait le principal gaz. L'oxygène ne représente que 21%.",
        anecdoteIncorrect: "La bonne réponse est l'azote. L'atmosphère terrestre est composée à 78% d'azote, et l'oxygène représente seulement 21%.",
        imageUrl: "images/azote.jpg"
    }

];

// Questions pour le niveau 3 (Moyen)
let questionsLevel3 = [
    {
        question: "Si l'univers observable mesure environ 93 milliards d'années-lumière de diamètre, combien de planètes similaires à la Terre pourrait-il y avoir dans notre galaxie de la Voie lactée ?",
        choices: ["Entre 800 000 et 900 000", "Entre 100 000 et 200 000 millions", "Entre 10 et 20 milliards", "Entre 100 milliards et 200 milliards"],
        correctAnswer: "Entre 100 milliards et 200 milliards",
        anecdoteCorrect: "Les scientifiques estiment qu'il pourrait y avoir entre 100 et 200 milliards de planètes semblables à la Terre rien que dans notre galaxie, la Voie lactée, ce qui ouvre la possibilité de découvrir de la vie ailleurs.",
        anecdoteIncorrect: "La bonne réponse est que la Voie lactée pourrait abriter entre 100 et 200 milliards de planètes similaires à la Terre, selon des recherches récentes sur les exoplanètes. Cela montre à quel point l'univers est vaste et potentiellement habité.",
        imageUrl:"images/OIP.jpg"
    },
    
    
    {
        question: "Quelle mission spatiale a été lancée en 2024 pour explorer Europe, l'une des lunes de Jupiter, à la recherche de signes de vie extraterrestre ?",
        choices: ["JUICE", "Clipper", "Perseverance", "New Horizons"],
        correctAnswer: "Clipper",
        anecdoteCorrect: "La mission Clipper de la NASA, lancée en 2024, est dédiée à l'étude de la lune Europe de Jupiter, où un océan sous la glace pourrait abriter des formes de vie.",
        anecdoteIncorrect: "La bonne réponse est Clipper. Cette mission aura pour but de cartographier la surface d'Europe et de sonder l'océan caché sous sa croûte glacée à la recherche de conditions propices à la vie.",
        imageUrl: "images/1.jpg"
    },
    
    {
        question: "Quelle est la plus grande lune de Jupiter ?",
        choices: ["Europa", "Ganymede", "Io", "Callisto"],
        correctAnswer: "Ganymede",
        anecdoteCorrect: "Ganymede, la plus grande lune de Jupiter, est également la plus grande lune du système solaire. Elle est plus grande que la planète Mercure.",
        anecdoteIncorrect: "La bonne réponse est Ganymede. C'est la plus grande lune de Jupiter, et elle possède un noyau métallique comme celui de la Terre.",
        imageUrl: "images/2.jpg"
    },
    {
        question: "Quelle est la vitesse de la lumière dans le vide ?",
        choices: ["300 000 km/s", "150 000 km/s", "200 000 km/s", "250 000 km/s"],
        correctAnswer: "300 000 km/s",
        anecdoteCorrect: "La vitesse de la lumière dans le vide est de 300 000 km/s, ce qui permet à la lumière de voyager de la Terre au Soleil en environ 8 minutes.",
        anecdoteIncorrect: "La bonne réponse est 300 000 km/s. La lumière voyage incroyablement vite, et c'est la vitesse maximale connue dans l'univers.",
        imageUrl: "images/3.jpg"
    },
    {
        question: "Sur quelle planète se trouve le plus grand canyon connu ?",
        choices: ["Mars", "Vénus", "Mercure", "Jupiter"],
        correctAnswer: "Mars",
        anecdoteCorrect: "Le plus grand canyon du système solaire, le Valles Marineris, se trouve sur Mars. Il mesure plus de 4 000 km de long.",
        anecdoteIncorrect: "La bonne réponse est Mars. Le Valles Marineris est un canyon gigantesque qui pourrait en fait contenir tout le Grand Canyon de la Terre.",
        imageUrl:"images/4.jpg"
    },
    {
        question: "Quel est le nom de la planète qui tourne dans le sens inverse de toutes les autres planètes du système solaire ?",
        choices: ["Vénus", "Mars", "Jupiter", "Saturne"],
        correctAnswer: "Vénus",
        anecdoteCorrect: "Vénus est la seule planète du système solaire à tourner dans le sens inverse de toutes les autres planètes. Cela signifie que si vous vous trouviez sur Vénus, le Soleil se lèverait à l'ouest et se coucherait à l'est.",
        anecdoteIncorrect: "La bonne réponse est Vénus. Cette planète a une rotation rétrograde, ce qui fait qu'elle tourne dans le sens opposé des autres planètes. Ce phénomène est encore un mystère pour les scientifiques.",
        imageUrl:"images/5.jpg"
    },
    {
        question: "Quel est le nom de la sonde qui a été la première à quitter le système solaire ?",
        choices: ["Voyager 1", "Parker", "New Horizons", "Voyager 2"],
        correctAnswer: "Voyager 1",
        anecdoteCorrect: "La sonde Voyager 1 a été lancée en 1977 et a quitté notre système solaire en 2012, envoyant des données depuis l'espace interstellaire.",
        anecdoteIncorrect: "La bonne réponse est Voyager 1. Elle a quitté notre système solaire en 2012 et a fourni des informations précieuses sur les frontières de notre système.",
        imageUrl:"images/6.jpeg"
    },
    {
        question: "Pourquoi une journée sur Vénus est-elle plus longue qu'une année sur Vénus ?",
        choices: ["Parce que Vénus tourne très lentement sur elle-même", 
                  "Parce que Vénus n'a pas d'atmosphère", 
                  "Parce que Vénus est trop proche du Soleil", 
                  "Parce que Vénus a une orbite très longue"],
        correctAnswer: "Parce que Vénus tourne très lentement sur elle-même",
        anecdoteCorrect: "Vénus met environ 243 jours terrestres pour effectuer une rotation sur elle-même, tandis qu'elle ne met que 225 jours terrestres pour orbiter autour du Soleil.",
        anecdoteIncorrect: "La bonne réponse est que Vénus tourne très lentement sur elle-même, ce qui fait que sa journée est plus longue que son année. Sa rotation est extrêmement lente, quasiment rétrograde par rapport à la direction de son orbite.",
        imageUrl:"images/7.webp"
    },
    {
        question: "Qu'est-ce qu'un pulsar ?",
        choices: ["Une planète gazeuse", "Une étoile en rotation rapide", "Un trou noir", "Une comète"],
        correctAnswer: "Une étoile en rotation rapide",
        anecdoteCorrect: "Un pulsar est une étoile en fin de vie qui tourne sur elle-même à une vitesse extrêmement rapide, émettant des ondes radio régulières.",
        anecdoteIncorrect: "La bonne réponse est une étoile en rotation rapide. Les pulsars sont des étoiles mortes qui tournent très vite et émettent des radiations régulières.",
        imageUrl:"images/8.jpg"
    },
    {
        question: "Quel est l'élément principal de la composition du Soleil ?",
        choices: ["Hydrogène", "Oxygène", "Carbone", "Hélium"],
        correctAnswer: "Hydrogène",
        anecdoteCorrect: "Le Soleil est principalement composé d'hydrogène, qui se fusionne pour produire de l'hélium, libérant ainsi une immense quantité d'énergie.",
        anecdoteIncorrect: "La bonne réponse est l'hydrogène. Il représente environ 75% de la masse du Soleil, tandis que l'hélium en constitue environ 24%.",
        imageUrl:"images/9.jpg"
    }
];

// Questions pour le niveau 3 (Difficile)
let questionsLevel4 = [
    {
        question: "Quel est l'âge estimé de l'Univers ?",
        choices: ["13,8 milliards d'années", "10 milliards d'années", "14,5 milliards d'années", "12 milliards d'années"],
        correctAnswer: "13,8 milliards d'années",
        anecdoteCorrect: "L'âge de l'Univers est estimé à 13,8 milliards d'années grâce à des observations précises des étoiles et des galaxies lointaines.",
        anecdoteIncorrect: "La bonne réponse est 13,8 milliards d'années. C'est l'âge estimé de l'Univers, déterminé grâce aux découvertes récentes en cosmologie.",
        imageUrl: "images/10.jpg"
    },
    {
        question: "Qu'est-ce que le paradoxe de Fermi ?",
        choices: ["La possibilité d'une vie extraterrestre", "L'absence de signaux extraterrestres", "L'apparition de trous noirs", "La théorie de la relativité"],
        correctAnswer: "L'absence de signaux extraterrestres",
        anecdoteCorrect: "Le paradoxe de Fermi se demande pourquoi, malgré l'immensité de l'univers, nous n'avons pas encore détecté de signaux d'intelligences extraterrestres.",
        anecdoteIncorrect: "La bonne réponse est l'absence de signaux extraterrestres. Ce paradoxe soulève la question de savoir pourquoi, dans un univers si vaste, nous n'avons trouvé aucune preuve de vie extraterrestre.",
        imageUrl:"images/11.jpg"
    },
    {
        question: "Quelle est la durée de vie restante du Soleil avant qu'il ne devienne une géante rouge et engloutisse les planètes proches, dont la Terre ?",
        choices: ["100 millions d'années", "1 milliard d'années", "5 milliards d'années", "10 milliards d'années"],
        correctAnswer: "5 milliards d'années",
        anecdoteCorrect: "Le Soleil, actuellement au milieu de sa phase stable, a encore environ 5 milliards d'années avant de devenir une géante rouge et de modifier radicalement le système solaire, avec des conséquences potentiellement catastrophiques pour la Terre.",
        anecdoteIncorrect: "La bonne réponse est 5 milliards d'années. Dans un futur lointain, le Soleil se dilatera, et pourrait engloutir Mercure, Vénus, et la Terre avant de se transformer en une naine blanche.",
        imageUrl:"images/12.jpg"
    },
    
    {
        question: "Quel est le nom de la galaxie la plus proche de la Voie Lactée ?",
        choices: ["La galaxie d'Andromède", "La galaxie du Sombrero", "La galaxie de la Cigogne", "La galaxie d'Helix"],
        correctAnswer: "La galaxie d'Andromède",
        anecdoteCorrect: "La galaxie d'Andromède est la grande voisine de la Voie Lactée. Elle se rapproche de notre galaxie et devrait entrer en collision avec elle dans environ 4 milliards d'années.",
        anecdoteIncorrect: "La bonne réponse est la galaxie d'Andromède. C'est la galaxie spirale la plus proche de la Voie Lactée, à environ 2,5 millions d'années-lumière de nous.",
        imageUrl: "images/13.jpg"
    },
    {
        question: "Quelle est la distance entre la Terre et le Soleil ?",
        choices: ["100 millions de kilomètres", "150 millions de kilomètres", "200 millions de kilomètres", "75 millions de kilomètres"],
        correctAnswer: "150 millions de kilomètres",
        anecdoteCorrect: "La distance moyenne entre la Terre et le Soleil est d'environ 150 millions de kilomètres, une mesure appelée unité astronomique (UA).",
        anecdoteIncorrect: "La bonne réponse est 150 millions de kilomètres. Cette distance est la moyenne entre la Terre et le Soleil, soit 1 unité astronomique.",
        imageUrl: "images/14.jpg"
    },
    {
        question: "Quel est le nom de l'effet qui cause la courbure de l'espace-temps autour des objets massifs ?",
        choices: ["L'effet Doppler", "La gravité quantique", "La relativité générale", "La théorie des cordes"],
        correctAnswer: "La relativité générale",
        anecdoteCorrect: "La relativité générale, formulée par Albert Einstein en 1915, explique que la gravité résulte de la courbure de l'espace-temps autour des objets massifs, comme les planètes et les étoiles.",
        anecdoteIncorrect: "La bonne réponse est la relativité générale. Cette théorie a changé notre compréhension de la gravité et a été confirmée par des observations comme la déviation de la lumière des étoiles par le Soleil.",
        imageUrl: "images/15.jpg"
    },
    {
        question: "Quel est le rôle des trous noirs supermassifs au centre des galaxies ?",
        choices: ["Ils attirent la lumière", "Ils génèrent des étoiles", "Ils stabilisent la galaxie", "Ils détruisent les planètes"],
        correctAnswer: "Ils stabilisent la galaxie",
        anecdoteCorrect: "Les trous noirs supermassifs jouent un rôle crucial en stabilisant les galaxies en maintenant leur centre sous contrôle gravitationnel.",
        anecdoteIncorrect: "La bonne réponse est qu'ils stabilisent la galaxie. Ces trous noirs supermassifs au centre des galaxies exercent une influence gravitationnelle immense qui aide à maintenir la structure de la galaxie.",
        imageUrl: "images/16.jpg"
    },
    {
        question: "Quelle est la principale source d'énergie d'une étoile ?",
        choices: ["La fusion nucléaire", "La fission nucléaire", "La combustion", "L'absorption de gaz"],
        correctAnswer: "La fusion nucléaire",
        anecdoteCorrect: "Les étoiles produisent de l'énergie par fusion nucléaire, un processus où des noyaux légers se combinent pour former des noyaux plus lourds, libérant ainsi une énorme quantité d'énergie.",
        anecdoteIncorrect: "La bonne réponse est la fusion nucléaire. C'est ainsi que les étoiles produisent leur énergie, en fusionnant des noyaux d'hydrogène pour créer de l'hélium et libérer de l'énergie.",
        imageUrl: "images/17.jpg"
    },
    {
        question: "Quel est l'élément qui déclenche la fusion nucléaire dans les étoiles ?",
        choices: ["Hydrogène", "Hélium", "Carbone", "Azote"],
        correctAnswer: "Hydrogène",
        anecdoteCorrect: "Dans les étoiles, la fusion nucléaire commence par la fusion des noyaux d'hydrogène pour former de l'hélium, libérant de l'énergie.",
        anecdoteIncorrect: "La bonne réponse est l'hydrogène. C'est cet élément qui, lorsqu'il se fusionne, produit de l'hélium et génère une immense quantité d'énergie, alimentant ainsi les étoiles.",
        imageUrl:"images/18.jpg"
    }
];

let questionsLevel5 = [
    {
        question: "Quelle exoplanète est considérée comme la plus semblable à la Terre parmi les découvertes récentes ?",
        choices: ["Kepler-452b", "Proxima b", "TRAPPIST-1d", "Kepler-186f"],
        correctAnswer: "Kepler-452b",
        anecdoteCorrect: "Kepler-452b, surnommée la 'cousine de la Terre', est une exoplanète située à environ 1 400 années-lumière de la Terre. Elle a des conditions similaires à celles de la Terre, notamment une taille et une température compatibles avec la vie.",
        anecdoteIncorrect: "La bonne réponse est Kepler-452b, découverte par le télescope spatial Kepler. Elle est souvent comparée à la Terre en raison de sa position dans la zone habitable de son étoile.",
        imageUrl: "images/20.jpg"
    },
    {
        question: "Quel est le nom du phénomène où la lumière provenant d'un objet lointain est déviée par la gravité d'un objet massif, amplifiant ainsi l'image de l'objet derrière lui ?",
        choices: ["Lentille gravitationnelle", "Effet Doppler", "Déflexion de la lumière", "Microlentille gravitationnelle"],
        correctAnswer: "Lentille gravitationnelle",
        anecdoteCorrect: "La lentille gravitationnelle est un phénomène prédit par la relativité générale, où un objet massif, comme un trou noir, dévie la lumière d'un objet plus lointain, permettant aux astronomes d'observer des objets distants ou de découvrir des galaxies inaccessibles.",
        anecdoteIncorrect: "La bonne réponse est lentille gravitationnelle. Ce phénomène a été observé pour la première fois dans les années 1970 et est un outil essentiel pour l'étude de l'univers lointain.",
        imageUrl: "images/21.jpg"
    },
    {
        question: "Quel est le nom de la plus grande lune de Saturne ?",
        choices: ["Titan", "Europa", "Ganymède", "Callisto"],
        correctAnswer: "Titan",
        anecdoteCorrect: "Titan, la plus grande lune de Saturne, est plus grande que la planète Mercure. Elle possède une atmosphère dense composée principalement d'azote, et des lacs de méthane liquide à sa surface.",
        anecdoteIncorrect: "La bonne réponse est Titan. Cette lune est unique avec ses mers de méthane liquide et ses conditions météorologiques complexes.",
        imageUrl: "images/22.jpg"
    },
    {
        question: "Quel phénomène cosmique produit une explosion d'une étoile en fin de vie, libérant une quantité d'énergie colossale ?",
        choices: ["Une supernova", "Un pulsar", "Une nova", "Un quasar"],
        correctAnswer: "Une supernova",
        anecdoteCorrect: "Une supernova est l'explosion d'une étoile massive en fin de vie. Ces événements génèrent une lumière si intense qu'ils peuvent briller plus que toute une galaxie pendant un court laps de temps.",
        anecdoteIncorrect: "La bonne réponse est une supernova. Ces explosions jouent un rôle clé dans la dispersion des éléments lourds à travers l'univers, participant ainsi à la formation de nouvelles étoiles et planètes.",
        imageUrl: "images/23.jpg"
    },
    {
        question: "Quel est le nom de l'énorme système de galaxies situé à plus de 300 millions d'années-lumière de la Terre, considéré comme le plus grand objet de l'univers observable ?",
        choices: ["L'amas de la Vierge", "L'amas d'Hercule", "L'amas de Coma", "L'amas de Laniakea"],
        correctAnswer: "L'amas de Laniakea",
        anecdoteCorrect: "L'amas de Laniakea est un super-amas de galaxies qui comprend notre propre Voie lactée. Il s'étend sur plus de 520 millions d'années-lumière et abrite environ 100 000 galaxies.",
        anecdoteIncorrect: "La bonne réponse est l'amas de Laniakea. Il a été identifié en 2014 et représente une portion gigantesque de l'univers observable.",
        imageUrl:"images/24.jpg"
    },
    {
        question: "Combien de planètes naines ont été officiellement reconnues dans notre système solaire ?",
        choices: ["5", "8", "12", "4"],
        correctAnswer: "5",
        anecdoteCorrect: "Il y a actuellement 5 planètes naines officiellement reconnues : Pluton, Eris, Hauméa, Makemake, et Cérès. Pluton, autrefois considérée comme la neuvième planète, a été reclassée en 2006.",
        anecdoteIncorrect: "La bonne réponse est 5. Les planètes naines sont des corps célestes qui sont trop petits pour être des planètes classiques mais assez grands pour leur propre gravité.",
        imageUrl:"images/25.jpg"
    },
    {
        question: "Qu'est-ce qu'un quasar ?",
        choices: ["Une étoile morte", "Une galaxie en formation", "Un trou noir supermassif en activité", "Une comète géante"],
        correctAnswer: "Un trou noir supermassif en activité",
        anecdoteCorrect: "Un quasar est un noyau galactique extrêmement lumineux, alimenté par un trou noir supermassif en activité. Les quasars émettent des quantités colossales d'énergie, souvent plus que toute une galaxie.",
        anecdoteIncorrect: "La bonne réponse est un trou noir supermassif en activité. Ils sont parmi les objets les plus puissants de l'univers, visible à des milliards d'années-lumière.",
        imageUrl:"images/26.jpg"
    },
    {
        question: "Dans quel phénomène astronomique les objets proches d'un trou noir peuvent-ils être déformés par l'intensité de la gravité ?",
        choices: ["La singularité gravitationnelle", "Les marées de marée", "Les lentilles gravitationnelles", "L'étirement spaghettifié"],
        correctAnswer: "L'étirement spaghettifié",
        anecdoteCorrect: "L'étirement spaghettifié est un phénomène où un objet se fait étirer de manière extrême en raison de la différence de force gravitationnelle entre sa partie proche et éloignée d'un trou noir.",
        anecdoteIncorrect: "La bonne réponse est l'étirement spaghettifié. Cet effet montre la puissance des forces gravitationnelles extrêmes à proximité des trous noirs.",
        imageUrl:"images/27.jpg"
    },
    {
        question: "Quel est le nom de la première exoplanète découverte autour d'une étoile semblable au Soleil ?",
        choices: ["Kepler-452b", "51 Pegasi b", "Proxima Centauri b", "TRAPPIST-1d"],
        correctAnswer: "51 Pegasi b",
        anecdoteCorrect: "51 Pegasi b, surnommée 'Bellerophon', a été la première exoplanète découverte autour d'une étoile de type solaire en 1995. Cette découverte a marqué un tournant majeur dans la recherche exoplanétaire.",
        anecdoteIncorrect: "La bonne réponse est 51 Pegasi b. Il s'agit de la première exoplanète détectée autour d'une étoile semblable au Soleil, une découverte qui a ouvert la voie à la recherche d'exoplanètes habitables.",
        imageUrl: "2images/28.jpg"
    },
    {
        question: "Quel est le nom du rayonnement émis par le fond diffus cosmologique, qui est l'une des premières traces de l'univers après le Big Bang ?",
        choices: ["Rayonnement de Hawking", "Rayonnement thermique", "Rayonnement de fond cosmologique", "Rayonnement X"],
        correctAnswer: "Rayonnement de fond cosmologique",
        anecdoteCorrect: "Le rayonnement de fond cosmologique est une radiation électromagnétique uniformément répartie dans l'univers, témoin de l'état de l'univers lorsque celui-ci n'était encore qu'une soupe chaude et dense, juste après le Big Bang.",
        anecdoteIncorrect: "La bonne réponse est le rayonnement de fond cosmologique. Il représente les premières empreintes laissées par l'univers après le Big Bang et est utilisé pour étudier l'évolution de l'univers.",
        imageUrl: "images/29.jpg"
    }
];


// Fonction pour démarrer chaque quiz
function startQuizLevel1() {
    document.querySelector('main').innerHTML = ''; 
    nextQuestion(0, questionsLevel1);
}

function startQuizLevel2() {
    document.querySelector('main').innerHTML = ''; 
    nextQuestion(0, questionsLevel2);
}

function startQuizLevel3() {
    document.querySelector('main').innerHTML = '';
    nextQuestion(0, questionsLevel3);
}

function startQuizLevel4() {
    document.querySelector('main').innerHTML = '';
    nextQuestion(0, questionsLevel4);
}
function startQuizLevel5() {
    document.querySelector('main').innerHTML = '';
    nextQuestion(0, questionsLevel5);
}

function nextQuestion(index, questions, score) {
    if (index >= questions.length) {
        const finalGrade = (score / questions.length) * 10;
     


        document.querySelector('main').innerHTML = 
        `<div class="quiz-result">
            <h2>Quiz terminé !</h2>
            <div class="final-grade">
                <span class="grade-label">Votre note finale :</span>
                <span class="grade-score">${finalGrade} / 10</span>
            </div>
            <div class="result-logo">
                <img src="images/logo.webp" alt="Logo" />
            </div>
            <button id="returnToMain">Retour à l'écran principal</button>
        </div>`;
    
        
        document.getElementById('returnToMain').addEventListener('click', function() {
            location.reload();
        });

        return;
    }

    const question = questions[index];
    let questionHTML = `
        <h2 class="quiz-question">${question.question}</h2>
        <div class="choices">
            ${question.choices.map(choice => 
                `<button class="answer-button" data-answer="${choice}">${choice}</button>`  
            ).join('<br>')}
        </div>
    `;

    document.querySelector('main').innerHTML = questionHTML;

    // Ajoute l'événement de clic pour les réponses après l'affichage des boutons
    document.querySelectorAll('.answer-button').forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`Bouton cliqué : ${e.target.getAttribute('data-answer')}`);
            const selectedAnswer = e.target.getAttribute('data-answer');
            score = checkAnswer(selectedAnswer, question.correctAnswer, index, questions, score);  // Met à jour le score
            nextQuestion(index + 1, questions, score);  // Passe à la question suivante
        });
    });
}



// Fonction pour vérifier la réponse et passer à la question suivante
function checkAnswer(selected, correctAnswer, index, questions, score) {
    const question = questions[index];
    
    // Vérifie si la réponse est correcte
    if (selected === correctAnswer) {
        showAlert("Bien Joué !", question.imageUrl); // Affiche "Correct !" d'abord

        // Délai pour afficher l'anecdote après "Correct !"
        setTimeout(function() {
            showAlert(question.anecdoteCorrect, question.imageUrl); // Affiche l'anecdote pour la bonne réponse
        }, 2000); // 2 secondes d'attente avant de montrer l'anecdote

        score++;  // Incrémenter le score pour une bonne réponse

    } else {
        showAlert("Mauvaise réponse! ", question.imageUrl); // Affiche la mauvaise réponse

        // Délai pour afficher l'anecdote après la mauvaise réponse
        setTimeout(function() {
            showAlert(question.anecdoteIncorrect, question.imageUrl); // Affiche l'anecdote pour la mauvaise réponse
        }, 2000); // 2 secondes d'attente avant de montrer l'anecdote
    }

    return score;  // Retourne le score mis à jour
}


// Fonction pour afficher la boîte de dialogue
function showAlert(message, imageUrl = null) {
    const alertBox = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    const alertImage = document.querySelector("#question-image");
    const closeButton = document.getElementById("close-alert");

    alertMessage.textContent = message; // Met à jour le message
    if (imageUrl) {
        alertImage.src = imageUrl; // Met à jour l'image si une URL est fournie
        alertImage.style.display = "block"; // Affiche l'image
    } else {
        alertImage.style.display = "none"; // Cache l'image si aucune URL n'est fournie
    }
    alertBox.classList.remove("hidden"); // Affiche la boîte

    // Ajouter un événement au bouton "Fermer"
    closeButton.addEventListener('click', () => {
        alertBox.classList.add("hidden"); // Masque la boîte d'alerte
    });
}


function startQuizLevel1() {
    document.querySelector('main').innerHTML = ''; 
    let score = 0;  // Initialisation du score
    nextQuestion(0, questionsLevel1, score);
}

function startQuizLevel2() {
    document.querySelector('main').innerHTML = ''; 
    let score = 0;
    nextQuestion(0, questionsLevel2, score);
}

function startQuizLevel3() {
    document.querySelector('main').innerHTML = '';
    let score = 0;
    nextQuestion(0, questionsLevel3, score);
}

function startQuizLevel4() {
    document.querySelector('main').innerHTML = '';
    let score = 0;
    nextQuestion(0, questionsLevel4, score);
}

function startQuizLevel5() {
    document.querySelector('main').innerHTML = '';
    let score = 0;
    nextQuestion(0, questionsLevel5, score);
}
