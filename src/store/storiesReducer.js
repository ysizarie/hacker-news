import { types } from './types'

const initialState = {
  fetchedStories: {},
  currentStories: [],
  stories: [],
  authors: [],
  perPage: 9,
  page: 1,
  loading: false,
  currentAuthor: -1
}

export const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_STORIES_SUCCESS:
    return {
      ...state,
      stories: [ ...action.payload ]
    }
  case types.FETCH_STORIES:
    return state
  case types.FETCH_PAGE_STORIES:
    return state

  case types.SET_CURRENT_STORIES:
    const storiesIds = action.payload
    return {
      ...state,
      currentStories: storiesIds.map(id => state.fetchedStories[id])
    }

  case types.FETCH_STORY_INFO_SUCCESS:
    return {
      ...state,
      fetchedStories: {
        ...state.fetchedStories,
        [action.payload.id]: action.payload
      }
    }

  case types.FETCH_AUTHOR_INFO_SUCCESS:
    const author = action.payload
    const authors = [ ...state.authors ]
    return {
      ...state,
      authors: [ ...authors.filter(el => el.id !== author.id), author ]
    }
  case types.FETCH_AUTHOR_INFO:
    return state

  case types.SET_CURRENT_AUTHOR:
    return {
      ...state,
      currentAuthor: action.payload
    }

  case types.SET_PAGE:
    return {
      ...state,
      page: action.payload
    }

  case types.SET_LOADER:
    return {
      ...state,
      loading: action.payload
    }
  default:
    return state
  }
}

export const fetchStories = () => ({ type: types.FETCH_STORIES })
export const fetchPageStories = () => ({ type: types.FETCH_PAGE_STORIES })
export const fetchStoriesSuccess = (payload) => ({ type: types.FETCH_STORIES_SUCCESS, payload })

export const fetchStoryInfoSuccess = (payload) => ({ type: types.FETCH_STORY_INFO_SUCCESS, payload })

export const setCurrentStories = (payload) => ({ type: types.SET_CURRENT_STORIES, payload })

export const fetchAuthorInfo = (payload) => ({ type: types.FETCH_AUTHOR_INFO, payload })
export const fetchAuthorInfoSuccess = (payload) => ({ type: types.FETCH_AUTHOR_INFO_SUCCESS, payload })

export const setCurrentAuthor = (payload) => ({ type: types.SET_CURRENT_AUTHOR, payload })

export const setPage = (payload) => ({ type: types.SET_PAGE, payload })

export const setIsLoading = (payload) => ({ type: types.SET_LOADER, payload })
