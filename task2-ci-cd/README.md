# Task 2 – CI/CD Pipeline (GitHub Actions) ✅

[![CI-CD Pipeline](https://github.com/Kavi-n-alt/alfido-devops-labs/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Kavi-n-alt/alfido-devops-labs/actions/workflows/ci.yml)

This project implements an automated CI/CD pipeline using **GitHub Actions** and **Docker**. Every push to the **main** branch triggers the pipeline to build, test, and (optionally) publish a Docker image so that container delivery remains consistent and reliable.

## Overview
- **Purpose:** Automate build, test, and Docker image publishing to Docker Hub.
- **Triggers:** Pushes and pull requests to the `main` branch.
- **Secrets used:** `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN` (stored in GitHub Secrets) for secure Docker Hub authentication.

> **Security note:** Do **not** commit Docker credentials or other secrets into the repository. The workflow will only publish to Docker Hub when the required secrets are set in the repository settings. If you want the images to be publicly visible, configure your Docker Hub repository to be public — but keep credentials secret.

## Pipeline stages 🔧
1. **Build** — build the application and Docker image
2. **Test** — run basic unit/tests and perform syntax checks
3. **Docker Image Publish** — tag and push the image to Docker Hub

## What the pipeline does:
- Checks out the repository
- Sets up Python (specified in workflow)
- Installs dependencies from `requirements.txt`
- Performs syntax checks and runs tests (e.g., `pytest` if present)
- Builds Docker image using the `Dockerfile`
- Logs into Docker Hub (using GitHub Secrets) and pushes the image

## Tools used 🛠️
- **GitHub Actions** — workflow automation
- **Docker** — build and push images
- **Docker Hub** — image registry

## Outcome 🎯
Every push to the `main` branch automatically triggers the CI/CD pipeline that builds the image, runs tests, and pushes the image to Docker Hub; this ensures consistent builds and reliable container delivery.

## How to trigger and inspect the pipeline
1. Commit changes to any file and push to the `main` branch
2. Visit the **Actions** tab on GitHub
3. Select the workflow (e.g., "Task2 CI Pipeline") to view logs and steps

---

*(Merged with the existing README: retained the original explanation of the workflow, and added details about stages, tools, secrets, and the desired `main`-branch trigger.)*

