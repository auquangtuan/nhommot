
import { cateServices } from "~/services/CateServices";
import { GET_ALL_CATE } from "../constants/Login";

export const getCateAction = () => {
    return async (dispatch) => {
        try {
            const resuilt = await cateServices.getCate();
            if(resuilt.status=== 200) {
                dispatch({
                    type: GET_ALL_CATE,
                    cate: resuilt.data
                }) 
            }
        } catch (error) {
            console.log("Error GET CATE")
        }
    }
}