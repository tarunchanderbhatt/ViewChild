import { Directive, ElementRef, AfterViewInit } from "@angular/core";

@Directive({
  selector: "[appChangeColor]"
})
export class ChangeColorDirective implements AfterViewInit {
  constructor(private elementref: ElementRef) {}

  ngAfterViewInit() {
    this.elementref.nativeElement.style.background = "Green";
    this.elementref.nativeElement.style.color = "white";
    this.elementref.nativeElement.style.textAlign = "center";
    this.elementref.nativeElement.style.padding = "5px";
    this.elementref.nativeElement.style.fontSize = "25px";
  }

  changeColor(color: string) {
    this.elementref.nativeElement.style.color = color;
  }
}
