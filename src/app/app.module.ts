import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfComponent } from './components/directive/ng-if/ng-if.component';
import { NgForComponent } from './components/directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/directive/ng-switch/ng-switch.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertyBindingComponent } from './components/dataBinding/property-binding/property-binding.component';
import { ClassbindingComponent } from './components/dataBinding/classbinding/classbinding.component';
import { StyleBindingComponent } from './components/dataBinding/style-binding/style-binding.component';
import { InterPolationComponent } from './components/dataBinding/inter-polation/inter-polation.component';
import { TwowayDataBindingComponent } from './components/dataBinding/twoway-data-binding/twoway-data-binding.component';
import { EventBindingComponent } from './components/dataBinding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    PropertyBindingComponent,
    ClassbindingComponent,
    StyleBindingComponent,
    InterPolationComponent,
    TwowayDataBindingComponent,
    EventBindingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
