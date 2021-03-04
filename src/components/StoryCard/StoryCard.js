import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Skeleton from '@material-ui/lab/Skeleton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { useStyles } from '../../utils/styleHooks'
import { selectCurrentAuthorId, selectLoading } from '../../store/selectors/stories'

import './StoryCard.scss'

function StoryCard ({ story, xs = 7 }) {
  const history = useHistory()
  const classes = useStyles()
  const isLoading = useSelector(selectLoading)
  const authorId = useSelector(selectCurrentAuthorId)
  const goToAuthor = () => {
    history.push('/author?id=' + story.by)
  }
  return (
    <Grid
      item
      xs={xs}
      className={'story-card'}
    >
      {!isLoading && story.id
        ?
        <Card
          className={`${classes.paper} story-card__paper`}
          elevation={0}
        >
          {story.url &&
          <CardHeader
            title={<Link href={story.url}>{story.title}</Link>}
          />
          }
          {story.by && <Typography variant="body2" color="textSecondary">
            Author: {story.by}
          </Typography>}
          {story.score && <Typography variant="body2" color="textSecondary">
            Karma: {story.score} points
          </Typography>}
          {story.time && <Typography variant="body2" color="textSecondary">
            Created: {new Date(story.time).toLocaleDateString()}
          </Typography>}
          {story.text && (<Typography><span dangerouslySetInnerHTML={{__html: story.text}} /></Typography>)}
          {authorId === -1 &&
          <CardActions disableSpacing>
            <Button
              className="story-card__author-btn"
              onClick={goToAuthor}
            >
              Show more author stories
            </Button>
          </CardActions>}
        </Card>
        :
        <Skeleton
          className="story-card__skeleton"
          variant="rect"
          animation="wave"
          height={180}
        />
      }
    </Grid>
  )
}

StoryCard.propTypes = {
  song: PropTypes.object,
  xs: PropTypes.number
}

export default StoryCard
