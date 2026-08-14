/* =========================================================
   MOBILE PORTFOLIO JAVASCRIPT
   ========================================================= */

/* =========================================================
   DATE & TIME
   ========================================================= */
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    const statusTimeElement = document.getElementById('statusTime');
    if (!dateElement || !timeElement) return;
    const dateOptions = {
        weekday: 'short', // Fri
        day: 'numeric',
        month: 'short', // Aug
        year: 'numeric'
    };
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const date = now.toLocaleDateString(undefined, dateOptions);
    const time = now.toLocaleTimeString(undefined, timeOptions);
    dateElement.textContent = date;
    timeElement.textContent = time;
    if (statusTimeElement) {
        statusTimeElement.textContent = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: false });
    }
}
updateDateTime();
setInterval(updateDateTime, 1000);

/* =========================================================
   SEARCH
   ========================================================= */
const searchInput = document.getElementById('portfolioSearch');
const appItems = document.querySelectorAll('.app-item');
const noResults = document.getElementById('noResults');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const term = this.value.toLowerCase().trim();
        let visible = 0;
        appItems.forEach(item => {
            const text = (item.dataset.name || item.textContent).toLowerCase();
            if (term === '' || text.includes(term)) {
                item.style.display = 'flex';
                visible++;
            } else {
                item.style.display = 'none';
            }
        });
        if (noResults) noResults.hidden = visible !== 0;
    });
}

/* =========================================================
   WEATHER (INLINE WITH DATE & TIME)
   ========================================================= */
function setDefaultWeather() {
    const icon = document.getElementById('weatherIcon');
    const tempSpan = document.getElementById('weatherTemp');
    if (icon) icon.className = 'fa-solid fa-cloud';
    if (tempSpan) tempSpan.textContent = '--°C';
}
function fetchWeather() {
    if (!navigator.geolocation) {
        fallbackIP();
        return;
    }
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;
        getWeather(latitude, longitude);
    }, _ => fallbackIP(), { timeout: 5000 });
}
function fallbackIP() {
    fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(data => {
            if (data && data.latitude && data.longitude) {
                getWeather(data.latitude, data.longitude);
            } else {
                setDefaultWeather();
            }
        })
        .catch(() => setDefaultWeather());
}
function getWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    fetch(url)
        .then(r => r.json())
        .then(d => {
            if (!d || !d.current_weather) { setDefaultWeather(); return; }
            const cw = d.current_weather;
            const code = cw.weathercode;
            const temp = cw.temperature;
            const iconMap = {
                0: 'fa-solid fa-sun',
                1: 'fa-solid fa-cloud-sun',
                2: 'fa-solid fa-cloud-sun',
                3: 'fa-solid fa-cloud',
                45: 'fa-solid fa-fog',
                48: 'fa-solid fa-fog',
                51: 'fa-solid fa-cloud-showers-heavy',
                53: 'fa-solid fa-cloud-showers-heavy',
                55: 'fa-solid fa-cloud-showers-heavy',
                56: 'fa-solid fa-cloud-showers-heavy',
                57: 'fa-solid fa-cloud-showers-heavy',
                61: 'fa-solid fa-cloud-rain',
                63: 'fa-solid fa-cloud-rain',
                65: 'fa-solid fa-cloud-rain',
                66: 'fa-solid fa-cloud-rain',
                67: 'fa-solid fa-cloud-rain',
                71: 'fa-solid fa-snowflake',
                73: 'fa-solid fa-snowflake',
                75: 'fa-solid fa-snowflake',
                77: 'fa-solid fa-snowflake',
                80: 'fa-solid fa-cloud-showers-heavy',
                81: 'fa-solid fa-cloud-showers-heavy',
                82: 'fa-solid fa-cloud-showers-heavy',
                95: 'fa-solid fa-thunderstorm',
                96: 'fa-solid fa-thunderstorm',
                99: 'fa-solid fa-thunderstorm'
            };
            const iconClass = iconMap[code] || 'fa-solid fa-cloud';
            const iconEl = document.getElementById('weatherIcon');
            const tempEl = document.getElementById('weatherTemp');
            if (iconEl) iconEl.className = iconClass;
            if (tempEl) tempEl.textContent = `${temp}°C`;
        })
        .catch(() => setDefaultWeather());
}
// Initial fetch and periodic update (every 10 minutes)
fetchWeather();
setInterval(fetchWeather, 10 * 60 * 1000);