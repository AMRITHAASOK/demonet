import React,{ useEffect,useState, } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restop from './Restop';
import Restreview from './Restreview';
import { useDispatch, useSelector } from 'react-redux';

function Viewrestaurant() {
  const params = useParams()
  console.log(params.id);
  // const [allRestaurants,setRestaurants] = useState([])
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
  // console.log(allRestaurants);
  useEffect(()=>{
    //getRestaurants();

  },[])

  const result= useSelector(state=>state.restaurantReducer)
 console.log(result);
  const {restaurantList} = result
  //console.log(allRestaurants);

  const viewRest=restaurantList.find(item=>item.id==params.id)
  console.log(viewRest);
  return (
   <>
    {
      viewRest ?(
        <Row className='p-3'>
          <Col>
          <Image src={viewRest.photograph} fluid/>
          </Col>
          <Col>
          <p>ID:{viewRest.id}</p>
          <h1>{viewRest.name}</h1>
          <h5>Cuisine_type: {viewRest.cuisine_type}</h5>
          <h5>Neighborhood:{viewRest.neighborhood}</h5>
          <h6>Address:{viewRest.address}</h6>
          <Restop operate={viewRest.operating_hours}/>
          <br/>
          <br/><Restreview review={viewRest.reviews}/>
          </Col>
        </Row>
      ):'null'
    }
   </>
  )
}

export default Viewrestaurant