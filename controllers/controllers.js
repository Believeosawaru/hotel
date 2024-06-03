const homeController = (req, res, next) => {
    res.render('home');
}

const notFound = (req, res, next) => {
    res.render('notFound');
}

const signUpController = (req, res, next) => {
    res.render('signUp')
}

const logInController = (req, res, next) => {
    res.render('logIn')
}

module.exports = { 
    homeController, 
    notFound, 
    signUpController,
    logInController
 }