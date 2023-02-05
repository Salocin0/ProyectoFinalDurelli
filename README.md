# DOCUMENTACIÓN    

* Descripción de la aplicación
    -

        Esta aplicación es un e-commerce desarrollado en React que ofrece una búsqueda general de productos en Firebase, la posibilidad de buscar por catálogos definidos, ver los detalles de cada producto (incluyendo foto, título, descripción y precio) y seleccionar la cantidad deseada para agregar al carrito (sin exceder el stock disponible). Al ver el carrito, se pueden ver todos los productos agregados con su foto, título, precio por unidad, cantidad seleccionada y subtotal. Al final del carrito, se muestra el total y un botón para continuar con el pago. Al seleccionar este botón, se redirige a otra ventana donde se encuentra una lista de los productos con el total y un formulario para completar con los datos del comprador. Una vez que se confirma la compra, se guarda en el sistema y se proporciona un código de compra, permitiendo regresar al inicio.

* Uso e Instalacion
    -
    Para instalar la aplicación, siga los siguientes pasos en su terminal

        ```
        > git clone https://github.com/Salocin0/ProyectoFinalDurelli.git

        > npm install

        > npm start
        ```

* Tecnologias usadas
    -
    
    * Fortawesome: se utiliza fortawesome para las los logos de la aplicacion, como los logos de + y - en el detalle de cada item


    * React: es una herramienta que nos permite mantener un control sobre el estado y los efectos de la aplicación.

    * Bootstrap y React-bootstrap: Bootstrap es un framework de diseño web que proporciona componentes predefinidos y estilos para facilitar la creación de aplicaciones web modernas y responsivas. React Bootstrap es una versión de Bootstrap diseñada para ser utilizada con React. en esta aplicacion todos los botones, inputs, y otros componentes basicos son sacados de React-bootstrap

    * Firebase: Firebase es una plataforma que ofrece una serie de herramientas y servicios, en este caso se uso su base de datos, la dependencia de Firebase en este proyecto se uso para conectarse a dicha base de datos.
    
    * React-dom: es una biblioteca que se usa para permitir la representación de componentes de React en el DOM. renderiza los componentes de React en el navegador.

    * React-router-dom: es una dependencia que permite implementar el enrutamiento en aplicaciones web construidas con React. Se utilizaron componentes como Route, Link, y BrowserRouter que se utilizan para definir las rutas de la aplicación y controlar la visualización de diferentes componentes en función de la URL actual.

    * React-scripts: Provee un conjunto de scripts y configuraciones preestablecidas. Incluye tareas como la compilación, pruebas unitarias, optimización de recursos, y despliegue en producción

    * React-toastify: se usa para mostrar todas notificaciones de la aplicación. permite mostrar mensajes de todo tipo (exito, error, informativo, etc).

    * Web-vitals: es un conjunto de métricas que miden la experiencia del usuario en la web.
* Deploy
    -
    [La aplicacion esta desplegada aqui](https://proyectofinaldurelli-ia9rat73a-salocin0.vercel.app/)