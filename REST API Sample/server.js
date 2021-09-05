const express = require('express');
require("dotenv").config();
const mongoose = require("mongoose");
const decipher = require('./decipher-envs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
decipher.decrypted(process.env.DATABASE_URL).then(conx => {
    //Connect to database
    mongoose
    .connect(conx)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((error) => {
        throw new Error(error);
    });

    //Database Model
    const toDoSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    });

    const ToDo = mongoose.model("ToDo", toDoSchema);

    app.get('/todo/:id', (req, res) => {
        ToDo.findById(req.params.id)
            .lean()
            .then(todo =>{
                res.send(todo);
            }).catch(err=>{
                res.send(err);
            });
    });

    app.get('/todos', (req, res) => {
        ToDo.find({})
            .lean()
            .then(todos =>{
                res.send(todos);
            }).catch(err=>{
                res.send(err);
            });
    });

    app.post('/todo', (req, res) => {
        ToDo.create(req.body)            
            .then(todo =>{
                res.send({status: true, ...todo});
            }).catch(err=>{
                res.send(err);
            });
    });

    app.put('/todo', (req, res) => {
        ToDo.updateOne({_id: req.body.id}, {$set: req.body})            
            .then(successObj =>{
                res.send({status: true});
            }).catch(err=>{
                res.send(err);
            });
    });

    app.delete('/todo', (req, res) => {
        ToDo.findOneAndRemove({_id: req.body.id})            
            .then(successObj =>{
                res.send({status: true});
            }).catch(err=>{
                res.send(err);
            });
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});