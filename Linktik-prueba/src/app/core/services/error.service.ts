import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor( ) { }
  msjError(e: HttpErrorResponse){
    if(e.error.msg) {
      Notiflix.Notify.failure(`${e.error.msg}`);
    } else {
      Notiflix.Notify.failure('Ha ocurrido un error, comuniquese con el administrador');
    }
  }
}
