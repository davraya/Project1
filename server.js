const express = require('express');

app = express();


 const HOST = 'localhost';
 const PORT = 8080;

 const contactsRoutes = require('./routes/contacts');

 app.use(contactsRoutes);

 app.listen(PORT, () => console.log(`App runing at ${HOST}:${PORT}`));