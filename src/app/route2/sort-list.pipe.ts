import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./model";

@Pipe({
    name: 'mysort'
})
export class SortListPipe implements PipeTransform {
    transform(list: Product[], order: number) {
        if(order === 0) 
        return list.sort((a,b) => a.price - b.price);
        else
        return list.sort((a,b) => b.price - a.price);
        // throw new Error("Method not implemented.");
    }
    
}