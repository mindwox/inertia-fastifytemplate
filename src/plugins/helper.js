'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function(app, opts) {
    app.decorateReply('sendHtml', function(html) {
        this.type('text/html') // This is the 'Reply' object
        this.send(app.generateHtml())
    })
})