// Manejo del Formulario de Contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if(name === '' || email === '' || message === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }
  
   alert(`Gracias ${name}, hemos recibido tu mensaje y nos pondremos en contacto pronto.`);
    document.getElementById('contact-form ').reset();
  
  
  
  });
  