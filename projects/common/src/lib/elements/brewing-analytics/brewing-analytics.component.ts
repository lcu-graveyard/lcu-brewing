import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuBrewingBrewingAnalyticsElementState {}

export class LcuBrewingBrewingAnalyticsContext extends LCUElementContext<LcuBrewingBrewingAnalyticsElementState> {}

export const SelectorLcuBrewingBrewingAnalyticsElement = 'lcu-brewing-brewing-analytics-element';

@Component({
  selector: SelectorLcuBrewingBrewingAnalyticsElement,
  templateUrl: './brewing-analytics.component.html',
  styleUrls: ['./brewing-analytics.component.scss']
})
export class LcuBrewingBrewingAnalyticsElementComponent extends LcuElementComponent<LcuBrewingBrewingAnalyticsContext> implements OnInit {
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
