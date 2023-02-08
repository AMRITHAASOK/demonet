import axios from "axios";
import { R_SUCESS,R_FAILURE } from "../constants/restaurantsconstants";

export const RestaurantListAction=() => async(dispatch)=>{
    try{
        const result = await axios.get('/restaurants.json')
        console.log(result.data.restaurants);
        dispatch({
            type:R_SUCESS,
            payload:result.data.restaurants
        })
    }
    catch(error){
        dispatch({
            type:R_FAILURE,
            error:error
        })
    }
  
}
