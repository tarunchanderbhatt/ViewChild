import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "theme",
  templateUrl: "./theme.component.html",
  styleUrls: ["./theme.component.scss"]
})
export class ThemeComponent implements OnInit, AfterViewInit {
  @ViewChild("fname", { static: true }) _fname: ElementRef;
  @ViewChild("state", { static: true }) _state: ElementRef;

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this._fname.nativeElement.style.backgroundColor = "skyblue";
    this._state.nativeElement.style.backgroundColor = "pink";
  }
}
