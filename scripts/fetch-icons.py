#!/usr/bin/env python3
"""Download Material Symbols icons into assets/icons/{filled,outlined}/<name>.svg.

Usage: python3 scripts/fetch-icons.py <name> [<name> ...]
Names are Material Symbols names (https://fonts.google.com/icons), e.g. apartment, trending_up.
Weight 400, 24px, colored #1A1A1A (the kit's UI black). Existing files are overwritten.
After adding, list the name in SKILL.md (3. アイコン) and references/icons.md with a one-line use.
"""
import pathlib
import sys
import urllib.request

BASE = "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined"
ROOT = pathlib.Path(__file__).resolve().parent.parent / "assets" / "icons"
VARIANTS = {"filled": "fill1", "outlined": "default"}


def fetch(name: str, variant: str) -> str:
    url = f"{BASE}/{name}/{VARIANTS[variant]}/24px.svg"
    data = urllib.request.urlopen(url, timeout=20).read().decode()
    if "<svg" not in data:
        raise ValueError(f"not an SVG: {url}")
    return data.replace('<svg xmlns="http://www.w3.org/2000/svg"', '<svg xmlns="http://www.w3.org/2000/svg" fill="#1A1A1A"', 1)


def main(names: list[str]) -> int:
    if not names:
        print(__doc__)
        return 1
    failed = []
    for name in names:
        for variant in VARIANTS:
            try:
                svg = fetch(name, variant)
            except Exception as e:  # noqa: BLE001 - report and continue
                failed.append(f"{variant}/{name}: {e}")
                continue
            (ROOT / variant).mkdir(parents=True, exist_ok=True)
            (ROOT / variant / f"{name}.svg").write_text(svg)
            print(f"saved {variant}/{name}.svg")
    for f in failed:
        print(f"FAILED {f}", file=sys.stderr)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
