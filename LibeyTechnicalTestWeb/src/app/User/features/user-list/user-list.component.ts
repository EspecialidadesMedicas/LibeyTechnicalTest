import { Component, OnInit } from '@angular/core';
import { LibeyUserService } from 'src/app/core/service/libeyuser/libeyuser.service';
import { LibeyUser } from 'src/app/entities/libeyuser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: LibeyUser[] = [];
  filterText: string = '';

  constructor(private libeyUserService: LibeyUserService, private router: Router) { }

  ngOnInit(): void {
    console.log('UserlistComponent inicializado');

    this.loadUsers();
  }

  loadUsers(): void {
    this.libeyUserService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response;
        console.log('Usuarios cargados:', this.users);
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
      }
    });
  }

  filteredUsers(): LibeyUser[] {
    const term = this.filterText.toLowerCase();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term) ||
      user.documentNumber.includes(term)
    );
  }

deleteUser(user: LibeyUser): void {
  Swal.fire({
    title: '¿Estás seguro?',
    text: `Eliminar al usuario ${user.name} ${user.fathersLastName}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.libeyUserService.deleteUser(user.documentNumber).subscribe({
        next: () => {
          this.users = this.users.filter(u => u.documentNumber !== user.documentNumber);
          Swal.fire('Eliminado', 'El usuario fue eliminado con éxito.', 'success');
        },
        error: (err) => {
          console.error('Error al eliminar usuario:', err);
          Swal.fire('Error', 'Ocurrió un error al eliminar el usuario.', 'error');
        }
      });
    }
  });
}



  viewUser(user: LibeyUser) {
    this.router.navigate(['/user/detail', user.documentNumber]);
  }

    goBack() {
    this.router.navigate(['/user/card']);
  }
} 