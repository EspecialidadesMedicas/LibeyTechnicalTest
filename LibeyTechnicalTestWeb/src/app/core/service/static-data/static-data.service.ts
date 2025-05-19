// static-data.service.ts
import { Injectable } from '@angular/core';
import { DocumentType, Region, Province, Ubigeo } from 'src/app/entities/libeyuser';

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  getDocumentTypes(): DocumentType[] {
    return [
      { id: 1, description: 'DNI' },
      // { id: 2, description: 'Pasaporte' },
      // { id: 3, description: 'Carnet de Extranjería' },
    ];
  }

  getRegions(): Region[] {
    return [
  { regionCode: '01', description: 'Amazonas' },
  { regionCode: '02', description: 'Ancash' },
  { regionCode: '03', description: 'Apurimac' },
  { regionCode: '04', description: 'Arequipa' },
  { regionCode: '05', description: 'Ayacucho' },
  { regionCode: '06', description: 'Cajamarca' },
  { regionCode: '07', description: 'Callao' },
  { regionCode: '08', description: 'Cusco' },
  { regionCode: '09', description: 'Huancavelica' },
  { regionCode: '10', description: 'Huanuco' },
  { regionCode: '11', description: 'Ica' },
  { regionCode: '12', description: 'Junin' },
  { regionCode: '13', description: 'La Libertad' },
  { regionCode: '14', description: 'Lambayeque' },
  { regionCode: '15', description: 'Lima' },
  { regionCode: '16', description: 'Loreto' },
  { regionCode: '17', description: 'Madre de Dios' },
  { regionCode: '18', description: 'Moquegua' },
  { regionCode: '19', description: 'Pasco' },
  { regionCode: '20', description: 'Piura' },
  { regionCode: '21', description: 'Puno' },
  { regionCode: '22', description: 'San Martin' },
  { regionCode: '23', description: 'Tacna' },
  { regionCode: '24', description: 'Tumbes' },
  { regionCode: '25', description: 'Ucayali' },
    ];
  }
  

getProvinces(): Province[] {
  return [
    { provinceCode: '1501', regionCode: '15', description: 'Lima' },
    { provinceCode: '1502', regionCode: '15', description: 'Barranca' },
    { provinceCode: '1503', regionCode: '15', description: 'Cajatambo' },
    { provinceCode: '1504', regionCode: '15', description: 'Canta' },
    { provinceCode: '1505', regionCode: '15', description: 'Cañete' },
    { provinceCode: '1506', regionCode: '15', description: 'Huaral' },
    { provinceCode: '1507', regionCode: '15', description: 'Huarochiri' },
    { provinceCode: '1508', regionCode: '15', description: 'Huaura' },
    { provinceCode: '1509', regionCode: '15', description: 'Oyon' },
    { provinceCode: '1510', regionCode: '15', description: 'Yauyos' }
  ];
}


