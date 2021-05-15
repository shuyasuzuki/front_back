const express = require('express');
const app = express();

require('dotenv').config();
app.set('view engine', 'ejs');
app.use('/api/', require('./routes/hello'))
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`listening on Port: ${PORT}`);
});