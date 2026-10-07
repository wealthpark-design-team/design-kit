#!/usr/bin/env bash
# Render SKILL.md the way the published page does and take screenshots (desktop + mobile).
# Needs: node (npx marked), Google Chrome. Output: /tmp/design-kit-preview/*.png
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-/tmp/design-kit-preview}"; mkdir -p "$OUT"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

awk 'BEGIN{fm=0} NR==1 && /^---$/ {fm=1; next} fm==1 && /^---$/ {fm=0; next} fm==0 {print}' "$ROOT/SKILL.md" > "$OUT/body.md"
npx -y marked --gfm -i "$OUT/body.md" -o "$OUT/body.html"
# kramdown (GitHub Pages) does not autolink bare URLs; strip the links marked added, and point assets at local files
sed -E 's#<a href="(https?://[^"]+)">\1</a>#\1#g' "$OUT/body.html" \
  | sed -e "s|https://wealthpark-design-team.github.io/design-kit/assets/|file://$ROOT/assets/|g" > "$OUT/body-plain.html"
# the page script only linkifies https URLs; accept file:// in the preview copy
sed 's#https?:\\/\\/#(?:https?|file):\\/\\/#' "$ROOT/web/site.js" > "$OUT/site-preview.js"
{
cat <<HTML
<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>WealthPark Design Kit (preview)</title>
<link rel="stylesheet" href="file://$ROOT/web/site.css"><script defer src="file://$OUT/site-preview.js"></script></head><body>
<header class="dk-header"><div class="dk-container dk-header__inner"><a class="dk-header__brand" href="#"><img src="file://$ROOT/assets/logo/wealthpark-logo.svg" alt="WealthPark"></a><span class="dk-header__label">Design Kit</span><a class="dk-header__link" href="#">GitHub</a></div></header>
<main class="dk-container dk-main">
HTML
cat "$OUT/body-plain.html"
echo '</main><footer class="dk-footer"><div class="dk-container"><p>© WealthPark Co., Ltd.</p></div></footer></body></html>'
} > "$OUT/preview.html"
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=15000 --window-size=1280,5000 --screenshot="$OUT/desktop.png" "file://$OUT/preview.html" 2>/dev/null
"$CHROME" --headless=new --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=15000 --window-size=390,4000  --screenshot="$OUT/mobile.png"  "file://$OUT/preview.html" 2>/dev/null
echo "preview: $OUT/preview.html"; ls -1 "$OUT"/*.png
