import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'category' })

export class SearchPipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if (searchText == null) return categories;

    return categories.filter(function(category) {

      return category.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

    })
  }
}