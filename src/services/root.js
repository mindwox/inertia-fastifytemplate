'use strict'

module.exports = async function(fastify, opts) {
    fastify.get('/home', async function(request, reply) {
        return { root: true }
    })
}