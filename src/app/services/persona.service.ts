import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonasI } from '../models/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas:PersonasI[]
  private api:'http://127.0.0.1:3333/Persona'
  constructor(private httpClient:HttpClient, private router:Router) { }

  postPersona(persona:PersonasI): Observable<PersonasI>{
    return this.httpClient.post<PersonasI>(this.api,persona).pipe()
  }
}
