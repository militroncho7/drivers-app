 <img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1586510350/drivers/logo/logo-drivers-degradade_mmpxfr.png" width="130">

### Descripción

---

Descubre el **juego** donde cada jugador se convierte en gestor de su propio equipo de **fórmula 1**, y según las actuaciones de los pilotos en la realidad, los usuarios recibirán una **puntuación**, con la que competirán contra el resto de usuarios.

<img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1590009497/drivers/Drivers-brand_khokdh.png" width="130">

### Guía de usuario

---

Existe un perfil:

- **Usuario no registrado**: Pueden registrarse, crear ligas, buscar competiciones de sus amigos u otros usuarios para poder competir entre los distintos jugadores.
  En un futuro se trabajará en un perfil de Usuario Administrador que tenga la capacidad de control sobre el resto de usuarios con otro rol.

  <img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1590009517/drivers/brand1_newqzt.jpg" width="100%">

### Guía de instalación

---

Se debe diferenciar ente la parte del client o front realizada en REACT y la parte de la api o back donde usamos express.

FLUJO DE LA APP

<img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1590009606/drivers/unnamed_oidrl4.png" width="100%">

#### API

Este proyecto consta de 5 colecciones creadas en MongoDB:

-

-

-

Los package usados de Node son los siguientes:

axios: "^0.19.2",
bcryptjs: "^2.4.3",
body-parser: "^1.18.3"
cloudinary: "^1.21.0",
connect-mongo: "^3.2.0",
cookie-parser: "^1.4.3",
cors: "^2.8.5",
dotenv: "^6.0.0",
esm: "^3.2.25",
express: "^4.16.3",
express-session: "^1.17.0",
lodash: "^4.17.15",
mongoose: "^5.2.10",
morgan: "^1.9.0",
multer: "^1.4.2",
multer-storage-cloudinary: "^2.2.1",
nodemailer: "^6.4.6",
passport: "^0.4.1",
passport-local: "^1.0.0"
Client
La parte front esta realizada en REACT, donde hemos creado la siguiente estructura:

components: Encontramos los distintos componentes que se reutilizan en la web.
context
layauts
lib: Las distintas funcionalidad y la protección de las rutas
pages
services El contacto con la API
styles Realizados con styled-components
Los package usados en esta parte son los siguientes:

@babel/plugin-transform-runtime: "^0.19.2",
aos: "^2.3.4",
axios: "^0.19.2",
parcel: "^1.12.4",
public: "^0.1.5",
react: "^16.13.1",
react-accessible-accordion: "^3.0.1", Para la realización del acordeón de FAQS react-feather*
react-dom: "^16.13.1",
react-feather: "^2.0.4", Fuente de iconos en svg react-feather*
react-hook-form: "^5.2.0", Para el control de los formularios react-hook-form
serve: "^11.3.0",
styled-components: "^5.0.1",
Además encontramos una carpeta public con las distintas imágenes y el reset.css

<img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1590009497/drivers/brand3_fwphnr.png" width="100%">

### Cómo contribuir

---

Toda aportación o comentario será recibido de buen gusto, ya que con ellos se podrá ayudar a crecer tanto la aplicación cómo a mí como desarrollador.

Cualquier mejora será incluida tras una previa revisión a través de un “pull requests”. Se requiere un código ordenado y comentado.

Existen muchas líneas de mejora, algunas de ellas son:

Doble Check delete: Doble seguridad a la hora de eliminar reviews, aid Requests, messages o notifications, a través de un lightbox.
Tamaño imágenes cloudinary: Redimensionar las imágenes muy grandes para optimizar el peso de la web.
Registros: Realizar registros usando Facebook, Gmail o Outlook entre otros. (login social)
Gráficas y medición en control Admin: Creación de distintas gráficas para el control del uso de la web. (Chart.js)
Password: Realizar la doble verificiación en el registro y la posibilidad de cambiarla.
Uusuarios: podrán ponerse en contacto a través de mensajes, que les facilitará la realización de la petición en caso de haber algún problema.

<img src="https://res.cloudinary.com/dhd9jgrw3/image/upload/v1590009518/drivers/brand2_fp9kae.jpg" width="100%">

### Código de conducta

---

En el siguiente enlace se muestra el [Código de Conducta](#).

### Autores

---

[Víctor M. Morales Ruiz](https://www.linkedin.com/in/victormmorales/)

### Licencia

---

Aquí se puede consultar la [Licencia](#) para este repositorio.
