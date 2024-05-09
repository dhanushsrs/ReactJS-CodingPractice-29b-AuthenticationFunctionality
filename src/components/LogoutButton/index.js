// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onLogoutBtn = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-btn">
      <button type="button" onClick={onLogoutBtn}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
