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
    this.matIconRegistry.addSvgIcon('send', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/send-icon.svg'));
    this.matIconRegistry.addSvgIcon('two_columns', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/two-columns-icon.svg'));
    this.matIconRegistry.addSvgIcon(
      'three_columns', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/three-columns-icon.svg'));
    this.matIconRegistry.addSvgIcon('done', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/done-icon.svg'));
    this.matIconRegistry.addSvgIcon('edit', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/pen-icon.svg'));
    this.matIconRegistry.addSvgIcon('drag', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/drag-icon.svg'));
    this.matIconRegistry.addSvgIcon('delete', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/delete-icon.svg'));
    this.matIconRegistry.addSvgIcon('cross-thin', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/cross-thin-icon.svg'));
    this.matIconRegistry.addSvgIcon('save', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/save-icon.svg'));
  }
}
