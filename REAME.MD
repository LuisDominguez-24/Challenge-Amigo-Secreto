# Amigo Secreto

## Descripción

Este proyecto es una pequeña aplicación web para realizar un sorteo de "Amigo Secreto".  
Permite agregar nombres de amigos, mostrarlos en una lista y luego sortear aleatoriamente un amigo de la lista para descubrir quién será el "amigo secreto".

El principal objetivo es practicar lógica de programación y manipulación del DOM con JavaScript.

---

## Características

- Añadir nombres válidos (solo letras y espacios, sin números ni símbolos).
- Validación para evitar nombres vacíos o repetidos.
- Mostrar la lista actualizada de amigos ingresados.
- Sortear aleatoriamente un amigo de la lista.
- Mostrar el resultado del sorteo en pantalla.
- Interfaz sencilla y responsiva usando HTML y CSS con fuentes web.

---

## Cómo usar

1. Escribe el nombre de un amigo en el campo de texto.
2. Presiona el botón **Añadir** para agregarlo a la lista.
3. Repite para todos los amigos que quieres incluir.
4. Una vez agregados al menos dos amigos, presiona el botón **Sortear amigo** para elegir aleatoriamente.
5. El resultado aparecerá debajo de la lista de amigos.

---

## Estructura del proyecto

- `index.html`: Archivo principal con la estructura HTML y enlaces a estilos y scripts.
- `style.css`: Archivo para estilos CSS personalizados y diseño visual.
- `app.js`: Archivo JavaScript que contiene la lógica para agregar amigos, mostrar la lista y sortear.

---

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript (vanilla)

---

## Validaciones importantes

- Solo se aceptan nombres con letras y espacios.
- No se permiten nombres duplicados.
- Para realizar el sorteo, debe haber al menos dos amigos agregados.
