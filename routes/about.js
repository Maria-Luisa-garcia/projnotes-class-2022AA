// Importar Express
var express = require("express");
// Importamos el enrutador de express
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  // render manda a renderizar (generar y entregar)

  res.render(
    "about",
    // Este es el View-Model
    {
      name: "Maria Luisa",
      email: "garciatellezmarialuisa@gmail.com",
      url: "https://github.com/Maria-Luisa-garcia/projnotes-class-2022AA"
    }
  );
});

module.exports = router;