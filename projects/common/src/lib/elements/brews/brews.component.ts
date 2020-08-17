import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuBrewingBrewsElementState {}

export class LcuBrewingBrewsContext extends LCUElementContext<LcuBrewingBrewsElementState> {}

export const SELECTOR_LCU_BREWING_BREWS_ELEMENT = 'lcu-brewing-brews-element';

@Component({
  selector: SELECTOR_LCU_BREWING_BREWS_ELEMENT,
  templateUrl: './brews.component.html',
  styleUrls: ['./brews.component.scss']
})
export class LcuBrewingBrewsElementComponent extends LcuElementComponent<LcuBrewingBrewsContext> implements OnInit {
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
