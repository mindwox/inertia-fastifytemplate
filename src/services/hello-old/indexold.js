'use strict'
const html = (page, viewData) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    
    <!-- Custom data -->
    <title>${viewData.title}</title>
 
    <!-- Your React, Vue or Svelte SPA -->
    <!-- <link rel="stylesheet" href="/build/bundle.css" /> -->
    <!-- <script defer type="module" src="/build/main.js"></script> -->
  </head>
 
  <!-- The Inertia page object -->
  <body id="app" data-page='${JSON.stringify(page)}'> <h1> Welcome from /tested </h1></body>
</html>
`

module.exports = async function(app, opts) {
    await app.register(require('fastify-express'))
    app.use(require('inertia-node')(html))

    .get("/tested", async(req, res) => {
        const middleware = await req.raw
            // console.log(test.Inertia)
        await middleware.Inertia
            .setViewData({ title: "Inertia Page" })
            .shareProps({ username: "ironman" })
            .render({
                component: "Todos",
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