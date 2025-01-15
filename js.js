
//Cekamo da se kompletna html stranica ucita prije izvrsavanja koda
document.addEventListener('DOMContentLoaded', () => {
    // Selektujemo svaki button ovih klasa 
    const popupButtons = document.querySelectorAll('.card_button, .long_card_button');
    const popups = document.querySelectorAll('.popup');

    // Pokrecemo petlju iterisuci kroz sve butone node liste 
    popupButtons.forEach(button => {
        button.addEventListener('click', () => {
            //Za svaki button uzimamo atribut ove vrijednosti
            const popupId = button.getAttribute('popup-id');
            //Dohvacamo element po njegovom odgovarajucem idu koji odgovara idu buttona
            const popup = document.getElementById(popupId);
            //provjeravam da li popup uopste postoji 
            if (popup) {
                //mijenjamo stil tog popupa u block kako bi ga prikazali 
                popup.style.display = 'block'; 
            }
        });
    });

    // Close the popup
    const closeButtons = document.querySelectorAll('.close_popup');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            //Vraca najblizi roditeljski element klase popup (u ovom slucaju prozor koji sadrzi button)
            const popup = button.closest('.popup');
            if (popup) {
                popup.style.display = 'none'; // Hide the popup
            }
        });
    });

    const addToCartButtons = document.querySelectorAll('.add_tura');
    addToCartButtons.forEach(button =>{
        button.addEventListener('click', () =>{
            alert('Tura dodana!')
        })
    })

});