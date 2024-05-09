
const express = require('express');
const mockList = require('./mockdata');
const app = express();
app.get('/', (req, res) => {
  res.json(mockList);
});
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
