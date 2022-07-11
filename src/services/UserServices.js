import { baseServices } from "./baseServices";

export class UserServices extends baseServices {
    constructor() {
        super()
    }
    getUser = () => {
        return this.get(`api/users`)
    }
}

export const userServices = new UserServices();