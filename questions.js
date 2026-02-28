// DUEL - Databáza otázok
// Celkom: 1499 otázok
const QUESTIONS_DB = [
  {
    "id": 1,
    "question": "Kto objavil Ameriku v roku 1492?",
    "answer": "Krištof Kolumbus",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 2,
    "question": "Ako sa volal prvý človek na Mesiaci?",
    "answer": "Neil Armstrong",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 3,
    "question": "V ktorom storočí žili dinosaury naposledy?",
    "answer": "V kriede (pred 66 miliónmi rokov)",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 4,
    "question": "Kto bol prvý prezident USA?",
    "answer": "George Washington",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 5,
    "question": "Ako sa volala loď, na ktorej plavili sa Kolumbovi námorníci?",
    "answer": "Santa María",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 6,
    "question": "Čo je to pyramída a kde sa nachádzajú najznámejšie?",
    "answer": "Stavba v tvare ihlana, v Egypte",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 7,
    "question": "Kto postavil Veľký čínsky múr?",
    "answer": "Čínski cisári (Qin Shi Huang)",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 8,
    "question": "Ako sa volala kráľovná, ktorá vládla Egyptu?",
    "answer": "Kleopatra",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 9,
    "question": "V ktorom roku padol Berlínsky múr?",
    "answer": "1989",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 10,
    "question": "Kto napísal denník počas 2. svetovej vojny a skrýval sa v Amsterdame?",
    "answer": "Anna Franková",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 11,
    "question": "Ako sa volal slávny rímsky vojvodca, ktorý prekročil Rubikon?",
    "answer": "Július Caesar",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 12,
    "question": "Čo je Koloseum a kde sa nachádza?",
    "answer": "Staroveký amfiteáter v Ríme",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 13,
    "question": "Kto vynašiel žiarovku?",
    "answer": "Thomas Edison",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 14,
    "question": "Ako sa volali staroveké olympijské hry a kde sa konali?",
    "answer": "Olympijské hry v Olympii, Grécko",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 15,
    "question": "Kto bol Robin Hood?",
    "answer": "Legendárny zbojník z Anglicka",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 16,
    "question": "Čo bolo Titanic?",
    "answer": "Luxusná loď, ktorá sa potopila v roku 1912",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 17,
    "question": "V ktorej krajine vznikla pizza?",
    "answer": "Taliansko",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 18,
    "question": "Kto bol faraón?",
    "answer": "Vládca starého Egypta",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 19,
    "question": "Aký bol najdlhší rímsky akvadukt?",
    "answer": "Pont du Gard vo Francúzsku",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 20,
    "question": "Kto boli vikingovia?",
    "answer": "Severský bojový a obchodný národ",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 21,
    "question": "V ktorom roku sa skončila 2. svetová vojna?",
    "answer": "1945",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 22,
    "question": "V ktorom roku pristál prvý človek na Mesiaci?",
    "answer": "1969",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 23,
    "question": "Koľko planét má Slnečná sústava?",
    "answer": "8",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 24,
    "question": "Ktorá planéta je najbližšie k Slnku?",
    "answer": "Merkúr",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 25,
    "question": "Čo je to fotosyntéza?",
    "answer": "Proces, pri ktorom rastliny vyrábajú kyslík zo svetla",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 26,
    "question": "Koľko kostí má ľudské telo?",
    "answer": "206",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 27,
    "question": "Aká je najväčšia planéta Slnečnej sústavy?",
    "answer": "Jupiter",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 28,
    "question": "Čo je to DNA?",
    "answer": "Nositeľ genetickej informácie",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 29,
    "question": "Koľko zubov má dospelý človek?",
    "answer": "32",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 30,
    "question": "Aká je chemická značka vody?",
    "answer": "H2O",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 31,
    "question": "Čo je to gravitácia?",
    "answer": "Príťažlivá sila medzi telesami",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 32,
    "question": "Ktorá je najväčšia kosť v ľudskom tele?",
    "answer": "Stehenná kosť",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 33,
    "question": "Koľko litrov krvi má dospelý človek?",
    "answer": "Približne 5 litrov",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 34,
    "question": "Aká je teplota varu vody?",
    "answer": "100 °C",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 35,
    "question": "Čo spôsobuje dúhu?",
    "answer": "Lom svetla v kvapkách vody",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 36,
    "question": "Koľko percent Zeme pokrýva voda?",
    "answer": "Približne 71 %",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 37,
    "question": "Čo je to magnet?",
    "answer": "Predmet, ktorý priťahuje železo",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 38,
    "question": "Aká je najmenšia častica hmoty?",
    "answer": "Atóm",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 39,
    "question": "Kto vynašiel telefón?",
    "answer": "Alexander Graham Bell",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 40,
    "question": "Čo sú to baktérie?",
    "answer": "Jednobuňkové mikroorganizmy",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 41,
    "question": "Koľko farieb má dúha?",
    "answer": "7",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 42,
    "question": "Aký plyn dýchame?",
    "answer": "Kyslík",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 43,
    "question": "Pri akej teplote sa voda zmení na ľad?",
    "answer": "0 °C",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 44,
    "question": "Koľko nôh má hmyz?",
    "answer": "6",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 45,
    "question": "Koľko planét v Slnečnej sústave má prstence?",
    "answer": "4",
    "category": "veda",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 46,
    "question": "Koľko hráčov je vo futbalovom tíme na ihrisku?",
    "answer": "11",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 47,
    "question": "Aký šport hrá Cristiano Ronaldo?",
    "answer": "Futbal",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 48,
    "question": "Koľko setov sa hrá vo volejbalovom zápase maximálne?",
    "answer": "5",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 49,
    "question": "Aká je farba olympijského kruhu v strede?",
    "answer": "Čierna",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 50,
    "question": "V ktorom športe sa používa raketa a loptička?",
    "answer": "Tenis",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 51,
    "question": "Koľko hráčov hrá v basketbalovom tíme na ihrisku?",
    "answer": "5",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 52,
    "question": "Ako sa volá najslávnejší cyklista Tour de France zo Slovenska?",
    "answer": "Peter Sagan",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 53,
    "question": "Čo je to maratón?",
    "answer": "Beh na 42,195 km",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 54,
    "question": "V akom športe sa používa puk?",
    "answer": "Hokej",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 55,
    "question": "Koľko olympijských kruhov je na vlajke?",
    "answer": "5",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 56,
    "question": "Aký šport sa hrá na Wimbledone?",
    "answer": "Tenis",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 57,
    "question": "Koľko bodov potrebuješ na výhru setu v tenise?",
    "answer": "6 gemov",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 58,
    "question": "Čo je to penalta vo futbale?",
    "answer": "Pokutový kop z 11 metrov",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 59,
    "question": "V ktorom meste sa konali OH 2024?",
    "answer": "Paríž",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 60,
    "question": "Aký šport robí Usain Bolt?",
    "answer": "Šprint / Atletika",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 61,
    "question": "Čo je to hat-trick?",
    "answer": "Tri góly jedného hráča v jednom zápase",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 62,
    "question": "V akom športe sa používa tatami?",
    "answer": "Judo",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 63,
    "question": "Koľko kôl má bežný boxerský zápas?",
    "answer": "12",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 64,
    "question": "Aký šport hrá LeBron James?",
    "answer": "Basketbal",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 65,
    "question": "V ktorom roku sa konali prvé moderné olympijské hry?",
    "answer": "1896",
    "category": "sport",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 66,
    "question": "Kto namaľoval Monu Lisu?",
    "answer": "Leonardo da Vinci",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 67,
    "question": "V ktorom meste stojí Eiffelova veža?",
    "answer": "Paríž",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 68,
    "question": "Aká je farba, ak zmiešaš modrú a žltú?",
    "answer": "Zelená",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 69,
    "question": "Kto napísal rozprávku o Popoluške?",
    "answer": "Charles Perrault (alebo bratia Grimmovci)",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 70,
    "question": "Čo je to mozaika?",
    "answer": "Obraz poskladaný z malých kúskov",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 71,
    "question": "Aký nástroj má 88 klávesov?",
    "answer": "Klavír",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 72,
    "question": "Kto vytvoril sochu Dávida vo Florencii?",
    "answer": "Michelangelo",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 73,
    "question": "Čo je to balet?",
    "answer": "Tanečné umenie",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 74,
    "question": "Aká farba vznikne zmiešaním červenej a bielej?",
    "answer": "Ružová",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 75,
    "question": "Kde sa nachádza Sixtínska kaplnka?",
    "answer": "Vo Vatikáne",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 76,
    "question": "Kto napísal Harry Pottera?",
    "answer": "J. K. Rowlingová",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 77,
    "question": "Čo je to origami?",
    "answer": "Japonské umenie skladania papiera",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 78,
    "question": "Aký hudobný nástroj hrá na sláčik?",
    "answer": "Husle",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 79,
    "question": "Kto je autor Malého princa?",
    "answer": "Antoine de Saint-Exupéry",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 80,
    "question": "V ktorom meste sa nachádza Louvre?",
    "answer": "Paríž",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 81,
    "question": "Aký je najznámejší obraz Vincenta van Gogha?",
    "answer": "Hviezdna noc",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 82,
    "question": "Čo je to freska?",
    "answer": "Maľba na mokrej omietke",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 83,
    "question": "Koľko strún má gitara?",
    "answer": "6",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 84,
    "question": "Kto je Jožko Púčik?",
    "answer": "Postava z detskej knihy J. C. Hronského",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 85,
    "question": "Aký je názov knihy o chlapcovi, ktorý sa nechcel stať dospelým?",
    "answer": "Peter Pan",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 86,
    "question": "Kto napísal Dobrodružstvá Toma Sawyera?",
    "answer": "Mark Twain",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 87,
    "question": "Ako sa volá čarodejnícka škola v Harry Potterovi?",
    "answer": "Rokfort (Hogwarts)",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 88,
    "question": "Kto je autor Knihy džunglí?",
    "answer": "Rudyard Kipling",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 89,
    "question": "Ako sa volá hlavná postava Pinocchia?",
    "answer": "Pinocchio (Pinokkio)",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 90,
    "question": "Kto napísal rozprávku Snehulienka?",
    "answer": "Bratia Grimmovci",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 91,
    "question": "Čo je to komiks?",
    "answer": "Príbeh vyrozprávaný obrázkami",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 92,
    "question": "Kto vymyslel Sherlocka Holmesa?",
    "answer": "Arthur Conan Doyle",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 93,
    "question": "Ako sa volá najlepší priateľ Harryho Pottera?",
    "answer": "Ron Weasley",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 94,
    "question": "Čo je to bájka?",
    "answer": "Krátky príbeh s poučením, často so zvieratami",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 95,
    "question": "Kto napísal O psíčkovi a mačičke?",
    "answer": "Josef Čapek",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 96,
    "question": "Aký žáner je Pán prsteňov?",
    "answer": "Fantasy",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 97,
    "question": "Kto je Winnie the Pooh?",
    "answer": "Medvedík z detskej knihy A. A. Milnea",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 98,
    "question": "Ako sa volá najslávnejšia kniha Roalda Dahla pre deti?",
    "answer": "Charlie a továreň na čokoládu",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 99,
    "question": "Kto napísal Malú morskú vílu?",
    "answer": "Hans Christian Andersen",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 100,
    "question": "Čo je to haiku?",
    "answer": "Japonská krátka báseň",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 101,
    "question": "Kto vytvoril postavu Astrid Lindgrenovej Pipi?",
    "answer": "Pipi Dlhá Pančucha",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 102,
    "question": "Kto je Walt Disney?",
    "answer": "Tvorca Mickeyho Mousa a Disneylandu",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 103,
    "question": "Čím je známy Albert Einstein?",
    "answer": "Teóriou relativity",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 104,
    "question": "Kto je Elon Musk?",
    "answer": "Podnikateľ, zakladateľ SpaceX a Tesla",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 105,
    "question": "Čím bola známa Matka Tereza?",
    "answer": "Pomocou chudobným v Indii",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 106,
    "question": "Kto je Taylor Swift?",
    "answer": "Americká speváčka",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 107,
    "question": "Čo vynašiel bratia Wrightovci?",
    "answer": "Lietadlo",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 108,
    "question": "Kto bol Wolfgang Amadeus Mozart?",
    "answer": "Slávny hudobný skladateľ",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 109,
    "question": "Čím je známy Stephen Hawking?",
    "answer": "Fyzik, výskum čiernych dier",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 110,
    "question": "Kto je hlavný hrdina filmu Spider-Man?",
    "answer": "Peter Parker",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 111,
    "question": "Ako sa volá kráľ Spojeného kráľovstva (2026)?",
    "answer": "Karol III.",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 112,
    "question": "Čím sa preslávil Marco Polo?",
    "answer": "Cestovaním do Číny",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 113,
    "question": "Kto je MrBeast?",
    "answer": "Americký youtuber",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 114,
    "question": "Čo objavila Marie Curie?",
    "answer": "Rádioaktivitu (rádium a polónium)",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 115,
    "question": "Kto je Lionel Messi?",
    "answer": "Argentínsky futbalista",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 116,
    "question": "Ako sa volal prvý slovenský kozmonaut?",
    "answer": "Ivan Bella",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 117,
    "question": "Kto namaľoval strop Sixtínskej kaplnky?",
    "answer": "Michelangelo",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 118,
    "question": "Čím je známa Greta Thunbergová?",
    "answer": "Aktivizmus za klímu",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 119,
    "question": "Kto vynašiel dynamit?",
    "answer": "Alfred Nobel",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 120,
    "question": "Aký je najvyšší vrch na svete?",
    "answer": "Mount Everest",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 121,
    "question": "Aký je najdlhší rieka na svete?",
    "answer": "Níl",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 122,
    "question": "Koľko kontinentov má Zem?",
    "answer": "7",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 123,
    "question": "Aké je hlavné mesto Slovenska?",
    "answer": "Bratislava",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 124,
    "question": "Aké je najväčšie zviera na Zemi?",
    "answer": "Vráskavec (plejtvákovitá veľryba)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 125,
    "question": "Kde žijú tučniaky?",
    "answer": "Na južnej pologuli (Antarktída)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 126,
    "question": "Aký je najväčší oceán?",
    "answer": "Tichý oceán",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 127,
    "question": "Koľko nôh má pavúk?",
    "answer": "8",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 128,
    "question": "Aký je najväčší dažďový prales?",
    "answer": "Amazonský prales",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 129,
    "question": "Čo je to vulkán?",
    "answer": "Hora, z ktorej vychádza láva",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 130,
    "question": "Aká je najväčšia púšť na svete?",
    "answer": "Sahara",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 131,
    "question": "V ktorom svetadiele žijú pandy?",
    "answer": "Ázia (Čína)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 132,
    "question": "Aký je najrýchlejší zviera na súši?",
    "answer": "Gepard",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 133,
    "question": "Koľko dní trvá rok na Zemi?",
    "answer": "365 (a štvrť)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 134,
    "question": "Aké je najväčšie jazero na svete?",
    "answer": "Kaspické more",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 135,
    "question": "Čo je to tsunami?",
    "answer": "Obrovská oceánska vlna",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 136,
    "question": "Kde žijú koaly?",
    "answer": "V Austrálii",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 137,
    "question": "Aký je najvyšší vodopád sveta?",
    "answer": "Salto Ángel (Venezuela)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 138,
    "question": "Koľko percent kyslíka produkujú oceány?",
    "answer": "Viac ako 50 %",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 139,
    "question": "Aká je najdlhšia rieka v Európe?",
    "answer": "Volga",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 140,
    "question": "Koľko metrov nad morom je Mount Everest?",
    "answer": "8849",
    "category": "priroda",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 141,
    "question": "Koľko km je obvod Zeme?",
    "answer": "40075",
    "category": "priroda",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 142,
    "question": "Kto vynašiel žiarovku?",
    "answer": "Thomas Alva Edison",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 143,
    "question": "Čo poháňa auto?",
    "answer": "Motor (spaľovací alebo elektrický)",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 144,
    "question": "Kto vynašiel telefón?",
    "answer": "Alexander Graham Bell",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 145,
    "question": "Aký je názov prvého úspešného lietadla?",
    "answer": "Wright Flyer",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 146,
    "question": "Čo je to robot?",
    "answer": "Stroj, ktorý vykonáva úlohy automaticky",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 147,
    "question": "Kto vymyslel internet?",
    "answer": "Tim Berners-Lee (WWW)",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 148,
    "question": "Čo je to GPS?",
    "answer": "Globálny pozičný systém na navigáciu",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 149,
    "question": "Aký je najrýchlejší vlak na svete?",
    "answer": "Maglev (magneticky levitujúci vlak)",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 150,
    "question": "Čo je to 3D tlačiareň?",
    "answer": "Zariadenie, ktoré tlačí trojrozmerné objekty",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 151,
    "question": "Kto vynašiel parný stroj?",
    "answer": "James Watt (zdokonalil)",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 152,
    "question": "Čo je to solárny panel?",
    "answer": "Zariadenie, ktoré mení slnečné svetlo na elektrinu",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 153,
    "question": "Aký je rozdiel medzi hardvérom a softvérom?",
    "answer": "Hardvér je fyzický, softvér je program",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 154,
    "question": "Čo je to WiFi?",
    "answer": "Bezdrôtové pripojenie na internet",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 155,
    "question": "Kto vynašiel tlačiareň (kníhtlač)?",
    "answer": "Johannes Gutenberg",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 156,
    "question": "Čo je to dron?",
    "answer": "Bezpilotné lietadlo",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 157,
    "question": "Kto vytvoril prvý automobil?",
    "answer": "Karl Benz",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 158,
    "question": "Čo je to mikročip?",
    "answer": "Malý elektronický obvod",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 159,
    "question": "V ktorom roku vznikol iPhone?",
    "answer": "2007",
    "category": "stroje",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 160,
    "question": "Dokončite: Kto druhému jamu kope...",
    "answer": "sám do nej spadne",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 161,
    "question": "Dokončite: Bez práce...",
    "answer": "nie sú koláče",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 162,
    "question": "Dokončite: Ráno múdrejšie...",
    "answer": "večera",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 163,
    "question": "Dokončite: Tichá voda...",
    "answer": "brehy myje",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 164,
    "question": "Dokončite: Kto šetrí...",
    "answer": "má za tri",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 165,
    "question": "Dokončite: Všade dobre...",
    "answer": "doma najlepšie",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 166,
    "question": "Dokončite: Lepší vrabec v hrsti...",
    "answer": "ako holub na streche",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 167,
    "question": "Dokončite: Nič nie je také zlé...",
    "answer": "aby to nebolo aj na niečo dobré",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 168,
    "question": "Dokončite: Kto neskoro chodí...",
    "answer": "sám sebe škodí",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 169,
    "question": "Dokončite: Oko za oko...",
    "answer": "zub za zub",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 170,
    "question": "Dokončite: Ako sa do hory volá...",
    "answer": "tak sa z hory ozýva",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 171,
    "question": "Dokončite: Dvakrát meraj...",
    "answer": "raz strihaj (režˇ)",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 172,
    "question": "Dokončite: Jablko nepadne...",
    "answer": "ďaleko od stromu",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 173,
    "question": "Dokončite: Každý je strojcom...",
    "answer": "svojho šťastia",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 174,
    "question": "Dokončite: Na každom šprochu...",
    "answer": "pravdy trochu",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 175,
    "question": "Dokončite: S kým sa spolčíš...",
    "answer": "tomu sa priučíš",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 176,
    "question": "Dokončite: Nie je všetko zlato...",
    "answer": "čo sa blyští",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 177,
    "question": "Dokončite: Trpezlivosť...",
    "answer": "ruže prináša",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 178,
    "question": "Dokončite: Kto mlčí...",
    "answer": "ten svedčí",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 179,
    "question": "Dokončite: Peniaze sú...",
    "answer": "dobrý sluha, ale zlý pán",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 180,
    "question": "Rozlúštite slovo: OLKO",
    "answer": "KOLO",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 181,
    "question": "Rozlúštite slovo: SALOD",
    "answer": "DOLSA",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 182,
    "question": "Rozlúštite slovo: KVAL",
    "answer": "VLAK",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 183,
    "question": "Rozlúštite slovo: ALŠOK",
    "answer": "ŠKOLA",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 184,
    "question": "Rozlúštite slovo: ORAV",
    "answer": "VORA",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 185,
    "question": "Rozlúštite slovo: KOLB",
    "answer": "BLOK",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 186,
    "question": "Rozlúštite slovo: OMDER",
    "answer": "DOMER",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 187,
    "question": "Rozlúštite slovo: TARVES",
    "answer": "STAVÉR",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 188,
    "question": "Rozlúštite slovo: DOHINA",
    "answer": "HODINA",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 189,
    "question": "Rozlúštite slovo: VRÉCE",
    "answer": "VECÉR",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 190,
    "question": "Rozlúštite slovo: IHZBA",
    "answer": "IZBA",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 191,
    "question": "Rozlúštite slovo: ELITAD",
    "answer": "DETAIL",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 192,
    "question": "Rozlúštite slovo: TOKMA",
    "answer": "MATKO",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 193,
    "question": "Rozlúštite slovo: PLERA",
    "answer": "PERLA",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 194,
    "question": "Rozlúštite slovo: ORPST",
    "answer": "SPORT",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 195,
    "question": "Rozlúštite slovo: EDVAM",
    "answer": "MEDVÁ",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 196,
    "question": "Rozlúštite slovo: CIHLE",
    "answer": "LICHE",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 197,
    "question": "Rozlúštite slovo: ROTIK",
    "answer": "KROTI",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 198,
    "question": "Rozlúštite slovo: AKSMT",
    "answer": "MÄKST",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 199,
    "question": "Rozlúštite slovo: KEROL",
    "answer": "KÔLEŘ",
    "category": "presmycky",
    "difficulty": "junior",
    "type": "anagram"
  },
  {
    "id": 200,
    "question": "Kto zložil skladbu Für Elise?",
    "answer": "Ludwig van Beethoven",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 201,
    "question": "Koľko strún má husle?",
    "answer": "4",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 202,
    "question": "Aký je najväčší dychový nástroj v orchestri?",
    "answer": "Tuba",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 203,
    "question": "Kto spieva pesničku Let It Go?",
    "answer": "Idina Menzel (z filmu Frozen)",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 204,
    "question": "Aký hudobný nástroj používa klávesy?",
    "answer": "Klavír",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 205,
    "question": "Koľko nôt má základná stupnica?",
    "answer": "7",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 206,
    "question": "Kto bol The Beatles?",
    "answer": "Britská rocková skupina",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 207,
    "question": "Čo je to hymna?",
    "answer": "Slávnostná pieseň krajiny",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 208,
    "question": "Aký nástroj bubnuje?",
    "answer": "Bicie (bubny)",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 209,
    "question": "Čo je to zbor?",
    "answer": "Skupina ľudí, ktorí spievajú spolu",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 210,
    "question": "Aký hudobný štýl je jazz?",
    "answer": "Improvizačný štýl z Ameriky",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 211,
    "question": "Kto je Ed Sheeran?",
    "answer": "Britský spevák a skladateľ",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 212,
    "question": "Čo je to opera?",
    "answer": "Divadelné predstavenie so spevom",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 213,
    "question": "Aký nástroj je flauta?",
    "answer": "Dychový nástroj",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 214,
    "question": "Čo je to duet?",
    "answer": "Skladba pre dvoch",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 215,
    "question": "Kto zložil Labutie jazero?",
    "answer": "Piotr Iljič Čajkovskij",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 216,
    "question": "Aký je názov slovenskej hymny?",
    "answer": "Nad Tatrou sa blýska",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 217,
    "question": "Koľko kláves má štandardný klavír?",
    "answer": "88",
    "category": "hudba",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 218,
    "question": "Ako sa volá hlavná postava vo filme Shrek?",
    "answer": "Shrek",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 219,
    "question": "V ktorom filme lietajú na metlách?",
    "answer": "Harry Potter",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 220,
    "question": "Kto je Elsa z filmu Frozen?",
    "answer": "Kráľovná ľadu",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 221,
    "question": "Ako sa volá rybka z animáku Hľadá sa Nemo?",
    "answer": "Nemo",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 222,
    "question": "Kto je hlavná postava v Levom kráľovi?",
    "answer": "Simba",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 223,
    "question": "Aký je názov filmu o hračkách, čo ožívajú?",
    "answer": "Toy Story (Príbeh hračiek)",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 224,
    "question": "Kto je Spider-Man v skutočnosti?",
    "answer": "Peter Parker",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 225,
    "question": "Ako sa volá robot z Hviezdnych vojen?",
    "answer": "R2-D2 (alebo C-3PO)",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 226,
    "question": "V ktorom filme je postava Woody?",
    "answer": "Toy Story (Príbeh hračiek)",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 227,
    "question": "Kto je hlavná postava v Kung Fu Panda?",
    "answer": "Po",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 228,
    "question": "Ako sa volá princezná z Rapunzel?",
    "answer": "Rapunzel",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 229,
    "question": "Čo je to Hollywood?",
    "answer": "Centrum filmového priemyslu v USA",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 230,
    "question": "Kto je Iron Man v skutočnosti?",
    "answer": "Tony Stark",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 231,
    "question": "Ako sa volá animovaný film o emóciách?",
    "answer": "V hlave (Inside Out)",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 232,
    "question": "Kto je Batman?",
    "answer": "Bruce Wayne",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 233,
    "question": "Čo je to animovaný film?",
    "answer": "Film vytvorený kreslením alebo počítačom",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 234,
    "question": "Aký je najznámejší film o dinosauroch?",
    "answer": "Jurský park (Jurassic Park)",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 235,
    "question": "V ktorom roku vyšiel prvý film Harryho Pottera?",
    "answer": "2001",
    "category": "film",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 236,
    "question": "Koľko je 7 × 8?",
    "answer": "56",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 237,
    "question": "Koľko strán má štvorec?",
    "answer": "4",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 238,
    "question": "Koľko je 100 - 37?",
    "answer": "63",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 239,
    "question": "Aký tvar má futbalová lopta?",
    "answer": "Guľa (sféra)",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 240,
    "question": "Koľko minút má hodina?",
    "answer": "60",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 241,
    "question": "Koľko je 9 × 9?",
    "answer": "81",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 242,
    "question": "Koľko uhlov má trojuholník?",
    "answer": "3",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 243,
    "question": "Koľko je 15 + 28?",
    "answer": "43",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 244,
    "question": "Koľko je polovica zo 100?",
    "answer": "50",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 245,
    "question": "Koľko dní má február v priestupnom roku?",
    "answer": "29",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 246,
    "question": "Koľko je 12 × 12?",
    "answer": "144",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 247,
    "question": "Aký tvar má kocka?",
    "answer": "6 štvorcových stien",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 248,
    "question": "Koľko sekúnd má minúta?",
    "answer": "60",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 249,
    "question": "Koľko je 256 + 144?",
    "answer": "400",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 250,
    "question": "Koľko hodín má deň?",
    "answer": "24",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 251,
    "question": "Koľko je tretina z 90?",
    "answer": "30",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 252,
    "question": "Koľko je 1000 / 8?",
    "answer": "125",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 253,
    "question": "Koľko milimetrov je v 1 metri?",
    "answer": "1000",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 254,
    "question": "Aký je obvod štvorca so stranou 5 cm?",
    "answer": "20 cm",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 255,
    "question": "Koľko gramov má 1 kilogram?",
    "answer": "1000",
    "category": "matematika",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 256,
    "question": "Čo sa stalo 11. septembra 2001 v USA?",
    "answer": "Teroristický útok na Dvojičky",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 257,
    "question": "Čo bol Titanic?",
    "answer": "Loď, ktorá sa potopila v roku 1912",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 258,
    "question": "Kedy človek prvýkrát letel do vesmíru?",
    "answer": "1961 (Jurij Gagarin)",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 259,
    "question": "Čo bola studenú vojna?",
    "answer": "Rivalita medzi USA a ZSSR",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 260,
    "question": "Kedy padol Berlínsky múr?",
    "answer": "1989",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 261,
    "question": "Čo boli olympijské hry v staroveku?",
    "answer": "Športové súťaže v Grécku",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 262,
    "question": "Kedy vzniklo Slovensko ako samostatný štát?",
    "answer": "1. januára 1993",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 263,
    "question": "Čo bol veľký požiar Londýna?",
    "answer": "Požiar v roku 1666",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 264,
    "question": "Kedy sa začala prvá svetová vojna?",
    "answer": "1914",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 265,
    "question": "Čo bola francúzska revolúcia?",
    "answer": "Zvrhnutie kráľovskej moci vo Francúzsku (1789)",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 266,
    "question": "Kedy prišiel človek prvýkrát na Mesiac?",
    "answer": "1969",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 267,
    "question": "Čo je to Deklarácia nezávislosti?",
    "answer": "Dokument o nezávislosti USA (1776)",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 268,
    "question": "Kedy sa skončila studená vojna?",
    "answer": "1991",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 269,
    "question": "Čo bol holokaust?",
    "answer": "Genocída počas 2. svetovej vojny",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 270,
    "question": "V ktorom roku sa potopil Titanic?",
    "answer": "1912",
    "category": "historicke_podujatia",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 271,
    "question": "Čo je to magma?",
    "answer": "Roztavená hornina pod povrchom Zeme",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 272,
    "question": "Aký plyn vydychujeme?",
    "answer": "Oxid uhličitý (CO2)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 273,
    "question": "Čo je to hmla?",
    "answer": "Oblak pri zemi",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 274,
    "question": "Prečo je obloha modrá?",
    "answer": "Kvôli rozptylu svetla v atmosfére",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 275,
    "question": "Koľko mesiacov má rok?",
    "answer": "12",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 276,
    "question": "Aká je najväčšia šelma na svete?",
    "answer": "Ľadový medveď (alebo biely medveď)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 277,
    "question": "Koľko krčkov majú žirafy?",
    "answer": "Jeden, ale 7 stavcov",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 278,
    "question": "Kde žijú lamy?",
    "answer": "V Južnej Amerike (Andy)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 279,
    "question": "Čo je to korálový útes?",
    "answer": "Podmorská stavba z koralov",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 280,
    "question": "Aký zvuk robí delfín?",
    "answer": "Klikanie a pískanie",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 281,
    "question": "Čo je to olympiáda?",
    "answer": "Medzinárodné športové súťaže",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 282,
    "question": "Koľko hráčov je v hádzanárskom tíme?",
    "answer": "7",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 283,
    "question": "V akom športe sa používa florbalka?",
    "answer": "Florbal",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 284,
    "question": "Kde sa konali zimné OH 2022?",
    "answer": "Peking",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 285,
    "question": "Čo je to slalom?",
    "answer": "Lyžovanie medzi bránkami",
    "category": "sport",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 286,
    "question": "Čo je to graffiti?",
    "answer": "Maľba alebo nápis na stene",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 287,
    "question": "Kto vytvoril Mickey Mousa?",
    "answer": "Walt Disney",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 288,
    "question": "Čo je to galéria?",
    "answer": "Miesto, kde sa vystavujú umelecké diela",
    "category": "kultura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 289,
    "question": "Ako sa volá zelený ogre z animáku?",
    "answer": "Shrek",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 290,
    "question": "Kto je Pikachu?",
    "answer": "Pokémon",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 291,
    "question": "Ako sa volá Batmanovo mesto?",
    "answer": "Gotham City",
    "category": "film",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 292,
    "question": "Čo je to elektrický auto?",
    "answer": "Auto poháňané elektromotorom",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 293,
    "question": "Čo je to teleskop?",
    "answer": "Zariadenie na pozorovanie hviezd",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 294,
    "question": "Kto vynašiel rádio?",
    "answer": "Guglielmo Marconi",
    "category": "stroje",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 295,
    "question": "Kto napísal Pána prsteňov?",
    "answer": "J. R. R. Tolkien",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 296,
    "question": "Čo je to báseň?",
    "answer": "Literárne dielo písané veršami",
    "category": "literatura",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 297,
    "question": "Čo je to gitara?",
    "answer": "Strunový hudobný nástroj",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 298,
    "question": "Kto je Adele?",
    "answer": "Britská speváčka",
    "category": "hudba",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 299,
    "question": "Kto bol Ľudovít Štúr?",
    "answer": "Slovenský národný buditeľ",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 300,
    "question": "Kto je Dominika Cibulková?",
    "answer": "Slovenská tenistka",
    "category": "osobnosti",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 301,
    "question": "Čo bol hrad?",
    "answer": "Opevnené sídlo panovníka",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 302,
    "question": "Kto boli gladiátori?",
    "answer": "Bojovníci v rímskych arénach",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 303,
    "question": "Koľko je 5 × 5?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 304,
    "question": "Koľko je 100 / 4?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 305,
    "question": "Koľko stien má kváder?",
    "answer": "6",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 306,
    "question": "Dokončite: Kto skoro vstáva...",
    "answer": "tomu Pán Boh dáva",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 307,
    "question": "Dokončite: Ranné vtáča...",
    "answer": "ďalej doskáče",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 308,
    "question": "Dokončite: Lož má...",
    "answer": "krátke nohy",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 309,
    "question": "Dokončite: Koniec dobrý...",
    "answer": "všetko dobré",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 310,
    "question": "Dokončite: Vlk v ovčej...",
    "answer": "koži",
    "category": "doplnovacky",
    "difficulty": "junior",
    "type": "complete_sentence"
  },
  {
    "id": 311,
    "question": "V ktorom roku vypukla Francúzska revolúcia?",
    "answer": "1789",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 312,
    "question": "Kto bol Napoleon Bonaparte?",
    "answer": "Francúzsky cisár a vojvodca",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 313,
    "question": "Čo bol Veľký čínsky múr a prečo bol postavený?",
    "answer": "Obranná stavba proti nájazdom z norte",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 314,
    "question": "Kto bol Alexander Veľký?",
    "answer": "Macedónsky kráľ a dobyvateľ",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 315,
    "question": "Čo bola renesancia?",
    "answer": "Obdobie obnovenia záujmu o antiku (14.-17. stor.)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 316,
    "question": "V ktorom roku začala 1. svetová vojna?",
    "answer": "1914",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 317,
    "question": "Čo bola reformácia?",
    "answer": "Náboženské hnutie za reformu cirkvi (Martin Luther)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 318,
    "question": "Kto bol Džingischán?",
    "answer": "Zakladateľ Mongolskej ríše",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 319,
    "question": "Čo boli krížové výpravy?",
    "answer": "Vojenské výpravy kresťanov do Svätej zeme",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 320,
    "question": "V ktorom roku sa skončila studená vojna?",
    "answer": "1991 (rozpad ZSSR)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 321,
    "question": "Kto bol Nero?",
    "answer": "Rímsky cisár známy pre svoju krutosť",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 322,
    "question": "Čo bola Veľká depresia?",
    "answer": "Svetová hospodárska kríza v 30. rokoch",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 323,
    "question": "Kto podpísal Mníchovskú dohodu?",
    "answer": "Nemecko, Taliansko, Francúzsko, Veľká Británia",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 324,
    "question": "V ktorom roku vznikla Česko-Slovenská republika?",
    "answer": "1918",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 325,
    "question": "Čo bola Berlínska konferencia (1884)?",
    "answer": "Rozdelenie Afriky medzi koloniálne mocnosti",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 326,
    "question": "Kto bol Mahatma Gándhí?",
    "answer": "Indický vodca boja za nezávislosť",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 327,
    "question": "V ktorom roku sa rozpadlo Česko-Slovensko?",
    "answer": "1993",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 328,
    "question": "Kto bol Spartakus?",
    "answer": "Vodca otrockého povstania v Ríme",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 329,
    "question": "V ktorom roku padol Rím?",
    "answer": "476 n. l.",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 330,
    "question": "V ktorom roku vypukol SNP?",
    "answer": "1944",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 331,
    "question": "Čo je to periodická tabuľka?",
    "answer": "Usporiadanie chemických prvkov podľa atómového čísla",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 332,
    "question": "Kto sformuloval zákon gravitácie?",
    "answer": "Isaac Newton",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 333,
    "question": "Čo je to evolúcia?",
    "answer": "Postupný vývoj organizmov v čase",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 334,
    "question": "Aký je chemický vzorec kyseliny sírovej?",
    "answer": "H2SO4",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 335,
    "question": "Čo je to čierna diera?",
    "answer": "Oblasť priestoru s extrémnou gravitáciou",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 336,
    "question": "Kto objavil penicilín?",
    "answer": "Alexander Fleming",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 337,
    "question": "Čo sú to chromozómy?",
    "answer": "Štruktúry nesúce gény v bunke",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 338,
    "question": "Aký je rozdiel medzi atómom a molekulou?",
    "answer": "Atóm je základná jednotka, molekula je zoskupenie atómov",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 339,
    "question": "Čo je to fotón?",
    "answer": "Častica svetla",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 340,
    "question": "Koľko prvkov má periodická tabuľka (2024)?",
    "answer": "118",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 341,
    "question": "Čo je to mitóza?",
    "answer": "Delenie bunky na dve identické dcérske bunky",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 342,
    "question": "Aký plyn tvorí väčšinu atmosféry?",
    "answer": "Dusík (78 %)",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 343,
    "question": "Čo je to supravodivosť?",
    "answer": "Nulový elektrický odpor pri veľmi nízkej teplote",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 344,
    "question": "Kto sformuloval teóriu relativity?",
    "answer": "Albert Einstein",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 345,
    "question": "Čo je to enzým?",
    "answer": "Biologický katalyzátor chemických reakcií",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 346,
    "question": "Koľko párov chromozómov má človek?",
    "answer": "23",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 347,
    "question": "Čo je to plazma (stav hmoty)?",
    "answer": "Ionizovaný plyn – štvrtý stav hmoty",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 348,
    "question": "Aký je chemický vzorec etanolu?",
    "answer": "C2H5OH",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 349,
    "question": "Koľko prvkov je v periodickej tabuľke?",
    "answer": "118",
    "category": "veda",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 350,
    "question": "Aká je rýchlosť svetla v km/s?",
    "answer": "299792",
    "category": "veda",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 351,
    "question": "Koľko Grand Slamov vyhral Roger Federer?",
    "answer": "20",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 352,
    "question": "V ktorom roku sa konali OH v Berlíne?",
    "answer": "1936",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 353,
    "question": "Kto drží rekord v skoku do výšky mužov (2024)?",
    "answer": "Javier Sotomayor",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 354,
    "question": "Koľko hráčov je vo vodnom póle na jednej strane?",
    "answer": "7",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 355,
    "question": "Čo je to triatlón?",
    "answer": "Plávanie, cyklistika, beh",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 356,
    "question": "V ktorom klube hral Pelé väčšinu kariéry?",
    "answer": "Santos FC",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 357,
    "question": "Koľko kôl má F1 závod (priemerne)?",
    "answer": "Asi 50-70",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 358,
    "question": "Čo je to foul v basketbale?",
    "answer": "Nedovolený kontakt s protihráčom",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 359,
    "question": "Kto vyhral MS vo futbale 2022?",
    "answer": "Argentína",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 360,
    "question": "V akom športe sa používa šermovanie?",
    "answer": "Šerm",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 361,
    "question": "Koľko kategórií existuje v boxe?",
    "answer": "17 váhových kategórií",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 362,
    "question": "Čo je to offsajd vo futbale?",
    "answer": "Postavenie hráča za posledným obrancom",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 363,
    "question": "Kto je najrýchlejší muž na 100m?",
    "answer": "Usain Bolt (9,58 s)",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 364,
    "question": "V akom športe súťaží Peter Sagan?",
    "answer": "Cestná cyklistika",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 365,
    "question": "Čo je to deuce v tenise?",
    "answer": "Stav 40:40 v geme",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 366,
    "question": "Koľko hráčov je v rugby tíme?",
    "answer": "15",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 367,
    "question": "V ktorom roku sa konali prvé moderné OH?",
    "answer": "1896",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 368,
    "question": "Koľko bodov je trojka v basketbale?",
    "answer": "3",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 369,
    "question": "Kto namaľoval Guernica?",
    "answer": "Pablo Picasso",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 370,
    "question": "Čo je to impresionizmus?",
    "answer": "Umelecký smer zachytávajúci okamžité dojmy svetla",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 371,
    "question": "Kto napísal symfóniu Osud?",
    "answer": "Ludwig van Beethoven (5. symfónia)",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 372,
    "question": "Čo je to gotický štýl v architektúre?",
    "answer": "Štýl s vysokými oknami a lomenými oblúkmi",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 373,
    "question": "Kto je autor sochy Mysliteľ?",
    "answer": "Auguste Rodin",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 374,
    "question": "Čo je to surrealismus?",
    "answer": "Umelecký smer zobrazujúci sny a podvedomie",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 375,
    "question": "Kto bol Andy Warhol?",
    "answer": "Americký pop-art umelec slovenského pôvodu",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 376,
    "question": "Čo je to kabuki?",
    "answer": "Tradičné japonské divadlo",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 377,
    "question": "Kto zložil Bolero?",
    "answer": "Maurice Ravel",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 378,
    "question": "Čo je to dadaizmus?",
    "answer": "Umelecký smer popierajúci tradičné umenie",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 379,
    "question": "Kde sa nachádza Sagrada Família?",
    "answer": "Barcelona, Španielsko",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 380,
    "question": "Kto navrhol Sagrada Família?",
    "answer": "Antoni Gaudí",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 381,
    "question": "Čo je to kubizmus?",
    "answer": "Umelecký smer s geometrickými tvarmi",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 382,
    "question": "Kto je autor Výkriku?",
    "answer": "Edvard Munch",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 383,
    "question": "Čo je to baroko?",
    "answer": "Umelecký štýl 17.-18. storočia, bohatá výzdoba",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 384,
    "question": "V ktorom meste je Prado?",
    "answer": "Madrid",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 385,
    "question": "Kto bol Rembrandt?",
    "answer": "Holandský maliar zlatého veku",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 386,
    "question": "Kto napísal Vojnu a mier?",
    "answer": "Lev Nikolajevič Tolstoj",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 387,
    "question": "Čo je to dystópia?",
    "answer": "Literárny žáner o negatívnej budúcnosti",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 388,
    "question": "Kto napísal 1984?",
    "answer": "George Orwell",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 389,
    "question": "Čo je to haiku a koľko má slabík?",
    "answer": "Japonská báseň: 5-7-5 slabík",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 390,
    "question": "Kto napísal Romea a Júliu?",
    "answer": "William Shakespeare",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 391,
    "question": "Čo je to tragédia v literatúre?",
    "answer": "Dramatické dielo s nešťastným koncom",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 392,
    "question": "Kto napísal Malého princa?",
    "answer": "Antoine de Saint-Exupéry",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 393,
    "question": "Čo je to sonnet?",
    "answer": "Básnická forma so 14 veršami",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 394,
    "question": "Kto napísal Veľkého Gatsbyho?",
    "answer": "F. Scott Fitzgerald",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 395,
    "question": "Čo je to metafora?",
    "answer": "Prenesené pomenovanie",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 396,
    "question": "Kto napísal Starec a more?",
    "answer": "Ernest Hemingway",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 397,
    "question": "Čo je to román?",
    "answer": "Dlhé prozaické literárne dielo",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 398,
    "question": "Kto napísal Zločin a trest?",
    "answer": "Fiodor Dostojevskij",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 399,
    "question": "Kto je autor Hraběte Monte Crista?",
    "answer": "Alexandre Dumas",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 400,
    "question": "Čo je to alegória?",
    "answer": "Príbeh so skrytým významom",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 401,
    "question": "Kto napísal Canterburské poviedky?",
    "answer": "Geoffrey Chaucer",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 402,
    "question": "Kto bol Nikola Tesla?",
    "answer": "Vynálezca striedavého prúdu a rádia",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 403,
    "question": "Čím sa preslávil Charles Darwin?",
    "answer": "Teóriou evolúcie",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 404,
    "question": "Kto bol Sigmund Freud?",
    "answer": "Zakladateľ psychoanalýzy",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 405,
    "question": "Čo objavil Galileo Galilei?",
    "answer": "Mesiace Jupitera, potvrdil heliocentrizmus",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 406,
    "question": "Kto bol Nelson Mandela?",
    "answer": "Juhoafrický bojovník za slobodu, prvý čierny prezident",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 407,
    "question": "Čím sa preslávila Florence Nightingalová?",
    "answer": "Zakladateľka moderného ošetrovateľstva",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 408,
    "question": "Kto bol Leonardo da Vinci?",
    "answer": "Renesančný génius – maliar, vedec, vynálezca",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 409,
    "question": "Čo urobil Martin Luther King Jr.?",
    "answer": "Bojoval za občianske práva Afroameričanov",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 410,
    "question": "Kto bol Aristoteles?",
    "answer": "Grécky filozof, žiak Platóna",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 411,
    "question": "Čím sa preslávila Ada Lovelaceová?",
    "answer": "Prvá programátorka v histórii",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 412,
    "question": "Kto bol Milan Rastislav Štefánik?",
    "answer": "Slovenský politik, astronóm, generál",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 413,
    "question": "Čo urobil Johannes Kepler?",
    "answer": "Zákon pohybu planét",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 414,
    "question": "Kto je Steve Jobs?",
    "answer": "Spoluzakladateľ Apple",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 415,
    "question": "Čím sa preslávil Hippokrates?",
    "answer": "Otec medicíny",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 416,
    "question": "Kto bol Alexander Dubček?",
    "answer": "Slovenský politik, tvár Pražskej jari 1968",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 417,
    "question": "Kto objavil Ameriku?",
    "answer": "Krištof Kolumbus (1492)",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 418,
    "question": "Čo je to fotosyntéza a kde prebieha?",
    "answer": "Premena CO2 na O2 v chloroplastoch rastlín",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 419,
    "question": "Aký je rozdiel medzi savecmi a plazmi?",
    "answer": "Savcov majú stálu telesnú teplotu, plazy nie",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 420,
    "question": "Čo je to ekosystém?",
    "answer": "Spoločenstvo organizmov a ich prostredie",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 421,
    "question": "Koľko je tektonických platní?",
    "answer": "7 veľkých a mnoho menších",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 422,
    "question": "Čo je to ozónová vrstva?",
    "answer": "Časť atmosféry, ktorá chráni pred UV žiarením",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 423,
    "question": "Aký je najhlbší bod oceánu?",
    "answer": "Mariánska priekopa (Challenger Deep)",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 424,
    "question": "Čo je to migrácia zvierat?",
    "answer": "Sezónne sťahovanie do iných oblastí",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 425,
    "question": "Aký je najväčší koralový útes?",
    "answer": "Veľký bariérový útes",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 426,
    "question": "Čo je to symbióza?",
    "answer": "Vzájomne výhodné spolužitie dvoch organizmov",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 427,
    "question": "Aký je najväčší strom na svete?",
    "answer": "Sekvoja (General Sherman)",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 428,
    "question": "Čo je to potravový reťazec?",
    "answer": "Postupnosť organizmov, kde každý je potravou ďalšieho",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 429,
    "question": "Aký je rozdiel medzi stavovcami a bezstavovcami?",
    "answer": "Stavovce majú chrbticu",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 430,
    "question": "Čo spôsobuje prílivovú vlnu?",
    "answer": "Gravitačná sila Mesiaca",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 431,
    "question": "Aký je najväčší ostrov na svete?",
    "answer": "Grónsko",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 432,
    "question": "Kde je Sahel?",
    "answer": "Oblasť na juhu Sahary v Afrike",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 433,
    "question": "Aký je najvyšší vrch Európy?",
    "answer": "Elbrusu (alebo Mont Blanc v Z. Európe)",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 434,
    "question": "Aká je hĺbka Mariánskej priekopy v metroch?",
    "answer": "10994",
    "category": "priroda",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 435,
    "question": "Kto vynašiel rádio?",
    "answer": "Guglielmo Marconi",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 436,
    "question": "Čo je to turbína?",
    "answer": "Stroj, ktorý premieňa prúdenie na rotáciu",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 437,
    "question": "Kto vyrobil prvý automobil poháňaný benzínom?",
    "answer": "Karl Benz (1885)",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 438,
    "question": "Čo je to dieselový motor?",
    "answer": "Spaľovací motor so samovznietením paliva",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 439,
    "question": "Aký je princíp fungovania mikrovlnky?",
    "answer": "Ohrievanie jedla mikrovlnným žiarením",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 440,
    "question": "Kto vynašiel dynamit?",
    "answer": "Alfred Nobel (1867)",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 441,
    "question": "Čo je to robotika?",
    "answer": "Vedný odbor zaoberajúci sa návrhom robotov",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 442,
    "question": "Aký je princíp fungovania solárneho panelu?",
    "answer": "Fotovoltaický efekt – svetlo na elektrinu",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 443,
    "question": "Kto postavil prvú parnú lokomotívu?",
    "answer": "George Stephenson (Rocket, 1829)",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 444,
    "question": "Čo je to blockchain?",
    "answer": "Decentralizovaná technológia pre bezpečné záznamy",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 445,
    "question": "Aký je princíp fungovania lasera?",
    "answer": "Stimulovaná emisia žiarenia",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 446,
    "question": "Kto vynašiel televíziu?",
    "answer": "John Logie Baird (1926)",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 447,
    "question": "Čo je to umelá inteligencia?",
    "answer": "Počítačové systémy simulujúce ľudskú inteligenciu",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 448,
    "question": "Aký je princíp fungovania batérie?",
    "answer": "Chemická reakcia produkujúca elektrickú energiu",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 449,
    "question": "Čo je to superpočítač?",
    "answer": "Najvýkonnejší počítač pre zložité výpočty",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 450,
    "question": "V ktorom roku vznikol prvý webový prehliadač?",
    "answer": "1990",
    "category": "stroje",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 451,
    "question": "Dokončite: Jablko nepadne ďaleko...",
    "answer": "od stromu",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 452,
    "question": "Dokončite: Čo ťa nepáli...",
    "answer": "nehas",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 453,
    "question": "Dokončite: Stará láska...",
    "answer": "nehrdzavie",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 454,
    "question": "Dokončite: Počet nerobí...",
    "answer": "kvalitu",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 455,
    "question": "Dokončite: V jednote je...",
    "answer": "sila",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 456,
    "question": "Dokončite: Múdry sa poučí z chýb...",
    "answer": "iných, hlúpy z vlastných",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 457,
    "question": "Dokončite: Účel svätí...",
    "answer": "prostriedky",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 458,
    "question": "Dokončite: Kto sa smeje naposledy...",
    "answer": "ten sa smeje najlepšie",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 459,
    "question": "Dokončite: Kde niet žalobcu...",
    "answer": "niet sudcu",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 460,
    "question": "Dokončite: Vrana k vrane...",
    "answer": "sadá",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 461,
    "question": "Dokončite: Sýty hladnému...",
    "answer": "neverí",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 462,
    "question": "Dokončite: Čo sa v mladosti naučíš...",
    "answer": "v starobe akoby si našiel",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 463,
    "question": "Dokončite: Pýcha predchádza...",
    "answer": "pád",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 464,
    "question": "Dokončite: Komu niet rady...",
    "answer": "tomu niet pomoci",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 465,
    "question": "Dokončite: Hlad je najlepší...",
    "answer": "kuchár",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 466,
    "question": "Dokončite: Každá minca má...",
    "answer": "dve strany",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 467,
    "question": "Dokončite: Kto sa bojí...",
    "answer": "nesmie do lesa",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 468,
    "question": "Dokončite: Dvakrát meraj...",
    "answer": "raz režˇ",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 469,
    "question": "Dokončite: Cudzie nechaj...",
    "answer": "a chráň si svoje",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 470,
    "question": "Dokončite: Sľuby-chyby...",
    "answer": "(sľuby sa nedodržiavajú)",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 471,
    "question": "Rozlúštite prešmyčku: ROTISAHI",
    "answer": "HISTÓRIA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 472,
    "question": "Rozlúštite prešmyčku: ACENVRIE",
    "answer": "VERIACE",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 473,
    "question": "Rozlúštite prešmyčku: DARBISTOLA",
    "answer": "BRATISLAVA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 474,
    "question": "Rozlúštite prešmyčku: YMATAMKITE",
    "answer": "MATEMATIK",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 475,
    "question": "Rozlúštite prešmyčku: ROPOTSŠV",
    "answer": "ŠPORSTOV",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 476,
    "question": "Rozlúštite prešmyčku: ALOTKÚRF",
    "answer": "FUTBÁLOŘ",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 477,
    "question": "Rozlúštite prešmyčku: EIBOLOGÁI",
    "answer": "BIOLÓGIA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 478,
    "question": "Rozlúštite prešmyčku: ROFOSFEPR",
    "answer": "PROFESOR",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 479,
    "question": "Rozlúštite prešmyčku: TMAFRINAKOI",
    "answer": "INFORMATIK",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 480,
    "question": "Rozlúštite prešmyčku: REKULÁČL",
    "answer": "ČLÁNKURE",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 481,
    "question": "Rozlúštite prešmyčku: DANEMRIOA",
    "answer": "ROIMNÁDE",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 482,
    "question": "Rozlúštite prešmyčku: STENVRIUA",
    "answer": "UNIVERSTA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 483,
    "question": "Rozlúštite prešmyčku: AROHFIGOFE",
    "answer": "GEOGRAFIA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 484,
    "question": "Rozlúštite prešmyčku: YLOFIZEA",
    "answer": "FILOZOFIA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 485,
    "question": "Rozlúštite prešmyčku: KENOÓIMAIK",
    "answer": "EKONOMIKA",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 486,
    "question": "Rozlúštite prešmyčku: TSAMTEIAKA",
    "answer": "MATEMATIK",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 487,
    "question": "Rozlúštite prešmyčku: ÍSYCHRTIA",
    "answer": "PSYCHIATR",
    "category": "presmycky",
    "difficulty": "level1",
    "type": "anagram"
  },
  {
    "id": 488,
    "question": "Kto zložil Mesačnú sonátu?",
    "answer": "Ludwig van Beethoven",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 489,
    "question": "Čo je to symphonia?",
    "answer": "Rozsiahla orchestrálna skladba",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 490,
    "question": "Kto bol Frédéric Chopin?",
    "answer": "Poľský klavírny skladateľ romantizmu",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 491,
    "question": "Čo je to jazz a kde vznikol?",
    "answer": "Hudobný žáner vzniknutý v New Orleanse",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 492,
    "question": "Kto je známy ako Kráľ rock and rollu?",
    "answer": "Elvis Presley",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 493,
    "question": "Čo je to a cappella?",
    "answer": "Spev bez hudobného sprievodu",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 494,
    "question": "Kto zložil Štyri ročné obdobia?",
    "answer": "Antonio Vivaldi",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 495,
    "question": "Čo je to blues?",
    "answer": "Hudobný žáner afroamerického pôvodu",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 496,
    "question": "Kto bol Johann Sebastian Bach?",
    "answer": "Nemecký barokový skladateľ",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 497,
    "question": "Čo je to koncert (concerto)?",
    "answer": "Skladba pre sólový nástroj a orchester",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 498,
    "question": "Kto založil skupinu Queen?",
    "answer": "Freddie Mercury, Brian May a ďalší",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 499,
    "question": "Čo je to sonáta?",
    "answer": "Skladba pre jeden alebo dva nástroje",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 500,
    "question": "Kto je Bob Marley?",
    "answer": "Jamajský reggae hudobník",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 501,
    "question": "Čo je to hip-hop?",
    "answer": "Hudobný a kultúrny hnutie z Bronxu",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 502,
    "question": "Kto je najúspešnejšia speváčka 21. storočia?",
    "answer": "Taylor Swift (alebo Beyoncé)",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 503,
    "question": "V ktorom roku vyšiel album Thriller (M. Jackson)?",
    "answer": "1982",
    "category": "hudba",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 504,
    "question": "Kto režíroval Schindlerov zoznam?",
    "answer": "Steven Spielberg",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 505,
    "question": "Aký film vyhral najviac Oscarov v histórii?",
    "answer": "Ben Hur, Titanic, Pán prsteňov (11)",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 506,
    "question": "Kto hrá hlavnú rolu v The Matrix?",
    "answer": "Keanu Reeves",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 507,
    "question": "Čo je to filmový noir?",
    "answer": "Temný filmový žáner z 40.-50. rokov",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 508,
    "question": "Kto režíroval Pulp Fiction?",
    "answer": "Quentin Tarantino",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 509,
    "question": "Aký je najúspešnejší film v histórii tržieb?",
    "answer": "Avatar (2009)",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 510,
    "question": "Kto hrá James Bonda najčastejšie?",
    "answer": "Sean Connery alebo Roger Moore",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 511,
    "question": "Čo je to MCU?",
    "answer": "Marvel Cinematic Universe",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 512,
    "question": "Kto režíroval Inception?",
    "answer": "Christopher Nolan",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 513,
    "question": "Aký je žáner filmu Votrelec?",
    "answer": "Sci-fi horor",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 514,
    "question": "Kto hrá Hannibala Lectera v Mlčaní jahniat?",
    "answer": "Anthony Hopkins",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 515,
    "question": "Čo je to anime?",
    "answer": "Japonský animovaný film alebo seriál",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 516,
    "question": "Kto režíroval Forrest Gump?",
    "answer": "Robert Zemeckis",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 517,
    "question": "Koľko filmov má séria Star Wars?",
    "answer": "9 hlavných + spinoffy",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 518,
    "question": "Kto hrá Jacka Sparrowa?",
    "answer": "Johnny Depp",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 519,
    "question": "V ktorom roku vyšiel prvý film Pixar (Toy Story)?",
    "answer": "1995",
    "category": "film",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 520,
    "question": "Koľko je odmocnina z 144?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 521,
    "question": "Čo je to Pytagorova veta?",
    "answer": "a² + b² = c²",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 522,
    "question": "Koľko je 17 × 13?",
    "answer": "221",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 523,
    "question": "Čo je to prvočíslo?",
    "answer": "Číslo deliteľné len 1 a sebou samým",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 524,
    "question": "Koľko stupňov má trojuholník?",
    "answer": "180°",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 525,
    "question": "Čo je to Fibonacciho postupnosť?",
    "answer": "1, 1, 2, 3, 5, 8, 13... (súčet dvoch predch.)",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 526,
    "question": "Koľko je 2 na 10?",
    "answer": "1024",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 527,
    "question": "Čo je to logaritmus?",
    "answer": "Inverzná funkcia k mocnine",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 528,
    "question": "Koľko je π (pí) na 4 desatinné miesta?",
    "answer": "3,1416",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 529,
    "question": "Čo je to množina?",
    "answer": "Súbor navzájom rôznych objektov",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 530,
    "question": "Koľko je faktoriál 5 (5!)?",
    "answer": "120",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 531,
    "question": "Čo je to tangens?",
    "answer": "Pomer protiľahlej a priľahlej strany v trojuholníku",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 532,
    "question": "Koľko je √225?",
    "answer": "15",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 533,
    "question": "Čo je to derivácia?",
    "answer": "Miera zmeny funkcie",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 534,
    "question": "Koľko je 33 × 33?",
    "answer": "1089",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 535,
    "question": "Čo je to matica?",
    "answer": "Obdĺžnikové pole čísel",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 536,
    "question": "Koľko je 999 + 1?",
    "answer": "1000",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 537,
    "question": "Koľko hrán má dvanásťstenník?",
    "answer": "30",
    "category": "matematika",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 538,
    "question": "Kedy sa konal Viedenský kongres?",
    "answer": "1814-1815",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 539,
    "question": "Čo bola Bitka pri Waterloo?",
    "answer": "Posledná bitka Napoleona (1815)",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 540,
    "question": "Kedy vznikla EÚ (Maastrichtská zmluva)?",
    "answer": "1993",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 541,
    "question": "Čo bol Manhattanský projekt?",
    "answer": "Vývoj atómovej bomby v USA",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 542,
    "question": "Kedy sa konala Konferencia v Jalte?",
    "answer": "1945",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 543,
    "question": "Čo bola Pražská jar?",
    "answer": "Obdobie politickej liberalizácie v ČSSR (1968)",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 544,
    "question": "Kedy padla Konštantínopol?",
    "answer": "1453",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 545,
    "question": "Čo bol Mníchovský diktát?",
    "answer": "Dohoda o odstúpení Sudet (1938)",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 546,
    "question": "Kedy bola vydaná Magna Carta?",
    "answer": "1215",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 547,
    "question": "Čo bola Veľká francúzska revolúcia?",
    "answer": "Zvrhnutie absolutizmu vo Francúzsku (1789)",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 548,
    "question": "Kedy vzniklo NATO?",
    "answer": "1949",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 549,
    "question": "Čo bol Varšavský pakt?",
    "answer": "Vojenský pakt socialistických krajín (1955)",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 550,
    "question": "V ktorom roku pristúpilo Slovensko do EÚ?",
    "answer": "2004",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 551,
    "question": "Čo je to neutron?",
    "answer": "Elektricky neutrálna častica v jadre atómu",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 552,
    "question": "Aký je vzorec sily?",
    "answer": "F = m × a",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 553,
    "question": "Čo je to osmóza?",
    "answer": "Prechod vody cez polopriepustnú membránu",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 554,
    "question": "Aký je Avogadrovo číslo?",
    "answer": "6,022 × 10^23",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 555,
    "question": "Čo je to taiga?",
    "answer": "Ihličnatý les v severných oblastiach",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 556,
    "question": "Aký je najväčší cicavec?",
    "answer": "Plejtvákovitá veľryba (veľryba modrá)",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 557,
    "question": "Čo je to endemit?",
    "answer": "Organizmus žijúci len v jednej oblasti",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 558,
    "question": "Kde sa nachádza Galapágy?",
    "answer": "V Tichom oceáne pri Ekvádore",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 559,
    "question": "Čo je to decatlón?",
    "answer": "Atletický desaťboj",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 560,
    "question": "Kto je najlepší strelec v histórii futbalu?",
    "answer": "Cristiano Ronaldo (alebo Messi)",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 561,
    "question": "Čo je to biatlon?",
    "answer": "Kombinácia bežeckého lyžovania a streľby",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 562,
    "question": "Kto napísal Hviezdnu noc?",
    "answer": "Vincent van Gogh",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 563,
    "question": "Čo je to secesia?",
    "answer": "Umelecký štýl okolo roku 1900",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 564,
    "question": "Kde sa nachádza Tadž Mahál?",
    "answer": "V Agre, India",
    "category": "kultura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 565,
    "question": "Kto režíroval Titanic?",
    "answer": "James Cameron",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 566,
    "question": "Čo je to IMAX?",
    "answer": "Formát pre veľkoplošné premietanie",
    "category": "film",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 567,
    "question": "Čo je to kvantový počítač?",
    "answer": "Počítač využívajúci kvantovú mechaniku",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 568,
    "question": "Aký je princíp fungovania GPS?",
    "answer": "Triangulácia signálov zo satelitov",
    "category": "stroje",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 569,
    "question": "Kto napísal Odysseu?",
    "answer": "Homér",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 570,
    "question": "Čo je to existencializmus v literatúre?",
    "answer": "Filozofický smer skúmajúci zmysel bytia",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 571,
    "question": "Čo je to elektronická hudba?",
    "answer": "Hudba vytvorená elektronickými prístrojmi",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 572,
    "question": "Kto je David Bowie?",
    "answer": "Britský hudobník a ikona",
    "category": "hudba",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 573,
    "question": "Kto bol Niels Bohr?",
    "answer": "Dánsky fyzik, model atómu",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 574,
    "question": "Čím sa preslávil Alan Turing?",
    "answer": "Rozlúštenie Enigmy, otec informatiky",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 575,
    "question": "Čo bola Hedvábná stezka?",
    "answer": "Obchodná cesta medzi Európou a Áziou",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 576,
    "question": "Kto bol Atila Hunský?",
    "answer": "Vodca Hunov, bič Boží",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 577,
    "question": "Čo je to integrál?",
    "answer": "Opak derivácie, výpočet plochy pod krivkou",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 578,
    "question": "Koľko je e (Eulerovo číslo) na 3 miesta?",
    "answer": "2,718",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 579,
    "question": "V ktorom roku bola podpísaná Vestfálsky mier?",
    "answer": "1648",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 580,
    "question": "Čo bola Vojna ruží?",
    "answer": "Dynastická vojna v Anglicku (York vs Lancaster, 1455-1487)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 581,
    "question": "Kto bol Suleiman Nádherný?",
    "answer": "Osmanský sultán, najväčší rozmach ríše",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 582,
    "question": "V ktorom roku padla Bastila?",
    "answer": "14. júla 1789",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 583,
    "question": "Čo bola Peloponézska vojna?",
    "answer": "Vojna medzi Aténami a Spartou (431-404 p.n.l.)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 584,
    "question": "Kto bol Bismarck?",
    "answer": "Pruský kancelár, zjednotiteľ Nemecka",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 585,
    "question": "V akom roku bol Augsburský mier?",
    "answer": "1555",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 586,
    "question": "Čo bola Meiji reštaurácia?",
    "answer": "Modernizácia Japonska (1868)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 587,
    "question": "Kto bol Simón Bolívar?",
    "answer": "Osloboditeľ Južnej Ameriky",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 588,
    "question": "Čo bola Noc dlhých nožov?",
    "answer": "Čistka v nacistickej strane (1934)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 589,
    "question": "V akom roku bola bitka pri Moháči?",
    "answer": "1526",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 590,
    "question": "Čo bola Berlínska blokáda?",
    "answer": "Sovietsky blokáda Západného Berlína (1948-49)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 591,
    "question": "Kto bol Klement Gottwald?",
    "answer": "Prvý komunistický prezident Československa",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 592,
    "question": "V akom roku bol Trianonský mier?",
    "answer": "1920",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 593,
    "question": "Čo boli Norimberské zákony?",
    "answer": "Nacistické rasové zákony (1935)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 594,
    "question": "Kto bol Willy Brandt?",
    "answer": "Nemecký kancelár, Ostpolitik, Nobelova cena za mier",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 595,
    "question": "V akom roku bol Münsterský mier?",
    "answer": "1648",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 596,
    "question": "Čo bola doktrína Monroe?",
    "answer": "USA politika: žiadne európske zasahovanie v Amerike",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 597,
    "question": "V ktorom roku bol vydaný Zlatá bula Karola IV.?",
    "answer": "1356",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 598,
    "question": "V ktorom roku sa konala bitka pri Marathóne?",
    "answer": "490",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 599,
    "question": "Čo je Heisenbergov princíp neurčitosti?",
    "answer": "Nemožno presne merať polohu a hybnosť súčasne",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 600,
    "question": "Kto objavil štruktúru DNA?",
    "answer": "Watson a Crick (s prácou Franklin)",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 601,
    "question": "Čo je to kvark?",
    "answer": "Elementárna častica tváriaca hadrón",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 602,
    "question": "Aký je princíp CRISPR?",
    "answer": "Úprava génov pomocou enzýmu Cas9",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 603,
    "question": "Čo je to temná hmota?",
    "answer": "Neviditeľná hmota tváriaca ~27% vesmíru",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 604,
    "question": "Kto sformuloval 3 zákony pohybu?",
    "answer": "Isaac Newton",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 605,
    "question": "Čo je to neutrino?",
    "answer": "Takmer hmotnostne nulová častica",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 606,
    "question": "Aký je Planckova konštanta?",
    "answer": "6,626 × 10^-34 J·s",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 607,
    "question": "Čo je to LIGO?",
    "answer": "Detektor gravitačných vĺn",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 608,
    "question": "Aký je princíp jadrovej fúzie?",
    "answer": "Zlúčenie ľahkých jadier na ťažšie s uvoľnením energie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 609,
    "question": "Čo je to Schrödingerova rovnica?",
    "answer": "Základná rovnica kvantovej mechaniky",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 610,
    "question": "Aký je princíp MRI?",
    "answer": "Zobrazovanie pomocou magnetickej rezonancie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 611,
    "question": "Čo je to Boseho-Einsteinov kondenzát?",
    "answer": "Stav hmoty pri teplotách blízkych abs. nule",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 612,
    "question": "Kto objavil rádioaktivitu?",
    "answer": "Henri Becquerel (1896)",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 613,
    "question": "Čo je to epigenetika?",
    "answer": "Štúdium zmien génovej expresie bez zmeny DNA",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 614,
    "question": "Aký je vek vesmíru?",
    "answer": "Približne 13,8 miliardy rokov",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 615,
    "question": "Čo je to Hubbleov zákon?",
    "answer": "Galaxie sa vzďaľujú rýchlosťou úmernou vzdialenosti",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 616,
    "question": "Koľko rokov má vesmír v miliardách?",
    "answer": "13.8",
    "category": "veda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 617,
    "question": "Aká je hmotnosť protónu v kg (rád)?",
    "answer": "1.67e-27",
    "category": "veda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 618,
    "question": "Kto vyhral Tour de France 5-krát za sebou (nelegitímne)?",
    "answer": "Lance Armstrong (odňaté)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 619,
    "question": "V akom roku sa konali prvé zimné OH?",
    "answer": "1924 (Chamonix)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 620,
    "question": "Kto je najúspešnejší olympionik histórie?",
    "answer": "Michael Phelps (23 zlatých)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 621,
    "question": "Čo je to Ironman?",
    "answer": "Triatlón: 3,86km plávanie, 180km cykl., 42,2km beh",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 622,
    "question": "V ktorom roku vyhral Slovensko zlatú medailu v hokeji MS?",
    "answer": "2002",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 623,
    "question": "Kto drží svetový rekord v maratóne (2024)?",
    "answer": "Kelvin Kiptum (2:00:35)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 624,
    "question": "Čo je to ELO rating v šachu?",
    "answer": "Systém hodnotenia šachových hráčov",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 625,
    "question": "Kto vyhral prvý Super Bowl?",
    "answer": "Green Bay Packers (1967)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 626,
    "question": "V akom športe súťaží Magnus Carlsen?",
    "answer": "Šach",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 627,
    "question": "Čo je to Ryder Cup?",
    "answer": "Golfový turnaj Európa vs USA",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 628,
    "question": "Kto je najlepší strelec NHL histórie?",
    "answer": "Wayne Gretzky",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 629,
    "question": "V akom roku Slovensko vstúpilo na MS vo futbale?",
    "answer": "2010",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 630,
    "question": "Čo je to ATP vo tenise?",
    "answer": "Association of Tennis Professionals – mužský okruh",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 631,
    "question": "Kto je považovaný za najväčšieho boxera?",
    "answer": "Muhammad Ali",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 632,
    "question": "Koľko Grand Slamov vyhral Rafael Nadal?",
    "answer": "22",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 633,
    "question": "Čo je to Vasaloppet?",
    "answer": "Najdlhší bežecký lyžiarsky závod (90 km, Švédsko)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 634,
    "question": "Koľko gólov strelil Wayne Gretzky v NHL?",
    "answer": "894",
    "category": "sport",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 635,
    "question": "Kto je autor diela Les Demoiselles d'Avignon?",
    "answer": "Pablo Picasso",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 636,
    "question": "Čo je to postmodernizmus v umení?",
    "answer": "Smer odmietajúci univerzálne pravdy",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 637,
    "question": "Kto bol Caravaggio?",
    "answer": "Taliansky barokový maliar, majster svetla a tieňa",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 638,
    "question": "Čo je to Bauhaus?",
    "answer": "Nemecká umelecká škola (1919-1933)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 639,
    "question": "Kto je autor diela Guernica?",
    "answer": "Pablo Picasso (1937)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 640,
    "question": "Čo je to land art?",
    "answer": "Umenie vytvorené v prírode z prírodných materiálov",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 641,
    "question": "Kto bol Marcel Duchamp?",
    "answer": "Francúzsky umelec, Fontána (1917)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 642,
    "question": "Čo je to happening?",
    "answer": "Spontánna umelecká akcia",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 643,
    "question": "Kto bol Jackson Pollock?",
    "answer": "Americký abstraktný expresionista, drip painting",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 644,
    "question": "Čo je to minimalizmus v umení?",
    "answer": "Redukcia na základné tvary a farby",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 645,
    "question": "Kto navrhol Guggenheim múzeum v Bilbao?",
    "answer": "Frank Gehry",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 646,
    "question": "Čo je to De Stijl?",
    "answer": "Holandské umelecké hnutie (Mondrian)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 647,
    "question": "Kto bol Francis Bacon (maliar)?",
    "answer": "Britský maliar, deformované figúry",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 648,
    "question": "Čo je to ready-made v umení?",
    "answer": "Každodenný predmet prezentovaný ako umenie",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 649,
    "question": "Kto je Banksy?",
    "answer": "Anonymný britský street art umelec",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 650,
    "question": "Čo je to Art Deco?",
    "answer": "Dekoratívny umelecký štýl 20.-30. rokov",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 651,
    "question": "Kto napísal Ulysses?",
    "answer": "James Joyce",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 652,
    "question": "Čo je to magický realizmus?",
    "answer": "Literárny smer spájajúci realitu s fantáziou",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 653,
    "question": "Kto napísal Sto rokov samoty?",
    "answer": "Gabriel García Márquez",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 654,
    "question": "Čo je to stream of consciousness?",
    "answer": "Literárna technika prúdu vedomia",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 655,
    "question": "Kto napísal Metamorfózu?",
    "answer": "Franz Kafka",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 656,
    "question": "Čo je to existencializmus?",
    "answer": "Filozofický smer zameraný na individuálnu slobodu",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 657,
    "question": "Kto napísal Mŕtve duše?",
    "answer": "Nikolaj Vasilievič Gogoľ",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 658,
    "question": "Čo je to bildungsroman?",
    "answer": "Román o vývoji postavy",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 659,
    "question": "Kto napísal Bratia Karamazovovci?",
    "answer": "Fiodor Dostojevskij",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 660,
    "question": "Čo je to intertextualita?",
    "answer": "Vzťahy medzi textami",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 661,
    "question": "Kto napísal Slepotu?",
    "answer": "José Saramago",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 662,
    "question": "Čo je to unreliable narrator?",
    "answer": "Nespoľahlivý rozprávač",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 663,
    "question": "Kto napísal Proces?",
    "answer": "Franz Kafka",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 664,
    "question": "Kto napísal Majstra a Margarétu?",
    "answer": "Michail Bulgakov",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 665,
    "question": "Čo je to absurdná dráma?",
    "answer": "Divadelný žáner zobrazujúci absurditu bytia",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 666,
    "question": "Kto napísal Čakanie na Godota?",
    "answer": "Samuel Beckett",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 667,
    "question": "Kto bol Niccolò Machiavelli?",
    "answer": "Taliansky politický filozof, Vladár",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 668,
    "question": "Čím sa preslávil Erwin Schrödinger?",
    "answer": "Schrödingerova rovnica, mačka v krabici",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 669,
    "question": "Kto bol Averroes?",
    "answer": "Arabský filozof a lekár, komentátor Aristotela",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 670,
    "question": "Čím sa preslávila Emmy Noetherová?",
    "answer": "Matematička, Noetherovej teorém",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 671,
    "question": "Kto bol John von Neumann?",
    "answer": "Matematik, architektúra počítačov",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 672,
    "question": "Čím sa preslávil Enrico Fermi?",
    "answer": "Prvý jadrový reaktor",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 673,
    "question": "Kto bol Ludwig Wittgenstein?",
    "answer": "Rakúsky filozof, Tractatus",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 674,
    "question": "Čím sa preslávila Rosalind Franklinová?",
    "answer": "Röntgenová kryštalografia DNA",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 675,
    "question": "Kto bol Immanuel Kant?",
    "answer": "Nemecký filozof, Kritika čistého rozumu",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 676,
    "question": "Čím sa preslávil Richard Feynman?",
    "answer": "Kvantová elektrodynamika, Nobelova cena",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 677,
    "question": "Kto bol Andrej Hlinka?",
    "answer": "Slovenský kňaz a politik",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 678,
    "question": "Čím sa preslávil Claude Shannon?",
    "answer": "Otec teórie informácie",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 679,
    "question": "Kto bol Nietzsche?",
    "answer": "Nemecký filozof, Tak vravel Zarathustra",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 680,
    "question": "Čím sa preslávil Ramanujan?",
    "answer": "Geniálny indický matematik",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 681,
    "question": "Kto bol Tomáš Garrigue Masaryk?",
    "answer": "Prvý prezident Československa",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 682,
    "question": "Čím sa preslávila Hannah Arendtová?",
    "answer": "Politická filozofka, Banalita zla",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 683,
    "question": "Čo je to hadál?",
    "answer": "Najhlbšia oceánska zóna (pod 6000 m)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 684,
    "question": "Aký je pôvod Himálají?",
    "answer": "Kolízia Indickej a Euroázijskej platne",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 685,
    "question": "Čo je to permafrost?",
    "answer": "Trvalo zamrznutá pôda",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 686,
    "question": "Aký je najstarší živý organizmus na Zemi?",
    "answer": "Posidonia oceánica (morská tráva, ~100000 rokov)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 687,
    "question": "Čo sú to hydrotermálne venty?",
    "answer": "Podmorské horúce pramene",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 688,
    "question": "Aký je rozdiel medzi stalagmitom a stalaktitom?",
    "answer": "Stalagmit rastie zdola, stalaktit zhora",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 689,
    "question": "Čo je to El Niño?",
    "answer": "Otepľovanie Tichého oceánu ovplyvňujúce počasie",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 690,
    "question": "Aký je najsuchší miesto na Zemi?",
    "answer": "Atacama (Chile) alebo McMurdo (Antarktída)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 691,
    "question": "Čo je to biodiverzita?",
    "answer": "Rozmanitosť živých organizmov",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 692,
    "question": "Aký je najväčší aktívny vulkán?",
    "answer": "Mauna Loa (Havaj)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 693,
    "question": "Čo je to bioluminiscencia?",
    "answer": "Schopnosť organizmov produkovať svetlo",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 694,
    "question": "Aký je najhlbší sladkovodný jazero?",
    "answer": "Bajkal (1642 m)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 695,
    "question": "Čo je to albedo?",
    "answer": "Odrazivosť povrchu",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 696,
    "question": "Aký je najdlhší jaskynný systém?",
    "answer": "Mammoth Cave (Kentucky, USA)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 697,
    "question": "Čo je to termohalinná cirkulácia?",
    "answer": "Globálny oceánsky dopravný pás",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 698,
    "question": "Aká je hĺbka Bajkalského jazera v metroch?",
    "answer": "1642",
    "category": "priroda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 699,
    "question": "Čo je to FPGA?",
    "answer": "Programovateľné logické hradlové pole",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 700,
    "question": "Aký je princíp fungovania tokamaku?",
    "answer": "Magnetické udržanie plazmy pre jadrovú fúziu",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 701,
    "question": "Čo je to LIDAR?",
    "answer": "Laserové skenovanie pre 3D mapovanie",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 702,
    "question": "Aký je princíp fungovania kvantového počítača?",
    "answer": "Využitie qubitov a superpozície",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 703,
    "question": "Čo je to neurálna sieť?",
    "answer": "Výpočtový model inšpirovaný mozgom",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 704,
    "question": "Aký je princíp OLED displeja?",
    "answer": "Organické LED diódy emitujúce svetlo",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 705,
    "question": "Čo je to PCR?",
    "answer": "Polymerázová reťazová reakcia na kopírovanie DNA",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 706,
    "question": "Aký je princíp fungovania MRI?",
    "answer": "Magnetická rezonancia jadier vodíka",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 707,
    "question": "Čo je to ASIC?",
    "answer": "Integrovaný obvod pre špecifickú aplikáciu",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 708,
    "question": "Aký je princíp fungovania ramjet motora?",
    "answer": "Prúdový motor bez kompresora (náporový)",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 709,
    "question": "Čo je to CNC?",
    "answer": "Počítačom riadený obrábací stroj",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 710,
    "question": "Aký je princíp fungovania palivového článku?",
    "answer": "Elektrochemická premena vodíka na elektrinu",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 711,
    "question": "Čo je to EUV litografia?",
    "answer": "Extrémne UV žiarenie na výrobu čipov",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 712,
    "question": "Aký je princíp fungovania STM?",
    "answer": "Skenovací tunelovací mikroskop",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 713,
    "question": "V ktorom roku bol vynájdený tranzistor?",
    "answer": "1947",
    "category": "stroje",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 714,
    "question": "Dokončite: Verba volant, scripta...",
    "answer": "manent (slová sa rozletia, písmo zostáva)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 715,
    "question": "Dokončite: Alea iacta...",
    "answer": "est (kocka je hodená)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 716,
    "question": "Dokončite: Cogito ergo...",
    "answer": "sum (myslím, teda som)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 717,
    "question": "Dokončite: Carpe...",
    "answer": "diem (využi deň)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 718,
    "question": "Dokončite: Veni, vidi...",
    "answer": "vici (prišiel som, videl som, zvíťazil som)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 719,
    "question": "Dokončite: Memento...",
    "answer": "mori (pamätaj na smrť)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 720,
    "question": "Dokončite: In vino...",
    "answer": "veritas (vo víne pravda)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 721,
    "question": "Dokončite: Si vis pacem...",
    "answer": "para bellum (ak chceš mier, chystaj sa na vojnu)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 722,
    "question": "Dokončite: Errare humanum...",
    "answer": "est (mýliť sa je ľudské)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 723,
    "question": "Dokončite: Dum spiro...",
    "answer": "spero (kým dýcham, dúfam)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 724,
    "question": "Dokončite: Dura lex...",
    "answer": "sed lex (tvrdý zákon, ale zákon)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 725,
    "question": "Dokončite: Nemo iudex...",
    "answer": "in causa sua (nikto sudca vo vlastnej veci)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 726,
    "question": "Dokončite: Repetitio est mater...",
    "answer": "studiorum (opakovanie je matka múdrosti)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 727,
    "question": "Dokončite: Pecunia non...",
    "answer": "olet (peniaze nesmrdia)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 728,
    "question": "Dokončite: Divide et...",
    "answer": "impera (rozdeľ a panuj)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 729,
    "question": "Dokončite: Tempus...",
    "answer": "fugit (čas letí)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 730,
    "question": "Dokončite: Fiat lux...",
    "answer": "(nech je svetlo - Genezis)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 731,
    "question": "Dokončite: Ab ovo...",
    "answer": "(od začiatku, doslova od vajca)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 732,
    "question": "Dokončite: Tabula...",
    "answer": "rasa (čistá tabuľa)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 733,
    "question": "Dokončite: Ad astra per...",
    "answer": "aspera (k hviezdam cez prekážky)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 734,
    "question": "Rozlúštite prešmyčku: FILOFOZIA",
    "answer": "FILOZOFIA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 735,
    "question": "Rozlúštite prešmyčku: EAPKUILTSR",
    "answer": "SKULPTÚRA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 736,
    "question": "Rozlúštite prešmyčku: PIOMEDILEA",
    "answer": "EPIDEMIOLA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 737,
    "question": "Rozlúštite prešmyčku: GNIORÓVATA",
    "answer": "GRAVITÓNO",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 738,
    "question": "Rozlúštite prešmyčku: AKTUARTCHER",
    "answer": "ARCHITEKTRA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 739,
    "question": "Rozlúštite prešmyčku: AIGLITÓN",
    "answer": "ANTIGÁLO",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 740,
    "question": "Rozlúštite prešmyčku: EIKOCNOME",
    "answer": "EKONOMICE",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 741,
    "question": "Rozlúštite prešmyčku: SFANTROFCIA",
    "answer": "TRANSFOKCIA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 742,
    "question": "Rozlúštite prešmyčku: UREABTLERI",
    "answer": "LITERATÚRE",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 743,
    "question": "Rozlúštite prešmyčku: GEMATRAÍST",
    "answer": "MAGISTRÁTE",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 744,
    "question": "Rozlúštite prešmyčku: OLKEYRCEBRA",
    "answer": "CEREBRALÓKY",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 745,
    "question": "Rozlúštite prešmyčku: TMEFAAIKTA",
    "answer": "MATEMATIKE",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 746,
    "question": "Rozlúštite prešmyčku: ARTOMSHAIÉ",
    "answer": "HARMONISTA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 747,
    "question": "Rozlúštite prešmyčku: AKCILOBÉGI",
    "answer": "BIOLÓGICKA",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 748,
    "question": "Rozlúštite prešmyčku: TREKLOÉNKA",
    "answer": "ELEKTRONKÁ",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 749,
    "question": "Kto zložil Svätenie jari?",
    "answer": "Igor Stravinskij",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 750,
    "question": "Čo je to dodekafonická technika?",
    "answer": "12-tónová kompozičná metóda (Schönberg)",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 751,
    "question": "Kto bol Dmitrij Šostakovič?",
    "answer": "Ruský skladateľ 20. storočia",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 752,
    "question": "Čo je to polyfonická hudba?",
    "answer": "Viachlasná hudba s nezávislými melódiami",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 753,
    "question": "Kto je John Coltrane?",
    "answer": "Americký jazzový saxofonista",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 754,
    "question": "Čo je to minimalizmus v hudbe?",
    "answer": "Repetitívne vzory (Reich, Glass, Riley)",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 755,
    "question": "Kto bol Gustav Mahler?",
    "answer": "Rakúsky neskororomantický skladateľ",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 756,
    "question": "Čo je to atonalita?",
    "answer": "Hudba bez tónového centra",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 757,
    "question": "Kto zložil Carmina Burana?",
    "answer": "Carl Orff",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 758,
    "question": "Čo je to fúga?",
    "answer": "Polyfónna kompozícia na jednu tému",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 759,
    "question": "Kto bol Miles Davis?",
    "answer": "Americký jazzový trubkár",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 760,
    "question": "Čo je to gamelan?",
    "answer": "Indonézsky tradičný orchester",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 761,
    "question": "Kto zložil Planéty?",
    "answer": "Gustav Holst",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 762,
    "question": "Čo je to chromatická stupnica?",
    "answer": "Stupnica po poltónoch",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 763,
    "question": "Kto je Philip Glass?",
    "answer": "Americký minimalista skladateľ",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 764,
    "question": "V ktorom roku zomrel Mozart?",
    "answer": "1791",
    "category": "hudba",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 765,
    "question": "Kto režíroval Stalker (1979)?",
    "answer": "Andrej Tarkovskij",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 766,
    "question": "Čo je to film noir?",
    "answer": "Temný filmový žáner 40.-50. rokov s cynickými hrdinami",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 767,
    "question": "Kto režíroval 2001: Vesmírna odysea?",
    "answer": "Stanley Kubrick",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 768,
    "question": "Čo je to montáž v kinematografii?",
    "answer": "Strihanie a spájanie záberov",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 769,
    "question": "Kto režíroval Sedem samurajov?",
    "answer": "Akira Kurosawa",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 770,
    "question": "Čo je to neorealizmus?",
    "answer": "Taliansky filmový smer po 2. sv. vojne",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 771,
    "question": "Kto režíroval Vertigo?",
    "answer": "Alfred Hitchcock",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 772,
    "question": "Čo je to jump cut?",
    "answer": "Náhly strih v rámci jedného záberu",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 773,
    "question": "Kto režíroval Osobu (Persona, 1966)?",
    "answer": "Ingmar Bergman",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 774,
    "question": "Čo je to French New Wave?",
    "answer": "Francúzska nová vlna 60. rokov (Godard, Truffaut)",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 775,
    "question": "Kto režíroval Pôvodcov (Parasite)?",
    "answer": "Bong Joon-ho",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 776,
    "question": "Čo je to diegetic sound?",
    "answer": "Zvuk, ktorý počujú aj postavy vo filme",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 777,
    "question": "Kto režíroval Mulholland Drive?",
    "answer": "David Lynch",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 778,
    "question": "Čo je to Dogma 95?",
    "answer": "Filmový manifest (von Trier, Vinterberg)",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 779,
    "question": "V ktorom roku vznikol prvý zvukový film?",
    "answer": "1927",
    "category": "film",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 780,
    "question": "Čo je to Riemannova hypotéza?",
    "answer": "Hypotéza o nulových bodoch zeta funkcie",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 781,
    "question": "Koľko je i na druhú?",
    "answer": "-1",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 782,
    "question": "Čo je to Gödlove veta o neúplnosti?",
    "answer": "Žiadny konzistentný systém nemôže dokázať všetky pravdy",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 783,
    "question": "Čo je to topológia?",
    "answer": "Štúdium vlastností priestoru pri deformáciách",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 784,
    "question": "Koľko je e na π·i?",
    "answer": "-1 (Eulerova identita)",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 785,
    "question": "Čo je to Bayesova veta?",
    "answer": "Vzorec pre podmienené pravdepodobnosti",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 786,
    "question": "Koľko je 17!?",
    "answer": "355687428096000",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 787,
    "question": "Čo je to Hilbertov priestor?",
    "answer": "Nekonečnorozmerný vektorový priestor",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 788,
    "question": "Čo je to Nashova rovnováha?",
    "answer": "Stav v teórii hier, kde nikto nemá dôvod meniť stratégiu",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 789,
    "question": "Koľko prvočísel je do 100?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 790,
    "question": "Čo je to Fourierova transformácia?",
    "answer": "Rozklad funkcie na súčet sínusov a kosínusov",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 791,
    "question": "Čo je to Mandelbrotova množina?",
    "answer": "Fraktálna množina v komplexnej rovine",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 792,
    "question": "Koľko je odmocnina z 2 na 4 des. miesta?",
    "answer": "1,4142",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 793,
    "question": "Čo je to Lagrangeov multiplikátor?",
    "answer": "Metóda optimalizácie s obmedzeniami",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 794,
    "question": "Čo je to P vs NP problém?",
    "answer": "Otázka, či problémy overiteľné v P čase sú aj riešiteľné v P čase",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 795,
    "question": "Koľko je 13. Fibonacciho číslo?",
    "answer": "233",
    "category": "matematika",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 796,
    "question": "Kedy bola podpísaná Zmluva z Versailles?",
    "answer": "1919",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 797,
    "question": "Čo bola Kubánska raketová kríza?",
    "answer": "Jadrová konfrontácia USA-ZSSR (1962)",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 798,
    "question": "Kedy bola Reconquista dokončená?",
    "answer": "1492 (pád Granady)",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 799,
    "question": "Čo bola Čínska kultúrna revolúcia?",
    "answer": "Maoova kampaň (1966-1976)",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 800,
    "question": "Kedy sa konala bitka pri Slavkove?",
    "answer": "1805",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 801,
    "question": "Čo bol Bretton-Woodský systém?",
    "answer": "Povojnový medzinárodný menový systém (1944)",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 802,
    "question": "Kedy bol atentát na arcikňa Františka Ferdinanda?",
    "answer": "28. júna 1914",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 803,
    "question": "Čo bola Intifáda?",
    "answer": "Palestínske povstanie proti izraelskej okupácii",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 804,
    "question": "Kedy začala Kórejská vojna?",
    "answer": "1950",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 805,
    "question": "Čo bol Marshallov plán?",
    "answer": "Americká ekonomická pomoc Európe (1948)",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 806,
    "question": "Kedy padol Konštantínopol?",
    "answer": "1453",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 807,
    "question": "Čo bola Revolúcia 1848?",
    "answer": "Jar národov – revolúcie v Európe",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 808,
    "question": "V ktorom roku bol založený OSN?",
    "answer": "1945",
    "category": "historicke_podujatia",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 809,
    "question": "Čo je to Boltzmannova konštanta?",
    "answer": "1,381 × 10^-23 J/K",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 810,
    "question": "Aký je princíp Pauliho vylučovacieho?",
    "answer": "Dva fermióny nemôžu mať rovnaký kvantový stav",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 811,
    "question": "Čo je to antimatter?",
    "answer": "Hmota s opačným nábojom",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 812,
    "question": "Aký je princíp tunelového efektu?",
    "answer": "Kvantová častica prechádza bariérou",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 813,
    "question": "Čo je to mezopelagická zóna?",
    "answer": "Oceánska vrstva 200-1000 m",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 814,
    "question": "Aký je princíp Coriolisovho efektu?",
    "answer": "Zakrivenie trajektórie kvôli rotácii Zeme",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 815,
    "question": "Čo sú to extremofily?",
    "answer": "Organizmy prežívajúce extrémne podmienky",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 816,
    "question": "Aký je vplyv Milankovičových cyklov?",
    "answer": "Zmeny orbity Zeme ovplyvňujúce klímu",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 817,
    "question": "Kto drží rekord v počte titulov F1?",
    "answer": "Lewis Hamilton a Michael Schumacher (7)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 818,
    "question": "Čo je to Queensberry rules?",
    "answer": "Moderné pravidlá boxu",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 819,
    "question": "Kto vyhral Zlatú loptu 2023?",
    "answer": "Lionel Messi",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 820,
    "question": "Kto bol Kazimir Malevič?",
    "answer": "Ruský avantgardný maliar, suprematizmus",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 821,
    "question": "Čo je to fluxus?",
    "answer": "Umelecké hnutie 60. rokov proti komercializmu",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 822,
    "question": "Kto režíroval Stalker?",
    "answer": "Andrej Tarkovskij (1979)",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 823,
    "question": "Čo je to Rashomon efekt?",
    "answer": "Rôzne pohľady na rovnakú udalosť",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 824,
    "question": "Čo je to memristor?",
    "answer": "Štvrtý základný pasívny elektronický prvok",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 825,
    "question": "Aký je princíp homomorného šifrovania?",
    "answer": "Výpočty na šifrovaných dátach",
    "category": "stroje",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 826,
    "question": "Kto napísal Foucaltovo kyvadlo?",
    "answer": "Umberto Eco",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 827,
    "question": "Čo je to meta-fikcia?",
    "answer": "Fikcia upozorňujúca na svoju umeleckú povahu",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 828,
    "question": "Čo je to spectralizmus?",
    "answer": "Hudobný smer založený na analýze zvuku (Grisey, Murail)",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 829,
    "question": "Kto zložil Dafnis a Chloe?",
    "answer": "Maurice Ravel",
    "category": "hudba",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 830,
    "question": "Kto bol Kurt Gödel?",
    "answer": "Logik, vety o neúplnosti",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 831,
    "question": "Čím sa preslávil Leonhard Euler?",
    "answer": "Najplodnejší matematik histórie",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 832,
    "question": "Čo bola Bitka pri Thermopylách?",
    "answer": "300 Sparťanov vs Peržania (480 p.n.l.)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 833,
    "question": "Čo bol Severoatlantický pakt?",
    "answer": "NATO – obranná aliancia (1949)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 834,
    "question": "Čo je to Lebesgueov integrál?",
    "answer": "Zovšeobecnenie Riemannovho integrálu",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 835,
    "question": "Čo je to Banachov-Tarského paradox?",
    "answer": "Guľu možno rozdeliť a zložiť na 2 rovnaké",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 836,
    "question": "Dokončite: E = mc...",
    "answer": "² (Einsteinova rovnica)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 837,
    "question": "Dokončite: To be, or not to be...",
    "answer": "that is the question (Shakespeare)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 838,
    "question": "Dokončite: I think, therefore...",
    "answer": "I am (Descartes)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 839,
    "question": "Dokončite: The only thing we have to fear...",
    "answer": "is fear itself (Roosevelt)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 840,
    "question": "Dokončite: Ask not what your country...",
    "answer": "can do for you (Kennedy)",
    "category": "doplnovacky",
    "difficulty": "level2",
    "type": "complete_sentence"
  },
  {
    "id": 841,
    "question": "Aké je hlavné mesto Francúzska?",
    "answer": "Paríž",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 842,
    "question": "Aké je hlavné mesto Nemecka?",
    "answer": "Berlín",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 843,
    "question": "Aké je hlavné mesto Talianska?",
    "answer": "Rím",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 844,
    "question": "Aké je hlavné mesto Španielska?",
    "answer": "Madrid",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 845,
    "question": "Aké je hlavné mesto Česka?",
    "answer": "Praha",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 846,
    "question": "Aké je hlavné mesto Poľska?",
    "answer": "Varšava",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 847,
    "question": "Aké je hlavné mesto Maďarska?",
    "answer": "Budapešť",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 848,
    "question": "Aké je hlavné mesto Rakúska?",
    "answer": "Viedeň",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 849,
    "question": "Aké je hlavné mesto Veľkej Británie?",
    "answer": "Londýn",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 850,
    "question": "Aké je hlavné mesto Ruska?",
    "answer": "Moskva",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 851,
    "question": "Aké je hlavné mesto Japonska?",
    "answer": "Tokio",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 852,
    "question": "Aké je hlavné mesto Austrálie?",
    "answer": "Canberra",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 853,
    "question": "Aké je hlavné mesto Kanady?",
    "answer": "Ottawa",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 854,
    "question": "Aké je hlavné mesto Brazílie?",
    "answer": "Brasília",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 855,
    "question": "Aké je hlavné mesto Egypta?",
    "answer": "Káhira",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 856,
    "question": "Aké je hlavné mesto Číny?",
    "answer": "Peking",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 857,
    "question": "Aké je hlavné mesto Grécka?",
    "answer": "Atény",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 858,
    "question": "Aké je hlavné mesto Turecka?",
    "answer": "Ankara",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 859,
    "question": "Aké je hlavné mesto Nórska?",
    "answer": "Oslo",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 860,
    "question": "Aké je hlavné mesto Švédska?",
    "answer": "Štokholm",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 861,
    "question": "Na ktorom kontinente leží India?",
    "answer": "Ázia",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 862,
    "question": "Na ktorom kontinente leží Brazília?",
    "answer": "Južná Amerika",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 863,
    "question": "Na ktorom kontinente leží Nigéria?",
    "answer": "Afrika",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 864,
    "question": "Ktorý oceán je medzi Európou a Amerikou?",
    "answer": "Atlantický oceán",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 865,
    "question": "Aký jazyk sa hovorí v Brazílii?",
    "answer": "Portugalčina",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 866,
    "question": "Koľko skupenstiev vody poznáme?",
    "answer": "3 (ľad, voda, para)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 867,
    "question": "Čo je to blesk?",
    "answer": "Elektrický výboj v atmosfére",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 868,
    "question": "Prečo sa striedajú ročné obdobia?",
    "answer": "Kvôli nakloneniu zemskej osi",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 869,
    "question": "Aký orgán čerpá krv v tele?",
    "answer": "Srdce",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 870,
    "question": "Koľko zmyslov má človek?",
    "answer": "5 (zrak, sluch, čuch, chuť, hmat)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 871,
    "question": "Čo je to éra dinosaurov?",
    "answer": "Mezozoikum",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 872,
    "question": "Aký je najtvrdší minerál?",
    "answer": "Diamant",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 873,
    "question": "Čo tvorí jadro Zeme?",
    "answer": "Železo a nikel",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 874,
    "question": "Koľko prstov má človek na rukách?",
    "answer": "10",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 875,
    "question": "Aký orgán používame na dýchanie?",
    "answer": "Pľúca",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 876,
    "question": "Prečo je noc?",
    "answer": "Pretože sa Zem otáča a odvráti sa od Slnka",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 877,
    "question": "Čo je to hviezda?",
    "answer": "Žiariace teleso z horúceho plynu",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 878,
    "question": "Prečo padá dážď?",
    "answer": "Vodné pary v oblakoch kondenzujú",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 879,
    "question": "Koľko dní má týždeň?",
    "answer": "7",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 880,
    "question": "Aká planéta má prstence?",
    "answer": "Saturn",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 881,
    "question": "Čo je to sopka?",
    "answer": "Hora, z ktorej vychádza láva",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 882,
    "question": "Čo robí včela s nektárom?",
    "answer": "Vyrába med",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 883,
    "question": "Koľko sŕdc má chobotnica?",
    "answer": "3",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 884,
    "question": "Aký je najväčší orgán ľudského tela?",
    "answer": "Koža",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 885,
    "question": "Čo jedia herbivory?",
    "answer": "Rastliny",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 886,
    "question": "Aké zviera je kráľ džungle?",
    "answer": "Lev",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 887,
    "question": "Koľko nôh má stonožka?",
    "answer": "30 až 354 (podľa druhu)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 888,
    "question": "Aké zviera je najvyššie?",
    "answer": "Žirafa",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 889,
    "question": "Kde žijú polárne medvede?",
    "answer": "Na Arktíde (severný pól)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 890,
    "question": "Čo je to metamorfóza u motýľa?",
    "answer": "Premena z húsenice na motýľa",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 891,
    "question": "Aký vtáček je najmenší na svete?",
    "answer": "Kolibrik",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 892,
    "question": "Aké zviera sa prezývá loď púšte?",
    "answer": "Ťava",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 893,
    "question": "Koľko očí má pavúk?",
    "answer": "Väčšinou 8",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 894,
    "question": "Aké zviera vie meniť farbu?",
    "answer": "Chameleón",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 895,
    "question": "Čo je to hibernácia?",
    "answer": "Zimný spánok zvierat",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 896,
    "question": "Aké zviera má najdlhší krk?",
    "answer": "Žirafa",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 897,
    "question": "Ktorý vták vie lietať dozadu?",
    "answer": "Kolibrik",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 898,
    "question": "Kde žijú kengury?",
    "answer": "V Austrálii",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 899,
    "question": "Aké zviera je symbol Číny?",
    "answer": "Panda",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 900,
    "question": "Koľko končatín má morská hviezda?",
    "answer": "5",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 901,
    "question": "Koľko je 12 × 3?",
    "answer": "36",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 902,
    "question": "Koľko je 2 × 6?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 903,
    "question": "Koľko je 5 × 5?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 904,
    "question": "Koľko je 4 × 3?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 905,
    "question": "Koľko je 12 × 10?",
    "answer": "120",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 906,
    "question": "Koľko je 3 × 11?",
    "answer": "33",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 907,
    "question": "Koľko je 8 × 2?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 908,
    "question": "Koľko je 2 × 3?",
    "answer": "6",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 909,
    "question": "Koľko je 5 × 5?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 910,
    "question": "Koľko je 10 × 11?",
    "answer": "110",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 911,
    "question": "Koľko je 2 × 10?",
    "answer": "20",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 912,
    "question": "Koľko je 5 × 12?",
    "answer": "60",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 913,
    "question": "Koľko je 10 × 8?",
    "answer": "80",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 914,
    "question": "Koľko je 5 × 9?",
    "answer": "45",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 915,
    "question": "Koľko je 11 × 6?",
    "answer": "66",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 916,
    "question": "Koľko je 2 × 4?",
    "answer": "8",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 917,
    "question": "Koľko je 8 × 7?",
    "answer": "56",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 918,
    "question": "Koľko je 6 × 4?",
    "answer": "24",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 919,
    "question": "Koľko je 5 × 7?",
    "answer": "35",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 920,
    "question": "Koľko je 3 × 3?",
    "answer": "9",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 921,
    "question": "Koľko je 8 × 3?",
    "answer": "24",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 922,
    "question": "Koľko je 7 × 7?",
    "answer": "49",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 923,
    "question": "Koľko je 11 × 6?",
    "answer": "66",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 924,
    "question": "Koľko je 2 × 9?",
    "answer": "18",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 925,
    "question": "Koľko je 10 × 3?",
    "answer": "30",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 926,
    "question": "Koľko je 8 × 3?",
    "answer": "24",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 927,
    "question": "Koľko je 10 × 6?",
    "answer": "60",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 928,
    "question": "Koľko je 12 × 11?",
    "answer": "132",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 929,
    "question": "Koľko je 7 × 11?",
    "answer": "77",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 930,
    "question": "Koľko je 5 × 3?",
    "answer": "15",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 931,
    "question": "Koľko je 2 × 12?",
    "answer": "24",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 932,
    "question": "Koľko je 5 × 6?",
    "answer": "30",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 933,
    "question": "Koľko je 3 × 5?",
    "answer": "15",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 934,
    "question": "Koľko je 3 × 8?",
    "answer": "24",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 935,
    "question": "Koľko je 6 × 9?",
    "answer": "54",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 936,
    "question": "Koľko je 12 × 7?",
    "answer": "84",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 937,
    "question": "Koľko je 4 × 7?",
    "answer": "28",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 938,
    "question": "Koľko je 7 × 5?",
    "answer": "35",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 939,
    "question": "Koľko je 12 × 6?",
    "answer": "72",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 940,
    "question": "Koľko je 12 × 12?",
    "answer": "144",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 941,
    "question": "Koľko je 68 - 48?",
    "answer": "20",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 942,
    "question": "Koľko je 93 - 78?",
    "answer": "15",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 943,
    "question": "Koľko je 112 - 30?",
    "answer": "82",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 944,
    "question": "Koľko je 168 - 107?",
    "answer": "61",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 945,
    "question": "Koľko je 119 - 91?",
    "answer": "28",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 946,
    "question": "Koľko je 192 - 66?",
    "answer": "126",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 947,
    "question": "Koľko je 133 - 117?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 948,
    "question": "Koľko je 64 - 24?",
    "answer": "40",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 949,
    "question": "Koľko je 58 - 30?",
    "answer": "28",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 950,
    "question": "Koľko je 152 - 78?",
    "answer": "74",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 951,
    "question": "Koľko je 66 - 23?",
    "answer": "43",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 952,
    "question": "Koľko je 195 - 193?",
    "answer": "2",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 953,
    "question": "Koľko je 130 - 37?",
    "answer": "93",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 954,
    "question": "Koľko je 177 - 111?",
    "answer": "66",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 955,
    "question": "Koľko je 167 - 46?",
    "answer": "121",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 956,
    "question": "Koľko je 117 - 27?",
    "answer": "90",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 957,
    "question": "Koľko je 113 - 105?",
    "answer": "8",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 958,
    "question": "Koľko je 193 - 147?",
    "answer": "46",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 959,
    "question": "Koľko je 117 - 105?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 960,
    "question": "Koľko je 199 - 119?",
    "answer": "80",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 961,
    "question": "Koľko je 398 + 304?",
    "answer": "702",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 962,
    "question": "Koľko je 285 + 212?",
    "answer": "497",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 963,
    "question": "Koľko je 170 + 360?",
    "answer": "530",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 964,
    "question": "Koľko je 352 + 146?",
    "answer": "498",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 965,
    "question": "Koľko je 486 + 124?",
    "answer": "610",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 966,
    "question": "Koľko je 156 + 178?",
    "answer": "334",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 967,
    "question": "Koľko je 421 + 181?",
    "answer": "602",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 968,
    "question": "Koľko je 448 + 316?",
    "answer": "764",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 969,
    "question": "Koľko je 405 + 132?",
    "answer": "537",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 970,
    "question": "Koľko je 297 + 295?",
    "answer": "592",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 971,
    "question": "Koľko je 405 + 339?",
    "answer": "744",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 972,
    "question": "Koľko je 370 + 228?",
    "answer": "598",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 973,
    "question": "Koľko je 383 + 105?",
    "answer": "488",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 974,
    "question": "Koľko je 448 + 469?",
    "answer": "917",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 975,
    "question": "Koľko je 158 + 449?",
    "answer": "607",
    "category": "matematika",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 976,
    "question": "Koľko farieb má semafor?",
    "answer": "3 (červená, oranžová, zelená)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 977,
    "question": "Čo je to kompas?",
    "answer": "Prístroj na určenie svetových strán",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 978,
    "question": "Koľko je mesiacov s 30 dňami?",
    "answer": "4 (apríl, jún, september, november)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 979,
    "question": "Aký tvar má Zem?",
    "answer": "Guľatý (geoida)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 980,
    "question": "Čo znamená skratka SK?",
    "answer": "Slovensko",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 981,
    "question": "Koľko prstov má mačka na prednej labe?",
    "answer": "5",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 982,
    "question": "Aký deň nasleduje po utorok?",
    "answer": "Streda",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 983,
    "question": "Koľko je celkovo písmen v slovenskej abecede?",
    "answer": "46",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 984,
    "question": "Aký je najmenší kontinent?",
    "answer": "Austrália",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 985,
    "question": "Čo je to atlas?",
    "answer": "Kniha s mapami",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 986,
    "question": "Čo je to múzeum?",
    "answer": "Miesto kde sa vystavujú historické veci",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 987,
    "question": "Kto vynašiel čokoládu?",
    "answer": "Mayovia a Aztékovia",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 988,
    "question": "Aký je najstarší šport?",
    "answer": "Zápasenie (wrestling)",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 989,
    "question": "Čo je to hieroglyfy?",
    "answer": "Staroegyptské obrázkové písmo",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 990,
    "question": "Kto bol Mikuláš Koperník?",
    "answer": "Astronóm - Zem obieha Slnko",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 991,
    "question": "Čo je to renesancia?",
    "answer": "Obdobie rozkvetu umenia a vedy",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 992,
    "question": "Kto boli rytieri?",
    "answer": "Stredovekí bojovníci v brnení",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 993,
    "question": "Čo je to kastel?",
    "answer": "Hrad alebo pevnosť",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 994,
    "question": "Kto bol Ján Amos Komenský?",
    "answer": "Učiteľ národov",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 995,
    "question": "Čo je to demokracia?",
    "answer": "Vláda ľudu",
    "category": "dejiny",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 996,
    "question": "Koľko krajín je na svete (2024)?",
    "answer": "195",
    "category": "priroda",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 997,
    "question": "Koľko kostí má novorodenec?",
    "answer": "270",
    "category": "veda",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 998,
    "question": "Koľko metrov má futbalové ihrisko?",
    "answer": "105",
    "category": "sport",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 999,
    "question": "V ktorom roku bol vynájdený automobil?",
    "answer": "1885",
    "category": "stroje",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 1000,
    "question": "Koľko zubov má žralok v živote?",
    "answer": "30000",
    "category": "priroda",
    "difficulty": "junior",
    "type": "tiebreaker"
  },
  {
    "id": 1001,
    "question": "Aké je hlavné mesto Argentíny?",
    "answer": "Buenos Aires",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1002,
    "question": "Aké je hlavné mesto Juhoafrickej republiky?",
    "answer": "Pretoria",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1003,
    "question": "Aké je hlavné mesto Thajska?",
    "answer": "Bangkok",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1004,
    "question": "Aké je hlavné mesto Iránu?",
    "answer": "Teherán",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1005,
    "question": "Aké je hlavné mesto Kolumbie?",
    "answer": "Bogota",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1006,
    "question": "Kde sa nachádza Mount Kilimandžáro?",
    "answer": "V Tanzánii",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1007,
    "question": "Aký je najdlhší rieka v Ázii?",
    "answer": "Jangce",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1008,
    "question": "Kde sa nachádza Sahel?",
    "answer": "Na juhu Sahary v Afrike",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1009,
    "question": "Čo je to monsún?",
    "answer": "Sezónna zmena vetrov s prívalovými dažďami",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1010,
    "question": "Kde sa nachádza Panamanský prieplav?",
    "answer": "V Paname, Stredná Amerika",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1011,
    "question": "Aký je najväčší strom v Európe?",
    "answer": "Dub alebo sekvoja (umelo vysadené)",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1012,
    "question": "Kde sa nachádza Mŕtve more?",
    "answer": "Medzi Izraelom a Jordánskom",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1013,
    "question": "Čo je to atol?",
    "answer": "Kruhový koralový ostrov",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1014,
    "question": "Kde sa nachádza Veľká priekopa?",
    "answer": "Vo východnej Afrike",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1015,
    "question": "Aký je najväčší ostrov v Stredozemnom mori?",
    "answer": "Sicília",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1016,
    "question": "Kde sa nachádza Svalbard?",
    "answer": "V Arktíde, patrí Nórsku",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1017,
    "question": "Čo je to delta rieky?",
    "answer": "Nánosové územie pri ústí rieky",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1018,
    "question": "Kde sa nachádza Angkor Wat?",
    "answer": "V Kambodži",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1019,
    "question": "Aký je najvyšší vodopád Európy?",
    "answer": "Vinnufossen (Nórsko)",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1020,
    "question": "Čo je to mangrove?",
    "answer": "Tropický pobrežný les",
    "category": "priroda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1021,
    "question": "Čo je to izotop?",
    "answer": "Atóm rovnakého prvku s rôznym počtom neutrónov",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1022,
    "question": "Aký je Ohmov zákon?",
    "answer": "U = I × R",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1023,
    "question": "Čo je to endotermická reakcia?",
    "answer": "Reakcia pohlcujúca teplo",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1024,
    "question": "Aký je princíp Archimedovho zákona?",
    "answer": "Teleso vo vode je nadľahčené silou rovnou váhe vytlačenej vody",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1025,
    "question": "Čo je to elektrolýza?",
    "answer": "Rozklad látky elektrickým prúdom",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1026,
    "question": "Aký je rozdiel medzi kyselinou a zásadou?",
    "answer": "Kyselina: pH<7, zásada: pH>7",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1027,
    "question": "Čo sú to izobary?",
    "answer": "Čiary spájajúce miesta s rovnakým tlakom",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1028,
    "question": "Aký je vzorec kinetickej energie?",
    "answer": "Ek = ½mv²",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1029,
    "question": "Čo je to katalizátor?",
    "answer": "Látka urýchľujúca reakciu bez vlastnej spotreby",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1030,
    "question": "Aký je princíp Dopplerového efektu?",
    "answer": "Zmena frekvencie pri pohybe zdroja",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1031,
    "question": "Čo sú to kovalentné väzby?",
    "answer": "Zdieľanie elektrónov medzi atómmi",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1032,
    "question": "Aký je princíp protikladov v termodynamike?",
    "answer": "Entropia izolovaného systému nikdy neklesá",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1033,
    "question": "Čo je to interferencia svetla?",
    "answer": "Zosilnenie alebo zoslabenie vĺn",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1034,
    "question": "Aký je princíp superpozície?",
    "answer": "Výsledok je súčet jednotlivých účinkov",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1035,
    "question": "Čo je to redox reakcia?",
    "answer": "Reakcia s prenosom elektrónov",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1036,
    "question": "Čo bola Bitka pri Termopylách?",
    "answer": "Obrana 300 Sparťanov (480 p.n.l.)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1037,
    "question": "Kto bol Hannibal Barkas?",
    "answer": "Kartáginský vojvodca, prešiel Alpy so slonmi",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1038,
    "question": "Čo bola Hanza?",
    "answer": "Stredoveký obchodný zväz severonemeckých miest",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1039,
    "question": "V ktorom storočí bol vynájdený kníhtlač?",
    "answer": "15. storočie (okolo 1440)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1040,
    "question": "Čo bola inkwizícia?",
    "answer": "Cirkevný súd na potláčanie herézie",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1041,
    "question": "Kto bol Koperník a čo tvrdil?",
    "answer": "Astronóm, heliocentrický model",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1042,
    "question": "Čo bola Bostonská čajová párty?",
    "answer": "Protest amerických kolonistov (1773)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1043,
    "question": "Kto bol Robespierre?",
    "answer": "Vodca francúzskej revolúcie, jakobíni",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1044,
    "question": "Čo bola priemyselná revolúcia?",
    "answer": "Prechod z ručnej výroby na strojovú (18.-19. st.)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1045,
    "question": "Kto bol Winston Churchill?",
    "answer": "Britský premiér počas 2. sv. vojny",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1046,
    "question": "Čo bola Bitka o Britániu?",
    "answer": "Letecká bitka medzi RAF a Luftwaffe (1940)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1047,
    "question": "Kto podpísal kapituláciu Nemecka?",
    "answer": "Alfred Jodl a Wilhelm Keitel (1945)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1048,
    "question": "Čo bola operácia Barbarossa?",
    "answer": "Nemecký útok na ZSSR (1941)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1049,
    "question": "Kto bol Ho Či Min?",
    "answer": "Vietnamský revolucionár a prezident",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1050,
    "question": "Čo bola dekolonizácia?",
    "answer": "Proces získavania nezávislosti kolónií",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1051,
    "question": "Koľko je 3²?",
    "answer": "9",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1052,
    "question": "Koľko je 10²?",
    "answer": "100",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1053,
    "question": "Koľko je 4²?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1054,
    "question": "Koľko je 15²?",
    "answer": "225",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1055,
    "question": "Koľko je 10²?",
    "answer": "100",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1056,
    "question": "Koľko je 5²?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1057,
    "question": "Koľko je 3²?",
    "answer": "9",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1058,
    "question": "Koľko je 14²?",
    "answer": "196",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1059,
    "question": "Koľko je 19²?",
    "answer": "361",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1060,
    "question": "Koľko je 19²?",
    "answer": "361",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1061,
    "question": "Koľko je 12²?",
    "answer": "144",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1062,
    "question": "Koľko je 12²?",
    "answer": "144",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1063,
    "question": "Koľko je 3²?",
    "answer": "9",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1064,
    "question": "Koľko je 7²?",
    "answer": "49",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1065,
    "question": "Koľko je 6²?",
    "answer": "36",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1066,
    "question": "Koľko je 12²?",
    "answer": "144",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1067,
    "question": "Koľko je 19²?",
    "answer": "361",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1068,
    "question": "Koľko je 12²?",
    "answer": "144",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1069,
    "question": "Koľko je 9²?",
    "answer": "81",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1070,
    "question": "Koľko je 7²?",
    "answer": "49",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1071,
    "question": "Koľko je 2²?",
    "answer": "4",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1072,
    "question": "Koľko je 15²?",
    "answer": "225",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1073,
    "question": "Koľko je 4²?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1074,
    "question": "Koľko je 14²?",
    "answer": "196",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1075,
    "question": "Koľko je 4²?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1076,
    "question": "Koľko je √4?",
    "answer": "2",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1077,
    "question": "Koľko je √144?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1078,
    "question": "Koľko je √256?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1079,
    "question": "Koľko je √25?",
    "answer": "5",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1080,
    "question": "Koľko je √9?",
    "answer": "3",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1081,
    "question": "Koľko je √16?",
    "answer": "4",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1082,
    "question": "Koľko je √36?",
    "answer": "6",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1083,
    "question": "Koľko je √36?",
    "answer": "6",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1084,
    "question": "Koľko je √4?",
    "answer": "2",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1085,
    "question": "Koľko je √121?",
    "answer": "11",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1086,
    "question": "Koľko je √225?",
    "answer": "15",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1087,
    "question": "Koľko je √400?",
    "answer": "20",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1088,
    "question": "Koľko je √289?",
    "answer": "17",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1089,
    "question": "Koľko je √100?",
    "answer": "10",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1090,
    "question": "Koľko je √289?",
    "answer": "17",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1091,
    "question": "Koľko je √9?",
    "answer": "3",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1092,
    "question": "Koľko je √121?",
    "answer": "11",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1093,
    "question": "Koľko je √144?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1094,
    "question": "Koľko je √324?",
    "answer": "18",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1095,
    "question": "Koľko je √289?",
    "answer": "17",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1096,
    "question": "Koľko je √64?",
    "answer": "8",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1097,
    "question": "Koľko je √324?",
    "answer": "18",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1098,
    "question": "Koľko je √400?",
    "answer": "20",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1099,
    "question": "Koľko je √144?",
    "answer": "12",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1100,
    "question": "Koľko je √4?",
    "answer": "2",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1101,
    "question": "Koľko je 35% z 493?",
    "answer": "172",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1102,
    "question": "Koľko je 42% z 322?",
    "answer": "135",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1103,
    "question": "Koľko je 44% z 426?",
    "answer": "187",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1104,
    "question": "Koľko je 48% z 348?",
    "answer": "167",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1105,
    "question": "Koľko je 43% z 442?",
    "answer": "190",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1106,
    "question": "Koľko je 36% z 291?",
    "answer": "104",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1107,
    "question": "Koľko je 42% z 116?",
    "answer": "48",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1108,
    "question": "Koľko je 21% z 471?",
    "answer": "98",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1109,
    "question": "Koľko je 15% z 349?",
    "answer": "52",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1110,
    "question": "Koľko je 26% z 187?",
    "answer": "48",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1111,
    "question": "Koľko je 31% z 272?",
    "answer": "84",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1112,
    "question": "Koľko je 45% z 300?",
    "answer": "135",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1113,
    "question": "Koľko je 14% z 470?",
    "answer": "65",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1114,
    "question": "Koľko je 39% z 298?",
    "answer": "116",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1115,
    "question": "Koľko je 46% z 498?",
    "answer": "229",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1116,
    "question": "Koľko je 31% z 108?",
    "answer": "33",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1117,
    "question": "Koľko je 22% z 400?",
    "answer": "88",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1118,
    "question": "Koľko je 15% z 421?",
    "answer": "63",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1119,
    "question": "Koľko je 33% z 106?",
    "answer": "34",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1120,
    "question": "Koľko je 32% z 217?",
    "answer": "69",
    "category": "matematika",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1121,
    "question": "Kto vyhral MS vo futbale 2018?",
    "answer": "Francúzsko",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1122,
    "question": "V akom športe je Grand Prix?",
    "answer": "Formule 1 (motoršport)",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1123,
    "question": "Čo je to Tour de France?",
    "answer": "Najslávnejšie cyklistické preteky",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1124,
    "question": "Kto je Novak Đoković?",
    "answer": "Srbský tenista, rekordný počet Grand Slamov",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1125,
    "question": "Čo je to UFC?",
    "answer": "Ultimate Fighting Championship – MMA organizácia",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1126,
    "question": "Kto je Michael Jordan?",
    "answer": "Legendárny americký basketbalista",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1127,
    "question": "Čo je to Premier League?",
    "answer": "Najvyššia anglická futbalová liga",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1128,
    "question": "V akom meste sú LA Lakers?",
    "answer": "Los Angeles",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1129,
    "question": "Kto vyhral Wimbledon 2023 (muži)?",
    "answer": "Carlos Alcaraz",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1130,
    "question": "Čo je to Champions League?",
    "answer": "Najvyššia klubová futbalová súťaž v Európe",
    "category": "sport",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1131,
    "question": "Kto napísal Hamlet?",
    "answer": "William Shakespeare",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1132,
    "question": "Čo je to satira?",
    "answer": "Literárny útvar kritizujúci spoločnosť",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1133,
    "question": "Kto napísal Skúseného?",
    "answer": "Voltaire (Candide)",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1134,
    "question": "Čo je to epos?",
    "answer": "Rozsiahla básnická skladba o hrdinských činoch",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1135,
    "question": "Kto napísal Vojnu a mier?",
    "answer": "Lev Tolstoj",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1136,
    "question": "Čo je to antológia?",
    "answer": "Výber diel rôznych autorov",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1137,
    "question": "Kto napísal Obraz Doriana Graya?",
    "answer": "Oscar Wilde",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1138,
    "question": "Čo je to novela?",
    "answer": "Kratšia prozaická forma",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1139,
    "question": "Kto napísal Biedu?",
    "answer": "Victor Hugo (Bedári)",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1140,
    "question": "Čo je to drama?",
    "answer": "Literárny žáner pre divadelné inscenovanie",
    "category": "literatura",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1141,
    "question": "Kto bol Platón?",
    "answer": "Grécky filozof, žiak Sokrata",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1142,
    "question": "Čím sa preslávil Archimedes?",
    "answer": "Zákon o nadľahčovaní, Eureka!",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1143,
    "question": "Kto bol Michelangelo?",
    "answer": "Renesančný maliar a sochár",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1144,
    "question": "Čím sa preslávil Louis Pasteur?",
    "answer": "Pasterizácia, vakcíny",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1145,
    "question": "Kto bol Konfucius?",
    "answer": "Čínsky filozof",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1146,
    "question": "Čím sa preslávil James Watt?",
    "answer": "Zdokonalil parný stroj",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1147,
    "question": "Kto bol Tutanchamon?",
    "answer": "Mladý egyptský faraón",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1148,
    "question": "Kto bola Kleopatra?",
    "answer": "Posledná faraónka Egypta",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1149,
    "question": "Čím sa preslávil Gutenberg?",
    "answer": "Vynález kníhtlače",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1150,
    "question": "Kto bol Sokrates?",
    "answer": "Grécky filozof, metóda dialógu",
    "category": "osobnosti",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1151,
    "question": "V ktorom roku vynašiel Gutenberg kníhtlač?",
    "answer": "1440",
    "category": "stroje",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1152,
    "question": "Koľko metrov má míľa?",
    "answer": "1609",
    "category": "matematika",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1153,
    "question": "V ktorom roku bol objavený penicilín?",
    "answer": "1928",
    "category": "veda",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1154,
    "question": "Koľko km je Zem od Slnka (v miliónoch)?",
    "answer": "150",
    "category": "veda",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1155,
    "question": "V ktorom roku bola založená OSN?",
    "answer": "1945",
    "category": "historicke_podujatia",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1156,
    "question": "Koľko stupňov Celzia je absolútna nula?",
    "answer": "-273",
    "category": "veda",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1157,
    "question": "V ktorom roku začala 2. svetová vojna?",
    "answer": "1939",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1158,
    "question": "Koľko metrov má najvyšší mrakodrap (2024)?",
    "answer": "828",
    "category": "stroje",
    "difficulty": "level1",
    "type": "tiebreaker"
  },
  {
    "id": 1159,
    "question": "Čo je to subduction zóna?",
    "answer": "Miesto kde sa oceánska platňa podtláča pod kontinentálnu",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1160,
    "question": "Aký je najstarší hornina na Zemi?",
    "answer": "Zirkón (4,4 miliardy rokov)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1161,
    "question": "Čo je to halocline?",
    "answer": "Vrstva oceánu s prudkou zmenou slanosti",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1162,
    "question": "Kde sa nachádza Tristan da Cunha?",
    "answer": "Najodľahlejší obývaný ostrov v Atlantiku",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1163,
    "question": "Čo je to isostázia?",
    "answer": "Gravitačná rovnováha zemskej kôry",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1164,
    "question": "Aký je najstarší les na svete?",
    "answer": "Daintree (Austrália, ~180 mil. rokov)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1165,
    "question": "Čo sú to fjordy?",
    "answer": "Zatopené ľadovcové údolia",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1166,
    "question": "Kde je Deception Island?",
    "answer": "V Antarktíde (aktívny vulkán)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1167,
    "question": "Čo je to konvektívne prúdenie?",
    "answer": "Cirkulácia v plášti Zeme poháňajúca tektoniku",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1168,
    "question": "Aký je najhlbší banský tunel?",
    "answer": "Mponeng (Juhoafrická republika, ~4 km)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1169,
    "question": "Čo je to orogénia?",
    "answer": "Proces tvorby pohorí",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1170,
    "question": "Kde sa nachádza Yucatánsky kráter?",
    "answer": "V Mexiku (dopad asteroidu pred 66 mil. rokmi)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1171,
    "question": "Čo je to Mohorovičičova diskontinuita?",
    "answer": "Rozhranie medzi kôrou a plášťom Zeme",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1172,
    "question": "Aký je princíp izotopového datovania?",
    "answer": "Meranie rozpadu rádioaktívnych izotopov",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1173,
    "question": "Čo je to paleoklimatológia?",
    "answer": "Štúdium klímy v geologickej minulosti",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1174,
    "question": "Kde sa nachádza Mariana Trench?",
    "answer": "V západnom Tichom oceáne",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1175,
    "question": "Čo sú to stromatality?",
    "answer": "Vrstevnaté štruktúry tvorené cyanobaktériami",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1176,
    "question": "Aký je najväčší ľadovec na svete?",
    "answer": "Lambert-Fisher (Antarktída)",
    "category": "priroda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1177,
    "question": "Čo je to kvantová prepojenosť (entanglement)?",
    "answer": "Korelácia kvantových stavov na diaľku",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1178,
    "question": "Aký je Stefanov-Boltzmannov zákon?",
    "answer": "Vyžarovanie telesa je úmerné T⁴",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1179,
    "question": "Čo je to synchrotrónové žiarenie?",
    "answer": "Žiarenie nabitých častíc na kruhovej dráhe",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1180,
    "question": "Aký je princíp Maxwellových rovníc?",
    "answer": "Základné rovnice elektromagnetizmu",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1181,
    "question": "Čo je to Baryogenéza?",
    "answer": "Vznik nerovnováhy hmoty a antihmoty vo vesmíre",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1182,
    "question": "Aký je princíp Lenzovho zákona?",
    "answer": "Indukovaný prúd pôsobí proti zmene, ktorá ho vyvolala",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1183,
    "question": "Čo je to fázový prechod?",
    "answer": "Zmena skupenstva hmoty",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1184,
    "question": "Aký je princíp koherencie svetla?",
    "answer": "Svetelné vlny s konštantným fázovým rozdielom",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1185,
    "question": "Čo je to Chandrasekharov limit?",
    "answer": "Maximálna hmotnosť bieleho trpaslíka (~1,4 M☉)",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1186,
    "question": "Aký je princíp Comptonového rozptylu?",
    "answer": "Rozptyl fotónu na elektróne so zmenou vlnovej dĺžky",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1187,
    "question": "Čo je to kvantová chrodynamika?",
    "answer": "Teória silnej jadrovej interakcie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1188,
    "question": "Aký je princíp Ramseyovej spektroskopie?",
    "answer": "Meranie frekvencií atómových prechodov",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1189,
    "question": "Čo je to Bekensteinova-Hawkingova entropia?",
    "answer": "Entropia čiernej diery úmerná ploche horizontu",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1190,
    "question": "Aký je princíp adiabatického procesu?",
    "answer": "Termodynamický proces bez výmeny tepla",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1191,
    "question": "Čo je to Casimirový efekt?",
    "answer": "Príťažlivá sila medzi dvoma plochami vo vákuu",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1192,
    "question": "Čo bola Bitka pri Lepante?",
    "answer": "Námorná bitka kresťanov proti Osmanom (1571)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1193,
    "question": "Kto bol Akbar Veľký?",
    "answer": "Mogulský cisár, vládca Indie",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1194,
    "question": "Čo bola Defenestrácia?",
    "answer": "Vyhodenie úradníkov z okna (Praha, 1618)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1195,
    "question": "Kto bol Tokugawa Ieyasu?",
    "answer": "Zakladateľ Tokugawovej éry v Japonsku",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1196,
    "question": "Čo bola Bitka pri Trafalgare?",
    "answer": "Britské námorné víťazstvo nad Francúzskom (1805)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1197,
    "question": "Kto bol Cavour?",
    "answer": "Taliansky politik, zjednotenie Talianska",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1198,
    "question": "Čo bola Balfourova deklarácia?",
    "answer": "Britská podpora židovského domova v Palestíne (1917)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1199,
    "question": "Kto bol Clemenceau?",
    "answer": "Francúzsky premiér po 1. sv. vojne",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1200,
    "question": "Čo boli Norimberské procesy?",
    "answer": "Súdenie vojnových zločincov po 2. sv. vojne",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1201,
    "question": "Kto bol Josip Broz Tito?",
    "answer": "Juhoslovanský vodca, vlastná cesta socializmu",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1202,
    "question": "Čo bola Zelená revolúcia?",
    "answer": "Modernizácia poľnohospodárstva v rozvojových krajinách",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1203,
    "question": "Kto bol Leonid Brežnev?",
    "answer": "Sovietsky vodca, Brežnevova doktrína",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1204,
    "question": "Čo bol Camp David?",
    "answer": "Mierotvé rokovania Izrael-Egypt (1978)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1205,
    "question": "Kto bol Che Guevara?",
    "answer": "Argentínsky revolucionár",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1206,
    "question": "Čo bola Perestrojka?",
    "answer": "Gorbačovova prestavba ZSSR (1985-91)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1207,
    "question": "Čo bola Glasnosť?",
    "answer": "Politika otvorenosti v ZSSR",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1208,
    "question": "Kto bol Konrad Adenauer?",
    "answer": "Prvý kancelár Spolkovej republiky Nemecko",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1209,
    "question": "Čo je to Gesamtkunstwerk?",
    "answer": "Wagnerov koncept celkového umeleckého diela",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1210,
    "question": "Kto bol El Greco?",
    "answer": "Grécko-španielsky renesančný maliar",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1211,
    "question": "Čo je to tenebrismo?",
    "answer": "Extrémny šerosvit v maľbe",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1212,
    "question": "Kto bol Bernini?",
    "answer": "Taliansky barokový sochár a architekt",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1213,
    "question": "Čo je to sfumato?",
    "answer": "Da Vinciho technika jemného prechodu farieb",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1214,
    "question": "Kto bol Rothko?",
    "answer": "Americký abstraktný expresionista, farebné polia",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1215,
    "question": "Čo je to Gesamtkunstwerk?",
    "answer": "Totálne umelecké dielo (Wagner)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1216,
    "question": "Kto navrhol Padajúcu vodu?",
    "answer": "Frank Lloyd Wright (Fallingwater)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1217,
    "question": "Čo je to kinetic art?",
    "answer": "Umenie s pohybom",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1218,
    "question": "Kto bol Mondrian?",
    "answer": "Holandský maliar, geometrická abstrakcia",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1219,
    "question": "Čo je to art brut?",
    "answer": "Umenie mimo hlavného prúdu (outsider art)",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1220,
    "question": "Kto bol Brancusi?",
    "answer": "Rumunský sochár, priekopník abstrakcie",
    "category": "kultura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1221,
    "question": "Koľko je 13^3?",
    "answer": "2197",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1222,
    "question": "Koľko je 9^3?",
    "answer": "729",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1223,
    "question": "Koľko je 8^4?",
    "answer": "4096",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1224,
    "question": "Koľko je 2^4?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1225,
    "question": "Koľko je 13^4?",
    "answer": "28561",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1226,
    "question": "Koľko je 3^3?",
    "answer": "27",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1227,
    "question": "Koľko je 9^2?",
    "answer": "81",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1228,
    "question": "Koľko je 3^3?",
    "answer": "27",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1229,
    "question": "Koľko je 13^3?",
    "answer": "2197",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1230,
    "question": "Koľko je 2^3?",
    "answer": "8",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1231,
    "question": "Koľko je 4^2?",
    "answer": "16",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1232,
    "question": "Koľko je 5^2?",
    "answer": "25",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1233,
    "question": "Koľko je 13^3?",
    "answer": "2197",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1234,
    "question": "Koľko je 10^4?",
    "answer": "10000",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1235,
    "question": "Koľko je 14^4?",
    "answer": "38416",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1236,
    "question": "Koľko je 93 × 84?",
    "answer": "7812",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1237,
    "question": "Koľko je 80 × 99?",
    "answer": "7920",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1238,
    "question": "Koľko je 96 × 71?",
    "answer": "6816",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1239,
    "question": "Koľko je 53 × 19?",
    "answer": "1007",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1240,
    "question": "Koľko je 83 × 78?",
    "answer": "6474",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1241,
    "question": "Koľko je 14 × 56?",
    "answer": "784",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1242,
    "question": "Koľko je 98 × 49?",
    "answer": "4802",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1243,
    "question": "Koľko je 92 × 63?",
    "answer": "5796",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1244,
    "question": "Koľko je 35 × 55?",
    "answer": "1925",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1245,
    "question": "Koľko je 26 × 39?",
    "answer": "1014",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1246,
    "question": "Koľko je 67 × 27?",
    "answer": "1809",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1247,
    "question": "Koľko je 97 × 91?",
    "answer": "8827",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1248,
    "question": "Koľko je 57 × 50?",
    "answer": "2850",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1249,
    "question": "Koľko je 12 × 50?",
    "answer": "600",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1250,
    "question": "Koľko je 48 × 31?",
    "answer": "1488",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1251,
    "question": "Kto je najúspešnejší paralympionik?",
    "answer": "Trischa Zorn (55 medailí)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1252,
    "question": "Čo je to Borg-McEnroe rivalita?",
    "answer": "Legendárny tenisový súboj 70.-80. rokov",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1253,
    "question": "V akom roku boli OH v Moskve?",
    "answer": "1980",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1254,
    "question": "Kto vyhral prvý majstrovstvá sveta vo futbale?",
    "answer": "Uruguay (1930)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1255,
    "question": "Čo je to Cruyff turn?",
    "answer": "Futbalový trik Johana Cruyffa",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1256,
    "question": "Kto je považovaný za otca modernej olympiády?",
    "answer": "Pierre de Coubertin",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1257,
    "question": "Čo je to Miracle on Ice?",
    "answer": "Víťazstvo USA nad ZSSR v hokeji (OH 1980)",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1258,
    "question": "Kto vyhral Tour de France 5-krát?",
    "answer": "Jacques Anquetil, Eddy Merckx, B. Hinault, M. Indurain",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1259,
    "question": "V akom športe sa súťaží v K-1?",
    "answer": "Kickbox",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1260,
    "question": "Čo je to Dakarská rely?",
    "answer": "Preteky cross-country cez púšť",
    "category": "sport",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1261,
    "question": "Kto napísal Šialeného v ohryzku?",
    "answer": "Nikolaj Gogol (Mŕtve duše)",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1262,
    "question": "Čo je to nouveau roman?",
    "answer": "Francúzsky experimentálny román 50.-60. rokov",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1263,
    "question": "Kto napísal Vlka stepí?",
    "answer": "Hermann Hesse",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1264,
    "question": "Čo je to naturalizmus v literatúre?",
    "answer": "Smer zobrazujúci realitu detailne, vrátane škaredého",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1265,
    "question": "Kto napísal Na západnom fronte nič nového?",
    "answer": "Erich Maria Remarque",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1266,
    "question": "Čo je to pikareskný román?",
    "answer": "Román o dobrodružstvách šibala",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1267,
    "question": "Kto napísal Cudzie?",
    "answer": "Albert Camus (Cudzinec)",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1268,
    "question": "Čo je to anti-roman?",
    "answer": "Dielo popierajúce konvencie románu",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1269,
    "question": "Kto napísal Meno ruže?",
    "answer": "Umberto Eco",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1270,
    "question": "Čo je to roman à clef?",
    "answer": "Román maskujúci skutočné osoby",
    "category": "literatura",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1271,
    "question": "Kto režíroval Občan Kane?",
    "answer": "Orson Welles (1941)",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1272,
    "question": "Čo je to auteur teória?",
    "answer": "Režisér ako hlavný autor filmu",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1273,
    "question": "Kto režíroval Tokijský príbeh?",
    "answer": "Jasudžiró Ozu",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1274,
    "question": "Čo je to cinéma vérité?",
    "answer": "Dokumentárny štýl sledujúci realitu",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1275,
    "question": "Kto režíroval Zrkadlo?",
    "answer": "Andrej Tarkovskij (1975)",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1276,
    "question": "Čo je to Steadicam?",
    "answer": "Stabilizačný systém pre kameru",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1277,
    "question": "Kto režíroval Bicycle Thieves?",
    "answer": "Vittorio De Sica",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1278,
    "question": "Čo je to dolly zoom?",
    "answer": "Vertigo efekt – Hitchcockova technika",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1279,
    "question": "Kto režíroval Piatu pečať?",
    "answer": "Ingmar Bergman (Siedma pečať)",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1280,
    "question": "Čo je to mise-en-scène?",
    "answer": "Všetko viditeľné v zábere",
    "category": "film",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1281,
    "question": "V ktorom roku bol prvý atómový výbuch?",
    "answer": "1945",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1282,
    "question": "Koľko galaxií je v pozorovateľnom vesmíre (v miliardách)?",
    "answer": "200",
    "category": "veda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1283,
    "question": "V ktorom roku bol prvý let bratov Wrightovcov?",
    "answer": "1903",
    "category": "stroje",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1284,
    "question": "Koľko básní je v Shakespearových sonetoch?",
    "answer": "154",
    "category": "literatura",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1285,
    "question": "V ktorom roku začala Francúzska revolúcia?",
    "answer": "1789",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1286,
    "question": "Koľko symfonií napísal Beethoven?",
    "answer": "9",
    "category": "hudba",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1287,
    "question": "V ktorom roku bola založená Harvard University?",
    "answer": "1636",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1288,
    "question": "Koľko krajín je v Afrike?",
    "answer": "54",
    "category": "priroda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1289,
    "question": "V ktorom roku zomrel Einstein?",
    "answer": "1955",
    "category": "veda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1290,
    "question": "Koľko filmov režíroval Hitchcock?",
    "answer": "53",
    "category": "film",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1291,
    "question": "Koľko strún má gitara?",
    "answer": "6",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1292,
    "question": "Aký je najväčší šelma v Európe?",
    "answer": "Medveď hnedý",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1293,
    "question": "Čo je to duha?",
    "answer": "Optický jav rozkladu svetla na farby",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1294,
    "question": "Koľko kostí má dospelý človek?",
    "answer": "206",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1295,
    "question": "Čo je to morský koník?",
    "answer": "Malá ryba v tvare koňa",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1296,
    "question": "Koľko dní trvá rok na Zemi?",
    "answer": "365 (alebo 366 v priestupnom)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1297,
    "question": "Čo je to hora?",
    "answer": "Vyvýšenina nad 1000 m",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1298,
    "question": "Aký je najrýchlejší pozemný živočích?",
    "answer": "Gepard",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1299,
    "question": "Koľko nôh má motýľ?",
    "answer": "6",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1300,
    "question": "Čo je to tornádo?",
    "answer": "Rotujúci vzdušný vír",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1301,
    "question": "Koľko hráčov je v hádzanej družstve?",
    "answer": "7",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1302,
    "question": "Čo je to iglú?",
    "answer": "Dom zo snehu a ľadu",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1303,
    "question": "Aké zviera nosí pancier?",
    "answer": "Pásavec",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1304,
    "question": "Koľko kontinentov je na Zemi?",
    "answer": "7",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1305,
    "question": "Čo je to fotosyntéza?",
    "answer": "Tvorba živín rastlinami pomocou svetla",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1306,
    "question": "Koľko hudobných nôt existuje?",
    "answer": "7 (do, re, mi, fa, sol, la, si)",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1307,
    "question": "Čo je to lupa?",
    "answer": "Zväčšovacie sklo",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1308,
    "question": "Aký je najväčší vtáčí let?",
    "answer": "Albatros (rozpätie krídel 3,7 m)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1309,
    "question": "Koľko kociek cukru sa zmestí na jednu líniu?",
    "answer": "Závisí od dĺžky - otázka je vtipná",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1310,
    "question": "Aké zviera vie plávať hneď po narodení?",
    "answer": "Kačka",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1311,
    "question": "Čo je to korál?",
    "answer": "Morský živočích tvoriaci útesy",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1312,
    "question": "Koľko farieb má dúha?",
    "answer": "7",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1313,
    "question": "Aký je najmenší cicavec?",
    "answer": "Bumblebee netopier (Kittiiho netopierček)",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1314,
    "question": "Čo je to fosília?",
    "answer": "Skamenelina starého organizmu",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1315,
    "question": "Aký kvietok sa otáča za slnkom?",
    "answer": "Slnečnica",
    "category": "priroda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1316,
    "question": "Koľko minút má hodina?",
    "answer": "60",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1317,
    "question": "Čo je to sopečný popol?",
    "answer": "Drobné čiastočky vyvrhnuté sopkou",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1318,
    "question": "Koľko hráčov je v basketbalovom tíme na ihrisku?",
    "answer": "5",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1319,
    "question": "Čo je to mapa?",
    "answer": "Zmenšený obraz zemského povrchu",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1320,
    "question": "Koľko hodín má deň?",
    "answer": "24",
    "category": "veda",
    "difficulty": "junior",
    "type": "standard"
  },
  {
    "id": 1321,
    "question": "Čo je to mitóza?",
    "answer": "Bunkové delenie na dve identické bunky",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1322,
    "question": "Aký je vzorec pre objem gule?",
    "answer": "V = 4/3 π r³",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1323,
    "question": "Čo sú to lymfocyty?",
    "answer": "Biele krvinky zodpovedné za imunitu",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1324,
    "question": "Aký je princíp práce termostatu?",
    "answer": "Bimetálový pás reaguje na teplotu",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1325,
    "question": "Čo je to refrakcia?",
    "answer": "Lom svetla pri prechode medzi prostrediami",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1326,
    "question": "Kto objavil Ameriku?",
    "answer": "Krištof Kolumbus (1492)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1327,
    "question": "Čo je to NATO?",
    "answer": "Severoatlantická aliancia",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1328,
    "question": "Kto bol Džingischán?",
    "answer": "Mongolský dobyvateľ, najväčšia ríša",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1329,
    "question": "Čo je to rekonkista?",
    "answer": "Znovudobytie Pyrenejského polostrova od Maurov",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1330,
    "question": "Kto bol Metternich?",
    "answer": "Rakúsky kancelár, Viedenský kongres",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1331,
    "question": "Čo je to secesia?",
    "answer": "Umelecký smer začiatku 20. storočia",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1332,
    "question": "Kto bol Dante Alighieri?",
    "answer": "Taliansky básnik, Božská komédia",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1333,
    "question": "Čo je to barok?",
    "answer": "Umelecký smer 17.-18. storočia",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1334,
    "question": "Kto bol El Cid?",
    "answer": "Španielsky stredoveký vojvodca",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1335,
    "question": "Čo je to gotika v architektúre?",
    "answer": "Smer s lomenými oblúkmi a oporami",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1336,
    "question": "Aký plyn je najrozšírenejší v atmosfére?",
    "answer": "Dusík (78%)",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1337,
    "question": "Čo je to tsunami?",
    "answer": "Obrovská vlna spôsobená morským zemetrasením",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1338,
    "question": "Koľko chromozómov má človek?",
    "answer": "46 (23 párov)",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1339,
    "question": "Čo je to enzým?",
    "answer": "Biologický katalyzátor",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1340,
    "question": "Aký vitamín produkuje pokožka na slnku?",
    "answer": "Vitamín D",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1341,
    "question": "Čo je to elektrón?",
    "answer": "Záporná subatómová častica",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1342,
    "question": "Koľko planét v slnečnej sústave má prstence?",
    "answer": "4 (Jupiter, Saturn, Urán, Neptún)",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1343,
    "question": "Čo je to fotón?",
    "answer": "Častica svetla",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1344,
    "question": "Aký je chemický vzorec kyseliny sírovej?",
    "answer": "H₂SO₄",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1345,
    "question": "Čo je to seizmograf?",
    "answer": "Prístroj na meranie zemetrasení",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1346,
    "question": "Ktorý prvok má symbol Au?",
    "answer": "Zlato",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1347,
    "question": "Čo je to albedo?",
    "answer": "Odrazivosť povrchu",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1348,
    "question": "Kto vynašiel rádio?",
    "answer": "Guglielmo Marconi",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1349,
    "question": "Čo je to radar?",
    "answer": "Detekcia objektov pomocou rádiových vĺn",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1350,
    "question": "Kto vynašiel dynamit?",
    "answer": "Alfred Nobel",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1351,
    "question": "Čo je to LED?",
    "answer": "Svietiaca dióda",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1352,
    "question": "Kto zostrojil prvý počítač?",
    "answer": "Charles Babbage (koncept), Zuse Z3 (funkčný)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1353,
    "question": "Čo je to GPS?",
    "answer": "Globálny polohový systém",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1354,
    "question": "Kto bol Alexander Graham Bell?",
    "answer": "Vynálezca telefónu",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1355,
    "question": "Čo je to turbína?",
    "answer": "Stroj premieňajúci prúd na rotáciu",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1356,
    "question": "Kto zostrojil prvý parný vlak?",
    "answer": "George Stephenson",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1357,
    "question": "V akom roku sa uskutočnila Bitka pri Moháči?",
    "answer": "1526",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1358,
    "question": "Kto bol Martin Luther?",
    "answer": "Protestantský reformátor",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1359,
    "question": "Čo bola Šľachtická revolúcia?",
    "answer": "Anglická revolúcia za parlamentnú monarchiu",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1360,
    "question": "V akom roku padol Berlínsky múr?",
    "answer": "1989",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1361,
    "question": "Kto bol Francis Drake?",
    "answer": "Anglický korzár a moreplavcov",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1362,
    "question": "Čo bola Stuartovská reštaurácia?",
    "answer": "Obnovenie monarchie v Anglicku (1660)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1363,
    "question": "Kto bol Simón Bolívar?",
    "answer": "Osloboditeľ Južnej Ameriky",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1364,
    "question": "Čo bola Krymská vojna?",
    "answer": "Konflikt Ruska proti Británii, Francúzsku a Osmánom (1853-56)",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1365,
    "question": "Kto bol Bismarck?",
    "answer": "Pruský kancelár, zjednotil Nemecko",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1366,
    "question": "Kto napísal Bratov Karamazovcov?",
    "answer": "Fiodor Dostojevskij",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1367,
    "question": "Kto režíroval Krstného otca?",
    "answer": "Francis Ford Coppola",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1368,
    "question": "Kto napísal 1984?",
    "answer": "George Orwell",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1369,
    "question": "Kto zložil Bolero?",
    "answer": "Maurice Ravel",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1370,
    "question": "Čo je to blues?",
    "answer": "Hudobný žáner afroamerického pôvodu",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1371,
    "question": "Kto bol Charlie Parker?",
    "answer": "Jazzový saxofonista, zakladateľ bebopu",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1372,
    "question": "Čo je to Motown?",
    "answer": "Americké hudobné vydavateľstvo, žáner soul",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1373,
    "question": "Kto namaľoval Slnečnice?",
    "answer": "Vincent van Gogh",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1374,
    "question": "Čo je to impresionizmus?",
    "answer": "Maliarsky smer zachycujúci dojem svetla",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1375,
    "question": "Kto vytvoril sochu Mysliteľ?",
    "answer": "Auguste Rodin",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1376,
    "question": "Čo je to kubizmus?",
    "answer": "Smer zobrazujúci objekty z viacerých uhlov",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1377,
    "question": "Kto bol Andy Warhol?",
    "answer": "Americký pop-art umelec",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1378,
    "question": "Kto vyhral Wimbledon 2022 (ženy)?",
    "answer": "Elena Rybakinová",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1379,
    "question": "Koľko hráčov je v rugby tíme?",
    "answer": "15",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1380,
    "question": "V akom meste boli OH 2016?",
    "answer": "Rio de Janeiro",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1381,
    "question": "Kto je Serena Williams?",
    "answer": "Americká tenistka, 23 Grand Slamov",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1382,
    "question": "Čo je to triatlon?",
    "answer": "Plávanie, cyklistika a beh",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1383,
    "question": "V akom roku bola prvá F1 sezóna?",
    "answer": "1950",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1384,
    "question": "Kto je Lionel Messi?",
    "answer": "Argentínsky futbalista",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1385,
    "question": "Čo je to biathlon?",
    "answer": "Beh na lyžiach a streľba",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1386,
    "question": "Kto bol Muhammad Ali?",
    "answer": "Legendárny americký boxer",
    "category": "dejiny",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1387,
    "question": "Koľko setov sa hrá vo volejbale?",
    "answer": "5 (víťaz na 3)",
    "category": "veda",
    "difficulty": "level1",
    "type": "standard"
  },
  {
    "id": 1388,
    "question": "Doplňte: Kde bolo, tam bolo, bolo raz jedno...",
    "answer": "kráľovstvo",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1389,
    "question": "Doplňte: Kto hľadá...",
    "answer": "nájde",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1390,
    "question": "Doplňte: Ranné vtáča...",
    "answer": "ďalej doskáče",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1391,
    "question": "Doplňte: Bez práce nie sú...",
    "answer": "koláče",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1392,
    "question": "Doplňte: Vlk v ovčom...",
    "answer": "rúchu",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1393,
    "question": "Doplňte: Lepšie raz vidieť ako stokrát...",
    "answer": "počuť",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1394,
    "question": "Doplňte: Tichá voda...",
    "answer": "brehy myje",
    "category": "doplnovacky",
    "difficulty": "level1",
    "type": "complete_sentence"
  },
  {
    "id": 1395,
    "question": "Čo je to Lagrangeov bod?",
    "answer": "Miesto gravitačnej rovnováhy dvoch telies",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1396,
    "question": "Aký je princíp CRISPR?",
    "answer": "Presná editácia génov pomocou Cas9",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1397,
    "question": "Čo je to topologický izolátor?",
    "answer": "Materiál vodivý na povrchu, izolant vnútri",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1398,
    "question": "Aký je princíp MRI?",
    "answer": "Zobrazovanie pomocou magnetickej rezonancie jadier",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1399,
    "question": "Čo je to kvantový tunelovanie?",
    "answer": "Prechod častice cez bariéru bez dostatočnej energie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1400,
    "question": "Aký je princíp Hubbleovho zákona?",
    "answer": "Rýchlosť vzďaľovania galaxie je úmerná vzdialenosti",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1401,
    "question": "Čo je to neutrínová oscilace?",
    "answer": "Premena neutríno medzi typmi pri pohybe",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1402,
    "question": "Aký je princíp Pauliho vylučovacieho princípu?",
    "answer": "Dva fermióny nemôžu mať rovnaký kvantový stav",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1403,
    "question": "Čo je to Boseho-Einsteinov kondenzát?",
    "answer": "Stav hmoty pri extrémne nízkych teplotách",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1404,
    "question": "Aký je princíp Heisenbergovej neurčitosti?",
    "answer": "Polohu a hybnosť nemožno merať presne súčasne",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1405,
    "question": "Čo je to Hertzsprungov-Russellov diagram?",
    "answer": "Graf svietivosti hviezd v závislosti od teploty",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1406,
    "question": "Aký je princíp Carnottovho cyklu?",
    "answer": "Ideálny tepelný stroj s maximálnou účinnosťou",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1407,
    "question": "Čo je to tekuté kryštály?",
    "answer": "Stav hmoty medzi kvapalinou a kryštálom",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1408,
    "question": "Aký je princíp elektromagnetickej indukcie?",
    "answer": "Zmena magnetického toku indukuje napätie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1409,
    "question": "Čo je to ITER projekt?",
    "answer": "Experimentálny termonukleárny fuzný reaktor",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1410,
    "question": "Kto bol Niels Bohr?",
    "answer": "Dánsky fyzik, model atómu",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1411,
    "question": "Čo je to Schrödingerova rovnica?",
    "answer": "Základná rovnica kvantovej mechaniky",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1412,
    "question": "Kto bol Max Planck?",
    "answer": "Zakladateľ kvantovej teórie",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1413,
    "question": "Čo je to fotoelektrický efekt?",
    "answer": "Vyrazenie elektrónov svetlom z povrchu",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1414,
    "question": "Kto bol Enrico Fermi?",
    "answer": "Taliansky fyzik, prvý jadrový reaktor",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1415,
    "question": "Aký je princíp termojadrovej syntézy?",
    "answer": "Spájanie ľahkých jadier za uvoľnenia energie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1416,
    "question": "Čo je to tmavá energia?",
    "answer": "Hypotetická energia spôsobujúca expandovanie vesmíru",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1417,
    "question": "Kto bol Erwin Schrödinger?",
    "answer": "Rakúsky fyzik, vlnová mechanika",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1418,
    "question": "Čo je to kvazar?",
    "answer": "Aktívne jadro galaxie, najjasnejší objekt vo vesmíre",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1419,
    "question": "Kto objavil rádioaktivitu?",
    "answer": "Henri Becquerel (1896)",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1420,
    "question": "Čo bola Vojna ruží?",
    "answer": "Anglická dynastická vojna Lancasterovcov a Yorkovcov",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1421,
    "question": "Kto bol Filíp II. Macedónsky?",
    "answer": "Otec Alexandra Veľkého, zjednotil Grécko",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1422,
    "question": "Čo bola Bitka pri Marathóne?",
    "answer": "Grécke víťazstvo nad Peržanmi (490 p.n.l.)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1423,
    "question": "Kto bol Saladin?",
    "answer": "Moslimský vodca, dobyl Jeruzalem (1187)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1424,
    "question": "Čo bola Storočná vojna?",
    "answer": "Konflikt Anglicka a Francúzska (1337-1453)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1425,
    "question": "Kto bol Sulejman Nádherný?",
    "answer": "Osmanský sultán, zlatý vek Osmanskej ríše",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1426,
    "question": "Čo bola Tridsaťročná vojna?",
    "answer": "Náboženský konflikt v Európe (1618-1648)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1427,
    "question": "Kto bol Kardinal Richelieu?",
    "answer": "Francúzsky štátnik, posilnil monarchiu",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1428,
    "question": "Čo bola Septembróva revolúcia (1848)?",
    "answer": "Revolučné hnutie v Európe za demokratizáciu",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1429,
    "question": "Kto bol Leopold II. Belgický?",
    "answer": "Belgický kráľ, koloniálna správa Konga",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1430,
    "question": "Čo bol Molotov-Ribbentropov pakt?",
    "answer": "Nemecko-sovietsky pakt o neútočení (1939)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1431,
    "question": "Kto bol Gavrilo Princip?",
    "answer": "Atentátnik na Franza Ferdinanda (1914)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1432,
    "question": "Čo bola Jaltská konferencia?",
    "answer": "Stretnutie Roosevelta, Churchilla a Stalina (1945)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1433,
    "question": "Kto bol Willy Brandt?",
    "answer": "Nemecký kancelár, Ostpolitik",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1434,
    "question": "Čo bol Suezský kríza?",
    "answer": "Britsko-francúzsky útok na Egypt (1956)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1435,
    "question": "Kto režíroval Koyaanisqatsi?",
    "answer": "Godfrey Reggio",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1436,
    "question": "Čo je to neorealizmus v kinematografii?",
    "answer": "Taliansky povojnový smer, reálne príbehy",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1437,
    "question": "Kto režíroval Rashomon?",
    "answer": "Akira Kurosawa (1950)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1438,
    "question": "Čo je to jump cut?",
    "answer": "Ostrý strih naznačujúci preskok v čase",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1439,
    "question": "Kto režíroval Persona?",
    "answer": "Ingmar Bergman (1966)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1440,
    "question": "Čo je to film noir?",
    "answer": "Tmavý, cynický filmový štýl 40.-50. rokov",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1441,
    "question": "Kto napísal Faust?",
    "answer": "Johann Wolfgang von Goethe",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1442,
    "question": "Čo je to existencializmus v literatúre?",
    "answer": "Filozofický smer zdôrazňujúci slobodu a zodpovednosť",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1443,
    "question": "Kto napísal Ulysses?",
    "answer": "James Joyce",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1444,
    "question": "Čo je to magický realizmus?",
    "answer": "Kombinácia reality a fantastických prvkov",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1445,
    "question": "Kto napísal Sto rokov samoty?",
    "answer": "Gabriel García Márquez",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1446,
    "question": "Čo je to absurdná dráma?",
    "answer": "Dramatický smer o nezmyselnosti existencie",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1447,
    "question": "Kto napísal Čakanie na Godota?",
    "answer": "Samuel Beckett",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1448,
    "question": "Kto zložil Svätenie jari?",
    "answer": "Igor Stravinskij",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1449,
    "question": "Čo je to atonalita?",
    "answer": "Hudba bez tonálneho centra",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1450,
    "question": "Kto bol John Coltrane?",
    "answer": "Jazzový saxofonista, A Love Supreme",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1451,
    "question": "Čo je to dodekafónia?",
    "answer": "Schönbergova dvanásťtónová kompozičná technika",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1452,
    "question": "Kto bol Dmitri Šostakovič?",
    "answer": "Ruský skladateľ, 15 symfonií",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1453,
    "question": "Čo je to pointilizmus?",
    "answer": "Maľba pomocou bodov čistej farby",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1454,
    "question": "Kto bol Jackson Pollock?",
    "answer": "Americký abstraktný expresionista, drip painting",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1455,
    "question": "Čo je to Bauhaus?",
    "answer": "Nemecká škola umenia a dizajnu (1919-33)",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1456,
    "question": "Kto bol Marcel Duchamp?",
    "answer": "Francúzsky umelec, otec konceptuálneho umenia",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1457,
    "question": "Čo je to de Stijl?",
    "answer": "Holandské hnutie abstraktného umenia",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1458,
    "question": "Kto bol Kazimir Malevič?",
    "answer": "Ruský maliar, Čierny štvorec, suprematizmus",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1459,
    "question": "V akom roku boli OH v Berlíne?",
    "answer": "1936",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1460,
    "question": "Kto bol Jesse Owens?",
    "answer": "Americký atlét, 4 zlaté na OH 1936",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1461,
    "question": "Čo je to Ivy League?",
    "answer": "Zväz 8 elitných amerických univerzít",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1462,
    "question": "Kto bol Bobby Fischer?",
    "answer": "Americký šachový veľmajster",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1463,
    "question": "Čo je to Ryder Cup?",
    "answer": "Golfový tímový turnaj USA vs Európa",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1464,
    "question": "V akom roku boli prvé zimné OH?",
    "answer": "1924 (Chamonix)",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1465,
    "question": "Kto bol Ayrton Senna?",
    "answer": "Brazílsky pilot F1",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1466,
    "question": "Čo je to kata v karate?",
    "answer": "Formálne cvičenie techník",
    "category": "veda",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1467,
    "question": "Presmyčka: IKNAV (jazero)",
    "answer": "VIKNA → nemá, NAVIK → nie... Balaton? Nie - NIKAV? ... odpoveď je skrytá",
    "category": "presmycky",
    "difficulty": "level2",
    "type": "anagram"
  },
  {
    "id": 1468,
    "question": "Doplňte meno: Wolfgang Amadeus...",
    "answer": "Mozart",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1469,
    "question": "Doplňte meno: Leonardo da...",
    "answer": "Vinci",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1470,
    "question": "Doplňte meno: Ludwig van...",
    "answer": "Beethoven",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1471,
    "question": "Doplňte meno: Marie...",
    "answer": "Curie",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1472,
    "question": "Doplňte meno: Isaac...",
    "answer": "Newton",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1473,
    "question": "Doplňte meno: Albert...",
    "answer": "Einstein",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1474,
    "question": "Doplňte meno: Charles...",
    "answer": "Darwin",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1475,
    "question": "Doplňte meno: Nikola...",
    "answer": "Tesla",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1476,
    "question": "Doplňte meno: Galileo...",
    "answer": "Galilei",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1477,
    "question": "Doplňte meno: Alexander Graham...",
    "answer": "Bell",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1478,
    "question": "Doplňte meno: Thomas Alva...",
    "answer": "Edison",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1479,
    "question": "Doplňte meno: Johann Sebastian...",
    "answer": "Bach",
    "category": "osobnosti",
    "difficulty": "level2",
    "type": "complete_name"
  },
  {
    "id": 1480,
    "question": "Koľko je (17 + 3) × 17?",
    "answer": "340",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1481,
    "question": "Koľko je (6 + 14) × 19?",
    "answer": "380",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1482,
    "question": "Koľko je (11 + 18) × 11?",
    "answer": "319",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1483,
    "question": "Koľko je (20 + 18) × 8?",
    "answer": "304",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1484,
    "question": "Koľko je (12 + 11) × 13?",
    "answer": "299",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1485,
    "question": "Koľko je (11 + 11) × 13?",
    "answer": "286",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1486,
    "question": "Koľko je (8 + 10) × 19?",
    "answer": "342",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1487,
    "question": "Koľko je (9 + 14) × 16?",
    "answer": "368",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1488,
    "question": "Koľko je (8 + 13) × 18?",
    "answer": "378",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1489,
    "question": "Koľko je (7 + 15) × 4?",
    "answer": "88",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1490,
    "question": "Koľko je (20 + 18) × 16?",
    "answer": "608",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1491,
    "question": "Koľko je (4 + 8) × 16?",
    "answer": "192",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1492,
    "question": "Koľko je (15 + 9) × 9?",
    "answer": "216",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1493,
    "question": "Koľko je (8 + 5) × 13?",
    "answer": "169",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1494,
    "question": "Koľko je (5 + 16) × 20?",
    "answer": "420",
    "category": "matematika",
    "difficulty": "level2",
    "type": "standard"
  },
  {
    "id": 1495,
    "question": "V ktorom roku bol objavený Neptún?",
    "answer": "1846",
    "category": "veda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1496,
    "question": "Koľko km/s je rýchlosť svetla?",
    "answer": "300000",
    "category": "veda",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1497,
    "question": "V ktorom roku sa narodil Bach?",
    "answer": "1685",
    "category": "hudba",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1498,
    "question": "Koľko riadkov má sonet?",
    "answer": "14",
    "category": "literatura",
    "difficulty": "level2",
    "type": "tiebreaker"
  },
  {
    "id": 1499,
    "question": "V ktorom roku padla Konštantinopol?",
    "answer": "1453",
    "category": "dejiny",
    "difficulty": "level2",
    "type": "tiebreaker"
  },

  /* ═══════ JUNIOR EASY – jednoslovné odpovede pre deti do 10 rokov ═══════ */

  /* ── DEJINY (R2) ── */
  {"id":1500,"question":"Aké zviera bolo symbolom starého Egypta – mačka alebo pes?","answer":"Mačka","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1501,"question":"Akú farbu mal plášť Supermana?","answer":"Červenú","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1502,"question":"Ako sa volá hlavné mesto Slovenska?","answer":"Bratislava","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1503,"question":"Koľko má týždeň dní?","answer":"7","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1504,"question":"Na akom kontinente žijú tučniaky?","answer":"Antarktída","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1505,"question":"Ako sa volá najdlhšia rieka na svete?","answer":"Níl","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1506,"question":"V ktorej krajine stojí Eiffelova veža?","answer":"Francúzsko","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1507,"question":"Ako sa volal prvý slovenský prezident?","answer":"Kováč","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1508,"question":"Aké je hlavné mesto Česka?","answer":"Praha","category":"dejiny","difficulty":"junior","type":"standard"},
  {"id":1509,"question":"V akej krajine sa nachádza Big Ben?","answer":"Anglicko","category":"dejiny","difficulty":"junior","type":"standard"},

  /* ── VEDA (R2) ── */
  {"id":1510,"question":"Aký plyn dýchame?","answer":"Kyslík","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1511,"question":"Koľko planét má slnečná sústava?","answer":"8","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1512,"question":"Je Slnko hviezda alebo planéta?","answer":"Hviezda","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1513,"question":"V akom skupenstve je ľad?","answer":"Pevnom","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1514,"question":"Akou farbou má byť semafor keď sa ide?","answer":"Zelenou","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1515,"question":"Čo ťahá veci dole k zemi?","answer":"Gravitácia","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1516,"question":"Aká planéta je najbližšie k Slnku?","answer":"Merkúr","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1517,"question":"Z čoho je vyrobené sklo?","answer":"Piesok","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1518,"question":"Koľko nôh má pavúk?","answer":"8","category":"veda","difficulty":"junior","type":"standard"},
  {"id":1519,"question":"Ako sa volá naša galaxia?","answer":"Mliečna cesta","category":"veda","difficulty":"junior","type":"standard"},

  /* ── ŠPORT (R2) ── */
  {"id":1520,"question":"Koľko hráčov má futbalový tím na ihrisku?","answer":"11","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1521,"question":"Akou časťou tela sa hrá futbal?","answer":"Nohou","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1522,"question":"Akej farby je tenisová loptička?","answer":"Žltá","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1523,"question":"V akom športe sa používa puk?","answer":"Hokej","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1524,"question":"Koľko košov je na basketbalovom ihrisku?","answer":"2","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1525,"question":"Ako sa volá najrýchlejší šprint na olympiáde?","answer":"Stovka","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1526,"question":"V akom športe sa skáče do vody?","answer":"Skoky","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1527,"question":"Akú farbu má olympijský kruh uprostred?","answer":"Čiernu","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1528,"question":"Ako sa volá cieľ v hokeji?","answer":"Bránka","category":"sport","difficulty":"junior","type":"standard"},
  {"id":1529,"question":"V akom športe sa používa raketa a košík?","answer":"Badminton","category":"sport","difficulty":"junior","type":"standard"},

  /* ── KULTÚRA (R2) ── */
  {"id":1530,"question":"Koľko farieb má dúha?","answer":"7","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1531,"question":"Aký hudobný nástroj má čierne a biele klávesy?","answer":"Klavír","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1532,"question":"Ako sa volá slovenský hrad na skale nad Dunajom?","answer":"Devín","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1533,"question":"Čo kreslíme štetcom?","answer":"Obraz","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1534,"question":"Aký deň je Štedrý večer?","answer":"24. december","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1535,"question":"Ako sa volá rozprávková postava s dlhým nosom?","answer":"Pinocchio","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1536,"question":"Aké zvieratko nosí Mikuláš v rozprávke?","answer":"Čerta","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1537,"question":"V akej farbe maľoval Van Gogh slnečnice?","answer":"Žltej","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1538,"question":"Ako sa volá slovenská hymna?","answer":"Nad Tatrou sa blýska","category":"kultura","difficulty":"junior","type":"standard"},
  {"id":1539,"question":"Aký tvar má stopka?","answer":"Kruh","category":"kultura","difficulty":"junior","type":"standard"},

  /* ── LITERATÚRA (R2) ── */
  {"id":1540,"question":"Kto napísal rozprávku o Červenej čiapočke?","answer":"Grimm","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1541,"question":"Ako sa volá chlapec čarodejník z kníh J.K. Rowlingovej?","answer":"Harry Potter","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1542,"question":"Aké zviera je Winnie v rozprávke?","answer":"Medvedík","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1543,"question":"Koľko trpaslíkov bolo v rozprávke o Snehulienke?","answer":"7","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1544,"question":"Ako sa volá dievčatko s modrými vlasmi v rozprávke?","answer":"Malvína","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1545,"question":"Kto bol Robinsonov spoločník na ostrove?","answer":"Piatok","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1546,"question":"Ako sa volá kocúr v čižmách?","answer":"Kocúr","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1547,"question":"Čo stratila Popoluška na bále?","answer":"Črievičku","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1548,"question":"Aké zviera je Bambi?","answer":"Srnček","category":"literatura","difficulty":"junior","type":"standard"},
  {"id":1549,"question":"Kam šla Alica v rozprávke?","answer":"Do Krajiny zázrakov","category":"literatura","difficulty":"junior","type":"standard"},

  /* ── OSOBNOSTI (R2) ── */
  {"id":1550,"question":"Kto namaľoval Monu Lízu?","answer":"Leonardo","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1551,"question":"Ako sa volá najznámejší vedec s vyplazením jazyka na fotke?","answer":"Einstein","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1552,"question":"Kto vynašiel žiarovku?","answer":"Edison","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1553,"question":"Ako sa volal prvý človek vo vesmíre?","answer":"Gagarin","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1554,"question":"Kto je Mickey Mouse – myš alebo kačka?","answer":"Myš","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1555,"question":"Ako sa volá princ zo Shreka?","answer":"Fiona","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1556,"question":"Kto je Spider-Man v civilnom živote?","answer":"Peter Parker","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1557,"question":"Ako sa volá hlavná postava z Frozen?","answer":"Elsa","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1558,"question":"Kto napísal hudbu k filmu Lví kráľ?","answer":"Elton John","category":"osobnosti","difficulty":"junior","type":"standard"},
  {"id":1559,"question":"Ako sa volá futbalista s prezývkou CR7?","answer":"Ronaldo","category":"osobnosti","difficulty":"junior","type":"standard"},

  /* ── PRÍRODA (R2) ── */
  {"id":1560,"question":"Aké zviera je kráľ džungle?","answer":"Lev","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1561,"question":"Akú farbu majú listy na jar?","answer":"Zelenú","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1562,"question":"Čo produkujú včely?","answer":"Med","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1563,"question":"Aké zviera dáva mlieko?","answer":"Krava","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1564,"question":"Koľko nôh má motýľ?","answer":"6","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1565,"question":"Aký je najväčší cicavec na svete?","answer":"Veľryba","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1566,"question":"Čím dýchajú ryby?","answer":"Žiabrami","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1567,"question":"Aké zviera nosí svoj dom na chrbte?","answer":"Slimák","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1568,"question":"Aká je najvyššia hora na svete?","answer":"Everest","category":"priroda","difficulty":"junior","type":"standard"},
  {"id":1569,"question":"Aký strom dáva žalude?","answer":"Dub","category":"priroda","difficulty":"junior","type":"standard"},

  /* ── STROJE & TECHNIKA (R3) ── */
  {"id":1570,"question":"Koľko kolies má bicykel?","answer":"2","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1571,"question":"Čím sa ovláda počítač – myšou alebo vidličkou?","answer":"Myšou","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1572,"question":"Aký stroj lieta vo vzduchu?","answer":"Lietadlo","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1573,"question":"Čo používame na telefonovanie?","answer":"Telefón","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1574,"question":"Aký stroj perie oblečenie?","answer":"Práčka","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1575,"question":"Koľko kolies má auto?","answer":"4","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1576,"question":"Čo svieti v dome keď je tma?","answer":"Žiarovka","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1577,"question":"Aký stroj chladí jedlo?","answer":"Chladnička","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1578,"question":"Čím sa strihajú vlasy?","answer":"Nožnicami","category":"stroje","difficulty":"junior","type":"standard"},
  {"id":1579,"question":"Aký dopravný prostriedok jazdí po koľajniciach?","answer":"Vlak","category":"stroje","difficulty":"junior","type":"standard"},

  /* ── DOPLŇOVAČKY (R3) ── */
  {"id":1580,"question":"Dopĺň: Červená ___ (rozprávka)","answer":"Čiapočka","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1581,"question":"Dopĺň: Sne_ulienka","answer":"Snehulienka","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1582,"question":"Dopĺň: H-A-D má ___ písmená","answer":"3","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1583,"question":"Dopĺň: Šípková ___","answer":"Ruženka","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1584,"question":"Dopĺň: Malý ___ (rozprávka o chlapcovi čo nechcel rásť)","answer":"Princ","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1585,"question":"Dopĺň: Tri ___  (rozprávka s prasiatkami)","answer":"Prasiatka","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1586,"question":"Dopĺň: Zlatá ___  (ryba z rozprávky)","answer":"Rybka","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1587,"question":"Dopĺň: Ja_od_a (ovocie)","answer":"Jahoda","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1588,"question":"Dopĺň: Sl_nk_ (čo svieti na oblohe)","answer":"Slnko","category":"doplnovacky","difficulty":"junior","type":"standard"},
  {"id":1589,"question":"Dopĺň: Ko_ka (zviera)","answer":"Kočka","category":"doplnovacky","difficulty":"junior","type":"standard"},

  /* ── PRESMYČKY (R3) ── */
  {"id":1590,"question":"Použi písmená P-E-S a vytvor slovo","answer":"Pes","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1591,"question":"Použi písmená K-O-L-O a vytvor slovo","answer":"Kolo","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1592,"question":"Použi písmená A-M-A-M a vytvor slovo","answer":"Mama","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1593,"question":"Použi písmená L-E-S a vytvor slovo","answer":"Les","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1594,"question":"Použi písmená M-O-D a vytvor slovo","answer":"Dom","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1595,"question":"Použi písmená Á-K-Č-A-K a vytvor slovo (zviera)","answer":"Kačka","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1596,"question":"Použi písmená R-O-K-A a vytvor slovo","answer":"Kora","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1597,"question":"Použi písmená O-K-S a vytvor slovo","answer":"Sok","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1598,"question":"Použi písmená B-A-L a vytvor slovo","answer":"Bal","category":"presmycky","difficulty":"junior","type":"standard"},
  {"id":1599,"question":"Použi písmená O-H-N-Ě-Z a vytvor slovo","answer":"Oheň","category":"presmycky","difficulty":"junior","type":"standard"},

  /* ── HUDBA (R3) ── */
  {"id":1600,"question":"Koľko strún má gitara?","answer":"6","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1601,"question":"Aký nástroj bubnuje?","answer":"Bubon","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1602,"question":"Akým nástrojom hrá husličkár?","answer":"Husle","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1603,"question":"Čím sa fúka do trúbky?","answer":"Vzduchom","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1604,"question":"Aká nota je medzi Do a Mi?","answer":"Re","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1605,"question":"Kto spieva pieseň Let It Go?","answer":"Elsa","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1606,"question":"Koľko čiernych klávesov je v jednej oktáve na klavíri?","answer":"5","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1607,"question":"Akým nástrojom hrá bubeník?","answer":"Bicie","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1608,"question":"Ako sa volá skupina ľudí čo spievajú spolu?","answer":"Zbor","category":"hudba","difficulty":"junior","type":"standard"},
  {"id":1609,"question":"Čo robí dirigent – spieva alebo mává paličkou?","answer":"Mává paličkou","category":"hudba","difficulty":"junior","type":"standard"},

  /* ── FILM (R3) ── */
  {"id":1610,"question":"Akej farby je Shrek?","answer":"Zelenej","category":"film","difficulty":"junior","type":"standard"},
  {"id":1611,"question":"Ako sa volá snehuliak z Frozen?","answer":"Olaf","category":"film","difficulty":"junior","type":"standard"},
  {"id":1612,"question":"Aké zviera je Simba?","answer":"Lev","category":"film","difficulty":"junior","type":"standard"},
  {"id":1613,"question":"Ako sa volá klaun-ryba z filmu Hľadá sa Nemo?","answer":"Nemo","category":"film","difficulty":"junior","type":"standard"},
  {"id":1614,"question":"Čo je Lightning McQueen – auto alebo vlak?","answer":"Auto","category":"film","difficulty":"junior","type":"standard"},
  {"id":1615,"question":"Ako sa volá robot z filmu Wall-E?","answer":"Wall-E","category":"film","difficulty":"junior","type":"standard"},
  {"id":1616,"question":"Koľko dalmatíncov je v známom filme?","answer":"101","category":"film","difficulty":"junior","type":"standard"},
  {"id":1617,"question":"Aké zviera je Dumbo?","answer":"Slon","category":"film","difficulty":"junior","type":"standard"},
  {"id":1618,"question":"Ako sa volá kovboj z Toy Story?","answer":"Woody","category":"film","difficulty":"junior","type":"standard"},
  {"id":1619,"question":"Aká princezná má veľmi dlhé vlasy?","answer":"Rapunzel","category":"film","difficulty":"junior","type":"standard"},

  /* ── MATEMATIKA (R3) ── */
  {"id":1620,"question":"Koľko je 5 + 5?","answer":"10","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1621,"question":"Koľko je 3 × 3?","answer":"9","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1622,"question":"Koľko je 100 - 1?","answer":"99","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1623,"question":"Koľko strán má trojuholník?","answer":"3","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1624,"question":"Koľko je 2 × 10?","answer":"20","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1625,"question":"Koľko minút má hodina?","answer":"60","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1626,"question":"Koľko je 7 + 8?","answer":"15","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1627,"question":"Koľko dní má rok?","answer":"365","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1628,"question":"Aký tvar má futbalové ihrisko?","answer":"Obdĺžnik","category":"matematika","difficulty":"junior","type":"standard"},
  {"id":1629,"question":"Koľko je 12 ÷ 2?","answer":"6","category":"matematika","difficulty":"junior","type":"standard"},

  /* ── HISTORICKÉ UDALOSTI (R3) ── */
  {"id":1630,"question":"Aké zviera poslali prvé do vesmíru – psa alebo mačku?","answer":"Psa","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1631,"question":"Kto letel prvý v lietadle?","answer":"Bratia Wrightovci","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1632,"question":"Na akom kontinente vznikli olympijské hry?","answer":"Európa","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1633,"question":"Čo sa oslavuje 1. januára?","answer":"Nový rok","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1634,"question":"Ako sa volá slávny potopený parník?","answer":"Titanic","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1635,"question":"V ktorej krajine stojí pyramída?","answer":"Egypt","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1636,"question":"Kto chodil po Mesiaci – ľudia alebo roboty?","answer":"Ľudia","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1637,"question":"Čo objavil Kolumbus – Ameriku alebo Austráliu?","answer":"Ameriku","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1638,"question":"Akým dopravným prostriedkom sa cestovalo pred autami?","answer":"Koňom","category":"historicke_podujatia","difficulty":"junior","type":"standard"},
  {"id":1639,"question":"Ako sa volá najslávnejší slovenský hrad?","answer":"Bratislavský","category":"historicke_podujatia","difficulty":"junior","type":"standard"}
];
