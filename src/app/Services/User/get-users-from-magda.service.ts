import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserMagda} from '../../Models/UserMagda';

const httpHeaders = {
  headers: new HttpHeaders(
      {'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://restapi97.herokuapp.com/',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, PUT, PATCH, POST, DELETE',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'})
};

@Injectable({
  providedIn: 'root'
})
export class GetUsersFromMagdaService {

  constructor(private http: HttpClient) { }

  getAllUsersFromMagdaApi() {
    return this.http.get<UserMagda[]>(
      'https://restapi97.herokuapp.com/api/accounts', httpHeaders);
  }

}
