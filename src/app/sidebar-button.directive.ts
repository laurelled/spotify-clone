import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[sidebarButton]'
})
export class SidebarButtonDirective implements OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, "transition");
    this.renderer.addClass(this.el.nativeElement, "hover:text-white");
  }
}
