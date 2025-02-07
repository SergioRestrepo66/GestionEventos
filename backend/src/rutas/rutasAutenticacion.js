const express = require('express')
const controladorautenticacion = require('../controladores/controladorautenticacion')
const router = express.Router()

router.post('/register', controladorautenticacion.register);
router.post('/login', controladorautenticacion.login);

module.exports = router;