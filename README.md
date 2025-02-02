# Gestor de Encuestas en JavaScript

Este proyecto es un sistema de encuestas desarrollado en JavaScript que permite la creación, gestión y votación de encuestas con preguntas de opción múltiple. Se ha implementado en dos enfoques distintos: **Programación Orientada a Objetos (POO)** y **Programación Funcional (PF)**.

## Características

- Permite crear encuestas con un título y múltiples preguntas.
- Cada pregunta debe contener al menos 2 opciones de respuesta.
- Un usuario puede votar en las encuestas disponibles.
- Se pueden visualizar los resultados de las encuestas.
- Un gestor de encuestas administra múltiples encuestas.
- Se requiere un mínimo de 8 preguntas para que una encuesta sea válida.

## Enfoques Implementados

### Programación Orientada a Objetos (POO)
- Se utiliza una clase `Encuesta` para modelar las encuestas.
- La clase `GestorDeEncuestas` maneja la administración de múltiples encuestas.
- Métodos como `agregarPregunta`, `votar` y `mostrarResultados` encapsulan la lógica de la encuesta.

### Programación Funcional (PF)
- Se emplean funciones puras para manejar la creación y gestión de encuestas.
- Se mantiene la misma funcionalidad de la versión en POO.

## Uso

### 1. Crear una encuesta
```javascript
const encuesta = crearEncuesta('Encuesta de preferencias tecnológicas');
```

### 2. Agregar preguntas  
```javascript
encuesta = agregarPregunta(encuesta, '¿Qué sistema operativo prefieres?', ['Windows', 'macOS', 'Linux']);
```

### 3. Registrar un voto  
```javascript
encuesta = votar(encuesta, '¿Qué sistema operativo prefieres?', 'Linux');
```

### 4. Mostrar resultados  
```javascript
mostrarResultados(encuesta);
```

### 5. Administrar encuestas con el gestor  
```javascript
let gestor = crearGestorDeEncuestas();
gestor = agregarEncuesta(gestor, encuesta);
listarEncuestas(gestor);
```

## Notas

- Se han agregado validaciones para asegurar que las encuestas tengan al menos 8 preguntas antes de mostrarse.
- Los votos solo pueden registrarse en opciones válidas.
