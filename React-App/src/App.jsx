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
import UseState from './HooksUseState.jsx'
import OnChangeHandler from './OnChangeEventHandle.jsx'
import ColorPick from './ColorClicker.jsx'
import UpdateFunction from './updaterFunction.jsx'
import UpdateObject from './UpdateObject.jsx'
import UpdateArray from './UpdateArray.jsx'
import ArrayOfObject from './UpdateArrayOfObject.jsx'
import UseEffectFun from './useEffect.jsx'
import UseEffectCleanUp from './useEffectCleanUp.jsx'
import ComponentA from './useContext/ComponentA.jsx'
import UseRef from './useRef.jsx'


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

      <hr />
      {/* Hooks UseState */}
      <UseState></UseState>
      {/* Hooks UseState */}

      <hr />

      {/* Event handler onChange */}
      <OnChangeHandler></OnChangeHandler>
      {/* Event handler onChange */}

      <hr />

      {/* color pick */}
      <ColorPick></ColorPick>
      {/* color pick */}

      <hr />

      {/* update function */}
      <UpdateFunction></UpdateFunction>
      {/* update function */}


      {/* update object */}
      <UpdateObject></UpdateObject>
      {/* update object */}

      <hr />

      {/* update array */}
      <UpdateArray></UpdateArray>
      {/* update array */}

      <hr />

      {/* update array of objects */}
      <ArrayOfObject></ArrayOfObject>
      {/* update array of objects */}

      <hr />

      {/* use effect */}
      <UseEffectFun></UseEffectFun>
      {/* use effect */}

      <hr />

      {/* use effect clean up */}
      <UseEffectCleanUp></UseEffectCleanUp>
      {/* use effect clean up */}

      <hr />

      {/* use context */}
      <ComponentA />
      {/* use context */}

      <hr />

      {/* useRef */}
      <UseRef />
      {/* useRef */}





    </div >
  )
}

export default App