import { BrowserModule } from '@angular/platform-browser';  
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';   
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { DatePipe } from '@angular/common';
import { AuthGuard } from './Services/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.AuthModule)
      },

      {path:'error', loadChildren: () => import('./error/error.module').then(m=>m.ErrorModule)},

      {path:'',component:AppComponent,
      children:[
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
          .then(m => m.AdminModule)
      },
      { path: '', redirectTo: 'admin', pathMatch: 'full'},
      { path: '**', redirectTo: 'admin'},
    ],canActivate: [AuthGuard],data: {role: 'Admin'}},
    ]),

  ],
 
  providers: [DatePipe, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
