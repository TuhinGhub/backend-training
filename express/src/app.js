// app.js
const express = require('express');
const mockList = require('./mockdata');

const app = express();

// GET API to return the mock list
app.get('/', (req, res) => {
  res.json(mockList);
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
