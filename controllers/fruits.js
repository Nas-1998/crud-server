const Fruit = require('../models/Fruits')


const index = async (req, res) => 
    {
    //showAll
        try
        {
            const fruits = await Fruit.showAll() 
            res.status(200).send(fruits)
        }
        catch(err)
        {
            res.status(404).send({error:err})
        }
    }


const show = async (req, res) => {
    // req.params
    const name = req.params.name.toLowerCase()

    // if exists we want to send it back to the client
    try
    {
        const fruit = await Fruit.show(name)
        res.status(200).send(fruit)
    }
    catch(err)
    {
        res.status(400).send({error: err})
    }
  
    // consider dealing with capital letters vs no captial letters in the user input
    // check if the fruit exists in the data
  
   
  
// if it doesnt exist we want to send an error
}

const create = async (req, res) => 
    {
        const data = req.body
        try
        {
            // 1. call method from model
            const newFruit = await Fruit.create(data)
            // 2. send response with status code for successful creation and new element thats created
            res.status(201).send(newFruit)
        }
        catch(err)
        {
            //status code means conflict in creation
            res.status(409).send({error:err})
        }
    }

const update = async (req, res) => 
    {
        const data = req.body
        const name = req.params.name.toLowerCase()

        try
        {
            // retrieving th specifc fruit we are trying to update
            const fruit = await Fruit.show(name)
            //fruit.update()
            const updatedFruit = fruit.update(data)
            res.status(200).send(updatedFruit)
        }
        catch(err)
        {
            res.status(409).send({error:err})
        }
    }

    const destroy = async (req, res) => {
        const name = req.params.name.toLowerCase();
    
        try {
          const fruit = await Fruit.show(name);
          const result = await fruit.destroy();
    
          res.sendStatus(204)
        } catch (err) {
          res.status(404).send({ error: err});
        }
}

module.exports = {index, show, create, update, destroy}