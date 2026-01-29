// ANIMACIÓN DE TARJETAS
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => observer.observe(card));


// VALIDACIÓN FORMULARIO DE CONTACTO
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (email === "" || message === "") {
      alert("Por favor completa todos los campos.");
      return;
    }

    alert("Mensaje enviado correctamente ⚽📩");
    this.reset();
  });
}
