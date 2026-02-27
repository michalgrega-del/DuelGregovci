#!/bin/bash
# ─────────────────────────────────────
#  DUEL – Vedomostná súťaž
#  Spustenie herného servera
# ─────────────────────────────────────
cd "$(dirname "$0")"

PORT=8080
# If port 8080 is taken, try 8081-8089
for p in 8080 8081 8082 8083 8084 8085; do
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
