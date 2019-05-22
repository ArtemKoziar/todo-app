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
  }
}
