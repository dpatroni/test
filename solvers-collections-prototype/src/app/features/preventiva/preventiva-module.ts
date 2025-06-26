import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreventivaRoutingModule } from './preventiva-routing-module';
// Component imports removed as they are now standalone and handled by their own imports or routing.

@NgModule({
  declarations: [
    // Components removed as they are standalone
  ],
  imports: [
    CommonModule, // Kept for now, though components are standalone. Can be removed if module has no template.
    PreventivaRoutingModule
  ],
  exports: [
    // PreventivaHomeComponent removed as it's standalone and routing handles its exposure.
    // If this module were to be imported by another NgModule and expected to provide components,
    // then standalone components would be exported directly from here. But for routing, not needed.
  ]
})
export class PreventivaModule { }
