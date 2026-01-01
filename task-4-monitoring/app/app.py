from fastapi import FastAPI
from prometheus_client import Counter, Histogram, generate_latest
from starlette.responses import Response
import time
import random

app = FastAPI()

REQUEST_COUNT = Counter(
    "http_requests_total",
    "Total HTTP requests"
)

REQUEST_LATENCY = Histogram(
    "http_request_latency_seconds",
    "HTTP request latency"
)

@app.get("/")
def home():
    REQUEST_COUNT.inc()
    with REQUEST_LATENCY.time():
        time.sleep(random.uniform(0.1, 0.5))
    return {"message": "App is running"}

@app.get("/metrics")
def metrics():
    return Response(generate_latest(), media_type="text/plain")
