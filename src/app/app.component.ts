import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/facebook-icon.svg'));
    this.matIconRegistry.addSvgIcon('google', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/google-icon.svg'));
    this.matIconRegistry.addSvgIcon('arrow-back', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/arrow-back-icon.svg'));
    this.matIconRegistry.addSvgIcon('hidden-password', this.domSanitizer.bypassSecurityTrustResourceUrl(
      './assets/icons/hidden-password-icon.svg'));
    this.matIconRegistry.addSvgIcon('shown-password', this.domSanitizer.bypassSecurityTrustResourceUrl(
      './assets/icons/shown-password-icon.svg'));
  }
}
