const PORT = process.env.PORT || 8000;

// Dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// routes files
const horariosRoutes = require('./routes/horarios.routes');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use(cors());

// Routes
app.use('/fes-aragon', horariosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});