import { Component, OnInit } from '@angular/core';
import { LibeyUserService } from 'src/app/core/service/libeyuser/libeyuser.service';
import { LibeyUser } from 'src/app/entities/libeyuser';
import { ActivatedRoute, Router } from '@angular/router';  // Importa Router también

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user!: LibeyUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,        // Ruta activa para obtener params
    private userService: LibeyUserService
  ) { }

  ngOnInit(): void {
    const documentNumber = this.route.snapshot.paramMap.get('documentNumber');
    if (documentNumber) {
      this.userService.getUserByDocument(documentNumber).subscribe((data) => {
        this.user = data;
      });
    }
  }
  goBack() {
    this.router.navigate(['/user/list']);   // Ahora sí puedes usar navigate
  }
}
