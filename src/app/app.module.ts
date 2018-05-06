import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';

import {BoxComponent} from './box.component';

@NgModule({
  declarations: [BoxComponent],
  imports: [BrowserModule],
  entryComponents: [BoxComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const BoxElement = createCustomElement(BoxComponent, {injector: this.injector});
    customElements.define('example-angular-elements-component-box', BoxElement);
  }
}
