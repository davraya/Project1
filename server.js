const express = require('express');

app = express();
app.use(express.json()) // t


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



 const HOST = 'localhost';
 const PORT = 8080;

 const contactsRoutes = require('./routes/contacts');


 app.use(contactsRoutes);

 app.listen(PORT, () => console.log(`App runing at ${HOST}:${PORT}`));