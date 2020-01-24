import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FathymSharedModule, LCUServiceSettings } from '@lcu/common';
import { environment } from '../environments/environment';
import { LcuBrewingModule, LcuBrewingBrewManagementElementComponent, SELECTOR_LCU_BREWING_BREW_MANAGEMENT_ELEMENT } from '@fathym-it/lcu-brewing-common';
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
		const brewManagement = createCustomElement(LcuBrewingBrewManagementElementComponent, { injector: this.injector });

		customElements.define(SELECTOR_LCU_BREWING_BREW_MANAGEMENT_ELEMENT, brewManagement);
	}
}
