# Besöksapplikation för Restaurang

## Av Alexander Hilding

Denna webbapplikation är byggd för Restaurang "Nomads" och syftar till att ge besökare möjlighet att visa restaurangens meny samt boka bord online.

På startsidan presenteras restaurangens meny, uppdelad i kategorier som förrätter, huvudrätter, efterrätter och drycker. Menydata hämtas från backend-databasen och uppdateras dynamiskt på sidan.

För att boka ett bord kan användaren klicka på "Boka bord" i navigeringsmenyn, vilket öppnar en modal med ett bokningsformulär. Användaren fyller i namn, datum, tid, antal personer och eventuella särskilda önskemål. Vid inskickning av bokningen skickas data till backend-servern, och användaren får en bekräftelse om bokningen lyckas.

Webbapplikationen använder HTML, SCSS och JavaScript för att bygga användargränssnittet och hantera interaktivitet. Menydata och bokningar hanteras via RESTful API-anrop till en backend som är hostad på Render, medan MongoDB används som databas.

Webbapplikationen är publicerad och tillgänglig på https://statuesque-crostata-6ac0fa.netlify.app.