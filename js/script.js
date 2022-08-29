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
  const divEmailValidation = document.getElementById('validate-result');

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

      // limpar todos os campos do formulário após realizar o envio do email
      event.preventDefault();
      event.target.elements.name.value = '';
      event.target.elements.email.value = '';
      event.target.elements.subject.value = '';
      event.target.elements.message.value = '';

      // excluir conteúdo da relacionado a validação do email após realizar o envio do email
      divEmailValidation.innerText = '';
    });
};

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
var navShow = document.querySelector('.navshow'),
  buttonExpand = document.querySelector('.button-expand'),
  arrow = document.querySelector('.fa-solid'),
  navBar = document.querySelector('.nav');

buttonExpand.addEventListener('click', openNav);

/**
 * If the navbar is open, close it, and if it's closed, open it.
 */
function openNav() {
  navShow.style.transform = 'scaleY(1)';

  if (
    navBar.classList.contains('navshow') &&
    buttonExpand.classList.contains('button-down')
  ) {
    navBar.classList.remove('navshow');
    buttonExpand.classList.remove('button-down');
  } else {
    navBar.classList.add('navshow');
    buttonExpand.classList.add('button-down');
  }

  if (arrow.classList.contains('fa-angle-down')) {
    arrow.classList.remove('fa-angle-down');
    arrow.classList.add('fa-angle-up');
  } else {
    arrow.classList.remove('fa-angle-up');
    arrow.classList.add('fa-angle-down');
  }
}

/* Back to top */
/**
 * Scroll to the top of the page in 600 milliseconds by scrolling up 15 pixels every 15 milliseconds.
 * @param scrollDuration - the duration of the scroll in milliseconds.
 */
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

/**
 * It validates an email address by checking if it matches a regular expression.
 * @returns the value of the setTimeout function.
 */
function validateEmail() {
  var input = document.getElementById('email');
  var result = document.getElementById('validate-result');

  var validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  this.timeout = setTimeout(function () {
    if (input.value.match(validRegex)) {
      result.style.color = '#4DED75';
      result.innerText = 'email válido';
      return true;
    } else {
      result.style.color = 'red';
      result.innerText = 'email inválido';
      return false;
    }
  }, 1500);
}
