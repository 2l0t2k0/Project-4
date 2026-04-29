const express = require('express');
const router = express.Router();

async function getDept(req, res) {
  try {
    const dept = await Dept.findById(req.params.id);
    if (!dept) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json(dept);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getAllDepts(req, res) {
  try {
    const depts = await Dept.find();
    res.json(depts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function EditDept(req, res) {
  try {
    const dept = await Dept.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
    }, { new: true });
    if (!dept) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json(dept);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function DeleteDept(req, res) {
  try {
    const dept = await Dept.findByIdAndDelete(req.params.id);
    if (!dept) {
      return res.status(404).json({ error: 'Department not found' });
    }
    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

router.get('/:id', getDept);
router.get('/', getAllDepts);
router.put('/:id', EditDept);
router.delete('/:id', DeleteDept);

router.get('/:id', getDept);
router.get('/', getAllDepts);

module.exports = router;