import React from 'react'
import PropTypes from 'prop-types'
import NavigatorContainer from '../../containers/NavigatorContainer'
import './PageLayout.less'
import '../../styles/main.less'

const PageLayout = ({ children }) => {
    const screenHeight = screen.height || window.innerHeight
    var height = `${screenHeight - 24}px`
    const coreHeight = `${screenHeight - 65}px`
    return <div className='container text-center' style={{ height: height }}>
            {<NavigatorContainer />}
        <div className='core-layout__viewport' style={{ height: coreHeight }}>
            {children}
        </div>
    </div>
}

PageLayout.propTypes = {
    children : PropTypes.element.isRequired
}

export default PageLayout
// {<NavigatorContainer />}
