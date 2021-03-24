
const wishReducer = (state = [], action) => {
    if (action.type === 'add_wish') {
        return [...state, action.payload]
    }
    return state;
}
export default wishReducer