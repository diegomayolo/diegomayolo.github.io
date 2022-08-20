function sendForm() {
  // https://dashboard.emailjs.com/admin/account
  // Public Key = ITNG9TnXJG8kJ4Y9x
  emailjs.init('ITNG9TnXJG8kJ4Y9x');
}

window.onload = function () {
  document
    .getElementById('contact-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      // service id no email que deseja receber as notificações
      // https://dashboard.emailjs.com/admin
      // YOUR_SERVICE_ID = service_cyuup0j

      // id do template (modelo de email)
      // https://dashboard.emailjs.com/admin/templates
      // YOUR_TEMPLATE_ID = template_tqutueb
      emailjs.sendForm('service_cyuup0j', 'template_tqutueb', this).then(
        function () {
          console.log('SUCCESS!');
        },
        function (error) {
          console.log('FAILED...', error);
        },
      );
    });
};
