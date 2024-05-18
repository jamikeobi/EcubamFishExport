import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appImageHeader]'
})
export class ImageHeaderDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input('appImageHeader') position: 'relative' | 'absolute' = 'relative';
  @Input('appImageHeader') left: string = '10px';

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'position', this.position);
    this.renderer.setStyle(this.element.nativeElement, 'left', this.left);
  }

}
