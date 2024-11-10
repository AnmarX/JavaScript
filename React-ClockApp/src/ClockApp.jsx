import { useState, useEffect } from 'react'
import './clock.css'


const ClockApp = () => {


    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)

        }
    }, [])


    const formatTime = () => {
        let hours = time.getHours()
        const min = time.getMinutes()
        const sec = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridiem}`
    }


    const padZero = (number) => {

        return (number < 10 ? "0" : "") + number
    }




    return <>
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    </>


}

export default ClockApp