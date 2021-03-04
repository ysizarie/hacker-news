import { useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import Pagination from '@material-ui/lab/Pagination'

import { fetchPageStories, setPage } from '../../store/storiesReducer'
import {
  selectPage,
  selectPerPage,
  selectAllCurrentStories
} from '../../store/selectors/stories'

import './Paginator.scss'

export default function Paginator () {
  const dispatch = useDispatch()
  const currentStories = useSelector(selectAllCurrentStories)
  const totalCount = currentStories.length
  const perPage = useSelector(selectPerPage)
  const page = useSelector(selectPage)
  const pagesCount = useMemo(() => {
    return Math.ceil(totalCount / perPage)
  }, [perPage, totalCount])

  const handleSetPage = (event, value) => {
    dispatch(setPage(value))
    dispatch(fetchPageStories())
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Pagination
      className="paginator"
      count={pagesCount}
      page={page}
      onChange={handleSetPage}
    />
  )
}
