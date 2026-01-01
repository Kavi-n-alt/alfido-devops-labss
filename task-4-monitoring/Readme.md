# Task 4 – Monitoring, Logging & Incident Response

## Objective
Implement monitoring, logging, and alerting for a containerized application using Prometheus and Grafana, and prepare a basic incident response workflow.

---

## Tech Stack
- FastAPI (Application)
- Docker & Docker Compose
- Prometheus (Metrics collection)
- Grafana (Dashboards & Alerting)

---

## Architecture
- FastAPI exposes metrics at `/metrics`
- Prometheus scrapes application metrics
- Grafana visualizes metrics and manages alerts

---

## How to Run the Project

```
docker compose up --build
Services:

FastAPI → http://localhost:8000

Prometheus → http://localhost:9090

Grafana → http://localhost:3000

Monitoring
Prometheus collects metrics from the FastAPI application.
Grafana dashboard FastAPI Application Monitoring displays:

Total HTTP Requests

Average Request Latency

Alerting
An alert rule FastAPI Service Down is configured.

Condition:

promql

up{job="fastapi-app"} < 1
The alert fires if the service is unreachable for more than 1 minute.

Incident Response (Runbook)
Incident: FastAPI Service Down
Detection:

Grafana alert changes to FIRING state

Mitigation:

bash

docker compose restart app
Verification:

Alert returns to Normal

Metrics resume in Grafana dashboard

Logs
Logs are collected via Docker:

bash

docker logs fastapi_app
Screenshots
All proof screenshots are available in the screenshots/ directory.

Status
✅ Monitoring implemented
✅ Dashboards created
✅ Alerts configured and tested
✅ Incident response demonstrated