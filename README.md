# Validación de tarjeta prepago Spotify Premium.

- [Español](##-Índice)
<!-- - [English](##-Índice) -->


![Shows CRUD functionalities]https://raw.githubusercontent.com/AnnaLizarraga/CardValidation-Spotify/main/src/recursos%20v/Prototipo/gif_Card_Validation.gif)

Deploy del proyecto:
En Proceso…

***
## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Tech Skills del Proyecto](#2-Tech-Skills-del-Proyecto)
- [3. Planeación](#3-Planeación)
- [4. Investigación UX](#4-Investigación-UX)
- [5. Bocetaje + Prototipo + Feedback ](#5-Bocetaje-+-Prototipo-+-Feedback-de-iteración)

***
## 1. Resumen del proyecto

En este proyecto se llevará acabo el desarrollo de una interfaz de una aplicación web en la cual se validarán los dígitos de una tarjeta mediante el algoritmo de Luhn implementado mediante JavaScript, Además de implementar la funcionalidad para ocultar todos los dígitos de dicha tarjeta menos los últimos cuatro ya que son datos sensibles del usuario.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

***
## 2. Tech Skills del Proyecto

### HTML 5 
- Semántico

### CSS 
- Selectores de CSS
- Box Model

### Web APIs
- Uso de selectores del DOM
- Manejo de eventos del DOM
- Manipulación dinámica del DOM

### JavaScript Vanilla
- Datos primitivos
- Strings
- variables
- Funciones
- Condicionales
- Bucles/ciclos
- Módulos de ECMAScript.

### Control de versiones Git- Github
- Init, clone, add, commit, status, push, pull, remote, checkout
- GitHub: Despliegue con GitHub Pages.

***
## 3. Planeación
Este proyecto se realizó con metodologías agiles SCRUM en 2 sprints de 1 semana en la cual se trabajaron historias de usuario.

Puedes ver la planeación [aquí](https://github.com/AnnaLizarraga/CardValidation-Spotify/projects/1?fullscreen=true)

### Historia de Usuario 1: Validar Tarjeta.

La interfaz debe permitir al usuario:

-	Ingresar el número que queremos validar.
-	No debe poder ingresar un campo vacío.
-	Mostrar un altert si es un número de tarjeta inválido.
-	Redirigir en caso de ser válido.

### Historia de Usuario 2: Maskify.

La interfaz debe permitir al usuario:

-	Ocultar todos los dígitos de su número de tarjeta menos los últimos 4 caracteres.

***
## 4. Investigación UX

### ¿Quiénes son los usuarios de este producto?

Los usuarios de esta herramienta son principalmente jóvenes “Milenials” (72%) que utilizan la aplicación de streaming de música Spotify, con este producto se soluciona un problema que presentan los usuarios, el pago de la suscripción.

### ¿Cómo soluciona los problemas de los usuarios este producto?

La mayoría de los usuarios han reflejado que no se sienten cómodos domiciliando sus pagos a sus cuentas de tarjetas, ya sea por la incertidumbre que genera el ingresar datos bancarios en aplicaciones, tener pagos recurrentes fijos sin una previa confirmación, aumento de costos sin previo aviso o simplemente porque no cuentan con una tarjeta, ya que un 32% de los usuarios son menores de edad. Con esta tarjeta de prepago, se domicilia a la cuenta spotify del particular y cuentas asociadas, así se tiene más control de los pagos a la aplicación de streaming, los usuarios pueden depositar o transferir directamente el monto concreto de mensualidad (membresía individual, duo, plan familiar o estudiantes) y tener el control total de sus gastos. A diferencia de las tarjetas de regalo que hay en la actualidad, esta tiene la ventaja de estar directamente a la cuenta del usuario y se puede recargar de manera más fácil, una vez asociada y validada la tarjeta en la cuenta, se puede seleccionar como método de pago desde la app, además de contar con promociones exclusivas para miembros recurrentes.

***
## 5. Bocetaje + Prototipo + Feedback de iteración

### Resumen del feedback

En el feedback se sugirió que la función de enmascarado se mostrara en el input / tarjeta para tener cubiertos los datos al momento de ser ingresados por cuestiones de privacidad del usuario.

### Boceto

![Fig 1. Boceto](https://raw.githubusercontent.com/AnnaLizarraga/CardValidation-Spotify/main/src/recursos%20v/Prototipo/Boceto%20card%20validation.JPG)
Fig 1. Boceto

### Prototipo final

![Fig 2. Prototipo pantalla principal](https://raw.githubusercontent.com/AnnaLizarraga/CardValidation-Spotify/main/src/recursos%20v/Prototipo/Principal_Empty.jpg)
Fig 2. Prototipo pantalla principal

![Fig 3. Prototipo pantalla datos ingresados](https://raw.githubusercontent.com/AnnaLizarraga/CardValidation-Spotify/main/src/recursos%20v/Prototipo/Principal_Data.jpg)
Fig 3. Prototipo pantalla datos ingresados

![Fig 4. Prototipo pantalla alerta / hovers / reverso tarjeta](https://github.com/AnnaLizarraga/CardValidation-Spotify/blob/main/src/recursos%20v/Prototipo/Principal_Alerts.jpg)
Fig 4.Prototipo pantalla alerta / hovers / reverso tarjeta