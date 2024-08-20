const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Login API',
        version: '1.0.0',
        description: 'Login API Documentation',
      },
      servers: [
        {
          url: 'http://localhost:5010',
        },
      ],
    },
    apis: [path.join(__dirname, './api-docs.js')],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

module.exports = (app) => { app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs)); };