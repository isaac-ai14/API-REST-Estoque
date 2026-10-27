
import { Router } from 'express';

const router = Router();

let data = {
  materials: []
};

// GET /materials
router.get('/', (req, res) => {
  res.json(data);
});

// GET /materials/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const material = data.materials.find(m => m.id === Number(id));

  res.json({ material: material });
});

// POST /materials
router.post('/', (req, res) => {
  const { material } = req.body;

  material.id = data.materials.length + 1;

  data.materials.push(material);

  res.status(201).json({
    material: material
  });
});

// PUT /materials/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { material } = req.body;

  const materialEncontrado = data.materials.find(m => m.id === Number(id));

  materialEncontrado.name = material.name;
  materialEncontrado.qtde = material.qtde;

  res.json({
    material: materialEncontrado
  });
});

// DELETE /materials/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const indice = data.materials.findIndex(m => m.id === Number(id));

  data.materials.splice(indice, 1);

  res.json(data);
});

export default router;
