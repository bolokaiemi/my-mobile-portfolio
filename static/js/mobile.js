/* =========================================================
   MOBILE PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   DATE & TIME
   ========================================================= */

function updateDateTime() {

    const now = new Date();


    const dateElement =
        document.getElementById("currentDate");


    const timeElement =
        document.getElementById("currentTime");


    const statusTimeElement =
        document.getElementById("statusTime");


    if (!dateElement || !timeElement) {
        return;
    }


    const dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };


    const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };


    const date =
        now.toLocaleDateString(
            undefined,
            dateOptions
        );


    const time =
        now.toLocaleTimeString(
            undefined,
            timeOptions
        );


    dateElement.textContent = date;

    timeElement.textContent = time;


    if (statusTimeElement) {

        statusTimeElement.textContent =
            now.toLocaleTimeString(
                undefined,
                {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                }
            );

    }

}


updateDateTime();


setInterval(
    updateDateTime,
    1000
);


/* =========================================================
   SEARCH
   ========================================================= */

const searchInput =
    document.getElementById(
        "portfolioSearch"
    );


const appItems =
    document.querySelectorAll(
        ".app-item"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const searchTerm =
                this.value
                    .toLowerCase()
                    .trim();


            let visibleItems = 0;


            appItems.forEach(
                function (item) {

                    const searchableText =
                        (
                            item.dataset.name ||
                            item.textContent
                        ).toLowerCase();


                    if (
                        searchTerm === "" ||
                        searchableText.includes(searchTerm)
                    ) {

                        item.style.display =
                            "flex";

                        visibleItems++;

                    } else {

                        item.style.display =
                            "none";

                    }

                }
            );


            if (noResults) {

                noResults.hidden =
                    visibleItems !== 0;

            }

        }
    );

}


/* =========================================================
   WEATHER PLACEHOLDER
   ========================================================= */

function setDefaultWeather() {

    const weatherIcon =
        document.getElementById(
            "weatherIcon"
        );


    const weatherCondition =
        document.getElementById(
            "weatherCondition"
        );


    if (!weatherIcon || !weatherCondition) {
        return;
    }


    weatherIcon.className =
        "fa-solid fa-cloud";


    weatherCondition.textContent =
        "Weather unavailable";

}


setDefaultWeather();