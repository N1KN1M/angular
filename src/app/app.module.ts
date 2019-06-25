import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule, RouterLink} from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    QuantitySelectorComponent,
    HeaderComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path: '', component: ItemsComponent},
      {path: 'checkout', component: CheckoutComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
