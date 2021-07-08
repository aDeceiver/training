import { Pipe, PipeTransform } from "@angular/core";
import { SortOrder } from "./enum/route2.enum";
import { Product } from "./model";

@Pipe({
    name: 'mysort'
})
export class SortListPipe implements PipeTransform {
    transform(list: Product[], order: SortOrder) {
        if (order === SortOrder.ASCENDING) {
            return list.sort((a, b) => a.price - b.price);
        }
        else {
            return list.sort((a, b) => b.price - a.price);
        }
    }

}