export default ({ app }) => {
    app.router.afterEach((to, from) => {
        app.store.commit('navbar/close');
    })
}