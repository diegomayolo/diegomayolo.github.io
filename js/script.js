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

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});

//animar todos os itens da tela que tiverem o atributo [data-anime]
const items = document.querySelectorAll('[data-anime]');

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  items.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
};

window.addEventListener('scroll', () => {
  animeScroll();
});
