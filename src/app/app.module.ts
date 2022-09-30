import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MyComponent} from './MyComponent';
import { ForEachComponent } from './for-each/for-each.component';
import { IfExampleComponent } from './if-example/if-example.component';
import { CustomDirective } from './CustomDirective';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SortPipe } from './CustomSortPipe';
import { MyServiceComponent } from './my-service/my-service.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent, SortPipe, CustomDirective, MyComponent, ForEachComponent, IfExampleComponent, PipeExampleComponent, MyServiceComponent, EmployeeDetailsComponent, UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
