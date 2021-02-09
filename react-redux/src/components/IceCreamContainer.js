import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice creams - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy ice cream</button>
        </div>
    )
}
const mapStateProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateProps,
    mapDispatchToProps
)(IceCreamContainer)

