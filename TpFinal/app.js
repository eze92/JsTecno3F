const div = document.getElementById('carta');
const url = 'https://dragonball-api.com/api/characters';

async function mostrarImagenes() {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const personajes = datos.items.slice(0, 10);

    personajes.forEach(personaje => {
      // Crea un contenedor para la imagen y el nombre
      const contenedor = document.createElement('div');
      contenedor.className = 'personaje';

      // Crea la imagen
      const img = document.createElement('img');
      img.src = personaje.image;
      img.alt = personaje.name;
      img.className = 'miniatura';

      // Crea el nombre
      const nombre = document.createElement('p');
      nombre.textContent = personaje.name;
      nombre.className = 'nombre-personaje';

      // Raza
      const raza = document.createElement('p');
      raza.textContent = `Raza: ${personaje.race || 'Desconocida'}`;
      raza.className = 'raza-personaje';

      // Agrega la imagen y el nombre al contenedor
      contenedor.appendChild(img);
      contenedor.appendChild(nombre);
      contenedor.appendChild(raza);

      // Agrega el contenedor al div principal
      div.appendChild(contenedor);
    });
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
  }
}

mostrarImagenes();


// validacion formulario

function validarNombre() {
  const nombre = document.getElementById('name');
  const error = document.getElementById('name-error');
  if (nombre.value.trim() === '') {
    nombre.classList.add('error');
    nombre.classList.remove('valido');
    error.textContent = 'El nombre no puede estar vacío.';
    return false;
  } else {
    nombre.classList.remove('error');
    nombre.classList.add('valido');
    error.textContent = '';
    return true;
  }
}

function validarEmail() {
  const email = document.getElementById('email');
  const error = document.getElementById('email-error');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.trim() === '') {
    email.classList.add('error');
    email.classList.remove('valido');
    error.textContent = 'El correo no puede estar vacío.';
    return false;
  } else if (!regex.test(email.value.trim())) {
    email.classList.add('error');
    email.classList.remove('valido');
    error.textContent = 'El correo no tiene un formato válido.';
    return false;
  } else {
    email.classList.remove('error');
    email.classList.add('valido');
    error.textContent = '';
    return true;
  }
}

function validarMensaje() {
  const mensaje = document.getElementById('message');
  const error = document.getElementById('message-error');
  if (mensaje.value.trim() === '') {
    mensaje.classList.add('error');
    mensaje.classList.remove('valido');
    error.textContent = 'El mensaje no puede estar vacío.';
    return false;
  } else {
    mensaje.classList.remove('error');
    mensaje.classList.add('valido');
    error.textContent = '';
    return true;
  }
}

// Validación en tiempo real
document.getElementById('name').addEventListener('input', validarNombre);
document.getElementById('email').addEventListener('input', validarEmail);
document.getElementById('message').addEventListener('input', validarMensaje);

// Validación al enviar el formulario
document.getElementById('contact-form').addEventListener('submit', function(event) {
  const nombreValido = validarNombre();
  const emailValido = validarEmail();
  const mensajeValido = validarMensaje();

  if (!nombreValido || !emailValido || !mensajeValido) {
    event.preventDefault(); // Evita el envío y recarga
    document.getElementById('form-feedback').textContent = 'Por favor, corrige los errores antes de enviar.';
    document.getElementById('form-feedback').style.color = 'red';
  } else {
    event.preventDefault(); // Evita recarga para mostrar el mensaje de éxito
    document.getElementById('form-feedback').textContent = '¡Formulario enviado correctamente!';
    document.getElementById('form-feedback').style.color = 'green';
    //limpia el formulario 
    document.getElementById('contact-form').reset();
  }
});