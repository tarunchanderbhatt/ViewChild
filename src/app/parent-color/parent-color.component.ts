import { Component, OnInit, ViewChild } from "@angular/core";
import { ChangeColorDirective } from "./../change-color.directive";
@Component({
  selector: "app-parent-color",
  templateUrl: "./parent-color.component.html",
  styleUrls: ["./parent-color.component.scss"]
})
export class ParentColorComponent implements OnInit {
  @ViewChild(ChangeColorDirective, { static: true })
  _changecolordirective: ChangeColorDirective;
  constructor() {}

  ngOnInit() {}

  colorVal(val: string) {
    this._changecolordirective.changeColor(val);
  }
}
