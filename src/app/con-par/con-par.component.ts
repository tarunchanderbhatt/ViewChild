import { Component, OnInit, ViewChild } from "@angular/core";
import { ConComponent } from "../con/con.component";

@Component({
  selector: "con-par",
  templateUrl: "./con-par.component.html",
  styleUrls: ["./con-par.component.scss"]
})
export class ConParComponent implements OnInit {
  @ViewChild(ConComponent, { static: true }) concomponent: ConComponent;
  constructor() {}

  ngOnInit() {}

  inc() {
    this.concomponent.incrimentOne();
  }
  dic() {
    this.concomponent.dicrementOne();
  }
}
