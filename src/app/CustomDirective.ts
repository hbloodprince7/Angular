import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector:'[color]'
})
export class CustomDirective implements OnInit{
    @Input() color! : string;
    constructor(){}
    ngOnInit(): void {
    }
}
