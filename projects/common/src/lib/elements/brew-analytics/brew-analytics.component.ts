import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuBrewingBrewAnalyticsElementState {}

export class LcuBrewingBrewAnalyticsContext extends LCUElementContext<LcuBrewingBrewAnalyticsElementState> {}

export const SelectorLcuBrewingBrewAnalyticsElement = 'lcu-brewing-brew-analytics-element';

@Component({
  selector: SelectorLcuBrewingBrewAnalyticsElement,
  templateUrl: './brew-analytics.component.html',
  styleUrls: ['./brew-analytics.component.scss']
})
export class LcuBrewingBrewAnalyticsElementComponent extends LcuElementComponent<LcuBrewingBrewAnalyticsContext> implements OnInit {
  //  Fields

  //  Properties

  //  Constructors
  constructor(protected injector: Injector) {
    super(injector);
  }

  //  Life Cycle
  public ngOnInit() {
    super.ngOnInit();
  }

  //  API Methods

  //  Helpers
}
