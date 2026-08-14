/* =========================================================
   CALENDAR
   ========================================================= */

const calendarGrid =
    document.getElementById(
        "calendarGrid"
    );


const calendarMonth =
    document.getElementById(
        "calendarMonth"
    );


const selectedDate =
    document.getElementById(
        "selectedDate"
    );


const previousMonth =
    document.getElementById(
        "previousMonth"
    );


const nextMonth =
    document.getElementById(
        "nextMonth"
    );


let currentDate =
    new Date();


/* =========================================================
   RENDER CALENDAR
   ========================================================= */

function renderCalendar() {

    if (!calendarGrid || !calendarMonth) {
        return;
    }


    calendarGrid.innerHTML = "";


    const year =
        currentDate.getFullYear();


    const month =
        currentDate.getMonth();


    const firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    const monthName =
        currentDate.toLocaleDateString(
            undefined,
            {
                month: "long",
                year: "numeric"
            }
        );


    calendarMonth.textContent =
        monthName;


    /* Empty days */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement("div");


        emptyDay.className =
            "calendar-day empty";


        calendarGrid.appendChild(
            emptyDay
        );

    }


    /* Actual days */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayElement =
            document.createElement("button");


        dayElement.type =
            "button";


        dayElement.className =
            "calendar-day";


        dayElement.textContent =
            day;


        const today =
            new Date();


        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {

            dayElement.classList.add(
                "today"
            );

        }


        dayElement.addEventListener(
            "click",
            function () {

                const chosenDate =
                    new Date(
                        year,
                        month,
                        day
                    );


                selectedDate.textContent =
                    chosenDate.toLocaleDateString(
                        undefined,
                        {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        }
                    );

            }
        );


        calendarGrid.appendChild(
            dayElement
        );

    }

}


/* =========================================================
   PREVIOUS MONTH
   ========================================================= */

if (previousMonth) {

    previousMonth.addEventListener(
        "click",
        function () {

            currentDate.setMonth(
                currentDate.getMonth() - 1
            );


            renderCalendar();

        }
    );

}


/* =========================================================
   NEXT MONTH
   ========================================================= */

if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        function () {

            currentDate.setMonth(
                currentDate.getMonth() + 1
            );


            renderCalendar();

        }
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

renderCalendar();

// Appointment modal handling
document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('addAppointmentBtn');
  const modal = document.getElementById('addAppointmentModal');
  const closeBtn = document.getElementById('closeModal');
  const form = document.getElementById('appointmentForm');

  if (addBtn && modal) {
    addBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  if (form && modal) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const title = document.getElementById('apptTitle').value;
      const date = document.getElementById('apptDate').value;
      const time = document.getElementById('apptTime').value;
      const desc = document.getElementById('apptDesc').value;
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      appointments.push({ title, date, time, desc });
      localStorage.setItem('appointments', JSON.stringify(appointments));
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      form.reset();
      console.log('Saved appointment', { title, date, time, desc });
    });
  }
});