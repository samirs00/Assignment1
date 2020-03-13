import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { KeysPipe } from './pipes/keys.pipe';
import { ValuePipe } from './pipes/value.pipe';
import { CamelCaseToNormalPipe } from './pipes/camel-case-to-normal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    KeysPipe,
    ValuePipe,
    CamelCaseToNormalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
