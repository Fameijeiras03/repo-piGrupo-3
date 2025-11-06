const db = require('../database/models')
const bcrypt = require('bcryptjs');
const op = db.Sequelize.Op;

const userController = {

    
    register: function(req, res) {
        // Muestra el formulario de registro
        return res.render('register');
    },

    create: function(req, res) { //procesa el form de registro
        // Encripta la contraseña antes de guardar
        let contrasenaEncriptada = bcrypt.hashSync(req.body.contrasena, 10);

        db.User.create({
            nombreUsuario: req.body.nombreUsuario,
            email: req.body.email,
            contrasena: contrasenaEncriptada,
        })
        .then(function() {
            // Si se crea correctamente, redirige al home
            return res.redirect('/');
        })
        .catch(function(error) {
            console.log(error);
            return res.send('Hubo un error al registrar el usuario');
        });
    },

    showLogin: function(req, res){ 
        //muestro el form de login
        return  res.render('login');
    },

    login: function(req, res){ //proceso el form de login
        //recupero datos del formulario
        let infoUser = {
            email: req.body.email,
            contrasena: req.body.contrasena,
            recordame: req.body.recordame,
            nombreUsuario: req.body.nombreUsuario
        };

        //validacion del usuario
        db.User.findOne({
            where: {email: infoUser.email}
        })
        .then(function(user){
            if(user){
                //comparo clave del form con la de la bd (booleano)
                let contrasenaOk = bcrypt.compareSync(infoUser.contrasena, user.contrasena);
                if(contrasenaOk){
                    req.session.user = infoUser; //creo la session
                }
                if (infoUser.recordame){
                    res.cookie('user', infoUser, {maxAge: 600000})
                }
                return res.redirect('/');
        }})
        .catch(function(error){
            return res.send(error);
        })


       // return res.render('login');
    },
    logout: function(req,res){
        return res.render('logout')
    }
}


module.exports = userController