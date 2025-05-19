import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LibeyUser } from "src/app/entities/libeyuser";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LibeyUserService {
  private baseUrl = `${environment.pathLibeyTechnicalTest}LibeyUser`;

  constructor(private http: HttpClient) {}

  /** GET: Obtener usuario por documento */
  getUserByDocument(documentNumber: string): Observable<LibeyUser> {
    return this.http.get<LibeyUser>(`${this.baseUrl}/get-user-by-document/${documentNumber}`);
  }

  /** GET: Obtener todos los usuarios */
  getAllUsers(): Observable<LibeyUser[]> {
    return this.http.get<LibeyUser[]>(`${this.baseUrl}/get-all-users`);
  }

  /** POST: Crear nuevo usuario */
  createUser(user: LibeyUser): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  /** PUT: Actualizar usuario */
  updateUser(documentNumber: string, user: LibeyUser): Observable<any> {
    return this.http.put(`${this.baseUrl}/${documentNumber}`, user);
  }

  /** DELETE: Eliminar usuario */
  deleteUser(documentNumber: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${documentNumber}`);
  }
}
