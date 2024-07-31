
 // JavaScript para la validación del formulario
 document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const name = document.getElementById('name').value;
      const surname = document.getElementById('surname').value;
      const email = document.getElementById('email').value;
      const country = document.getElementById('country').value;
      const msj = document.getElementById('msj').value;
      
      const message = `
          Nombre: ${name}\n
          Apellido: ${surname}\n
          Email: ${email}\n
          País de Residencia: ${country}\n
          Mensaje: ${msj}
      `;
      
      alert(message);
  });
});