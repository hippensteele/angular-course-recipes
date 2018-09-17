import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    
    // isOpen: boolean = false;
    @HostBinding('class.open') isOpen: boolean = false;
   
    @HostListener('click') toggle(eventData: Event) {
        // if (this.isOpen){
        //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
        // } else {
        //     this.renderer.addClass(this.elRef.nativeElement, 'open');
        // }     
        this.isOpen = !this.isOpen;
   }
    
}