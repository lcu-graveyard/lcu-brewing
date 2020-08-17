import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuBrewingModule, LcuBrewingBrewsElementComponent, SELECTOR_LCU_BREWING_BREWS_ELEMENT } from '@fathym-it/lcu-brewing-common';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FathymSharedModule,
    LcuBrewingModule.forRoot()
  ],
  providers: [
    {
      provide: LCUServiceSettings,
      useValue: FathymSharedModule.DefaultServiceSettings(environment)
    }
  ],
  exports: [LcuBrewingModule]
})
export class AppModule implements DoBootstrap {
	constructor(protected injector: Injector) {}

	public ngDoBootstrap() {
		const brews = createCustomElement(LcuBrewingBrewsElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_BREWING_BREWS_ELEMENT, brews);
	}
}
