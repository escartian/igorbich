#!/bin/sh
# Convert the resume/cover letter HTML files to PDF with WeasyPrint (no browser needed).
# Usage: ./make-pdf.sh              -> every *.html in this folder
#        ./make-pdf.sh file.html    -> just that file
# One-time setup: brew install weasyprint
cd "$(dirname "$0")" || exit 1
command -v weasyprint >/dev/null || { echo "Install first: brew install weasyprint"; exit 1; }
[ $# -eq 0 ] && set -- *.html
for f in "$@"; do
  weasyprint --quiet "$f" "${f%.html}.pdf" && echo "$f -> ${f%.html}.pdf"
done
