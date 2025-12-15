import swaggerJsDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

/**
 * @swagger
 * components:
 *
 *   schemas:
 *     Products:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *         - precio
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre de Producto
 *         descripcion:
 *           type: string
 *           description: Descripcion del Producto
 *         precio:
 *           type: number
 *           format: float
 *           description: Precio del Producto
 *       example:
 *         nombre: "Galletitas Sonrisas"
 *         descripcion: "Paquete de galletitas Sonrisas Bagley x 180gr"
 *         precio: 1150
 *
 * @swagger
 *  tags:
 *    - name: Products
 */

export const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tiendita - Back-End - NodeJS",
      version: "1.0.0",
      description: "TP de Back-end",
    },
    components: {
      // securitySchemes: {
      //   bearerAuth: {
      //     type: "http",
      //     scheme: "bearer",
      //     bearerFormat: "JWT",
      //   },
      // },
    },
    // security: [{ bearerAuth: [] }],
  },
  apis: [
    path.join(__dirname, "routes/*.js"),
    path.join(__dirname, "routes/*.ts"),
    path.join(__dirname, "swagger.js"),
  ],
});

//  * components:
//  *   securitySchemes:
//  *     bearerAuth:
//  *       type: http
//  *       scheme: bearer
//  *       bearerFormat: JWT
