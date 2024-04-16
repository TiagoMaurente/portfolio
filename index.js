const formDesktop = document.querySelector(".contato__registro");
const fullNameDesktop = document.getElementById("nome");
const emailDesktop = document.getElementById("email");
const phoneDesktop = document.getElementById("numero");
const subjectDesktop = document.getElementById("assunto");
const messDesktop = document.getElementById("message");


const formMobile = document.querySelector(".contato__registro__celular");
const fullNameMobile = document.getElementById("nomecelular");
const emailMobile = document.getElementById("emailcelular");
const phoneMobile = document.getElementById("numerocelular");
const subjectMobile = document.getElementById("assuntocelular");
const messMobile = document.getElementById("messagecelular");

function sendEmail(fullName, email, phone, subject, mess) {
  const bodyMessage = `Nome completo: ${fullName.value}<br> Email:${email.value}<br> Celular:${phone.value}<br> Assunto:${subject.value}<br> Messagem:${mess.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "tiagocarreiramaurente@gmail.com",
    Password: "2E2873E6328FF9BC80AA1AD35D8039159CC3",
    To: "tiagocarreiramaurente@gmail.com",
    From: "tiagocarreiramaurente@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          title: "Realizado!",
          text: "Mensagem foi enviado com sucesso!",
          icon: "success"
        });
      }
    }
  );
}

function checkInputs(fullName, email, phone, subject, mess) {
  const items = [fullName, email, phone, subject, mess];

  for (const item of items) {
    item.addEventListener("keyup", () => {
      if (item.value.trim() !== "") {
        item.classList.remove("erro");
        item.parentElement.classList.remove("erro");
      } else {
        item.classList.add("erro");
        item.parentElement.classList.add("erro");
      }
    });
  }
}

function checkEmail(email) {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = email.nextElementSibling;

  if (!email.value.match(emailRegex)) {
    email.classList.add("erro");
    email.parentElement.classList.add("erro");

    if (email.value.trim() !== "") {
      errorTxtEmail.innerText = "Coloque um endereço de email válido";
    } else {
      errorTxtEmail.innerText = "Seu e-mail não pode ser deixado em branco";
    }
  } else {
    email.classList.remove("erro");
    email.parentElement.classList.remove("erro");
  }
}

formDesktop.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs(fullNameDesktop, emailDesktop, phoneDesktop, subjectDesktop, messDesktop);
  checkEmail(emailDesktop);

  if (!fullNameDesktop.classList.contains("erro") && !emailDesktop.classList.contains("erro") && !phoneDesktop.classList.contains("erro") && !subjectDesktop.classList.contains("erro") && !messDesktop.classList.contains("erro")) {
    sendEmail(fullNameDesktop, emailDesktop, phoneDesktop, subjectDesktop, messDesktop);

    formDesktop.reset();
    return false;
  }
});

formMobile.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs(fullNameMobile, emailMobile, phoneMobile, subjectMobile, messMobile);
  checkEmail(emailMobile);

  if (!fullNameMobile.classList.contains("erro") && !emailMobile.classList.contains("erro") && !phoneMobile.classList.contains("erro") && !subjectMobile.classList.contains("erro") && !messMobile.classList.contains("erro")) {
    sendEmail(fullNameMobile, emailMobile, phoneMobile, subjectMobile, messMobile);

    formMobile.reset();
    return false;
  }
});
