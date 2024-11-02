function redirectToProfile(url) {
    window.location.href = url;
}
document.addEventListener("DOMContentLoaded", function () {
    const profileCard = document.querySelector('.profile-card');
    const skills = document.querySelectorAll('.skills li');
    const experience = document.querySelectorAll('.experience li');
    const education = document.querySelectorAll('.education li');

    profileCard.addEventListener('mouseenter', () => {
        profileCard.style.transform = 'scale(1.05)';
    });

    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'scale(1)';
    });

    setTimeout(() => {
        skills.forEach((skill, index) => {
            skill.style.animationDelay = `${index * 100}ms`;
            skill.style.opacity = 1;
        });
    }, 1000);

    setTimeout(() => {
        experience.forEach((exp, index) => {
            exp.style.animationDelay = `${index * 100}ms`;
            exp.style.opacity = 1;
        });
    }, 1500);

    setTimeout(() => {
        education.forEach((edu, index) => {
            edu.style.animationDelay = `${index * 100}ms`;
            edu.style.opacity = 1;
        });
    }, 2000);
});

function validarFormulario(event) {
    event.preventDefault();

    // Obtener valores
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var mensaje = document.getElementById('mensaje').value;

    let esValido = true;

    // Validación del nombre (solo letras)
    const regexNombre = /^[a-zA-Z\s]+$/;// regex significa expresion regular
    if (!regexNombre.test(nombre)) { // El método .test() evalúa si el valor de nombre coincide con la expresión regular regexNombre.
        //.test(nombre) devuelve true (el nombre es válido), entonces !true se convierte en false, por lo que no entraría en el if.
        document.getElementById('errorNombre').style.display = 'block';
        
        esValido = false;
        console.log(esValido);
    } else {
        document.getElementById('errorNombre').style.display = 'none';
    }

    // Validación del teléfono (solo números y 10 dígitos)
    const regexTelefono = /^\d{10}$/;
    if (!regexTelefono.test(telefono)) {
        document.getElementById('errorTelefono').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorTelefono').style.display = 'none';
    }

    // Validación del mensaje (no vacío)
    if (mensaje.trim() === "") { //trim elimina los espacios en blanco del inicio y final
        document.getElementById('errorMensaje').style.display = 'block';
        esValido = false;
    } else {
        document.getElementById('errorMensaje').style.display = 'none';
    }

    // Si todo es válido, mostrar los datos
    if (esValido) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `
            <h3>Datos enviados:</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Correo electrónico:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Mensaje:</strong> ${mensaje}</p>
            <h3>¡Nos pondremos en contacto lo antes posible! &#128522 </h3>
        `;
        resultado.style.display = 'block';
    }
}