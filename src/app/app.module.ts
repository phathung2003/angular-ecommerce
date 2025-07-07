import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageHeaderComponent } from './homepage/homepage-header/homepage-header.component';
import { HomepageFooterComponent } from './homepage/homepage-footer/homepage-footer.component';
import { SearchBarComponent } from './shared/common/search-bar/search-bar.component';
import { BannerComponent } from './homepage/banner/banner.component';
import { LucideAngularModule, ShoppingCart, User, Bell, Search } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomepageHeaderComponent,
    HomepageFooterComponent,
    SearchBarComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ ShoppingCart, User, Bell, Search }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
