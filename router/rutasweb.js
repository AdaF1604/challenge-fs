const express = require ('express');
const router = express.Router();


router.get('/', (req ,res) => {
    res.render("index", {titulo : "Gestion de mis ingresos y egresos"})
});

router.get('/registro',  (req, res) => {
    res.render("registro", {tituloregistro: "Registro de usuarios"})
});

router.get('/crear',  (req, res) => {
    res.render("crear", {titulocrear: "Crear movimientos"})
});

router.get('/views/detalle.ejs',  (req, res) => {
    res.render("detalle", {tituloDetalle: "Detalle del movimiento"})
});







module.exports = router;