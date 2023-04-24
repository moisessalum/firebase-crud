import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  usersList: User[] = [];
  userObj: User = {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: ''
  };
  id: string = '';
  name: string = '';
  username: string = '';
  email: string = '';
  phone: string = '';

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllUsers();
  }

  getAllUsers(){
    this.data.listUsers().subscribe(res => {
      this.usersList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error')
    })
  }

  resetForm() {
    this.id  = '';
    this.name  = '';
    this.username  = '';
    this.email  = '';
    this.phone  = '';
  }

  addUser(){
    if(this.name == '' || this.username == '' || this.phone == '' || this.email == '') {
      alert('Fill all the parameters to add a user.')
    }

    this.userObj.id = '';
    this.userObj.name = this.name;
    this.userObj.username = this.username;
    this.userObj.email = this.email;
    this.userObj.phone = this.phone;

    this.data.addUser(this.userObj);

    this.resetForm();
  }

  updateUser(){

  }

  deleteUser(user: User){
    if(window.confirm('Delete user?')){    
      this.data.deleteUser(user);
    }
  }

}
