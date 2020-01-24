const express = require('express');

const AuthRouter = require('./auth/auth-router.js');

const RegisterRouter = require('./register/register-router.js');

const UsersRouter = require('./users/users-router.js');

const server = express();



server.use(express.json());


server.use('/api/register', RegisterRouter);

server.use('/api/login', AuthRouter);

server.use('/api/users', UsersRouter);

module.exports = server;