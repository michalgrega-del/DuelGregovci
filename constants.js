/* ══════════════════════════════════════════════════════════════════
   Vedomostný QUIZ 2026 – Zdieľané konštanty
   Používané v moderator.html aj tv.html
   ══════════════════════════════════════════════════════════════════ */

window.QUIZ_CONSTANTS = {

ROUND_NAMES: {1:'Rýchla runda',2:'Hlavná runda',3:'Finálová runda',tiebreaker:'Rozstrel'},
DIFF_LABELS: {junior:'Junior (7–12)',level1:'Level 1 (13–18)',level2:'Level 2 (18–99)'},

CAT_LABELS: {
/* SK */
dejiny_sk:'Dejiny',geografia_sk:'Geografia',krajske_mesta:'Krajské mestá',prirodoveda_sk:'Prírodoveda',
matematika_sk:'Matematika',spz_sk:'Slovenské ŠPZ',literatura_sk:'Literatúra',slovensky_jazyk:'Slovenský jazyk',
osobnosti_sk:'Osobnosti',pohoria_sk:'Pohoria',informatika_sk:'Informatika',spisovatelia_sk:'Spisovatelia',
sport_sk:'Šport',prislovia_sk:'Príslovia',zvierata_sk:'Zvieratá',hrady_zamky:'Hrady a zámky',
rieky_sk:'Rieky Slovenska',vlajky_erby_sk:'Erby a vlajky',pravopis_sk:'Pravopis',
veda_technika_sk:'Veda a technika',nabozenstvo_sk:'Náboženstvo',divadlo_sk:'Divadlo a film',
pocasie_sk:'Počasie a príroda',skauting_sk:'Skauting',zaujimavosti_sk:'Zaujímavosti',
/* SVET */
dejiny_svet:'Dejiny sveta',geografia_svet:'Geografia 🌍',hlavne_mesta:'Hlavné mestá',sport_svet:'Šport 🌍',
opera_svet:'Opera a hudba',divadlo_svet:'Divadlo 🌍',vlajky_svet:'Vlajky štátov',umenie_svet:'Umenie',
veda_technika_svet:'Veda a technika 🌍',literatura_svet:'Literatúra 🌍',hudba_svet:'Hudba',film_svet:'Film',
matematika_svet:'Matematika 🌍',osobnosti_svet:'Osobnosti 🌍',priroda_svet:'Príroda 🌍',
informatika_svet:'Informatika 🌍',astronomia:'Vesmír',zaujimavosti_svet:'Zaujímavosti 🌍',
olympijske_hry:'Olympijské hry',kulinarka:'Kuchyne sveta',
},

CAT_ICONS: {
dejiny_sk:'📜',geografia_sk:'🗺️',krajske_mesta:'🏙️',prirodoveda_sk:'🌱',matematika_sk:'🔢',
spz_sk:'🚗',literatura_sk:'📚',slovensky_jazyk:'🗣️',osobnosti_sk:'👤',pohoria_sk:'⛰️',
informatika_sk:'💻',spisovatelia_sk:'✒️',sport_sk:'⚽',prislovia_sk:'💬',zvierata_sk:'🦊',
hrady_zamky:'🏰',rieky_sk:'🌊',vlajky_erby_sk:'🏛️',pravopis_sk:'✍️',veda_technika_sk:'🔬',
nabozenstvo_sk:'⛪',divadlo_sk:'🎭',pocasie_sk:'🌤️',skauting_sk:'⚜️',zaujimavosti_sk:'💡',
dejiny_svet:'📜',geografia_svet:'🌍',hlavne_mesta:'🏛️',sport_svet:'🏆',opera_svet:'🎶',
divadlo_svet:'🎭',vlajky_svet:'🏳️',umenie_svet:'🎨',veda_technika_svet:'🔬',literatura_svet:'📖',
hudba_svet:'🎵',film_svet:'🎬',matematika_svet:'🔢',osobnosti_svet:'👤',priroda_svet:'🌿',
informatika_svet:'💻',astronomia:'🚀',zaujimavosti_svet:'💡',olympijske_hry:'🏅',kulinarka:'🍽️',
},

CAT_COLORS: {
dejiny_sk:'from-amber-500/20 to-amber-600/5 border-amber-500/50',
geografia_sk:'from-emerald-500/20 to-emerald-600/5 border-emerald-500/50',
krajske_mesta:'from-indigo-500/20 to-indigo-600/5 border-indigo-500/50',
prirodoveda_sk:'from-lime-500/20 to-lime-600/5 border-lime-500/50',
matematika_sk:'from-blue-500/20 to-blue-600/5 border-blue-500/50',
spz_sk:'from-slate-500/20 to-slate-600/5 border-slate-500/50',
literatura_sk:'from-rose-500/20 to-rose-600/5 border-rose-500/50',
slovensky_jazyk:'from-fuchsia-500/20 to-fuchsia-600/5 border-fuchsia-500/50',
osobnosti_sk:'from-cyan-500/20 to-cyan-600/5 border-cyan-500/50',
pohoria_sk:'from-teal-500/20 to-teal-600/5 border-teal-500/50',
informatika_sk:'from-violet-500/20 to-violet-600/5 border-violet-500/50',
spisovatelia_sk:'from-pink-500/20 to-pink-600/5 border-pink-500/50',
sport_sk:'from-green-500/20 to-green-600/5 border-green-500/50',
prislovia_sk:'from-yellow-500/20 to-yellow-600/5 border-yellow-500/50',
zvierata_sk:'from-orange-500/20 to-orange-600/5 border-orange-500/50',
hrady_zamky:'from-stone-500/20 to-stone-600/5 border-stone-500/50',
rieky_sk:'from-sky-500/20 to-sky-600/5 border-sky-500/50',
vlajky_erby_sk:'from-red-500/20 to-red-600/5 border-red-500/50',
pravopis_sk:'from-purple-500/20 to-purple-600/5 border-purple-500/50',
veda_technika_sk:'from-cyan-500/20 to-cyan-600/5 border-cyan-500/50',
nabozenstvo_sk:'from-amber-500/20 to-amber-600/5 border-amber-500/50',
divadlo_sk:'from-purple-500/20 to-purple-600/5 border-purple-500/50',
pocasie_sk:'from-sky-500/20 to-sky-600/5 border-sky-500/50',
skauting_sk:'from-emerald-500/20 to-emerald-600/5 border-emerald-500/50',
zaujimavosti_sk:'from-yellow-500/20 to-yellow-600/5 border-yellow-500/50',
dejiny_svet:'from-amber-500/20 to-amber-600/5 border-amber-500/50',
geografia_svet:'from-emerald-500/20 to-emerald-600/5 border-emerald-500/50',
hlavne_mesta:'from-indigo-500/20 to-indigo-600/5 border-indigo-500/50',
sport_svet:'from-green-500/20 to-green-600/5 border-green-500/50',
opera_svet:'from-rose-500/20 to-rose-600/5 border-rose-500/50',
divadlo_svet:'from-purple-500/20 to-purple-600/5 border-purple-500/50',
vlajky_svet:'from-red-500/20 to-red-600/5 border-red-500/50',
umenie_svet:'from-fuchsia-500/20 to-fuchsia-600/5 border-fuchsia-500/50',
veda_technika_svet:'from-cyan-500/20 to-cyan-600/5 border-cyan-500/50',
literatura_svet:'from-pink-500/20 to-pink-600/5 border-pink-500/50',
hudba_svet:'from-violet-500/20 to-violet-600/5 border-violet-500/50',
film_svet:'from-red-500/20 to-red-600/5 border-red-500/50',
matematika_svet:'from-blue-500/20 to-blue-600/5 border-blue-500/50',
osobnosti_svet:'from-teal-500/20 to-teal-600/5 border-teal-500/50',
priroda_svet:'from-lime-500/20 to-lime-600/5 border-lime-500/50',
informatika_svet:'from-violet-500/20 to-violet-600/5 border-violet-500/50',
astronomia:'from-slate-500/20 to-slate-600/5 border-slate-500/50',
zaujimavosti_svet:'from-yellow-500/20 to-yellow-600/5 border-yellow-500/50',
olympijske_hry:'from-orange-500/20 to-orange-600/5 border-orange-500/50',
kulinarka:'from-stone-500/20 to-stone-600/5 border-stone-500/50',
},

R1_TIME: 90,
R1_MAX_Q: 10,
R2_TIMER_DEFAULT: 10,
R2_COUNT_DEFAULT: 10,
R3_COUNT_DEFAULT: 20,
R3_Q_PER_CAT: 2,
R2_PTS: [10,20,30,40,50],
R3_PTS: Array.from({length:36},(_,i)=>i*10),

SK_CATS: ['dejiny_sk','geografia_sk','krajske_mesta','prirodoveda_sk','matematika_sk',
    'spz_sk','literatura_sk','slovensky_jazyk','osobnosti_sk','pohoria_sk',
    'informatika_sk','spisovatelia_sk','sport_sk','prislovia_sk','zvierata_sk',
    'hrady_zamky','rieky_sk','vlajky_erby_sk','pravopis_sk','veda_technika_sk',
    'nabozenstvo_sk','divadlo_sk','pocasie_sk','skauting_sk','zaujimavosti_sk'],

SVET_CATS: ['dejiny_svet','geografia_svet','hlavne_mesta','sport_svet','opera_svet',
    'divadlo_svet','vlajky_svet','umenie_svet','veda_technika_svet','literatura_svet',
    'hudba_svet','film_svet','matematika_svet','osobnosti_svet','priroda_svet',
    'informatika_svet','astronomia','zaujimavosti_svet','olympijske_hry','kulinarka'],

/* Streak bonus config */
STREAK_THRESHOLD: 3,
STREAK_BONUS: 5,

/* Power-ups config */
POWERUPS: {
  doublePoints: {label:'2× Body', icon:'⚡', description:'Zdvojnásobiť body za správnu odpoveď'},
  steal:        {label:'Krádež', icon:'🦹', description:'Pri správnej odpovedi ukradni body súperovi'},
  shield:       {label:'Štít', icon:'🛡️', description:'Bez straty bodov pri nesprávnej odpovedi'},
},

/* Blitz mode config */
BLITZ_TIME: 5,
BLITZ_MAX_Q: 20,
BLITZ_PTS: 5,

/* Password hash (SHA-256 of credentials) */
AUTH_HASH: 'ad69e8aaa32bdece9948cf2d645997e8f175432cf48dff8731e75c61fc5c1715',

};
