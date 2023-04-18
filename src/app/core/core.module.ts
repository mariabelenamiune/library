import { NgModule } from '@angular/core';
import { TopNavComponent } from '@core/components/top-nav/top-nav.component';
import { SharedModule } from '@shared/shared.module';
import { CoreRoutingModule } from '@core/core-routing.module';

@NgModule({
  declarations: [TopNavComponent],
  imports: [SharedModule, CoreRoutingModule],
  exports: [TopNavComponent]
})

export class CoreModule { }
