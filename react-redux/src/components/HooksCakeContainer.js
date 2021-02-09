import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    {/* equivalent to  mapStateProps*/ }
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    {/* equivalent to  mapDispatchToProps*/ }
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>buy hook cake</button>
        </div>
    )
}

export default HooksCakeContainer
