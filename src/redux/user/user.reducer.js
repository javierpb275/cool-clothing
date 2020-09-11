
//This is the initial state of this reducer:
const INITIAL_STATE = {
    currentUser: null
}


//The userReducer is the reducer that will store the state of our currentUser: 
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;

    }
}

export default userReducer;