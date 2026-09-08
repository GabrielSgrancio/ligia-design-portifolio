#!/bin/bash
git init
git add .
git commit -m "Initial commit of Ligia Dias portfolio"
gh repo create ligia-design-portifolio --public --source=. --remote=origin --push
