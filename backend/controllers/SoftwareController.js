const express = require('express');
const router = express.Router();

async function getSoftware(req, res) {
  try {
    const software = await Software.findById(req.params.id).populate('dept');
    if (!software) {
      return res.status(404).json({ error: 'Software not found' });
    }
    res.json(software);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getAllSoftware(req, res) {
  try {
    const software = await Software.find().populate('dept', 'status');
    res.json(software);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function getDeptSoftware(req, res) {
  try {
    const software = await Software.find({ dept: req.params.deptId }).populate('dept');
    res.json(software);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}   

router.get('/:id', getSoftware);
router.get('/', getAllSoftware);
router.get('/dept/:deptId', getDeptSoftware);

module.exports = router;