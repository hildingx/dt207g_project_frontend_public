//Händelselyssnade för öppna / stänga bokningsmodal
document.addEventListener('DOMContentLoaded', (event) => {
    const bookingModal = document.getElementById("bookingModal");
    const confirmationModal = document.getElementById("confirmationModal");
    const link = document.getElementById("openModalLink");
    const closeButtons = document.querySelectorAll(".close");
    const form = document.getElementById('bookingForm');
    const submitError = document.getElementById('submitError');

    //Visa modal vid klick på modallänk
    link.onclick = function(event) {
        event.preventDefault();
        bookingModal.style.display = "block";
    }

    //Dölj modal vid klick på respektive stäng-knapp för respektive modal
    closeButtons.forEach(button => {
        button.onclick = function() {
            form.reset();
            submitError.innerHTML = "";
            bookingModal.style.display = "none";
            confirmationModal.style.display = "none";
        }
    });

    //Dölj modal vid klick på bakgrundsmodal
    window.onclick = function(event) {
        if (event.target == bookingModal || event.target == confirmationModal) {
            form.reset();
            submitError.innerHTML = "";
            bookingModal.style.display = "none";
            confirmationModal.style.display = "none";
        }
    }
});