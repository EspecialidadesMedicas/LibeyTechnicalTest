import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UsercardsComponent } from "./User/user/usercards/usercards.component";
import { UsermaintenanceComponent } from "./User/user/usermaintenance/usermaintenance.component";
import { UserListComponent } from "./User/features/user-list/user-list.component";
import { UserDetailComponent } from "./User/features/user-detail/user-detail.component";  

const routes: Routes = [
	{
		path: "",
		redirectTo: "/user/card",
		pathMatch: "full",
	},
	{
		path: "user",
		children: [
			{ path: "card", component: UsercardsComponent },
			{ path: "maintenance", component: UsermaintenanceComponent },
			{ path: "list", component: UserListComponent },
			{ path: "detail/:documentNumber", component: UserDetailComponent },  



		],
	},
	{ path: "**", component: AppComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }