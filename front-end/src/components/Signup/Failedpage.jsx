import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Failedpage.css";

const Failedpage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('/'); // Navigate to the home page after 5 seconds
        }, 3000); // 5000 milliseconds (5 seconds)
    
        return () => clearTimeout(timer); // Clean up the timer if the component unmounts
      }, [navigate]);
  return (
    <div  className="box"> 
        <div className="error alert">
    <div className="alert-body">
      Error!
      
    </div>
    
    </div></div>
  )
}

export default Failedpage