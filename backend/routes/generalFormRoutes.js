const expres = require('express');
const router = expres.Router();
const generalFormController = require('../controllers/generalFormController');

router.get('/', generalFormController.getFormData);
router.post('/add', generalFormController.addFormData);

module.exports = router;
