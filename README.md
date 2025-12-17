# TODOList

Este proyecto utiliza Vite como herramienta de construcción rápida para una aplicación de React con TypeScript. prueba



> [!IMPORTANT]
> 
> ## Requisitos previos
> Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo e instalarlo desde [nodejs.org](nodejs.org).
> ## Instalación
> Para comenzar con el proyecto, sigue estos pasos:
> 1. Clona este repositorio en tu máquina local.
> 2. Navega al directorio del proyecto.
> 3. Instala las dependencias necesarias ejecutando el siguiente comando:
> #### npm install
> ## Ejecutar el proyecto
> Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo con el siguiente comando:
> #### npm run dev

</br>

> [!NOTE]
> Para comprobar los endpoints a utilizar y sus contratos se usó el propio Swagger de la API

</br>


> [!NOTE]
> ## Funcionalidad implementada
> El usuario tiene la opción de iniciar sesión si ya posee una cuenta o de registrarse mediante la opción de signup si aún no está registrado. Tras completar el registro, el usuario es redirigido automáticamente  a la página de inicio de sesión.
>
> Una vez que el usuario ha iniciado sesión, puede visualizar el nombre de usuario con el que está conectado y tiene la opción de cerrar sesión. Estas funcionalidades se encuentran disponibles en el encabezado (header) de la aplicación.
>
> La aplicación presenta una lista de tareas agrupadas por estatus, organizada en tres pestañas distintas que separan las tareas en función de su estado. Se ha incluido una opción que permite filtrar las tareas  para mostrar únicamente aquellas que han sido creadas por el usuario actualmente conectado.
>
> Al seleccionar una tarea, el usuario puede acceder a sus detalles y realizar modificaciones en el nombre, la descripción y el estado de la tarea. También es posible añadir nuevas tareas proporcionando un nombre  y una descripción. Por defecto, todas las nuevas tareas se crean en el estado "Not Started".

</br>


> [!NOTE]
> ## Posibles mejoras de la aplicación
>
> - Estados de Tareas Dinámicos: Ahora mismo, los estados de las tareas están fijos en el código. Sería útil hacer que se obtengan desde la API para que los cambios, como la adición de nuevos estados, se reflejen  automáticamente y todas las tareas se muestren correctamente según su estado.
>
> - Mejora en la Usabilidad: En lugar de usar alertas informativas, podríamos optar por mensajes emergentes (popups) que se cierren automáticamente después de unos segundos. Esto haría la interfaz más amigable y  menos intrusiva.
>
> - Flexibilidad en la Creación de Tareas: Dejar que los usuarios creen nuevas tareas en cualquier estado ofrecería más flexibilidad. Así, podrían gestionar sus tareas de manera más libre y eficiente.
>
> - Mejor Manejo de Errores: Implementar un control más detallado de los errores al interactuar con la API sería muy útil. Esto incluiría validar todas las posibles respuestas de la API y mostrar o registrar los  errores de forma que los usuarios tengan información clara sobre lo que ha fallado.
>
> - Código Más Legible: Para hacer el código más fácil de entender y mantener, se podrían dividir más los archivos en componentes más pequeños. También sería bueno usar @mixin para los estilos, de manera que se   puedan reutilizar más fácilmente.
>
> Optimización de Estilos: Debido a la falta de tiempo, la optimización de los estilos no está completa. Sería ideal dividir los estilos en partes más específicas y usar @mixin para facilitar su reutilización y   mantener el código de estilos organizado.
>
> Estas mejoras están pensadas para hacer que la aplicación sea más eficiente, fácil de usar y más fácil de mantener.

> [!TIP]
> No se ha podido implementar pruebas unitarias por falta de tiempo. Se deberían incluir para asegurar el correcto funcionamiento de funcionalidades.
> Algunos test podrían ser:
> - Filtrar lista de tareas por usuario.
> - Mostrar detalles de una tarea.
> - Crear una nueva tarea.
> - Editar una tarea.
 
