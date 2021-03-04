import PropTypes from 'prop-types'
import StoriesGrid from '../StoriesGrid/StoriesGrid'
import Paginator from '../Paginator/Paginator'

import './Stories.scss'

function Stories ({ stories }) {
  return (
    <main className="main-page">
      <StoriesGrid stories={stories} />
      <Paginator />
    </main>
  )
}

Stories.propTypes = {
  stories: PropTypes.array
}

export default Stories
