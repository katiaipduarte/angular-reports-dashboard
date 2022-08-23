import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '@custom-material/custom-material.module';
import { LoaderInterceptor } from '@loader';
import { SharedModule } from 'app/shared/shared.module';
import { EnsureModuleImportedOnceGuard } from './guards/ensure-module-imported-once.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, CustomMaterialModule, SharedModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule extends EnsureModuleImportedOnceGuard {
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent, 'CoreModule');
  }
}
