import { GET_ALL_CATE } from "../constants/Login"

const stateDefault = {
    cate : [
        
    ]
}

export const AdminCateReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ALL_CATE : {
            state.cate = action.cate
            return {...state}
        }
    
        default:
            return {...state}
    }
}