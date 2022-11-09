const express = require('express');
const router = express.Router();

const horariosController = require('../controllers/horarios.controllers');

router.get('/:tipo', horariosController.getFromTipo);
router.get('/:tipo/:sem/:carr', horariosController.getGroupsCarreer);
router.get('/:tipo/:sem/:carr/:grupo', horariosController.getGroupSchedule);

module.exports = router;