const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.sendFile(path.join(__dirname, `${page}.html`));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);

});