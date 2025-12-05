const express = require("express");
const app = express();
const PORT = 3001;
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/pages'));
app.use(express.static(path.join(__dirname, '../frontend')));

// Rotas
const EnviarEmail = require("./routes/EnviarEmail");

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Página inicial
app.get("/", (req, res) => {
    console.log("Rodou")
});
//
// Endpoint de email
app.use("/MandarEmail", EnviarEmail);

app.listen(PORT, () => {
    console.log("Aplicação rodando na porta " + PORT);
});
