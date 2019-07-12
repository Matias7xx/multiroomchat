module.exports.home = (application, req, res) => { //Entrega a view renderizada para quem fez a REQ
    res.render("index", { validacao: {} })
}