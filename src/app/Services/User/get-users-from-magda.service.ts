import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserMagda} from '../../Models/UserMagda';

@Injectable({
  providedIn: 'root'
})
export class GetUsersFromMagdaService {

  constructor(private http: HttpClient) { }

  getAllUsersFromMagdaApi() {
    return this.http.get<UserMagda[]>('https://bankrobloxback.herokuapp.com/accounts/magda');
  }

}
