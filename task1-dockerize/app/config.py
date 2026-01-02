import os

# Expose simple module-level settings expected by the Flask app
APP_NAME = os.getenv("APP_NAME", "DevOps Intern Service")
APP_ENV = os.getenv("APP_ENV", "production")
APP_PORT = int(os.getenv("APP_PORT", "5000"))

class Config:
    APP_ENV = APP_ENV
    ALLOWED_COMMANDS = os.getenv(
        "ALLOWED_COMMANDS",
        "ls,uptime,df -h,free -m"
    ).split(",")

    LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
