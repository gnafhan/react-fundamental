import React from 'react'
import Footer from './footer.layouts'
import Navigation from './navigation.layouts'

const MainLayouts = ({children, statusUp}) => {
    return(
        <React.Fragment>
            <Navigation isActive={true}/>
            <h1>{children}</h1>
            <Footer/>
        </React.Fragment>
    )
   }
export default MainLayouts