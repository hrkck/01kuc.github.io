// ./models/routes.js
// You can add a Vnode or a Component using the functions
// A Vnode must be converted to a Component

const routes = {
  routes: {},
  addVnodeRoute: (key, value) => routes.routes[key] = {view: () => value},
  addComponentRoute: (key, value) => routes.routes[key] = value
}

module.exports = routes;

// References:
// https://mithril.js.org/route.html
