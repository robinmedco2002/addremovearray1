import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Add or Remove Employee List';

contactlist;
txtName;


ngOnInit() {
  this.contactlist=[  ]
}


addContact() {
  console.log(this.txtName);
  this.contactlist.push(
    {name: this.txtName}
  )
}

}



