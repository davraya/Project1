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


module.exports = {
    getJane,
    getContactById,
    getAllContacts
}