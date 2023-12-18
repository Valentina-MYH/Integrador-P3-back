const express = require('express')

const userRouter = require('../routes/userRoutes.js')
const cartRouter = require('../routes/cartRouter.js')
const productRouter = require('../routes/productRouter.js')
const errorRouter = require('../utils/router.js')
const cors = require('cors');
const server = express();


server.use(cors('*'))
server.use(express.json());
server.use(userRouter);
server.use('/api', productRouter);
server.use('/api', cartRouter);
server.use(errorRouter);





module.exports = server;