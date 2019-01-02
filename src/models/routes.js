// ./models/routes.js

const routes = {
  routes: {},
  addVnodeRoute: (key, value) => {
    routes.routes[key] = {view: () => value} // IMPORTANT Detail
    // https://mithril.js.org/route.html
  },
  addComponentRoute: (key, value) => {
    routes.routes[key] = value
  }
}

module.exports = routes;
