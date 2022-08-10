const {Router} = require('express');
const userController = require('../controllers/userController');
const router = Router();


router.get('/', userController.getAllUsers);
router.post('/', userController.addUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.removeUser);
router.put('/:id', userController.updateUser);




module.exports = router;