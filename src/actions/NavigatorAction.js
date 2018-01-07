import * as types from '../constants/ActionTypes'

export const changePage = (pageTitle) => {
    return {
        type: types.CHANGE_PAGE,
        title: pageTitle
    }
}

export const changeForward = (path, forwardText, showForwardIcom, handleForward) => {
    return {
        type: types.CHANGE_FORWARD,
        path: path,
        forwardText: forwardText,
        showForwardIcom: showForwardIcom,
        handleForward: handleForward
    }
}

export const hideNavigator = (hide) => {
    return {
        type: types.HIDE_NAVIGATOR,
        show: !hide
    }
}

export const changeBack = (showBack) => {
    return {
        type: types.CHANGE_BACK,
        show: showBack
    }
}
