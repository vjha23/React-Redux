import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeWithPayload(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Num of Cakes- {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={props.buyCake(number)}>buy cake</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}


export default connect(
    mapStateProps,
    mapDispatchToProps
)(CakeWithPayload)
