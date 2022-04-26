const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me')

function routes(app){
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)

}

module.exports = routes;

// const newsRouter = require('./news')

// function routes(app){
//     app.use('/news', newsRouter)
// }

// module.exports = routes