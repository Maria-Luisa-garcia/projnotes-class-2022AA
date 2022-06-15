/* Actions Methods */

// Lista los proyectos
// GET /projects | GET /projects/index
const index = (req, res) => {
  res.send('📃 Listando Proyectos Nuevos 📄');
  // TODO: Agregar codigo de listado de proyectos
};

// Agrega ideas de proyectos
// GET /projects/add
const add = (req, res) => {
  res.send('Agregar nuevos productos');
  // TODO: Agregar codigo para agregar proyectos
};

// Exportando el controlador
export default {
  index,
  add,
};
