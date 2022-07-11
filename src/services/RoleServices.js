import { baseServices } from "./baseServices";

export class RoleServices extends baseServices {
    constructor() {
        super()
    }
    getRole = () => {
        return this.get(`api/role`)
    }
}

export const roleServices = new RoleServices();