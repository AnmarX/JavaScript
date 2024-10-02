import './Style/CSS_UserGreeting.css'
import PropTypes from 'prop-types'

const UserGretting = (props) => {

    // if (props.isLoggedIn) {
    //     return <h2> Welcome {props.username}</h2>
    // }
    // else {
    //     return <h2>please log in to contiune</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message"> Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">please log in to contiune</h2>

    return props.isLoggedIn ? welcomeMessage : loginPrompt


}
UserGretting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGretting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default UserGretting