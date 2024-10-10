const profilePicture = () => {

    const imageURL = './src/assets/terminal.png'

    const handleClick5 = (e) => {
        e.target.style.display = "none"
        setTimeout(() => {
            e.target.style.display = "block"
        }, 1000)

    }

    return <img onClick={(e) => handleClick5(e)} style={{ width: "100px", cursor: "pointer" }} src={imageURL}></img>
}

export default profilePicture