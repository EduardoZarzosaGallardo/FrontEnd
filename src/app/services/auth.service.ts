import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs'
import { ProductosI} from '../models/productos'

@Injectable()

export class AuthService {

  AUTH_SERVER: string = 'http://127.0.0.1:3333';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/User`,
    user).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          //guardar token
          //this.saveToken(res.dataUser.accesToken,res.dataUser.expiresIn)
          this.saveToken(res.token)
        }
      })
    );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
    user).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          //guardar token
          //this.saveToken(res.dataUser.accesToken,res.dataUser.expiresIn)
          this.saveToken(res.token)
        }
      })
    );
  }

  logout():void {
    this.token = '';
    localStorage.removeItem("ACCES_TOKEN");
    localStorage.removeItem("EXPIRES_IN")
  }

 // private saveToken(token:string, expiresIn: string): void{
  private saveToken(token:string): void{
    localStorage.setItem("ACCES_TOKEN", token);
    //localStorage.setItem("EXPIRSE_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string{
    if (!this.token){
      this.token = localStorage.getItem("ACCES_TOKEN");
    }
    return this.token
  }
  private api = 'http://127.0.0.1:3333/Producto';
  getAllProductos():Observable<ProductosI[]> {
    return this.httpClient.get<ProductosI[]>(this.api)
  }

}
