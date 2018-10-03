import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appSelectCard]'
})
export class SelectCardDirective {
    static clicked: number = 0;

    constructor(private elRef: ElementRef, private render: Renderer2) {
    }

    @HostListener('click')
    public onClick() {
        console.log(SelectCardDirective.clicked);
        if (SelectCardDirective.clicked < 2 && !this.elRef.nativeElement.classList.contains("select")) {
            this.render.addClass(this.elRef.nativeElement, "select");
            SelectCardDirective.clicked++;
            console.log("choose" + SelectCardDirective.clicked);
        }

        if (this.elRef.nativeElement.classList.contains("select")) {
            SelectCardDirective.clicked -= 1;
            this.render.removeClass(this.elRef.nativeElement, 'select')
        }
    }

}