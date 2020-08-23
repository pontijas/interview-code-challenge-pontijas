const express = require('express');
const app = express();
const port = 5000;

app.get('/phones', (req, res) => {
  res.send('Hello World! this is phones');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
