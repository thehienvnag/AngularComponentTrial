import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { BaitapVnModule } from "./baitap-vn/baitap-vn.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BaitapVnModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
