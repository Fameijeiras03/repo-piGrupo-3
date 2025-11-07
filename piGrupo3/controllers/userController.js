const db = require('../database/models');
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

const userController = {
    viewProfile: function(req, res) {
    let id = req.params.id;
    
    db.User.findByPk(id, {
        include: [{association: "products"}]
    })
    .then(function(usuario){
        return res.render('viewProfiles', {usuario: usuario});
    })
    .catch(function(error){
        return res.send(error);
    })
    },

    register: function(req, res) {
        // Muestra el formulario de registro
        return res.render('register');
    },

    create: function(req, res) {
        // valido el campo del mail este
        if (!req.body.email || req.body.email == '') {
            return res.send('El email es obligatorio');
        }
        
        if (!req.body.contrasena || req.body.contrasena == '') {
            return res.send('La contraseña es obligatoria');
        }
        
        // valido longitud de la clave
        if (req.body.contrasena.length < 3) {
            return res.send('La contraseña debe tener al menos 3 caracteres');
        }
        
        // verifico mail
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function(usuarioEncontrado) {
            if (usuarioEncontrado) {
                // e el mail :)
                return res.send('El email ya está registrado. Por favor usá otro email.');
            }
            
            // hasheo la clave y creo al usuario
            let contrasenaHasheada = bcrypt.hashSync(req.body.contrasena, 10);
            
            db.User.create({
                email: req.body.email,
                nombreUsuario: req.body.usuario,
                contrasena: contrasenaHasheada,
                fotoPerfil: '/images/users/profile-default.png'
            })
            .then(function(usuario) {
                return res.redirect('/users/login');
            })
            .catch(function(error) {
                return res.send(error);
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    showLogin: function(req, res) { 
        //muestro el form de login
        return res.render('login');
    },

    login: function(req, res) { //proceso el form de login
        //recupero datos del formulario
        let infoUser = {
            email: req.body.email,
            contrasena: req.body.contrasena,
            recordame: req.body.recordame,
            nombreUsuario: req.body.nombreUsuario
        };

        //validacion del usuario
        db.User.findOne({
            where: { email: infoUser.email }
        })
        .then(function(user) {
            if (user) {
                //comparo clave del form con la de la bd (booleano)
                let contrasenaOk = bcrypt.compareSync(infoUser.contrasena, user.contrasena);
                if (contrasenaOk) {
                    req.session.user = infoUser; //creo la session
                }
                if (infoUser.recordame) {
                    res.cookie('user', infoUser, { maxAge: 600000 });
                }
                return res.redirect('/');
            }
        })
        .catch(function(error) {
            return res.send(error);
        });

        // return res.render('login');
    },

    logout: function(req, res) {
        req.session.destroy();
        res.clearCookie('user');
        return res.redirect("/");
    },

    profile: function(req, res) {
        let emailUsuario = req.session.user.email;

        db.User.findOne({
            where: { email: emailUsuario },
            include: [
                { association: "products" }
            ]
        })
        .then(function(usuario) {
            return res.render('profile', {
                usuario: usuario,
                productos: usuario.products,
                cantidadProductos: usuario.products.length
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    }

};

module.exports = userController;
