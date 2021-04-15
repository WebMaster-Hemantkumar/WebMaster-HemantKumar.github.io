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
import { RouteParameterComponent } from './components/route-parameter/route-parameter.component';
import{NgstyleComponent} from './components/directive/ngstyle/ngstyle.component';
import { NgForWithPushComponent } from './components/directive/ng-for-with-push/ng-for-with-push.component';
import{PostApiComponent} from './components/post-api/post-api.component'
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { SimplePostComponent } from './components/simple-post/simple-post.component';
import { ContentsComponent } from './components/contents/contents.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: AppComponent },
  { path: 'ngIf',component: NgIfComponent },
  { path: 'ngFor',component: NgForComponent },
  { path: 'ngSwitch',component: NgSwitchComponent },
  { path: 'PropertyBinding',component: PropertyBindingComponent },
  { path: 'ClassBinding',component: ClassbindingComponent },
  { path: 'StyleBinding',component: StyleBindingComponent },
  { path: 'ngStyle',component: NgstyleComponent },
  { path: 'PushWithngFor',component: NgForWithPushComponent },
  { path: 'EventBinding',component: EventBindingComponent },
  { path: 'EventBinding',component: EventBindingComponent },
  { path: 'InterPolation',component: InterPolationComponent },
  { path: 'TwowayDataBinding',component: TwowayDataBindingComponent },
  { path: 'ReactiveForm',component: ReactformComponent },
  { path: 'GetApiCall',component: GetApiComponent },
  { path: 'PostApiCall',component: PostApiComponent },
  { path: 'user/:id',component: RouteParameterComponent },
  { path: 'Parent',component: ParentComponent },
  { path: 'Child',component: ChildComponent },
  { path: 'PostRequest',component: PostRequestComponent },
  { path: 'SimplePost',component: SimplePostComponent },
  { path: 'Content',component: ContentsComponent },
  { path: 'Card',component: CardComponent },
  { path: 'NgContainer',component: ContainerComponent },
  { path: 'buy-Products',component: ParentComponentComponent },
  
  
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