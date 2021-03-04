import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import routes from './router'
import RouterView from './router/RouterView'


function App () {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, i) => (
          <RouterView
            key={i}
            {...route}
          />
        ))}
      </Switch>
    </Router>
  )
}

export default App
