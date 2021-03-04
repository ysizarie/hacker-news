import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentStories } from '../../store/selectors/stories'
import { fetchStories, setCurrentAuthor } from '../../store/storiesReducer'
import Stories from '../../components/Stories/Stories'

const MainStories = () => {
  const dispatch = useDispatch()
  const stories = useSelector(selectCurrentStories)

  useEffect(() => {
    dispatch(setCurrentAuthor(-1))
    dispatch(fetchStories())
  }, []) // eslint-disable-line

  return (
    <Stories stories={stories} />
  )
}

export default MainStories
