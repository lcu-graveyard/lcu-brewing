import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FathymSharedModule, MaterialModule } from '@lcu/common';
import { LcuBrewingBrewAnalyticsElementComponent } from './elements/brew-analytics/brew-analytics.component';

@NgModule({
  declarations: [LcuBrewingBrewAnalyticsElementComponent],
  imports: [
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [LcuBrewingBrewAnalyticsElementComponent],
  entryComponents: [LcuBrewingBrewAnalyticsElementComponent]
})
export class LcuBrewingModule {}
