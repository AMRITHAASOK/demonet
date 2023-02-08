import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcard from './Restaurantcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestaurantListAction} from '../Actions/restaurantlistAction'
import { useDispatch, useSelector } from 'react-redux';
function Restaurantlist() {
    const [allRestaurants,setRestaurants] = useState([])
  // const getRestaurants = async ()=>{
  //   await fetch('/restaurants.json')
  //   .then((data)=>{
  //     data.json()
  //     .then((result)=>{
  //       // console.log(result);
  //       setRestaurants(result.restaurants)
  //     })
       

  //   })
  // }
  const dispatch = useDispatch()
  const result= useSelector(state=>state.restaurantReducer)
 console.log(result);
  const {restaurantList} = result

  // console.log(allRestaurants);
  useEffect(()=>{
   // getRestaurants();
    dispatch(RestaurantListAction())
  },[])
  
    return (
    <Row>
      {
        restaurantList.map(item=>(
      <Col sm={12} md={6} lg={4} xl={3}>
        {/* <h1>{item.name}</h1> */}
        <Restaurantcard restaurant={item}/>
        </Col>
        ))
      }
    </Row>
  )
}

export default Restaurantlist