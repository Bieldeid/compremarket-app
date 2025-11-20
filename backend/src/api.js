const express = require('express');
const jwt = require('jsonwebtoken');
const compremarketRoutes = require('./router.js');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}));

app.use('/compremarket', compremarketRoutes)

const port = process.env.PORT || 3636;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
