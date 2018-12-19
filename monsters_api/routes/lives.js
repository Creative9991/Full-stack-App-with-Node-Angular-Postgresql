const { Router } = require('express');
const pool = require('../db');
const cors = require('cors');
const router = Router();
const configurationOptions = {
  origin : 'http://localhost:4200',
  maxAge : 3600
}
router.get('/', cors(configurationOptions), (request, response, next) => {
  pool.query('SELECT * FROM lives', (err, res) => {
    if (err) return next(err);

    response.json(res.rows);
  });
});

router.get('/conditions', (request, response, next) => {
  pool.query(
    'SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitats',
    (err, res) => {
      if (err) return next(err);

      response.json(res.rows);
    }
  )
});

module.exports = router;