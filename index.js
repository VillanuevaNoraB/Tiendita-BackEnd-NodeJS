import express from "express";
import cors from "cors";
import rutasProductos from "./src/routes/products.routes.js";
import path from "path";
import { fileURLToPath } from "url";
import { swaggerSpec } from "./src/swagger.js";
import swaggerUi from "swagger-ui-express";
import user_routes from "./src/routes/user.routes.js";
import { requireAuth } from "./src/middleware/authentications.js";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const app = express();

const PORT = process.env.PORT || 3000;
const corsConfig = {
  origin: ["http://localhost:3000", "https://midominio.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Length"],
  credentials: true,
  maxAge: 600,
  optionsSuccessStatus: 204,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src/public/")));
app.use(express.static("public"));
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
app.get("/", (req, res) => {
  res.redirect("index");
});
app.use("/api/user", user_routes);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// app.use((req, res, next) => {
//   console.log(`Datos received at:  ${req.method} ${req.url}`);
//   next();
// });

app.use("/api", requireAuth, rutasProductos);

app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado o ruta inválida");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
