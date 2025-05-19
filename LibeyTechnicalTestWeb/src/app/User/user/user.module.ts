import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercardsComponent } from './usercards/usercards.component';
import { UsermaintenanceComponent } from './usermaintenance/usermaintenance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from "@ng-select/ng-select";
import { RouterModule } from '@angular/router';
import { UserListComponent } from '../features/user-list/user-list.component';  // <--- Agrega esta línea
import { UserDetailComponent } from '../features/user-detail/user-detail.component';  // <--- Importa el componente aquí


@NgModule({
  declarations: [   
    UsercardsComponent,
    UsermaintenanceComponent,
    UserListComponent,
    UserDetailComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule ,
    RouterModule   
  ]
})
export class UserModule { }