import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  userList: any []=[] ; 

  constructor() {
   }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    
    var requestObject = new XMLHttpRequest();
    requestObject.overrideMimeType('application/json');
    console.log(requestObject);
    requestObject.open('GET','../../../assets/files/MOCK_DATA.json', true);
    requestObject.onreadystatechange = ()=>{
      if(requestObject.readyState == 4 && requestObject.status ==200){
        this.userList = JSON.parse(requestObject.responseText);
        console.log(requestObject);
        console.log(this.userList);
      }
    };
    requestObject.send(null);
  }



}
