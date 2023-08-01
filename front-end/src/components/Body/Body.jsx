import React from 'react'
import Event from "../Event/Event";
import { info,usercheck,users,userplus,mappin} from '../../assets';
import "./Body.css";
import Discount from "../Discount/Discount";
import UpCommingRide from '../UpCommingRide/UpCommingRide';



const Body = () => {
  return (
    <div>
    <Event/>
    <Discount/>
    <UpCommingRide/>
    </div>
  )
}

export default Body