function getHello(req, res) {
    res.status(200).send({"msg": "Hello World from controllers!"});
}

module.exports = {
    getHello
}