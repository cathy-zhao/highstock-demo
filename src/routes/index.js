export const createRoutes = (store) => ({
    path        : '/',
    getComponent (nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../layouts/PageLayout/PageLayout').default)
        })
    },
    getIndexRoute (location, callback) {
        require.ensure([], function (require) {
            callback(null, require('./Main').default)
        })
    }
})

export default createRoutes
