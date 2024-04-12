const
    express = require('express'),
    userRouter = express.Router(),
    passport = require('passport'),
    Auth = require('../lib/auth.js'),
    upload = require('../lib/multer.js'),
    { UserController } = require('../controller/userController.js');

userRouter
    .post('/register', upload.single('avatar'), UserController.registerUser)
    .post('/admin/register', upload.single('avatar'), UserController.registerAdmin)
    .post('/login', UserController.login)
    .get('/verify/:id', UserController.verifyUser)

userRouter.use(passport.initialize(), Auth.authentication)

userRouter
    .get('/profile', UserController.getUser)
    .put('/profile', upload.single('avatar'), UserController.editUser)
    .delete('/', UserController.deleteUser)
    .delete('/image', UserController.deleteAvatar)

module.exports = userRouter