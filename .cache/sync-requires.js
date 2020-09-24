const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jimmy/Documents/code/react-app/new_star/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jimmy/Documents/code/react-app/new_star/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jimmy/Documents/code/react-app/new_star/src/pages/index.js"))),
  "component---src-pages-products-payments-js": hot(preferDefault(require("/Users/jimmy/Documents/code/react-app/new_star/src/pages/products/payments.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/jimmy/Documents/code/react-app/new_star/src/pages/projects.js")))
}

