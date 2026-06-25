// Main Controller
// Se renderiza plantilla de la ruta llamada.
module.exports.home = (req, res) => {
    res.render('index', { title: 'The MEAN Stack Agency' });
}

module.exports.about = (req, res) => {
    res.render('about', {title: 'About'});
}

module.exports.contact = (req, res) => {
    res.render('contact', {title: 'Contact'});
}

module.exports.login = (req, res) => {
    res.render('login', {title: 'Login'});
}

module.exports.register = (req, res) => {
    res.render('register', {title: 'Register'});
}

module.exports.forgotpassword = (req, res) => {
    res.render('forgot-password', {title: 'Password'});
}