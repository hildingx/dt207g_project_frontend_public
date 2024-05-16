//Händelsehanterarfunktion för boka bord
document.addEventListener('DOMContentLoaded', () => {
    //Hämta formulär och modaler
    const form = document.getElementById('bookingForm');
    const bookingModal = document.getElementById("bookingModal");
    const confirmationModal = document.getElementById("confirmationModal");

    //Element för att visa felmeddelanden
    const submitError = document.getElementById('submitError');

    //Vid submit körs funktion
    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        //Skapa bokningsobjekt från data från formulär
        const booking = {
            name: sanitizeInput(document.getElementById('name').value),
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            numberOfPeople: parseInt(document.getElementById('numberOfPeople').value, 10),
            specialRequests: sanitizeInput(document.getElementById('specialRequests').value)
        };

        //Kontroll om namn och önskemål är ifyllda
        if (!booking.name || !booking.specialRequests ) {
            submitError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Vänligen fyll i alla fält';
            return;
        }

        //Posta bokningsobjekt till API
        try {
            const response = await bookTable(booking);

            if (response.message && !response.error) {
                bookingModal.style.display = "none"; 
                confirmationModal.style.display = "block"; 
            } else {
                alert('Bokning misslyckades: ' + (response.error || 'Okänt fel'));
            }
        } catch (error) {
            alert('Ett fel uppstod. Försök igen senare.');
        }
        form.reset();
    });
});

//Funktion för att lägga bokning
async function bookTable(booking) {
    try {
        //Post-metod till backend med bokningsdata
        const response = await fetch(`https://dt207g-project-backend.onrender.com/api/customerbooking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking)
        });
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Något gick fel med anropet');
        }
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

//Sanera input-data
function sanitizeInput(input) {
    const trimmedInput = input.trim();
    const sanitizedInput = trimmedInput.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    return sanitizedInput;
}