# DUEL – Vedomostná súťaž pre rodinu 🎮

Rodinný kvízový duel – React + Tailwind CSS, žiadny build step.

## v2 – Novinky

### 🧪 Testovací režim
- Na obrazovke nastavenia klikni **🧪 Test hry** – spustí split-screen: vľavo dashboard, vpravo TV náhľad
- Zdieľaný React state (nie BroadcastChannel)
- **🧪 TESTOVACÍ REŽIM** indikátor + tlačidlo na prepnutie do produkcie

### 🏃 Kolo 1 – Rýchla runda
- **90 sekúnd** (1:30) na hráča
- **10 otázok** rapid-fire
- **Timeline bar** na TV – vodorovná lišta sa vyprázdňuje sprava doľava
- Pauza / preskočenie hráča

### 🔄 Kolo 2 – Striedavá runda
- Konfigurovateľný počet otázok: **10–20** (len párne čísla)
- Nastavenie v ⚙️ Nastaveniach

### 🎯 Kolo 3 – Súperova voľba
- Konfigurovateľný počet otázok: **10–20** (predvolené 20, len párne čísla)
- Súper vyberá **kategóriu** pre odpovedajúceho hráča
- Odpovedajúci hráč si vyberá **body 0–350** (po desiatkach)

### 🚫 Bez opakovania otázok
- Posledných 10 hier sa ukladá aj s ID použitých otázok
- Pri novej hre sa tieto otázky automaticky vylúčia

## Štruktúra

| Súbor | Popis |
|---|---|
| `moderator.html` | Ovládací panel moderátora (React SPA) |
| `tv.html` | TV výstup pre divákov (BroadcastChannel) |
| `questions.js` | Databáza 1499 otázok (junior, level1, level2) |
| `start.command` | macOS launcher |

## Spustenie

```bash
# Automaticky (macOS)
./start.command

# Manuálne
cd "DUEL GREGOVCI"
python3 -m http.server 8080
# Otvor: http://localhost:8080/moderator.html
# TV:    http://localhost:8080/tv.html
```

## Technológie
- React 18 (CDN) + Babel standalone
- Tailwind CSS (CDN)
- BroadcastChannel API (moderátor ↔ TV)
- Web Audio API (zvuky)
- SheetJS (Excel export rebríčka)
- localStorage (uloženie hráčov, histórie, nastavení)
