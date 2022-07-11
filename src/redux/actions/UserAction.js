
import { userServices } from "~/services/UserServices";
import { GET_ALL_USER } from "../constants/Login";

export const getUserAction = () => {
    return async (dispatch) => {
        try {
            const resuilt = await userServices.getUser();
            if(resuilt.status=== 200) {
                dispatch({
                    type: GET_ALL_USER,
                    user: resuilt.data
                }) 
            }
        } catch (error) {
            console.log("Error GET USER")
        }
    }
}