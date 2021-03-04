import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { types } from '../types'
import StoriesModel from '../../models/StoriesModel'
import {
  fetchStoriesSuccess,
  fetchStoryInfoSuccess,
  fetchAuthorInfoSuccess,
  fetchPageStories,
  setIsLoading,
  setCurrentStories, setCurrentAuthor
} from '../storiesReducer'
import {
  selectStoriesByPage,
  selectStoriesIdsByPage
} from '../selectors/stories'

function* fetchStoriesWorker () {
  try {
    yield put(setIsLoading(true))
    const { data } = yield call(StoriesModel.getStories)
    yield put(fetchStoriesSuccess(data))
    yield put(setIsLoading(false))
    yield put(fetchPageStories())
  } catch (e) {
    yield put(setIsLoading(false))
    console.log(e)
  }
}

function* fetchStoriesByPageWorker () {
  try {
    yield put(setIsLoading(true))
    const stories = yield select(selectStoriesByPage)
    for (const story of stories) {
      try {
        if (!story.id) {
          const { data } = yield call(StoriesModel.getStoryInfo, story)
          yield put(fetchStoryInfoSuccess(data))
        }
      } catch (e) {
        console.log(e)
      }
    }
    const currentStories = yield select(selectStoriesIdsByPage)
    yield put(setCurrentStories(currentStories))
  } catch (e) {
    console.log(e)
  }
  yield put(setIsLoading(false))
}

function* fetchAuthorWorker (action) {
  yield put(setIsLoading(true))
  try {
    yield put(setCurrentAuthor(action.payload))
    const { data } = yield call(StoriesModel.getAuthorInfo, action.payload)
    yield put(fetchAuthorInfoSuccess(data))
    yield put(setIsLoading(false))
    yield put(fetchPageStories())
  } catch (e) {
    yield put(setIsLoading(false))
    console.log(e)
  }
}

export function* storySagaWatcher () {
  yield all([
    takeEvery(types.FETCH_STORIES, fetchStoriesWorker),
    takeEvery(types.FETCH_AUTHOR_INFO, fetchAuthorWorker),
    takeEvery(types.FETCH_PAGE_STORIES, fetchStoriesByPageWorker),
  ])
}
