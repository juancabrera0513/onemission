#!/usr/bin/env bash
# Trims each source element to its alpha bounding box, caps its longest side,
# and emits a PNG + WebP pair into app/public/logo/.
set -euo pipefail
SRC="$(dirname "$0")/one-big-mission-recreated-elements"
OUT="$(dirname "$0")/app/public/logo"
mkdir -p "$OUT"

emit() { # emit <source-file> <slug> <max-longest-side>
  magick "$SRC/$1" -trim +repage -resize "${3}x${3}>" -strip "$OUT/$2.png"
  magick "$OUT/$2.png" -quality 88 -define webp:alpha-quality=100 "$OUT/$2.webp"
}

# The recreated starry brush came back magenta, but in the finished logo the
# wash is pale blue. Rotate only the magenta band of the hue wheel (250-340 deg)
# so the wash lands on blue while the multi-coloured stars -- navy, gold, teal,
# green, coral, all outside that band -- keep their own colours.
deblush() { # deblush <slug>
  local f="$OUT/$1.png"
  magick "$f" -colorspace HSL -channel R -separate +channel /tmp/_hue.png
  magick /tmp/_hue.png -threshold 68% /tmp/_h1.png            # hue above ~250 deg
  magick /tmp/_hue.png -threshold 95% -negate /tmp/_h2.png    # hue below ~340 deg
  magick /tmp/_h1.png /tmp/_h2.png -compose multiply -composite -blur 0x1.5 /tmp/_band.png
  magick "$f" -alpha extract /tmp/_a.png
  magick /tmp/_band.png /tmp/_a.png -compose multiply -composite /tmp/_mask.png
  magick "$f" -colorspace HSL -channel R -evaluate AddModulus 78% +channel -colorspace sRGB /tmp/_rot.png
  magick "$f" /tmp/_rot.png /tmp/_mask.png -compose over -composite "$f"
  magick "$f" -quality 88 -define webp:alpha-quality=100 "$OUT/$1.webp"
  rm -f /tmp/_hue.png /tmp/_h1.png /tmp/_h2.png /tmp/_band.png /tmp/_a.png /tmp/_mask.png /tmp/_rot.png
}

emit 01-woman-recreated.png            woman              900
emit 02-botanical-branch-recreated.png botanical          800
emit 03-sunrise-landscape-recreated.png sunrise           1100
emit 04-top-arch-recreated.png         arch               1400
emit 05-top-tagline-recreated.png      tagline            1400
emit 06-one-big-wordmark-recreated.png wordmark-one-big   1200
emit 07-mission-wordmark-recreated.png wordmark-mission   1200
emit 08-starry-brush-recreated.png     starry-brush       900
emit 09-children-and-books-recreated.png children-books   900
emit 10-heart-divider-recreated.png    heart-divider      1000
emit 11-metabolic-icon-recreated.png   pillar-metabolic-icon 400
emit 12-metabolic-text-recreated.png   pillar-metabolic-text 900
emit 13-childrens-books-icon-recreated.png pillar-books-icon 400
emit 14-childrens-books-text-recreated.png pillar-books-text 900
emit 15-faith-recreated.png            value-faith        500
emit 16-family-recreated.png           value-family       500
emit 17-growth-recreated.png           value-growth       500
emit 18-adventure-recreated.png        value-adventure    500
emit 19-bottom-motto-recreated.png     motto              1400

deblush starry-brush

# The recreated arch is painted with a much heavier brush than the one in the
# finished logo. Eroding the alpha thins the stroke back to the original's
# weight while keeping its dry-brush texture and the fine hairline beneath it.
magick "$OUT/arch.png" -channel A -morphology Erode Disk:3 +channel "$OUT/arch.png"
magick "$OUT/arch.png" -quality 88 -define webp:alpha-quality=100 "$OUT/arch.webp"

echo "--- output ---"
ls -la "$OUT"
