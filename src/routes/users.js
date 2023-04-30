const express = require('express');
const router = express.Router();
var sanitize = require('../tools/sanitize');

const userService = require('../services').users;

<<<<<<< HEAD
router.get("/", (req, res) => {
  let users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' }
  ];
=======
router.get("/find", async (req, res) => {

  let limit = sanitize.number(req.query.limit) || 100;
  let offset = sanitize.number(req.query.offset) || 0;
  let sort = sanitize.string(req.query.sort) || 'id';
  let order = sanitize.string(req.query.order) || 'asc';
  let filter = sanitize.string(req.query.filter) || '';
  let search = sanitize.string(req.query.search) || '';

  let users = await userService.getUsers(limit, offset, sort, order, filter, search);
  res.json(users);

  
});

router.get("/:id", async (req, res) => {

  let id = sanitize.uuid(req.params.id);
  let users = await userService.getUser(id);
>>>>>>> 26090886288193bcb9f71edeccbd0a08c8b8a583
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
