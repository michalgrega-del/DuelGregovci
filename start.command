#!/bin/bash
# ─────────────────────────────────────
#  DUEL – Vedomostná súťaž
#  Spustenie herného servera
# ─────────────────────────────────────
cd "$(dirname "$0")"

PORT=9004
# If port 9004 is taken, try 9005-9009
for p in 9004 9005 9006 9007 9008 9009; do
    if ! lsof -i :$p > /dev/null 2>&1; then
        PORT=$p
        break
    fi
done

echo ""
echo "  ╔═══════════════════════════════════════╗"
echo "  ║          🎮  DUEL  –  Server          ║"
echo "  ╠═══════════════════════════════════════╣"
echo "  ║                                       ║"
echo "  ║  Moderátor: http://localhost:$PORT/moderator.html"
echo "  ║  TV:        http://localhost:$PORT/tv.html"
echo "  ║                                       ║"
echo "  ║  Pre ukončenie stlač Ctrl+C           ║"
echo "  ╚═══════════════════════════════════════╝"
echo ""

# Open moderator in default browser
open "http://localhost:$PORT/moderator.html" 2>/dev/null &

python3 -m http.server $PORT
