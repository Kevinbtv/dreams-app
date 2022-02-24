import { useContext } from 'react'
import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>Dream Trips</div>
        <ul>
          <li>
            <Link to="/">Todos os Locais</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add Novo Local</Link>
          </li>
          <li>
            <Link to="/favorites">
              Meus Favoritos
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default MainNavigation
