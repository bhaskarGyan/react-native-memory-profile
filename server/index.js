const express = require('express');
const app = express();
const port = 3000;
const data = require('./data');

app.get('/', (req, res) => {
  var page = req.query.page || 0;

  var response = data.slice(page * 100, page * 100 + 100);

  res.send(response);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
