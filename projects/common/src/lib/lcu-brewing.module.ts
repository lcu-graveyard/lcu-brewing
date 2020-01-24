import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuService } from './services/lcu.service';
import { LcuComponent } from './controls/lcu/lcu.component';
import { LcuDirective } from './directives/lcu.directive';
import { LcuBrewingBrewManagementElementComponent } from './elements/brew-management/brew-management.component';

@NgModule({
  declarations: [LcuComponent, LcuDirective, LcuBrewingBrewManagementElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [LcuComponent, LcuDirective, LcuBrewingBrewManagementElementComponent],
  entryComponents: [LcuBrewingBrewManagementElementComponent]
})
export class LcuBrewingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LcuBrewingModule,
      providers: [LcuService]
    };
  }
}
