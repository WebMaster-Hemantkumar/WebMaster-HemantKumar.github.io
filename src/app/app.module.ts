import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ReactformComponent } from './components/reactform/reactform.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { HttpClientModule } from '@angular/common/http';
import { RouteParameterComponent } from './components/route-parameter/route-parameter.component';
import { NgstyleComponent } from './components/directive/ngstyle/ngstyle.component';
import { NgForWithPushComponent } from './components/directive/ng-for-with-push/ng-for-with-push.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PostRequestComponent } from './components/post-request/post-request.component';
import { SimplePostComponent } from './components/simple-post/simple-post.component';
import { ContentsComponent } from './components/contents/contents.component';
import { CardComponent } from './components/card/card.component';
import { ContainerComponent } from './components/container/container.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';

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
    ReactformComponent,
    GetApiComponent,
    RouteParameterComponent,
    NgstyleComponent,
    NgForWithPushComponent,
    PostApiComponent,
    ParentComponent,
    ChildComponent,
    PostRequestComponent,
    SimplePostComponent,
    ContentsComponent,
    CardComponent,
    ContainerComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
