import { baseServices } from "./baseServices";

export class Cateservices extends baseServices {
    constructor() {
        super()
    }
    getCate = () => {
        return this.get(`api/cate`)
    }
}

export const cateServices = new Cateservices();