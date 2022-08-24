import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@core/core.module';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CoreModule, CustomMaterialModule, SharedModule],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'USD',
    },
  ],
})
export class AppModule {}
