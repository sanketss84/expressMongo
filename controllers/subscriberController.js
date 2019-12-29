//NOTE : this is a work in progress and not yet integrated with the code

const express = require('express')
const Subscriber = require('../models/subscriber')

// Getting all
// router.get('/', )

exports.getSubscribers = async (req, res) => {
    try {
      const subscribers = await Subscriber.find()
      res.json(subscribers)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
};

// Getting One
// router.get('/:id', getSubscriber, )

exports.getSingleSubscriber = (req, res) => {
    res.json(res.subscriber)
};

// Creating one
// router.post('/', )

exports.addSubscriber = async (req, res) => {
    
    const subscriber = new Subscriber({
      name: req.body.name,
      subscribedToChannel: req.body.subscribedToChannel
    })

    try {
      const newSubscriber = await subscriber.save()
      res.status(201).json(newSubscriber)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
};

