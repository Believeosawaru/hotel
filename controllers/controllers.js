const homeController = (req, res, next) => {
    res.render('home');
}

module.exports = { homeController }