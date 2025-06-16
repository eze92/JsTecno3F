/*Requerimientos:
 Crear un formulario de registro que tenga los siguientes campos:
 Nombre (input tipo texto)
 Correo electrónico (input tipo email)
 Contraseña (input tipo password)
 Un botón para enviar.
 
 Validación en tiempo real:Cuando el usuario escriba en los campos, verificar que:El nombre no esté vacío.El correo sea válido.
 La contraseña tenga al menos 8 caracteres.Si algún campo es inválido, mostrarlo con un borde rojo y un mensaje de error debajo del campo. Si es válido, colocar un borde verde.Envío del formulario:
 Al hacer clic en el botón "Enviar", si todos los campos son válidos, mostrar un mensaje debajo del formulario que diga: "Formulario enviado correctamente" y limpiar los campos.
 */

 document.addEventListener('DOMContentLoaded', () => {
  const nombre = document.getElementById('nombre');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const form = document.getElementById('registroForm');
  const mensajeExito = document.getElementById('mensajeExito');

  function validarNombre() {
    const error = document.getElementById('errorNombre');
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
    const error = document.getElementById('errorEmail');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value.trim())) {
      email.classList.add('error');
      email.classList.remove('valido');
      error.textContent = 'El correo no es válido.';
      return false;
    } else {
      email.classList.remove('error');
      email.classList.add('valido');
      error.textContent = '';
      return true;
    }
  }

  function validarPassword() {
    const error = document.getElementById('errorPassword');
    if (password.value.length < 8) {
      password.classList.add('error');
      password.classList.remove('valido');
      error.textContent = 'La contraseña debe tener al menos 8 caracteres.';
      return false;
    } else {
      password.classList.remove('error');
      password.classList.add('valido');
      error.textContent = '';
      return true;
    }
  }

  nombre.addEventListener('input', validarNombre);
  email.addEventListener('input', validarEmail);
  password.addEventListener('input', validarPassword);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();

    if (nombreValido && emailValido && passwordValido) {
      mensajeExito.textContent = 'Formulario enviado correctamente';
      form.reset();
      [nombre, email, password].forEach(input => {
        input.classList.remove('valido');
      });
    } else {
      mensajeExito.textContent = '';
    }
  });
});