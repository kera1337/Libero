

//LOGIN FORMA!! 


// Get the modal and form elements

const loginForm = document.querySelector('.login_form');
const loginCloseButton = document.getElementById('login-close');



loginCloseButton.addEventListener('click', () => {
    window.location.href = "index.html";  
});


loginForm.addEventListener('submit', function() {
    

    // Uzimamo vrijednosti polja
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    // provjera inputa
    if (email === "" || password === "") {
        alert("Popunite oba polja");
        return;  // Stop execution if fields are empty
    }

    //neka login logika
    if (email === "ime.prezime@proba.com" && password === "password123") {
        window.location.href = "index.html";
        alert("Uspjesno ste se prijavili!"); 
    } else {
        alert("Pogresan mail ili password, pokusajte ponovo!");
    }
});



//SCROLL NA ABOUT!!

document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.getElementById('about-page');
    const aboutSection = document.getElementById('about-section');

    aboutLink.addEventListener('click', function() {
        window.location.href = "index.html";
        /*event.preventDefault(); // Prevent the default anchor click behavior*/
        aboutSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the about section smoothly
    });
});



