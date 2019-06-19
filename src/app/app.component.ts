import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public appReady = true;

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('marker', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/marker-done.svg'));
    this.matIconRegistry.addSvgIcon('cross', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/cross-icon.svg'));
    this.matIconRegistry.addSvgIcon('more', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/more-icon.svg'));
    this.matIconRegistry.addSvgIcon('two_columns', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/two-columns-icon.svg'));
    this.matIconRegistry.addSvgIcon(
      'three_columns', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/three-columns-icon.svg'));
  }
}
