# 📱 Mobile Portfolio App

A modern, mobile-first portfolio interface designed to present projects, professional profiles, social links, and contact information in a smartphone-style user interface.

The project is currently built as a web-based mobile interface using **HTML, CSS, JavaScript, and Font Awesome**. It is structured so that it can later be packaged as a native mobile application.

---

## 🚀 Features

* 📱 Smartphone-style portfolio interface
* 🏷️ Application title at the top of the mobile screen
* 📅 Live date display
* 🕐 Live time display
* 🔍 Portfolio search bar
* 💼 Portfolio project shortcuts
* 🎬 CinemaBot AI project
* 📋 AI Auditor project
* 🛡️ OmniSentry AI project
* 📱 Mobile interface project
* 💻 GitHub profile
* 💼 LinkedIn profile
* 🎵 Music shortcut
* 📧 Email contact shortcut
* 🌐 Social media shortcuts
* 📜 Scrollable mobile screen
* 🌤️ Live weather display with location‑aware icon and temperature (abbreviated date)
* 🎨 Gradient app icons
* ✨ Hover animations
* ⭐ Font Awesome 6 icons

---

## 🛠️ Technologies

The project uses:

* HTML5
* CSS3
* JavaScript
* Font Awesome 6
* Responsive Web Design

Font Awesome icons are loaded through CDN.

---

## 📂 Project Structure

```text
mobile-portfolio/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📱 Application Layout

The mobile interface follows this structure:

```text
┌─────────────────────────┐
│      My Portfolio       │
│                         │
│ Wednesday, 12 August    │
│        18:06            │
│                         │
│ 🔍 Search...            │
│                         │
│  💼     🎬      📱      │
│ Portfolio Movie Mobile  │
│                         │
│  🛡️     📋      🎬      │
│ AI     Audit   Cinema   │
│                         │
│  🎵     💻      ✉️      │
│ Music  GitHub   Mail    │
│                         │
│ ●      ●      ●      ●  │
└─────────────────────────┘
```

---

## 🔍 Search

The search bar is designed to allow users to quickly find projects and portfolio content.

The current interface provides the search field visually. JavaScript search functionality can be added to filter the application icons dynamically.

For example:

```text
Cinema
```

could display only:

```text
🎬 CinemaBot AI
```

---

## 📅 Date & Time

The application automatically displays the current date and time using JavaScript.

The time is refreshed every second.

Example:

```text
Wednesday, 12 August 2026
18:06
```

The date and time are generated dynamically using the visitor's local device time.

---

## 🎨 Design

The interface uses:

* Dark mobile background
* Rounded smartphone screen
* Gradient application icons
* Glass-style social navigation
* Cyan highlighted time
* White application text
* Responsive layout
* Smooth hover effects
* Scrollable application area

The design is intended to resemble a modern smartphone home screen.

---

## 🔗 Projects

The portfolio currently provides shortcuts to several projects, including:

### Portfolio

Main professional portfolio:

```text
https://portfolio-website-v81b.onrender.com/
```

### CinemaBot AI

Movie database assistant:

```text
https://movie-database-assistant.onrender.com
```

### OmniSentry AI

AI-based website trust and verification project:

```text
https://omminsentiry-ai.onrender.com
```

### AI Auditor

AI auditing project:

```text
https://ai-auditor-wdba.onrender.com
```

### Mobile Interface

Mobile UI project:

```text
https://mobile-phone-userinterface.onrender.com
```

### GitHub

GitHub profile:

```text
https://github.com/bolokaiemi
```

### LinkedIn

Professional LinkedIn profile:

```text
https://www.linkedin.com/in/ebi-emmerich-adehor/
```

---

## ▶️ Running the Project

No backend is required for the basic interface.

Simply open:

```text
index.html

in a modern web browser.

For development, you can also use a local development server such as VS Code Live Server.

---

## 📱 Future Mobile Application

The current project is designed as a **mobile-first web application**.

The next stage can be packaging the interface as a real mobile application using technologies such as:

* Capacitor
* Apache Cordova

This would allow the existing HTML, CSS, and JavaScript interface to be packaged for mobile platforms.

Potential future features include:

* 📅 Calendar
* 📆 Appointment management
* 🔔 Notifications
* 👤 User profile
* 💼 Job application tracking
* 📝 Interview reminders
* 📧 Email integration
* 🔐 Authentication
* ☁️ Cloud data storage
* 📱 Android application
* 🍎 iOS application

---

## 🔮 Future Development Roadmap

### Phase 1 — Mobile Interface

* [x] Mobile screen
* [x] Application title
* [x] Date and time
* [x] Search bar
* [x] Project icons
* [x] Social links
* [x] Responsive styling

### Phase 2 — Interactive Features

* [ ] Functional search
* [ ] Calendar
* [ ] Appointment management
* [ ] Notifications
* [ ] Project filtering
* [ ] Settings screen

### Phase 3 — Portfolio Features

* [ ] Skills section
* [ ] CV section
* [ ] Job application tracker
* [ ] Interview tracker
* [ ] Contact form
* [ ] Project details
* [ ] GitHub project integration

### Phase 4 — Mobile Application

* [ ] Capacitor integration
* [ ] Android build
* [ ] iOS build
* [ ] Mobile status bar integration
* [ ] App icon
* [ ] Splash screen
* [ ] Push notifications

---

## 👨‍💻 Author

**Ebi Emmerich-Adehor**

Computer Science graduate and AI/software engineering learner focused on building practical applications using Python, Flask, JavaScript, APIs, databases, and AI technologies.

### GitHub

https://github.com/bolokaiemi

### LinkedIn

https://www.linkedin.com/in/ebi-emmerich-adehor/



## 📄 License

This project is intended as a personal portfolio and learning project.

You may adapt the structure and styling for your own educational and development purposes.




my-mobile-portfolio/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│   │
│   ├── base.html
│   ├── fullmobile.html
│   ├── contact.html
│   ├── calendar.html
│   └── cv.html
│
└── static/
    │
    ├── css/
    │   ├── style.css
    │   ├── mobile.css
    │   ├── contact.css
    │   ├── calendar.css
    │   └── cv.css
    │
    ├── js/
    │   ├── mobile.js
    │   ├── contact.js
    │   └── calendar.js
    │
    └── images/
        │
        └── ai-logo.jpg

## 🆕 Latest Update

- Added CSS constraints to the `.screen` container to limit width to 375 px and center the content, providing a mobile‑like appearance on larger screens.
