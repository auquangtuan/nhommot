import { GET_ALL_USER } from "../constants/Login"

const stateDefault = {
    user : [
        
    ]
}

export const AdminUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_USER : {
            console.log(action)
            state.user = action.user
            return {...state}
        }
    
        default:
            return {...state}
    }
}