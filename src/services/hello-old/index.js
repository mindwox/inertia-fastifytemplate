'use strict'

module.exports = async function(app, opts) {
    await app.register(require('fastify-express'))
    const html = app.generateHtml;
    app.use(require('inertia-node')(html))

    .get("/", async(req, res) => {
        const middleware = await req.raw
            // console.log(test.Inertia)
        await middleware.Inertia
            .setViewData({ title: "Inertia Page" })
            .shareProps({ username: "ironman" })
            .render({
                component: "HiWorld",
                props: {
                    todos: [
                        { text: "Study Korean", done: false },
                        { text: "Cook Arabic food", done: false },
                    ]
                }
                // JavaScript component on the client will receive
                // {
                //   username: "ironman",
                //   todos: [
                //     { "Study Korean", done: false },
                //     { "Cook Arabic food", done: false },
                //   ]
                // }
            });

    })
}