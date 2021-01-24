import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    const headers = new HttpHeaders().set('x-rapidapi-key', '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093');
    return this.http.get(`https://free-nba.p.rapidapi.com/players`, { headers: headers });
  }
  getPlayerSearch(search) {
    const headers = new HttpHeaders().set('x-rapidapi-key', '665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093');
    return this.http.get(`https://free-nba.p.rapidapi.com/players?per_page=1&search=${search}`, { headers: headers });
  }
}
