const express = require('express');

const router = express.Router();

/*

| la paginaa de inico

*/

router.get('/', (req, res) => {
    res.render('index');
});


/*

| REGISTRO

*/

router.get('/registro', (req, res) => {
    res.render('registro');
});

router.post('/registro', (req, res) => {
    const {
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        password
    } = req.body;

    console.log('Nuevo registro:');
    console.log({
        nombre,
        cedula,
        fechaNacimiento,
        correo,
        password
    });

    res.redirect('/login?registro=1');
});


/*

| LOGIN

*/

router.get('/login', (req, res) => {
    const registroExitoso = req.query.registro === '1';

    res.render('login', {
        registroExitoso
    });
});

router.post('/login', (req, res) => {

    const {
        cedula,
        password
    } = req.body;

    console.log('Intento de login:');
    console.log({
        cedula,
        password
    });

    // en este caso d cualquier dato funciona
    res.redirect('/interfaz2');
});


/*

| RECUPERAR CONTRASEÑA
|
*/

router.get('/recuperar', (req, res) => {

    const enviado = req.query.enviado === '1';

    res.render('recuperar', {
        enviado
    });
});

router.post('/recuperar', (req, res) => {

    const {
        correo
    } = req.body;

    console.log(`Solicitud de recuperación para: ${correo}`);

    res.redirect('/recuperar?enviado=1');
});


/*

| ACERCA DE

*/

router.get('/acerca', (req, res) => {
    res.render('acerca');
});


/*

| INTERFAZ PRINCIPAL DEL COLABORADOR
|
*/

router.get('/interfaz2', (req, res) => {

    const trabajoSubido = req.query.subido === '1';

    res.render('interfaz2', {
        trabajoSubido
    });
});


/*

| PERFIL

*/

router.get('/perfil', (req, res) => {
    res.render('perfil');
});


/*

| ÁREA DE TRABAJOS

*/

router.get('/area-trabajos', (req, res) => {
    res.render('area-trabajos');
});


/*

| NUEVO TRABAJO me llevara

*/

router.get('/nuevo-trabajo', (req, res) => {
    res.render('nuevo-trabajo');
});

router.post('/nuevo-trabajo', (req, res) => {

    const {
        numeroTrabajo,
        idConexion,
        area
    } = req.body;

    console.log('Nuevo trabajo recibido:');
    console.log({
        numeroTrabajo,
        idConexion,
        area
    });

    res.redirect('/interfaz2?subido=1');
});




router.get('/impresion', (req, res) => {
    res.render('impresion');
});


module.exports = router;