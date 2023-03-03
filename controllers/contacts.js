const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getJane = (req, res) => {
    res.json('Jane Doe');
}

const getContactById = async (req, res) => {
    const client = await mongodb.getDb();
    const userId = new ObjectId(req.params.id)
    const result = await client.db('people').collection('myContacts').find({_id : userId});

    result.toArray().then((list) =>{
        res.status(200).json(list[0]);
    });
}

const getAllContacts = async (req, res) => {
    const client = await mongodb.getDb();
    const result = await client.db('people').collection('myContacts').find();

    result.toArray().then((list) => {
        res.status(200).json(list);
    });
}

const addContact = async (req, res) => {

    const contact = req.body;

    const client = await mongodb.getDb();
    const response = await client.db('people').collection('myContacts').insertOne(contact);

    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
      }
};

const updateContact = async (req, res) => {
    const contact = req.body;
    const userId = new ObjectId(req.params.id);

    const client = await mongodb.getDb();
    const response  = await client.db('people').collection('myContacts').replaceOne({ _id: userId }, contact);
    if (response.acknowledged) {
        res.status(204).josn(response);  // not sending a status back
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
      }
};

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);

    const client = await mongodb.getDb();
    const response  = await client.db('people').collection('myContacts').deleteOne({ _id: userId });
    if (response.acknowledged) {
        res.status(204).json(response);  // not sending a status back
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the contact.');
      }

};


module.exports = {
    getJane,
    getContactById,
    getAllContacts,
    addContact,
    updateContact,
    deleteContact
}