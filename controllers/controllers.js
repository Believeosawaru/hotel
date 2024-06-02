const homeController = (req, res, next) => {
    res.render('home');
}

const notFound = (req, res, next) => {
    res.render('notFound');
}

module.exports = { homeController, notFound }