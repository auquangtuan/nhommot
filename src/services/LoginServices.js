import { baseServices } from "./baseServices";

export class LoginServices extends baseServices {

    constructor(){
        super();
    }
    
    getInfoLogin = (values) => {
        return this.post('api/users/login',values)
    }//https://restfulapi.dnd-group.net/api/login
}

export const loginServices = new LoginServices();