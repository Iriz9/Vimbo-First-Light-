
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('🌟 Welcome to Vimbo - First Light! A cozy room for creators everywhere.');
});

app.listen(PORT, () => {
  console.log(`Vimbo server is live on port ${PORT}`);
});
