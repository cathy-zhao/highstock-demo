import * as types from '../constants/ActionTypes'

const initialState = {
    current: {
        title: '交易1'
    },
    forward: {
        path: '',
        forwardText: '',
        showForwardIcom: false,
        handleForward: () => {}
    },
    back: {
        show: true
    },
    show: true
}
export const navigatorReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.CHANGE_PAGE:
        return { ...state, current: { ...state.current, title: action.title } }
    case types.CHANGE_FORWARD:
        return { ...state, forward: { ...state.forward, path: action.path, forwardText: action.forwardText, showForwardIcom: action.showForwardIcom, handleForward: action.handleForward } }
    case types.CHANGE_BACK:
        return { ...state, back: { ...state.back, show: action.show } }
    case types.HIDE_NAVIGATOR:
        return { ...state, show: action.show }
    default:
        return state
    }
}

export default navigatorReducer
