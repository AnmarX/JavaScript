import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Food from './Components/Food.jsx'
import Card from './Components/Card.jsx'
import Button from './Buttons/Button.jsx'

function App() {

  return (
    <div className='container vh-100'>

      <Header></Header>

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