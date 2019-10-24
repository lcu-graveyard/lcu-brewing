import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule } from '@lcu/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LcuBrewingBrewingAnalyticsElementComponent } from './elements/brewing-analytics/brewing-analytics.component';

@NgModule({
  declarations: [LcuBrewingBrewingAnalyticsElementComponent],
  imports: [
    FathymSharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [LcuBrewingBrewingAnalyticsElementComponent],
  entryComponents: [LcuBrewingBrewingAnalyticsElementComponent]
})
export class LcuBrewingModule {}
