import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuBrewingBrewsElementComponent } from './elements/brews/brews.component';

@NgModule({
  declarations: [LcuComponent, LcuDirective, LcuBrewingBrewsElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LcuComponent, LcuDirective, LcuBrewingBrewsElementComponent],
  entryComponents: [LcuBrewingBrewsElementComponent]
})
export class LcuBrewingModule {
  static forRoot(): ModuleWithProviders<LcuBrewingModule> {
    return {
      ngModule: LcuBrewingModule,
      providers: [LcuService]
    };
  }
}
