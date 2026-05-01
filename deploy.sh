#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment..."

# Add all changes
git add .

# Commit (auto message with date)
git commit -m "deploy: $(date)" || echo "No changes to commit"

# Push to main
git push origin main

echo "✅ Code pushed to GitHub"

echo "🌐 Make sure GitHub Pages is enabled:"
echo "Settings -> Pages -> Source: 'Deploy from a branch' -> Branch: main / root"
echo "🌐 visit: https://zaraban-alt.github.io/clafro/"
echo "🎉 Done!"