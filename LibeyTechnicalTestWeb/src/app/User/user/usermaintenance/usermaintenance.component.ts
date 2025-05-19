import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../../core/service/static-data/static-data.service';
import { DocumentType, Region, Province, Ubigeo } from 'src/app/entities/libeyuser';
import { LibeyUser } from 'src/app/entities/libeyuser'; // Tu interfaz
import { LibeyUserService } from '../../../core/service/libeyuser/libeyuser.service'; // Servicio para la API, ajusta path
import { Location } from '@angular/common';

@Component({
  selector: 'app-usermaintenance',
  templateUrl: './usermaintenance.component.html',
  styleUrls: ['./usermaintenance.component.css']
})
export class UsermaintenanceComponent implements OnInit {
  documentTypes: DocumentType[] = [];
  regions: Region[] = [];
  provinces: Province[] = [];
  districts: Ubigeo[] = [];

  selectedDocumentTypeId: number | null = null;
  documentNumber: string = '';
  name: string = '';
  fathersLastName: string = '';
  mothersLastName: string = '';
  address: string = '';
  selectedRegionCode: string | null = null;
  selectedProvinceCode: string | null = null;
  selectedUbigeoCode: string | null = null;
  phone: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private staticDataService: StaticDataService,
    private libeyUserService: LibeyUserService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.documentTypes = this.staticDataService.getDocumentTypes();
    this.regions = this.staticDataService.getRegions();
    this.provinces = this.staticDataService.getProvinces();
    this.districts = this.staticDataService.getUbigeo();
  }

Submit() {
  const newUser: LibeyUser = {
    documentTypeId: this.selectedDocumentTypeId,
    documentNumber: this.documentNumber,
    name: this.name,
    fathersLastName: this.fathersLastName,
    mothersLastName: this.mothersLastName,
    address: this.address,
    regionCode: this.selectedRegionCode,
    provinceCode: this.selectedProvinceCode,
    ubigeoCode: this.selectedUbigeoCode,
    phone: this.phone,
    email: this.email,
    password: this.password,
    active: true
  };

  if (!newUser.documentTypeId || !newUser.documentNumber || !newUser.name) {
    swal.fire('Error', 'Por favor, complete los campos obligatorios', 'warning');
    return;
  }

  this.libeyUserService.createUser(newUser).subscribe({
    next: () => {
      swal.fire('Éxito', 'Usuario creado correctamente', 'success');
      this.clearForm(); // 👉 limpiar formulario después del éxito
    },
    error: (err) => {
      swal.fire('Error', 'No se pudo crear el usuario', 'error');
      console.error(err);
    }
  });
}

  // Método para limpiar el formulario
  clearForm(): void {
    this.selectedDocumentTypeId = 1;
    this.documentNumber = '';
    this.name = '';
    this.fathersLastName = '';
    this.mothersLastName = '';
    this.address = '';
    this.selectedRegionCode = '';
    this.selectedProvinceCode = '';
    this.selectedUbigeoCode = '';
    this.phone = '';
    this.email = '';
    this.password = '';
  }

  // Método para volver a la página anterior
  goBack(): void {
    this.location.back();
  }
}
