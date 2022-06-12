// Importar Express
const express = require('express');
// Importamos el enrutador de express
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // render manda a renderizar (generar y entregar)

  res.render(
    'about',
    // Este es el View-Model
    {
      name: 'Garcia Tellez Maria Luisa',
      email: 'L181130089@gamadero.tecnm.mx',
      url: '',
    }
  );
});

module.exports = router;
