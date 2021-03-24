// export const anothername = (name) => {
//     return {
//         type: 'Change_Name',
//         payload: name

//     }
// }

// export const anothername = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(res => res.json())
//             .then(res2 => {
//                 dispatch({ type: 'Change_Name', payload: res2[0].name })
//             })
//     }
// }

// using async await
export const anothername = () => {
    return async (dispatch) => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const res2 = await data.json()
        dispatch({ type: 'Change_Name', payload: res2[0].name })
    }
}