document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    //Skapa ett objekt med bokningsdata från formuläret
    const booking = {
        name: sanitizeInput(document.getElementById('name').value),
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        numberOfPeople: parseInt(document.getElementById('numberOfPeople').value, 10),
        specialRequests: sanitizeInput(document.getElementById('specialRequests').value)
    };

    try {
        const response = await bookTable(booking);
        if (response.message && !response.error) {
            alert('Bokning lyckades: ' + response.message);
        } else {
            alert('Bokning misslyckades: ' + (response.error || 'Okänt fel'));
        }
    } catch (error) {
        console.error('Bokning misslyckades:', error);
        alert('Ett fel uppstod. Försök igen senare.');
    }
});

async function bookTable(booking) {
    try {
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