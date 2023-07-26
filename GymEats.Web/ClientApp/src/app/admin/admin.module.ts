import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { GetuserDetailsComponent } from './getuser-details/getuser-details.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../Services/auth.guard';
import { SettingComponent } from './setting/setting.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HomeComponent,
    GetuserDetailsComponent,
    DashboardComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    TableModule,
    ToolbarModule,
    CardModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterModule.forChild([

      { path:'', component: HomeComponent,
       children:
       [
          { path: 'get-users',component: GetuserDetailsComponent },
          { path: 'dashboard', component: DashboardComponent },
          {
            path: 'questions',
            loadChildren: () => import('../question/question.module')
                  .then(m => m.QuestionModule),
          },
          {
            path: 'options',
            loadChildren: () => import('../option/option.module')
                  .then(m => m.OptionModule),
          },
          {
            path: 'diets',
            loadChildren: () => import('../diet/diet.module')
                  .then(m => m.DietModule),
          },
          {path:'setting', component: SettingComponent},
          {path:'survey', 
           loadChildren: () =>import('../survey/survey.module')
                  .then(m => m.SurveyModule) 
          }

       ]},
      
    ])
  ]
})
export class AdminModule { }
