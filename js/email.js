window.addEventListener('DOMContentLoaded', event => {

(function() {
    emailjs.init("I6sMln5RMvMDeEFbP");
  })();

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_vo7v1vm', 'template_0jmhvux', this)
      .then(() => {
        alert('Your message has been sent!');
        this.reset();
      }, (error) => {
        console.log('Erro ao enviar: ' + error.text);
      });
  });

})