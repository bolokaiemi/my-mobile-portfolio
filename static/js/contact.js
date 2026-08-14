/* =========================================================
   CONTACT FORM
   ========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const contactMessage =
    document.getElementById(
        "contactMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (contactMessage) {

                contactMessage.textContent =
                    "Thank you! Your message is ready to be connected to the backend.";

            }


            contactForm.reset();

        }
    );

}