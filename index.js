const express = require('express');
const PORT = 3000
const app = express();
const cors = require('cors');

// middlewares
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log('Server has started at port '+ PORT)
})