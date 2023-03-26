const express = require("express")
const itemsRoutes = express.Router();
const fs = require('fs');
const { join } = require("path");
const dataPath = './data/database.json'

const getItemData = () => JSON.parse(fs.readFileSync(dataPath))
const saveItemData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))

itemsRoutes.get('/item', (req, res) => {
    try { res.status(200).send(getItemData()) }
    catch (e) { res.status(500).json(e) }
});
itemsRoutes.get('/item/:id', (req, res, next) => {
    const existItem = getItemData().item
    try {
        existItem[req.params['id'] - 1] === undefined ?
            res.status(400).json({ message: `Item with ${req.params['id']} not found` }) :
            res.status(200).send(existItem[req.params['id'] - 1])
    } catch (e) { res.status(500).json(e) }
})

module.exports = itemsRoutes