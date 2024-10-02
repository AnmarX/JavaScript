import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Food from './Components/Food.jsx'
import Card from './Components/Card.jsx'
import Button from './Buttons/Button.jsx'
import Student from './Student.jsx'
import UserGretting from './UserGreeting.jsx'

function App() {

  return (
    <div className='container vh-100'>

      <Header></Header>

      <div className='d-flex justify-content-center'>
        <UserGretting isLoggedIn={true} username="nmr"></UserGretting>
        <UserGretting isLoggedIn={true}></UserGretting>
      </div>

      <div className='d-flex justify-content-center flex-wrap'>
        <Student name="nemo" age={30} isStudent={true} ></Student>
        <Student name="anmar" age={90} isStudent={true} ></Student>
        <Student name="bordoga" age={10} isStudent={false} ></Student>
        <Student></Student>

      </div>

      <div className='d-flex justify-content-center flex-wrap'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <Food></Food>
      <Footer></Footer>
      <div className='d-flex justify-content-center'>
        <Button></Button>
      </div>
    </div>
  )
}

export default App