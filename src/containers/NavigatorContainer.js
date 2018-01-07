import { connect } from 'react-redux'
import Navigator from '../components/Navigator/Navigator.jsx'
import { changePage } from '../actions/NavigatorAction'

const mapDispatchToProps = {
    handleLogin: () => {}
}

const mapStateToProps = (state) => {
    const { navigator } = state
    return {
        current: navigator.current,
        forward: navigator.forward,
        back: navigator.back,
        show: navigator.show
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
