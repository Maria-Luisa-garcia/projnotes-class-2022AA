// URL: Get /
const index = (req, res) => {
  // Calculando emojie
  const emojieDataset = [
    '💻',
    '👨‍💻',
    '🎈',
    '🎄',
    '🦺',
    '🎢',
    '🎁',
    '🚆',
    '🌍',
    '♥',
  ];
  const emojie =
    emojieDataset[Math.floor(Math.random() * emojieDataset.length)];
  // View-Models
  const viewModel = {
    title: 'Index Controller Working!!!',
    author: 'Garcia Tellez Maria Luisa',
    emojie,
  };
  res.render('home/indexView', viewModel);
};

// URL: Get /about
const about = (req, res) => {
  res.render('home/aboutView', {
    name: 'Ing Garcia Tellez Maria Luisa',
    email: 'L181130089@gamadero.tecnm.mx',
    url: 'https://github.com/Maria-Luisa-garcia/projnotes-class-2022AA',
    description:
      'Los servicios que proporciona una farmacia han evolucionado con el tiempo de forma notable. Registro de productos, para la mejora del lugar',
    version: '2022',
  });
};

export default {
  // Action Methods
  index,
  about,
};
