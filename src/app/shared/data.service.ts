import { Injectable } from '@angular/core';
// import {AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(private afs: AngularFirestore) { }

  // // create user
  // addUser(user: User) {
  //   user.id = this.afs.createId();
  //   return this.afs.collection('/Users').add(user);
  // }

  // // list users
  // listUsers() {
  //   return this.afs.collection('/Users').snapshotChanges();
  // }

  // // update user
  // updateUser(user: User) {
  //   this.deleteUser(user);
  //   this.addUser(user);
  // }

  // // delete user
  // deleteUser(user: User) {
  //   return this.afs.doc('/Users/'+user.id).delete();
  // }
}