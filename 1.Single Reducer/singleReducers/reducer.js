
const isState = {
    name: "ramesh",
    wishes: ['eat', 'sleep']
}

const reducer = (state = isState, action) => {
    if (action.type === 'Change_Name') {
        return {
            ...state,
            name: action.payload
        }
    }
    return state;
}

export default reducer