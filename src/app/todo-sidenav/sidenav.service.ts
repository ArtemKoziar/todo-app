import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  public createNewList(list) {
    return of(list);
  }
}
