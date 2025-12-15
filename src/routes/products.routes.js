import express from "express";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getProductById,
} from "../controllers/products.controllers.js";

const routes = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retorna todos los productos.
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 */
routes.get("/products", getAllProducts);
//  *     summary: Retorna todos los productos.
//  *     security:
//  *       - bearerAuth: []

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Retorna productos por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Productos por ID
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       404:
 *         description: Producto no encontrado
 */
routes.get("/products/:id", getProductById);

/**
 * @swagger
 * /api/products/create:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *             example: { nombre: "Galletitas Sonrisas", descripcion: "Paquete de galletitas Sonrisas Bagley x 180gr", precio: 1150}
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: Peticion erronea
 */
routes.post("/products/create", addProduct);

//  *     summary: Crear un nuevo producto
//  *     security:
//  *       - bearerAuth: []



/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Editar un producto por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Products'
 *             example: { nombre: "Galletitas Sonrisas", descripcion: "Paquete de galletitas Sonrisas Bagley x 180gr", precio: 1150}
 *     responses:
 *       201:
 *         description: Producto editado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               example: { nombre: "Galletitas Sonrisas", descripcion: "Paquete de galletitas Sonrisas Bagley x 180gr", precio: 1150}
 *               $ref: '#/components/schemas/Products'
 *       400:
 *         description: Peticion erronea
 */
routes.put("/products/:id", editProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar producto por ID
 *     security:
 *       - bearerAuth: []
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
routes.delete("/products/:id", deleteProduct);

export default routes;
