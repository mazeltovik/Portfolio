const React = require('react')
const ReactDOM = require ('react-dom')
const ReactRouter = require('react-router')
const History = require('history')

const Home = require('./home.jsx')
const Portfolio = require('./portfolio.jsx')
const Contact = require('./contact.jsx')
const Content = require('./content.jsx')
const {withRouter} = require('react-router')


let { Router,
  Route,
  Link,
  IndexRoute,
} = ReactRouter

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Content} >
      <IndexRoute component={withRouter(Home)}/>
      <Route path="/home" component={withRouter(Home)} />
      <Route path="/portfolio" component={withRouter(Portfolio)}/>
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('content'))