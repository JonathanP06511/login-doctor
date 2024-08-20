const express = require('express');
const router = express.Router();
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { User } = require('../models');


router.get('/:mail/:password', async (req, res) => {
    const { mail, password } = req.params;
  
    try {
      const response = await fetch(`http://localhost:4003/apiencrypt/${mail}/${password}`);
      if (response.ok) {
        const data = await response.json();
        const email = data.mail;
        const pass = data.password;
  
        const user = await User.findOne({
          where: {
            mail: email,
            password: pass
          }
        });
  
        if (user) {
          res.status(201).json(user);
        } else {
          res.status(404).json('Incorrect Email or Password');
        }
      } else {
        res.status(500).json({ error: "Error fetching encrypted data" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;