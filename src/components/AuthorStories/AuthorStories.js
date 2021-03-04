import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { fetchAuthorInfo } from '../../store/storiesReducer'

const AuthorStories = ({ authorId }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAuthorInfo(authorId))
  }, [])
  return (
    <List component="nav">
      <ListItem
        button
        component="a"
        href="#simple-list"
      >
        <ListItemText primary={authorId} />
      </ListItem>
    </List>
  )
}

export default AuthorStories
