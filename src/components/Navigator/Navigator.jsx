import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hashHistory } from 'react-router'
import './Navigator.less'
import loginIcon from './pic_share.png'
import backIcon from './navbar_back@3x.png'
// import KmmInteraction from '../../utils/kmm-interaction'

class Navigator extends Component {
    handleLogin () {
        if (!this.props.forward.path) {
            this.props.forward.handleForward && this.props.forward.handleForward()
            return
        }
        if (window.pageNum == undefined) {
            window.pageNum = 0
        }
        if (window.pageNum != undefined) {
            window.pageNum++
        }
        this.props.forward.path && hashHistory.push(this.props.forward.path)
    }
    handleBack () {
        console.log('跳转返回window.pageNum: ' + window.pageNum)
        if (window.pageNum == undefined || window.pageNum == 0) {
            console.log('调用原生返回接口')
            // KmmInteraction.closeNativeWindow()
        } else {
            window.pageNum--
            hashHistory.goBack()
        }
    }
    static defaultProps = {
        back: { show: true },
        forward: {
            showForwardIcom: false,
            forwardText: ''
        },
        component: null,
        show: true,
        current: {title: "标题"}
    }
    render () {
        // KmmInteraction.setH5TopFlag({ isHome: !this.props.back.show })
        const { back, current,
            forward: { forwardText, showForwardIcom }, show
        } = this.props

        const backSection = <div className='back' style={{ visibility: back.show ? 'visible' : 'hidden' }}>
            <div className='back-title' onClick={::this.handleBack}>
                <img src={backIcon} />
            </div>
            <div className='switch' />
        </div>

        const currentSection = <div className='current'>
            <div className='title'>
            {current.title}
            </div>
            <div className='switch' />
        </div>

        const forwardSection =
            <div className='forward'>
                <div className='title' onClick={::this.handleLogin}>
                {
                    showForwardIcom ? <img src={loginIcon} />
                    : <label>{forwardText}</label>
                }
                </div>
                <div className='switch' />
            </div>

        return (
            <div className='navigator-wrapper' style={{ display: show ? null : 'none' }}>
                <div className='navigator'>
                {backSection}
                {currentSection}
                {forwardSection}
                </div>
            </div>
        )
    }
}

Navigator.propTypes = {
    current: PropTypes.object,
    handleForward: PropTypes.func,
    forward: PropTypes.object
}

export default Navigator
