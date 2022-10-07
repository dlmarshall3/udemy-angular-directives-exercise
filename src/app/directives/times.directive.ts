import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
    ) { }

    @Input('appTimes') set render(times: number){
      //clear out elements inside of view container
      this.viewContainer.clear();

      //recreate everything from scratch: look at view container, create new HTML inside provided by templateRef
      for(let i = 0; i < times; i++){
        this.viewContainer.createEmbeddedView(this.templateRef, {
          index: i //aliasing
        });
      }
    } 

}
