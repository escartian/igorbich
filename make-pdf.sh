#!/bin/sh
# Convert the print resume and cover-letter HTML files to PDF with WeasyPrint.
# Usage: ./make-pdf.sh              -> resume, generic cover letter, and company cover letters
#        ./make-pdf.sh file.html    -> just the specified file
# One-time setup: brew install weasyprint
cd "$(dirname "$0")" || exit 1
command -v weasyprint >/dev/null || { echo "Install first: brew install weasyprint"; exit 1; }

if [ $# -eq 0 ]; then
  set -- Igor_Bich_Resume.html Igor_Bich_CoverLetter.html
  for f in Igor_Bich_CoverLetter_*.html; do
    [ -e "$f" ] && set -- "$@" "$f"
  done
fi

for f in "$@"; do
  weasyprint --quiet "$f" "${f%.html}.pdf" && echo "$f -> ${f%.html}.pdf"
done
