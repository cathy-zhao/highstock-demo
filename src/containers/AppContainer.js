import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
var FastClick = require('fastclick')
FastClick.attach(document.body)

class AppContainer extends Component {
    static propTypes = {
        routes : PropTypes.object.isRequired,
        store  : PropTypes.object.isRequired
    }

    shouldComponentUpdate () {
        return false
    }

    render () {
        const { routes, store } = this.props

        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <Router history={hashHistory} children={routes} />
                </div>
            </Provider>
        )
    }
}

export default AppContainer
