import {useEffect, useState} from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';

const Confirm = () => {

    const router = useRouter()
    const {pickup, dropoff} = router.query
    
    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()
        
    const getPickupCoordinates=  (pickup) =>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`
            + new URLSearchParams({
                access_token : "pk.eyJ1IjoiaGFyc2hicmFobXhhdHJpeWEiLCJhIjoiY2t2bmF0eGttMTZhNzJ3a2xhd3pvYzZ5ZiJ9.5wyePeG2vYsNUPBmtzI8HA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
        
    }

    const getDropoffCoordinates=  (dropoff) =>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`
            + new URLSearchParams({
                access_token : "pk.eyJ1IjoiaGFyc2hicmFobXhhdHJpeWEiLCJhIjoiY2t2bmF0eGttMTZhNzJ3a2xhd3pvYzZ5ZiJ9.5wyePeG2vYsNUPBmtzI8HA",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            
            setDropoffCoordinates(data.features[0].center)
        })
        
    }

    useEffect(() =>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[])

    
    return(
        <Wrapper>
            <Map 
            pickupCoordinates = {pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}/>
            <RideContainer>
                <RideSelector>

                </RideSelector>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
    flex flex-1
`
const RideSelector = tw.div`
`
const ConfirmButtonContainer= tw.div`
`
