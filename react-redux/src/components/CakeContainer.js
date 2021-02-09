import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Num of Cakes- {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}
const mapStateProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(
    mapStateProps,
    mapDispatchToProps
)(CakeContainer)
