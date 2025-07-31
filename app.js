// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(nombre) {
    const amigo = document.getElementById('amigo').value.trim();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (amigo == '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    if (!soloLetras.test(amigo)) {
        alert('El nombre solo puede contener letras y espacios (sin números ni símbolos).');
        return;
    }
    if (amigos.includes(amigo)) {
        alert('Este amigo ya ha sido agregado.');
        return;
    }
    console.log(`Amigo agregado: ${amigo}`);
    amigos.push(amigo);
    document.getElementById('amigo').value = ''; // Limpiar el campo de entrada
    console.log(`Lista de amigos: ${amigos}`);
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de mostrar los amigos

    if (amigos.length === 0) {
        listaAmigos.innerHTML = '<li>No hay amigos agregados.</li>';
        return;
    }
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    const elegido = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(`Amigo secreto elegido: ${elegido}`);

    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = elegido;
    resultadoLista.appendChild(li);
}
