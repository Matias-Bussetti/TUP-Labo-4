const getPeliculas = (req, res) => {
    res.json({name: 'Controlador de peliculas'});
}

const getEstrenos = (req, res) => {
    res.json({name: 'Controlador de estrenos'});
}

const getPopulares = (req, res) => {
    res.json({name: 'Controlador de populares'});
}

module.exports = {
    getPeliculas,
    getEstrenos,
    getPopulares
}