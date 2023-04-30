const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
  let users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' }
  ];
  res.json(users);
});

router.get("/:id", (req, res) => {
  // get items from table where id = req.params.id
  // if no item return "no item available"
  // return item

  let users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' }
  ];

  const user = users.find(i => i.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});


module.exports = router;
