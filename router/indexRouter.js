const
    express = require('express'),
    indexRouter = express.Router(),
    userRouter = require('./userRouter'),
    addressRouter = require('./addressRouter'),
    categoryRouter = require('./categoryRouter'),
    productRouter = require('./productRouter'),
    paymentRouter = require('./paymentRouter'),
    orderRouter = require('./orderRouter')

// ================ Router Collection ================

indexRouter.use('/users', userRouter)
indexRouter.use('/addresses', addressRouter)
indexRouter.use('/products', productRouter)
indexRouter.use('/orders', orderRouter)
indexRouter.use('/categories', categoryRouter)
indexRouter.use('/payments', paymentRouter)


module.exports = indexRouter