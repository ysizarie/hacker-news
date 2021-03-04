import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { setPage } from '../../store/storiesReducer'
import StoryCard from '../StoryCard/StoryCard'
import { useStyles } from '../../utils/styleHooks'
import { selectPerPage } from '../../store/selectors/stories'

import './StoriesGrid.scss'

function StoriesGrid ({ stories }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const perPage = useSelector(selectPerPage)
  const [skeletonItems, setTestStories] = useState([])

  useEffect(() => {
    dispatch(setPage(1))
    const testStories = []
    for (let i = 0; i < perPage; i++) {
      testStories.push(i)
    }
    setTestStories(testStories)
  }, []) // eslint-disable-line
  return (
    <section className={`${classes.root} stories-list`}>
      <Grid
        className="stories-list__grid"
        container
        spacing={3}
        justify="center"
        alignItems="center"
      >
        {(stories.length ? stories : skeletonItems).map((story, i) => (<StoryCard key={story.id||i} story={story} />))}
      </Grid>
    </section>
  )
}

StoriesGrid.propTypes = {
  stories: PropTypes.array
}

export default StoriesGrid
