//Funktion för att hämta meny från backend databas
async function fetchMenu() {
    try {
        const response = await fetch(`https://dt207g-project-backend.onrender.com/api/customermenu`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Data kunde inte hämtas', error);
    }
}

//Funktion för att hämta meny och skriva ut i DOM
async function displayMenu() {
    try {
        const data = await fetchMenu();

        const starterList = document.querySelector("#starters ul");
        const mainCourseList = document.querySelector("#mainCourses ul");
        const dessertList = document.querySelector("#desserts ul");
        const drinksList = document.querySelector("#drinks ul");

        //Rensar befintliga listor
        starterList.innerHTML = "";
        mainCourseList.innerHTML = "";
        dessertList.innerHTML = "";
        drinksList.innerHTML = "";

        //Iterera över varje objekt och skriv ut i DOM  
        data.forEach(menu => {
            const menuItem = document.createElement("li");
            menuItem.innerHTML = `
                <p><strong>${menu.name}</strong> <span class="price">${menu.price}kr</span></p>
                <p class="description">${menu.description}</p>
            `;

            //Lägger menyobjekt i rätt kategori
            if (menu.category === "starter") {
                starterList.appendChild(menuItem);
            } else if (menu.category === "main course") {
                mainCourseList.appendChild(menuItem);
            } else if (menu.category === "dessert") {
                dessertList.appendChild(menuItem);
            } else if (menu.category === "drink") {
                drinksList.appendChild(menuItem);
            }
        });

    } catch (error) {
        console.error('Problem med att uppdatera DOM', error);
    }
}

//Anropar displayMenu när sidan laddas
document.addEventListener('DOMContentLoaded', displayMenu);