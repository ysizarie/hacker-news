import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSagaWatcher } from './sagas'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer, compose(
    applyMiddleware(
      saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

saga.run(rootSagaWatcher)

export function getStore () {
  return store
}

export default store
