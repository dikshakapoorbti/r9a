#!/bin/bash

# Deployment script for cPanel
# This script installs dependencies, builds the project, and copies files

echo "🚀 Starting deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build production bundle
echo "🔨 Building production bundle..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build successful!"
echo "📁 Deployment files ready in dist/"
