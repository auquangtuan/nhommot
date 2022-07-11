
import { loginServices } from "~/services/LoginServices"
import { history } from "~/util/history";
import { LOGIN } from "../constants/Login";

export const getUserAction =(values)=> {

    return async (dispatch) => {
        try {
            const resuilt = await loginServices.getInfoLogin(values);
            if(resuilt.status === 200) {

                dispatch({
                    type: LOGIN,
                    values : resuilt.data
                })
            }
            const USER = JSON.parse(localStorage.USER_LOGIN).role
            if(USER === 1) {
                history.push('/admin')
            } else {
                history.back()
            }

            
        } catch (error) {
            console.log("Lỗi : ", error.response.data)
        }
    }
}