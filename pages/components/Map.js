import  { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 
  'pk.eyJ1IjoiaGFyc2hicmFobXhhdHJpeWEiLCJhIjoiY2t2bmF0eGttMTZhNzJ3a2xhd3pvYzZ5ZiJ9.5wyePeG2vYsNUPBmtzI8HA';

const Map = (props) => {

    useEffect(() => {
    
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [73.152107, 22.309269],
        zoom: 11,
        })
        if(props.pickupCoordinates){
          AddToMap(map, props.pickupCoordinates)
        }
         if(props.dropoffCoordinates){
           AddToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates&& props.dropoffCoordinates){
          map.fitBounds([
            props.pickupCoordinates,
            props.dropoffCoordinates
          ], {
            padding:  60
          })
        }
      },[props.pickupCoordinates, props.dropoffCoordinates])
    
    // Create a new marker.
    const AddToMap =  (map, coordinates)=> {
    const marker = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    };
    return(
        <Wrapper id='map'>        </Wrapper>
    )
    
}

const Wrapper = tw.div`
flex-1 h-1/2
`
export default Map