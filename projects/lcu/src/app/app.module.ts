import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { FathymSharedModule } from '@lcu/common';
import { BrowserModule } from '@angular/platform-browser';
import {
  LcuBrewingModule,
  LcuBrewingBrewAnalyticsElementComponent,
  SelectorLcuBrewingBrewAnalyticsElement
} from '@fathym-it/lcu-brewing-common';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, FathymSharedModule, LcuBrewingModule],
  exports: [LcuBrewingModule]
})
export class AppModule implements DoBootstrap {
  //  Constructors
  constructor(protected injector: Injector) {}

  //  Life Cycle
  public ngDoBootstrap() {
    const cfgMgr = createCustomElement(LcuBrewingBrewAnalyticsElementComponent, { injector: this.injector });

    customElements.define(SelectorLcuBrewingBrewAnalyticsElement, cfgMgr);
  }
}
