import { Component, OnInit, Injector } from '@angular/core';
import { LCUElementContext, LcuElementComponent } from '@lcu/common';

export class LcuBrewingBrewManagementElementState {}

export class LcuBrewingBrewManagementContext extends LCUElementContext<LcuBrewingBrewManagementElementState> {}

export const SELECTOR_LCU_BREWING_BREW_MANAGEMENT_ELEMENT = 'lcu-brewing-brew-management-element';

@Component({
  selector: SELECTOR_LCU_BREWING_BREW_MANAGEMENT_ELEMENT,
  templateUrl: './brew-management.component.html',
  styleUrls: ['./brew-management.component.scss']
})
export class LcuBrewingBrewManagementElementComponent extends LcuElementComponent<LcuBrewingBrewManagementContext> implements OnInit {
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
