const current = (state = {}, action) => {

    switch (action.type) {
        case 'SET_CURRENT':
        {
            const newState = { currentArrival: action.payload };
            return Object.assign({}, state, newState)
        }

        default:
            return state
    }
}

export default current