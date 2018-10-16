const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/api/getPage', (req, res) => {
  const url = req.body.url;

  fetch(url)
    .then(page => page.text())
    .then(html => {
      res.status(200).json({
        html
      });
    })
    .catch(err => console.log(err));
});

module.exports = router;
