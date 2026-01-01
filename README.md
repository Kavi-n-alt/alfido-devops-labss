
🚀 DevOps Internship Projects – Alfido Tech
👤 Intern Details

Role: DevOps Intern

Duration: 1 Month

Focus Areas: Containerization, CI/CD, Infrastructure as Code, Monitoring, Logging & Incident Response

📌 Overview

This repository contains the practical DevOps tasks completed during my one-month internship.
Each project demonstrates hands-on experience with modern DevOps tools and workflows, focusing on real-world implementation rather than theory.

The projects include:

Dockerized application

CI/CD pipeline automation

Infrastructure as Code using Terraform

Monitoring, logging, and incident response using Prometheus & Grafana

Each task is implemented in an isolated and reproducible manner.

🧰 Tools & Technologies Used

Linux (Ubuntu)

Docker & Docker Compose

Git & GitHub

GitHub Actions

Terraform

FastAPI

Prometheus

Grafana

Bash / Shell scripting

📦 Project 1 – Containerization (Docker)
🎯 Objective

Containerize a simple web application and run it in a portable and reproducible environment using Docker.

🛠 Implementation

A FastAPI application was created as a lightweight backend service.

A Dockerfile was written to:

Use a minimal Python base image

Install dependencies

Expose the application port

Run the application inside a container

The application was successfully built and executed using Docker.

▶️ How to Run
docker build -t fastapi-app .
docker run -p 8000:8000 fastapi-app

✅ Outcome

Application runs consistently across environments

Demonstrates understanding of Docker images, containers, and ports

🔁 Project 2 – CI/CD Pipeline (GitHub Actions)
🎯 Objective

Automate the build and test process using a CI/CD pipeline.

🛠 Implementation

A GitHub Actions workflow was created to:

Trigger on code push

Build the Docker image

Run basic validation steps

Status badges were added to the repository README.

⚙️ Pipeline Stages

Code checkout

Dependency setup

Docker build

Basic verification

✅ Outcome

Automated build pipeline

Ensures consistency and early error detection

Demonstrates CI/CD fundamentals

🏗 Project 3 – Infrastructure as Code (Terraform)
🎯 Objective

Provision infrastructure using Infrastructure as Code principles.

🛠 Implementation

Terraform configuration files were written to define infrastructure resources.

Variables were used to make the configuration reusable.

terraform init, plan, and apply were executed.

State handling and configuration structure were documented.

▶️ Terraform Commands
terraform init
terraform plan
terraform apply

✅ Outcome

Infrastructure provisioning is automated

Clear understanding of Terraform workflows

Reproducible infrastructure setup

📊 Project 4 – Monitoring, Logging & Incident Response
🎯 Objective

Implement monitoring, logging, and alerting for a containerized application.

🧩 Architecture
FastAPI App → Prometheus → Grafana


FastAPI exposes metrics at /metrics

Prometheus scrapes application metrics

Grafana visualizes metrics and handles alerts

🐳 Container Orchestration

Docker Compose is used to manage:

FastAPI application

Prometheus

Grafana

docker compose up --build

📈 Monitoring (Prometheus)

Prometheus scrapes metrics from FastAPI

Target health is verified from:

Status → Targets

📊 Visualization (Grafana)

A dashboard named FastAPI Application Monitoring was created with:

Total HTTP Requests

Average Request Latency

These metrics provide visibility into application traffic and performance.

🚨 Alerting
Alert Rule: FastAPI Service Down

Query:

up{job="fastapi-app"} < 1


Behavior:

Alert fires when the application becomes unreachable

Evaluated every 1 minute

🧪 Alert Testing
docker compose stop app


Alert transitions to FIRING

Confirms incident detection

docker compose start app


Alert returns to Normal

📜 Logging

Logs are collected using Docker:

docker logs fastapi_app


Used for debugging and incident investigation.

🛠 Incident Response Runbook
Incident: Application Down

Detection

Grafana alert fires

Mitigation

docker compose restart app


Verification

Alert returns to Normal

Dashboard metrics resume

📸 Proof & Evidence

Screenshots included:

Prometheus targets (UP)

Grafana dashboards

Running containers

Alert firing state

🗂 Repository Structure
.
├── task-1-containerization/
├── task-2-ci-cd/
├── task-3-terraform/
├── task-4-monitoring/
│   ├── screenshots/
│   ├── docker-compose.yml
│   ├── Dockerfile
│   └── README.md
└── README.md

✅ Overall Outcome

Hands-on DevOps experience across the full lifecycle

Practical exposure to production-like tooling

Strong foundation in monitoring and incident handling

Reproducible and well-documented work

📌 Conclusion

This internship helped me gain real-world DevOps exposure by implementing end-to-end solutions involving containerization, automation, infrastructure provisioning, monitoring, and alerting.
The projects emphasize practical execution, reproducibility, and operational readiness.

🔥 Final Note

This repository reflects actual DevOps workflows, not just academic tasks, and is suitable for entry-level DevOps or SRE roles.

# Task 1 – Dockerize a Simple Flask App

For this task, I created a simple Flask application and containerized it using Docker and docker-compose.  
The app exposes a single `/` endpoint that returns a JSON message.

## Files
- app.py – flask application
- requirements.txt – dependencies
- Dockerfile – container instructions
- docker-compose.yml – run configuration

## Commands I used
### Build the image
docker-compose build

### Start the container
docker-compose up -d

### Check running containers
docker ps

### Test the endpoint
curl http://localhost:5000/

Expected output:
{ "message": "Hello from Dockerized Flask App!" }

## What I learned
- How Docker builds images using a Dockerfile
- How docker-compose simplifies running containers
- How to expose ports and test endpoints

## Development (live reload / file-watch) ✅
You can run the project in development mode with live reload for both Flask (port 5000) and Streamlit (port 8501).

1. Start dev services (the `docker-compose.override.yml` mounts your files and runs dev servers):

   ```bash
   docker compose up --build
   ```

2. Test endpoints / UI:
   - Flask: http://localhost:5000/
   - Streamlit: http://localhost:8501/

3. Edit files locally (for example `app.py` or files under `ui/`) — changes should be picked up automatically.

4. If your host filesystem doesn't support inotify (e.g., certain VM/shared folders), enable polling:
   - Set `WATCHDOG_USE_POLLING=1` in `.env` and restart the services. The dev image includes `watchdog` and the dev entrypoint will use `watchmedo auto-restart` to restart Flask/Streamlit processes when files change.

Notes:
- Compose reads `docker-compose.override.yml` automatically for local development and now uses the `dev` image target which includes dev dependencies.
- If you'd like, I can add a convenience `Makefile` to start the dev environment or make the dev image a separate Dockerfile named `Dockerfile.dev` — tell me which you prefer.


