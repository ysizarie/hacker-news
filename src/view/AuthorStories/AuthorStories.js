import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../utils/customHooks'
import { selectCurrentStories } from '../../store/selectors/stories'
import { fetchAuthorInfo } from '../../store/storiesReducer'
import Stories from '../../components/Stories/Stories'

const AuthorStories = () => {
  const dispatch = useDispatch()
  const stories = useSelector(selectCurrentStories)
  const query = useQuery()
  const authorId = query.get('id')

  useEffect(() => {
    dispatch(fetchAuthorInfo(authorId))
  }, [authorId]) // eslint-disable-line
  return (
    <Stories stories={stories} />
  )
}

export default AuthorStories
