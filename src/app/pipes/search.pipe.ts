import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })

export class SearchPipe implements PipeTransform {

  transform(categories: any, searchText: any): any {
    if (searchText == null) return categories;

    return categories.filter(function(category) {

      return category.InternalName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

    })
  }
}
