import { all, fork } from 'redux-saga/effects'
import {
  storySagaWatcher
} from './storySagas'

export function* rootSagaWatcher () {
  yield all([
    fork(storySagaWatcher)
  ])
}
