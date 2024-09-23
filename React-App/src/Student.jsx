import './Style/CSS_Student.css'

const Student = (props) => {
    return (
        <div className="student" >
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>

    )

}

export default Student