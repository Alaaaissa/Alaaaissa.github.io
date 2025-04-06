# GitHub Pages Deployment Instructions

## Overview
This document provides step-by-step instructions for deploying your portfolio website to GitHub Pages. GitHub Pages is a free hosting service that allows you to publish your website directly from your GitHub repository.

## Prerequisites
- A GitHub account
- Git installed on your computer

## Step 1: Create a GitHub Repository
1. Log in to your GitHub account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository `alaa-aissa.github.io` (replace "alaa-aissa" with your GitHub username)
4. Make sure the repository is set to "Public"
5. Click "Create repository"

## Step 2: Initialize Git in Your Local Project
1. Open a terminal/command prompt
2. Navigate to your portfolio website directory
3. Initialize a Git repository with the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

## Step 3: Connect Your Local Repository to GitHub
1. Add the remote GitHub repository:
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   ```
   (Replace "yourusername" with your actual GitHub username)

2. Push your code to GitHub:
   ```bash
   git push -u origin main
   ```
   Note: If your default branch is "master" instead of "main", use:
   ```bash
   git push -u origin master
   ```

## Step 4: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select the branch you want to deploy (main or master)
5. Click "Save"

## Step 5: Access Your Website
1. After a few minutes, your website will be available at `https://yourusername.github.io`
2. You can check the status of your deployment in the "GitHub Pages" section of your repository settings

## Step 6: Making Updates
1. Make changes to your local files
2. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Pages will automatically update your website with the new changes

## Troubleshooting
- If your website doesn't appear, check if your repository is public
- Ensure your repository is named correctly: `yourusername.github.io`
- Check if there are any build errors in the "GitHub Pages" section of your repository settings
- Make sure your index.html file is in the root directory of your repository

## Additional Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
