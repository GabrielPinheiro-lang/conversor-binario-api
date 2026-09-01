const express = require("express");
const validateDecimalParam = require("./validateDecimal");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

const swaggerDocument = YAML.load('./documentacao.yml'); // carrega o arquivo documentacao.yml
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // cria a rota que vai exibir a pagina

app.get("/to-binary/:decimal", validateDecimalParam, (req, res) => {
 const binary = req.decimal.toString(2);
 res.json({ decimal: req.decimal, binary });
});

module.exports = app;