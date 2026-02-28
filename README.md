# Vedomostný QUIZ 2026 🎮🏆

Rodinná vedomostná súťaž – React 18 + Tailwind CSS, žiadny build step.

**🌐 [Spustiť online (GitHub Pages)](https://michalgrega-del.github.io/DuelGregovci/moderator.html)**

## Ako spustiť

### Online (GitHub Pages)
Otvor link vyššie a hraj priamo v prehliadači.

### Lokálne
```bash
python3 -m http.server 9004
# Otvor http://localhost:9004/moderator.html
```

## Štruktúra hry

### 🏃 Kolo 1 – Rýchla runda
- **90 sekúnd** na hráča, max **10 otázok**
- 10 bodov za správnu odpoveď, bez odpočtu

### 🎯 Kolo 2 – Hlavná runda
- **10 tém**, 1 otázka z každej (10 otázok celkovo)
- Hráč vyberá kategóriu a stávku (10–50 bodov)
- 10-sekundový časovač, možnosť SUPER odpovede

### 🏁 Kolo 3 – Finálová runda
- **10 tém**, 2 otázky z každej (20 otázok celkovo)
- Súper vyberá kategóriu pre odpovedajúceho
- Stávka 0–350 bodov

### ⚡ Rozstrel (pri remíze)
- Jedna otázka – najbližšia odpoveď vyhráva

## Funkcie

- 🔊 **Zvukové efekty** – štart (6s fanfára), koniec kola, víťazstvo
- 📺 **TV okno** – tlačidlo pre druhý monitor (fullscreen)
- ✅❌ **Feedback** – zelená/červená obrazovka na TV po hodnotení
- 🔀 **Miešanie otázok** – neopakujú sa medzi hrami
- 🗣️ **TTS** – slovenský text-to-speech
- 🧪 **Test režim** – split-screen moderátor + TV
- 📊 **Štatistiky** a 🏆 **Rebríček** s Excel exportom
- 🌙☀️ **Tmavý/Svetlý režim**

## Databáza: **1639 otázok** · 14 kategórií · 3 obtiažnosti
