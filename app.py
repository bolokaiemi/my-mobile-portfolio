from flask import Flask, render_template
from dotenv import load_dotenv
import os

app = Flask(__name__)

# =========================================
# LOAD ENV
# =========================================
load_dotenv()

OPENAI_API_KEY= os.environ.get("OPENWEATHER_API_KEY")

# =========================================================
# HOME / MOBILE PORTFOLIO
# =========================================================

@app.route("/")
def home():
    return render_template("index.html")


# =========================================================
# CONTACT
# =========================================================

@app.route("/contact")
def contact():
    return render_template("contact.html")


# =========================================================
# CALENDAR
# =========================================================

@app.route("/calendar")
def calendar():
    return render_template("calendar.html")


# =========================================================
# CV
# =========================================================

@app.route("/cv")
def cv():
    return render_template("cv.html")


@app.route("/certificate")
def certificate():
    return render_template("certificate.html")
# =========================================================
# RUN APPLICATION
# =========================================================

if __name__ == "__main__":
    app.run(debug=True)