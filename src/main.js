import { App } from '@inertiajs/inertia-svelte'

const el = document.getElementById('app')

new App({
    target: el,
    props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => require(`./Pages/${name}/index.svelte`),
    },
})

export default app

// recreate the whole app if an HMR update touches this module
if (
    import.meta.hot) {
    import.meta.hot.dispose(() => {
        app.$destroy()
    })
    import.meta.hot.accept()
}