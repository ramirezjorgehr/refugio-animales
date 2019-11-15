const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8090;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var mascotas = [
    { id: 1, nombre: "pepe trueno", tipo: "gato", edad: 3, descripcion: "gruñon y juguetón", imagen: "https://estag.fimagenes.com/img/3/3/T/l/B/3TlB_900.png" },
    { id: 2, nombre: "chispita", tipo: "perro", edad: 5, descripcion: "se comporta muy bien", imagen: "https://www.infoanimales.com/wp-content/uploads/2011/12/perros-2.jpg" },
    { id: 3, nombre: "rafael", tipo: "tortuga", edad: 2, descripcion: "le encanta la lechuga y pasear por la casa (si, también le gusta la pizza)", imagen: "https://misanimales.com/wp-content/uploads/2017/10/edad-de-una-tortuga.jpg" },
    { id: 4, nombre: "yogui", tipo: "perro", edad: 1, descripcion: "super activo, le gusta correr mucho", imagen: "https://www.fmdos.cl/wp-content/uploads/2018/05/perros-1024x612.jpg" },
    { id: 5, nombre: "piolin", tipo: "guacamaya", edad: 3, descripcion: "muy colorida, come frutas y ¡habla!", imagen: "https://img.point.pet/images/GettyImages-634869043-58a6e83f5f9b58a3c918ca12.jpg" }
];

app.post('/mascotas', function(req, res) {
    let mascota = req.body;
    let ids = mascotas.map(elt => elt.id);
    mascota.id = Math.max(...ids) + 1;
    mascotas.push(mascota);
    res.status(201).json(mascota);
});

app.get('/mascotas', function(req, res) {
    res.status(200).json(mascotas);
});

app.get('/mascotas/:id', function(req, res) {
    res.status(200).json(mascotas.find(elt => elt.id == req.params.id));
});

app.put('/mascotas', function(req, res) {
    let index = mascotas.findIndex(elt => elt.id == req.body.id);
    if (index >= 0)
        mascotas[index] = req.body;
    res.status(200).send();
});

app.delete('/mascotas/:id', function(req, res) {
    let index = mascotas.findIndex(elt => elt.id == req.params.id);
    if (index >= 0)
        mascotas.splice(index, 1);
    res.status(200).send();
});

app.listen(port, () => {
    console.log("El servidor está inicializado en el puerto " + port);
});