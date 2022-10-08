import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  transform(value: any, searchValue:string,propertyName:string,propertyName2?:string,propertyName3?:string,propertyName4?:string,
    propertyName5?:string): any {
    if (!searchValue) return value;

    return value.filter((v:any) => v[propertyName].toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

}
}
