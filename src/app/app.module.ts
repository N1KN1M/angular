import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterModule} from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {HttpClientModule} from '@angular/common/http';
import {MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UPIComponent } from './components/upi/upi.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    QuantitySelectorComponent,
    HeaderComponent,
    CheckoutComponent,
    UPIComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: '', component: ItemsComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'payment/upi', component: UPIComponent},
      {path: 'payment/creditCard', component: CreditCardComponent}]
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
