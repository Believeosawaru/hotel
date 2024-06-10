const homeController = (req, res, next) => {
    res.render('home');
}

const notFound = (req, res, next) => {
    res.render('notFound');
}

const signUpController = (req, res, next) => {
    res.render('signUp');
}

const logInController = (req, res, next) => {
    res.render('logIn');
}

const bookingsController = (req, res, next) => {
    res.render('bookings');
}

const reservationsController = (req, res, next) => {
    res.render('reservations');
}

const profileController = (req, res, next) => {
    res.render('profile');
}

const paymentController = (req, res, next) => {
    res.render('payment');
}

const settingsController = (req, res, next) => {
    res.render('settings');
}

module.exports = { 
    homeController, 
    notFound, 
    signUpController,
    logInController,
    bookingsController,
    reservationsController,
    profileController,
    paymentController,
    settingsController
}