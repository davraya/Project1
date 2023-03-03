const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/getJane', contactsController.getJane);
router.get('/getContactById/:id', contactsController.getContactById);
router.get('/getAllContacts', contactsController.getAllContacts);
router.post('/addContact', contactsController.addContact);
router.put('/updateContact/:id', contactsController.updateContact)
router.delete('/deleteContact/:id', contactsController.deleteContact)

module.exports = router;
