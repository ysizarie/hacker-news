import {
  Route
} from 'react-router-dom'

export default function RouterView (route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
