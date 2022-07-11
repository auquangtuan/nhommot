import { configureStore } from "@reduxjs/toolkit";
import {UserReducer} from './reducers/UserReducer' 
import {AdminUserReducer} from './reducers/AdminUserReducer' 
import {AdminRoleReducer} from './reducers/AdminRoleReducer' 
import {AdminCateReducer} from './reducers/AdminCateReducer' 
export const store = configureStore({
    reducer : {
        UserReducer,
        AdminUserReducer,
        AdminRoleReducer,
        AdminCateReducer
    }
})