import MainStories from '../view/MainStories/MainStories'
import AuthorStories from '../view/AuthorStories/AuthorStories'

const routes = [
  {
    path: '/',
    exact: true,
    component: MainStories
  },
  {
    path: '/author',
    component: AuthorStories
  }
]

export default routes
