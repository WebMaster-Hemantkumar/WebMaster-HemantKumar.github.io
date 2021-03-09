import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/directive/ng-if/ng-if.component';
import { NgForComponent } from './components/directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/directive/ng-switch/ng-switch.component';
import { PropertyBindingComponent } from './components/dataBinding/property-binding/property-binding.component';
import { ClassbindingComponent } from './components/dataBinding/classbinding/classbinding.component';
import { StyleBindingComponent } from './components/dataBinding/style-binding/style-binding.component';
import { InterPolationComponent } from './components/dataBinding/inter-polation/inter-polation.component';
import { TwowayDataBindingComponent } from './components/dataBinding/twoway-data-binding/twoway-data-binding.component';
import { EventBindingComponent } from './components/dataBinding/event-binding/event-binding.component';
import { ReactformComponent } from './components/reactform/reactform.component';
import { GetApiComponent } from './components/get-api/get-api.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: AppComponent },
  { path: 'ngIf',component: NgIfComponent },
  { path: 'ngFor',component: NgForComponent },
  { path: 'ngSwitch',component: NgSwitchComponent },
  { path: 'PropertyBinding',component: PropertyBindingComponent },
  { path: 'ClassBinding',component: ClassbindingComponent },
  { path: 'StyleBinding',component: StyleBindingComponent },
  { path: 'EventBinding',component: EventBindingComponent },
  { path: 'EventBinding',component: EventBindingComponent },
  { path: 'InterPolation',component: InterPolationComponent },
  { path: 'TwowayDataBinding',component: TwowayDataBindingComponent },
  { path: 'ReactiveForm',component: ReactformComponent },
  { path: 'ApiCall',component: GetApiComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}