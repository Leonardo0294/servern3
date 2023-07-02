// Imports
const cors = require("cors");
const helmet = require("cors");
const morgan = require("cors");
const express = require("express");
require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

// Middlewares

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// TODO: Implementar middlewares

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.get("*", function (req, res) {
  res.status(404).send("error 404 no se ha encontrado la ruta indicada");
});
app.listen(port, () => {
  console.log(`server en port ${port}`);
});
