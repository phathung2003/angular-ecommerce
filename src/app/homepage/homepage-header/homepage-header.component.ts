import { Component } from '@angular/core';
@Component({
  selector: 'app-homepage-header',
  templateUrl: './homepage-header.component.html',
  styleUrls: ['./homepage-header.component.scss'],
})
export class HomepageHeaderComponent {
  search_text = '';
  cartItemCount = 300;
  notifyCount = 1000;
  items = ['Test'];

  get searchItems() {
    return this.items.filter((item) =>
      item.toLowerCase().includes(this.search_text.toLowerCase())
    );
  }
}
