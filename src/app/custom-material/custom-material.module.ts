import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

const modules = [
  A11yModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CustomMaterialModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Sidebar Icons
    this.matIconRegistry.addSvgIcon(
      'option-one',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/sidebar/option-one.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'option-two',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/sidebar/option-two.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'option-three',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/sidebar/option-three.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'option-five',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/sidebar/option-five.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'reports',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/sidebar/reports.svg'),
    );
    //Icons
    this.matIconRegistry.addSvgIcon('menu-xpto', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/menu.svg'));
    //Others
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/logo.svg'));
    this.matIconRegistry.addSvgIcon('empty', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/images/empty.svg'));
  }
}
