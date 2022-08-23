import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DomSanitizer } from '@angular/platform-browser';

const modules = [A11yModule, MatProgressSpinnerModule];

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
  }
}
