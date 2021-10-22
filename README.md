# Curso React Coderhouse

## Descripción

### E-Commerce de raquetas de squash e indumentaria deportiva

Presento una tienda virtual en la que el usuario podrá visualizar los productos ofrecidos, su descripción, precios y podrá realizar todos los pasos hasta concretar su compra exitosamente.

## Uso / Instalación

- Paso 1: tener instalado Node.js 
- Paso 2: instalar aplicación mediante Create-React-App
- Paso 3: Se podrá clonar y descargar desde github.
- Paso 4: escribir "npm start" desde tu terminal.

## Descripción del proyecto
- En el archivo App.jsx de src encontraremos el enrutamiento correspondiente al proyecto mediante el uso de react-router-dom y veremos los principales componentes.
- En la carpeta components tendremos el deglose de cada uno de los componentes nombrados en el punto 1 con su respectiva funcionalidad.

### Página inicial o "home"
- Encontraremos todos los productos disponibles en la página, sin discriminiar categoría. Son todos los productos que trae el componente ItemListContainer(con su ItemList e Item)
### Detalle de producto
- Al clickear en un item o producto en particular, podremos visualizar el detalle del mismo con sus características principales y cantidad que podemos elegir según stock (ItemCount). Encontramos cómo hacer que esto llegue a renderizarse y a tener funcionalidad en el componente ItemDetailContainer(e ItemDetail).
### Carrito (se encontrará escondido en el navbar hasta que se agregue un producto)
- En el detalle del producto tenemos la opción de "Agregar al carrito". Aquí toma protagonismo el componente "context", que nos proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar los accesorios manualmente en todos los niveles. Aquí tenemos cómo eliminar un item, todos los items juntos, cómo agregar productos sin repetir los items y que se sumen las cantidades.
- En el carrito podremos "Confirmar la compra", lo cual nos abrirá un formulario para completar con los datos del comprador. Al completar TODOS los datos podemos darle finalizar y si todo salió OK aparecerá un cartel exitoso con el n° de orden generado automáticamente que nos lo trae la colección de órdenes de firestore database.
### Navbar
- Encargado del enrutamiento sin recargar la página y de almacenar el CartWidget.
### Footer
- Sin funcionalidad importante, se realizó para darle estilo a la web.

## Video descriptivo

https://imgflip.com/gif/5r62zq

## Dependencias

* React
* React-Router-Dom
* React-Hook-Form
* Bootstrap
* React-Bootstrap (inicialmente comencé con bootstrap y luego fui sumando esta librería, ya que en el comienzo del proyecto no la conocía.)
* Firebase

## Gracias a:

* A mi tutor Marcos Lacerenze
* Profesor Horacio Gutiérrez
* Tutor Fernando Giraudo
* ¡Compañeros de cursada!


# fpreactjs
