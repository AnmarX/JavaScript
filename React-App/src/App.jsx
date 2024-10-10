import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Food from './Components/Food.jsx'
import Card from './Components/Card.jsx'
import Button from './Buttons/Button.jsx'
import Student from './Student.jsx'
import UserGretting from './UserGreeting.jsx'
import List from './ListRender.jsx'
import ButtonClickEvent from './ClickEvent/ClickEvent.jsx'
import ProfilePicture from './ClickEvent/ClickEventProfilePic.jsx'

function App() {

  const fruits = [
    { id: 1, name: "beach", cal: 95 },
    { id: 2, name: "orange", cal: 100 },
    { id: 3, name: "banana", cal: 200 },
    { id: 4, name: "apple", cal: 34 },
    { id: 5, name: "coconut", cal: 82 },
    { id: 6, name: "rreq", cal: 132 }
  ]

  const vegetables = [
    { id: 7, name: "potato", cal: 80 },
    { id: 8, name: "celery", cal: 10 },
    { id: 9, name: "carrots", cal: 30 },
    { id: 10, name: "corn", cal: 55 },
    { id: 11, name: "brocooli", cal: 24 },
  ]

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

      {/* click event */}
      {fruits.length > 0 ? <List items={fruits} catagory="Fruits"></List> : null}
      {vegetables.length > 0 && <List items={vegetables} catagory="Vegetables"></List>}
      {/* click event */}



      {/* click event */}
      <ButtonClickEvent></ButtonClickEvent>
      <ProfilePicture></ProfilePicture>
      {/* click event */}

    </div>
  )
}

export default App