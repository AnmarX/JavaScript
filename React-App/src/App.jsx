import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Food from './Components/Food.jsx'
import Card from './Components/Card.jsx'
import Button from './Buttons/Button.jsx'
import Student from './Student.jsx'

function App() {

  return (
    <div className='container vh-100'>

      <Header></Header>

      <div className='d-flex justify-content-center flex-wrap'>
        <Student name="nemo" age={30} isStudent={true} ></Student>
        <Student name="anmar" age={90} isStudent={false} ></Student>
        <Student name="bordoga" age={10} isStudent={false} ></Student>
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