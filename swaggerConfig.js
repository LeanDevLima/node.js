const swaggerJsdoc = require('swagger-jsdoc');

/**
 * Configuração do Swagger
 */
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description: 'API para gerenciamento de tarefas',
    },
  },
  apis: ['index.js'], // Arquivo que contém as rotas
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

/**
 * Configuração do Swagger na aplicação Express
 * @param {express.Application} app - Aplicação Express
 * @param {Function} swaggerUi - Função do swagger-ui-express
 * @param {object} spec - Especificação Swagger gerada
 */
const setupSwagger = (app, swaggerUi, spec) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
};

module.exports = { swaggerSpec, setupSwagger };
