//Showing menu

const btnMenu = document.querySelector("#menu-icon");
const menu = document.querySelector("#smenu");

btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle('show')
});

//Sending an email

emailjs.init('oviHKd3tV-8OF5ZBv')
        
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_i7bkyck', 'template_7s1y1m4', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}