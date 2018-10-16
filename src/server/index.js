const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse incoming JSON
app.use(bodyParser.json());

// Enable CORS
require('./cors')(app);

// Setup routes
app.use('/', require('./routes'));

// Serve dist directory as homepage
app.use(express.static('dist'));

// Listen on port 8080
app.listen(8080, () => console.log('Listening on port 8080!'));
