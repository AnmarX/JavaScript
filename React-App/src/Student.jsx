import './Style/CSS_Student.css'
import PropTypes from 'prop-types'

const Student = (props) => {
    return (
        <div className="student" >
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>

    )

}
Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool

}

// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false
// }

export default Student