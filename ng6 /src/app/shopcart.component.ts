
import { shopcartitem } from "./shopcartitem.component";

export class shopcart{
    id: string;
    user: string;
    balance: number;
    shoppingcart: Array<shopcartitem>;

    shopcart(){
        this.id = undefined;
        this.user = undefined;
        this.balance = 0;
    }

}
