class IndexController {
    index() {
        return function(req, res) {
            res.render('views/menu');
        }
    }
    error() {
        return function(req, res) {
            res.render('views/mesas');
        }
    }

}

module.exports = IndexController;