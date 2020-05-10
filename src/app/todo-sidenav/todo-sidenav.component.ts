import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { SidenavService } from './sidenav.service';
import { AngularFirestore, AngularFirestoreCollection, DocumentData } from '@angular/fire/firestore';
import { AuthService } from '../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'todo-sidenav',
  templateUrl: './todo-sidenav.component.html',
  styleUrls: ['./todo-sidenav.component.scss']
})
export class TodoSidenavComponent implements OnInit {
  public editLists = false;
  public newList: string;
  public lists$: Observable<DocumentData[]>;
  public listCollection: AngularFirestoreCollection<DocumentData>;
  public listsToRemove = {};

  constructor(private service: SidenavService,
              private firestore: AngularFirestore,
              private authService: AuthService,
              private router: Router) {
    this.authService.getUserId().then((user: User) => {
      this.listCollection = this.firestore.collection('users').doc(user.uid).collection('lists');
      this.lists$ = this.listCollection.valueChanges();
    });
  }

  ngOnInit() {

  }

  public createList() {
    this.service.createNewList(this.newList).then(() => {
      this.newList = '';
    }).catch(err => {
      console.log(err);
    });
  }

  public deleteList(list) {
    if (this.listsToRemove[list] !== list) {
      return this.listsToRemove[list] = list;
    }
    return this.listsToRemove[list] = null;
  }

  public cancelListsChanges() {
    this.editLists = false;
    this.listsToRemove = {};
  }

  public saveListsChanges() {
    this.service.deleteLists(this.listsToRemove);
    this.listsToRemove = {};
    this.editLists = false;
  }

  public selectList(listName) {
    this.router.navigate([`tasks/${listName}`]);
  }
}

