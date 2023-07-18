const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics for added todos */
router.get('/statistics', async (req, res) => {
  const todoStat = await getAsync('ADDEDTODOS');
  const statistics = {
    added_todos: todoStat
  };
  console.log(todoStat);
  res.send(statistics);
})

module.exports = router;
