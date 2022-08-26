/**
 * The function is called sendForm() and it is called when the user clicks the submit button.
 */
function sendForm() {
  // https://dashboard.emailjs.com/admin/account
  // Public Key = ITNG9TnXJG8kJ4Y9x
  emailjs.init('ITNG9TnXJG8kJ4Y9x');
}

/* Listening to the submit event of the form and preventing the default behavior of the event. */
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

/**
 * If the top of the window is greater than the top of the element, add the class 'animate' to the
 * element, otherwise remove the class 'animate' from the element.
 */
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

// hamburguer function
/* Open Menu bar */
var iconMenu = document.querySelector('.iconmenu'),
  iconOpen = document.querySelector('.iconopen'),
  navBar = document.querySelector('.nav');

iconMenu.addEventListener('click', openNav);

function openNav() {
  if (iconOpen.classList.contains('close')) {
    iconOpen.classList.remove('close');
  } else {
    iconOpen.classList.add('close');
  }

  if (navBar.classList.contains('navshow')) {
    navBar.classList.remove('navshow');
  } else {
    navBar.classList.add('navshow');
  }
}
/* end Open Menu bar */

/* Back to top */
var toTop = document.getElementById('scrollme');

toTop.addEventListener('click', function () {
  scrollToTop(600);
});

function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else clearInterval(scrollInterval);
    }, 15);
}
