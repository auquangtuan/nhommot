
import { roleServices } from "~/services/RoleServices";
import { GET_ALL_ROLE } from "../constants/Login";

export const getRoleAction = () => {
    return async (dispatch) => {
        try {
            const resuilt = await roleServices.getRole();
            if(resuilt.status=== 200) {
                dispatch({
                    type: GET_ALL_ROLE,
                    role: resuilt.data
                }) 
            }
        } catch (error) {
            console.log("Error GET ROLE")
        }
    }
}