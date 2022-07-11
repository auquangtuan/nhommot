import { GET_ALL_ROLE } from "../constants/Login"

const stateDefault = {
    role : [
        
    ]
}

export const AdminRoleReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_ROLE : {
            console.log(action)
            state.role = action.role
            return {...state}
        }
    
        default:
            return {...state}
    }
}