const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec, setupSwagger } = require('./swaggerConfig');

const app = express();
const port = 3000;

app.use(bodyParser.json());


setupSwagger(app, swaggerUi, swaggerSpec);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Operações relacionadas a tarefas
 */

/**
 * @swagger
 * definitions:
 *   Task:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *         description: ID da tarefa
 *       description:
 *         type: string
 *         description: Descrição da tarefa
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar uma nova tarefa
 *     tags: [Tasks]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Task'
 *     responses:
 *       200:
 *         description: Tarefa criada com sucesso
 */


app.post('/tasks', (req, res) => {
      res.json({ message: 'Tarefa criada com sucesso' });
});

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obter todas as tarefas em aberto
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tarefas em aberto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Task'
 */
app.get('/tasks', (req, res) => {
  res.json({ tasks: [] });
});

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualizar uma tarefa existente
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser atualizada
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Task'
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 */
app.put('/tasks/:id', (req, res) => {

    res.json({ message: 'Tarefa atualizada com sucesso' });
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Excluir uma tarefa
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa a ser excluída
 *     responses:
 *       200:
 *         description: Tarefa excluída com sucesso
 */
app.delete('/tasks/:id', (req, res) => {

    res.json({ message: 'Tarefa excluída com sucesso' });
});
