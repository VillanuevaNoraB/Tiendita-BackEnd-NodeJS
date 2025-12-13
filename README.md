Conversación abierta. 1 mensaje no leído.

Ir al contenido
Uso de Gmail con lectores de pantalla
1 de 160
readme
Recibidos

Agustín Marrero
Archivos adjuntos
17:14 (hace 47 minutos)
para mí

Parece que este mensaje está en inglés
hay que adapatarlo, pero si es bastante generico para lo que necesita el curso
 Un archivo adjunto
  •  Analizados por Gmail



# Talentotech Backend API

## 📌 Descripción

Este proyecto corresponde a un **Trabajo Práctico de Back-End** desarrollado como parte del curso **Back-End con Node.js – Talento Tech 2025**, de la *Agencia de Habilidades para el Futuro*.

El objetivo principal del proyecto es **aprender y aplicar buenas prácticas en la construcción de un backend**, comprendiendo la separación de responsabilidades mediante **rutas, controladores, servicios, modelos y middlewares**, así como la integración con una base de datos no relacional y la implementación de autenticación.

El backend está pensado para ser consumido por uno o varios frontends externos.

---

## 🎯 Objetivos del Proyecto

- Comprender la arquitectura de un backend con Node.js y Express
- Implementar autenticación mediante JWT
- Utilizar middlewares para control de acceso
- Conectarse a una base de datos NoSQL (Firebase / Firestore)
- Manejar variables de entorno de forma segura
- Exponer endpoints REST listos para ser consumidos por un frontend

---

## 🛠️ Tecnologías Utilizadas

- **Node.js**
- **Express**
- **CORS**
- **JSON Web Tokens (JWT)**
- **Firebase / Firestore**

---

## 📂 Arquitectura del Proyecto

```bash
src/
├── controllers/
│   ├── auth.controllers.js
│   └── products.controllers.js
│
├── services/
│   ├── auth.services.js
│   └── products.services.js
│
├── models/
│   ├── firebase.js
│   ├── products.models.js
│   └── visitors.models.js
│
├── middleware/
│   └── authentication.js
│
├── routes/
│   ├── auth.routes.js
│   └── products.routes.js
│
├── index.js
└── app.js
```

### 🔹 Descripción de Capas

- **Routes**: definen los endpoints y delegan la lógica
- **Controllers**: orquestan la lógica de negocio
- **Services**: encapsulan la lógica principal
- **Models**: acceso a datos (Firestore)
- **Middleware**: validaciones y autenticación

---

## 🔐 Autenticación

La autenticación se implementa utilizando **JWT (JSON Web Token)**.

- El usuario se autentica mediante email y contraseña
- Si las credenciales son válidas, el servidor devuelve un token
- El token debe enviarse en cada request protegida mediante el header:

```
Authorization: Bearer <token>
```

---

## 📡 Endpoints Principales

### 🔑 Autenticación

- **POST** `/api/visitors/login`
  - Autentica un usuario y devuelve un JWT

### 📦 Productos

- **GET** `/api/products`
  - Devuelve la lista completa de productos
  - Requiere autenticación

---

## 🌐 Consumo desde un Frontend

Ejemplo de consumo desde un frontend externo:

```js
const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

const response = await fetch(`${API_URL}/products`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

const data = await response.json();
console.log(data);
```

---

## ⚙️ Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
JWT_SECRET=your_secret_key

FIREBASE_API_KEY=xxxx
FIREBASE_AUTH_DOMAIN=xxxx
FIREBASE_PROJECT_ID=xxxx
FIREBASE_STORAGE_BUCKET=xxxx
FIREBASE_MESSAGING_SENDER_ID=xxxx
FIREBASE_APP_ID=xxxx
```

---

## ▶️ Instalación y Ejecución

```bash
npm install
npm run dev
```

El servidor quedará disponible en:

```
http://localhost:3000
```

---

## 📈 Escalabilidad

El proyecto está diseñado para escalar fácilmente incorporando nuevas entidades como:

- Clientes
- Proveedores
- Órdenes de compra
- Ventas

Manteniendo siempre la separación por capas.

---

## 👩‍💻 Autora

**Nora Villanueva**  
GitHub: [NoraV](https://github.com/VillanuevaNoraB)

---

## 🙏 Agradecimientos

- **Nicolás Riquelme**  
- **Ana Belén Zambón**

Por el acompañamiento y la enseñanza durante el curso.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **ISC**, permitiendo su uso, modificación y distribución con mención de la autora.

readme_talentotech_backend.md
Mostrando readme_talentotech_backend.md.