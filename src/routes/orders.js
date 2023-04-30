const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    let orders = [
        { id: 1, userId: 1, itemIds: [1, 2], quantity: 2 },
        { id: 2, userId: 2, itemIds: [2, 3], quantity: 3 },
        { id: 3, userId: 3, itemIds: [1], quantity: 1 }
    ];
  res.json(orders);
});

router.get("/:id", (req, res) => {

  let orders = [
    { id: 1, userId: 1, itemIds: [1, 2], quantity: 2 },
    { id: 2, userId: 2, itemIds: [2, 3], quantity: 3 },
    { id: 3, userId: 3, itemIds: [1], quantity: 1 }
  ];

  const order = orders.find(i => i.id === parseInt(req.params.id));
  if (!order) return res.status(404).send('Order not found');
  res.json(order);
});



module.exports = router;
