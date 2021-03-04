export const selectStories = (state) => state.stories.stories
export const selectFetchedStories = (state) => state.stories.fetchedStories

export const selectPerPage = (state) => state.stories.perPage

export const selectPage = (state) => state.stories.page

export const selectCurrentAuthorId = (state) => state.stories.currentAuthor

export const selectCurrentAuthor = (state) => state.stories.authors.find(el => el.id === selectCurrentAuthorId(state))
export const selectCurrentStories = (state) => state.stories.currentStories
  .sort((a, b) => (b.score || 0) - (a.score || 0))
export const selectAllCurrentStories = (state) => !selectCurrentAuthor(state)
  ? selectStories(state)
  : selectCurrentAuthor(state).submitted

export const selectStoriesIdsByPage = (state) => {
  const stories = (selectCurrentAuthor(state) || {}).submitted || selectStories(state)
  const perPage = selectPerPage(state)
  const page = selectPage(state)
  const startIndex = perPage * page - perPage
  const endIndex = startIndex + perPage > stories.length ? stories.length - 1 : startIndex + perPage
  return stories.slice(startIndex, endIndex)
}
export const selectStoriesByPage = (state) => {
  const currentStoriesIds = selectStoriesIdsByPage(state)
  const fetchedStories = selectFetchedStories(state)
  return currentStoriesIds.map(id => fetchedStories[id] || id)
}

export const selectLoading = (state) => state.stories.loading
