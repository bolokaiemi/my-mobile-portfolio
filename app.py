from flask import Flask, render_template


app = Flask(__name__)


# =========================================================
# HOME / MOBILE PORTFOLIO
# =========================================================

@app.route("/")
def home():
    return render_template("fullmobile.html")


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


# =========================================================
# RUN APPLICATION
# =========================================================

if __name__ == "__main__":
    app.run(debug=True)