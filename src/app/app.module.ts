import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { QuantitySelectorComponent } from './components/quantity-selector/quantity-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    QuantitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
