window.addEventListener('DOMContentLoaded', event => {

(function() {
    emailjs.init("I6sMln5RMvMDeEFbP");
  })();

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    var parms = {
        name,
        message,
        email
    };

    emailjs.send('service_vo7v1vm', 'template_0jmhvux', parms)
      .then((response) => {
        console.log(response)
        alert('Your message has been sent!');
        this.reset();
      }, (error) => {
        console.log('Erro ao enviar: ' + error.text);
      });
  });

})