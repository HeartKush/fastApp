import { analyzeAndValidateNgModules } from '@angular/compiler';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: any;
  detail: any ;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
    this.getDetail();
  }

  getDetail(){
    var requestObject = new XMLHttpRequest();
    requestObject.overrideMimeType('application/json');
    console.log(requestObject);
    requestObject.open('GET','../../../assets/files/MOCK_DATA.json', true);
    requestObject.onreadystatechange = ()=>{
      if(requestObject.readyState == 4 && requestObject.status ==200){
        const dataList = JSON.parse(requestObject.responseText);
        this.detail = dataList.find((element:any) => element.id == parseInt(this.id));
        console.log(dataList);
        console.log(this.detail);
        console.log(this.id);
      }
    };
    requestObject.send(null);
  }
}
