import { useHistory } from 'react-router-dom'
import {
  Button,
  Container,
  Typography
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import './Header.scss'

export default function Header () {
  const history = useHistory()
  const goHome = () => {
    history.push('/')
  }
  return (
    <Container
      className="header"
    >
      <Button
        className="header__home-btn"
        onClick={goHome}
      >
        <HomeIcon />
      </Button>
      <Typography variant="body1" className="header__title">Best stories about hackers</Typography>
    </Container>
  )
}
