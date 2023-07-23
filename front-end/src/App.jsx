import React from 'react'
import{Info,Header,Footer,Body} from "./components"
import {path as SvgImage} from "./assets"

const App = () => {
  return (<>
  {/* <div className="svg-container">
      <SvgImage className="styled-svg" />
    </div> */}
  <Header/>
  
  <Info/>
  <Body/>
  <Footer/>
  
  </>)
};

export default App