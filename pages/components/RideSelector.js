import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { carList } from '../data/carList'

const  RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {

    const [rideDuration, setRideDuration] = useState(0)


    //Get Ride Duration from mapbox API
    //1. PickupCoordinates
    //2. DropoffCoordinates
    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaGFyc2hicmFobXhhdHJpeWEiLCJhIjoiY2t2bmF0eGttMTZhNzJ3a2xhd3pvYzZ5ZiJ9.5wyePeG2vYsNUPBmtzI8HA`)
        .then(res=> res.json())
        .then(data=> {
            setRideDuration(data.routes[0].duration/3600)
        })
    },[pickupCoordinates, dropoffCoordinates])
    console.log(rideDuration)
    return(
        <Wrapper>
            <Title> Choose a ride, or swipe up for more</Title>
            <CarList>
                { carList.map((car, index) => (
                    <Car key={index}>
                    <CarImage src={car.imgUrl} />
                    <CarDetails>
                        <Service>{car.service}</Service>
                        <Time> 5 min away</Time>
                    </CarDetails>
                    <Price>{'₹'+ ((rideDuration*car.multiplier)*150).toFixed(2)}</Price>
                </Car>
                ))}
                
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarDetails = tw.div`\
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`

const CarImage = tw.img`
h-14 mr-4
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
text-gray-500 text-center text-xs py-1 border-b
`
const CarList = tw.div`
overflow-y-scroll`

const Car = tw.div`
flex p-4 items-center
`
