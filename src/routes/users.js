const express = require('express');

const router = express.Router();


router.get("/:id", (req, res) => {
  let users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' }
  ];
  res.json(users);
});


module.exports = router;
