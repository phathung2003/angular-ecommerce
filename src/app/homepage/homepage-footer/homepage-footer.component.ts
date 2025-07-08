import { Component } from '@angular/core';
import { VERSION } from '../../../version';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-homepage-footer',
  templateUrl: './homepage-footer.component.html',
  styleUrls: ['./homepage-footer.component.scss'],
})
export class HomepageFooterComponent {
  startYear = 2025;
  currentYear = new Date().getFullYear();
  projectVersion = VERSION + (environment.production ? '' : '_dev');

  get copyrightYear() {
    return this.startYear === this.currentYear
      ? `${this.startYear}`
      : `${this.startYear} - ${this.currentYear}`;
  }
}
