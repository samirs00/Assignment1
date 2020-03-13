import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testJSON: any = {
    "nodeOne": "string",
    
    "nodeThree": "number",
    "nodeFour": [
        {"elementOne": "string"},
        {"elementTwo": "number"},
        {"elementThree": "number"},
        {"elementFour": [
            {"elementFive": "Date"},
            {"elementSix": "number"}
        ]
      }
    ],
    "nodeTwo": "Date",
}
typeOf(value) {
  // console.log(value,typeof value)
  return typeof value;
}
checkTable(value){
  // console.log(value,typeof value)
  for(let key in value) {
    var infoJSON = value[key];
  }
  return typeof infoJSON;
}

}
