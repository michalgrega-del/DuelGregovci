# 🎮 DUEL – Vedomostná súťaž pre rodinu

Interaktívna kvízová hra pre dvoch hráčov s moderátorom.

## 🚀 Spustenie

1. Dvojklik na **start.command**
2. Otvorí sa prehliadač s moderátorským panelom
3. Na druhom monitore/TV otvor adresu TV zobrazenú v termináli

## 📋 Čo potrebuješ

- macOS s Python 3
- Moderný prehliadač (Chrome/Safari/Firefox)
- Dva displeje (laptop + TV/monitor)

## 🎮 Ako hrať

### Príprava
1. V sekcii **Hráči** pridaj hráčov (meno + vek)
2. V **Novej hre** vyber dátum, hráčov a obtiažnosť
3. Otvor TV obrazovku na druhom monitore (klikni pre fullscreen)

### Obtiažnosti
| Obtiažnosť | Vek | Typ otázok |
|---|---|---|
| ⭐ Junior | 7–12 | Jednoduchšie, zábavné |
| 🔥 Level 1 | 13–18 | Stredne ťažké |
| 💀 Level 2 | 18–99 | Náročné, odborné |

### Priebeh hry
- **3 kolá** po 5 otázok
- **Kolo 1 – Rýchla runda**: Obaja hráči môžu odpovedať
- **Kolo 2 – Striedavá runda**: Hráči sa striedajú
- **Kolo 3 – Súperova voľba**: Súper vyberá kategóriu
- **Rozstrel**: Pri remíze – tipovacia otázka, bližšia odpoveď vyhráva

### Bodovanie
- Moderátor vyberá body: 10, 20, 30, 40 alebo 50
- ✓ Správna odpoveď: **+body**
- ✗ Nesprávna odpoveď: **−body** (aj do mínusu!)
- Možnosť postúpiť otázku súperovi

### Časovač
- 10-sekundový odpočet (nastaviteľný)
- Zvukové efekty: tikanie, bzučiak, fanfára

## 📊 Funkcie

- **Rebríček** – Počet víťazstiev hráčov
- **História** – Záznamy všetkých hier
- **Excel export** – Export rebríčka do .xlsx
- **Zvukové efekty** – Web Audio API
- **TV displej** – Fullscreen s animáciami

## 🗂️ Súbory

| Súbor | Popis |
|---|---|
| `moderator.html` | Moderátorský panel (React + Tailwind) |
| `tv.html` | TV displej (React + Tailwind) |
| `questions.js` | Databáza 1499 otázok |
| `start.command` | Spúšťač servera |

## 💡 Technológie

- React 18 (CDN, bez build stepu)
- Tailwind CSS
- Web Audio API (zvukové efekty)
- BroadcastChannel API (komunikácia moderátor ↔ TV)
- localStorage (ukladanie hráčov, histórie)
- SheetJS (Excel export)
- Fullscreen API (TV displej)