getUbigeo(): Ubigeo[] {
  return [
    { ubigeoCode: '150101', provinceCode: '1501', regionCode: '15', description: 'Lima' },
    { ubigeoCode: '150102', provinceCode: '1501', regionCode: '15', description: 'Ancon' },
    { ubigeoCode: '150103', provinceCode: '1501', regionCode: '15', description: 'Ate' },
    { ubigeoCode: '150104', provinceCode: '1501', regionCode: '15', description: 'Barranco' },
    { ubigeoCode: '150105', provinceCode: '1501', regionCode: '15', description: 'Breña' },
    { ubigeoCode: '150106', provinceCode: '1501', regionCode: '15', description: 'Carabayllo' },
    { ubigeoCode: '150107', provinceCode: '1501', regionCode: '15', description: 'Chaclacayo' },
    { ubigeoCode: '150108', provinceCode: '1501', regionCode: '15', description: 'Chorrillos' },
    { ubigeoCode: '150109', provinceCode: '1501', regionCode: '15', description: 'Cieneguilla' },
    { ubigeoCode: '150110', provinceCode: '1501', regionCode: '15', description: 'Comas' },
    { ubigeoCode: '150111', provinceCode: '1501', regionCode: '15', description: 'El Agustino' },
    { ubigeoCode: '150112', provinceCode: '1501', regionCode: '15', description: 'Independencia' },
    { ubigeoCode: '150113', provinceCode: '1501', regionCode: '15', description: 'Jesus Maria' },
    { ubigeoCode: '150114', provinceCode: '1501', regionCode: '15', description: 'La Molina' },
    { ubigeoCode: '150115', provinceCode: '1501', regionCode: '15', description: 'La Victoria' },
    { ubigeoCode: '150116', provinceCode: '1501', regionCode: '15', description: 'Lince' },
    { ubigeoCode: '150117', provinceCode: '1501', regionCode: '15', description: 'Los Olivos' },
    { ubigeoCode: '150118', provinceCode: '1501', regionCode: '15', description: 'Lurigancho' },
    { ubigeoCode: '150119', provinceCode: '1501', regionCode: '15', description: 'Lurin' },
    { ubigeoCode: '150120', provinceCode: '1501', regionCode: '15', description: 'Magdalena Del Mar' },
    { ubigeoCode: '150121', provinceCode: '1501', regionCode: '15', description: 'Pueblo Libre' },
    { ubigeoCode: '150122', provinceCode: '1501', regionCode: '15', description: 'Miraflores' },
    { ubigeoCode: '150123', provinceCode: '1501', regionCode: '15', description: 'Pachacamac' },
    { ubigeoCode: '150124', provinceCode: '1501', regionCode: '15', description: 'Pucusana' },
    { ubigeoCode: '150125', provinceCode: '1501', regionCode: '15', description: 'Puente Piedra' },
    { ubigeoCode: '150126', provinceCode: '1501', regionCode: '15', description: 'Punta Hermosa' },
    { ubigeoCode: '150127', provinceCode: '1501', regionCode: '15', description: 'Punta Negra' },
    { ubigeoCode: '150128', provinceCode: '1501', regionCode: '15', description: 'Rimac' },
    { ubigeoCode: '150129', provinceCode: '1501', regionCode: '15', description: 'San Bartolo' },
    { ubigeoCode: '150130', provinceCode: '1501', regionCode: '15', description: 'San Borja' },
    { ubigeoCode: '150131', provinceCode: '1501', regionCode: '15', description: 'San Isidro' },
    { ubigeoCode: '150132', provinceCode: '1501', regionCode: '15', description: 'San Juan De Lurigancho' },
    { ubigeoCode: '150133', provinceCode: '1501', regionCode: '15', description: 'San Juan De Miraflores' },
    { ubigeoCode: '150134', provinceCode: '1501', regionCode: '15', description: 'San Luis' },
    { ubigeoCode: '150135', provinceCode: '1501', regionCode: '15', description: 'San Martin De Porres' },
    { ubigeoCode: '150136', provinceCode: '1501', regionCode: '15', description: 'San Miguel' },
    { ubigeoCode: '150137', provinceCode: '1501', regionCode: '15', description: 'Santa Anita' },
    { ubigeoCode: '150138', provinceCode: '1501', regionCode: '15', description: 'Santa Maria Del Mar' },
    { ubigeoCode: '150139', provinceCode: '1501', regionCode: '15', description: 'Santa Rosa' },
    { ubigeoCode: '150140', provinceCode: '1501', regionCode: '15', description: 'Santiago De Surco' },
    { ubigeoCode: '150141', provinceCode: '1501', regionCode: '15', description: 'Surquillo' },
    { ubigeoCode: '150142', provinceCode: '1501', regionCode: '15', description: 'Villa El Salvador' },
    { ubigeoCode: '150143', provinceCode: '1501', regionCode: '15', description: 'Villa Maria Del Triunfo' }
  ];
}

}
