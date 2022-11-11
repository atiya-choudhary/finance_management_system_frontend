import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { DashboardComponent } from "./pages/admin/dashboard/DashboardComponent";
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AllproductComponent } from './pages/allproduct/allproduct.component';
import { ProductComponent } from './pages/product/product.component';
import { CardComponent } from './pages/card/card.component';
const routes: Routes = [

  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
    },

  {
  path:'signup',
  component: SignupComponent,
  pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
    },
    {
      path:'admin',
      component: DashboardComponent,
     
       canActivate: [AdminGuard],
        children:[
          {
            path:'',
            component:WelcomeComponent,
         },
         {
            path:'profile',
            component:ProfileComponent,
         },
      ],
      },
            {
        path:'user-dashboard',
    component:UserDashboardComponent ,
    pathMatch:'full',
    canActivate: [NormalGuard],
        },
        {
          path:'allproduct',
          component:AllproductComponent ,
          pathMatch:'full',
        },
         {
          path:'product/:id',
          component:ProductComponent ,
          pathMatch:'full',
        },
        {
          path:'card',
          component:CardComponent,
          pathMatch:'full'
        }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
