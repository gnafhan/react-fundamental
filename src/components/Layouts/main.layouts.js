    import React from 'react'
    import Navigation from './navigation.layouts'


    const MainLayouts = ({children}) => {
        return(
            <React.Fragment>
                <Navigation />
                <h1>{children}</h1>
            </React.Fragment>
        )
    }
    export default MainLayouts