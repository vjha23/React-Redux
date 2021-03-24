
// const isState = {
//     name: "ramesh",
//     wishes: ['eat', 'sleep']
// }

const nameReducer = (state = '', action) => {
    if (action.type === 'Change_Name') {
        return action.payload
    }
    return state;
}

export default nameReducer